'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Plus, GripVertical, CheckCircle, Lock, LockOpen, Upload, Video, FileText, Image as ImageIcon, Music, Save } from 'lucide-react';

export default function AdminDailyLessonsPage() {
  const [lessons, setLessons] = useState([
    { id: 1, day: 'Day 01', title: 'Introduction to Noorani Qaida', status: 'Published', isLocked: false },
    { id: 2, day: 'Day 02', title: 'Basic Arabic Letters', status: 'Published', isLocked: false },
    { id: 3, day: 'Day 03', title: 'Harakat (Short Vowels)', status: 'Draft', isLocked: true },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">Daily Lesson System</h2>
        <select className="h-10 w-[250px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
          <option>Course: Noorani Qaida</option>
          <option>Course: Tafsir</option>
        </select>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Left Side: Lesson Ordering */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Course Syllabus</h3>
            <Button variant="outline" size="sm"><Plus className="w-4 h-4 mr-2" /> Add Module</Button>
          </div>
          
          <div className="space-y-3">
            {lessons.map((lesson) => (
              <div key={lesson.id} className="flex items-center gap-3 p-3 bg-card border rounded-md shadow-sm hover:border-primary/50 transition-colors cursor-pointer">
                <GripVertical className="w-5 h-5 text-muted-foreground cursor-grab" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-primary">{lesson.day}</span>
                    <span className="font-medium text-sm">{lesson.title}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1.5">
                    <Badge variant={lesson.status === 'Published' ? 'default' : 'secondary'} className="text-[10px] px-1.5 py-0">
                      {lesson.status}
                    </Badge>
                    {lesson.isLocked ? (
                      <span className="flex items-center text-[10px] text-amber-600"><Lock className="w-3 h-3 mr-1" /> Locked</span>
                    ) : (
                      <span className="flex items-center text-[10px] text-emerald-600"><LockOpen className="w-3 h-3 mr-1" /> Unlocked</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Lesson Editor */}
        <div className="lg:col-span-7">
          <Card>
            <CardHeader className="bg-muted/30 border-b">
              <CardTitle>Edit Lesson: Day 01</CardTitle>
              <CardDescription>Configure the content and media for this specific day.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Day / Module Number</Label>
                  <Input defaultValue="Day 01" />
                </div>
                <div className="space-y-2">
                  <Label>Lesson Title</Label>
                  <Input defaultValue="Introduction to Noorani Qaida" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Learning Objectives</Label>
                <Input defaultValue="Understand the importance of Tajweed and the origin of Arabic alphabets." />
              </div>

              <div className="space-y-2">
                <Label>Text Content</Label>
                <Textarea rows={6} defaultValue="The Noorani Qaida is the foundational book for learning how to read the Quran..." />
              </div>

              {/* Media Uploads */}
              <div className="space-y-3">
                <Label>Media & Resources</Label>
                <div className="grid sm:grid-cols-2 gap-3">
                  <Button variant="outline" className="justify-start"><Video className="w-4 h-4 mr-2 text-blue-500" /> Upload Video</Button>
                  <Button variant="outline" className="justify-start"><Music className="w-4 h-4 mr-2 text-amber-500" /> Upload Audio/Recitation</Button>
                  <Button variant="outline" className="justify-start"><FileText className="w-4 h-4 mr-2 text-red-500" /> Upload PDF Guide</Button>
                  <Button variant="outline" className="justify-start"><ImageIcon className="w-4 h-4 mr-2 text-purple-500" /> Upload Images</Button>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t">
                <Label>Assignment Settings</Label>
                <div className="flex items-center gap-4 mt-2">
                  <select className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                    <option>No Assignment</option>
                    <option>Meem Sakinah Audio Recitation</option>
                    <option>Create New Assignment...</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t">
                <div className="flex items-center gap-4">
                  <Badge variant="outline" className="border-emerald-500 text-emerald-600"><CheckCircle className="w-3 h-3 mr-1" /> Published</Badge>
                  <Button variant="link" className="text-muted-foreground px-0">Unpublish</Button>
                </div>
                <Button className="bg-primary hover:bg-primary/90"><Save className="w-4 h-4 mr-2" /> Save Lesson</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
