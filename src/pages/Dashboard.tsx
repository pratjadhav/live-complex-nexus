import { DashboardCard } from '@/components/dashboard/DashboardCard';
import { useRealTimeData } from '@/hooks/useRealTimeData';
import { useAuth } from '@/hooks/useAuth';
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Building, 
  Users, 
  UserCheck,
  MessageSquare,
  Bell,
  FileText
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Account {
  id: string;
  account_name: string;
  balance: number;
}

interface IncomeExpense {
  id: string;
  month: string;
  income: number;
  expense: number;
  per_unit: number;
}

interface ComplexStats {
  id: string;
  total_units: number;
  sold: number;
  unsold: number;
  owners: number;
  tenants: number;
  residents: number;
}

interface Complaint {
  id: string;
  description: string;
  status: string;
  created_at: string;
}

interface Notice {
  id: string;
  title: string;
  description: string;
  created_at: string;
}

export const Dashboard = () => {
  const { profile } = useAuth();
  const { data: accounts } = useRealTimeData('accounts');
  const { data: incomeExpenses } = useRealTimeData('income_expenses');
  const { data: complexStats } = useRealTimeData('complex_stats');
  const { data: complaints } = useRealTimeData('complaints');
  const { data: notices } = useRealTimeData('notices');

  const totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0);
  const currentMonth = incomeExpenses[0] || { income: 0, expense: 0, per_unit_cost: 0 };
  const stats = complexStats[0] || { 
    total_units: 0, 
    sold_units: 0, 
    unsold_units: 0, 
    total_owners: 0, 
    total_tenants: 0, 
    total_residents: 0 
  };
  const pendingComplaints = complaints.filter(c => c.status === 'open').length;
  const recentNotices = notices.slice(0, 3);

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, {profile?.full_name}</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Balance"
          value={`₹${totalBalance.toLocaleString()}`}
          icon={DollarSign}
          description="Cash & Bank combined"
        />
        
        <DashboardCard
          title="Monthly Income"
          value={`₹${currentMonth.income.toLocaleString()}`}
          icon={TrendingUp}
          description="Current month income"
        />
        
        <DashboardCard
          title="Monthly Expenses"
          value={`₹${currentMonth.expense.toLocaleString()}`}
          icon={TrendingDown}
          description="Current month expenses"
        />
        
        <DashboardCard
          title="Per Unit Cost"
          value={`₹${currentMonth.per_unit_cost.toLocaleString()}`}
          icon={Building}
          description="Monthly per unit"
        />
      </div>

      {/* Complex Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <DashboardCard
          title="Total Units"
          value={stats.total_units}
          icon={Building}
        />
        
        <DashboardCard
          title="Sold Units"
          value={stats.sold_units}
          icon={UserCheck}
        />
        
        <DashboardCard
          title="Unsold Units"
          value={stats.unsold_units}
          icon={Building}
        />
        
        <DashboardCard
          title="Owners"
          value={stats.total_owners}
          icon={Users}
        />
        
        <DashboardCard
          title="Tenants"
          value={stats.total_tenants}
          icon={Users}
        />
        
        <DashboardCard
          title="Total Residents"
          value={stats.total_residents}
          icon={Users}
        />
      </div>

      {/* Quick Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Recent Complaints
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-destructive">
                {pendingComplaints} Pending
              </p>
              <p className="text-sm text-muted-foreground">
                {complaints.length} total complaints
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Latest Notices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentNotices.length > 0 ? (
                recentNotices.map(notice => (
                  <div key={notice.id} className="border-l-2 border-primary pl-3">
                    <p className="font-medium text-sm">{notice.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(notice.created_at).toLocaleDateString()}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">No notices yet</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Account Balances */}
      {(profile?.role === 'admin' || profile?.role === 'accountant') && (
        <Card>
          <CardHeader>
            <CardTitle>Account Balances</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {accounts.map(account => (
                <div key={account.id} className="p-4 border rounded-lg">
                  <h3 className="font-medium">{account.account_name}</h3>
                  <p className="text-2xl font-bold">₹{account.balance.toLocaleString()}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};