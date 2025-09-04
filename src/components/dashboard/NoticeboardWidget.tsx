import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useRealTimeData } from '@/hooks/useRealTimeData';

export const NoticeboardWidget = () => {
  const { data: notices } = useRealTimeData('notices');
  const recentNotices = notices.slice(0, 2);

  return (
    <Card className="bg-orange-500 text-white">
      <CardHeader>
        <CardTitle className="text-white">Noticeboard</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {recentNotices.map((notice) => (
          <div key={notice.id} className="border-l-2 border-white/30 pl-3">
            <p className="font-medium text-sm">{notice.title}</p>
            <p className="text-xs text-white/80">
              {new Date(notice.created_at).toLocaleDateString()}
            </p>
          </div>
        ))}
        {recentNotices.length === 0 && (
          <p className="text-sm text-white/80">No notices</p>
        )}
      </CardContent>
    </Card>
  );
};