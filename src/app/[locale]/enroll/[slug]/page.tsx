'use client';

import { useState, use, useEffect } from 'react';
import { useRouter } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { getCourseBySlug } from '@/lib/data/mock';

type Course = { id: string; title: string; image_url?: string; is_featured?: boolean; level: string; price: number; slug: string; short_description: string; duration: string; lessons_count: number; };

export default function EnrollPage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = use(params);
  const router = useRouter();
  const t = useTranslations('Enroll');
  const tCourses = useTranslations('Courses');
  const [course, setCourse] = useState<Course | null>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    country: '',
  });

  useEffect(() => {
    getCourseBySlug(slug, locale).then(setCourse);
  }, [slug, locale]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate creating enrollment reference and proceeding to payment
    const referenceNumber = `AQI-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    
    // In a real app we'd save this to Supabase
    // Then route to payment step with the reference number or enrollment ID
    router.push(`/payment/${referenceNumber}?course=${slug}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  if (!course) return <div className="p-12 text-center">Loading...</div>;

  return (
    <main className="flex-1 py-12 bg-muted/20 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl">
        <Card className="shadow-lg border-primary/20">
          <CardHeader className="bg-primary/5 text-center pb-8 border-b">
            <CardTitle className="text-2xl text-primary">{t('enrollIn')} {course.title}</CardTitle>
            <CardDescription className="text-base mt-2">
              {t('provideDetails')}
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6 pt-8">
              <div className="space-y-2">
                <Label htmlFor="name">{t('fullName')}</Label>
                <Input 
                  id="name" 
                  placeholder={t('fullName')} 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">{t('emailAddress')}</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder={t('emailAddress')} 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                />
                <p className="text-xs text-muted-foreground">{t('emailHelp')}</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp">{t('whatsappNumber')}</Label>
                <Input 
                  id="whatsapp" 
                  type="tel" 
                  placeholder="+92 300 0000000" 
                  required 
                  value={formData.whatsapp}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="country">{t('country')}</Label>
                <Input 
                  id="country" 
                  placeholder={t('country')} 
                  required 
                  value={formData.country}
                  onChange={handleChange}
                />
              </div>
              
              <div className="bg-muted p-4 rounded-md flex justify-between items-center mt-6 border">
                <span className="font-medium text-foreground">{t('courseFee')}:</span>
                <span className="font-bold text-primary text-xl">
                  {course.price > 0 ? `${tCourses('pkr')} ${course.price.toLocaleString()}` : tCourses('free')}
                </span>
              </div>
            </CardContent>
            
            <CardFooter className="pt-2 pb-8 px-6">
              <Button type="submit" size="lg" className="w-full text-lg h-14">
                {t('continueToPayment')}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </main>
  );
}
