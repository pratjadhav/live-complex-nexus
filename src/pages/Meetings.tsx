import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Plus, Users, Clock, MapPin, Video, FileText, Bell } from 'lucide-react';

export const Meetings = () => {
  const upcomingMeetings = [
    {
      id: 1,
      title: "Monthly Society General Meeting",
      date: "2024-01-20",
      time: "10:00 AM",
      location: "Community Hall",
      type: "General",
      organizer: "Admin Team",
      attendees: 45,
      agenda: ["Budget Review", "Maintenance Updates", "New Rules Discussion"],
      status: "scheduled"
    },
    {
      id: 2,
      title: "Emergency Committee Meeting",
      date: "2024-01-18",
      time: "7:00 PM", 
      location: "Conference Room",
      type: "Emergency",
      organizer: "Management Committee",
      attendees: 12,
      agenda: ["Water Supply Issue", "Security Concerns"],
      status: "scheduled"
    },
    {
      id: 3,
      title: "Maintenance Planning Session",
      date: "2024-01-25",
      time: "2:00 PM",
      location: "Virtual Meeting",
      type: "Maintenance",
      organizer: "Maintenance Head",
      attendees: 8,
      agenda: ["Annual Maintenance Plan", "Budget Allocation"],
      status: "scheduled"
    }
  ];

  const pastMeetings = [
    {
      id: 4,
      title: "Society Annual Meeting 2023",
      date: "2023-12-15",
      time: "10:00 AM",
      location: "Community Hall",
      type: "Annual",
      attendees: 67,
      minutes: "Available",
      recordings: "Available"
    },
    {
      id: 5,
      title: "Festival Committee Meeting",
      date: "2023-12-10",
      time: "6:00 PM",
      location: "Conference Room", 
      type: "Committee",
      attendees: 15,
      minutes: "Available",
      recordings: "Not Available"
    }
  ];

  const committeeMembers = [
    { name: "Rajesh Kumar", role: "President", avatar: "RK" },
    { name: "Priya Sharma", role: "Secretary", avatar: "PS" },
    { name: "Amit Singh", role: "Treasurer", avatar: "AS" },
    { name: "Neha Gupta", role: "Maintenance Head", avatar: "NG" },
    { name: "Ravi Patel", role: "Security Head", avatar: "RP" }
  ];

  return (
    <MainLayout>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Meetings</h1>
            <p className="text-muted-foreground">Schedule and manage society meetings</p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Schedule Meeting
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-blue-500" />
                <div>
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-sm text-muted-foreground">Upcoming</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-green-500" />
                <div>
                  <p className="text-2xl font-bold">65</p>
                  <p className="text-sm text-muted-foreground">Total Attendees</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-orange-500" />
                <div>
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-sm text-muted-foreground">Meeting Minutes</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Video className="w-5 h-5 text-purple-500" />
                <div>
                  <p className="text-2xl font-bold">8</p>
                  <p className="text-sm text-muted-foreground">Recordings</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="upcoming" className="space-y-4">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming Meetings</TabsTrigger>
            <TabsTrigger value="past">Past Meetings</TabsTrigger>
            <TabsTrigger value="committee">Committee</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {upcomingMeetings.map((meeting) => (
                <Card key={meeting.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{meeting.title}</CardTitle>
                        <CardDescription>Organized by {meeting.organizer}</CardDescription>
                      </div>
                      <Badge variant={meeting.type === 'Emergency' ? 'destructive' : 'default'}>
                        {meeting.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      {meeting.date} at {meeting.time}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      {meeting.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      {meeting.attendees} expected attendees
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium mb-2">Agenda:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {meeting.agenda.map((item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button size="sm" className="flex-1">
                        <Bell className="w-3 h-3 mr-1" />
                        RSVP
                      </Button>
                      <Button variant="outline" size="sm">
                        <Calendar className="w-3 h-3 mr-1" />
                        Add to Calendar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="past">
            <Card>
              <CardHeader>
                <CardTitle>Meeting History</CardTitle>
                <CardDescription>Past meetings and their documentation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pastMeetings.map((meeting) => (
                    <div key={meeting.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-4">
                          <div>
                            <h4 className="font-medium">{meeting.title}</h4>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {meeting.date} at {meeting.time}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {meeting.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <Users className="w-3 h-3" />
                                {meeting.attendees} attended
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{meeting.type}</Badge>
                        <Button variant="outline" size="sm">
                          <FileText className="w-3 h-3 mr-1" />
                          Minutes
                        </Button>
                        {meeting.recordings === 'Available' && (
                          <Button variant="outline" size="sm">
                            <Video className="w-3 h-3 mr-1" />
                            Recording
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="committee">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Committee Members</CardTitle>
                  <CardDescription>Current management committee</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {committeeMembers.map((member, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarFallback>{member.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{member.name}</p>
                          <p className="text-sm text-muted-foreground">{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Meeting Statistics</CardTitle>
                  <CardDescription>Committee meeting analytics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Average Attendance</span>
                      <span className="font-medium">78%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Meetings This Year</span>
                      <span className="font-medium">24</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Decisions Made</span>
                      <span className="font-medium">156</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Action Items</span>
                      <span className="font-medium">89</span>
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