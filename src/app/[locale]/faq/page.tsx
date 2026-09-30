import { getTranslations } from 'next-intl/server';
import { HelpCircle, MessageCircleQuestion } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { buttonVariants } from '@/components/ui/button';

export default async function FAQPage() {
  const t = await getTranslations('FAQ');
  
  // Using English defaults directly here for the Q&A, ideally they would come from translation files
  const faqs = [
    {
      question: "How do the live classes work?",
      answer: "Our classes are conducted 1-on-1 via Zoom or Google Meet. You'll connect with your instructor at your scheduled time, share screens if necessary, and get personalized guidance on your recitation and memorization."
    },
    {
      question: "Are there female instructors available for sisters?",
      answer: "Yes! We have qualified female scholars dedicated specifically to teaching sisters and young children to ensure a comfortable and secure learning environment."
    },
    {
      question: "Do I need to know Arabic to start the Quran reading course?",
      answer: "Not at all. Our Noorani Qaida course is designed for absolute beginners. We start from the very basics of the Arabic alphabet and gradually build up to reading complete words and sentences."
    },
    {
      question: "What happens if I miss a class?",
      answer: "We offer flexible rescheduling. If you inform us at least 24 hours in advance, we can reschedule your class to another convenient time without any penalty."
    },
    {
      question: "Can I choose my own class timings?",
      answer: "Absolutely. Our platform allows you to pick class slots that fit your personal schedule, regardless of your time zone. We offer 24/7 availability with instructors from around the world."
    },
    {
      question: "How do I pay for the courses?",
      answer: "We accept all major credit/debit cards through our secure payment gateway (Stripe/PayPal). You can choose to pay monthly or opt for a discounted quarterly/annual plan."
    }
  ];

  return (
    <main className="flex-1 bg-muted/10 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-2">
            <MessageCircleQuestion className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to the most common questions about our courses, classes, and payment options.
          </p>
        </div>

        <div className="space-y-4 bg-background p-6 md:p-10 rounded-2xl shadow-sm border">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group border-b last:border-b-0 pb-4 last:pb-0">
              <summary className="flex items-center justify-between font-semibold text-lg cursor-pointer list-none py-2 text-foreground hover:text-primary transition-colors">
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  {faq.question}
                </span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-muted-foreground mt-3 pl-8 leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-16 text-center bg-primary/5 rounded-2xl p-8 border border-primary/10">
          <h3 className="text-2xl font-bold mb-3 text-primary">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">Can't find the answer you're looking for? Please chat to our friendly team.</p>
          <Link href="/contact" className={buttonVariants({ size: 'lg', className: 'rounded-full px-8 shadow-md' })}>
            Contact Support
          </Link>
        </div>
      </div>
    </main>
  );
}
