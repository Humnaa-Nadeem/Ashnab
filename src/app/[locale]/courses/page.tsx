import { getTranslations } from 'next-intl/server';
import { getCourses } from '@/lib/data/mock';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { Clock, BookOpen, Star } from 'lucide-react';
import Image from 'next/image';

type Course = { id: string; title: string; image_url?: string; is_featured?: boolean; level: string; price: number; slug: string; short_description: string; duration: string; lessons_count: number; };

export default async function CoursesPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('Courses');
  const courses = await getCourses(locale);

  return (
    <main className="flex-1 py-16 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary backdrop-blur-sm mb-2">
            Explore our curriculum
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">{t('title', { default: 'Our Courses' })}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {t('subtitle', { default: 'Choose from our structured courses designed for all levels. Start your journey today.' })}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course: Course) => (
            <Card key={course.id} className="group flex flex-col overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 border-0 shadow-lg bg-white dark:bg-slate-900 rounded-2xl h-full">
              <div className="aspect-[4/3] bg-muted flex items-center justify-center relative overflow-hidden">
                {course.image_url ? (
                  <Image 
                    src={course.image_url} 
                    alt={course.title} 
                    width={600} 
                    height={450} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex flex-col items-center justify-center text-primary/60 group-hover:scale-105 transition-transform duration-500">
                    <BookOpen size={64} className="mb-4 opacity-50" />
                  </div>
                )}
                {course.is_featured && (
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/90 backdrop-blur-sm text-foreground text-xs font-bold px-3 py-1.5 rounded-full flex items-center shadow-sm">
                    <Star className="w-3 h-3 text-secondary mr-1 fill-secondary" /> Featured
                  </div>
                )}
              </div>
              
              <CardHeader className="pt-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider">
                    {course.level}
                  </span>
                  <span className="font-extrabold text-lg text-foreground">
                    {course.price > 0 ? `${t('pkr')} ${course.price.toLocaleString()}` : <span className="text-secondary">{t('free')}</span>}
                  </span>
                </div>
                <CardTitle className="text-2xl line-clamp-1 group-hover:text-primary transition-colors">{course.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 pb-6">
                <CardDescription className="line-clamp-2 text-base mb-6">
                  {course.short_description}
                </CardDescription>
                
                <div className="flex flex-col gap-3 text-sm font-medium text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-3 text-primary" />
                    <span>{course.duration || 'Flexible duration'}</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen size={16} className="mr-3 text-primary" />
                    <span>{course.lessons_count} {t('lessons')}</span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="pt-0 pb-6 px-6">
                <Link href={`/courses/${course.slug}`} className={buttonVariants({ className: 'w-full h-12 rounded-xl text-md shadow-sm' })}>
                  {t('viewDetails', { default: 'View Course Details' })}
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
