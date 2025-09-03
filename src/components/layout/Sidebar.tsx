import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/useAuth';
import {
  Home,
  User,
  FileText,
  MessageSquare,
  HelpCircle,
  Shield,
  Users,
  Calendar,
  Folder,
  Calculator,
  TrendingUp,
  TrendingDown,
  BookOpen,
  Wrench,
  LogOut,
  Menu,
  X
} from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Home', path: '/dashboard', roles: ['admin', 'owner', 'tenant', 'accountant'] },
  { icon: User, label: 'My Profile', path: '/profile', roles: ['admin', 'owner', 'tenant', 'accountant'] },
  { icon: FileText, label: 'Get Ready for GST', path: '/gst', roles: ['admin', 'accountant'] },
  { icon: MessageSquare, label: 'Forums', path: '/forums', roles: ['admin', 'owner', 'tenant'] },
  { icon: HelpCircle, label: 'Helpdesk', path: '/helpdesk', roles: ['admin', 'owner', 'tenant'] },
  { icon: Shield, label: 'Gatekeeper', path: '/gatekeeper', roles: ['admin'] },
  { icon: Users, label: 'Directory', path: '/directory', roles: ['admin', 'owner', 'tenant'] },
  { icon: Calendar, label: 'Meetings', path: '/meetings', roles: ['admin', 'owner'] },
  { icon: Folder, label: 'Repository', path: '/repository', roles: ['admin', 'owner', 'tenant'] },
  { icon: Calculator, label: 'Accounting', path: '/accounting', roles: ['admin', 'accountant'] },
  { icon: TrendingUp, label: 'Income', path: '/income', roles: ['admin', 'accountant'] },
  { icon: TrendingDown, label: 'Expenditure', path: '/expenditure', roles: ['admin', 'accountant'] },
  { icon: BookOpen, label: 'Workflow', path: '/workflow', roles: ['admin'] },
  { icon: Wrench, label: 'Utilities', path: '/utilities', roles: ['admin'] },
];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { profile, signOut } = useAuth();
  const location = useLocation();

  const filteredMenuItems = menuItems.filter(item => 
    profile && item.roles.includes(profile.role)
  );

  const handleSignOut = () => {
    signOut();
    setIsOpen(false);
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b border-sidebar-border">
        <h2 className="text-xl font-bold text-sidebar-foreground">
          Society Manager
        </h2>
        <p className="text-sm text-sidebar-foreground/70 mt-1">
          {profile?.full_name} ({profile?.role})
        </p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {filteredMenuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <Button
          variant="ghost"
          onClick={handleSignOut}
          className="w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent"
        >
          <LogOut className="h-5 w-5" />
          Sign Out
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden fixed top-4 left-4 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-full w-72 bg-sidebar border-r border-sidebar-border z-40 transition-transform duration-300 ease-in-out lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <SidebarContent />
      </aside>

      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-72 bg-sidebar border-r border-sidebar-border">
        <SidebarContent />
      </aside>
    </>
  );
};