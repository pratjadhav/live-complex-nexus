import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { useLocation } from 'react-router-dom';
import { 
  Home, 
  User, 
  MessageSquare, 
  HelpCircle,
  Shield,
  Calendar,
  FileText,
  DollarSign,
  TrendingDown,
  Workflow,
  Settings,
  LogOut,
  Users,
  Building
} from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: User, label: 'My Profile', href: '/profile' },
  { icon: MessageSquare, label: 'Forums', href: '/forums' },
  { icon: FileText, label: 'Get Ready for GST', href: '/gst' },
  { icon: HelpCircle, label: 'Helpdesk', href: '/helpdesk' },
  { icon: Shield, label: 'Gatekeeper', href: '/gatekeeper' },
  { icon: Calendar, label: 'Meetings', href: '/meetings' },
  { icon: Building, label: 'Directory', href: '/directory' },
  { icon: FileText, label: 'Repository', href: '/repository' },
  { icon: DollarSign, label: 'Accounting', href: '/accounting' },
  { icon: TrendingDown, label: 'Income', href: '/income' },
  { icon: TrendingDown, label: 'Expenditure', href: '/expenditure' },
  { icon: Workflow, label: 'Workflow', href: '/workflow' },
  { icon: Settings, label: 'Utilities', href: '/utilities' },
];

export const Sidebar = () => {
  const { signOut, profile } = useAuth();
  const location = useLocation();

  return (
    <div className="w-64 h-full bg-sidebar text-sidebar-foreground flex flex-col">
      <nav className="flex-1 space-y-1 p-4">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Button
              key={item.label}
              variant="ghost"
              className={`w-full justify-start gap-3 text-left rounded-lg ${
                isActive 
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground' 
                  : 'text-sidebar-foreground hover:bg-sidebar-border hover:text-sidebar-foreground'
              }`}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <div className="mb-4">
          <p className="text-sm font-medium text-sidebar-foreground">{profile?.full_name}</p>
          <p className="text-xs text-sidebar-foreground/70 capitalize">{profile?.role}</p>
        </div>
        <Button 
          variant="ghost" 
          className="w-full justify-start gap-3 text-destructive hover:text-destructive hover:bg-destructive/10"
          onClick={signOut}
        >
          <LogOut className="h-5 w-5" />
          Sign Out
        </Button>
      </div>
    </div>
  );
};