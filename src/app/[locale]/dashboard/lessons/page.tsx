'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Lock, PlayCircle, BookOpen, Clock } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function StudentSyllabusPage() {
  const lessons = [
    { id: 1, day: 'Day 01', title: 'Introduction to Noorani Qaida', duration: '30 mins', status: 'completed' },
    { id: 2, day: 'Day 02', title: 'Basic Arabic Letters', duration: '45 mins', status: 'completed' },
    { id: 3, day: 'Day 03', title: 'Harakat (Short Vowels)', duration: '40 mins', status: 'available' },
    { id: 4, day: 'Day 04', title: 'Tanween (Double Vowels)', duration: '35 mins', status: 'locked' },
    { id: 5, day: 'Day 05', title: 'Letters of Elevation', duration: '50 mins', status: 'locked' },
  ];

  return (
    <main className="flex-1 py-8 bg-muted/10 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <Link href="/dashboard" className="text-sm text-primary hover:underline font-medium mb-2 inline-block">
              &larr; Back to Dashboard
            </Link>
            <h1 className="text-3xl font-bold tracking-tight text-primary">Course Syllabus</h1>
            <p className="text-muted-foreground mt-1">Noorani Qaida • 5 Lessons Total</p>
          </div>
          <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-md border shadow-sm">
            <span className="font-bold text-lg text-primary">40%</span>
            <span className="text-sm text-muted-foreground">Complete</span>
          </div>
        </div>

        <div className="relative border-l-2 border-primary/20 ml-4 md:ml-6 space-y-8 pb-10">
          {lessons.map((lesson, index) => (
            <div key={lesson.id} className="relative pl-8 md:pl-10">
              {/* Timeline marker */}
              <div className={`absolute -left-[17px] top-4 w-8 h-8 rounded-full flex items-center justify-center border-4 border-background shadow-sm
                ${lesson.status === 'completed' ? 'bg-emerald-500 text-white' : 
                  lesson.status === 'available' ? 'bg-primary text-white ring-4 ring-primary/20' : 
                  'bg-muted-foreground text-white'}`}>
                {lesson.status === 'completed' && <CheckCircle className="w-4 h-4" />}
                {lesson.status === 'available' && <PlayCircle className="w-4 h-4" />}
                {lesson.status === 'locked' && <Lock className="w-4 h-4" />}
              </div>

              <Card className={`transition-all ${lesson.status === 'available' ? 'border-primary shadow-md' : 'shadow-sm opacity-90'}`}>
                <CardContent className="p-5 flex flex-col md:flex-row gap-4 justify-between md:items-center">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`font-bold text-sm ${lesson.status === 'locked' ? 'text-muted-foreground' : 'text-primary'}`}>
                        {lesson.day}
                      </span>
                      {lesson.status === 'completed' && (
                        <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Completed</span>
                      )}
                      {lesson.status === 'available' && (
                        <span className="text-[10px] uppercase font-bold tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mr-1 animate-pulse"></span> Available
                        </span>
                      )}
                    </div>
                    <h3 className={`text-xl font-bold ${lesson.status === 'locked' ? 'text-muted-foreground' : ''}`}>
                      {lesson.title}
                    </h3>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
                      <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {lesson.duration}</span>
                      <span className="flex items-center"><BookOpen className="w-3 h-3 mr-1" /> Reading & Media</span>
                    </div>
                  </div>
                  
                  <div>
                    {lesson.status === 'completed' && (
                      <Link href={`/dashboard/lessons/${lesson.id}`} className={buttonVariants({ variant: 'outline' })}>
                        Review Lesson
                      </Link>
                    )}
                    {lesson.status === 'available' && (
                      <Link href={`/dashboard/lessons/${lesson.id}`} className={buttonVariants({ className: 'bg-primary shadow-lg' })}>
                        <PlayCircle className="w-4 h-4 mr-2" /> Start Lesson
                      </Link>
                    )}
                    {lesson.status === 'locked' && (
                      <Button variant="secondary" disabled className="bg-muted">
                        <Lock className="w-4 h-4 mr-2" /> Locked
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
