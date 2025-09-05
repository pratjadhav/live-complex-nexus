import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, DollarSign, Plus, Calendar, Filter, Search, Eye, Download } from 'lucide-react';

export const Income = () => {
  const incomeStreams = [
    {
      source: "Maintenance Fees",
      monthly: 125000,
      yearly: 1500000,
      percentage: 65,
      status: "active",
      lastCollection: "2024-01-15",
      collectionRate: 95
    },
    {
      source: "Parking Fees",
      monthly: 28000,
      yearly: 336000,
      percentage: 18,
      status: "active",
      lastCollection: "2024-01-12",
      collectionRate: 88
    },
    {
      source: "Amenity Charges",
      monthly: 15000,
      yearly: 180000,
      percentage: 10,
      status: "active",
      lastCollection: "2024-01-10",
      collectionRate: 92
    },
    {
      source: "Late Payment Fees",
      monthly: 8000,
      yearly: 96000,
      percentage: 5,
      status: "active",
      lastCollection: "2024-01-08",
      collectionRate: 75
    },
    {
      source: "Guest Room Rentals",
      monthly: 4000,
      yearly: 48000,
      percentage: 2,
      status: "seasonal",
      lastCollection: "2024-01-05",
      collectionRate: 100
    }
  ];

  const recentCollections = [
    {
      id: 1,
      date: "2024-01-15",
      payer: "Flat A-101 - Rajesh Kumar",
      amount: 3500,
      type: "Maintenance Fee",
      method: "Bank Transfer",
      status: "received"
    },
    {
      id: 2,
      date: "2024-01-15",
      payer: "Flat B-205 - Priya Sharma",
      amount: 3200,
      type: "Maintenance Fee",
      method: "Cash",
      status: "received"
    },
    {
      id: 3,
      date: "2024-01-14",
      payer: "Flat C-304 - Amit Singh",
      amount: 1500,
      type: "Parking Fee",
      method: "UPI",
      status: "received"
    },
    {
      id: 4,
      date: "2024-01-14",
      payer: "Flat A-402 - Neha Gupta",
      amount: 500,
      type: "Late Fee",
      method: "Bank Transfer",
      status: "pending"
    },
    {
      id: 5,
      date: "2024-01-13",
      payer: "Guest Room Booking",
      amount: 2000,
      type: "Amenity Charge",
      method: "Cash",
      status: "received"
    }
  ];

  const monthlyTargets = [
    { month: "January 2024", target: 180000, achieved: 165000, percentage: 92 },
    { month: "December 2023", target: 180000, achieved: 172000, percentage: 96 },
    { month: "November 2023", target: 180000, achieved: 168000, percentage: 93 },
    { month: "October 2023", target: 180000, achieved: 175000, percentage: 97 }
  ];

  const outstandingPayments = [
    { flat: "A-203", resident: "John Doe", amount: 7200, dueDate: "2024-01-10", days: 5, type: "Maintenance" },
    { flat: "B-301", resident: "Jane Smith", amount: 3500, dueDate: "2024-01-15", days: 0, type: "Maintenance" },
    { flat: "C-102", resident: "Mike Johnson", amount: 1500, dueDate: "2023-12-15", days: 31, type: "Parking" },
    { flat: "A-505", resident: "Sarah Wilson", amount: 4800, dueDate: "2024-01-05", days: 10, type: "Maintenance" }
  ];

  const totalIncome = incomeStreams.reduce((total, stream) => total + stream.monthly, 0);
  const formatCurrency = (amount: number) => `₹${amount.toLocaleString('en-IN')}`;

  return (
    <MainLayout>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Income Management</h1>
            <p className="text-muted-foreground">Track and manage all income sources</p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Income
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5 text-green-500" />
                <div>
                  <p className="text-2xl font-bold">{formatCurrency(totalIncome)}</p>
                  <p className="text-sm text-muted-foreground">Monthly Income</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-blue-500" />
                <div>
                  <p className="text-2xl font-bold">{formatCurrency(totalIncome * 12)}</p>
                  <p className="text-sm text-muted-foreground">Yearly Projection</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-orange-500" />
                <div>
                  <p className="text-2xl font-bold">92%</p>
                  <p className="text-sm text-muted-foreground">Collection Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-purple-500" />
                <div>
                  <p className="text-2xl font-bold">5</p>
                  <p className="text-sm text-muted-foreground">Income Sources</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="collections">Collections</TabsTrigger>
            <TabsTrigger value="outstanding">Outstanding</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Income Sources</CardTitle>
                  <CardDescription>Breakdown of all income streams</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {incomeStreams.map((stream, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{stream.source}</span>
                            <Badge variant={stream.status === 'active' ? 'default' : 'secondary'}>
                              {stream.status}
                            </Badge>
                          </div>
                          <span className="font-bold">{formatCurrency(stream.monthly)}</span>
                        </div>
                        <Progress value={stream.percentage} />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>{stream.percentage}% of total income</span>
                          <span>Collection Rate: {stream.collectionRate}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Monthly Targets</CardTitle>
                  <CardDescription>Target vs achieved income</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {monthlyTargets.map((target, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{target.month}</span>
                          <span className={target.percentage >= 95 ? 'text-green-600' : 'text-orange-600'}>
                            {target.percentage}%
                          </span>
                        </div>
                        <Progress value={target.percentage} />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Target: {formatCurrency(target.target)}</span>
                          <span>Achieved: {formatCurrency(target.achieved)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="collections">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Recent Collections</span>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                      <Input placeholder="Search collections..." className="pl-10 w-64" />
                    </div>
                    <Select>
                      <SelectTrigger className="w-32">
                        <SelectValue placeholder="Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="maintenance">Maintenance</SelectItem>
                        <SelectItem value="parking">Parking</SelectItem>
                        <SelectItem value="amenity">Amenity</SelectItem>
                        <SelectItem value="late">Late Fee</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4" />
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentCollections.map((collection) => (
                    <div key={collection.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-full bg-green-100 dark:bg-green-900">
                          <DollarSign className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium">{collection.payer}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            {collection.date}
                            <Badge variant="outline">{collection.type}</Badge>
                            <span>via {collection.method}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-600">+{formatCurrency(collection.amount)}</p>
                        <Badge variant={collection.status === 'received' ? 'default' : 'secondary'}>
                          {collection.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="outstanding">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-red-500" />
                  Outstanding Payments
                </CardTitle>
                <CardDescription>Pending dues from residents</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {outstandingPayments.map((payment, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{payment.flat} - {payment.resident}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Badge variant="outline">{payment.type}</Badge>
                          <span>Due: {payment.dueDate}</span>
                          <Badge variant={payment.days > 7 ? 'destructive' : 'secondary'}>
                            {payment.days} days {payment.days > 0 ? 'overdue' : 'remaining'}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-red-600">{formatCurrency(payment.amount)}</p>
                        <div className="flex gap-1 mt-1">
                          <Button size="sm" variant="outline">
                            <Eye className="w-3 h-3" />
                          </Button>
                          <Button size="sm">
                            Send Reminder
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>Income Reports</CardTitle>
                <CardDescription>Generate detailed income analysis reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button className="justify-start h-16" variant="outline">
                    <div className="flex items-center gap-3">
                      <Download className="w-5 h-5" />
                      <div className="text-left">
                        <p className="font-medium">Monthly Income Report</p>
                        <p className="text-xs text-muted-foreground">Detailed breakdown by source</p>
                      </div>
                    </div>
                  </Button>
                  <Button className="justify-start h-16" variant="outline">
                    <div className="flex items-center gap-3">
                      <Download className="w-5 h-5" />
                      <div className="text-left">
                        <p className="font-medium">Collection Analysis</p>
                        <p className="text-xs text-muted-foreground">Payment patterns and trends</p>
                      </div>
                    </div>
                  </Button>
                  <Button className="justify-start h-16" variant="outline">
                    <div className="flex items-center gap-3">
                      <Download className="w-5 h-5" />
                      <div className="text-left">
                        <p className="font-medium">Outstanding Report</p>
                        <p className="text-xs text-muted-foreground">Overdue payments summary</p>
                      </div>
                    </div>
                  </Button>
                  <Button className="justify-start h-16" variant="outline">
                    <div className="flex items-center gap-3">
                      <Download className="w-5 h-5" />
                      <div className="text-left">
                        <p className="font-medium">Annual Income Statement</p>
                        <p className="text-xs text-muted-foreground">Year-end financial summary</p>
                      </div>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};