import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About CigarsBase",
  description: "The story behind CigarsBase. Search 1,840+ cigars from Cigar Aficionado and Halfwheel. Log your smokes. Build your collection.",
};

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">
        <section className="pt-24 pb-20 px-6" style={{ background: 'oklch(0.10 0.015 10)' }}>
          <div className="max-w-4xl mx-auto">
            <span
              style={{ color: 'oklch(0.78 0.10 70)', fontFamily: 'var(--font-body)' }}
              className="block text-xs font-semibold uppercase tracking-[0.2em] mb-6"
            >
              About the Project
            </span>
            <h1
              style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 10)' }}
              className="text-4xl sm:text-5xl font-bold leading-tight mb-8"
            >
              About CigarsBase
            </h1>
            <p
              style={{ color: 'oklch(0.68 0.015 10)', maxWidth: '60ch' }}
              className="text-lg leading-relaxed mb-6"
            >
              CigarsBase was built for cigar enthusiasts who forget what they liked six months after they smoked it. A $25 cigar deserves better than a half-remembered opinion. CigarsBase combines a curated database of 1,840+ cigars from Cigar Aficionado and Halfwheel with a personal smoke log so you can find a cigar before you buy it and record your experience before you forget it. The companion app for iPhone and Android adds humidor tracking and curated collections by strength and country. Named for the cedar used in premium cigar boxes, the material that protects and enhances what is inside.
            </p>
            <p
              style={{ color: 'oklch(0.58 0.015 10)', maxWidth: '60ch' }}
              className="leading-relaxed mb-10"
            >
              CigarsBase is published by Anvil Road LLC, a small product studio building practical apps and reference tools for hobbyists, professionals, and makers. Every product in the portfolio follows the same principle: a curated, searchable database paired with a personal log. Search what the experts know. Record what you discover.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/library" className="btn-primary inline-flex items-center justify-center gap-2">
                Browse the Library <ArrowRight size={18} />
              </Link>
              <Link
                href="/free-download"
                style={{
                  border: '1px solid oklch(0.25 0.02 10)',
                  color: 'oklch(0.93 0.015 10)',
                  background: 'transparent',
                  fontFamily: 'var(--font-body)',
                }}
                className="inline-flex items-center justify-center font-medium rounded-[0.5rem] px-6 py-3 min-h-[48px] transition-colors"
              >
                Free Download
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 px-6" style={{ background: 'oklch(0.15 0.022 10)' }}>
          <div className="max-w-4xl mx-auto">
            <h2
              style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 10)' }}
              className="text-3xl font-bold mb-6"
            >
              Built by Anvil Road LLC
            </h2>
            <p
              style={{ color: 'oklch(0.68 0.015 10)', maxWidth: '60ch' }}
              className="leading-relaxed text-lg"
            >
              Anvil Road is an independent publisher and app studio based in New Jersey. We build reference databases, log apps, KDP books, and companion print products across a range of hobby and professional categories. CigarsBase is one of 25+ apps in the Anvil Road portfolio. All apps are free to start, with one-time unlocks for unlimited features. No subscriptions.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
