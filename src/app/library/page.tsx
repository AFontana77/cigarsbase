import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Search } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "CigarsBase Library — 1,840 Cigars",
  description: "Cigars curated from Cigar Aficionado and Halfwheel — vitola, wrapper country, strength, ratings, and tasting notes. Browse the CigarsBase reference database — available in the free app.",
};

const CATEGORIES = [
  { name: "Nicaragua", detail: "Padron, Oliva, AJ Fernandez. Full-bodied, earthy, complex Nicaraguan puros." },
  { name: "Dominican Republic", detail: "Arturo Fuente, La Gloria Cubana. Mild-medium, cedar, creamy profiles." },
  { name: "Honduras", detail: "Rocky Patel, Alec Bradley. Medium-full, spice-forward blends." },
  { name: "Cuba", detail: "Cohiba, Montecristo, Romeo y Julieta. The benchmark profiles." },
  { name: "Connecticut Shade", detail: "Light wrappers, medium-bodied, creamy, accessible for new smokers." },
];

export default function LibraryPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">
        {/* Hero */}
        <section className="pt-24 pb-20 px-6" style={{ background: 'oklch(0.10 0.015 10)' }}>
          <div className="max-w-4xl mx-auto">
            <span
              style={{ color: 'oklch(0.78 0.10 70)', fontFamily: 'var(--font-body)' }}
              className="block text-xs font-semibold uppercase tracking-[0.2em] mb-6"
            >
              The Reference Database
            </span>
            <h1
              style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 10)' }}
              className="text-4xl sm:text-5xl font-bold leading-tight mb-6"
            >
              CigarsBase Library
            </h1>
            <p
              style={{ color: 'oklch(0.68 0.015 10)', maxWidth: '60ch' }}
              className="text-lg leading-relaxed mb-6"
            >
              1,840 cigars from 92 brands. Vitola, wrapper, and strength. Cigars curated from Cigar Aficionado and Halfwheel with vitola, wrapper country, strength, ratings, and tasting notes.
            </p>
            <div
              className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full"
              style={{ color: 'oklch(0.78 0.10 70)', border: '1px solid oklch(0.25 0.02 10)', background: 'oklch(0.18 0.025 10)' }}
            >
              <Search size={14} /> Full search available in the free app
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 px-6" style={{ background: 'oklch(0.15 0.022 10)' }}>
          <div className="max-w-5xl mx-auto">
            <h2
              style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 10)' }}
              className="text-3xl sm:text-4xl font-bold mb-10"
            >
              Browse by Category
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {CATEGORIES.map((cat) => (
                <div
                  key={cat.name}
                  style={{
                    background: 'oklch(0.18 0.025 10)',
                    border: '1px solid oklch(0.25 0.02 10)',
                    borderRadius: '0.5rem',
                    padding: '1.5rem',
                  }}
                >
                  <h3
                    style={{ color: 'oklch(0.93 0.015 10)', fontFamily: 'var(--font-body)' }}
                    className="font-bold mb-2"
                  >
                    {cat.name}
                  </h3>
                  <p style={{ color: 'oklch(0.58 0.015 10)' }} className="text-sm leading-relaxed">
                    {cat.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* App CTA */}
        <section
          className="py-20 px-6"
          style={{ background: 'oklch(0.10 0.015 10)', borderTop: '1px solid oklch(0.25 0.02 10)' }}
        >
          <div className="max-w-3xl mx-auto">
            <span
              style={{ color: 'oklch(0.78 0.10 70)', fontFamily: 'var(--font-body)' }}
              className="block text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            >
              Free App
            </span>
            <h2
              style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 10)' }}
              className="text-3xl sm:text-4xl font-bold mb-4"
            >
              Search the full database in the app.
            </h2>
            <p style={{ color: 'oklch(0.58 0.015 10)', maxWidth: '48ch' }} className="text-lg mb-8">
              The CigarsBase app has the complete 1,840 cigars with full-text search, filters, and your personal log. All free.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center"
              >
                App Store
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
                className="inline-flex items-center justify-center font-medium rounded-[0.5rem] px-6 py-3 min-h-[48px] transition-colors"
              >
                Google Play
              </a>
            </div>
            <p style={{ color: 'oklch(0.45 0.012 10)' }} className="mt-4 text-sm">
              Free. No subscription. No credit card.
            </p>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
