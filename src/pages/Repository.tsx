import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FileText, Upload, Download, Folder, Calendar } from 'lucide-react';

export const Repository = () => {
  const documents = [
    {
      id: 1,
      name: "Society Bylaws 2024",
      type: "PDF", 
      size: "2.4 MB",
      category: "Legal",
      uploadDate: "2024-01-01",
      downloadCount: 45
    },
    {
      id: 2,
      name: "Annual Budget Report 2023",
      type: "Excel",
      size: "1.8 MB", 
      category: "Financial",
      uploadDate: "2023-12-15",
      downloadCount: 23
    },
    {
      id: 3,
      name: "Maintenance Schedule Q1 2024",
      type: "PDF",
      size: "856 KB",
      category: "Maintenance", 
      uploadDate: "2024-01-10",
      downloadCount: 12
    },
    {
      id: 4,
      name: "Meeting Minutes December 2023",
      type: "Word",
      size: "456 KB",
      category: "Meetings",
      uploadDate: "2023-12-20",
      downloadCount: 34
    }
  ];

  const folders = [
    { name: "Legal Documents", count: 15, size: "45.2 MB" },
    { name: "Financial Reports", count: 23, size: "67.8 MB" },
    { name: "Meeting Minutes", count: 45, size: "23.4 MB" },
    { name: "Maintenance Records", count: 34, size: "78.9 MB" }
  ];

  const recentActivity = [
    { action: "Uploaded", document: "Society Bylaws 2024", user: "Admin", time: "2 hours ago" },
    { action: "Downloaded", document: "Annual Budget Report 2023", user: "John Doe", time: "4 hours ago" },
    { action: "Shared", document: "Fire Safety Guidelines", user: "Safety Officer", time: "1 day ago" },
    { action: "Updated", document: "Vendor Contact List", user: "Admin", time: "2 days ago" }
  ];

  return (
    <MainLayout>
      <div className="p-6 space-y-6">
        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* All Documents */}
          <Card>
            <CardHeader className="bg-blue-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center justify-between">
                <span>All Documents</span>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <FileText className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Document</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead className="text-right">Downloads</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {documents.map((doc) => (
                    <TableRow key={doc.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{doc.name}</p>
                          <p className="text-xs text-muted-foreground">{doc.size} • {doc.uploadDate}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{doc.category}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">{doc.type}</Badge>
                      </TableCell>
                      <TableCell className="text-right">{doc.downloadCount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Folders */}
          <Card>
            <CardHeader className="bg-green-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center justify-between">
                <span>Document Folders</span>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <Folder className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Folder Name</TableHead>
                    <TableHead className="text-right">Files</TableHead>
                    <TableHead className="text-right">Size</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {folders.map((folder, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{folder.name}</TableCell>
                      <TableCell className="text-right">{folder.count}</TableCell>
                      <TableCell className="text-right">{folder.size}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader className="bg-orange-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center justify-between">
                <span>Recent Activity</span>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <Calendar className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Action</TableHead>
                    <TableHead>Document</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead className="text-right">Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentActivity.map((activity, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Badge variant={activity.action === 'Uploaded' ? 'default' : activity.action === 'Downloaded' ? 'secondary' : 'outline'}>
                          {activity.action}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-medium">{activity.document}</TableCell>
                      <TableCell>{activity.user}</TableCell>
                      <TableCell className="text-right text-muted-foreground">{activity.time}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Repository Stats */}
          <Card>
            <CardHeader className="bg-purple-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center justify-between">
                <span>Repository Statistics</span>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <Upload className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Documents:</span>
                <span className="font-bold">157</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Categories:</span>
                <span className="font-bold">6</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Downloads:</span>
                <span className="font-bold">1,243</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Storage:</span>
                <span className="font-bold">215.3 MB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">This Month Uploads:</span>
                <span className="font-bold">23</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Active Users:</span>
                <span className="font-bold">45</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};