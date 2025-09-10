import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { MessageSquare, Users, Clock, TrendingUp } from 'lucide-react';

export const Forums = () => {
  const forumTopics = [
    {
      id: 1,
      title: "Monthly Society Meeting - January 2024",
      category: "Meetings",
      replies: 23,
      lastActivity: "2 hours ago",
      author: "Admin",
      isSticky: true
    },
    {
      id: 2,
      title: "Parking Space Allocation Discussion", 
      category: "General",
      replies: 45,
      lastActivity: "1 day ago",
      author: "John Doe"
    },
    {
      id: 3,
      title: "Water Supply Issues - Block A",
      category: "Maintenance", 
      replies: 12,
      lastActivity: "3 days ago",
      author: "Jane Smith"
    },
    {
      id: 4,
      title: "New Gym Equipment Suggestions",
      category: "Amenities",
      replies: 8,
      lastActivity: "5 days ago", 
      author: "Mike Johnson"
    }
  ];

  const trendingTopics = [
    { topic: "Parking Rules Update", replies: 67, trend: "up" },
    { topic: "Festival Committee", replies: 34, trend: "up" },
    { topic: "Maintenance Schedule", replies: 23, trend: "down" },
    { topic: "Security Guidelines", replies: 45, trend: "up" }
  ];

  const activeMembers = [
    { name: "Rajesh Kumar", posts: 156, role: "Admin" },
    { name: "Priya Sharma", posts: 89, role: "Secretary" },
    { name: "Amit Singh", posts: 67, role: "Member" },
    { name: "Neha Gupta", posts: 45, role: "Committee" }
  ];

  return (
    <MainLayout>
      <div className="p-6 space-y-6">
        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Discussions */}
          <Card>
            <CardHeader className="bg-blue-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center justify-between">
                <span>Recent Discussions</span>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <MessageSquare className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Topic</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead className="text-right">Replies</TableHead>
                    <TableHead className="text-right">Last Activity</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {forumTopics.map((topic) => (
                    <TableRow key={topic.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {topic.isSticky && <Badge variant="secondary" className="text-xs">Pinned</Badge>}
                          <span className="font-medium">{topic.title}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">by {topic.author}</p>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{topic.category}</Badge>
                      </TableCell>
                      <TableCell className="text-right">{topic.replies}</TableCell>
                      <TableCell className="text-right text-sm text-muted-foreground">{topic.lastActivity}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Trending Topics */}
          <Card>
            <CardHeader className="bg-orange-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center justify-between">
                <span>Trending Topics</span>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <TrendingUp className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Topic</TableHead>
                    <TableHead className="text-right">Replies</TableHead>
                    <TableHead className="text-right">Trend</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {trendingTopics.map((topic, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{topic.topic}</TableCell>
                      <TableCell className="text-right">{topic.replies}</TableCell>
                      <TableCell className="text-right">
                        <TrendingUp className={`w-4 h-4 ${topic.trend === 'up' ? 'text-green-500' : 'text-red-500'}`} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Active Members */}
          <Card>
            <CardHeader className="bg-green-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center justify-between">
                <span>Active Members</span>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <Users className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Member</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead className="text-right">Posts</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {activeMembers.map((member, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{member.name}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{member.role}</Badge>
                      </TableCell>
                      <TableCell className="text-right">{member.posts}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Forum Categories */}
          <Card>
            <CardHeader className="bg-purple-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center justify-between">
                <span>Forum Categories</span>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <Clock className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">General Discussions:</span>
                <span className="font-bold">156 topics</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Maintenance Issues:</span>
                <span className="font-bold">89 topics</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Meeting Minutes:</span>
                <span className="font-bold">34 topics</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Amenities & Facilities:</span>
                <span className="font-bold">67 topics</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Announcements:</span>
                <span className="font-bold">23 topics</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Complaints:</span>
                <span className="font-bold">45 topics</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};