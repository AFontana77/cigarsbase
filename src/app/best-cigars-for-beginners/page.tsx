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

export default function BestCigarsForBeginnersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Hero */}
        <section aria-label="Introduction" className="py-16 px-4" style={{ backgroundColor: '#FFF1F2' }}>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Best Cigars for Beginners
            </h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed">
              Six specific picks organized by body level and price. Start mild, build up.
              Each entry includes the wrapper, price, rating, and who it is best for.
            </p>
          </div>
        </section>

        {/* Why Connecticut first */}
        <section aria-label="Why start with Connecticut shade wrapper" className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Start with Connecticut Shade</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Connecticut shade is the wrapper of choice for beginners. The leaves grow under shade
              cloth in Connecticut, which slows their growth and produces a lighter, thinner leaf.
              The result is a smooth, creamy, nutty smoke with lower nicotine. It will not make
              you sick, and it will not overwhelm your palate.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Full-bodied Nicaraguan puros are excellent cigars, but they hit hard. One on an
              empty stomach, smoked too fast, will cause nausea in most new smokers. Build up
              to those. Start mild.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Reddit's cigar communities recommend Connecticut shade almost universally for first-timers.
              Tobacconists do the same. There is a reason.
            </p>
          </div>
        </section>

        {/* The picks */}
        <section aria-label="Six beginner cigar picks" className="py-16 px-4 bg-rose-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">The 6 Picks</h2>
            <div className="space-y-6">
              {PICKS.map((pick) => (
                <div key={pick.rank} className="bg-white rounded-xl p-6 border border-rose-100">
                  <div className="flex items-start gap-4 mb-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-800 text-white text-sm font-bold flex items-center justify-center">
                      {pick.rank}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900">{pick.name}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{pick.wrapper}</span>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{pick.vitola}</span>
                        <span className="text-xs bg-rose-100 text-rose-800 px-2 py-1 rounded font-medium">{pick.price}</span>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{pick.rating}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed ml-12">{pick.body}</p>
                  <p className="text-xs text-rose-800 font-medium mt-3 ml-12">Best for: {pick.level}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What to avoid */}
        <section aria-label="What beginners should avoid" className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What to Avoid</h2>
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
                <div key={item.title} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <span className="text-rose-800 font-bold text-lg mt-0.5">X</span>
                  <div>
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-600 mt-1">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips */}
        <section aria-label="Beginner smoking tips" className="py-12 px-4 bg-rose-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Tips</h2>
            <ul className="space-y-3">
              {[
                'Eat a full meal before you smoke.',
                'One puff per minute. Slower is better.',
                'Do not inhale. Draw into your mouth, then release.',
                'Light with a butane lighter, not a gas station lighter.',
                'Stop when the smoke tastes hot. The final two inches get harsh.',
                'Drink water or a light mixer while smoking. Avoid red wine — it can magnify nicotine effects.',
              ].map((tip) => (
                <li key={tip} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-rose-100">
                  <span className="text-rose-800 font-bold mt-0.5">+</span>
                  <span className="text-gray-700 text-sm">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section aria-label="App download call to action" className="py-16 px-4 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Search any of these cigars in CigarsBase
            </h2>
            <p className="text-gray-600 mb-6">
              See full ratings, tasting notes, and vitola info. Log your first smoke.
              1,840 cigars in the database. Free download.
            </p>
            <Link
              href="/free-download"
              className="inline-flex items-center justify-center bg-rose-800 text-white font-semibold px-8 py-3 rounded-xl hover:bg-rose-700 transition-colors min-h-[48px]"
            >
              Download Free
            </Link>
          </div>
        </section>

        {/* Cross-links */}
        <section aria-label="Related guides" className="py-12 px-4 bg-rose-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Related Guides</h2>
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
                  className="flex items-center gap-2 p-4 rounded-xl border border-gray-100 hover:border-rose-200 hover:bg-rose-50 transition-colors text-rose-800 font-medium min-h-[48px]"
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
