import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cohiba Cigars — Cuban vs. Dominican, History & Best Picks | CigarsBase',
  description:
    'Everything about Cohiba cigars: the Cuban original, the Dominican US version, their history, flavor profiles, and how to tell them apart. CigarsBase has both in its 1,840-cigar database.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Cohiba Cigars — Cuban vs. Dominican, History & Best Picks',
      description:
        'Everything about Cohiba cigars: the Cuban original, the Dominican US version, their history, flavor profiles, and how to tell them apart.',
      url: 'https://www.cigarsbase.com/cohiba-cigars',
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
          name: 'Cohiba Cigars',
          item: 'https://www.cigarsbase.com/cohiba-cigars',
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
  padding: '1.25rem',
};

export default function CohibaPage() {
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
              Cohiba Cigars
            </h1>
            <p style={{ ...body, maxWidth: '60ch' }} className="text-lg leading-relaxed">
              Cohiba is the cigar brand most people have heard of and fewer know how to buy well. Two companies make cigars called Cohiba. One is Cuban and cannot be sold in the US. The other is Dominican and is in every shop. This guide covers which is which, what each line tastes like, and which one to pick up first.
            </p>
          </div>
        </section>

        {/* Critical distinction */}
        <section aria-label="Two Cohiba brands explained" className="py-20 px-6" style={{ background: 'oklch(0.15 0.022 10)' }}>
          <div className="max-w-3xl mx-auto">
            <h2 style={heading} className="text-3xl sm:text-4xl font-bold mb-6">
              Why Buying Cohiba Blind Is a Gamble
            </h2>
            <div style={{ ...card, padding: '1.5rem' }} className="mb-10">
              <p style={{ color: 'oklch(0.93 0.015 10)' }} className="leading-relaxed font-medium">
                Many beginners do not know this: there are two entirely different companies making cigars called &quot;Cohiba.&quot; One is made in Cuba and cannot be sold in the United States. The other is made in the Dominican Republic and is widely available in US shops. They look similar, share a name, and cause constant confusion.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div style={{ ...card, padding: '1.5rem' }}>
                <h3 style={{ color: 'oklch(0.93 0.015 10)' }} className="font-bold mb-3">Cuban Cohiba</h3>
                <ul style={body} className="text-sm space-y-2">
                  <li><strong style={{ color: 'oklch(0.93 0.015 10)' }}>Made by:</strong> Habanos S.A. (Cuba)</li>
                  <li><strong style={{ color: 'oklch(0.93 0.015 10)' }}>Founded:</strong> 1966</li>
                  <li><strong style={{ color: 'oklch(0.93 0.015 10)' }}>US availability:</strong> Not legal to sell in the US</li>
                  <li><strong style={{ color: 'oklch(0.93 0.015 10)' }}>Factory:</strong> El Laguito, Havana</li>
                  <li><strong style={{ color: 'oklch(0.93 0.015 10)' }}>Strength:</strong> Medium to medium-full</li>
                </ul>
              </div>
              <div style={{ ...card, padding: '1.5rem' }}>
                <h3 style={{ color: 'oklch(0.93 0.015 10)' }} className="font-bold mb-3">Dominican Cohiba (US)</h3>
                <ul style={body} className="text-sm space-y-2">
                  <li><strong style={{ color: 'oklch(0.93 0.015 10)' }}>Made by:</strong> General Cigar Co.</li>
                  <li><strong style={{ color: 'oklch(0.93 0.015 10)' }}>Founded:</strong> 1978 (US market)</li>
                  <li><strong style={{ color: 'oklch(0.93 0.015 10)' }}>US availability:</strong> Widely sold in all 50 states</li>
                  <li><strong style={{ color: 'oklch(0.93 0.015 10)' }}>Country:</strong> Dominican Republic</li>
                  <li><strong style={{ color: 'oklch(0.93 0.015 10)' }}>Strength:</strong> Medium to full (depends on line)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cuban Cohiba history */}
        <section aria-label="Cuban Cohiba history and lines" className="py-20 px-6" style={{ background: 'oklch(0.10 0.015 10)' }}>
          <div className="max-w-3xl mx-auto">
            <h2 style={heading} className="text-3xl sm:text-4xl font-bold mb-6">
              Why Cohiba Commands a Premium 60 Years In
            </h2>
            <p style={body} className="leading-relaxed mb-8">
              Cuban Cohiba started in 1966 as Fidel Castro&apos;s personal brand. Eduardo Ribera, a cigar roller known as El Laguito, began making them for Castro at the El Laguito factory in Havana. For years they were given only as diplomatic gifts. In 1992, Habanos S.A. opened Cohiba to public export. They became the most recognized Cuban cigar in the world.
            </p>
            <h3 style={heading} className="text-xl font-bold mb-5">Cuban Cohiba Lines</h3>
            <div className="space-y-5">
              {[
                {
                  name: 'Linea Clasica (Siglo I-VI)',
                  detail: 'The core line. Six vitolas named Siglo I through Siglo VI (century). Creamy, slightly earthy, cedar and light floral notes. Medium strength. The Esplendidos (Churchill size) is the most recognized worldwide.',
                },
                {
                  name: 'Behike',
                  detail: 'The top tier. Made with medio tiempo leaves, a rare third leaf found only on about 10% of tobacco plants. Very expensive, often $60 to $100+ per cigar on the secondary market. Rich, complex, full-bodied for a Cuban.',
                },
                {
                  name: 'Maduro 5',
                  detail: "Cuba's answer to maduro wrappers. Fermented five years. Darker, sweeter, more complex than the Clasica line. Uncommon outside of Cuba.",
                },
              ].map((item) => (
                <div key={item.name} style={card}>
                  <h3 style={{ color: 'oklch(0.93 0.015 10)' }} className="font-bold mb-2">{item.name}</h3>
                  <p style={body} className="text-sm leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dominican Cohiba */}
        <section aria-label="Dominican Cohiba US lines" className="py-20 px-6" style={{ background: 'oklch(0.15 0.022 10)' }}>
          <div className="max-w-3xl mx-auto">
            <h2 style={heading} className="text-3xl sm:text-4xl font-bold mb-6">
              The Lines You Can Actually Buy in the US
            </h2>
            <p style={body} className="leading-relaxed mb-8">
              General Cigar launched its US Cohiba in 1978 after a trademark dispute. The brand became established before the Cuban embargo fully solidified the legal landscape. It is a different product from a different company but uses the same name. The cigars are made in the Dominican Republic with Dominican and other tobacco blends.
            </p>
            <div className="space-y-5">
              {[
                {
                  name: 'Cohiba Black',
                  detail: 'Bold, full body. Dark Connecticut Broadleaf wrapper. Notes of dark chocolate, pepper, and espresso. This is not a beginner cigar.',
                },
                {
                  name: 'Cohiba Red Dot',
                  detail: 'Medium body, the most accessible US Cohiba. The entry point for the Dominican line. Smooth, creamy, cedar finish. Widely available.',
                },
                {
                  name: 'Cohiba Macassar',
                  detail: 'Medium-full, aged tobacco blend. More complexity than the Red Dot. Oak, leather, and spice profile. A step up in strength and price.',
                },
              ].map((item) => (
                <div key={item.name} style={card}>
                  <h3 style={{ color: 'oklch(0.93 0.015 10)' }} className="font-bold mb-2">{item.name}</h3>
                  <p style={body} className="text-sm leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Flavor comparison */}
        <section aria-label="Flavor profile comparison" className="py-20 px-6" style={{ background: 'oklch(0.10 0.015 10)' }}>
          <div className="max-w-4xl mx-auto">
            <h2 style={heading} className="text-3xl sm:text-4xl font-bold mb-8">
              Cuban vs. Dominican: What the Difference Actually Means in the Smoke
            </h2>
            <div className="overflow-x-auto rounded-md" style={{ border: '1px solid oklch(0.25 0.02 10)' }}>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: 'oklch(0.18 0.025 10)' }}>
                    <th style={{ color: 'oklch(0.93 0.015 10)', fontFamily: 'var(--font-display)' }} className="text-left p-3">Category</th>
                    <th style={{ color: 'oklch(0.93 0.015 10)', fontFamily: 'var(--font-display)' }} className="text-left p-3">Cuban Cohiba</th>
                    <th style={{ color: 'oklch(0.93 0.015 10)', fontFamily: 'var(--font-display)' }} className="text-left p-3">Dominican Cohiba (US)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Strength', 'Medium to medium-full', 'Medium to full (by line)'],
                    ['Primary notes', 'Cream, cedar, light floral', 'Tobacco-forward, leather, dark chocolate (Black)'],
                    ['Finish', 'Smooth, lingering', 'Richer, spicier on the Black'],
                    ['Body', 'Well-rounded, elegant', 'Bolder overall'],
                    ['Price range', '$30 to $100+ (outside US)', '$12 to $30 in the US'],
                  ].map(([cat, cuban, dominican], i) => (
                    <tr
                      key={cat}
                      style={{
                        background: i % 2 === 0 ? 'oklch(0.13 0.02 10)' : 'oklch(0.15 0.022 10)',
                        borderTop: '1px solid oklch(0.25 0.02 10)',
                      }}
                    >
                      <td style={{ color: 'oklch(0.93 0.015 10)' }} className="p-3 font-medium">{cat}</td>
                      <td style={body} className="p-3">{cuban}</td>
                      <td style={body} className="p-3">{dominican}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Legal question */}
        <section aria-label="US legal status of Cuban cigars" className="py-20 px-6" style={{ background: 'oklch(0.15 0.022 10)' }}>
          <div className="max-w-3xl mx-auto">
            <h2 style={heading} className="text-3xl sm:text-4xl font-bold mb-4">
              What to Do When a Shop Claims to Have Cuban Cohiba
            </h2>
            <p style={body} className="leading-relaxed mb-4">
              No. Cuban cigars remain under a US trade embargo. It is illegal to sell or import Cuban cigars for commercial purposes in the United States. After 2016 rule changes, US travelers can bring back up to $100 worth of Cuban goods (including cigars) for personal use. But buying, selling, or distributing them in the US is still illegal.
            </p>
            <p style={body} className="leading-relaxed">
              If a shop is selling you &quot;Cuban Cohiba&quot; in the US, it is either counterfeit, illegally imported, or the Dominican version. Be skeptical of any deal that seems too good for a Cuban cigar.
            </p>
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
              Stop Guessing Which Cohiba Is Worth It
            </h2>
            <p style={muted} className="text-lg mb-8">
              Log each Cohiba you smoke in CigarsBase. Rate the draw, burn, and flavor. After a few smokes across the Dominican and Cuban lines you will know exactly which one matches your palate and which you skip next time. Both lines are in the 1,840-cigar database. Free download, no subscription.
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
                { href: '/types-of-cigars', label: 'Types of Cigars' },
                { href: '/how-to-smoke-a-cigar', label: 'How to Smoke a Cigar' },
                { href: '/padron-cigars', label: 'Padron Cigars Guide' },
                { href: '/cigar-sizes', label: 'Cigar Sizes and Shapes' },
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
