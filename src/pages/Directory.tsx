import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Users, Search, Filter, Phone, Mail, Building, MapPin, UserPlus } from 'lucide-react';

export const Directory = () => {
  const residents = [
    {
      id: 1,
      name: "Rajesh Kumar",
      flat: "A-101",
      phone: "+91 9876543210",
      email: "rajesh.kumar@email.com",
      block: "A",
      floor: 1,
      memberSince: "2020-03-15",
      family: 4,
      status: "Owner",
      emergencyContact: "+91 9876543299"
    },
    {
      id: 2,
      name: "Priya Sharma",
      flat: "B-205",
      phone: "+91 9876543211",
      email: "priya.sharma@email.com", 
      block: "B",
      floor: 2,
      memberSince: "2019-08-22",
      family: 3,
      status: "Owner",
      emergencyContact: "+91 9876543288"
    },
    {
      id: 3,
      name: "Amit Singh",
      flat: "C-304",
      phone: "+91 9876543212",
      email: "amit.singh@email.com",
      block: "C", 
      floor: 3,
      memberSince: "2021-01-10",
      family: 2,
      status: "Tenant",
      emergencyContact: "+91 9876543277"
    },
    {
      id: 4,
      name: "Neha Gupta",
      flat: "A-402",
      phone: "+91 9876543213",
      email: "neha.gupta@email.com",
      block: "A",
      floor: 4,
      memberSince: "2018-11-05",
      family: 5,
      status: "Owner",
      emergencyContact: "+91 9876543266"
    }
  ];

  const serviceProviders = [
    {
      name: "Dr. Anil Verma",
      service: "Family Doctor",
      phone: "+91 9876543220",
      availability: "Mon-Sat 9AM-6PM",
      location: "Block A Ground Floor"
    },
    {
      name: "Quick Mart",
      service: "Grocery Store", 
      phone: "+91 9876543221",
      availability: "Daily 8AM-10PM",
      location: "Near Main Gate"
    },
    {
      name: "Tech Solutions",
      service: "Computer Repair",
      phone: "+91 9876543222",
      availability: "Mon-Fri 10AM-7PM",
      location: "Block B Basement"
    },
    {
      name: "Happy Kids Daycare",
      service: "Childcare",
      phone: "+91 9876543223", 
      availability: "Mon-Fri 8AM-6PM",
      location: "Community Center"
    }
  ];

  const buildingStats = [
    { block: "A", totalFlats: 40, occupied: 38, vacant: 2 },
    { block: "B", totalFlats: 35, occupied: 33, vacant: 2 },
    { block: "C", totalFlats: 45, occupied: 42, vacant: 3 }
  ];

  return (
    <MainLayout>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Resident Directory</h1>
            <p className="text-muted-foreground">Community member information and services</p>
          </div>
          <Button>
            <UserPlus className="w-4 h-4 mr-2" />
            Add Resident
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-500" />
                <div>
                  <p className="text-2xl font-bold">113</p>
                  <p className="text-sm text-muted-foreground">Total Residents</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Building className="w-5 h-5 text-green-500" />
                <div>
                  <p className="text-2xl font-bold">120</p>
                  <p className="text-sm text-muted-foreground">Total Flats</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-orange-500" />
                <div>
                  <p className="text-2xl font-bold">7</p>
                  <p className="text-sm text-muted-foreground">Vacant Flats</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-purple-500" />
                <div>
                  <p className="text-2xl font-bold">15</p>
                  <p className="text-sm text-muted-foreground">Service Providers</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="residents" className="space-y-4">
          <TabsList>
            <TabsTrigger value="residents">Residents</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="building">Building Info</TabsTrigger>
          </TabsList>

          <TabsContent value="residents">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Resident Directory</span>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                      <Input placeholder="Search residents..." className="pl-10 w-64" />
                    </div>
                    <Select>
                      <SelectTrigger className="w-32">
                        <SelectValue placeholder="Block" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Blocks</SelectItem>
                        <SelectItem value="A">Block A</SelectItem>
                        <SelectItem value="B">Block B</SelectItem>
                        <SelectItem value="C">Block C</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4" />
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {residents.map((resident) => (
                    <Card key={resident.id}>
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <Avatar>
                            <AvatarFallback>{resident.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium">{resident.name}</h4>
                              <Badge variant={resident.status === 'Owner' ? 'default' : 'secondary'}>
                                {resident.status}
                              </Badge>
                            </div>
                            <div className="space-y-1 text-sm text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <Building className="w-3 h-3" />
                                Flat {resident.flat}, Floor {resident.floor}
                              </div>
                              <div className="flex items-center gap-2">
                                <Phone className="w-3 h-3" />
                                {resident.phone}
                              </div>
                              <div className="flex items-center gap-2">
                                <Mail className="w-3 h-3" />
                                {resident.email}
                              </div>
                              <div className="flex items-center gap-2">
                                <Users className="w-3 h-3" />
                                Family of {resident.family}
                              </div>
                            </div>
                            <div className="mt-2 pt-2 border-t text-xs text-muted-foreground">
                              Member since {new Date(resident.memberSince).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services">
            <Card>
              <CardHeader>
                <CardTitle>Service Providers</CardTitle>
                <CardDescription>Local services available in the community</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {serviceProviders.map((provider, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">{provider.name}</h4>
                            <Badge variant="outline">{provider.service}</Badge>
                          </div>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Phone className="w-3 h-3" />
                              {provider.phone}
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-3 h-3" />
                              {provider.location}
                            </div>
                            <div>
                              <strong>Hours:</strong> {provider.availability}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="building">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Building Statistics</CardTitle>
                  <CardDescription>Occupancy and building information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {buildingStats.map((stat) => (
                      <div key={stat.block} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Block {stat.block}</p>
                          <p className="text-sm text-muted-foreground">{stat.totalFlats} total flats</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-4">
                            <div className="text-center">
                              <p className="text-lg font-bold text-green-600">{stat.occupied}</p>
                              <p className="text-xs text-muted-foreground">Occupied</p>
                            </div>
                            <div className="text-center">
                              <p className="text-lg font-bold text-red-600">{stat.vacant}</p>
                              <p className="text-xs text-muted-foreground">Vacant</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Contacts</CardTitle>
                  <CardDescription>Important community contacts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 border rounded">
                      <span className="font-medium">Society Office</span>
                      <a href="tel:+911126453210" className="text-primary text-sm">+91 11-26453210</a>
                    </div>
                    <div className="flex items-center justify-between p-2 border rounded">
                      <span className="font-medium">Security Desk</span>
                      <a href="tel:+911126453211" className="text-primary text-sm">+91 11-26453211</a>
                    </div>
                    <div className="flex items-center justify-between p-2 border rounded">
                      <span className="font-medium">Maintenance</span>
                      <a href="tel:+911126453212" className="text-primary text-sm">+91 11-26453212</a>
                    </div>
                    <div className="flex items-center justify-between p-2 border rounded">
                      <span className="font-medium">Emergency Services</span>
                      <a href="tel:100" className="text-primary text-sm">100</a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};