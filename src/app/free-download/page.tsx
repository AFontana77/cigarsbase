import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { EmailCaptureForm } from '@/components/EmailCaptureForm';
import { CheckCircle, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Free Cigar Tasting Notes Template",
  description: "A printable tasting card with brand, vitola, wrapper, draw, burn, ash, and flavor notes for each smoke. Free printable from CigarsBase, no signup required.",
};

const ITEMS = [
  'Brand, vitola, and country of origin fields',
  'Wrapper color and type',
  'Draw, burn, and ash observations',
  'Flavor notes in thirds',
  'Finish rating and overall score',
];

export default function FreeDownloadPage() {
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
              Free Printable
            </span>
            <h1
              style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 10)' }}
              className="text-4xl sm:text-5xl font-bold leading-tight mb-6"
            >
              Free Cigar Tasting Notes Template
            </h1>
            <p
              style={{ color: 'oklch(0.68 0.015 10)', maxWidth: '55ch' }}
              className="text-lg leading-relaxed mb-10"
            >
              A printable tasting card with brand, vitola, wrapper, draw, burn, ash, and flavor notes for each smoke.
            </p>
            <div
              style={{
                background: 'oklch(0.18 0.025 10)',
                border: '1px solid oklch(0.25 0.02 10)',
                borderRadius: '0.5rem',
                padding: '2rem',
              }}
              className="mb-6"
            >
              <h2
                style={{ color: 'oklch(0.93 0.015 10)', fontFamily: 'var(--font-body)' }}
                className="font-bold text-lg mb-4"
              >
                What is inside
              </h2>
              <ul className="space-y-3">
                {ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: 'oklch(0.68 0.015 10)' }}>
                    <CheckCircle size={16} style={{ color: 'oklch(0.78 0.10 70)' }} className="mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div
              style={{
                background: 'oklch(0.18 0.025 10)',
                border: '1px solid oklch(0.25 0.02 10)',
                borderRadius: '0.5rem',
                padding: '2rem',
              }}
            >
              <h2
                style={{ color: 'oklch(0.93 0.015 10)', fontFamily: 'var(--font-body)' }}
                className="font-bold text-xl mb-2"
              >
                Get your free copy
              </h2>
              <p style={{ color: 'oklch(0.58 0.015 10)' }} className="text-sm mb-6">
                Enter your email and we will send it right to your inbox.
              </p>
              <EmailCaptureForm buttonLabel="Send Me the Free PDF" />
              <p style={{ color: 'oklch(0.45 0.012 10)' }} className="text-xs mt-4 text-center">
                No spam. Unsubscribe any time.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-6" style={{ background: 'oklch(0.15 0.022 10)' }}>
          <div className="max-w-3xl mx-auto">
            <h2
              style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 10)' }}
              className="text-3xl sm:text-4xl font-bold mb-4"
            >
              Want the searchable database?
            </h2>
            <p style={{ color: 'oklch(0.58 0.015 10)', maxWidth: '55ch' }} className="text-lg mb-8">
              The free PDF covers the basics. The CigarsBase app gives you the full searchable library and your personal log. Free on iPhone and Android.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Get on App Store <ArrowRight size={18} />
              </a>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  border: '1px solid oklch(0.25 0.02 10)',
                  color: 'oklch(0.93 0.015 10)',
                  background: 'transparent',
                  fontFamily: 'var(--font-body)',
                }}
                className="inline-flex items-center justify-center gap-2 font-medium rounded-[0.5rem] px-6 py-3 min-h-[48px] transition-colors"
              >
                Get on Google Play <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
