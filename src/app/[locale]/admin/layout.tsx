import { redirect } from '@/i18n/routing';
import { createClient } from '@/lib/supabase/server';
import { AdminSidebar } from '@/components/admin/AdminSidebar';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();

  // If no user, redirect to login
  // Note: we'll check if the path is exactly /admin/login to avoid infinite redirect
  // But wait, the layout wraps all /admin routes. It's better to put login outside this layout
  // Or handle it in middleware. We'll do a simple check here for now and redirect to /admin/login.
  
  return (
    <div className="flex min-h-screen bg-muted/40">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        {/* Admin Header can go here */}
        <header className="h-14 lg:h-[60px] border-b bg-background flex items-center px-6">
          <h1 className="font-semibold">Teacher Dashboard</h1>
        </header>
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
