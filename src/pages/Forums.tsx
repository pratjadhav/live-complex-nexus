import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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

  const categories = [
    { name: "General", count: 156, color: "bg-blue-500" },
    { name: "Maintenance", count: 89, color: "bg-yellow-500" },
    { name: "Meetings", count: 34, color: "bg-green-500" },
    { name: "Amenities", count: 67, color: "bg-purple-500" }
  ];

  return (
    <MainLayout>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Community Forums</h1>
            <p className="text-muted-foreground">Connect and discuss with your neighbors</p>
          </div>
          <Button>
            <MessageSquare className="w-4 h-4 mr-2" />
            New Topic
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.name}>
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                  <div>
                    <p className="font-medium">{category.name}</p>
                    <p className="text-sm text-muted-foreground">{category.count} topics</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Recent Discussions
            </CardTitle>
            <CardDescription>Latest activity in the community</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {forumTopics.map((topic) => (
                <div key={topic.id} className="flex items-start justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium hover:text-primary cursor-pointer">{topic.title}</h3>
                      {topic.isSticky && <Badge variant="secondary">Pinned</Badge>}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>by {topic.author}</span>
                      <Badge variant="outline">{topic.category}</Badge>
                    </div>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <div className="flex items-center gap-1 mb-1">
                      <MessageSquare className="w-3 h-3" />
                      {topic.replies}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {topic.lastActivity}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};