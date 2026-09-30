'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button, buttonVariants } from '@/components/ui/button';
import { CheckCircle, PlayCircle, BookOpen, FileText, Download, Check, Volume2 } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function StudentLessonDetailPage({ params }: { params: { lessonId: string } }) {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <main className="flex-1 bg-muted/10 min-h-screen">
      {/* Lesson Header */}
      <div className="bg-primary text-primary-foreground py-10 px-4">
        <div className="container mx-auto max-w-4xl space-y-4">
          <Link href="/dashboard/lessons" className="text-sm text-primary-foreground/80 hover:text-white flex items-center font-medium">
            &larr; Back to Syllabus
          </Link>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-bold rounded-full">Day 03</span>
            <span className="text-primary-foreground/80 font-medium">Noorani Qaida</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">Harakat (Short Vowels)</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl">
            In this lesson, we will cover the three short vowels: Fathah, Kasrah, and Dhammah. You will learn how they alter the sound of the basic Arabic alphabets.
          </p>
        </div>
      </div>

      {/* Lesson Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl space-y-8">
        
        {/* Objectives */}
        <Card className="border-l-4 border-l-secondary bg-secondary/5 border-r-0 border-t-0 border-b-0 shadow-sm">
          <CardContent className="p-6">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-secondary" /> Learning Objectives</h3>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>Identify the symbols for Fathah, Kasrah, and Dhammah.</li>
              <li>Pronounce the Arabic alphabet correctly when paired with short vowels.</li>
              <li>Understand the concept of a "Mutaharrik" letter.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Video Player */}
        <div className="rounded-xl overflow-hidden shadow-lg border bg-black aspect-video relative flex items-center justify-center group cursor-pointer">
          <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1584286595398-a59f21d313f5?auto=format&fit=crop&q=80&w=1000)' }}></div>
          <div className="w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center z-10 group-hover:scale-110 transition-transform shadow-2xl">
            <PlayCircle className="w-10 h-10 text-white ml-1" />
          </div>
        </div>

        {/* Text Content */}
        <div className="prose prose-emerald max-w-none prose-lg">
          <h3>The Concept of Harakat</h3>
          <p>The word "Harakat" literally means movements. In Tajweed, it refers to the short vowels that give phonetic life to the consonants. Without them, you cannot form proper words.</p>
          
          <div className="grid md:grid-cols-3 gap-6 my-8 not-prose">
            <div className="bg-card p-6 rounded-xl border text-center shadow-sm">
              <div className="text-5xl font-arabic mb-4 text-primary">ـَ</div>
              <h4 className="font-bold text-lg">Fathah</h4>
              <p className="text-sm text-muted-foreground mt-2">A small diagonal stroke placed above a letter. Produces an "a" sound.</p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center shadow-sm">
              <div className="text-5xl font-arabic mb-4 text-primary">ـِ</div>
              <h4 className="font-bold text-lg">Kasrah</h4>
              <p className="text-sm text-muted-foreground mt-2">A small diagonal stroke placed below a letter. Produces an "i" sound.</p>
            </div>
            <div className="bg-card p-6 rounded-xl border text-center shadow-sm">
              <div className="text-5xl font-arabic mb-4 text-primary">ـُ</div>
              <h4 className="font-bold text-lg">Dhammah</h4>
              <p className="text-sm text-muted-foreground mt-2">A small curl (like a tiny Waw) placed above a letter. Produces a "u" sound.</p>
            </div>
          </div>
        </div>

        {/* Audio & Attachments */}
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-amber-100 text-amber-600 rounded-full"><Volume2 className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-sm">Harakat Pronunciation</h4>
                  <p className="text-xs text-muted-foreground">Audio • 2 mins</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="rounded-full w-10 h-10 p-0"><PlayCircle className="w-5 h-5" /></Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-full"><FileText className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-sm">Lesson 03 Guide</h4>
                  <p className="text-xs text-muted-foreground">PDF • 1.2 MB</p>
                </div>
              </div>
              <Button variant="ghost" size="sm"><Download className="w-4 h-4 mr-2" /> Download</Button>
            </CardContent>
          </Card>
        </div>

        {/* Action Bottom Bar */}
        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-6 pb-20">
          <p className="text-muted-foreground">Make sure you have reviewed all materials before continuing.</p>
          
          {isCompleted ? (
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="flex items-center gap-2 text-emerald-600 font-bold bg-emerald-50 px-6 py-3 rounded-full border border-emerald-200">
                <CheckCircle className="w-5 h-5" /> Lesson Completed!
              </div>
              <Link href="/dashboard/lessons" className={buttonVariants({ variant: 'outline', size: 'lg', className: 'rounded-full' })}>
                Next Lesson &rarr;
              </Link>
            </div>
          ) : (
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-lg h-14 px-10 rounded-full bg-emerald-600 hover:bg-emerald-700 shadow-xl shadow-emerald-600/20"
              onClick={() => setIsCompleted(true)}
            >
              <Check className="w-5 h-5 mr-2" /> Mark as Complete
            </Button>
          )}
        </div>

      </div>
    </main>
  );
}
