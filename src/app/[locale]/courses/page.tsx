import { getTranslations } from 'next-intl/server';
import { getCourses } from '@/lib/data/mock';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { Clock, BookOpen } from 'lucide-react';

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
    <main className="flex-1 py-12 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary mb-4">{t('title', { default: 'Our Courses' })}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle', { default: 'Choose from our structured courses designed for all levels.' })}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course: Course) => (
            <Card key={course.id} className="flex flex-col overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-video bg-primary/10 flex items-center justify-center relative">
                {course.image_url ? (
                  <img src={course.image_url} alt={course.title} className="w-full h-full object-cover" />
                ) : (
                  <BookOpen className="w-16 h-16 text-primary/40" />
                )}
                {course.level && (
                  <span className="absolute top-2 right-2 bg-secondary text-secondary-foreground text-xs font-bold px-2 py-1 rounded">
                    {course.level}
                  </span>
                )}
              </div>
              <CardHeader>
                <CardTitle className="text-xl line-clamp-1 text-primary">{course.title}</CardTitle>
                <CardDescription className="line-clamp-2 mt-2">{course.short_description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{course.duration || 'Flexible duration'}</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-2" />
                    <span>{course.lessons_count} {t('lessons')}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between border-t bg-muted/10 p-4">
                <div className="font-bold text-lg text-primary">
                  {course.price > 0 ? `${t('pkr')} ${course.price.toLocaleString()}` : t('free')}
                </div>
                <Link href={`/courses/${course.slug}`} className={buttonVariants()}>
                  {t('viewDetails', { default: 'View Details' })}
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
