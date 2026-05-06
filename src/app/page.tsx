import Link from 'next/link';
import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "CigarsBase — Search 1,840 cigars from Cigar Aficionado and Halfwheel",
  description: "CigarsBase has 1,840 cigars curated from Cigar Aficionado and Halfwheel with ratings, vitolas, wrappers, and tasting notes. Log your smokes, track your humidor, and build a personal collection.",
};

const FEATURES = [
  { num: "01", title: "Cigar database", body: "1,840 cigars with vitola, wrapper, strength, and tasting notes." },
  { num: "02", title: "Smoke log", body: "Log brand, vitola, date, occasion, pairing, and rating. Add your own notes." },
  { num: "03", title: "Humidor tracker", body: "Track your inventory — what you have, what you paid, what to age." },
  { num: "04", title: "Collection database", body: "Your personal list of smokes and ratings, separate from the main library." },
];

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Hero — dark, left-aligned, two-column */}
        <section style={{ background: 'oklch(0.10 0.015 10)' }} className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

            {/* Left column: text */}
            <div>
              <span
                style={{ color: 'oklch(0.78 0.10 70)', fontFamily: 'var(--font-body)' }}
                className="text-xs font-semibold uppercase tracking-[0.2em] mb-8 block"
              >
                1,840 cigars &middot; Cigar Aficionado + Halfwheel
              </span>

              <h1
                style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 10)' }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6"
              >
                The cigar database<br />
                <em style={{ color: 'oklch(0.65 0.12 15)' }}>you wish existed.</em>
              </h1>

              <p
                style={{ color: 'oklch(0.68 0.015 10)', maxWidth: '48ch' }}
                className="text-lg leading-relaxed mb-8"
              >
                Search 1,840 cigars by brand, vitola, wrapper, or strength. Find ratings and tasting notes from Cigar Aficionado and Halfwheel. Log your own smokes and build a collection that is actually yours.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/library"
                  className="btn-primary"
                >
                  Browse the Library &rarr;
                </Link>
                <Link
                  href="/free-download"
                  style={{
                    border: '1px solid oklch(0.35 0.02 10)',
                    color: 'oklch(0.78 0.015 10)',
                    fontFamily: 'var(--font-body)',
                  }}
                  className="inline-flex items-center justify-center font-medium rounded-[0.5rem] px-6 py-3 min-h-[48px] hover:border-[oklch(0.45_0.02_10)] transition-colors"
                >
                  Free Download
                </Link>
              </div>

              <p style={{ color: 'oklch(0.45 0.012 10)' }} className="mt-4 text-sm">
                Free app. No card. iOS and Android.
              </p>
            </div>

            {/* Right column: large stat display */}
            <div style={{ background: 'oklch(0.18 0.025 10)', borderRadius: '1rem', padding: '2.5rem' }}>
              <div className="space-y-6">
                <div>
                  <div
                    style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.78 0.10 70)' }}
                    className="text-6xl font-bold"
                  >
                    1,840
                  </div>
                  <div style={{ color: 'oklch(0.68 0.015 10)' }} className="text-sm mt-1">
                    cigars in the database
                  </div>
                </div>

                <div style={{ height: '1px', background: 'oklch(0.25 0.02 10)' }} />

                <div>
                  <div
                    style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.78 0.10 70)' }}
                    className="text-6xl font-bold"
                  >
                    2
                  </div>
                  <div style={{ color: 'oklch(0.68 0.015 10)' }} className="text-sm mt-1">
                    trusted review sources
                  </div>
                </div>

                <div style={{ height: '1px', background: 'oklch(0.25 0.02 10)' }} />

                <div>
                  <div
                    style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.78 0.10 70)' }}
                    className="text-6xl font-bold"
                  >
                    $0
                  </div>
                  <div style={{ color: 'oklch(0.68 0.015 10)' }} className="text-sm mt-1">
                    cost to start
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Database value statement — dark, editorial text */}
        <section style={{ background: 'oklch(0.15 0.022 10)' }} className="py-20 px-6">
          <div className="max-w-6xl mx-auto">

            <h2
              style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 10)', maxWidth: '18ch' }}
              className="text-4xl sm:text-5xl font-bold leading-tight mb-8"
            >
              Most log apps give you a blank screen.
            </h2>

            <p
              style={{ color: 'oklch(0.68 0.015 10)', maxWidth: '55ch' }}
              className="text-lg leading-relaxed mb-14"
            >
              CigarsBase gives you 1,840 cigars from Cigar Aficionado and Halfwheel. Searchable. Organized. Ready to use. Log what you smoke. Build your personal collection alongside the reference library. Find any cigar in 5 seconds so you stop guessing at the shop.
            </p>

            {/* Numbered feature list — no cards, no icon boxes */}
            <div className="space-y-0 max-w-2xl">
              {FEATURES.map((item, i) => (
                <div
                  key={item.num}
                  style={{
                    borderTop: i === 0 ? '1px solid oklch(0.25 0.02 10)' : undefined,
                    borderBottom: '1px solid oklch(0.25 0.02 10)',
                  }}
                  className="py-6 flex gap-6 items-start"
                >
                  <span
                    style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.50 0.18 15)', minWidth: '2.5rem' }}
                    className="text-sm font-bold tracking-wider"
                  >
                    {item.num}
                  </span>
                  <div>
                    <h3
                      style={{ color: 'oklch(0.93 0.015 10)', fontFamily: 'var(--font-body)' }}
                      className="font-semibold mb-1"
                    >
                      {item.title}
                    </h3>
                    <p style={{ color: 'oklch(0.58 0.015 10)' }} className="text-sm leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* CTA panel */}
        <section
          style={{ background: 'oklch(0.10 0.015 10)', borderTop: '1px solid oklch(0.25 0.02 10)' }}
          className="py-20 px-6"
        >
          <div className="max-w-3xl mx-auto">
            <p
              style={{ color: 'oklch(0.78 0.10 70)', fontFamily: 'var(--font-body)' }}
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            >
              Free to start
            </p>

            <h2
              style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 10)' }}
              className="text-3xl sm:text-4xl font-bold mb-4"
            >
              Get the reference sheet first.
            </h2>

            <p style={{ color: 'oklch(0.58 0.015 10)', maxWidth: '48ch' }} className="text-lg mb-8">
              Download the printable PDF today. Use it at the shop or at home. When you want the full searchable database and smoke log, get the app free.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/free-download" className="btn-primary">
                Get the Free PDF
              </Link>
              <Link
                href="/library"
                style={{
                  border: '1px solid oklch(0.35 0.02 10)',
                  color: 'oklch(0.78 0.015 10)',
                  fontFamily: 'var(--font-body)',
                }}
                className="inline-flex items-center justify-center font-medium rounded-[0.5rem] px-6 py-3 min-h-[48px] hover:border-[oklch(0.45_0.02_10)] transition-colors"
              >
                Browse the Library
              </Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
