import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { FileText, Download, CheckCircle, AlertCircle, Calendar } from 'lucide-react';

export const GST = () => {
  const gstTasks = [
    {
      id: 1,
      title: "GST Registration Verification",
      status: "completed",
      description: "Verify society GST registration details",
      dueDate: "2024-01-15",
      priority: "high"
    },
    {
      id: 2,
      title: "Monthly GST Return Filing",
      status: "pending",
      description: "File GSTR-1 for December 2023",
      dueDate: "2024-01-20",
      priority: "high"
    },
    {
      id: 3,
      title: "Input Tax Credit Reconciliation",
      status: "in-progress",
      description: "Reconcile ITC for maintenance services",
      dueDate: "2024-01-25",
      priority: "medium"
    },
    {
      id: 4,
      title: "GST Audit Preparation",
      status: "pending",
      description: "Prepare documents for annual GST audit",
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

  const completionPercentage = (gstTasks.filter(task => task.status === 'completed').length / gstTasks.length) * 100;

  return (
    <MainLayout>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">GST Management</h1>
            <p className="text-muted-foreground">Manage GST compliance and documentation</p>
          </div>
          <Button>
            <FileText className="w-4 h-4 mr-2" />
            New Filing
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Compliance Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Overall Progress</span>
                  <span>{Math.round(completionPercentage)}%</span>
                </div>
                <Progress value={completionPercentage} />
                <p className="text-xs text-muted-foreground">
                  {gstTasks.filter(task => task.status === 'completed').length} of {gstTasks.length} tasks completed
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Next Deadline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">GSTR-1 Filing</p>
                  <p className="text-sm text-muted-foreground">Due: Jan 20, 2024</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-2xl font-bold">{documents.length}</p>
                <p className="text-sm text-muted-foreground">Files uploaded</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>GST Tasks & Compliance</CardTitle>
              <CardDescription>Track your GST-related activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {gstTasks.map((task) => (
                  <div key={task.id} className="flex items-start justify-between p-3 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        {task.status === 'completed' ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : task.status === 'in-progress' ? (
                          <AlertCircle className="w-4 h-4 text-yellow-500" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-red-500" />
                        )}
                        <h4 className="font-medium">{task.title}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{task.description}</p>
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant={task.priority === 'high' ? 'destructive' : task.priority === 'medium' ? 'default' : 'secondary'}
                        >
                          {task.priority} priority
                        </Badge>
                        <span className="text-xs text-muted-foreground">Due: {task.dueDate}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>GST Documents</CardTitle>
              <CardDescription>Download and manage GST-related documents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {documents.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium text-sm">{doc.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {doc.type} • {doc.size} • {doc.uploadDate}
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline">
                Upload Document
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};