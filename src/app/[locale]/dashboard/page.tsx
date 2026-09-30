import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button, buttonVariants } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Video, FileText, Award, PlayCircle, Clock, CheckCircle, Bell, Upload, Calendar, ArrowRight, Download, FileAudio, FileIcon } from 'lucide-react';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

export default function StudentDashboard() {
  const student = {
    name: 'Ahmad Ali',
    course: {
      name: 'Noorani Qaida',
      image: 'https://images.unsplash.com/photo-1609599006353-e629aaab31ce?auto=format&fit=crop&q=80&w=400',
      description: 'The foundational course for learning how to read the Quran with correct Tajweed rules.',
      teacher: 'Ustadh Omar Yasin',
      progress: 45,
      completedLessons: 12,
      remainingLessons: 15,
      status: 'In Progress'
    },
    todayLesson: {
      title: 'Lesson 13: Rules of Meem Sakinah',
      description: 'Learn the three rules of Meem Sakinah: Ikhfa Shafawi, Idgham Shafawi, and Izhar Shafawi.',
      hasReading: true,
      hasVideo: true,
      hasAudio: true,
      hasPdf: true,
      hasAssignment: true
    },
    assignments: [
      {
        id: 1,
        title: 'Meem Sakinah Audio Recitation',
        lesson: 'Lesson 13: Rules of Meem Sakinah',
        deadline: 'Tomorrow at 11:59 PM',
        status: 'Pending',
        teacherFeedback: null,
        reviewStatus: null
      },
      {
        id: 2,
        title: 'Makharij Written Test',
        lesson: 'Lesson 8: Articulation Points',
        deadline: 'Submitted on Oct 10',
        status: 'Submitted',
        teacherFeedback: 'Excellent pronunciation. Keep practicing the letter "Dhaad".',
        reviewStatus: 'Reviewed & Approved'
      }
    ],
    liveClasses: [
      {
        id: 1,
        course: 'Noorani Qaida Group A',
        date: 'Today',
        time: '7:00 PM (GMT)',
        platform: 'Zoom'
      }
    ],
    notifications: [
      { id: 1, type: 'success', text: 'Payment approved for October.', time: '2 hours ago' },
      { id: 2, type: 'info', text: 'New lesson "Rules of Meem Sakinah" is now available.', time: '5 hours ago' },
      { id: 3, type: 'feedback', text: 'Ustadh Omar reviewed your Makharij assignment.', time: '1 day ago' }
    ],
    certificate: {
      isComplete: false,
      requirements: 'Complete 15 remaining lessons and pass the final assessment.'
    }
  };

  return (
    <main className="flex-1 py-8 bg-muted/10 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-10">
        
        {/* Welcome Section */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-primary">Welcome, {student.name}</h1>
            <p className="text-muted-foreground mt-1">Here is your learning summary for today.</p>
          </div>
          <Link href="/" className={buttonVariants({ variant: 'outline', className: 'w-full sm:w-auto' })}>
            Logout
          </Link>
        </div>

        {/* My Course Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2 border-b pb-2">
            <BookOpen className="w-6 h-6 text-primary" /> My Course
          </h2>
          <Card className="overflow-hidden border-primary/20 bg-primary/5">
            <div className="flex flex-col md:flex-row">
              <div className="relative h-48 md:h-auto md:w-1/3 overflow-hidden">
                <img src={student.course.image} alt="Course" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="p-6 flex-1 space-y-4">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-primary">{student.course.name}</h3>
                    <Badge variant={student.course.status === 'In Progress' ? 'default' : 'secondary'}>{student.course.status}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{student.course.description}</p>
                  <p className="text-sm font-medium mt-2">Teacher: <span className="text-primary">{student.course.teacher}</span></p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Course Progress</span>
                    <span className="font-bold text-primary">{student.course.progress}%</span>
                  </div>
                  <Progress value={student.course.progress} className="h-3" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{student.course.completedLessons} Lessons Completed</span>
                    <span>{student.course.remainingLessons} Lessons Remaining</span>
                  </div>
                  <div className="pt-2">
                    <Link href="/dashboard/lessons" className={buttonVariants({ variant: 'outline', className: 'w-full shadow-sm' })}>
                      View Full Syllabus &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Today's Lesson Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2 border-b pb-2 text-primary">
            <PlayCircle className="w-6 h-6" /> Today's Lesson
          </h2>
          <Card className="border-primary shadow-sm ring-1 ring-primary/20">
            <CardHeader className="bg-primary/5 pb-4 border-b">
              <CardTitle className="text-xl">{student.todayLesson.title}</CardTitle>
              <CardDescription className="text-base mt-2">{student.todayLesson.description}</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <h4 className="font-medium mb-3 text-sm text-muted-foreground uppercase tracking-wider">Lesson Materials</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {student.todayLesson.hasReading && (
                  <Button variant="outline" className="justify-start"><BookOpen className="w-4 h-4 mr-2 text-blue-500" /> Reading</Button>
                )}
                {student.todayLesson.hasVideo && (
                  <Button variant="outline" className="justify-start"><Video className="w-4 h-4 mr-2 text-red-500" /> Video</Button>
                )}
                {student.todayLesson.hasAudio && (
                  <Button variant="outline" className="justify-start"><FileAudio className="w-4 h-4 mr-2 text-amber-500" /> Audio</Button>
                )}
                {student.todayLesson.hasPdf && (
                  <Button variant="outline" className="justify-start"><FileIcon className="w-4 h-4 mr-2 text-purple-500" /> PDF Guide</Button>
                )}
              </div>
              
              {student.todayLesson.hasAssignment && (
                <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-amber-100 rounded-full text-amber-600"><FileText className="w-5 h-5" /></div>
                    <div>
                      <p className="font-semibold text-amber-900">Assignment Included</p>
                      <p className="text-sm text-amber-700">Check the Assignments section to complete it.</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="bg-muted/30 border-t pt-4 flex justify-end">
              <Link href="/dashboard/lessons/3" className={buttonVariants({ size: 'lg', className: 'bg-primary hover:bg-primary/90 w-full sm:w-auto shadow-md' })}>
                <PlayCircle className="w-5 h-5 mr-2" /> Start Lesson
              </Link>
            </CardFooter>
          </Card>
        </section>

        {/* Assignments Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2 border-b pb-2">
            <FileText className="w-6 h-6 text-primary" /> Assignments
          </h2>
          <div className="space-y-4">
            {student.assignments.map((assignment) => (
              <Card key={assignment.id} className={assignment.status === 'Pending' ? 'border-amber-200' : 'border-muted'}>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{assignment.title}</CardTitle>
                      <CardDescription className="mt-1">Related to: {assignment.lesson}</CardDescription>
                    </div>
                    <Badge variant={assignment.status === 'Pending' ? 'default' : 'secondary'} className={assignment.status === 'Pending' ? 'bg-amber-500 hover:bg-amber-600' : ''}>
                      {assignment.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" /> {assignment.status === 'Pending' ? 'Deadline: ' : ''}{assignment.deadline}
                  </div>
                  
                  {assignment.reviewStatus && (
                    <div className="p-3 bg-muted rounded-md border text-sm space-y-2">
                      <div className="flex items-center gap-2 font-medium text-green-700">
                        <CheckCircle className="w-4 h-4" /> {assignment.reviewStatus}
                      </div>
                      <p className="text-muted-foreground italic">" {assignment.teacherFeedback} "</p>
                    </div>
                  )}
                  
                  {assignment.status === 'Pending' && (
                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <Button variant="outline" className="w-full sm:w-auto"><Upload className="w-4 h-4 mr-2" /> Upload File</Button>
                      <span className="text-xs text-muted-foreground self-center">Supported: PDF, Image, Document, Audio</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Live Classes Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2 border-b pb-2">
            <Video className="w-6 h-6 text-primary" /> Upcoming Live Classes
          </h2>
          {student.liveClasses.map((cls) => (
            <Card key={cls.id} className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="space-y-2">
                  <h3 className="font-bold text-lg">{cls.course}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {cls.date}</span>
                    <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {cls.time}</span>
                    <span className="flex items-center"><Video className="w-4 h-4 mr-1" /> {cls.platform}</span>
                  </div>
                </div>
                <Button className="w-full sm:w-auto whitespace-nowrap"><Video className="w-4 h-4 mr-2" /> Join Class</Button>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Notifications Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2 border-b pb-2">
            <Bell className="w-6 h-6 text-primary" /> Notifications
          </h2>
          <Card>
            <CardContent className="p-0">
              <ul className="divide-y">
                {student.notifications.map((notif) => (
                  <li key={notif.id} className="p-4 flex gap-4 hover:bg-muted/50 transition-colors">
                    <div className="mt-0.5">
                      {notif.type === 'success' && <CheckCircle className="w-5 h-5 text-green-500" />}
                      {notif.type === 'info' && <BookOpen className="w-5 h-5 text-blue-500" />}
                      {notif.type === 'feedback' && <FileText className="w-5 h-5 text-amber-500" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{notif.text}</p>
                      <p className="text-xs text-muted-foreground mt-1">{notif.time}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Certificate Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2 border-b pb-2">
            <Award className="w-6 h-6 text-primary" /> Certificate
          </h2>
          <Card className={student.certificate.isComplete ? 'bg-amber-50 border-amber-200' : 'bg-muted border-dashed'}>
            <CardContent className="p-6 text-center space-y-4">
              <Award className={`w-12 h-12 mx-auto ${student.certificate.isComplete ? 'text-amber-500' : 'text-muted-foreground/50'}`} />
              
              {student.certificate.isComplete ? (
                <>
                  <h3 className="text-xl font-bold text-amber-700">Congratulations! Your certificate is ready.</h3>
                  <p className="text-amber-600/80">You have successfully completed all course requirements.</p>
                  <div className="pt-4 flex justify-center gap-4">
                    <Button variant="outline" className="border-amber-500 text-amber-700 hover:bg-amber-100">View Certificate</Button>
                    <Button className="bg-amber-500 hover:bg-amber-600 text-white"><Download className="w-4 h-4 mr-2" /> Download Certificate</Button>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-lg font-medium text-muted-foreground">Certificate Locked</h3>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto">
                    {student.certificate.requirements}
                  </p>
                  <Progress value={student.course.progress} className="h-2 w-full max-w-md mx-auto mt-4" />
                </>
              )}
            </CardContent>
          </Card>
        </section>
        
        {/* Footer padding for mobile */}
        <div className="h-10"></div>
      </div>
    </main>
  );
}
