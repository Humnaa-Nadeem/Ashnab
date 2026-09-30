import { getTranslations } from 'next-intl/server';
import { getCourseBySlug } from '@/lib/data/mock';
import { notFound } from 'next/navigation';
import { buttonVariants } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { Clock, BookOpen, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default async function CourseDetailsPage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getTranslations('Courses');
  const course = await getCourseBySlug(slug, locale);

  if (!course) {
    notFound();
  }

  return (
    <main className="flex-1">
      {/* Course Banner */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            {course.level && (
              <span className="inline-block bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">
                {course.level}
              </span>
            )}
            <h1 className="text-3xl md:text-5xl font-bold mb-6">{course.title}</h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              {course.short_description}
            </p>
            <div className="flex flex-wrap gap-6 text-sm font-medium">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-secondary" />
                <span>{course.duration || t('flexibleDuration')}</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-secondary" />
                <span>{course.lessons_count} {t('lessons')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">{t('aboutThisCourse')}</h2>
              <div className="prose prose-slate max-w-none text-muted-foreground leading-relaxed">
                <p>{course.detailed_description}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">{t('whatYouWillLearn')}</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {course.what_you_will_learn?.map((item: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 mr-2 text-secondary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div>
            <Card className="sticky top-24 border-primary/20 shadow-lg">
              <CardContent className="p-6">
                <div className="mb-6">
                  <span className="text-3xl font-bold text-primary">
                    {course.price > 0 ? `${t('pkr')} ${course.price.toLocaleString()}` : t('free')}
                  </span>
                </div>
                
                <div className="space-y-4 mb-6">
                  <Link href={`/enroll/${course.slug}`} className={buttonVariants({ className: 'w-full text-lg h-12', size: 'lg' })}>
                    {t('enrollNow', { default: 'Enroll Now' })}
                  </Link>
                  <a href="https://wa.me/971503072289?text=Assalamu%20Alaikum%2C%20I%20am%20interested%20in%20your%20Quran%20courses.%20I%20would%20like%20to%20get%20more%20information." target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: 'outline', className: 'w-full h-12' })}>
                    {t('askOnWhatsapp')}
                  </a>
                </div>

                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex justify-between border-b pb-2">
                    <span>{t('level')}</span>
                    <span className="font-medium text-foreground">{course.level || 'All Levels'}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>{t('duration')}</span>
                    <span className="font-medium text-foreground">{course.duration}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>{t('lessons')}</span>
                    <span className="font-medium text-foreground">{course.lessons_count}</span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span>{t('certificate')}</span>
                    <span className="font-medium text-foreground">{t('yes')}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
