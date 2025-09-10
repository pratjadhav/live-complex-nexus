import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FileText, Download, CheckCircle, AlertCircle, Calendar } from 'lucide-react';

export const GST = () => {
  const gstTasks = [
    {
      id: 1,
      title: "GST Registration Verification",
      status: "completed",
      dueDate: "2024-01-15",
      priority: "high"
    },
    {
      id: 2,
      title: "Monthly GST Return Filing", 
      status: "pending",
      dueDate: "2024-01-20",
      priority: "high"
    },
    {
      id: 3,
      title: "Input Tax Credit Reconciliation",
      status: "in-progress", 
      dueDate: "2024-01-25",
      priority: "medium"
    },
    {
      id: 4,
      title: "GST Audit Preparation",
      status: "pending",
      dueDate: "2024-02-01", 
      priority: "low"
    }
  ];

  const documents = [
    { name: "GST Registration Certificate", type: "PDF", size: "2.4 MB", uploadDate: "2023-12-01" },
    { name: "GSTR-1 December 2023", type: "PDF", size: "1.8 MB", uploadDate: "2024-01-05" },
    { name: "Input Tax Credit Summary", type: "Excel", size: "456 KB", uploadDate: "2024-01-10" },
    { name: "GST Payment Receipts", type: "ZIP", size: "3.2 MB", uploadDate: "2024-01-12" }
  ];

  const returnFilings = [
    { month: "December 2023", type: "GSTR-1", status: "Filed", amount: "₹45,000" },
    { month: "November 2023", type: "GSTR-1", status: "Filed", amount: "₹42,000" },
    { month: "October 2023", type: "GSTR-1", status: "Filed", amount: "₹38,000" },
    { month: "September 2023", type: "GSTR-1", status: "Filed", amount: "₹40,000" }
  ];

  return (
    <MainLayout>
      <div className="p-6 space-y-6">
        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* GST Tasks & Compliance */}
          <Card>
            <CardHeader className="bg-blue-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center justify-between">
                <span>GST Tasks & Compliance</span>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <FileText className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Task</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead className="text-right">Due Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {gstTasks.map((task) => (
                    <TableRow key={task.id}>
                      <TableCell className="font-medium">{task.title}</TableCell>
                      <TableCell>
                        <Badge variant={task.status === 'completed' ? 'default' : task.status === 'in-progress' ? 'secondary' : 'outline'}>
                          {task.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={task.priority === 'high' ? 'destructive' : task.priority === 'medium' ? 'default' : 'secondary'}>
                          {task.priority}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">{task.dueDate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* GST Documents */}
          <Card>
            <CardHeader className="bg-green-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center justify-between">
                <span>GST Documents</span>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <Download className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Document</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead className="text-right">Upload Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {documents.map((doc, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{doc.name}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{doc.type}</Badge>
                      </TableCell>
                      <TableCell>{doc.size}</TableCell>
                      <TableCell className="text-right">{doc.uploadDate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Return Filings */}
          <Card>
            <CardHeader className="bg-orange-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center justify-between">
                <span>Return Filings</span>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <Calendar className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Month</TableHead>
                    <TableHead>Return Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Tax Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {returnFilings.map((filing, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{filing.month}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{filing.type}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="default">{filing.status}</Badge>
                      </TableCell>
                      <TableCell className="text-right">{filing.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Compliance Overview */}
          <Card>
            <CardHeader className="bg-purple-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center justify-between">
                <span>Compliance Overview</span>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <CheckCircle className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">GST Registration:</span>
                <span className="font-bold text-green-600">Active</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Tasks:</span>
                <span className="font-bold">{gstTasks.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Completed:</span>
                <span className="font-bold text-green-600">{gstTasks.filter(task => task.status === 'completed').length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Pending:</span>
                <span className="font-bold text-red-600">{gstTasks.filter(task => task.status === 'pending').length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">In Progress:</span>
                <span className="font-bold text-yellow-600">{gstTasks.filter(task => task.status === 'in-progress').length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Next Filing Due:</span>
                <span className="font-bold">Jan 20, 2024</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};