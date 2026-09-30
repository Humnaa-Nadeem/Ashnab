'use client';

import { useState, use, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { UploadCloud, CheckCircle2 } from 'lucide-react';
import { getCourseBySlug } from '@/lib/data/mock';

type Course = { id: string; title: string; image_url?: string; is_featured?: boolean; level: string; price: number; slug: string; short_description: string; duration: string; };

export default function PaymentPage({
  params
}: {
  params: Promise<{ locale: string; enrollment: string }>;
}) {
  const { locale, enrollment } = use(params);
  const searchParams = useSearchParams();
  const slug = searchParams.get('course');
  const t = useTranslations('Payment');
  const tCourses = useTranslations('Courses');
  
  const [course, setCourse] = useState<Course | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  
  useEffect(() => {
    if (slug) {
      getCourseBySlug(slug, locale).then(setCourse);
    }
  }, [slug, locale]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate upload and submission
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="flex-1 py-20 bg-muted/20 min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4 max-w-lg">
          <Card className="text-center shadow-lg border-primary/20">
            <CardHeader className="pt-10">
              <div className="mx-auto w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <CardTitle className="text-2xl">{t('proofReceived')}</CardTitle>
              <CardDescription className="text-base mt-2">
                {t('awaitingVerification')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground pb-10">
              <p>
                {t('referenceNumber')} <strong className="text-foreground">{enrollment}</strong>.
              </p>
              <p>
                {t('verificationNotice')}
              </p>
              <Link href="/" className={buttonVariants({ className: 'mt-6 w-full h-12' })}>
                {t('returnToHome')}
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 py-12 bg-muted/20 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl">
        <Card className="shadow-lg border-primary/20">
          <CardHeader className="bg-primary/5 pb-8 border-b text-center">
            <CardTitle className="text-2xl text-primary">{t('completePayment')}</CardTitle>
            <CardDescription className="text-base mt-2">
              {t('followInstructions')}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8 pt-8">
            <div className="bg-muted p-4 rounded-md flex justify-between items-center border">
              <span className="font-medium">{t('enrollmentRef')}</span>
              <span className="font-mono font-bold">{enrollment}</span>
            </div>

            {course && (
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-muted-foreground">{t('courseFee')}</span>
                <span className="font-bold text-xl text-primary">
                  {tCourses('pkr')} {course.price.toLocaleString()}
                </span>
              </div>
            )}

            <div className="space-y-4">
              <h3 className="font-bold text-lg">{t('easypaisaInstructions')}</h3>
              <Alert className="bg-primary/5 border-primary/20">
                <AlertTitle className="text-primary font-bold">{t('accountDetails')}</AlertTitle>
                <AlertDescription className="mt-2 space-y-2">
                  <div className="flex justify-between">
                    <span>{t('accountName')}</span>
                    <strong className="font-medium">Ashnab Quran Institute</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('easypaisaNumber')}</span>
                    <strong className="font-medium tracking-wider text-lg">0300 0000000</strong>
                  </div>
                </AlertDescription>
              </Alert>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>{t('step1')}</li>
                <li>{t('step2')}</li>
                <li>{t('step3')}</li>
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 pt-4 border-t">
              <div className="space-y-2">
                <Label htmlFor="transactionId">{t('transactionId')}</Label>
                <Input 
                  id="transactionId" 
                  placeholder="e.g. 1234567890" 
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label>{t('paymentScreenshot')}</Label>
                <div className="border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-muted/50 transition-colors">
                  <UploadCloud className="w-10 h-10 text-muted-foreground mb-4" />
                  <p className="text-sm font-medium mb-1">{t('uploadPrompt')}</p>
                  <p className="text-xs text-muted-foreground">{t('fileTypes')}</p>
                  <Input type="file" className="hidden" id="screenshot" accept="image/*,.pdf" />
                  <Button type="button" variant="outline" className="mt-4" onClick={() => document.getElementById('screenshot')?.click()}>
                    {t('selectFile')}
                  </Button>
                </div>
              </div>
              
              <Button type="submit" size="lg" className="w-full text-lg h-14">
                {t('submitProof')}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
