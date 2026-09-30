'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import Image from 'next/image';
import { Button, buttonVariants } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Navbar() {
  const t = useTranslations('Navigation');
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    { href: '/', label: t('home', { default: 'Home' }) },
    { href: '/courses', label: t('courses', { default: 'Courses' }) },
    { href: '/about', label: t('about', { default: 'About' }) },
    { href: '/live-classes', label: t('liveClasses', { default: 'Live Classes' }) },
    { href: '/faq', label: t('faq', { default: 'FAQ' }) },
    { href: '/contact', label: t('contact', { default: 'Contact' }) },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Ashnab Quran Institute Logo" width={40} height={40} className="rounded-full" />
          <span className="font-bold text-xl text-primary hidden sm:inline-block">Ashnab Quran</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === route.href ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {route.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <LanguageSwitcher />
          <Link href="/student-access" className={buttonVariants({ variant: 'outline', className: 'text-primary border-primary hover:bg-primary/5' })}>
            {t('studentAccess', { default: 'Student Access' })}
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center space-x-2">
          <LanguageSwitcher />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className={buttonVariants({ variant: 'ghost', size: 'icon', className: 'md:hidden' })}>
              <Menu className="h-5 w-5 text-primary" />
              <span className="sr-only">Toggle Menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col">
              <Link
                href="/"
                className="flex items-center space-x-2 mb-6"
                onClick={() => setIsOpen(false)}
              >
                <Image src="/logo.png" alt="Ashnab Quran Institute Logo" width={32} height={32} className="rounded-full" />
                <span className="font-bold text-xl text-primary">Ashnab Quran</span>
              </Link>
              <nav className="flex flex-col space-y-4">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors hover:text-primary ${
                      pathname === route.href ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    {route.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-8 flex flex-col space-y-4">
                <Link href="/student-access" className={buttonVariants({ className: 'w-full' })} onClick={() => setIsOpen(false)}>
                  {t('studentAccess', { default: 'Student Access' })}
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
