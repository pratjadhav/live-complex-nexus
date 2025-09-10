import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const Meetings = () => {
  const upcomingMeetings = [
    {
      id: 1,
      title: "Monthly Society General Meeting",
      date: "2024-01-20",
      time: "10:00 AM",
      location: "Community Hall",
      organizer: "Admin Team",
      attendees: 45
    },
    {
      id: 2,
      title: "Emergency Committee Meeting", 
      date: "2024-01-18",
      time: "7:00 PM",
      location: "Conference Room",
      organizer: "Management Committee",
      attendees: 12
    },
    {
      id: 3,
      title: "Maintenance Planning Session",
      date: "2024-01-25", 
      time: "2:00 PM",
      location: "Virtual Meeting",
      organizer: "Maintenance Head",
      attendees: 8
    }
  ];

  return (
    <MainLayout>
      <div className="p-6 space-y-6">
        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upcoming Meetings */}
          <Card>
            <CardHeader className="bg-blue-500 text-white rounded-t-lg">
              <CardTitle>Upcoming Meetings</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Meeting</TableHead>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead className="text-right">Attendees</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {upcomingMeetings.map((meeting) => (
                    <TableRow key={meeting.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{meeting.title}</p>
                          <p className="text-xs text-muted-foreground">{meeting.organizer}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p>{meeting.date}</p>
                          <p className="text-xs text-muted-foreground">{meeting.time}</p>
                        </div>
                      </TableCell>
                      <TableCell>{meeting.location}</TableCell>
                      <TableCell className="text-right">{meeting.attendees}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Meeting Statistics */}
          <Card>
            <CardHeader className="bg-green-500 text-white rounded-t-lg">
              <CardTitle>Meeting Statistics</CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Meetings This Month:</span>
                <span className="font-bold">8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Average Attendance:</span>
                <span className="font-bold">78%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Minutes Recorded:</span>
                <span className="font-bold">24</span>
              </div>
            </CardContent>
          </Card>

          {/* Committee Members */}
          <Card>
            <CardHeader className="bg-orange-500 text-white rounded-t-lg">
              <CardTitle>Committee Members</CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">President:</span>
                <span className="font-bold">Rajesh Kumar</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Secretary:</span>
                <span className="font-bold">Priya Sharma</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Treasurer:</span>
                <span className="font-bold">Amit Singh</span>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader className="bg-purple-500 text-white rounded-t-lg">
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-3">
              <Button className="w-full">Schedule New Meeting</Button>
              <Button variant="outline" className="w-full">View Meeting Calendar</Button>
              <Button variant="outline" className="w-full">Download Minutes</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};