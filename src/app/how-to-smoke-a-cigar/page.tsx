import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Smoke a Cigar — Step-by-Step Guide for Beginners | CigarsBase',
  description:
    'Learn how to cut, toast, and light a cigar the right way. Answers the most common beginner questions: do you inhale, how long does it take, and how to avoid getting sick.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'How to Smoke a Cigar — Step-by-Step Guide for Beginners',
      description:
        'Learn how to cut, toast, and light a cigar the right way. Answers the most common beginner questions.',
      url: 'https://www.cigarsbase.com/how-to-smoke-a-cigar',
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
          name: 'How to Smoke a Cigar',
          item: 'https://www.cigarsbase.com/how-to-smoke-a-cigar',
        },
      ],
    },
  ],
};

export default function HowToSmokeACigarPage() {
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
              How to Smoke a Cigar
            </h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed">
              Most first-time cigar smokers either inhale by mistake, light it wrong, or pace too
              fast and get sick. None of that is the cigar's fault. This guide walks through every
              step so your first smoke goes the way it should.
            </p>
          </div>
        </section>

        {/* Step-by-step */}
        <section aria-label="Step-by-step process" className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Seven Steps to a Smoke That Actually Goes Well</h2>

            <ol className="space-y-10 list-none">
              <li>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-800 text-white text-sm font-bold flex items-center justify-center">1</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Pick your cigar</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Start with a mild or medium cigar. A Connecticut shade wrapper is the easiest
                      choice. Look for a Robusto (50 ring, 5 inches) — it takes about 45 to 60 minutes
                      and is easy to find. Avoid full-bodied Nicaraguan puros until you know how your body handles nicotine.
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-800 text-white text-sm font-bold flex items-center justify-center">2</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Cut the head</h3>
                    <p className="text-gray-600 leading-relaxed">
                      The closed end (the head) needs a cut before you can draw. There are three main
                      cutters:
                    </p>
                    <ul className="mt-3 space-y-2 text-gray-600">
                      <li><strong>Guillotine (straight cut):</strong> The most common. Clean, simple, works on all shapes. Cut just above the shoulder, about 1/8 inch from the top.</li>
                      <li><strong>Punch:</strong> Drills a small hole. Preserves the cap, good for parejos (straight cigars). Less mess, slightly more restricted draw.</li>
                      <li><strong>V-cut:</strong> A wedge shape. Focused draw, works well on torpedos and belicosos with a tapered head.</li>
                    </ul>
                    <p className="mt-3 text-gray-600">
                      For your first cigar, use a guillotine. Cut quickly and firmly. A slow cut tears the wrapper.
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-800 text-white text-sm font-bold flex items-center justify-center">3</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Toast the foot</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Hold the open end (the foot) near the flame but not in it. Rotate the cigar
                      slowly so the outer ring begins to glow. This pre-heats the tobacco so it
                      lights evenly. You should see a small ring of orange or red. This takes about
                      10 to 15 seconds. Do not rush this step.
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-800 text-white text-sm font-bold flex items-center justify-center">4</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Light it</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Bring the flame close to the foot and draw slowly. The flame should touch the
                      tobacco, not the wrapper. Take two or three slow puffs while rotating the
                      cigar. Check the burn: the whole foot should be lit, not just one side.
                      If one side is running ahead, use the flame to even it out.
                    </p>
                    <p className="mt-3 text-gray-600">
                      Use a butane lighter. Matches work too, but let the sulfur burn off for
                      3 to 5 seconds before putting the flame near the tobacco. Avoid Zippo lighters
                      and scented candles. The fuel taste transfers.
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-800 text-white text-sm font-bold flex items-center justify-center">5</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Draw into your mouth</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Pull the smoke into your mouth. Hold it for a second. Let the flavors coat
                      your palate. Then release. Do not inhale into your lungs. This is a key point.
                      Cigars are tasted, not inhaled. The nicotine absorbs through the mucous
                      membranes in your mouth. Inhaling causes nausea.
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-800 text-white text-sm font-bold flex items-center justify-center">6</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Pace yourself</h3>
                    <p className="text-gray-600 leading-relaxed">
                      One puff per minute is a good rule of thumb. Faster than that and the cigar
                      runs hot, which turns the smoke harsh and bitter. Let the ash build. A long
                      ash actually insulates the burn and keeps it cool. Let it fall naturally
                      rather than tapping it off every few minutes.
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-800 text-white text-sm font-bold flex items-center justify-center">7</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Know when to stop</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Stop smoking when the cigar is about 2 inches from the band or when the heat
                      increases noticeably. The final third concentrates tars and oils, which makes
                      the smoke hotter and harsher. Set it down and let it go out on its own.
                      Do not stub it out like a cigarette. The smell is strong.
                    </p>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* Equipment */}
        <section aria-label="Equipment guide" className="py-16 px-4 bg-rose-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">The Right Tools Mean No Wasted Cigars</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-rose-100">
                <h3 className="font-bold text-gray-900 mb-3">Cutter</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  A double-blade guillotine is the safest choice for beginners. Good ones cost
                  $10 to $20. Cheap single-blade cutters tend to crush the cap. Spend a little
                  more for a clean cut.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-rose-100">
                <h3 className="font-bold text-gray-900 mb-3">Lighter</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  A butane torch lighter is best. No flavor transfer. Jet flames also work outdoors
                  in the wind. Cedar spills (thin strips of Spanish cedar) are the traditional
                  approach. They give a subtle cedar aroma to the first puffs.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-rose-100">
                <h3 className="font-bold text-gray-900 mb-3">Ashtray</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Any wide-lipped ashtray works. Cigar ashtrays have deep notches to hold the cigar
                  without it rolling off. Not strictly needed but helpful.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-rose-100">
                <h3 className="font-bold text-gray-900 mb-3">Storage</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  If you are not smoking the cigar right away, store it at 65 to 72% humidity.
                  A Boveda pack in a sealed Ziploc bag works short-term. A proper humidor is
                  the right long-term answer. Learn more on the{' '}
                  <Link href="/cigar-humidor" className="text-rose-800 underline hover:text-rose-700">humidor page</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section aria-label="Frequently asked questions" className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions Most First-Timers Ask Before They Ask Anyone</h2>
            <div className="space-y-8">

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Do you inhale a cigar?</h3>
                <p className="text-gray-600 leading-relaxed">
                  No. Draw the smoke into your mouth, taste it, and release. Cigars are not smoked
                  like cigarettes. The nicotine absorbs through the lining of your mouth and throat.
                  You do not need to inhale to feel the effect. Inhaling even once usually causes
                  immediate nausea and a strong headache.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Can you inhale cigars?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Technically yes, but you should not. Cigar tobacco is not designed for inhalation.
                  The smoke is much denser and contains more nicotine than cigarette smoke. Even
                  experienced smokers who inhale do so only partially. The result is usually
                  coughing, dizziness, or vomiting. Keep the smoke in your mouth only.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">How long does a cigar take?</h3>
                <p className="text-gray-600 leading-relaxed">
                  It depends on the vitola (size and shape). General estimates:
                </p>
                <ul className="mt-3 space-y-1 text-gray-600">
                  <li><strong>Robusto (50 x 5"):</strong> 45 to 60 minutes</li>
                  <li><strong>Toro (50 x 6"):</strong> 60 to 90 minutes</li>
                  <li><strong>Churchill (47 x 7"):</strong> 90 to 120 minutes</li>
                  <li><strong>Petite Corona (42 x 4"):</strong> 25 to 35 minutes</li>
                </ul>
                <p className="mt-3 text-gray-600">
                  These times assume one puff per minute. Faster pacing shortens the time but
                  makes the smoke hotter and harsher.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Why did my cigar make me sick?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Three reasons cause this most often. First, an empty stomach. Nicotine hits much
                  harder without food in your system. Always eat before you smoke. Second, smoking
                  too fast. Fast puffing raises the heat and delivers nicotine faster. Stay at one
                  puff per minute. Third, inhaling. Even one or two accidental inhales can cause
                  nausea. Keep the smoke in your mouth only.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">What is the proper way to hold a cigar?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Hold the cigar between your index finger and middle finger, resting it in the V
                  between them. This gives you control without pinching the cigar, which can
                  restrict the draw. Avoid holding it between your thumb and index finger like a
                  pencil. That is a cigarette grip and restricts airflow.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section aria-label="App download call to action" className="py-16 px-4 bg-rose-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Build a Flavor Map, Not Just a Memory
            </h2>
            <p className="text-gray-600 mb-6">
              Log your first five smokes in CigarsBase. Note the draw, burn, and what you tasted.
              After a handful of entries you will know which wrappers and strengths you return to
              and which you skip. That is how you stop buying cigars you only half-enjoy.
              1,840 cigars in the database. Free, no subscription.
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
                { href: '/best-cigars-for-beginners', label: 'Best Cigars for Beginners' },
                { href: '/cigar-sizes', label: 'Cigar Sizes and Shapes' },
                { href: '/cigar-humidor', label: 'Cigar Humidor Guide' },
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
