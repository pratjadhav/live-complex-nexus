import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { HelpCircle, Plus, Search, Filter, Clock, CheckCircle, AlertTriangle } from 'lucide-react';

export const Helpdesk = () => {
  const tickets = [
    {
      id: "TKT-001",
      title: "Water leakage in basement parking",
      category: "Maintenance",
      priority: "high",
      status: "open",
      submittedBy: "John Doe",
      submittedDate: "2024-01-15",
      assignedTo: "Maintenance Team",
      description: "There's a significant water leak in the B1 parking level near pillar 15."
    },
    {
      id: "TKT-002", 
      title: "Elevator not working - Block A",
      category: "Technical",
      priority: "high",
      status: "in-progress",
      submittedBy: "Jane Smith",
      submittedDate: "2024-01-14",
      assignedTo: "Technical Support",
      description: "Main elevator in Block A is stuck on the 5th floor."
    },
    {
      id: "TKT-003",
      title: "Noise complaint from Apt 402",
      category: "Community",
      priority: "medium",
      status: "resolved",
      submittedBy: "Mike Johnson",
      submittedDate: "2024-01-12",
      assignedTo: "Security Team",
      description: "Excessive noise during late hours from neighboring apartment."
    },
    {
      id: "TKT-004",
      title: "Swimming pool maintenance request",
      category: "Amenities",
      priority: "low",
      status: "open",
      submittedBy: "Sarah Wilson",
      submittedDate: "2024-01-10",
      assignedTo: "Facilities Team",
      description: "Pool requires cleaning and chemical balancing."
    }
  ];

  const categories = [
    { name: "Maintenance", count: 23, color: "bg-orange-500" },
    { name: "Technical", count: 15, color: "bg-blue-500" },
    { name: "Community", count: 8, color: "bg-green-500" },
    { name: "Amenities", count: 12, color: "bg-purple-500" }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'open':
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case 'in-progress':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'resolved':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      default:
        return <HelpCircle className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <MainLayout>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Helpdesk</h1>
            <p className="text-muted-foreground">Submit and track support requests</p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New Ticket
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Card key={category.name}>
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                  <div>
                    <p className="font-medium">{category.name}</p>
                    <p className="text-sm text-muted-foreground">{category.count} tickets</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Support Tickets</span>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                      <Input placeholder="Search tickets..." className="pl-10 w-64" />
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4" />
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tickets.map((ticket) => (
                    <div key={ticket.id} className="border rounded-lg p-4 hover:bg-accent/50 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {getStatusIcon(ticket.status)}
                          <span className="font-medium">{ticket.id}</span>
                          <Badge variant="outline">{ticket.category}</Badge>
                        </div>
                        <Badge 
                          variant={ticket.priority === 'high' ? 'destructive' : ticket.priority === 'medium' ? 'default' : 'secondary'}
                        >
                          {ticket.priority}
                        </Badge>
                      </div>
                      <h4 className="font-medium mb-1">{ticket.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{ticket.description}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>By {ticket.submittedBy} on {ticket.submittedDate}</span>
                        <span>Assigned to {ticket.assignedTo}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Submit New Ticket</CardTitle>
                <CardDescription>Report issues or request support</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Category</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="maintenance">Maintenance</SelectItem>
                      <SelectItem value="technical">Technical</SelectItem>
                      <SelectItem value="community">Community</SelectItem>
                      <SelectItem value="amenities">Amenities</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Priority</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Subject</label>
                  <Input placeholder="Brief description of the issue" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Description</label>
                  <Textarea placeholder="Detailed description of the issue..." rows={4} />
                </div>
                <Button className="w-full">Submit Ticket</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};