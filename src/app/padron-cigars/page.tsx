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

export default function PadronCigarsPage() {
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
              Padron Cigars
            </h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed">
              Four Cigars of the Year from Cigar Aficionado. No other brand comes close.
              Here is what each Padron series is, how they differ, and where to start.
            </p>
          </div>
        </section>

        {/* Brand overview */}
        <section aria-label="Brand history and overview" className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Padron Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Jose Orlando Padron was a Cuban exile who founded Padron Cigars in 1964 in Miami.
              He built the company into one of the most respected names in premium tobacco.
              The cigars are made in Nicaragua using Nicaraguan tobacco grown in the Jalapa and
              Esteli valleys. All tobaccos are aged for a minimum of 2.5 years before rolling.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              The brand has won Cigar Aficionado's Cigar of the Year four times. That is more
              than any other brand. The consistency of quality across all their lines sets them
              apart. You rarely get a bad Padron.
            </p>
            <div className="bg-rose-50 border border-rose-100 rounded-xl p-5">
              <p className="text-sm text-gray-700 font-medium">
                All Padron cigars are Nicaraguan puros: wrapper, binder, and filler all from
                Nicaragua. No blending in tobacco from other countries.
              </p>
            </div>
          </div>
        </section>

        {/* Series breakdown */}
        <section aria-label="Padron series breakdown" className="py-16 px-4 bg-rose-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">The Padron Lines</h2>
            <div className="space-y-6">

              <div className="bg-white rounded-xl p-6 border border-rose-100">
                <div className="flex items-start justify-between mb-3 gap-4">
                  <h3 className="text-lg font-bold text-gray-900">Padron Series (Heritage)</h3>
                  <span className="text-sm text-rose-800 font-semibold bg-rose-50 px-3 py-1 rounded-full flex-shrink-0">$9 to $12</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  The entry point to the Padron family. Medium-full body. Espresso, cocoa, and
                  leather notes with a long, clean finish. Available in natural and maduro.
                  Both versions are excellent. The price is the surprise: most cigars this good
                  cost three times as much.
                </p>
                <p className="text-xs text-gray-400">Strength: medium-full. Good value buy.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-rose-100">
                <div className="flex items-start justify-between mb-3 gap-4">
                  <h3 className="text-lg font-bold text-gray-900">Padron 1964 Anniversary Series</h3>
                  <span className="text-sm text-rose-800 font-semibold bg-rose-50 px-3 py-1 rounded-full flex-shrink-0">$20 to $25</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  The mid-tier and their best-selling line. Box-pressed (the sides are square rather
                  than round). Richer and more complex than the Heritage. Notes of hazelnut, cocoa
                  bean, and dark coffee. The 1964 Exclusivo is the most popular individual cigar in
                  the line and earns 96+ ratings regularly. This is the cigar most reviewers
                  recommend as a first Padron.
                </p>
                <p className="text-xs text-gray-400">Strength: full. Multiple Cigar of the Year nominations.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-rose-100">
                <div className="flex items-start justify-between mb-3 gap-4">
                  <h3 className="text-lg font-bold text-gray-900">Padron 1926 Serie</h3>
                  <span className="text-sm text-rose-800 font-semibold bg-rose-50 px-3 py-1 rounded-full flex-shrink-0">$30 to $45</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  Made in the same factory with higher quality standards. Tobacco is aged longer
                  before rolling. The No. 6 Natural earned 96 points and was ranked No. 4 Cigar
                  of the Year in 2024. The No. 80 Maduro is one of the most full-bodied cigars
                  in the Padron catalog. Only for experienced smokers who enjoy bold smokes.
                </p>
                <p className="text-xs text-gray-400">Strength: full to extra-full (No. 80 Maduro).</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-rose-100">
                <div className="flex items-start justify-between mb-3 gap-4">
                  <h3 className="text-lg font-bold text-gray-900">Padron 60th Anniversary</h3>
                  <span className="text-sm text-rose-800 font-semibold bg-rose-50 px-3 py-1 rounded-full flex-shrink-0">$60+</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  Released in 2024 and 2025 to mark the brand's 60th year. The Natural version
                  won Cigar of the Year 2025. Limited production. Both natural and maduro
                  versions are available. Not for everyday smoking but worth tracking down
                  for a special occasion.
                </p>
                <p className="text-xs text-gray-400">Limited release. Cigar of the Year 2025 (Natural).</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-rose-100">
                <div className="flex items-start justify-between mb-3 gap-4">
                  <h3 className="text-lg font-bold text-gray-900">Padron Family Reserve</h3>
                  <span className="text-sm text-rose-800 font-semibold bg-rose-50 px-3 py-1 rounded-full flex-shrink-0">$50 to $70</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  The highest tier. Small batches, very limited. Multiple Cigar of the Year wins.
                  Each box is numbered. These cigars use the most select tobaccos from the farm
                  and are aged the longest. If you see one, it is worth buying.
                </p>
                <p className="text-xs text-gray-400">Very limited availability. Multiple Cigar of the Year wins.</p>
              </div>

            </div>
          </div>
        </section>

        {/* Natural vs Maduro */}
        <section aria-label="Natural versus maduro comparison" className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Natural vs. Maduro</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Padron offers both natural and maduro versions across most lines. Here is how they differ:
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3">Natural</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Lighter brown wrapper. Aged in the standard way. Flavors lean toward cedar,
                  cocoa, and a slight spice. Slightly lighter in body than the maduro versions.
                  Good starting point if you are new to the brand.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3">Maduro</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Dark, oily wrapper. The leaves are fermented longer to break down the starches
                  into natural sugars. The result is a sweeter, richer, more syrupy smoke.
                  Full-bodied. Pairs well with coffee or bourbon. Both versions score equally high.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recommendation */}
        <section aria-label="Beginner recommendation" className="py-12 px-4 bg-rose-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Where to Start</h2>
            <div className="bg-white rounded-xl p-6 border border-rose-100">
              <p className="text-gray-700 leading-relaxed">
                Start with the <strong>1964 Exclusivo Natural</strong>. It is under $25, easy to
                find at most tobacconists, and consistently scores 95 points or above. The
                box-pressed shape makes it easy to hold. The flavor is rich enough to show why
                Padron has four Cigars of the Year, but not so intense that it overwhelms newer
                smokers. If you like it, the maduro version is a logical next step.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section aria-label="App download call to action" className="py-16 px-4 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Search Padron in CigarsBase
            </h2>
            <p className="text-gray-600 mb-6">
              See all Padron ratings and vitolas in our 1,840-cigar database.
              Filter by series, strength, or vitola. Free download.
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
                { href: '/cohiba-cigars', label: 'Cohiba Cigars Guide' },
                { href: '/cigar-sizes', label: 'Cigar Sizes and Shapes' },
                { href: '/best-cigars-for-beginners', label: 'Best Cigars for Beginners' },
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
