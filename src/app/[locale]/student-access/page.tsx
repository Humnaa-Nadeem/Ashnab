'use client';

import { useState } from 'react';
import { useRouter } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslations } from 'next-intl';
import { ArrowLeft } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

export default function StudentAccess() {
  const router = useRouter();
  const t = useTranslations('StudentAccess');
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Check if we have real Supabase credentials
    const hasSupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://placeholder.supabase.co';

    if (!hasSupabaseUrl) {
      // Execute demo mode without touching Supabase to prevent 'Failed to fetch' error overlay
      setTimeout(() => {
        setStep(2);
        setSuccessMsg(t('codeSent', { default: 'Verification code sent!' }) + ' (Demo Mode)');
        setLoading(false);
      }, 500);
      return;
    }
    
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          shouldCreateUser: true,
        },
      });

      if (error) {
        throw error;
      }

      setStep(2);
      setSuccessMsg(t('codeSent', { default: 'Verification code sent!' }));
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Failed to send verification code.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccessMsg('');

    const hasSupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://placeholder.supabase.co';

    if (!hasSupabaseUrl) {
      // Demo mode bypass
      setTimeout(() => {
        if (accessCode === '123456') {
          router.push('/dashboard');
        } else {
          setError(t('invalidCode', { default: 'Invalid code. For demo, use: 123456' }));
        }
        setLoading(false);
      }, 500);
      return;
    }

    try {
      const supabase = createClient();
      const { data, error } = await supabase.auth.verifyOtp({
        email,
        token: accessCode,
        type: 'email',
      });

      if (error) throw error;
      
      if (data.session || data.user) {
        router.push('/dashboard');
      } else {
        throw new Error('Authentication failed');
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || t('invalidCode', { default: 'Invalid code.' }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex-1 min-h-[80vh] flex items-center justify-center bg-muted/20 px-4 py-12">
      <Card className="w-full max-w-md shadow-lg border-primary/20">
        <CardHeader className="space-y-1 text-center bg-primary/5 pb-8 border-b relative">
          {step === 2 && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute left-4 top-4" 
              onClick={() => {
                setStep(1);
                setError('');
                setSuccessMsg('');
              }}
              title={t('back', { default: 'Back' })}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
          )}
          <CardTitle className="text-2xl text-primary">{t('title')}</CardTitle>
          <CardDescription>
            {step === 1 ? t('step1Subtitle', { default: 'Enter your email address to login or create a new account.' }) : t('step2Subtitle', { default: "We've sent a 6-digit verification code to your email." })}
          </CardDescription>
        </CardHeader>
        
        <form onSubmit={step === 1 ? handleSendCode : handleVerify}>
          <CardContent className="space-y-4 pt-8">
            {error && (
              <div className="p-3 bg-destructive/15 text-destructive rounded-md text-sm text-center font-medium">
                {error}
              </div>
            )}
            
            {successMsg && (
              <div className="p-3 bg-green-100 text-green-700 rounded-md text-sm text-center font-medium">
                {successMsg}
              </div>
            )}
            
            {step === 1 ? (
              <div className="space-y-2">
                <Label htmlFor="email">{t('emailLabel', { default: 'Email Address' })}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            ) : (
              <div className="space-y-2">
                <Label htmlFor="accessCode">{t('verificationCode', { default: 'Verification Code' })}</Label>
                <Input
                  id="accessCode"
                  type="text"
                  placeholder={t('verifyCodePlaceholder', { default: 'Enter 6-digit code' })}
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
                  required
                  maxLength={6}
                />
              </div>
            )}
            
            {step === 2 && (
              <p className="text-sm text-muted-foreground pt-2">
                {t('accessCodeHelp')}
              </p>
            )}
          </CardContent>
          
          <CardFooter className="pb-8">
            <Button type="submit" className="w-full h-12 text-lg" disabled={loading}>
              {loading ? '...' : (step === 1 ? t('sendCode', { default: 'Send Verification Code' }) : t('verifyAndLogin', { default: 'Verify & Login' }))}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </main>
  );
}
