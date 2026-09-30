import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2 } from 'lucide-react';

export default function AdminCoursesPage() {
  const courses = [
    { id: 1, title: 'Tafsir', price: 10000, duration: '1 Year', status: 'Active' },
    { id: 2, title: 'Qaida', price: 5000, duration: '3 Months', status: 'Active' },
    { id: 3, title: 'Tarjuma', price: 8000, duration: '6 Months', status: 'Inactive' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">Courses Management</h2>
        <Button><Plus className="w-4 h-4 mr-2" /> Add New Course</Button>
      </div>

      <div className="border rounded-md bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Course Name</TableHead>
              <TableHead>Fee (PKR)</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {courses.map((course) => (
              <TableRow key={course.id}>
                <TableCell className="font-medium">{course.title}</TableCell>
                <TableCell>{course.price.toLocaleString()}</TableCell>
                <TableCell>{course.duration}</TableCell>
                <TableCell>
                  <Badge variant={course.status === 'Active' ? 'default' : 'secondary'}>{course.status}</Badge>
                </TableCell>
                <TableCell className="text-right space-x-2">
                  <Button variant="outline" size="icon"><Edit className="w-4 h-4" /></Button>
                  <Button variant="destructive" size="icon"><Trash2 className="w-4 h-4" /></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
