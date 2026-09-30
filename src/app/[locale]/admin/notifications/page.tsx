import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Send, Bell } from 'lucide-react';

export default function AdminNotificationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">Notifications & Announcements</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Send Notification</CardTitle>
            <CardDescription>Send an email or dashboard alert to students.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Recipient</Label>
              <select className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                <option>All Students</option>
                <option>Tafsir Students</option>
                <option>Qaida Students</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label>Title</Label>
              <Input placeholder="E.g. New Live Class Scheduled" />
            </div>
            <div className="space-y-2">
              <Label>Message</Label>
              <Textarea placeholder="Type your announcement here..." rows={4} />
            </div>
            <Button className="w-full"><Send className="w-4 h-4 mr-2" /> Send Notification</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Announcements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-4 items-start pb-4 border-b">
                <div className="p-2 bg-primary/10 rounded-full text-primary">
                  <Bell className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Eid Holidays Schedule</h4>
                  <p className="text-xs text-muted-foreground mt-1">Sent to: All Students • 2 days ago</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-primary/10 rounded-full text-primary">
                  <Bell className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Assignment 4 Uploaded</h4>
                  <p className="text-xs text-muted-foreground mt-1">Sent to: Tafsir Students • 5 days ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
