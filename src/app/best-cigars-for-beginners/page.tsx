import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Cigars for Beginners — 6 Picks by Wrapper & Price | CigarsBase',
  description:
    'The best cigars for beginners by wrapper type and price point. Connecticut shade for mild, Habano for medium-full. Real picks with ratings, what to expect, and where to start.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Best Cigars for Beginners — 6 Picks by Wrapper and Price',
      description:
        'The best cigars for beginners by wrapper type and price point. Connecticut shade for mild, Habano for medium-full.',
      url: 'https://www.cigarsbase.com/best-cigars-for-beginners',
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
          name: 'Best Cigars for Beginners',
          item: 'https://www.cigarsbase.com/best-cigars-for-beginners',
        },
      ],
    },
  ],
};

const PICKS = [
  {
    rank: 1,
    name: 'Arturo Fuente Hemingway Short Story',
    wrapper: 'Connecticut (Cameroon)',
    vitola: 'Perfecto-ish',
    price: '~$12',
    rating: '94 pts (Cigar Aficionado)',
    body: 'Mild to medium body. Cedar, cream, and a touch of spice. One of the most awarded accessible cigars in print. Smokes in about 45 minutes. The Hemingway Short Story has been a standard beginner recommendation for 20+ years.',
    level: 'First-time smoker',
  },
  {
    rank: 2,
    name: 'Macanudo Cafe Hyde Park',
    wrapper: 'Connecticut Shade',
    vitola: 'Robusto',
    price: '~$8',
    rating: 'Consistent 88-90',
    body: 'The classic beginner cigar. Mild, smooth, zero sharp edges. Creamy and nutty with a slightly sweet finish. Very forgiving. If someone new to cigars asks what to try, this is the default answer from most tobacconists. Widely available everywhere.',
    level: 'True first-timer',
  },
  {
    rank: 3,
    name: 'Romeo y Julieta 1875 Robusto',
    wrapper: 'Ecuadorian Shade',
    vitola: 'Robusto',
    price: '~$10',
    rating: '90 pts range',
    body: 'Medium body. Accessible, smooth, and widely sold. One of the top-selling bands in the US. Cedar, a little cream, light spice. A step above the Macanudo in flavor without being overwhelming. Good for someone who has had a mild cigar and wants more.',
    level: 'After your first mild cigar',
  },
  {
    rank: 4,
    name: 'Oliva Serie G Robusto',
    wrapper: 'Habano Natural',
    vitola: 'Robusto',
    price: '~$8',
    rating: '90+ regularly',
    body: 'Medium-full body. A step into Nicaraguan tobacco without going full power. Earthy, coffee, and cocoa. Very good value. Oliva is one of Nicaragua\'s best factories and the Serie G is where serious cigar fans often send curious friends who want more flavor.',
    level: 'After 2-3 mild cigars',
  },
  {
    rank: 5,
    name: 'Padron Serie Robusto Natural',
    wrapper: 'Nicaraguan Natural',
    vitola: 'Robusto',
    price: '~$10',
    rating: '91-93 consistently',
    body: 'Entry to the Padron family. Medium-full. Espresso, cocoa, leather. Better quality than most cigars at three times the price. If you want to understand what all the Padron fuss is about without spending $25, this is the answer.',
    level: 'After getting comfortable with medium body',
  },
  {
    rank: 6,
    name: 'CAO Flathead or Drew Estate Undercrown',
    wrapper: 'Habano / Corojo',
    vitola: 'Various',
    price: '$10 to $15',
    rating: '90+ range',
    body: 'These are for beginners who want bold from day one. Full body, strong nicotine, complex flavor. Not recommended as a first cigar. If you have smoked cigarettes or enjoy very strong coffee, you might handle these fine. Everyone else: work up to them.',
    level: 'Bold start or experienced beginner',
  },
];

const cardStyle: React.CSSProperties = {
  background: 'oklch(0.18 0.025 10)',
  border: '1px solid oklch(0.25 0.02 10)',
  borderRadius: '0.5rem',
  padding: '1.5rem',
};

const heading: React.CSSProperties = { fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 10)' };
const body: React.CSSProperties = { color: 'oklch(0.68 0.015 10)' };
const muted: React.CSSProperties = { color: 'oklch(0.58 0.015 10)' };

export default function BestCigarsForBeginnersPage() {
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
              Beginner Picks
            </span>
            <h1 style={heading} className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Best Cigars for Beginners
            </h1>
            <p style={{ ...body, maxWidth: '60ch' }} className="text-lg leading-relaxed">
              Your first cigar sets the tone. Pick the wrong one and it is harsh, tight, or overwhelming. Pick the right one and you understand the appeal immediately. These six are where experienced smokers send beginners.
            </p>
          </div>
        </section>

        {/* Why Connecticut first */}
        <section aria-label="Why start with Connecticut shade wrapper" className="py-20 px-6" style={{ background: 'oklch(0.15 0.022 10)' }}>
          <div className="max-w-3xl mx-auto">
            <h2 style={heading} className="text-3xl sm:text-4xl font-bold mb-6">
              What Makes a Cigar Good for Someone Starting Out
            </h2>
            <p style={body} className="leading-relaxed mb-4">
              Connecticut shade is the wrapper of choice for beginners. The leaves grow under shade cloth in Connecticut, which slows their growth and produces a lighter, thinner leaf. The result is a smooth, creamy, nutty smoke with lower nicotine. It will not make you sick, and it will not overwhelm your palate.
            </p>
            <p style={body} className="leading-relaxed mb-4">
              Full-bodied Nicaraguan puros are excellent cigars, but they hit hard. One on an empty stomach, smoked too fast, will cause nausea in most new smokers. Build up to those. Start mild.
            </p>
            <p style={body} className="leading-relaxed">
              Reddit&apos;s cigar communities recommend Connecticut shade almost universally for first-timers. Tobacconists do the same. There is a reason.
            </p>
          </div>
        </section>

        {/* The picks */}
        <section aria-label="Six beginner cigar picks" className="py-20 px-6" style={{ background: 'oklch(0.10 0.015 10)' }}>
          <div className="max-w-3xl mx-auto">
            <h2 style={heading} className="text-3xl sm:text-4xl font-bold mb-10">
              Six Cigars That Will Not Overwhelm and Will Not Disappoint
            </h2>
            <div className="space-y-6">
              {PICKS.map((pick) => (
                <div key={pick.rank} style={cardStyle}>
                  <div className="flex items-start gap-4 mb-3">
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-full text-sm font-bold flex items-center justify-center"
                      style={{ background: 'oklch(0.50 0.18 15)', color: 'oklch(0.99 0 0)', fontFamily: 'var(--font-display)' }}
                    >
                      {pick.rank}
                    </span>
                    <div className="flex-1">
                      <h3 style={{ color: 'oklch(0.93 0.015 10)' }} className="text-lg font-bold">
                        {pick.name}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span
                          className="text-xs px-2 py-1 rounded"
                          style={{ background: 'oklch(0.13 0.02 10)', color: 'oklch(0.68 0.015 10)', border: '1px solid oklch(0.25 0.02 10)' }}
                        >
                          {pick.wrapper}
                        </span>
                        <span
                          className="text-xs px-2 py-1 rounded"
                          style={{ background: 'oklch(0.13 0.02 10)', color: 'oklch(0.68 0.015 10)', border: '1px solid oklch(0.25 0.02 10)' }}
                        >
                          {pick.vitola}
                        </span>
                        <span
                          className="text-xs px-2 py-1 rounded font-medium"
                          style={{ background: 'oklch(0.13 0.02 10)', color: 'oklch(0.78 0.10 70)', border: '1px solid oklch(0.25 0.02 10)' }}
                        >
                          {pick.price}
                        </span>
                        <span
                          className="text-xs px-2 py-1 rounded"
                          style={{ background: 'oklch(0.13 0.02 10)', color: 'oklch(0.68 0.015 10)', border: '1px solid oklch(0.25 0.02 10)' }}
                        >
                          {pick.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p style={body} className="text-sm leading-relaxed ml-12">{pick.body}</p>
                  <p style={{ color: 'oklch(0.78 0.10 70)' }} className="text-xs font-medium mt-3 ml-12">
                    Best for: {pick.level}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What to avoid */}
        <section aria-label="What beginners should avoid" className="py-20 px-6" style={{ background: 'oklch(0.15 0.022 10)' }}>
          <div className="max-w-3xl mx-auto">
            <h2 style={heading} className="text-3xl sm:text-4xl font-bold mb-8">
              What Turns a Good First Smoke into a Bad Memory
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Full-bodied Nicaraguan puros',
                  detail: 'High nicotine. Great cigars, but the head rush is real on an empty stomach. Wait until you know how you handle nicotine.',
                },
                {
                  title: 'Anything above 60 ring gauge',
                  detail: 'Wide ring gauge means more filler and more nicotine per draw. Too much for a first smoke.',
                },
                {
                  title: 'Cheap machine-made cigars',
                  detail: 'These are not premium cigars. The tobacco is low grade, the draw is uneven, and the smoke is harsh. They do not represent what cigars can be.',
                },
                {
                  title: 'Smoking on an empty stomach',
                  detail: 'Nicotine absorbs faster without food. Always eat first. This one mistake causes most beginner bad experiences.',
                },
              ].map((item) => (
                <div key={item.title} style={cardStyle} className="flex items-start gap-4">
                  <span style={{ color: 'oklch(0.50 0.18 15)' }} className="font-bold text-lg mt-0.5">X</span>
                  <div>
                    <p style={{ color: 'oklch(0.93 0.015 10)' }} className="font-semibold">{item.title}</p>
                    <p style={muted} className="text-sm mt-1">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips */}
        <section aria-label="Beginner smoking tips" className="py-16 px-6" style={{ background: 'oklch(0.10 0.015 10)' }}>
          <div className="max-w-3xl mx-auto">
            <h2 style={heading} className="text-3xl sm:text-4xl font-bold mb-8">
              Six Habits That Make Every Smoke Better from the Start
            </h2>
            <ul className="space-y-3">
              {[
                'Eat a full meal before you smoke.',
                'One puff per minute. Slower is better.',
                'Do not inhale. Draw into your mouth, then release.',
                'Light with a butane lighter, not a gas station lighter.',
                'Stop when the smoke tastes hot. The final two inches get harsh.',
                'Drink water or a light mixer while smoking. Avoid red wine because it can magnify nicotine effects.',
              ].map((tip) => (
                <li key={tip} style={cardStyle} className="flex items-start gap-3">
                  <span style={{ color: 'oklch(0.78 0.10 70)' }} className="font-bold mt-0.5">+</span>
                  <span style={body} className="text-sm">{tip}</span>
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
              Build a Flavor Map from Your First Five Smokes
            </h2>
            <p style={muted} className="text-lg mb-8" >
              Log your first cigars in CigarsBase. Note the wrapper, strength, and what you tasted. After five entries you will know which direction to go next and which cigars to skip entirely. That is how you stop wasting money on sticks that were not right for you. All six picks are in the 1,840-cigar database. Free, no subscription.
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
                { href: '/cigar-humidor', label: 'Cigar Humidor Guide' },
                { href: '/padron-cigars', label: 'Padron Cigars Guide' },
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
