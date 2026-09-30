import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Globe, Users, Award, Heart, ShieldCheck, Target, GraduationCap } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { buttonVariants } from '@/components/ui/button';
import Image from 'next/image';

export default function AboutPage() {
  const stats = [
    { label: "Active Students", value: "500+", icon: <Users className="w-6 h-6 text-primary" /> },
    { label: "Expert Instructors", value: "50+", icon: <GraduationCap className="w-6 h-6 text-primary" /> },
    { label: "Countries Reached", value: "25+", icon: <Globe className="w-6 h-6 text-primary" /> },
    { label: "Years of Excellence", value: "5+", icon: <Award className="w-6 h-6 text-primary" /> },
  ];

  const values = [
    {
      title: "Authentic Knowledge",
      description: "We ensure all our teachings are deeply rooted in authentic Islamic tradition, passing down knowledge exactly as it was revealed.",
      icon: <BookOpen className="w-8 h-8 text-secondary" />
    },
    {
      title: "Global Accessibility",
      description: "Breaking geographical barriers to bring high-quality Quranic education directly to your home, regardless of where you live.",
      icon: <Globe className="w-8 h-8 text-secondary" />
    },
    {
      title: "Compassionate Teaching",
      description: "Our instructors are trained not just in knowledge, but in empathy and patience, ensuring a welcoming environment for every student.",
      icon: <Heart className="w-8 h-8 text-secondary" />
    },
    {
      title: "Uncompromising Quality",
      description: "From our curriculum design to our platform technology, we maintain the highest standards of excellence in everything we do.",
      icon: <ShieldCheck className="w-8 h-8 text-secondary" />
    }
  ];

  return (
    <main className="flex-1 bg-background">
      {/* Hero Section */}
      <section className="bg-primary/5 py-20 px-4">
        <div className="container mx-auto max-w-5xl text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary tracking-tight">
            Our Journey & Vision
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Ashnab Quran Institute was founded with a single, profound mission: to make authentic Quranic education accessible to every Muslim home across the globe.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-primary-foreground/20">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-2">
                <div className="p-3 bg-background rounded-full mb-2">
                  {stat.icon}
                </div>
                <span className="text-4xl font-bold">{stat.value}</span>
                <span className="text-sm uppercase tracking-wider text-primary-foreground/80">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center p-3 bg-secondary/20 rounded-full mb-2">
                <Target className="w-8 h-8 text-secondary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We strive to build a generation deeply connected to the Book of Allah. By leveraging modern technology, we connect passionate learners with certified scholars, eliminating the hurdles of distance, time, and language.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you are a complete beginner learning the Arabic alphabet, or an advanced student pursuing Ijazah, our tailored approach ensures that you receive the guidance you need.
              </p>
            </div>
            
            <div className="bg-muted rounded-3xl p-8 border shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full z-0"></div>
              <div className="relative z-10 space-y-6">
                <h3 className="text-2xl font-bold text-primary">The Ashnab Difference</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Certified instructors with authentic Sanad (chain of transmission).</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Personalized 1-on-1 sessions tailored to your learning pace.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Interactive digital curriculum designed for maximum engagement.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Dedicated female scholars for sisters and children.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Core Values</h2>
            <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
              These principles guide everything we do, from selecting our teachers to designing our courses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <Card key={idx} className="border-0 shadow-md bg-background hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-secondary/10 rounded-full">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Become part of our growing family.</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join hundreds of students who are successfully learning and memorizing the Quran with us every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses" className={buttonVariants({ size: 'lg', className: 'h-14 px-8 text-lg rounded-full' })}>
              Start Learning Today
            </Link>
            <Link href="/contact" className={buttonVariants({ variant: 'outline', size: 'lg', className: 'h-14 px-8 text-lg rounded-full' })}>
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
