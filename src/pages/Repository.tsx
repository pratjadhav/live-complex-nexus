import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FileText, Upload, Download, Search, Filter, Folder, Eye, Trash2, Share2, Calendar } from 'lucide-react';

export const Repository = () => {
  const documents = [
    {
      id: 1,
      name: "Society Bylaws 2024",
      type: "PDF",
      size: "2.4 MB",
      category: "Legal",
      uploadDate: "2024-01-01",
      uploadedBy: "Admin",
      downloads: 45,
      isPublic: true
    },
    {
      id: 2,
      name: "Annual Budget Report 2023",
      type: "Excel",
      size: "1.8 MB",
      category: "Financial",
      uploadDate: "2023-12-15",
      uploadedBy: "Treasurer",
      downloads: 23,
      isPublic: true
    },
    {
      id: 3,
      name: "Maintenance Schedule Q1 2024",
      type: "PDF",
      size: "856 KB",
      category: "Maintenance",
      uploadDate: "2024-01-10",
      uploadedBy: "Maintenance Head",
      downloads: 12,
      isPublic: false
    },
    {
      id: 4,
      name: "Meeting Minutes December 2023",
      type: "Word",
      size: "456 KB",
      category: "Meetings",
      uploadDate: "2023-12-20",
      uploadedBy: "Secretary",
      downloads: 34,
      isPublic: true
    },
    {
      id: 5,
      name: "Fire Safety Guidelines",
      type: "PDF",
      size: "3.2 MB",
      category: "Safety",
      uploadDate: "2023-11-15",
      uploadedBy: "Safety Officer",
      downloads: 67,
      isPublic: true
    },
    {
      id: 6,
      name: "Vendor Contact List",
      type: "Excel",
      size: "124 KB",
      category: "Administrative",
      uploadDate: "2024-01-05",
      uploadedBy: "Admin",
      downloads: 18,
      isPublic: false
    }
  ];

  const folders = [
    { name: "Legal Documents", count: 15, lastUpdated: "2024-01-01" },
    { name: "Financial Reports", count: 23, lastUpdated: "2024-01-10" },
    { name: "Meeting Minutes", count: 45, lastUpdated: "2023-12-20" },
    { name: "Maintenance Records", count: 34, lastUpdated: "2024-01-12" },
    { name: "Safety & Security", count: 12, lastUpdated: "2023-11-15" },
    { name: "Administrative", count: 28, lastUpdated: "2024-01-05" }
  ];

  const recentActivity = [
    { action: "Uploaded", document: "Society Bylaws 2024", user: "Admin", time: "2 hours ago" },
    { action: "Downloaded", document: "Annual Budget Report 2023", user: "John Doe", time: "4 hours ago" },
    { action: "Shared", document: "Fire Safety Guidelines", user: "Safety Officer", time: "1 day ago" },
    { action: "Updated", document: "Vendor Contact List", user: "Admin", time: "2 days ago" }
  ];

  const getFileIcon = (type: string) => {
    return <FileText className="w-5 h-5 text-primary" />;
  };

  return (
    <MainLayout>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Document Repository</h1>
            <p className="text-muted-foreground">Centralized document management system</p>
          </div>
          <Button>
            <Upload className="w-4 h-4 mr-2" />
            Upload Document
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-blue-500" />
                <div>
                  <p className="text-2xl font-bold">157</p>
                  <p className="text-sm text-muted-foreground">Total Documents</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Folder className="w-5 h-5 text-green-500" />
                <div>
                  <p className="text-2xl font-bold">6</p>
                  <p className="text-sm text-muted-foreground">Categories</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Download className="w-5 h-5 text-orange-500" />
                <div>
                  <p className="text-2xl font-bold">1,243</p>
                  <p className="text-sm text-muted-foreground">Total Downloads</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Upload className="w-5 h-5 text-purple-500" />
                <div>
                  <p className="text-2xl font-bold">23</p>
                  <p className="text-sm text-muted-foreground">This Month</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="documents" className="space-y-4">
          <TabsList>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="folders">Folders</TabsTrigger>
            <TabsTrigger value="activity">Recent Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="documents">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>All Documents</span>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                      <Input placeholder="Search documents..." className="pl-10 w-64" />
                    </div>
                    <Select>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="legal">Legal</SelectItem>
                        <SelectItem value="financial">Financial</SelectItem>
                        <SelectItem value="maintenance">Maintenance</SelectItem>
                        <SelectItem value="meetings">Meetings</SelectItem>
                        <SelectItem value="safety">Safety</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4" />
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {documents.map((doc) => (
                    <div key={doc.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                      <div className="flex items-center space-x-3">
                        {getFileIcon(doc.type)}
                        <div>
                          <p className="font-medium">{doc.name}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{doc.type} • {doc.size}</span>
                            <Badge variant="outline">{doc.category}</Badge>
                            <span>by {doc.uploadedBy}</span>
                            <span>{doc.uploadDate}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="text-right text-sm text-muted-foreground mr-4">
                          <div className="flex items-center gap-1">
                            <Download className="w-3 h-3" />
                            {doc.downloads}
                          </div>
                          {doc.isPublic ? (
                            <Badge variant="secondary" className="text-xs">Public</Badge>
                          ) : (
                            <Badge variant="outline" className="text-xs">Private</Badge>
                          )}
                        </div>
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share2 className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="folders">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {folders.map((folder, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <Folder className="w-8 h-8 text-primary" />
                      <div className="flex-1">
                        <h3 className="font-medium">{folder.name}</h3>
                        <p className="text-sm text-muted-foreground">{folder.count} documents</p>
                        <p className="text-xs text-muted-foreground">Updated {folder.lastUpdated}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activity">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest document activities in the repository</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-medium">{activity.user}</span> {activity.action.toLowerCase()} 
                          <span className="font-medium"> "{activity.document}"</span>
                        </p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};