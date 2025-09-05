import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Workflow as WorkflowIcon, Plus, Clock, CheckCircle } from 'lucide-react';

export const Workflow = () => {
  const workflows = [
    {
      id: 1,
      name: "Maintenance Request",
      description: "Standard workflow for maintenance requests",
      steps: 4,
      activeRequests: 12,
      status: "active"
    }
  ];

  return (
    <MainLayout>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Workflow Management</h1>
            <p className="text-muted-foreground">Manage business processes and workflows</p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Create Workflow
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <WorkflowIcon className="w-5 h-5 text-blue-500" />
                <div>
                  <p className="text-2xl font-bold">5</p>
                  <p className="text-sm text-muted-foreground">Active Workflows</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Workflows</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {workflows.map((workflow) => (
                <div key={workflow.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">{workflow.name}</p>
                    <p className="text-sm text-muted-foreground">{workflow.description}</p>
                  </div>
                  <Badge variant="default">{workflow.status}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};