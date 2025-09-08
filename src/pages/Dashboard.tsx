import { DashboardCard } from '@/components/dashboard/DashboardCard';
import { GeneralLedger } from '@/components/dashboard/GeneralLedger';
import { ComplaintsWidget } from '@/components/dashboard/ComplaintsWidget';
import { NoticeboardWidget } from '@/components/dashboard/NoticeboardWidget';
import { useRealTimeData } from '@/hooks/useRealTimeData';
import { useAuth } from '@/hooks/useAuth';
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Building, 
  Users, 
  UserCheck
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

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
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold">Real-Time Dashboard</h1>
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">LIVE</span>
        </div>
        <p className="text-muted-foreground">Welcome back, {profile?.full_name}</p>
      </div>

      {/* Top Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard
          title="Cash & Bank Balances"
          value={`₹${totalBalance.toLocaleString()}`}
          icon={DollarSign}
          description={`Bank: ₹${totalBalance.toLocaleString()} | LAST UPDATED: NOW`}
          className="bg-dashboard-cash-bank text-white border-none"
        />
        
        <DashboardCard
          title="Monthly Income"
          value={`₹${currentMonth.income.toLocaleString()}`}
          icon={TrendingUp}
          description={`PER-UNIT COST: ₹${currentMonth.per_unit_cost.toLocaleString()}`}
          className="bg-dashboard-income text-white border-none relative"
        />
        
        <DashboardCard
          title="Monthly Expenses"
          value={`₹${currentMonth.expense.toLocaleString()}`}
          icon={TrendingDown}
          description="Current month expenses"
          className="bg-dashboard-expense text-white border-none relative"
        />
      </div>

      {/* Complex Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <DashboardCard
          title="Total Units"
          value={stats.total_units}
          icon={Building}
          description="Units Unsold"
          className="bg-dashboard-total-units text-white border-none"
        />
        
        <DashboardCard
          title="Units Unsold"
          value={stats.unsold_units}
          icon={Building}
          className="bg-dashboard-units-unsold text-white border-none"
        />
        
        <DashboardCard
          title="Units Sold"
          value={stats.sold_units}
          icon={UserCheck}
          className="bg-dashboard-units-sold text-white border-none"
        />
        
        <DashboardCard
          title="Owners"
          value={stats.total_owners}
          icon={Users}
          className="bg-dashboard-owners text-white border-none"
        />
        
        <DashboardCard
          title="Tenants"
          value={stats.total_tenants}
          icon={Users}
          className="bg-dashboard-tenants text-white border-none"
        />
        
        <DashboardCard
          title="Residents"
          value={stats.total_residents}
          icon={Users}
          className="bg-dashboard-residents-1 text-white border-none"
        />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GeneralLedger />
        <ComplaintsWidget />
        <NoticeboardWidget />
      </div>

      {/* Account Balances */}
      {(profile?.role === 'admin' || profile?.role === 'accountant') && (
        <Card>
          <CardHeader>
            <CardTitle>Account Balances</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Account Name</TableHead>
                  <TableHead className="text-right">Balance</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {accounts.map(account => (
                  <TableRow key={account.id}>
                    <TableCell className="font-medium">{account.account_name}</TableCell>
                    <TableCell className="text-right">₹{account.balance.toLocaleString()}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm">View</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
};