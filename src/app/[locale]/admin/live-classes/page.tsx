import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Plus, Video, Calendar, Edit, Trash2 } from 'lucide-react';

export default function AdminLiveClassesPage() {
  const classes = [
    { id: 1, course: 'Tafsir Group A', date: 'Oct 01, 2026', time: '14:00 GMT', platform: 'Zoom', status: 'Scheduled' },
    { id: 2, course: 'Hifz 1-on-1 (Ahmad)', date: 'Oct 02, 2026', time: '09:00 GMT', platform: 'Google Meet', status: 'Scheduled' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">Live Classes</h2>
        <Button><Plus className="w-4 h-4 mr-2" /> Add Live Class</Button>
      </div>

      <div className="border rounded-md bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Target Audience / Course</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Platform</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {classes.map((cls) => (
              <TableRow key={cls.id}>
                <TableCell className="font-medium">{cls.course}</TableCell>
                <TableCell>
                  <div className="flex items-center text-muted-foreground"><Calendar className="w-4 h-4 mr-2" /> {cls.date}</div>
                </TableCell>
                <TableCell>{cls.time}</TableCell>
                <TableCell>
                  <div className="flex items-center"><Video className="w-4 h-4 mr-2 text-primary" /> {cls.platform}</div>
                </TableCell>
                <TableCell>
                  <Badge variant="default" className="bg-blue-500 hover:bg-blue-600">{cls.status}</Badge>
                </TableCell>
                <TableCell className="text-right space-x-2">
                  <Button variant="outline" size="sm">Start</Button>
                  <Button variant="ghost" size="icon"><Edit className="w-4 h-4" /></Button>
                  <Button variant="ghost" size="icon" className="text-destructive"><Trash2 className="w-4 h-4" /></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
