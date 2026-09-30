import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, X, Image as ImageIcon } from 'lucide-react';

export default function AdminPaymentsPage() {
  const payments = [
    { id: 1, student: 'Sara Khan', course: 'Tafsir', amount: '10,000', txnId: 'TID-9923841', status: 'Pending' },
    { id: 2, student: 'Usman Raza', course: 'Khatm-ul-Quran', amount: '7,000', txnId: 'TID-1120495', status: 'Pending' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">Payment Verification</h2>
      </div>

      <div className="border rounded-md bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Student</TableHead>
              <TableHead>Course</TableHead>
              <TableHead>Amount (PKR)</TableHead>
              <TableHead>Transaction ID</TableHead>
              <TableHead>Proof</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((p) => (
              <TableRow key={p.id}>
                <TableCell className="font-medium">{p.student}</TableCell>
                <TableCell>{p.course}</TableCell>
                <TableCell>{p.amount}</TableCell>
                <TableCell className="font-mono text-sm">{p.txnId}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm"><ImageIcon className="w-4 h-4 mr-2" /> View Screenshot</Button>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary">{p.status}</Badge>
                </TableCell>
                <TableCell className="text-right space-x-2">
                  <Button variant="default" size="sm" className="bg-green-600 hover:bg-green-700"><Check className="w-4 h-4 mr-1" /> Approve</Button>
                  <Button variant="destructive" size="sm"><X className="w-4 h-4 mr-1" /> Reject</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
