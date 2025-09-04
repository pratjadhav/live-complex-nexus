import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { User } from '@supabase/supabase-js';
import { useToast } from '@/hooks/use-toast';

export interface UserProfile {
  id: string;
  full_name: string;
  role: 'admin' | 'owner' | 'tenant' | 'accountant';
  is_approved: boolean;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchProfile(session.user.id);
      } else {
        setLoading(false);
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null);
        if (session?.user) {
          fetchProfile(session.user.id);
        } else {
          setProfile(null);
          setLoading(false);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const fetchProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) throw error;
      setProfile(data);
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      toast({ title: "Signed in successfully" });
    } catch (error: any) {
      let errorMessage = error.message;
      let errorTitle = "Error signing in";
      
      if (error.message === "Email not confirmed") {
        errorTitle = "Email Not Confirmed";
        errorMessage = "Please check your email and click the confirmation link before signing in. Check your spam folder if you don't see it.";
      }
      
      toast({ 
        title: errorTitle, 
        description: errorMessage,
        variant: "destructive" 
      });
      throw error;
    }
  };

  const signUp = async (email: string, password: string, fullName: string, role: string) => {
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/`,
          data: {
            full_name: fullName,
            role: role,
          },
        },
      });
      if (error) throw error;
      toast({ 
        title: "Registration successful", 
        description: "Please check your email and click the confirmation link to complete registration." 
      });
    } catch (error: any) {
      toast({ 
        title: "Error signing up", 
        description: error.message,
        variant: "destructive" 
      });
      throw error;
    }
  };

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      toast({ title: "Signed out successfully" });
    } catch (error: any) {
      toast({ 
        title: "Error signing out", 
        description: error.message,
        variant: "destructive" 
      });
    }
  };

  return {
    user,
    profile,
    loading,
    signIn,
    signUp,
    signOut,
    isAuthenticated: !!user && !!profile?.is_approved,
  };
};