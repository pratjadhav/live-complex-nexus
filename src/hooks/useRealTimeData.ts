import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { Database } from '@/integrations/supabase/types';

type TableNames = keyof Database['public']['Tables'];
type TableRow<T extends TableNames> = Database['public']['Tables'][T]['Row'];

export const useRealTimeData = <T extends TableNames>(
  table: T,
  select: string = '*',
  filter?: { column: string; value: any }
) => {
  const [data, setData] = useState<TableRow<T>[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let query = supabase.from(table).select(select);
        
        if (filter) {
          query = query.eq(filter.column, filter.value);
        }

        const { data: initialData, error } = await query;
        
        if (error) throw error;
        setData((initialData as any) || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Set up real-time subscription
    const channel = supabase
      .channel(`${table}-changes`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: table,
        },
        (payload) => {
          const { eventType, new: newRecord, old: oldRecord } = payload;
          
          setData(currentData => {
            switch (eventType) {
              case 'INSERT':
                return [...currentData, newRecord as any];
              case 'UPDATE':
                return currentData.map(item => 
                  (item as any).id === (newRecord as any).id ? newRecord as any : item
                );
              case 'DELETE':
                return currentData.filter(item => 
                  (item as any).id !== (oldRecord as any).id
                );
              default:
                return currentData;
            }
          });
        }
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, [table, select, filter?.column, filter?.value]);

  return { data, loading, error };
};