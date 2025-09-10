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

  const stats = complexStats[0] || { 
    total_units: 36, 
    sold_units: 0, 
    unsold_units: 0, 
    total_owners: 4, 
    total_tenants: 0, 
    total_residents: 3 
  };

  // Mock data for recent months
  const recentMonths = [
    { month: 'June', income: 0, expenses: 0 },
    { month: 'July', income: 0, expenses: 0 },
    { month: 'August', income: 0, expenses: 0 }
  ];

  // Mock General Ledger data
  const generalLedgerData = [
    { class: 'Assets', credit: 1996228.00, debit: 1988013.00 },
    { class: 'Liabilities', credit: 49641.00, debit: 48040.00 },
    { class: 'Revenues', credit: 665040.00, debit: 0.00 }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* 2x2 Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Cash & Bank Balances */}
        <Card>
          <CardHeader className="bg-orange-500 text-white rounded-t-lg">
            <CardTitle className="flex items-center justify-between">
              <span>Cash & Bank Balances</span>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <DollarSign className="h-4 w-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="p-4 text-sm text-muted-foreground">
              For Accounting Period: 01/04/2024 - 31/03/2028
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Account</TableHead>
                  <TableHead className="text-right">Balance (Rs)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>ICICI</TableCell>
                  <TableCell className="text-right">46,332.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Petty Cash</TableCell>
                  <TableCell className="text-right">519.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Pune District Central Co-Op Bank</TableCell>
                  <TableCell className="text-right">6,129.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Income & Expenses */}
        <Card>
          <CardHeader className="bg-blue-500 text-white rounded-t-lg">
            <CardTitle className="flex items-center justify-between">
              <span>Income & Expenses</span>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <TrendingUp className="h-4 w-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm font-medium">Total Units: <span className="font-bold">36</span></p>
              </div>
              <div>
                <p className="text-sm font-medium">Total Area Under Maintenance:</p>
                <p className="font-bold">36,000.00 Sft</p>
              </div>
            </div>
            <div className="text-sm text-muted-foreground mb-2">Last 3 months</div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Month</TableHead>
                  <TableHead className="text-right">Income (Rs)</TableHead>
                  <TableHead className="text-right">Expenses (Rs)</TableHead>
                  <TableHead className="text-right">Exp. / Unit (Rs)</TableHead>
                  <TableHead className="text-right">Exp. / Sft (Rs)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentMonths.map((month) => (
                  <TableRow key={month.month}>
                    <TableCell>{month.month}</TableCell>
                    <TableCell className="text-right">{month.income.toFixed(2)}</TableCell>
                    <TableCell className="text-right">{month.expenses.toFixed(2)}</TableCell>
                    <TableCell className="text-right">-</TableCell>
                    <TableCell className="text-right">-</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* General Ledger */}
        <Card>
          <CardHeader className="bg-green-500 text-white rounded-t-lg">
            <CardTitle className="flex items-center justify-between">
              <span>General Ledger</span>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Building className="h-4 w-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="p-4 text-sm text-muted-foreground">
              For Accounting Period: 01/04/2024 - 31/03/2028
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Class</TableHead>
                  <TableHead className="text-right">Credit</TableHead>
                  <TableHead className="text-right">Debit</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {generalLedgerData.map((item) => (
                  <TableRow key={item.class}>
                    <TableCell className="font-medium">{item.class}</TableCell>
                    <TableCell className="text-right">{item.credit.toLocaleString()}</TableCell>
                    <TableCell className="text-right">{item.debit.toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* My Complex */}
        <Card>
          <CardHeader className="bg-orange-500 text-white rounded-t-lg">
            <CardTitle className="flex items-center justify-between">
              <span>My Complex</span>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Building className="h-4 w-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total Number of Units:</span>
              <span className="font-bold">{stats.total_units}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total Number of Units Sold:</span>
              <span className="font-bold">{stats.sold_units}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total Number of Units Unsold:</span>
              <span className="font-bold">{stats.unsold_units}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Units with Members:</span>
              <span className="font-bold">{stats.total_residents}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total Number of Owners:</span>
              <span className="font-bold">{stats.total_owners}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total Number of Tenants:</span>
              <span className="font-bold">{stats.total_tenants}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};