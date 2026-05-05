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

export default function CohibaPage() {
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
              Cohiba Cigars
            </h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed">
              There are two Cohiba brands with the same name but different origins.
              One is Cuban. One is Dominican. This guide explains both.
            </p>
          </div>
        </section>

        {/* Critical distinction */}
        <section aria-label="Two Cohiba brands explained" className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Two Brands, One Name</h2>
            <div className="bg-rose-50 border border-rose-100 rounded-xl p-6 mb-8">
              <p className="text-gray-700 leading-relaxed font-medium">
                Many beginners do not know this: there are two entirely different companies making
                cigars called "Cohiba." One is made in Cuba and cannot be sold in the United States.
                The other is made in the Dominican Republic and is widely available in US shops.
                They look similar, share a name, and cause constant confusion.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">Cuban Cohiba</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li><strong>Made by:</strong> Habanos S.A. (Cuba)</li>
                  <li><strong>Founded:</strong> 1966</li>
                  <li><strong>US availability:</strong> Not legal to sell in the US</li>
                  <li><strong>Factory:</strong> El Laguito, Havana</li>
                  <li><strong>Strength:</strong> Medium to medium-full</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">Dominican Cohiba (US)</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li><strong>Made by:</strong> General Cigar Co.</li>
                  <li><strong>Founded:</strong> 1978 (US market)</li>
                  <li><strong>US availability:</strong> Widely sold in all 50 states</li>
                  <li><strong>Country:</strong> Dominican Republic</li>
                  <li><strong>Strength:</strong> Medium to full (depends on line)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cuban Cohiba history */}
        <section aria-label="Cuban Cohiba history and lines" className="py-16 px-4 bg-rose-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Cuban Cohiba: The Original</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Cuban Cohiba started in 1966 as Fidel Castro's personal brand. Eduardo Ribera,
              a cigar roller known as El Laguito, began making them for Castro at the El Laguito
              factory in Havana. For years they were given only as diplomatic gifts. In 1992,
              Habanos S.A. opened Cohiba to public export. They became the most recognized Cuban
              cigar in the world.
            </p>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Cuban Cohiba Lines</h3>
            <div className="space-y-5">
              <div className="bg-white rounded-xl p-5 border border-rose-100">
                <h3 className="font-bold text-gray-900 mb-2">Linea Clasica (Siglo I-VI)</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  The core line. Six vitolas named Siglo I through Siglo VI (century). Creamy,
                  slightly earthy, cedar and light floral notes. Medium strength. The Esplendidos
                  (Churchill size) is the most recognized worldwide.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-rose-100">
                <h3 className="font-bold text-gray-900 mb-2">Behike</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  The top tier. Made with medio tiempo leaves, a rare third leaf found only on
                  about 10% of tobacco plants. Very expensive, often $60 to $100+ per cigar on
                  the secondary market. Rich, complex, full-bodied for a Cuban.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-rose-100">
                <h3 className="font-bold text-gray-900 mb-2">Maduro 5</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Cuba's answer to maduro wrappers. Fermented five years. Darker, sweeter, more
                  complex than the Clasica line. Uncommon outside of Cuba.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dominican Cohiba */}
        <section aria-label="Dominican Cohiba US lines" className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Dominican Cohiba: The US Version</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              General Cigar launched its US Cohiba in 1978 after a trademark dispute. The brand
              became established before the Cuban embargo fully solidified the legal landscape.
              It is a different product from a different company but uses the same name.
              The cigars are made in the Dominican Republic with Dominican and other tobacco blends.
            </p>
            <div className="space-y-5">
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">Cohiba Black</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Bold, full body. Dark Connecticut Broadleaf wrapper. Notes of dark chocolate,
                  pepper, and espresso. This is not a beginner cigar.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">Cohiba Red Dot</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Medium body, the most accessible US Cohiba. The entry point for the Dominican
                  line. Smooth, creamy, cedar finish. Widely available.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">Cohiba Macassar</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Medium-full, aged tobacco blend. More complexity than the Red Dot.
                  Oak, leather, and spice profile. A step up in strength and price.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Flavor comparison */}
        <section aria-label="Flavor profile comparison" className="py-16 px-4 bg-rose-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Flavor Profile Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-rose-800 text-white">
                    <th className="text-left p-3 rounded-tl-lg">Category</th>
                    <th className="text-left p-3">Cuban Cohiba</th>
                    <th className="text-left p-3 rounded-tr-lg">Dominican Cohiba (US)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    ['Strength', 'Medium to medium-full', 'Medium to full (by line)'],
                    ['Primary notes', 'Cream, cedar, light floral', 'Tobacco-forward, leather, dark chocolate (Black)'],
                    ['Finish', 'Smooth, lingering', 'Richer, spicier on the Black'],
                    ['Body', 'Well-rounded, elegant', 'Bolder overall'],
                    ['Price range', '$30 to $100+ (outside US)', '$12 to $30 in the US'],
                  ].map(([cat, cuban, dominican], i) => (
                    <tr key={cat} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-3 font-medium text-gray-900">{cat}</td>
                      <td className="p-3 text-gray-600">{cuban}</td>
                      <td className="p-3 text-gray-600">{dominican}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Legal question */}
        <section aria-label="US legal status of Cuban cigars" className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Can you buy Cuban Cohiba in the US?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              No. Cuban cigars remain under a US trade embargo. It is illegal to sell or import
              Cuban cigars for commercial purposes in the United States. After 2016 rule changes,
              US travelers can bring back up to $100 worth of Cuban goods (including cigars) for
              personal use. But buying, selling, or distributing them in the US is still illegal.
            </p>
            <p className="text-gray-600 leading-relaxed">
              If a shop is selling you "Cuban Cohiba" in the US, it is either counterfeit,
              illegally imported, or the Dominican version. Be skeptical of any deal that seems
              too good for a Cuban cigar.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section aria-label="App download call to action" className="py-16 px-4 bg-rose-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Search Cohiba in CigarsBase
            </h2>
            <p className="text-gray-600 mb-6">
              Both the Cuban and Dominican lines are in our 1,840-cigar database. See full ratings,
              vitolas, and tasting notes. Free download.
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
        <section aria-label="Related guides" className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Related Guides</h2>
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
