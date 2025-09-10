import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Settings, Zap, Wifi, Wrench } from 'lucide-react';

export const Utilities = () => {
  const utilities = [
    {
      name: "Electricity",
      status: "Connected", 
      lastBill: "₹45,000",
      dueDate: "2024-02-01",
      consumption: "8,500 kWh",
      provider: "Delhi Electricity Board"
    },
    {
      name: "Internet",
      status: "Active",
      lastBill: "₹12,000", 
      dueDate: "2024-01-25",
      consumption: "Unlimited",
      provider: "Airtel Fiber"
    },
    {
      name: "Water Supply",
      status: "Active",
      lastBill: "₹8,500",
      dueDate: "2024-01-30",
      consumption: "15,000 L",
      provider: "Delhi Jal Board"
    },
    {
      name: "Gas Pipeline",
      status: "Connected",
      lastBill: "₹3,200",
      dueDate: "2024-02-05",
      consumption: "450 SCM",
      provider: "Indraprastha Gas"
    }
  ];

  const serviceRequests = [
    { id: "SR001", service: "Electricity", issue: "Power Fluctuation", status: "Open", priority: "High" },
    { id: "SR002", service: "Internet", issue: "Slow Speed", status: "In Progress", priority: "Medium" },
    { id: "SR003", service: "Water", issue: "Low Pressure", status: "Resolved", priority: "High" },
    { id: "SR004", service: "Gas", issue: "Leak Detection", status: "Open", priority: "Critical" }
  ];

  const monthlyConsumption = [
    { month: "December", electricity: "8,500 kWh", water: "15,000 L", gas: "450 SCM" },
    { month: "November", electricity: "7,800 kWh", water: "14,200 L", gas: "420 SCM" },
    { month: "October", electricity: "7,200 kWh", water: "13,500 L", gas: "380 SCM" },
    { month: "September", electricity: "8,100 kWh", water: "14,800 L", gas: "410 SCM" }
  ];

  return (
    <MainLayout>
      <div className="p-6 space-y-6">
        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Utility Services */}
          <Card>
            <CardHeader className="bg-blue-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center justify-between">
                <span>Utility Services</span>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <Zap className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Service</TableHead>
                    <TableHead>Provider</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Last Bill</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {utilities.map((utility, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{utility.name}</p>
                          <p className="text-xs text-muted-foreground">Due: {utility.dueDate}</p>
                        </div>
                      </TableCell>
                      <TableCell>{utility.provider}</TableCell>
                      <TableCell>
                        <Badge variant="default">{utility.status}</Badge>
                      </TableCell>
                      <TableCell className="text-right">{utility.lastBill}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Service Requests */}
          <Card>
            <CardHeader className="bg-orange-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center justify-between">
                <span>Service Requests</span>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <Wrench className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Request ID</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Issue</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {serviceRequests.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell className="font-medium">{request.id}</TableCell>
                      <TableCell>{request.service}</TableCell>
                      <TableCell>{request.issue}</TableCell>
                      <TableCell className="text-right">
                        <Badge variant={request.status === 'Resolved' ? 'default' : request.status === 'In Progress' ? 'secondary' : 'outline'}>
                          {request.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Monthly Consumption */}
          <Card>
            <CardHeader className="bg-green-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center justify-between">
                <span>Monthly Consumption</span>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <Settings className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Month</TableHead>
                    <TableHead>Electricity</TableHead>
                    <TableHead>Water</TableHead>
                    <TableHead className="text-right">Gas</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {monthlyConsumption.map((month, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{month.month}</TableCell>
                      <TableCell>{month.electricity}</TableCell>
                      <TableCell>{month.water}</TableCell>
                      <TableCell className="text-right">{month.gas}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Utility Summary */}
          <Card>
            <CardHeader className="bg-purple-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center justify-between">
                <span>Utility Summary</span>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <Wifi className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Monthly Bill:</span>
                <span className="font-bold">₹68,700</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Active Services:</span>
                <span className="font-bold text-green-600">{utilities.filter(u => u.status === 'Active' || u.status === 'Connected').length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Pending Requests:</span>
                <span className="font-bold text-red-600">{serviceRequests.filter(r => r.status === 'Open').length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Average Monthly Cost:</span>
                <span className="font-bold">₹65,200</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Next Payment Due:</span>
                <span className="font-bold">Jan 25, 2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Cost Savings (YoY):</span>
                <span className="font-bold text-green-600">8.5%</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};