'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Save, User, Bell, Shield, Globe } from 'lucide-react';

export default function AdminSettingsPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Settings saved successfully!');
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground mt-1">Manage your account settings and preferences.</p>
        </div>
      </div>

      <Separator />

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-4 md:inline-grid">
          <TabsTrigger value="general" className="flex gap-2"><User className="w-4 h-4" /> <span className="hidden sm:inline">General</span></TabsTrigger>
          <TabsTrigger value="security" className="flex gap-2"><Shield className="w-4 h-4" /> <span className="hidden sm:inline">Security</span></TabsTrigger>
          <TabsTrigger value="notifications" className="flex gap-2"><Bell className="w-4 h-4" /> <span className="hidden sm:inline">Notifications</span></TabsTrigger>
          <TabsTrigger value="localization" className="flex gap-2"><Globe className="w-4 h-4" /> <span className="hidden sm:inline">Localization</span></TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Update your account's profile information and email address.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue="Admin User" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="admin@ashnab.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="organization">Organization Name</Label>
                <Input id="organization" defaultValue="Ashnab Quran Institute" />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={isLoading} className="ml-auto">
                {isLoading ? 'Saving...' : <><Save className="w-4 h-4 mr-2" /> Save Changes</>}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>
                Update your password and secure your account.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current_password">Current Password</Label>
                <Input id="current_password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new_password">New Password</Label>
                <Input id="new_password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm_password">Confirm New Password</Label>
                <Input id="confirm_password" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={isLoading} className="ml-auto">
                {isLoading ? 'Saving...' : <><Save className="w-4 h-4 mr-2" /> Update Password</>}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Choose what notifications you want to receive.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between border-b pb-4">
                <div className="space-y-0.5">
                  <Label className="text-base">New Student Enrollments</Label>
                  <p className="text-sm text-muted-foreground">Receive an email when a new student enrolls.</p>
                </div>
                <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full cursor-pointer">Enabled</div>
              </div>
              <div className="flex items-center justify-between border-b pb-4">
                <div className="space-y-0.5">
                  <Label className="text-base">Payment Receipts</Label>
                  <p className="text-sm text-muted-foreground">Receive a notification when a payment is processed.</p>
                </div>
                <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full cursor-pointer">Enabled</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">System Updates</Label>
                  <p className="text-sm text-muted-foreground">Receive alerts about platform maintenance.</p>
                </div>
                <div className="bg-muted text-muted-foreground text-xs font-bold px-3 py-1 rounded-full cursor-pointer">Disabled</div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="localization" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Localization Settings</CardTitle>
              <CardDescription>
                Manage default language and region settings.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="default_language">Default Language</Label>
                <Input id="default_language" defaultValue="English" disabled />
                <p className="text-xs text-muted-foreground">System language is managed via next-intl configuration.</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Input id="timezone" defaultValue="Asia/Dubai" />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={isLoading} className="ml-auto">
                {isLoading ? 'Saving...' : <><Save className="w-4 h-4 mr-2" /> Save Settings</>}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
