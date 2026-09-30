import { getTranslations } from 'next-intl/server';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Video, Clock, Users, MonitorPlay, CheckCircle2, ArrowRight } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { Link } from '@/i18n/routing';

export default async function LiveClassesPage() {
  const t = await getTranslations('LiveClasses');

  const features = [
    {
      icon: <Users className="w-8 h-8 text-secondary mb-4" />,
      title: t('f1Title', { default: '1-on-1 Personalized Attention' }),
      description: t('f1Desc', { default: 'Every student gets dedicated focus from the instructor to ensure correct pronunciation and steady progress.' })
    },
    {
      icon: <Clock className="w-8 h-8 text-secondary mb-4" />,
      title: t('f2Title', { default: 'Flexible Scheduling' }),
      description: t('f2Desc', { default: 'Choose class timings that perfectly fit your daily routine and time zone.' })
    },
    {
      icon: <Video className="w-8 h-8 text-secondary mb-4" />,
      title: t('f3Title', { default: 'Female Instructors Available' }),
      description: t('f3Desc', { default: 'Dedicated female scholars available for sisters and children, ensuring a comfortable learning environment.' })
    },
    {
      icon: <MonitorPlay className="w-8 h-8 text-secondary mb-4" />,
      title: t('f4Title', { default: 'Interactive Digital Tools' }),
      description: t('f4Desc', { default: 'Advanced screen-sharing and visual aids for an immersive Tajweed learning experience.' })
    }
  ];

  const steps = [
    { title: t('step1Title', { default: '1. Choose a Course' }), desc: t('step1Desc', { default: 'Select from our range of specialized courses like Tajweed, Hifz, or Translation.' }) },
    { title: t('step2Title', { default: '2. Schedule Your Class' }), desc: t('step2Desc', { default: 'Pick a time that works best for you. Classes are available 24/7.' }) },
    { title: t('step3Title', { default: '3. Start Learning' }), desc: t('step3Desc', { default: 'Join your instructor live via Zoom or Google Meet and begin your journey.' }) },
  ];

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-primary/5 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
            <Video className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
            {t('title', { default: 'Live Interactive Classes' })}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {t('subtitle', { default: 'Experience personalized, one-on-one Quranic education with expert scholars from the comfort of your home.' })}
          </p>
          <div className="pt-6">
            <Link href="/courses" className={buttonVariants({ size: 'lg', className: 'h-14 px-8 text-lg rounded-full shadow-lg hover:shadow-xl transition-all' })}>
              {t('ctaButton', { default: 'Browse Courses' })}
              <ArrowRight className="ml-2 w-5 h-5 rtl:-scale-x-100" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">{t('featuresTitle', { default: 'Why Choose Our Live Classes?' })}</h2>
            <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <Card key={idx} className="border-primary/10 hover:border-secondary/50 transition-colors bg-primary/5 shadow-sm">
                <CardHeader>
                  {feature.icon}
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t('howItWorksTitle', { default: 'How It Works' })}</h2>
            <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection line for desktop */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-primary-foreground/20 z-0"></div>
            
            {steps.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className="w-24 h-24 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shadow-xl border-4 border-primary">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold pt-4">{step.title}</h3>
                <p className="text-primary-foreground/80">
                  {step.description || step.desc}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-semibold mb-6">{t('ctaTitle', { default: 'Ready to start your journey?' })}</h3>
            <Link href="/courses" className={buttonVariants({ variant: 'secondary', size: 'lg', className: 'h-14 px-10 text-lg rounded-full font-bold shadow-lg hover:shadow-xl transition-all' })}>
              {t('ctaButton', { default: 'Browse Courses' })}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
