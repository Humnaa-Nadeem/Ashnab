import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { MessageCircle, Share2, Globe, Mail, Phone } from 'lucide-react';

export function Footer() {
  const t = useTranslations('Footer');
  const tNav = useTranslations('Navigation');

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image src="/logo.png" alt="Ashnab Quran Institute Logo" width={50} height={50} className="rounded-full bg-white p-1" />
              <span className="font-bold text-xl text-secondary">Ashnab Quran</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm mb-6">
              {t('description', { default: 'Learn the Quran. Understand Its Message. Live Its Guidance.' })}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                <Share2 size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-secondary">{t('quickLinks', { default: 'Quick Links' })}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary-foreground/80 hover:text-secondary text-sm transition-colors">
                  {tNav('home', { default: 'Home' })}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary-foreground/80 hover:text-secondary text-sm transition-colors">
                  {tNav('about', { default: 'About Us' })}
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-primary-foreground/80 hover:text-secondary text-sm transition-colors">
                  {tNav('courses', { default: 'Courses' })}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-primary-foreground/80 hover:text-secondary text-sm transition-colors">
                  {tNav('faq', { default: 'FAQ' })}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-secondary">{t('legal', { default: 'Legal' })}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-primary-foreground/80 hover:text-secondary text-sm transition-colors">
                  {t('privacy', { default: 'Privacy Policy' })}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-primary-foreground/80 hover:text-secondary text-sm transition-colors">
                  {t('terms', { default: 'Terms of Service' })}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-secondary">{t('contact', { default: 'Contact' })}</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-primary-foreground/80">
                <Phone size={18} className="mt-0.5 text-secondary" />
                <span>+92 300 0000000</span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-primary-foreground/80">
                <Mail size={18} className="mt-0.5 text-secondary" />
                <span>info@ashnabquran.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Ashnab Quran Institute. {t('allRightsReserved', { default: 'All rights reserved.' })}</p>
        </div>
      </div>
    </footer>
  );
}
