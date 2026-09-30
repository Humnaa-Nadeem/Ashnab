'use client';

import { Link, usePathname } from '@/i18n/routing';
import Image from 'next/image';
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  CreditCard, 
  Award,
  Settings,
  Video,
  FileText,
  ClipboardList,
  BarChart,
  Bell
} from 'lucide-react';

const routes = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/courses', label: 'Courses', icon: BookOpen },
  { href: '/admin/students', label: 'Students', icon: Users },
  { href: '/admin/payments', label: 'Payment Verification', icon: CreditCard },
  { href: '/admin/lessons', label: 'Daily Lessons', icon: FileText },
  { href: '/admin/assignments', label: 'Assignments', icon: ClipboardList },
  { href: '/admin/progress', label: 'Progress', icon: BarChart },
  { href: '/admin/live-classes', label: 'Live Classes', icon: Video },
  { href: '/admin/certificates', label: 'Certificates', icon: Award },
  { href: '/admin/notifications', label: 'Notifications', icon: Bell },
  { href: '/admin/settings', label: 'Settings', icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r bg-background hidden md:block">
      <div className="h-full flex flex-col">
        <div className="h-14 lg:h-[60px] border-b flex items-center px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <Image src="/logo.png" alt="Ashnab Quran Institute Logo" width={32} height={32} className="rounded-full" />
            <span className="truncate">Ashnab Admin</span>
          </Link>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {routes.map((route) => {
              const Icon = route.icon;
              const isActive = pathname === route.href || (route.href !== '/admin' && pathname.startsWith(route.href));
              
              return (
                <li key={route.href}>
                  <Link
                    href={route.href as never}
                    className={`flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      isActive 
                        ? 'bg-primary text-primary-foreground' 
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{route.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
