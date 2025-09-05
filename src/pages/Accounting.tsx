import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { DollarSign, TrendingUp, TrendingDown, PieChart, FileText, Calendar, CreditCard, AlertCircle } from 'lucide-react';

export const Accounting = () => {
  const financialSummary = {
    totalBalance: 1250000,
    monthlyIncome: 185000,
    monthlyExpense: 142000,
    netIncome: 43000,
    budgetUtilization: 76
  };

  const recentTransactions = [
    {
      id: 1,
      date: "2024-01-15",
      description: "Maintenance Fee Collection",
      type: "income",
      amount: 125000,
      category: "Maintenance",
      status: "completed"
    },
    {
      id: 2,
      date: "2024-01-14",
      description: "Electricity Bill Payment",
      type: "expense",
      amount: 45000,
      category: "Utilities",
      status: "completed"
    },
    {
      id: 3,
      date: "2024-01-13", 
      description: "Security Services",
      type: "expense",
      amount: 28000,
      category: "Security",
      status: "completed"
    },
    {
      id: 4,
      date: "2024-01-12",
      description: "Parking Fee Collection",
      type: "income",
      amount: 15000,
      category: "Parking",
      status: "pending"
    },
    {
      id: 5,
      date: "2024-01-11",
      description: "Garden Maintenance",
      type: "expense",
      amount: 12000,
      category: "Maintenance", 
      status: "completed"
    }
  ];

  const monthlyBreakdown = [
    { month: "Jan 2024", income: 185000, expense: 142000, balance: 43000 },
    { month: "Dec 2023", income: 178000, expense: 156000, balance: 22000 },
    { month: "Nov 2023", income: 182000, expense: 134000, balance: 48000 },
    { month: "Oct 2023", income: 175000, expense: 148000, balance: 27000 }
  ];

  const budgetCategories = [
    { name: "Maintenance", budgeted: 80000, spent: 65000, remaining: 15000 },
    { name: "Utilities", budgeted: 50000, spent: 45000, remaining: 5000 },
    { name: "Security", budgeted: 35000, spent: 28000, remaining: 7000 },
    { name: "Administration", budgeted: 25000, spent: 18000, remaining: 7000 },
    { name: "Repairs", budgeted: 40000, spent: 32000, remaining: 8000 }
  ];

  const pendingPayments = [
    { vendor: "ABC Maintenance Co.", amount: 25000, dueDate: "2024-01-20", category: "Maintenance" },
    { vendor: "Security Solutions Ltd.", amount: 28000, dueDate: "2024-01-22", category: "Security" },
    { vendor: "Green Landscaping", amount: 15000, dueDate: "2024-01-25", category: "Garden" }
  ];

  const formatCurrency = (amount: number) => {
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  return (
    <MainLayout>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Accounting</h1>
            <p className="text-muted-foreground">Financial management and reporting</p>
          </div>
          <Button>
            <FileText className="w-4 h-4 mr-2" />
            Generate Report
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5 text-green-500" />
                <div>
                  <p className="text-2xl font-bold">{formatCurrency(financialSummary.totalBalance)}</p>
                  <p className="text-sm text-muted-foreground">Total Balance</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-blue-500" />
                <div>
                  <p className="text-2xl font-bold">{formatCurrency(financialSummary.monthlyIncome)}</p>
                  <p className="text-sm text-muted-foreground">Monthly Income</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <TrendingDown className="w-5 h-5 text-red-500" />
                <div>
                  <p className="text-2xl font-bold">{formatCurrency(financialSummary.monthlyExpense)}</p>
                  <p className="text-sm text-muted-foreground">Monthly Expense</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <PieChart className="w-5 h-5 text-purple-500" />
                <div>
                  <p className="text-2xl font-bold">{formatCurrency(financialSummary.netIncome)}</p>
                  <p className="text-sm text-muted-foreground">Net Income</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="budget">Budget</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Performance</CardTitle>
                  <CardDescription>Income vs Expense comparison</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {monthlyBreakdown.map((month) => (
                      <div key={month.month} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{month.month}</span>
                          <span className={month.balance > 0 ? 'text-green-600' : 'text-red-600'}>
                            {formatCurrency(month.balance)}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="bg-green-100 dark:bg-green-900 p-2 rounded">
                            Income: {formatCurrency(month.income)}
                          </div>
                          <div className="bg-red-100 dark:bg-red-900 p-2 rounded">
                            Expense: {formatCurrency(month.expense)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-orange-500" />
                    Pending Payments
                  </CardTitle>
                  <CardDescription>Upcoming payment obligations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {pendingPayments.map((payment, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium text-sm">{payment.vendor}</p>
                          <p className="text-xs text-muted-foreground">
                            Due: {payment.dueDate} • {payment.category}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">{formatCurrency(payment.amount)}</p>
                          <Button size="sm" variant="outline" className="mt-1">
                            <CreditCard className="w-3 h-3 mr-1" />
                            Pay
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="transactions">
            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Latest financial activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentTransactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-full ${
                          transaction.type === 'income' 
                            ? 'bg-green-100 dark:bg-green-900' 
                            : 'bg-red-100 dark:bg-red-900'
                        }`}>
                          {transaction.type === 'income' ? (
                            <TrendingUp className="w-4 h-4 text-green-600" />
                          ) : (
                            <TrendingDown className="w-4 h-4 text-red-600" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium">{transaction.description}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            {transaction.date}
                            <Badge variant="outline">{transaction.category}</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-bold ${
                          transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {transaction.type === 'income' ? '+' : '-'}{formatCurrency(transaction.amount)}
                        </p>
                        <Badge variant={transaction.status === 'completed' ? 'default' : 'secondary'}>
                          {transaction.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="budget">
            <Card>
              <CardHeader>
                <CardTitle>Budget Utilization</CardTitle>
                <CardDescription>Category-wise budget tracking</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Overall Budget Utilization</p>
                    <p className="text-2xl font-bold">{financialSummary.budgetUtilization}%</p>
                    <Progress value={financialSummary.budgetUtilization} className="mt-2" />
                  </div>
                  
                  <div className="space-y-4">
                    {budgetCategories.map((category) => {
                      const utilizationPercentage = (category.spent / category.budgeted) * 100;
                      return (
                        <div key={category.name} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium">{category.name}</span>
                            <span>{formatCurrency(category.spent)} / {formatCurrency(category.budgeted)}</span>
                          </div>
                          <Progress value={utilizationPercentage} />
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>{Math.round(utilizationPercentage)}% utilized</span>
                            <span className="text-green-600">
                              Remaining: {formatCurrency(category.remaining)}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>Financial Reports</CardTitle>
                <CardDescription>Generate and download financial statements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <Button className="w-full justify-start">
                      <FileText className="w-4 h-4 mr-2" />
                      Monthly Statement
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="w-4 h-4 mr-2" />
                      Annual Report
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <PieChart className="w-4 h-4 mr-2" />
                      Budget Analysis
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Cash Flow Report
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <DollarSign className="w-4 h-4 mr-2" />
                      Balance Sheet
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Calendar className="w-4 h-4 mr-2" />
                      Tax Documents
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};