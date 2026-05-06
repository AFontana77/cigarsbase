import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Types of Cigars — Wrappers, Strength & Country of Origin | CigarsBase',
  description:
    'Premium cigars come in dozens of wrapper types, strength levels, and production regions. This guide covers everything: Connecticut, Maduro, Habano, Corojo, Nicaragua vs. Dominican, and how to read a cigar band.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Types of Cigars — Wrappers, Strength and Country of Origin',
      description:
        'Premium cigars come in dozens of wrapper types, strength levels, and production regions.',
      url: 'https://www.cigarsbase.com/types-of-cigars',
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
          name: 'Types of Cigars',
          item: 'https://www.cigarsbase.com/types-of-cigars',
        },
      ],
    },
  ],
};

const WRAPPERS = [
  {
    name: 'Connecticut Shade',
    origin: 'Connecticut, USA (shade-grown)',
    color: 'Light tan to golden',
    strength: 'Mild',
    flavor: 'Creamy, nutty, cedar. Very smooth, low spice.',
    best: 'Beginners. Anyone who wants a relaxed, easy smoke.',
  },
  {
    name: 'Connecticut Broadleaf (Maduro)',
    origin: 'Connecticut, USA (sun-grown)',
    color: 'Dark brown, oily',
    strength: 'Medium-full to full',
    flavor: 'Naturally sweet, rich, chocolate. Same state, completely different leaf from Shade.',
    best: 'Maduro fans who want a naturally dark, sweet smoke.',
  },
  {
    name: 'Maduro (general)',
    origin: 'Various: Broadleaf, San Andres, Oscuro',
    color: 'Dark to very dark',
    strength: 'Medium-full to full',
    flavor: 'Fermented longer to break down starches into sugars. Sweeter, darker, more oils. Not a single wrapper because any leaf fermented to maduro level qualifies.',
    best: 'Smokers who prefer sweet, bold, rich profiles.',
  },
  {
    name: 'Habano',
    origin: 'Cuba-seed grown in Nicaragua, Ecuador, Honduras',
    color: 'Medium brown, oily',
    strength: 'Medium to full',
    flavor: 'Spicy, earthy, complex. Pepper on the finish.',
    best: 'Smokers stepping up from mild. Most popular overall category.',
  },
  {
    name: 'Corojo',
    origin: 'Cuban-heritage, grown in Nicaragua and Honduras',
    color: 'Medium reddish-brown',
    strength: 'Medium to full',
    flavor: 'Peppery, complex, slightly leathery. More tannic than Habano.',
    best: 'Those who enjoy complexity and spice-forward profiles.',
  },
  {
    name: 'Cameroon',
    origin: 'Cameroon, West Africa',
    color: 'Light to medium brown, distinct "tooth" texture',
    strength: 'Mild to medium',
    flavor: 'Uniquely sweet and complex. Earthy with a distinct wood note. No other wrapper tastes quite like it.',
    best: 'Smokers who want something different from Connecticut but not bold.',
  },
  {
    name: 'San Andres (Maduro)',
    origin: 'San Andres Tuxtla, Mexico',
    color: 'Very dark brown to near-black',
    strength: 'Full',
    flavor: 'Cocoa, coffee, earthy spice. Rich and dense. A favored maduro for full-bodied blenders.',
    best: 'Full-body fans who want complex maduro flavor.',
  },
  {
    name: 'Ecuadorian (Claro/Natural)',
    origin: 'Ecuador (grown under cloud cover)',
    color: 'Light to medium tan',
    strength: 'Mild to medium',
    flavor: 'Smooth, neutral, slightly sweet. Often used as a Connecticut alternative. The cloud cover mimics shade growing.',
    best: 'Beginners and medium smokers who want quality at lower cost.',
  },
];

const COUNTRIES = [
  {
    name: 'Nicaragua',
    detail: "The dominant premium cigar country today. Jalapa, Esteli, and Ometepe valleys produce some of the world's most complex tobacco. Full-bodied, earthy, rich. Padron, Oliva, AJ Fernandez.",
  },
  {
    name: 'Dominican Republic',
    detail: 'Known for mild to medium profiles. Cedar, cream, and refined blending. Arturo Fuente, La Gloria Cubana, and the US Cohiba all come from here.',
  },
  {
    name: 'Honduras',
    detail: 'Medium-full, slightly rough and earthy. Rocky Patel and Alec Bradley use Honduran tobacco. Less polished than Nicaragua but raw and complex.',
  },
  {
    name: 'Cuba',
    detail: 'The benchmark for premium tobacco. Cuban cigars are embargoed in the US. The Vuelta Abajo region produces the most famous tobacco leaves in the world. Medium strength with distinctive terroir.',
  },
  {
    name: 'Ecuador',
    detail: 'Used mostly for wrappers grown under natural cloud cover, which mimics shade-growing. Reliable, consistent, affordable. The Ecuadorian Habano wrapper is one of the most popular wrapper choices globally.',
  },
  {
    name: 'Brazil',
    detail: 'Brazilian Mata Fina tobacco is used as a binder and filler in many blends. Dark, earthy, slightly fermented character. Adds depth when blended with Nicaraguan or Dominican leaves.',
  },
];

const heading: React.CSSProperties = { fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 10)' };
const body: React.CSSProperties = { color: 'oklch(0.68 0.015 10)' };
const muted: React.CSSProperties = { color: 'oklch(0.58 0.015 10)' };
const card: React.CSSProperties = {
  background: 'oklch(0.18 0.025 10)',
  border: '1px solid oklch(0.25 0.02 10)',
  borderRadius: '0.5rem',
  padding: '1.25rem',
};

export default function TypesOfCigarsPage() {
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
              Wrapper, Strength, Origin
            </span>
            <h1 style={heading} className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Types of Cigars
            </h1>
            <p style={{ ...body, maxWidth: '60ch' }} className="text-lg leading-relaxed">
              The wrapper is 60 to 70% of the flavor. The country of origin sets the character. The strength level tells you what your body will feel. Know these three things and you can walk into any cigar shop, read a band, and pick well every time.
            </p>
          </div>
        </section>

        {/* Construction */}
        <section aria-label="Cigar construction overview" className="py-20 px-6" style={{ background: 'oklch(0.15 0.022 10)' }}>
          <div className="max-w-3xl mx-auto">
            <h2 style={heading} className="text-3xl sm:text-4xl font-bold mb-6">
              What You Are Actually Tasting When You Smoke a Cigar
            </h2>
            <p style={body} className="leading-relaxed mb-8">
              Every premium cigar has three parts: wrapper, binder, and filler. Each contributes differently to the smoke.
            </p>
            <div className="grid sm:grid-cols-3 gap-5">
              <div style={card}>
                <h3 style={{ color: 'oklch(0.93 0.015 10)' }} className="font-bold mb-2">Wrapper</h3>
                <p style={body} className="text-sm leading-relaxed">
                  The outermost leaf. This is what you see and touch. It accounts for 60 to 70% of the cigar&apos;s flavor. The wrapper type is usually the most important decision when choosing a cigar.
                </p>
              </div>
              <div style={card}>
                <h3 style={{ color: 'oklch(0.93 0.015 10)' }} className="font-bold mb-2">Binder</h3>
                <p style={body} className="text-sm leading-relaxed">
                  Holds the filler together. Usually one or two leaves. Provides structural integrity and contributes moderate flavor. Often a thicker, more resilient leaf than the wrapper.
                </p>
              </div>
              <div style={card}>
                <h3 style={{ color: 'oklch(0.93 0.015 10)' }} className="font-bold mb-2">Filler</h3>
                <p style={body} className="text-sm leading-relaxed">
                  Multiple leaves bundled inside the binder. Determines the body (mild, medium, full) and how well the cigar burns and draws. Most blenders use 3 to 5 different filler leaves.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Wrappers */}
        <section aria-label="Wrapper types explained" className="py-20 px-6" style={{ background: 'oklch(0.10 0.015 10)' }}>
          <div className="max-w-3xl mx-auto">
            <h2 style={heading} className="text-3xl sm:text-4xl font-bold mb-10">
              Pick the Wrapper, Pick the Experience
            </h2>
            <div className="space-y-5">
              {WRAPPERS.map((w) => (
                <div key={w.name} style={card}>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 style={{ color: 'oklch(0.93 0.015 10)' }} className="font-bold">{w.name}</h3>
                    <span
                      className="text-xs px-2 py-1 rounded flex-shrink-0 font-medium"
                      style={{ background: 'oklch(0.13 0.02 10)', color: 'oklch(0.78 0.10 70)', border: '1px solid oklch(0.25 0.02 10)' }}
                    >
                      {w.strength}
                    </span>
                  </div>
                  <p style={{ color: 'oklch(0.45 0.012 10)' }} className="text-xs mb-2">
                    Origin: {w.origin} | Color: {w.color}
                  </p>
                  <p style={body} className="text-sm leading-relaxed mb-2">{w.flavor}</p>
                  <p style={muted} className="text-xs font-medium">Best for: {w.best}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strength classification */}
        <section aria-label="Cigar strength classification" className="py-20 px-6" style={{ background: 'oklch(0.15 0.022 10)' }}>
          <div className="max-w-3xl mx-auto">
            <h2 style={heading} className="text-3xl sm:text-4xl font-bold mb-6">
              Strength Is Not the Same as Flavor: Know the Difference
            </h2>
            <p style={body} className="leading-relaxed mb-8">
              Strength in cigars refers to nicotine content, not just flavor intensity. A cigar can taste bold and complex but be medium strength. Do not confuse complexity with power.
            </p>
            <div className="overflow-x-auto rounded-md" style={{ border: '1px solid oklch(0.25 0.02 10)' }}>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: 'oklch(0.18 0.025 10)' }}>
                    <th style={{ color: 'oklch(0.93 0.015 10)', fontFamily: 'var(--font-display)' }} className="text-left p-3">Level</th>
                    <th style={{ color: 'oklch(0.93 0.015 10)', fontFamily: 'var(--font-display)' }} className="text-left p-3">Typical Wrappers</th>
                    <th style={{ color: 'oklch(0.93 0.015 10)', fontFamily: 'var(--font-display)' }} className="text-left p-3">Effect</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Mild', 'Connecticut Shade, Cameroon', 'Relaxed, no head rush. Good for mornings and first smokes.'],
                    ['Medium', 'Ecuadorian Habano natural, Corojo natural', 'Noticeable nicotine, not overwhelming. After-dinner range.'],
                    ['Medium-Full', 'Habano Maduro, Corojo Maduro', 'Strong effect. Better on a full stomach. Experienced range.'],
                    ['Full', 'Nicaraguan puro, San Andres Maduro', 'Heavy nicotine. Reserve for experienced smokers.'],
                  ].map(([level, wrappers, effect], i) => (
                    <tr
                      key={level}
                      style={{
                        background: i % 2 === 0 ? 'oklch(0.13 0.02 10)' : 'oklch(0.15 0.022 10)',
                        borderTop: '1px solid oklch(0.25 0.02 10)',
                      }}
                    >
                      <td style={{ color: 'oklch(0.93 0.015 10)' }} className="p-3 font-medium">{level}</td>
                      <td style={body} className="p-3">{wrappers}</td>
                      <td style={body} className="p-3">{effect}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Country profiles */}
        <section aria-label="Country of origin profiles" className="py-20 px-6" style={{ background: 'oklch(0.10 0.015 10)' }}>
          <div className="max-w-3xl mx-auto">
            <h2 style={heading} className="text-3xl sm:text-4xl font-bold mb-8">
              Where It Was Grown Tells You How It Will Smoke
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {COUNTRIES.map((c) => (
                <div key={c.name} style={card}>
                  <h3 style={{ color: 'oklch(0.93 0.015 10)' }} className="font-bold mb-2">{c.name}</h3>
                  <p style={body} className="text-sm leading-relaxed">{c.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reading the band */}
        <section aria-label="How to read a cigar band" className="py-20 px-6" style={{ background: 'oklch(0.15 0.022 10)' }}>
          <div className="max-w-3xl mx-auto">
            <h2 style={heading} className="text-3xl sm:text-4xl font-bold mb-6">
              Read the Band Before You Buy the Cigar
            </h2>
            <p style={body} className="leading-relaxed mb-6">
              The band (the paper ring near the head) tells you several things. Most bands include:
            </p>
            <ul className="space-y-3">
              {[
                { label: 'Brand name', detail: 'The maker or sub-brand. Sometimes the line name is on a secondary band lower on the cigar.' },
                { label: 'Line name', detail: 'The series within the brand. Padron 1964, Cohiba Red Dot, Oliva Serie G. This tells you which product within the brand.' },
                { label: 'Country of origin', detail: 'Often marked on the bottom band or back. "Hecho en Nicaragua" means made in Nicaragua. "Hecho a Mano" means made by hand.' },
                { label: 'Wrapper info', detail: 'Some bands state the wrapper: Natural, Maduro, or a specific wrapper type. Not all brands include this.' },
              ].map((item) => (
                <li key={item.label} style={card}>
                  <p style={{ color: 'oklch(0.93 0.015 10)' }} className="font-semibold mb-1">{item.label}</p>
                  <p style={body} className="text-sm">{item.detail}</p>
                </li>
              ))}
            </ul>
            <p style={body} className="mt-6 text-sm leading-relaxed">
              When to remove the band: personal preference. Some smokers leave it on. Others remove it after a few minutes when the heat loosens the glue, to avoid tearing the wrapper. Never rip it off cold.
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
              Stop Buying Cigars by Brand Name. Start Buying by What You Like.
            </h2>
            <p style={muted} className="text-lg mb-8">
              Log each smoke in CigarsBase. Note the wrapper, strength, and country. After 20 smokes you will see patterns: which wrappers you reach for, which countries you return to, which strength hits your limit. That data turns guessing into a rotation you actually enjoy. 1,840 cigars searchable by wrapper, strength, and origin. Free, no subscription.
            </p>
            <Link href="/free-download" className="btn-primary inline-flex items-center justify-center">
              Download Free
            </Link>
          </div>
        </section>

        {/* Cross-links */}
        <section aria-label="Related guides" className="py-16 px-6" style={{ background: 'oklch(0.15 0.022 10)' }}>
          <div className="max-w-3xl mx-auto">
            <h2 style={heading} className="text-2xl font-bold mb-6">All Guides</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: '/cigar-sizes', label: 'Cigar Sizes and Shapes' },
                { href: '/how-to-smoke-a-cigar', label: 'How to Smoke a Cigar' },
                { href: '/cohiba-cigars', label: 'Cohiba Cigars Guide' },
                { href: '/padron-cigars', label: 'Padron Cigars Guide' },
                { href: '/best-cigars-for-beginners', label: 'Best Cigars for Beginners' },
                { href: '/cigar-humidor', label: 'Cigar Humidor Guide' },
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
