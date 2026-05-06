import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cigar Sizes & Shapes Guide — Complete Vitola Chart | CigarsBase',
  description:
    'The complete guide to cigar sizes (vitolas): ring gauge, length, and what each means for your smoke. Robusto, Toro, Torpedo, Churchill, Corona, Lonsdale — all explained with a sortable chart.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Cigar Sizes and Shapes Guide — Complete Vitola Chart',
      description:
        'The complete guide to cigar sizes (vitolas): ring gauge, length, and what each means for your smoke.',
      url: 'https://www.cigarsbase.com/cigar-sizes',
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
          name: 'Cigar Sizes Guide',
          item: 'https://www.cigarsbase.com/cigar-sizes',
        },
      ],
    },
  ],
};

const VITOLAS = [
  { name: 'Petite Corona', rg: '42', length: '4"', time: '25-35 min', notes: 'Short, mild smoke. Good for quick sessions.' },
  { name: 'Corona', rg: '42', length: '5.5"', time: '35-50 min', notes: 'Classic format. Balanced and easy to find.' },
  { name: 'Panatela', rg: '38', length: '6"', time: '40-55 min', notes: 'Thin gauge. Lighter, more concentrated draw.' },
  { name: 'Robusto', rg: '50', length: '5"', time: '45-60 min', notes: 'Most popular size. Easy to find, well-balanced.' },
  { name: 'Toro', rg: '50', length: '6"', time: '60-90 min', notes: 'Longer robusto. More development in the final third.' },
  { name: 'Corona Gorda', rg: '46', length: '5.625"', time: '50-70 min', notes: 'Medium gauge. Smooth draw, mid-level complexity.' },
  { name: 'Churchill', rg: '47', length: '7"', time: '90-120 min', notes: 'Long smoke. Nicotine builds toward the end.' },
  { name: 'Lonsdale', rg: '42', length: '6.5"', time: '60-80 min', notes: 'Long and thin. Cool, slow burn.' },
  { name: 'Double Corona', rg: '49', length: '7.5"', time: '100-130 min', notes: 'Extended smoke for dedicated sessions.' },
  { name: 'Torpedo / Belicoso', rg: '52', length: '6.125"', time: '60-80 min', notes: 'Tapered head. Requires a careful cut.' },
  { name: 'Perfecto', rg: 'varies', length: 'varies', time: 'varies', notes: 'Tapered at both ends. Complex draw, acquired taste.' },
  { name: 'Gran Toro / Gordo', rg: '60', length: '6"', time: '60-90 min', notes: 'Very wide ring. Delivers full flavor at once.' },
  { name: 'Presidente', rg: '50', length: '8"', time: '120-150 min', notes: 'Longest common vitola. For long evenings.' },
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

export default function CigarSizesPage() {
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
              Vitola Reference
            </span>
            <h1 style={heading} className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Cigar Sizes and Shapes
            </h1>
            <p style={{ ...body, maxWidth: '60ch' }} className="text-lg leading-relaxed">
              Size changes the smoke. The same blend in a Robusto tastes different from that blend in a Churchill. This guide explains why, walks through every common vitola, and tells you which size to pick for the time and experience you have.
            </p>
          </div>
        </section>

        {/* Vitola explained */}
        <section aria-label="What vitola means" className="py-20 px-6" style={{ background: 'oklch(0.15 0.022 10)' }}>
          <div className="max-w-3xl mx-auto">
            <h2 style={heading} className="text-3xl sm:text-4xl font-bold mb-6">
              Why the Same Cigar Tastes Different in a Different Size
            </h2>
            <p style={body} className="leading-relaxed mb-4">
              Vitola is the Spanish term for a specific cigar size and shape. Every cigar has a vitola defined by two measurements: ring gauge (diameter) and length in inches. The same blend rolled in a different vitola will taste different. The shape changes how it draws and burns.
            </p>
            <p style={body} className="leading-relaxed mb-8">
              There are two main categories: parejos and figurados.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              <div style={card}>
                <h3 style={{ color: 'oklch(0.93 0.015 10)' }} className="font-bold mb-2">Parejos</h3>
                <p style={body} className="text-sm leading-relaxed">
                  Straight-sided cigars with an open foot (the end you light) and a closed, rounded head (the end you cut and draw from). This is the standard cigar shape. Robusto, Toro, Churchill, and Corona are all parejos.
                </p>
              </div>
              <div style={card}>
                <h3 style={{ color: 'oklch(0.93 0.015 10)' }} className="font-bold mb-2">Figurados</h3>
                <p style={body} className="text-sm leading-relaxed">
                  Irregular shapes. Includes torpedos (tapered head), belicosos (smaller tapered head), and perfectos (tapered at both ends). These require more skill to roll and sometimes more care when cutting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ring gauge explained */}
        <section aria-label="Ring gauge explained" className="py-20 px-6" style={{ background: 'oklch(0.10 0.015 10)' }}>
          <div className="max-w-3xl mx-auto">
            <h2 style={heading} className="text-3xl sm:text-4xl font-bold mb-6">
              Ring Gauge: The Number That Controls Your Draw and Your Nicotine
            </h2>
            <p style={body} className="leading-relaxed mb-6">
              Ring gauge measures a cigar&apos;s diameter in 64ths of an inch. A 50 ring gauge cigar is 50/64 of an inch in diameter, or about 0.78 inches. That is roughly the diameter of a US nickel.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {[
                { rg: '38-42', text: 'Thin: lighter, cooler, more delicate flavors' },
                { rg: '46-52', text: 'Standard: the most popular range, balanced draw' },
                { rg: '60+', text: 'Wide: more filler, slower burn, more nicotine' },
              ].map((item) => (
                <div key={item.rg} style={{ ...card, textAlign: 'center' }}>
                  <p
                    style={{ color: 'oklch(0.78 0.10 70)', fontFamily: 'var(--font-display)' }}
                    className="text-3xl font-bold mb-1"
                  >
                    {item.rg}
                  </p>
                  <p style={body} className="text-sm">{item.text}</p>
                </div>
              ))}
            </div>
            <p style={body} className="leading-relaxed">
              A wider ring means more filler tobacco touching your palate at once. The burn is slower and cooler. Many smokers find the flavors more complex. But wider cigars also deliver more nicotine per draw. Beginners should avoid 60+ ring until they know how they handle nicotine.
            </p>
          </div>
        </section>

        {/* Length effect */}
        <section aria-label="How cigar length affects the smoke" className="py-16 px-6" style={{ background: 'oklch(0.15 0.022 10)' }}>
          <div className="max-w-3xl mx-auto">
            <h2 style={heading} className="text-3xl sm:text-4xl font-bold mb-4">
              Longer Cigars Burn Cooler. Here Is Why That Matters.
            </h2>
            <p style={body} className="leading-relaxed mb-4">
              Length has two effects. First, a longer cigar is cooler. The greater distance from the burning foot to your mouth allows the smoke to cool down before it reaches you. Longer cigars generally burn smoother in the first half.
            </p>
            <p style={body} className="leading-relaxed">
              Second, nicotine and tars concentrate toward the burning end over time. In the final two inches of any cigar, the smoke is hotter and stronger. In a longer cigar, this happens gradually. In a short petite corona, it happens quickly. When the smoke starts tasting hotter and harsher, that is your cue to stop.
            </p>
          </div>
        </section>

        {/* Vitola chart */}
        <section aria-label="Complete vitola reference chart" className="py-20 px-6" style={{ background: 'oklch(0.10 0.015 10)' }}>
          <div className="max-w-5xl mx-auto">
            <h2 style={heading} className="text-3xl sm:text-4xl font-bold mb-8">
              Every Common Vitola: Size, Time, and What to Expect
            </h2>
            <div
              className="overflow-x-auto rounded-md"
              style={{ border: '1px solid oklch(0.25 0.02 10)' }}
            >
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: 'oklch(0.18 0.025 10)' }}>
                    <th style={{ color: 'oklch(0.93 0.015 10)', fontFamily: 'var(--font-display)' }} className="text-left p-3">Vitola</th>
                    <th style={{ color: 'oklch(0.93 0.015 10)', fontFamily: 'var(--font-display)' }} className="text-left p-3">Ring</th>
                    <th style={{ color: 'oklch(0.93 0.015 10)', fontFamily: 'var(--font-display)' }} className="text-left p-3">Length</th>
                    <th style={{ color: 'oklch(0.93 0.015 10)', fontFamily: 'var(--font-display)' }} className="text-left p-3">Time</th>
                    <th style={{ color: 'oklch(0.93 0.015 10)', fontFamily: 'var(--font-display)' }} className="text-left p-3 hidden sm:table-cell">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {VITOLAS.map((v, i) => (
                    <tr
                      key={v.name}
                      style={{
                        background: i % 2 === 0 ? 'oklch(0.13 0.02 10)' : 'oklch(0.15 0.022 10)',
                        borderTop: '1px solid oklch(0.25 0.02 10)',
                      }}
                    >
                      <td style={{ color: 'oklch(0.93 0.015 10)' }} className="p-3 font-medium">{v.name}</td>
                      <td style={body} className="p-3">{v.rg}</td>
                      <td style={body} className="p-3">{v.length}</td>
                      <td style={body} className="p-3">{v.time}</td>
                      <td style={muted} className="p-3 hidden sm:table-cell">{v.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Figurados */}
        <section aria-label="Figurado shapes explained" className="py-20 px-6" style={{ background: 'oklch(0.15 0.022 10)' }}>
          <div className="max-w-3xl mx-auto">
            <h2 style={heading} className="text-3xl sm:text-4xl font-bold mb-6">
              Figurado Shapes: When the Cut and the Draw Require More Attention
            </h2>
            <div className="space-y-5">
              {[
                {
                  name: 'Torpedo',
                  detail: 'The head tapers to a point. Requires a careful guillotine cut: cut too deep and you lose too much of the taper, making the draw too open. Many torpedo fans prefer a punch cutter. The tapered head focuses the draw and intensifies flavors.',
                },
                {
                  name: 'Belicoso',
                  detail: 'Similar to the torpedo but with a smaller, shorter taper. The taper starts closer to the head. Some people confuse belicosos and torpedos. The belicoso head is more blunt and easier to cut. Robusto-length belicosos are a common format.',
                },
                {
                  name: 'Perfecto',
                  detail: 'Tapered at both ends. The foot is pinched closed, so it does not light as easily as a parejo. You need to toast the foot longer. The draw can be tight. Complex construction. Most blenders use a perfecto as a showcase of rolling skill.',
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

        {/* Beginner rec */}
        <section aria-label="Beginner size recommendation" className="py-16 px-6" style={{ background: 'oklch(0.10 0.015 10)' }}>
          <div className="max-w-3xl mx-auto">
            <h2 style={heading} className="text-3xl sm:text-4xl font-bold mb-4">
              The Size That Fits Almost Every Session
            </h2>
            <div style={{ ...card, padding: '1.5rem' }}>
              <p style={body} className="leading-relaxed">
                Start with a <strong style={{ color: 'oklch(0.93 0.015 10)' }}>Robusto (50 x 5&quot;)</strong>. It is 45 to 60 minutes, widely available in every brand, and the most common size in the CigarsBase database. The 50 ring is wide enough for good flavor complexity but not so wide that it delivers overwhelming nicotine. Once you know a Robusto well, moving up to a Toro or down to a Corona is an easy next step.
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
              Match the Right Size to Every Session You Have
            </h2>
            <p style={muted} className="text-lg mb-8">
              Log each smoke in CigarsBase with the vitola. Over time you will see which sizes you reach for on a 45-minute lunch break versus a two-hour evening outside. That pattern tells you exactly what to keep stocked in your humidor. All 1,840 cigars include the full vitola. Free, no subscription.
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
                { href: '/best-cigars-for-beginners', label: 'Best Cigars for Beginners' },
                { href: '/padron-cigars', label: 'Padron Cigars Guide' },
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
