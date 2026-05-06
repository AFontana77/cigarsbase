import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cigar Humidor Guide — What It Is, How It Works & What to Buy | CigarsBase',
  description:
    'A cigar humidor keeps cigars at 65-72% relative humidity and 65-70°F. Learn how humidors work, how to season one, what types exist, and common mistakes that dry out or mold cigars.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Cigar Humidor Guide — What It Is, How It Works & What to Buy',
      description:
        'A cigar humidor keeps cigars at 65-72% relative humidity and 65-70°F. Learn how humidors work, how to season one, and common mistakes.',
      url: 'https://www.cigarsbase.com/cigar-humidor',
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
          name: 'Cigar Humidor Guide',
          item: 'https://www.cigarsbase.com/cigar-humidor',
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

export default function CigarHumidorPage() {
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
              Storage Reference
            </span>
            <h1 style={heading} className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Cigar Humidor Guide
            </h1>
            <p style={{ ...body, maxWidth: '60ch' }} className="text-lg leading-relaxed">
              A cigar outside a humidor starts to die within days. Too dry and it burns hot and bitter. Too humid and it will not draw. This guide covers what to buy, how to set it up, and what to do when the readings drift.
            </p>
          </div>
        </section>

        {/* What is a humidor */}
        <section aria-label="What is a cigar humidor" className="py-20 px-6" style={{ background: 'oklch(0.15 0.022 10)' }}>
          <div className="max-w-3xl mx-auto">
            <h2 style={heading} className="text-3xl sm:text-4xl font-bold mb-6">
              Why a Humidor Makes or Breaks the Smoke
            </h2>
            <p style={body} className="leading-relaxed mb-4">
              A humidor is a box or cabinet lined with Spanish cedar. Its job is to keep cigars at 65 to 72% relative humidity (RH) and 65 to 70 degrees Fahrenheit. That range is where cigars rest, age, and remain smokable. Outside that range, things go wrong fast.
            </p>
            <p style={body} className="leading-relaxed mb-4">
              Too dry: the oils in the wrapper evaporate. The cigar cracks, burns hot, tastes harsh. A dry cigar can be ruined in a week without storage.
            </p>
            <p style={body} className="leading-relaxed">
              Too humid: mold grows on the wrapper. Tobacco beetles also lay eggs in the filler at high temperatures. At 77 degrees Fahrenheit or above, those eggs hatch and the beetles eat through the cigar from the inside.
            </p>
          </div>
        </section>

        {/* How humidity works */}
        <section aria-label="How humidity control works" className="py-20 px-6" style={{ background: 'oklch(0.10 0.015 10)' }}>
          <div className="max-w-3xl mx-auto">
            <h2 style={heading} className="text-3xl sm:text-4xl font-bold mb-6">
              The Three Things That Actually Keep Your Cigars in Range
            </h2>
            <p style={body} className="leading-relaxed mb-8">
              Three components keep your humidor in range: a humidification device, a hygrometer, and the Spanish cedar lining itself.
            </p>
            <div className="space-y-5">
              <div style={card}>
                <h3 style={{ color: 'oklch(0.93 0.015 10)' }} className="font-bold mb-2">Humidification device</h3>
                <p style={body} className="text-sm leading-relaxed">
                  Releases moisture into the humidor. Options range from simple sponge trays to polymer crystal jars to electronic units. The easiest modern option: Boveda packs. They are two-way humidity packs that absorb or release moisture to maintain a set level (69% or 72% are most common). Drop one in, replace every few months. No refilling, no mess.
                </p>
              </div>
              <div style={card}>
                <h3 style={{ color: 'oklch(0.93 0.015 10)' }} className="font-bold mb-2">Hygrometer</h3>
                <p style={body} className="text-sm leading-relaxed">
                  Measures the RH inside the humidor. Digital hygrometers are more accurate than analog. Analog ones can drift by 10 to 15% and often ship uncalibrated. A $15 digital unit is more reliable than a $40 analog dial. Calibrate before use.
                </p>
              </div>
              <div style={card}>
                <h3 style={{ color: 'oklch(0.93 0.015 10)' }} className="font-bold mb-2">Spanish cedar lining</h3>
                <p style={body} className="text-sm leading-relaxed">
                  The interior wood of a quality humidor is Spanish cedar (Cedrela odorata). It absorbs and releases humidity slowly, helping stabilize the environment. It also repels tobacco beetles and adds a faint cedar note to the cigars over time. This is the main reason humidors are not just any wood box.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Types */}
        <section aria-label="Types of humidors" className="py-20 px-6" style={{ background: 'oklch(0.15 0.022 10)' }}>
          <div className="max-w-3xl mx-auto">
            <h2 style={heading} className="text-3xl sm:text-4xl font-bold mb-8">
              Pick the Right Humidor for Where You Are in the Hobby
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div style={{ ...card, padding: '1.5rem' }}>
                <h3 style={{ color: 'oklch(0.93 0.015 10)' }} className="font-bold mb-2">Desktop (10 to 50 cigars)</h3>
                <p style={body} className="text-sm leading-relaxed mb-3">
                  The beginner pick. Sits on a desk or shelf. Usually $30 to $200. Good for learning how to maintain humidity without a big commitment.
                </p>
                <p style={{ color: 'oklch(0.45 0.012 10)' }} className="text-xs">Best for: new collectors, casual smokers</p>
              </div>
              <div style={{ ...card, padding: '1.5rem' }}>
                <h3 style={{ color: 'oklch(0.93 0.015 10)' }} className="font-bold mb-2">Cabinet (100 to 500+ cigars)</h3>
                <p style={body} className="text-sm leading-relaxed mb-3">
                  Freestanding furniture. $300 to $2,000 or more. Some use electronic humidity control. Built for serious collectors who buy boxes and age long-term.
                </p>
                <p style={{ color: 'oklch(0.45 0.012 10)' }} className="text-xs">Best for: dedicated collectors</p>
              </div>
              <div style={{ ...card, padding: '1.5rem' }}>
                <h3 style={{ color: 'oklch(0.93 0.015 10)' }} className="font-bold mb-2">Travel humidor (5 to 10 cigars)</h3>
                <p style={body} className="text-sm leading-relaxed mb-3">
                  Waterproof and crush-resistant. Fits 4 to 8 cigars. Holds humidity for a few days. Use a small Boveda pack inside. Good for trips, golf rounds, and events.
                </p>
                <p style={{ color: 'oklch(0.45 0.012 10)' }} className="text-xs">Best for: on-the-go smokers</p>
              </div>
              <div style={{ ...card, padding: '1.5rem' }}>
                <h3 style={{ color: 'oklch(0.93 0.015 10)' }} className="font-bold mb-2">Coolidor (100+ cigars, budget)</h3>
                <p style={body} className="text-sm leading-relaxed mb-3">
                  A large soft cooler lined with foam or Spanish cedar panels. Holds 100 or more cigars for under $100 total. Popular on cigar forums. Works well. Seal is often better than many desktop humidors.
                </p>
                <p style={{ color: 'oklch(0.45 0.012 10)' }} className="text-xs">Best for: budget-conscious, high volume</p>
              </div>
            </div>
          </div>
        </section>

        {/* Seasoning */}
        <section aria-label="How to season a new humidor" className="py-20 px-6" style={{ background: 'oklch(0.10 0.015 10)' }}>
          <div className="max-w-3xl mx-auto">
            <h2 style={heading} className="text-3xl sm:text-4xl font-bold mb-6">
              Season It Once. Protect Your Investment for Years.
            </h2>
            <p style={body} className="leading-relaxed mb-8">
              A new humidor has dry wood. If you skip seasoning, the dry cedar pulls moisture from your cigars instead of maintaining it. Seasoning primes the wood so it stabilizes the environment correctly.
            </p>
            <ol className="space-y-6 list-none">
              {[
                {
                  n: '1',
                  title: 'Wipe the inside with distilled water',
                  detail: 'Use a cloth lightly dampened with distilled water. Not soaking wet. Wipe all cedar surfaces once. Do not use tap water. Tap water contains minerals that leave deposits and can damage the wood.',
                },
                {
                  n: '2',
                  title: 'Place a Boveda 84% pack inside',
                  detail: 'Close the lid. Leave it for 14 days. The 84% pack pushes extra moisture into the wood to season it. Do not add cigars yet.',
                },
                {
                  n: '3',
                  title: 'Switch to a 69% or 72% pack',
                  detail: 'Remove the 84% pack. Add a 69% or 72% Boveda for ongoing maintenance. Wait 24 hours and confirm with your hygrometer before adding cigars.',
                },
              ].map((step) => (
                <li key={step.n} className="flex items-start gap-4">
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full text-sm font-bold flex items-center justify-center"
                    style={{ background: 'oklch(0.50 0.18 15)', color: 'oklch(0.99 0 0)', fontFamily: 'var(--font-display)' }}
                  >
                    {step.n}
                  </span>
                  <div>
                    <p style={{ color: 'oklch(0.93 0.015 10)' }} className="font-medium mb-1">{step.title}</p>
                    <p style={body} className="text-sm">{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Ideal conditions and mistakes */}
        <section aria-label="Ideal conditions and common mistakes" className="py-20 px-6" style={{ background: 'oklch(0.15 0.022 10)' }}>
          <div className="max-w-3xl mx-auto">
            <h2 style={heading} className="text-3xl sm:text-4xl font-bold mb-6">
              The Numbers That Keep Cigars Smokable
            </h2>
            <p style={body} className="leading-relaxed mb-8">
              The target range is 65 to 72% RH and 65 to 70 degrees Fahrenheit. A simple starting point is the &quot;65/65 rule&quot;: 65% humidity at 65 degrees. This is conservative and safe. Most cigar makers roll at 68 to 70%, so landing there is ideal.
            </p>
            <div style={{ ...card, padding: '1.5rem' }} className="mb-10">
              <h3 style={{ color: 'oklch(0.78 0.10 70)' }} className="font-bold mb-3">
                Tobacco beetle warning
              </h3>
              <p style={body} className="text-sm leading-relaxed">
                Tobacco beetle eggs can be present in any cigar. They hatch at 77 degrees or above. Once hatched, beetles tunnel through the filler and ruin the cigar completely. Keep your humidor below 73 degrees. If you buy new cigars and are unsure of their storage history, freeze them at 0 degrees Fahrenheit for 72 hours before adding to your humidor. Thaw slowly: move to fridge for 24 hours, then room temp.
              </p>
            </div>
            <h2 style={heading} className="text-2xl sm:text-3xl font-bold mb-4">
              When Your Humidor Readings Are Off
            </h2>
            <ul className="space-y-4">
              {[
                { mistake: 'Using tap water', fix: 'Always use distilled water. No minerals, no deposits.' },
                { mistake: 'Skipping the seasoning step', fix: 'Unseasoned wood pulls moisture from cigars in the first weeks.' },
                { mistake: 'Overpacking', fix: 'Air needs to circulate. Leave 20% of the humidor empty.' },
                { mistake: 'Storing near a window', fix: 'Sunlight and temperature swings crack wrappers and cause mold.' },
                { mistake: 'Trusting the stock hygrometer', fix: 'Many desktop humidors ship with cheap, inaccurate analog gauges. Buy a digital one.' },
              ].map((item) => (
                <li key={item.mistake} className="flex gap-4 items-start">
                  <span style={{ color: 'oklch(0.50 0.18 15)' }} className="font-bold mt-0.5">X</span>
                  <div>
                    <p style={{ color: 'oklch(0.93 0.015 10)' }} className="font-medium">{item.mistake}</p>
                    <p style={muted} className="text-sm">{item.fix}</p>
                  </div>
                </li>
              ))}
            </ul>
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
              Know Exactly What Is in Your Humidor at All Times
            </h2>
            <p style={muted} className="text-lg mb-8">
              Log your stock in CigarsBase. Track what you own, when you bought it, and how many are left. You will always know when you are running low on a go-to stick before it runs out. 1,840 cigars in the database. Free, no subscription.
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
                { href: '/padron-cigars', label: 'Padron Cigars Guide' },
                { href: '/best-cigars-for-beginners', label: 'Best Cigars for Beginners' },
                { href: '/types-of-cigars', label: 'Types of Cigars' },
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
