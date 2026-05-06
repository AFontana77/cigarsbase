import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Mail } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support — CigarsBase',
  description: 'Get help with the CigarsBase app. Contact support or browse common questions.',
};

const FAQS = [
  {
    q: 'How do I get the app?',
    a: 'Search "CigarsBase" in the App Store or Google Play. The app is free to download. The $6.99 one-time unlock removes entry limits and adds premium features.',
  },
  {
    q: 'What does the $6.99 unlock include?',
    a: 'Unlimited smoke logs, humidor tracker, tasting notes, and full library access. One-time payment, no subscription, no expiration.',
  },
  {
    q: 'How do I restore my purchase?',
    a: 'Open the app, go to Settings, and tap "Restore Purchases." Make sure you are signed in to the same Apple ID or Google account you used to purchase.',
  },
  {
    q: 'Does the app require an account?',
    a: 'No account is required for offline use. An optional free account lets you sync your cigar smoke logs across devices.',
  },
  {
    q: 'Is there a subscription?',
    a: 'No. CigarsBase is free to download with entry limits, and $6.99 one-time to unlock everything. No monthly fees, ever.',
  },
  {
    q: 'How do I delete my account and data?',
    a: 'Go to Settings in the app and tap "Delete Account." This removes all cloud data within 30 days. Local data is removed when you uninstall the app.',
  },
];

export default function SupportPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">
        <section className="pt-24 pb-20 px-6" style={{ background: 'oklch(0.10 0.015 10)' }}>
          <div className="max-w-3xl mx-auto">
            <span
              style={{ color: 'oklch(0.78 0.10 70)', fontFamily: 'var(--font-body)' }}
              className="block text-xs font-semibold uppercase tracking-[0.2em] mb-6"
            >
              Help Center
            </span>
            <h1
              style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 10)' }}
              className="text-4xl sm:text-5xl font-bold leading-tight mb-3"
            >
              App Support
            </h1>
            <p style={{ color: 'oklch(0.58 0.015 10)' }} className="text-lg mb-12">
              Get help with CigarsBase or give us feedback.
            </p>

            <div
              style={{
                background: 'oklch(0.18 0.025 10)',
                border: '1px solid oklch(0.25 0.02 10)',
                borderRadius: '0.5rem',
                padding: '1.5rem',
              }}
              className="mb-12 flex gap-4 items-start"
            >
              <div
                className="w-10 h-10 rounded-md flex items-center justify-center flex-shrink-0 mt-1"
                style={{ background: 'oklch(0.13 0.02 10)' }}
              >
                <Mail style={{ color: 'oklch(0.78 0.10 70)' }} size={20} />
              </div>
              <div>
                <h2
                  style={{ color: 'oklch(0.93 0.015 10)', fontFamily: 'var(--font-body)' }}
                  className="font-semibold mb-1"
                >
                  Email Support
                </h2>
                <p style={{ color: 'oklch(0.68 0.015 10)' }} className="text-sm mb-2">
                  We respond within 1 to 2 business days.
                </p>
                <a
                  href="mailto:support@cigarsbase.com"
                  style={{ color: 'oklch(0.78 0.10 70)' }}
                  className="font-medium hover:underline"
                >
                  support@cigarsbase.com
                </a>
              </div>
            </div>

            <h2
              style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 10)' }}
              className="text-2xl font-bold mb-6"
            >
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col gap-3">
              {FAQS.map((faq) => (
                <details
                  key={faq.q}
                  style={{
                    background: 'oklch(0.18 0.025 10)',
                    border: '1px solid oklch(0.25 0.02 10)',
                    borderRadius: '0.5rem',
                  }}
                >
                  <summary
                    style={{ color: 'oklch(0.93 0.015 10)' }}
                    className="px-6 py-4 font-semibold cursor-pointer list-none flex justify-between items-center"
                  >
                    {faq.q}
                    <span style={{ color: 'oklch(0.78 0.10 70)' }} className="text-lg">
                      +
                    </span>
                  </summary>
                  <div style={{ color: 'oklch(0.68 0.015 10)' }} className="px-6 pb-5 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>

            <p style={{ color: 'oklch(0.45 0.012 10)' }} className="mt-10 text-sm text-center">
              See our{' '}
              <a href="/privacy" style={{ color: 'oklch(0.78 0.10 70)' }} className="hover:underline">
                Privacy Policy
              </a>{' '}
              for information on how we handle your data.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
