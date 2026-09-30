import { getTranslations } from 'next-intl/server';
import { buttonVariants } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { getCourses } from '@/lib/data/mock';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, BookOpen } from 'lucide-react';

type Course = { id: string; title: string; image_url?: string; is_featured?: boolean; level: string; price: number; slug: string; short_description: string; duration: string; };

export default async function HomePage({ params }: { params: Promise<{locale: string}> }) {
  const { locale } = await params;
  const t = await getTranslations('HomePage');
  const tCourses = await getTranslations('Courses');
  const courses = await getCourses(locale);

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-20 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center space-y-8">
          {/* Logo Placeholder */}
          <div className="w-32 h-32 flex items-center justify-center">
            <Image src="/logo.png" alt="Ashnab Quran Institute Logo" width={128} height={128} className="rounded-full shadow-lg border-4 border-white" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-primary">
            {t('heroTitle', { default: 'Learn the Quran. Understand Its Message. Live Its Guidance.' })}
          </h1>
          
          <p className="max-w-[600px] text-lg text-muted-foreground">
            {t('heroSubtitle', { default: 'Join Ashnab Quran Institute for authentic Islamic education with experienced teachers.' })}
          </p>
          
            <Link href="/courses" className={buttonVariants({ size: 'lg' })}>
              {t('exploreCourses', { default: 'Explore Courses' })}
            </Link>
            <Link href="/student-access" className={buttonVariants({ size: 'lg', variant: 'outline' })}>
              {t('studentAccess', { default: 'Student Access' })}
            </Link>
        </div>
      </section>

      {/* Our Courses Section */}
      <section className="w-full py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t('ourCourses', { default: 'Our Courses' })}</h2>
            <p className="text-muted-foreground text-lg max-w-[600px] mx-auto">
              {t('explorePaths', { default: 'Explore our structured learning paths designed for all levels. Start your Quranic journey today.' })}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.slice(0, 6).map((course: Course) => (
              <Card key={course.id} className="flex flex-col overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video bg-primary/10 flex items-center justify-center relative">
                  {course.image_url ? (
                    <Image src={course.image_url} alt={course.title} width={400} height={225} className="w-full h-full object-cover" />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-primary/50">
                      <BookOpen size={48} className="mb-2" />
                      <span className="font-medium">{course.title}</span>
                    </div>
                  )}
                  {course.is_featured && (
                    <span className="absolute top-4 right-4 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-medium text-primary/80 bg-primary/10 px-2 py-1 rounded">
                      {course.level}
                    </span>
                    <span className="font-bold text-lg text-primary">
                      {course.price ? `${tCourses('pkr')} ${course.price}` : tCourses('free')}
                    </span>
                  </div>
                  <CardTitle className="text-xl line-clamp-1">{course.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {course.short_description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="mt-auto border-t pt-4">
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Clock size={16} className="mr-2" />
                    <span>{course.duration}</span>
                  </div>
                </CardContent>
                
                <CardFooter className="bg-primary/5 pt-4">
                  <Link href={`/courses/${course.slug}`} className={buttonVariants({ className: 'w-full' })}>
                    View Course
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="w-full py-20 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            {t('whyChooseUs', { default: 'Why Learn With Ashnab Quran Institute' })}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 border rounded-xl shadow-sm bg-card">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">{t('expertTeachers', { default: 'Expert Teachers' })}</h3>
              <p className="text-muted-foreground">{t('expertTeachersDesc', { default: 'Learn from qualified instructors with deep knowledge of the Quran.' })}</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 border rounded-xl shadow-sm bg-card">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">{t('flexibleLearning', { default: 'Flexible Learning' })}</h3>
              <p className="text-muted-foreground">{t('flexibleLearningDesc', { default: 'Access your lessons anytime and follow a structured curriculum.' })}</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 border rounded-xl shadow-sm bg-card">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">{t('verifiedCertificates', { default: 'Verified Certificates' })}</h3>
              <p className="text-muted-foreground">{t('verifiedCertificatesDesc', { default: 'Earn a verifiable certificate upon successful completion of your course.' })}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
