import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingDown, DollarSign, Plus, Calendar, AlertTriangle } from 'lucide-react';

export const Expenditure = () => {
  const expenses = [
    {
      id: 1,
      date: "2024-01-15",
      description: "Electricity Bill Payment",
      amount: 45000,
      category: "Utilities",
      vendor: "State Electricity Board",
      status: "paid"
    },
    {
      id: 2,
      date: "2024-01-14", 
      description: "Security Services",
      amount: 28000,
      category: "Security",
      vendor: "SecureGuard Services",
      status: "paid"
    },
    {
      id: 3,
      date: "2024-01-12",
      description: "Garden Maintenance",
      amount: 12000,
      category: "Maintenance",
      vendor: "Green Landscaping",
      status: "pending"
    }
  ];

  return (
    <MainLayout>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Expenditure Management</h1>
            <p className="text-muted-foreground">Track and manage all expenses</p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Expense
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <TrendingDown className="w-5 h-5 text-red-500" />
                <div>
                  <p className="text-2xl font-bold">₹85,000</p>
                  <p className="text-sm text-muted-foreground">This Month</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {expenses.map((expense) => (
                <div key={expense.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">{expense.description}</p>
                    <p className="text-sm text-muted-foreground">{expense.vendor} • {expense.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-red-600">₹{expense.amount.toLocaleString()}</p>
                    <Badge variant={expense.status === 'paid' ? 'default' : 'secondary'}>
                      {expense.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};