import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessageSquare, Download } from 'lucide-react';

export default function AdminAssignmentsPage() {
  const submissions = [
    { id: 1, student: 'Ahmad Ali', course: 'Qaida', assignment: 'Recite Alphabet', file: 'ahmad_audio.mp3', status: 'Pending Review' },
    { id: 2, student: 'Omar Yasin', course: 'Tarjuma', assignment: 'Translate Surah Ikhlas', file: 'omar_doc.pdf', status: 'Approved' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">Assignments</h2>
      </div>

      <Tabs defaultValue="submissions" className="w-full">
        <TabsList>
          <TabsTrigger value="submissions">Student Submissions</TabsTrigger>
          <TabsTrigger value="manage">Manage Assignments</TabsTrigger>
        </TabsList>
        <TabsContent value="submissions" className="mt-6">
          <div className="border rounded-md bg-card">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Course</TableHead>
                  <TableHead>Assignment</TableHead>
                  <TableHead>Submitted File</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {submissions.map((sub) => (
                  <TableRow key={sub.id}>
                    <TableCell className="font-medium">{sub.student}</TableCell>
                    <TableCell>{sub.course}</TableCell>
                    <TableCell>{sub.assignment}</TableCell>
                    <TableCell>
                      <Button variant="link" size="sm" className="px-0"><Download className="w-4 h-4 mr-2" /> {sub.file}</Button>
                    </TableCell>
                    <TableCell>
                      <Badge variant={sub.status === 'Approved' ? 'default' : 'secondary'}>{sub.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm"><MessageSquare className="w-4 h-4 mr-2" /> Review</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        <TabsContent value="manage" className="mt-6">
          <div className="p-8 text-center text-muted-foreground border rounded-md bg-card">
            Manage your assignment definitions here.
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
