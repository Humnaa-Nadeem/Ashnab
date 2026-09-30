import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Eye } from 'lucide-react';

export default function AdminStudentsPage() {
  const students = [
    { id: 1, name: 'Ahmad Ali', email: 'ahmad@example.com', contact: '+92300000000', course: 'Qaida', payment: 'Verified', progress: 45, date: '2026-09-01' },
    { id: 2, name: 'Sara Khan', email: 'sara@example.com', contact: '+97150000000', course: 'Tafsir', payment: 'Pending', progress: 0, date: '2026-09-25' },
    { id: 3, name: 'Omar Yasin', email: 'omar@example.com', contact: '+44700000000', course: 'Tarjuma', payment: 'Verified', progress: 100, date: '2025-12-01' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">Enrolled Students</h2>
      </div>

      <div className="border rounded-md bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Student Name</TableHead>
              <TableHead>Contact Info</TableHead>
              <TableHead>Enrolled Course</TableHead>
              <TableHead>Payment</TableHead>
              <TableHead className="w-[150px]">Progress</TableHead>
              <TableHead className="text-right">Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell className="font-medium">{student.name}</TableCell>
                <TableCell>
                  <div className="text-sm">{student.email}</div>
                  <div className="text-xs text-muted-foreground">{student.contact}</div>
                </TableCell>
                <TableCell>{student.course}</TableCell>
                <TableCell>
                  <Badge variant={student.payment === 'Verified' ? 'default' : 'destructive'}>{student.payment}</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Progress value={student.progress} className="h-2" />
                    <span className="text-xs">{student.progress}%</span>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm"><Eye className="w-4 h-4 mr-2" /> View</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
