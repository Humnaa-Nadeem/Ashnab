'use client';

import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, Download, CheckCircle } from 'lucide-react';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

export default function AdminCertificatesPage() {
  const [certificates, setCertificates] = useState([
    { id: 1, student: 'Omar Yasin', course: 'Tarjuma', completionDate: '2026-08-15', status: 'Generated' },
    { id: 2, student: 'Ayesha Bibi', course: 'Qaida', completionDate: '2026-09-20', status: 'Pending Approval' },
  ]);

  const handleApprove = (id: number) => {
    setCertificates(certs => certs.map(c => c.id === id ? { ...c, status: 'Generated' } : c));
  };

  const handleDownload = async (cert: any) => {
    try {
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage([841.89, 595.28]); // A4 Landscape
      
      const { width, height } = page.getSize();
      const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
      const normalFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

      // Draw border
      page.drawRectangle({
        x: 20, y: 20, width: width - 40, height: height - 40,
        borderColor: rgb(0.1, 0.4, 0.2), borderWidth: 6,
      });
      page.drawRectangle({
        x: 25, y: 25, width: width - 50, height: height - 50,
        borderColor: rgb(0.8, 0.6, 0.2), borderWidth: 2,
      });

      // Title
      page.drawText('CERTIFICATE OF COMPLETION', {
        x: width / 2 - 270,
        y: height - 120,
        size: 36,
        font: font,
        color: rgb(0.1, 0.4, 0.2),
      });
      
      page.drawText('ASHNAB QURAN INSTITUTE', {
        x: width / 2 - 165,
        y: height - 160,
        size: 24,
        font: font,
        color: rgb(0.8, 0.6, 0.2),
      });

      // Body text
      page.drawText('This is to proudly certify that', {
        x: width / 2 - 130, y: height / 2 + 30, size: 20, font: normalFont
      });

      // Student Name
      const nameWidth = font.widthOfTextAtSize(cert.student, 42);
      page.drawText(cert.student, {
        x: width / 2 - (nameWidth / 2), y: height / 2 - 20, size: 42, font: font, color: rgb(0, 0, 0)
      });

      // Course text
      const courseText = `has successfully completed the ${cert.course} course.`;
      const courseTextWidth = normalFont.widthOfTextAtSize(courseText, 20);
      page.drawText(courseText, {
        x: width / 2 - (courseTextWidth / 2), y: height / 2 - 70, size: 20, font: normalFont
      });

      // Date
      page.drawText(`Date: ${cert.completionDate}`, {
        x: 100, y: 100, size: 16, font: normalFont
      });

      // Signature line
      page.drawLine({
        start: { x: width - 250, y: 120 },
        end: { x: width - 100, y: 120 },
        thickness: 1,
        color: rgb(0, 0, 0)
      });
      page.drawText('Instructor Signature', {
        x: width - 235, y: 100, size: 14, font: normalFont
      });

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes as any], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${cert.student.replace(' ', '_')}_Certificate.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error('Error generating PDF:', e);
      alert('Failed to generate PDF document.');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">Certificates</h2>
      </div>

      <div className="border rounded-md bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Student</TableHead>
              <TableHead>Completed Course</TableHead>
              <TableHead>Completion Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {certificates.map((cert) => (
              <TableRow key={cert.id}>
                <TableCell className="font-medium">{cert.student}</TableCell>
                <TableCell>{cert.course}</TableCell>
                <TableCell>{cert.completionDate}</TableCell>
                <TableCell>
                  <Badge variant={cert.status === 'Generated' ? 'default' : 'secondary'} className={cert.status === 'Generated' ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-amber-500 hover:bg-amber-600'}>
                    {cert.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right space-x-2">
                  {cert.status === 'Generated' ? (
                    <Button variant="outline" size="sm" onClick={() => handleDownload(cert)}>
                      <Download className="w-4 h-4 mr-2" /> Download PDF
                    </Button>
                  ) : (
                    <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90" onClick={() => handleApprove(cert.id)}>
                      <CheckCircle className="w-4 h-4 mr-2" /> Approve & Generate
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
