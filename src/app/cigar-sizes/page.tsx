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

export default function CigarSizesPage() {
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
              Cigar Sizes and Shapes
            </h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed">
              Size changes the smoke. The same blend in a Robusto tastes different from that
              blend in a Churchill. This guide explains why, walks through every common vitola,
              and tells you which size to pick for the time and experience you have.
            </p>
          </div>
        </section>

        {/* Vitola explained */}
        <section aria-label="What vitola means" className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why the Same Cigar Tastes Different in a Different Size</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Vitola is the Spanish term for a specific cigar size and shape. Every cigar has a
              vitola defined by two measurements: ring gauge (diameter) and length in inches.
              The same blend rolled in a different vitola will taste different. The shape changes
              how it draws and burns.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              There are two main categories: parejos and figurados.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">Parejos</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Straight-sided cigars with an open foot (the end you light) and a closed, rounded
                  head (the end you cut and draw from). This is the standard cigar shape. Robusto,
                  Toro, Churchill, and Corona are all parejos.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">Figurados</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Irregular shapes. Includes torpedos (tapered head), belicosos (smaller tapered
                  head), and perfectos (tapered at both ends). These require more skill to roll
                  and sometimes more care when cutting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ring gauge explained */}
        <section aria-label="Ring gauge explained" className="py-16 px-4 bg-rose-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Ring Gauge: The Number That Controls Your Draw and Your Nicotine</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Ring gauge measures a cigar's diameter in 64ths of an inch. A 50 ring gauge cigar
              is 50/64 of an inch in diameter, or about 0.78 inches. That is roughly the diameter
              of a US nickel.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-xl p-4 border border-rose-100 text-center">
                <p className="text-2xl font-bold text-rose-800 mb-1">38-42</p>
                <p className="text-sm text-gray-600">Thin: lighter, cooler, more delicate flavors</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-rose-100 text-center">
                <p className="text-2xl font-bold text-rose-800 mb-1">46-52</p>
                <p className="text-sm text-gray-600">Standard: the most popular range, balanced draw</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-rose-100 text-center">
                <p className="text-2xl font-bold text-rose-800 mb-1">60+</p>
                <p className="text-sm text-gray-600">Wide: more filler, slower burn, more nicotine</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              A wider ring means more filler tobacco touching your palate at once. The burn is
              slower and cooler. Many smokers find the flavors more complex. But wider cigars
              also deliver more nicotine per draw. Beginners should avoid 60+ ring until they
              know how they handle nicotine.
            </p>
          </div>
        </section>

        {/* Length effect */}
        <section aria-label="How cigar length affects the smoke" className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Longer Cigars Burn Cooler. Here Is Why That Matters.</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Length has two effects. First, a longer cigar is cooler. The greater distance from
              the burning foot to your mouth allows the smoke to cool down before it reaches you.
              Longer cigars generally burn smoother in the first half.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Second, nicotine and tars concentrate toward the burning end over time. In the final
              two inches of any cigar, the smoke is hotter and stronger. In a longer cigar, this
              happens gradually. In a short petite corona, it happens quickly. When the smoke
              starts tasting hotter and harsher, that is your cue to stop.
            </p>
          </div>
        </section>

        {/* Vitola chart */}
        <section aria-label="Complete vitola reference chart" className="py-16 px-4 bg-rose-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Every Common Vitola — Size, Time, and What to Expect</h2>
            <div className="overflow-x-auto rounded-xl border border-rose-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-rose-800 text-white">
                    <th className="text-left p-3">Vitola</th>
                    <th className="text-left p-3">Ring</th>
                    <th className="text-left p-3">Length</th>
                    <th className="text-left p-3">Time</th>
                    <th className="text-left p-3 hidden sm:table-cell">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {VITOLAS.map((v, i) => (
                    <tr key={v.name} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-3 font-medium text-gray-900">{v.name}</td>
                      <td className="p-3 text-gray-600">{v.rg}</td>
                      <td className="p-3 text-gray-600">{v.length}</td>
                      <td className="p-3 text-gray-600">{v.time}</td>
                      <td className="p-3 text-gray-500 hidden sm:table-cell">{v.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Figurados */}
        <section aria-label="Figurado shapes explained" className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Figurado Shapes: When the Cut and the Draw Require More Attention</h2>
            <div className="space-y-5">
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">Torpedo</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  The head tapers to a point. Requires a careful guillotine cut — cut too deep and
                  you lose too much of the taper, making the draw too open. Many torpedo fans prefer
                  a punch cutter. The tapered head focuses the draw and intensifies flavors.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">Belicoso</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Similar to the torpedo but with a smaller, shorter taper. The taper starts closer
                  to the head. Some people confuse belicosos and torpedos. The belicoso head is
                  more blunt and easier to cut. Robusto-length belicosos are a common format.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">Perfecto</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Tapered at both ends. The foot is pinched closed, so it does not light as
                  easily as a parejo. You need to toast the foot longer. The draw can be tight.
                  Complex construction. Most blenders use a perfecto as a showcase of rolling skill.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Beginner rec */}
        <section aria-label="Beginner size recommendation" className="py-12 px-4 bg-rose-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Size That Fits Almost Every Session</h2>
            <div className="bg-white rounded-xl p-6 border border-rose-100">
              <p className="text-gray-700 leading-relaxed">
                Start with a <strong>Robusto (50 x 5")</strong>. It is 45 to 60 minutes, widely
                available in every brand, and the most common size in the CigarsBase database.
                The 50 ring is wide enough for good flavor complexity but not so wide that it
                delivers overwhelming nicotine. Once you know a Robusto well, moving up to a
                Toro or down to a Corona is an easy next step.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section aria-label="App download call to action" className="py-16 px-4 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Match the Right Size to Every Session You Have
            </h2>
            <p className="text-gray-600 mb-6">
              Log each smoke in CigarsBase with the vitola. Over time you will see which sizes
              you reach for on a 45-minute lunch break versus a two-hour evening outside. That
              pattern tells you exactly what to keep stocked in your humidor. All 1,840 cigars
              include the full vitola. Free, no subscription.
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
                { href: '/types-of-cigars', label: 'Types of Cigars' },
                { href: '/how-to-smoke-a-cigar', label: 'How to Smoke a Cigar' },
                { href: '/best-cigars-for-beginners', label: 'Best Cigars for Beginners' },
                { href: '/padron-cigars', label: 'Padron Cigars Guide' },
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
