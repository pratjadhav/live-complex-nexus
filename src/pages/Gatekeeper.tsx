import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, UserPlus, Clock, CheckCircle, X, Search, Eye, Car } from 'lucide-react';

export const Gatekeeper = () => {
  const visitors = [
    {
      id: 1,
      name: "Rajesh Kumar",
      phone: "+91 9876543210",
      purpose: "Delivery",
      visitingFlat: "A-404",
      residentName: "John Doe",
      entryTime: "10:30 AM",
      exitTime: null,
      status: "inside",
      vehicleNumber: "DL01AB1234"
    },
    {
      id: 2,
      name: "Priya Sharma",
      phone: "+91 9876543211",
      purpose: "Guest Visit",
      visitingFlat: "B-202",
      residentName: "Jane Smith",
      entryTime: "09:15 AM",
      exitTime: "11:45 AM",
      status: "exited",
      vehicleNumber: null
    },
    {
      id: 3,
      name: "Maintenance Staff",
      phone: "+91 9876543212",
      purpose: "AC Repair",
      visitingFlat: "C-301",
      residentName: "Mike Johnson",
      entryTime: "08:00 AM",
      exitTime: null,
      status: "inside",
      vehicleNumber: "DL05CD5678"
    }
  ];

  const preApprovals = [
    {
      id: 1,
      visitorName: "Dr. Anil Verma",
      phone: "+91 9876543213",
      flat: "A-101",
      resident: "Sarah Wilson",
      expectedTime: "2:00 PM",
      purpose: "Medical Consultation",
      validTill: "2024-01-16",
      status: "pending"
    },
    {
      id: 2,
      visitorName: "Delivery Executive",
      phone: "+91 9876543214",
      flat: "B-505",
      resident: "David Brown",
      expectedTime: "4:00 PM",
      purpose: "Package Delivery",
      validTill: "2024-01-15",
      status: "approved"
    }
  ];

  const emergencyContacts = [
    { name: "Security Office", phone: "+91 11-26453210" },
    { name: "Admin Office", phone: "+91 11-26453211" },
    { name: "Maintenance", phone: "+91 11-26453212" }
  ];

  return (
    <MainLayout>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Gatekeeper Management</h1>
            <p className="text-muted-foreground">Monitor visitor access and security</p>
          </div>
          <Button>
            <UserPlus className="w-4 h-4 mr-2" />
            Register Visitor
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-500" />
                <div>
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-sm text-muted-foreground">Visitors Inside</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-yellow-500" />
                <div>
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-sm text-muted-foreground">Pre-approvals</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Car className="w-5 h-5 text-green-500" />
                <div>
                  <p className="text-2xl font-bold">8</p>
                  <p className="text-sm text-muted-foreground">Vehicles Parked</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-purple-500" />
                <div>
                  <p className="text-2xl font-bold">45</p>
                  <p className="text-sm text-muted-foreground">Today's Visits</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="current" className="space-y-4">
          <TabsList>
            <TabsTrigger value="current">Current Visitors</TabsTrigger>
            <TabsTrigger value="preapproved">Pre-approved</TabsTrigger>
            <TabsTrigger value="history">Visit History</TabsTrigger>
          </TabsList>

          <TabsContent value="current">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Current Visitors</span>
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Search visitors..." className="pl-10 w-64" />
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {visitors.map((visitor) => (
                    <div key={visitor.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarFallback>{visitor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{visitor.name}</p>
                          <p className="text-sm text-muted-foreground">{visitor.phone}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Visiting: {visitor.visitingFlat}</p>
                          <p className="text-sm text-muted-foreground">{visitor.residentName}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Purpose: {visitor.purpose}</p>
                          <p className="text-sm text-muted-foreground">Entry: {visitor.entryTime}</p>
                        </div>
                        {visitor.vehicleNumber && (
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Car className="w-3 h-3" />
                            {visitor.vehicleNumber}
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={visitor.status === 'inside' ? 'default' : 'secondary'}>
                          {visitor.status === 'inside' ? 'Inside' : 'Exited'}
                        </Badge>
                        {visitor.status === 'inside' && (
                          <Button variant="outline" size="sm">
                            <X className="w-4 h-4 mr-1" />
                            Exit
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preapproved">
            <Card>
              <CardHeader>
                <CardTitle>Pre-approved Visitors</CardTitle>
                <CardDescription>Visitors with advance approval from residents</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {preApprovals.map((approval) => (
                    <div key={approval.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarFallback>{approval.visitorName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{approval.visitorName}</p>
                          <p className="text-sm text-muted-foreground">{approval.phone}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Flat: {approval.flat}</p>
                          <p className="text-sm text-muted-foreground">{approval.resident}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Expected: {approval.expectedTime}</p>
                          <p className="text-sm text-muted-foreground">Valid till: {approval.validTill}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Purpose:</p>
                          <p className="text-sm font-medium">{approval.purpose}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={approval.status === 'approved' ? 'default' : 'secondary'}>
                          {approval.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Visit History</CardTitle>
                <CardDescription>Past visitor records and logs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Visit history will be displayed here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Emergency Contacts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {emergencyContacts.map((contact, index) => (
                  <div key={index} className="flex items-center justify-between p-2 border rounded">
                    <span className="font-medium">{contact.name}</span>
                    <a href={`tel:${contact.phone}`} className="text-primary text-sm">{contact.phone}</a>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};