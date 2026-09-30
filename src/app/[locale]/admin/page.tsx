import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Users, BookOpen, CreditCard, Award, ClipboardList, Video, Activity } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">Overview</h2>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-primary/5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total / Active Students</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">12 / 8</div>
            <p className="text-xs text-muted-foreground mt-1">+2 from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
            <CreditCard className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-600">3</div>
            <p className="text-xs text-muted-foreground mt-1">Require verification</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Assignments</CardTitle>
            <ClipboardList className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">5</div>
            <p className="text-xs text-muted-foreground mt-1">Submissions to review</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Live Classes</CardTitle>
            <Video className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600">2</div>
            <p className="text-xs text-muted-foreground mt-1">Scheduled for this week</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Activity className="w-5 h-5 text-primary" /> Recent Activity</CardTitle>
            <CardDescription>Latest actions taken by students on the platform.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Ahmad Ali</TableCell>
                  <TableCell>Submitted Assignment: Alphabet</TableCell>
                  <TableCell className="text-muted-foreground">2 hours ago</TableCell>
                  <TableCell><Badge variant="secondary">Review Needed</Badge></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Sara Khan</TableCell>
                  <TableCell>Uploaded Payment Screenshot</TableCell>
                  <TableCell className="text-muted-foreground">5 hours ago</TableCell>
                  <TableCell><Badge variant="outline" className="text-amber-600 border-amber-600">Pending</Badge></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Omar Yasin</TableCell>
                  <TableCell>Completed Course: Tarjuma</TableCell>
                  <TableCell className="text-muted-foreground">1 day ago</TableCell>
                  <TableCell><Badge variant="default">Completed</Badge></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Platform Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-muted-foreground">Total Courses Available</span>
              <span className="font-medium">6</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-muted-foreground">Completed Courses</span>
              <span className="font-medium text-emerald-600">14</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-muted-foreground">Total Certificates Issued</span>
              <span className="font-medium text-primary">8</span>
            </div>
            <div className="flex justify-between items-center pb-2">
              <span className="text-muted-foreground">Total Revenue (Verified)</span>
              <span className="font-bold text-primary">PKR 85,000</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
