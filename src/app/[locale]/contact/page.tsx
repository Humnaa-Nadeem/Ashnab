'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <main className="flex-1 bg-muted/10 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-2">
            <MessageCircle className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about our courses or want to start learning? We are here to help you on your Quranic journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Contact Information */}
          <div className="space-y-6 md:col-span-1">
            <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
            
            <Card className="border-0 shadow-sm bg-background">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary mt-1">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">WhatsApp / Phone</h4>
                  <p className="text-muted-foreground mt-1 leading-relaxed">
                    +92 300 0000000<br/>
                    (Available 24/7)
                  </p>
                  <a href="https://wa.me/923000000000" target="_blank" rel="noreferrer" className="text-primary font-medium hover:underline inline-block mt-2">
                    Chat on WhatsApp &rarr;
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-background">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="p-3 bg-secondary/20 rounded-full text-secondary mt-1">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email Us</h4>
                  <p className="text-muted-foreground mt-1 leading-relaxed">
                    info@ashnab.com<br/>
                    support@ashnab.com
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-background">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="p-3 bg-blue-500/10 rounded-full text-blue-600 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Location</h4>
                  <p className="text-muted-foreground mt-1 leading-relaxed">
                    Online Global Academy<br/>
                    Teaching Worldwide
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <Card className="border shadow-sm bg-background h-full">
              <CardContent className="p-8 md:p-10">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
                
                {isSuccess ? (
                  <div className="h-[400px] flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                      <Send className="w-10 h-10" />
                    </div>
                    <h4 className="text-3xl font-bold text-emerald-600">Message Sent!</h4>
                    <p className="text-muted-foreground text-lg max-w-md">
                      JazakAllah Khair for reaching out. Our team will get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="John Doe" required className="bg-muted/50" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="john@example.com" required className="bg-muted/50" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="How can we help?" required className="bg-muted/50" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Write your message here..." 
                        rows={6}
                        required 
                        className="bg-muted/50 resize-none"
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full md:w-auto px-8 transition-all" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="flex items-center">Sending...</span>
                      ) : (
                        <span className="flex items-center"><Send className="w-4 h-4 mr-2" /> Send Message</span>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
