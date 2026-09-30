import { getTranslations } from 'next-intl/server';
import { buttonVariants } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { getCourses } from '@/lib/data/mock';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, BookOpen, Users, Award, CheckCircle2, ArrowRight, GraduationCap, PlayCircle, Star } from 'lucide-react';

type Course = { id: string; title: string; image_url?: string; is_featured?: boolean; level: string; price: number; slug: string; short_description: string; duration: string; };

export default async function HomePage({ params }: { params: Promise<{locale: string}> }) {
  const { locale } = await params;
  const t = await getTranslations('HomePage');
  const tCourses = await getTranslations('Courses');
  const courses = await getCourses(locale);

  return (
    <main className="flex-1 overflow-hidden">
      {/* Hero Section - Elevated with gradients and shapes */}
      <section className="relative w-full py-24 md:py-32 lg:py-40 flex items-center justify-center overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950 -z-20"></div>
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl opacity-50 -z-10"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-3xl opacity-50 -z-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-10 max-w-4xl mx-auto">
            {/* Logo Avatar */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-28 h-28 flex items-center justify-center bg-white dark:bg-gray-900 rounded-full shadow-2xl p-1 border border-primary/20">
                <Image src="/logo.png" alt="Ashnab Quran Institute Logo" width={100} height={100} className="rounded-full object-cover" />
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                Enrollment for 2026 is now open
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Learn the Quran. <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Understand Its Message.</span>
              </h1>
              
              <p className="max-w-[700px] mx-auto text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed">
                {t('heroSubtitle', { default: 'Join Ashnab Quran Institute for authentic Islamic education with experienced teachers from around the globe.' })}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-4">
              <Link href="/courses" className={buttonVariants({ size: 'lg', className: 'h-14 px-8 text-lg rounded-full shadow-xl shadow-primary/20 hover:scale-105 transition-transform' })}>
                {t('exploreCourses', { default: 'Explore Courses' })}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/student-access" className={buttonVariants({ size: 'lg', variant: 'outline', className: 'h-14 px-8 text-lg rounded-full border-2 hover:bg-primary/5' })}>
                <PlayCircle className="mr-2 w-5 h-5" />
                {t('studentAccess', { default: 'Student Access' })}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="border-y bg-background/50 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 divide-x-0 md:divide-x divide-border">
            {[
              { icon: Users, label: "Active Students", value: "1,000+" },
              { icon: GraduationCap, label: "Certified Teachers", value: "50+" },
              { icon: BookOpen, label: "Live Classes", value: "24/7" },
              { icon: Award, label: "Satisfaction", value: "99%" },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center text-center space-y-2">
                <stat.icon className="w-6 h-6 text-primary/60 mb-2" />
                <h4 className="text-3xl font-bold text-foreground">{stat.value}</h4>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Elevated */}
      <section className="w-full py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-3">Why Choose Ashnab</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              {t('whyChooseUs', { default: 'Excellence in Quranic Education' })}
            </h3>
            <p className="text-lg text-muted-foreground">
              We combine traditional teaching methods with modern technology to provide an unparalleled learning experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl -z-10 transform -rotate-1 scale-105 hidden md:block"></div>
            
            {[
              { icon: GraduationCap, title: t('expertTeachers', { default: 'Expert Teachers' }), desc: t('expertTeachersDesc', { default: 'Learn from highly qualified instructors holding authentic Ijazah.' }) },
              { icon: Clock, title: t('flexibleLearning', { default: 'Flexible Learning' }), desc: t('flexibleLearningDesc', { default: 'Access your lessons anytime. Schedule live classes that fit your routine.' }) },
              { icon: Award, title: t('verifiedCertificates', { default: 'Verified Certificates' }), desc: t('verifiedCertificatesDesc', { default: 'Earn a verifiable certificate upon successful completion of your course.' }) }
            ].map((feature, idx) => (
              <div key={idx} className="group flex flex-col items-start p-8 rounded-2xl bg-white dark:bg-slate-950 border shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <feature.icon className="w-32 h-32 transform translate-x-8 -translate-y-8" />
                </div>
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Courses Section - Elevated */}
      <section className="w-full py-24 bg-background relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Curriculum</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                {t('ourCourses', { default: 'Featured Courses' })}
              </h3>
              <p className="text-muted-foreground text-lg">
                {t('explorePaths', { default: 'Explore our structured learning paths designed for all levels. Start your journey today.' })}
              </p>
            </div>
            <Link href="/courses" className="text-primary font-semibold flex items-center hover:underline">
              View all courses <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.slice(0, 3).map((course: Course) => (
              <Card key={course.id} className="group flex flex-col overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 border-0 shadow-lg bg-white dark:bg-slate-900 rounded-2xl">
                <div className="aspect-[4/3] bg-muted flex items-center justify-center relative overflow-hidden">
                  {course.image_url ? (
                    <Image src={course.image_url} alt={course.title} width={400} height={300} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
                      {course.price ? `${tCourses('pkr')} ${course.price}` : <span className="text-secondary">{tCourses('free')}</span>}
                    </span>
                  </div>
                  <CardTitle className="text-2xl line-clamp-1 group-hover:text-primary transition-colors">{course.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="mt-auto pb-6">
                  <CardDescription className="line-clamp-2 text-base mb-6">
                    {course.short_description}
                  </CardDescription>
                  <div className="flex items-center text-sm font-medium text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-950 p-3 rounded-lg border">
                    <Clock size={16} className="mr-2 text-primary" />
                    <span>{course.duration}</span>
                  </div>
                </CardContent>
                
                <CardFooter className="pt-0 pb-6 px-6">
                  <Link href={`/courses/${course.slug}`} className={buttonVariants({ className: 'w-full h-12 rounded-xl text-md shadow-sm' })}>
                    View Course Details
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary -z-20"></div>
        <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4 text-center text-primary-foreground relative z-10">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Ready to begin your journey with the Quran?</h2>
            <p className="text-xl text-primary-foreground/80">Join our global community of learners today. Your first consultation is completely free.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link href="/courses" className={buttonVariants({ variant: 'secondary', size: 'lg', className: 'h-14 px-8 text-lg rounded-full shadow-xl' })}>
                Browse Catalog
              </Link>
              <Link href="/contact" className={buttonVariants({ variant: 'outline', size: 'lg', className: 'h-14 px-8 text-lg rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary' })}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
