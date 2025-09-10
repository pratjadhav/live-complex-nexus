import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
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
    },
    {
      id: 2,
      name: "Visitor Approval",
      description: "Process for visitor entry approvals", 
      steps: 3,
      activeRequests: 8,
      status: "active"
    },
    {
      id: 3,
      name: "Complaint Resolution",
      description: "Workflow for handling resident complaints",
      steps: 5,
      activeRequests: 15,
      status: "active"
    },
    {
      id: 4,
      name: "Event Planning",
      description: "Process for organizing community events",
      steps: 6,
      activeRequests: 3,
      status: "inactive"
    }
  ];

  const activeProcesses = [
    { processId: "WF001", name: "AC Repair Request", initiator: "John Doe", stage: "Approval Pending", daysActive: 2 },
    { processId: "WF002", name: "Visitor Entry", initiator: "Jane Smith", stage: "Security Check", daysActive: 1 },
    { processId: "WF003", name: "Noise Complaint", initiator: "Mike Johnson", stage: "Investigation", daysActive: 5 },
    { processId: "WF004", name: "Parking Issue", initiator: "Sarah Wilson", stage: "Resolution", daysActive: 3 }
  ];

  const completedProcesses = [
    { processId: "WF005", name: "Elevator Maintenance", completedBy: "Maintenance Team", completionDate: "2024-01-10", duration: "3 days" },
    { processId: "WF006", name: "Security Upgrade", completedBy: "Security Head", completionDate: "2024-01-08", duration: "7 days" },
    { processId: "WF007", name: "Garden Renovation", completedBy: "Admin", completionDate: "2024-01-05", duration: "12 days" },
    { processId: "WF008", name: "WiFi Installation", completedBy: "IT Team", completionDate: "2024-01-03", duration: "2 days" }
  ];

  return (
    <MainLayout>
      <div className="p-6 space-y-6">
        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Available Workflows */}
          <Card>
            <CardHeader className="bg-blue-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center justify-between">
                <span>Available Workflows</span>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <WorkflowIcon className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Workflow</TableHead>
                    <TableHead>Steps</TableHead>
                    <TableHead>Active</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {workflows.map((workflow) => (
                    <TableRow key={workflow.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{workflow.name}</p>
                          <p className="text-xs text-muted-foreground">{workflow.description}</p>
                        </div>
                      </TableCell>
                      <TableCell>{workflow.steps}</TableCell>
                      <TableCell>{workflow.activeRequests}</TableCell>
                      <TableCell className="text-right">
                        <Badge variant={workflow.status === 'active' ? 'default' : 'secondary'}>
                          {workflow.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Active Processes */}
          <Card>
            <CardHeader className="bg-orange-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center justify-between">
                <span>Active Processes</span>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <Clock className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Process</TableHead>
                    <TableHead>Initiator</TableHead>
                    <TableHead>Stage</TableHead>
                    <TableHead className="text-right">Days</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {activeProcesses.map((process) => (
                    <TableRow key={process.processId}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{process.name}</p>
                          <p className="text-xs text-muted-foreground">{process.processId}</p>
                        </div>
                      </TableCell>
                      <TableCell>{process.initiator}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{process.stage}</Badge>
                      </TableCell>
                      <TableCell className="text-right">{process.daysActive}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Completed Processes */}
          <Card>
            <CardHeader className="bg-green-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center justify-between">
                <span>Completed Processes</span>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <CheckCircle className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Process</TableHead>
                    <TableHead>Completed By</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Duration</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {completedProcesses.map((process) => (
                    <TableRow key={process.processId}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{process.name}</p>
                          <p className="text-xs text-muted-foreground">{process.processId}</p>
                        </div>
                      </TableCell>
                      <TableCell>{process.completedBy}</TableCell>
                      <TableCell>{process.completionDate}</TableCell>
                      <TableCell className="text-right">{process.duration}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Workflow Statistics */}
          <Card>
            <CardHeader className="bg-purple-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center justify-between">
                <span>Workflow Statistics</span>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <Plus className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Workflows:</span>
                <span className="font-bold">{workflows.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Active Workflows:</span>
                <span className="font-bold text-green-600">{workflows.filter(w => w.status === 'active').length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Active Processes:</span>
                <span className="font-bold">{activeProcesses.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Completed This Month:</span>
                <span className="font-bold">{completedProcesses.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Average Duration:</span>
                <span className="font-bold">4.2 days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Success Rate:</span>
                <span className="font-bold text-green-600">96%</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};