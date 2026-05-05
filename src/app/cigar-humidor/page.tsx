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

export default function CigarHumidorPage() {
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
              Cigar Humidor Guide
            </h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed">
              What a humidor is, how it works, the four types, and how to season one correctly.
              Covers the most common mistakes that dry out or mold cigars.
            </p>
          </div>
        </section>

        {/* What is a humidor */}
        <section aria-label="What is a cigar humidor" className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What Is a Humidor?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A humidor is a box or cabinet lined with Spanish cedar. Its job is to keep cigars at
              65 to 72% relative humidity (RH) and 65 to 70 degrees Fahrenheit. That range is where
              cigars rest, age, and remain smokable. Outside that range, things go wrong fast.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Too dry: the oils in the wrapper evaporate. The cigar cracks, burns hot, tastes harsh.
              A dry cigar can be ruined in a week without storage.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Too humid: mold grows on the wrapper. Tobacco beetles also lay eggs in the filler at
              high temperatures. At 77 degrees Fahrenheit or above, those eggs hatch and the beetles
              eat through the cigar from the inside.
            </p>
          </div>
        </section>

        {/* How humidity works */}
        <section aria-label="How humidity control works" className="py-16 px-4 bg-rose-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How Humidity Control Works</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Three components keep your humidor in range: a humidification device, a hygrometer,
              and the Spanish cedar lining itself.
            </p>
            <div className="space-y-5">
              <div className="bg-white rounded-xl p-5 border border-rose-100">
                <h3 className="font-bold text-gray-900 mb-2">Humidification device</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Releases moisture into the humidor. Options range from simple sponge trays to
                  polymer crystal jars to electronic units. The easiest modern option: Boveda packs.
                  They are two-way humidity packs that absorb or release moisture to maintain a set
                  level (69% or 72% are most common). Drop one in, replace every few months. No
                  refilling, no mess.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-rose-100">
                <h3 className="font-bold text-gray-900 mb-2">Hygrometer</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Measures the RH inside the humidor. Digital hygrometers are more accurate than
                  analog. Analog ones can drift by 10 to 15% and often ship uncalibrated. A $15
                  digital unit is more reliable than a $40 analog dial. Calibrate before use.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-rose-100">
                <h3 className="font-bold text-gray-900 mb-2">Spanish cedar lining</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  The interior wood of a quality humidor is Spanish cedar (Cedrela odorata). It
                  absorbs and releases humidity slowly, helping stabilize the environment. It also
                  repels tobacco beetles and adds a faint cedar note to the cigars over time. This
                  is the main reason humidors are not just any wood box.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Types */}
        <section aria-label="Types of humidors" className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Four Types of Humidors</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">Desktop (10 to 50 cigars)</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  The beginner pick. Sits on a desk or shelf. Usually $30 to $200. Good for
                  learning how to maintain humidity without a big commitment.
                </p>
                <p className="text-xs text-gray-400">Best for: new collectors, casual smokers</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">Cabinet (100 to 500+ cigars)</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  Freestanding furniture. $300 to $2,000 or more. Some use electronic humidity
                  control. Built for serious collectors who buy boxes and age long-term.
                </p>
                <p className="text-xs text-gray-400">Best for: dedicated collectors</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">Travel humidor (5 to 10 cigars)</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  Waterproof and crush-resistant. Fits 4 to 8 cigars. Holds humidity for a few
                  days. Use a small Boveda pack inside. Good for trips, golf rounds, and events.
                </p>
                <p className="text-xs text-gray-400">Best for: on-the-go smokers</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">Coolidor (100+ cigars, budget)</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  A large soft cooler lined with foam or Spanish cedar panels. Holds 100 or more
                  cigars for under $100 total. Popular on cigar forums. Works well. Seal is
                  often better than many desktop humidors.
                </p>
                <p className="text-xs text-gray-400">Best for: budget-conscious, high volume</p>
              </div>
            </div>
          </div>
        </section>

        {/* Seasoning */}
        <section aria-label="How to season a new humidor" className="py-16 px-4 bg-rose-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Season a New Humidor</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              A new humidor has dry wood. If you skip seasoning, the dry cedar pulls moisture from
              your cigars instead of maintaining it. Seasoning primes the wood so it stabilizes the
              environment correctly.
            </p>
            <ol className="space-y-6 list-none">
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-rose-800 text-white text-sm font-bold flex items-center justify-center">1</span>
                <div>
                  <p className="text-gray-700 font-medium mb-1">Wipe the inside with distilled water</p>
                  <p className="text-sm text-gray-600">Use a cloth lightly dampened with distilled water. Not soaking wet. Wipe all cedar surfaces once. Do not use tap water. Tap water contains minerals that leave deposits and can damage the wood.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-rose-800 text-white text-sm font-bold flex items-center justify-center">2</span>
                <div>
                  <p className="text-gray-700 font-medium mb-1">Place a Boveda 84% pack inside</p>
                  <p className="text-sm text-gray-600">Close the lid. Leave it for 14 days. The 84% pack pushes extra moisture into the wood to season it. Do not add cigars yet.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-rose-800 text-white text-sm font-bold flex items-center justify-center">3</span>
                <div>
                  <p className="text-gray-700 font-medium mb-1">Switch to a 69% or 72% pack</p>
                  <p className="text-sm text-gray-600">Remove the 84% pack. Add a 69% or 72% Boveda for ongoing maintenance. Wait 24 hours and confirm with your hygrometer before adding cigars.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* Ideal conditions and mistakes */}
        <section aria-label="Ideal conditions and common mistakes" className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Ideal Conditions</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The target range is 65 to 72% RH and 65 to 70 degrees Fahrenheit. A simple starting
              point is the "65/65 rule" — 65% humidity at 65 degrees. This is conservative and
              safe. Most cigar makers roll at 68 to 70%, so landing there is ideal.
            </p>
            <div className="bg-rose-50 rounded-xl p-6 border border-rose-100 mb-8">
              <h3 className="font-bold text-gray-900 mb-3">Tobacco beetle warning</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Tobacco beetle eggs can be present in any cigar. They hatch at 77 degrees or above.
                Once hatched, beetles tunnel through the filler and ruin the cigar completely.
                Keep your humidor below 73 degrees. If you buy new cigars and are unsure of their
                storage history, freeze them at 0 degrees Fahrenheit for 72 hours before adding
                to your humidor. Thaw slowly — move to fridge for 24 hours, then room temp.
              </p>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
            <ul className="space-y-4">
              {[
                { mistake: 'Using tap water', fix: 'Always use distilled water — no minerals, no deposits.' },
                { mistake: 'Skipping the seasoning step', fix: 'Unseasoned wood pulls moisture from cigars in the first weeks.' },
                { mistake: 'Overpacking', fix: 'Air needs to circulate. Leave 20% of the humidor empty.' },
                { mistake: 'Storing near a window', fix: 'Sunlight and temperature swings crack wrappers and cause mold.' },
                { mistake: 'Trusting the stock hygrometer', fix: 'Many desktop humidors ship with cheap, inaccurate analog gauges. Buy a digital one.' },
              ].map((item) => (
                <li key={item.mistake} className="flex gap-4 items-start">
                  <span className="text-rose-800 font-bold mt-0.5">X</span>
                  <div>
                    <p className="font-medium text-gray-900">{item.mistake}</p>
                    <p className="text-sm text-gray-600">{item.fix}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section aria-label="App download call to action" className="py-16 px-4 bg-rose-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Track your humidor inventory in CigarsBase
            </h2>
            <p className="text-gray-600 mb-6">
              Log what you own, when you bought it, and what you paid. 1,840 cigars in the database.
              Free download.
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
                { href: '/how-to-smoke-a-cigar', label: 'How to Smoke a Cigar' },
                { href: '/padron-cigars', label: 'Padron Cigars Guide' },
                { href: '/best-cigars-for-beginners', label: 'Best Cigars for Beginners' },
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
