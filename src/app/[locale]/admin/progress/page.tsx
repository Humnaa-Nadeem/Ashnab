import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';

export default function AdminProgressPage() {
  const progressData = [
    { id: 1, student: 'Ahmad Ali', course: 'Qaida', completed: 15, pending: 15, assignments: '2/4', percentage: 50 },
    { id: 2, student: 'Omar Yasin', course: 'Tarjuma', completed: 60, pending: 0, assignments: '10/10', percentage: 100 },
    { id: 3, student: 'Sara Khan', course: 'Tafsir', completed: 5, pending: 115, assignments: '0/12', percentage: 4 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">Student Progress</h2>
      </div>

      <div className="border rounded-md bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Student</TableHead>
              <TableHead>Course</TableHead>
              <TableHead>Completed Lessons</TableHead>
              <TableHead>Pending Lessons</TableHead>
              <TableHead>Assignments</TableHead>
              <TableHead className="w-[200px]">Overall Progress</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {progressData.map((p) => (
              <TableRow key={p.id}>
                <TableCell className="font-medium">{p.student}</TableCell>
                <TableCell>{p.course}</TableCell>
                <TableCell className="text-green-600 font-medium">{p.completed}</TableCell>
                <TableCell className="text-amber-600 font-medium">{p.pending}</TableCell>
                <TableCell>{p.assignments}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Progress value={p.percentage} className="h-2" />
                    <span className="text-xs font-medium w-8 text-right">{p.percentage}%</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
