import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Padron Cigars — Series Guide, Ratings & Best Picks | CigarsBase',
  description:
    'Padron is the most decorated cigar brand in history with 4 Cigars of the Year. Learn the difference between the 1964, 1926, and Family Reserve lines, and which Padron to buy first.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Padron Cigars — Series Guide, Ratings & Best Picks',
      description:
        'Padron is the most decorated cigar brand in history. Learn the difference between the 1964, 1926, and Family Reserve lines.',
      url: 'https://www.cigarsbase.com/padron-cigars',
      publisher: {
        '@type': 'Organization',
        name: 'CigarsBase',
        url: 'https://www.cigarsbase.com',
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.cigarsbase.com' },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Padron Cigars',
          item: 'https://www.cigarsbase.com/padron-cigars',
        },
      ],
    },
  ],
};

const heading: React.CSSProperties = { fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 10)' };
const body: React.CSSProperties = { color: 'oklch(0.68 0.015 10)' };
const muted: React.CSSProperties = { color: 'oklch(0.58 0.015 10)' };
const card: React.CSSProperties = {
  background: 'oklch(0.18 0.025 10)',
  border: '1px solid oklch(0.25 0.02 10)',
  borderRadius: '0.5rem',
  padding: '1.5rem',
};

const SERIES = [
  {
    title: 'Padron Series (Heritage)',
    price: '$9 to $12',
    body: 'The entry point to the Padron family. Medium-full body. Espresso, cocoa, and leather notes with a long, clean finish. Available in natural and maduro. Both versions are excellent. The price is the surprise: most cigars this good cost three times as much.',
    note: 'Strength: medium-full. Good value buy.',
  },
  {
    title: 'Padron 1964 Anniversary Series',
    price: '$20 to $25',
    body: 'The mid-tier and their best-selling line. Box-pressed (the sides are square rather than round). Richer and more complex than the Heritage. Notes of hazelnut, cocoa bean, and dark coffee. The 1964 Exclusivo is the most popular individual cigar in the line and earns 96+ ratings regularly. This is the cigar most reviewers recommend as a first Padron.',
    note: 'Strength: full. Multiple Cigar of the Year nominations.',
  },
  {
    title: 'Padron 1926 Serie',
    price: '$30 to $45',
    body: 'Made in the same factory with higher quality standards. Tobacco is aged longer before rolling. The No. 6 Natural earned 96 points and was ranked No. 4 Cigar of the Year in 2024. The No. 80 Maduro is one of the most full-bodied cigars in the Padron catalog. Only for experienced smokers who enjoy bold smokes.',
    note: 'Strength: full to extra-full (No. 80 Maduro).',
  },
  {
    title: 'Padron 60th Anniversary',
    price: '$60+',
    body: "Released in 2024 and 2025 to mark the brand's 60th year. The Natural version won Cigar of the Year 2025. Limited production. Both natural and maduro versions are available. Not for everyday smoking but worth tracking down for a special occasion.",
    note: 'Limited release. Cigar of the Year 2025 (Natural).',
  },
  {
    title: 'Padron Family Reserve',
    price: '$50 to $70',
    body: 'The highest tier. Small batches, very limited. Multiple Cigar of the Year wins. Each box is numbered. These cigars use the most select tobaccos from the farm and are aged the longest. If you see one, it is worth buying.',
    note: 'Very limited availability. Multiple Cigar of the Year wins.',
  },
];

export default function PadronCigarsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Hero */}
        <section aria-label="Introduction" className="pt-24 pb-20 px-6" style={{ background: 'oklch(0.10 0.015 10)' }}>
          <div className="max-w-4xl mx-auto">
            <span
              style={{ color: 'oklch(0.78 0.10 70)', fontFamily: 'var(--font-body)' }}
              className="block text-xs font-semibold uppercase tracking-[0.2em] mb-6"
            >
              Brand Guide
            </span>
            <h1 style={heading} className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Padron Cigars
            </h1>
            <p style={{ ...body, maxWidth: '60ch' }} className="text-lg leading-relaxed">
              Padron has won more Cigars of the Year than any other brand. That is the reputation. What most people do not know is which series to start with, how the natural and maduro versions differ in the smoke, and why the Heritage line punches well above its price. This guide covers all of it.
            </p>
          </div>
        </section>

        {/* Brand overview */}
        <section aria-label="Brand history and overview" className="py-20 px-6" style={{ background: 'oklch(0.15 0.022 10)' }}>
          <div className="max-w-3xl mx-auto">
            <h2 style={heading} className="text-3xl sm:text-4xl font-bold mb-6">
              Why Padron Keeps Winning While Other Brands Fade
            </h2>
            <p style={body} className="leading-relaxed mb-4">
              Jose Orlando Padron was a Cuban exile who founded Padron Cigars in 1964 in Miami. He built the company into one of the most respected names in premium tobacco. The cigars are made in Nicaragua using Nicaraguan tobacco grown in the Jalapa and Esteli valleys. All tobaccos are aged for a minimum of 2.5 years before rolling.
            </p>
            <p style={body} className="leading-relaxed mb-8">
              The brand has won Cigar Aficionado&apos;s Cigar of the Year four times. That is more than any other brand. The consistency of quality across all their lines sets them apart. You rarely get a bad Padron.
            </p>
            <div style={card}>
              <p style={{ color: 'oklch(0.93 0.015 10)' }} className="text-sm font-medium">
                All Padron cigars are Nicaraguan puros: wrapper, binder, and filler all from Nicaragua. No blending in tobacco from other countries.
              </p>
            </div>
          </div>
        </section>

        {/* Series breakdown */}
        <section aria-label="Padron series breakdown" className="py-20 px-6" style={{ background: 'oklch(0.10 0.015 10)' }}>
          <div className="max-w-3xl mx-auto">
            <h2 style={heading} className="text-3xl sm:text-4xl font-bold mb-10">
              Which Padron Line Matches Where You Are Right Now
            </h2>
            <div className="space-y-6">
              {SERIES.map((s) => (
                <div key={s.title} style={card}>
                  <div className="flex items-start justify-between mb-3 gap-4">
                    <h3 style={{ color: 'oklch(0.93 0.015 10)' }} className="text-lg font-bold">{s.title}</h3>
                    <span
                      className="text-sm font-semibold px-3 py-1 rounded-full flex-shrink-0"
                      style={{ color: 'oklch(0.78 0.10 70)', background: 'oklch(0.13 0.02 10)', border: '1px solid oklch(0.25 0.02 10)' }}
                    >
                      {s.price}
                    </span>
                  </div>
                  <p style={body} className="text-sm leading-relaxed mb-3">{s.body}</p>
                  <p style={{ color: 'oklch(0.45 0.012 10)' }} className="text-xs">{s.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Natural vs Maduro */}
        <section aria-label="Natural versus maduro comparison" className="py-20 px-6" style={{ background: 'oklch(0.15 0.022 10)' }}>
          <div className="max-w-3xl mx-auto">
            <h2 style={heading} className="text-3xl sm:text-4xl font-bold mb-6">
              Natural or Maduro: How the Wrapper Changes the Entire Smoke
            </h2>
            <p style={body} className="leading-relaxed mb-8">
              Padron offers both natural and maduro versions across most lines. Here is how they differ:
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              <div style={card}>
                <h3 style={{ color: 'oklch(0.93 0.015 10)' }} className="font-bold mb-3">Natural</h3>
                <p style={body} className="text-sm leading-relaxed">
                  Lighter brown wrapper. Aged in the standard way. Flavors lean toward cedar, cocoa, and a slight spice. Slightly lighter in body than the maduro versions. Good starting point if you are new to the brand.
                </p>
              </div>
              <div style={card}>
                <h3 style={{ color: 'oklch(0.93 0.015 10)' }} className="font-bold mb-3">Maduro</h3>
                <p style={body} className="text-sm leading-relaxed">
                  Dark, oily wrapper. The leaves are fermented longer to break down the starches into natural sugars. The result is a sweeter, richer, more syrupy smoke. Full-bodied. Pairs well with coffee or bourbon. Both versions score equally high.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recommendation */}
        <section aria-label="Beginner recommendation" className="py-16 px-6" style={{ background: 'oklch(0.10 0.015 10)' }}>
          <div className="max-w-3xl mx-auto">
            <h2 style={heading} className="text-3xl sm:text-4xl font-bold mb-4">
              The First Padron That Earns Its Reputation
            </h2>
            <div style={card}>
              <p style={body} className="leading-relaxed">
                Start with the <strong style={{ color: 'oklch(0.93 0.015 10)' }}>1964 Exclusivo Natural</strong>. It is under $25, easy to find at most tobacconists, and consistently scores 95 points or above. The box-pressed shape makes it easy to hold. The flavor is rich enough to show why Padron has four Cigars of the Year, but not so intense that it overwhelms newer smokers. If you like it, the maduro version is a logical next step.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          aria-label="App download call to action"
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
            <h2 style={heading} className="text-3xl sm:text-4xl font-bold mb-4">
              Know Every Padron Before You Buy It
            </h2>
            <p style={muted} className="text-lg mb-8">
              Log each Padron you smoke in CigarsBase. Rate the draw, burn, and flavor. After a few smokes across the Heritage, 1964, and 1926 lines you will know exactly which series matches your palate and which vitola to reach for. No more guessing at the humidor counter. All Padron ratings and vitolas in the 1,840-cigar database. Free, no subscription.
            </p>
            <Link href="/free-download" className="btn-primary inline-flex items-center justify-center">
              Download Free
            </Link>
          </div>
        </section>

        {/* Cross-links */}
        <section aria-label="Related guides" className="py-16 px-6" style={{ background: 'oklch(0.15 0.022 10)' }}>
          <div className="max-w-3xl mx-auto">
            <h2 style={heading} className="text-2xl font-bold mb-6">Related Guides</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: '/how-to-smoke-a-cigar', label: 'How to Smoke a Cigar' },
                { href: '/cohiba-cigars', label: 'Cohiba Cigars Guide' },
                { href: '/cigar-sizes', label: 'Cigar Sizes and Shapes' },
                { href: '/best-cigars-for-beginners', label: 'Best Cigars for Beginners' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    background: 'oklch(0.18 0.025 10)',
                    border: '1px solid oklch(0.25 0.02 10)',
                    color: 'oklch(0.93 0.015 10)',
                  }}
                  className="flex items-center gap-2 p-4 rounded-md font-medium min-h-[48px] transition-colors hover:border-[oklch(0.50_0.18_15)]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
