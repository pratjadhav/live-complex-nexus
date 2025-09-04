import { useAuth } from '@/hooks/useAuth';
import { Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Home } from 'lucide-react';

export const Header = () => {
  const { profile, signOut } = useAuth();

  return (
    <header className="bg-header text-header-foreground px-6 py-4 flex items-center justify-between border-b border-sidebar-border">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Home className="h-6 w-6 text-sidebar-accent" />
          <span className="text-xl font-bold">UNITY HOMES</span>
        </div>
        <span className="text-muted-foreground">Society & Apartment Management System</span>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="text-header-foreground hover:bg-sidebar-accent/20">
          <Bell className="h-5 w-5" />
        </Button>
        
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-sidebar-accent text-sidebar-accent-foreground">
              {profile?.full_name?.charAt(0) || 'U'}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">{profile?.full_name || 'Admin User'}</span>
            <span className="text-xs text-muted-foreground capitalize">{profile?.role}</span>
          </div>
        </div>
        
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={signOut}
          className="text-header-foreground hover:bg-sidebar-accent/20"
        >
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};