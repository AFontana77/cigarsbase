import Link from 'next/link';
import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Database, BookOpen, BarChart3, Star, ArrowRight, Download, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "CigarsBase — Search 1,840 cigars from Cigar Aficionado and Halfwheel",
  description: "CigarsBase has 1,840 cigars curated from Cigar Aficionado and Halfwheel with ratings, vitolas, wrappers, and tasting notes. Log your smokes, track your humidor, and build a personal collection.",
};

const FEATURES = [
  { icon: Database, title: "Cigar database", body: "1,840+ cigars with vitola, wrapper, strength, and tasting notes." },
  { icon: BookOpen, title: "Smoke log", body: "Log brand, vitola, date, occasion, pairing, and rating. Add your own notes." },
  { icon: BarChart3, title: "Humidor tracker", body: "Track your humidor inventory — what you have, what you paid, what to age." },
  { icon: Star, title: "Collection database", body: "Your personal list of smokes and ratings, separate from the main database." },
];

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Hero */}
        <section className="py-20 px-4" style={{ backgroundColor: '#FFF1F2' }}>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-rose-800 bg-rose-50 px-3 py-1 rounded-full mb-6">
              Search 1,840 cigars. Log your own.
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Search 1,840 cigars from Cigar Aficionado and Halfwheel.
              <br />
              <span className="text-rose-900">Log your smokes.</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              CigarsBase is a curated cigar database and personal smoke log. Search any cigar by brand, vitola, wrapper, or strength. Find ratings, tasting notes, and country of origin. Log your own smokes with notes, ratings, and occasion. Build a collection database that's actually yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/library" className="inline-flex items-center justify-center gap-2 bg-rose-800 text-white font-semibold px-8 py-3 rounded-xl hover:bg-rose-900 transition-colors press-feedback min-h-[48px]">
                Browse the CigarsBase Library <ArrowRight size={18} />
              </Link>
              <Link href="/free-download" className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 font-medium px-8 py-3 rounded-xl hover:bg-gray-50 transition-colors min-h-[48px]">
                <Download size={18} /> Free Download
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Free app. No credit card. 1,840 cigars from Cigar Aficionado + Halfwheel.
            </p>
          </div>
        </section>

        {/* Database pitch */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              The database IS the app.
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Most log apps give you a blank screen. CigarsBase gives you 1,840 cigars from Cigar Aficionado + Halfwheel — searchable, organized, and ready to use. Log what you do. Build your personal collection alongside the reference library.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              {FEATURES.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-4 p-5 rounded-xl bg-gray-50 card-hover">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-rose-50 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-rose-800" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 px-4 bg-rose-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Get the free download first.
            </h2>
            <p className="text-gray-600 mb-6">
              Start with the printable reference sheet. Use it today, no app required. When you want the searchable database and log, get the app free.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/free-download" className="inline-flex items-center justify-center gap-2 bg-rose-800 text-white font-semibold px-8 py-3 rounded-xl hover:bg-rose-900 transition-colors press-feedback min-h-[48px]">
                <Download size={18} /> Get the Free PDF
              </Link>
              <Link href="/library" className="inline-flex items-center justify-center gap-2 border border-rose-200 text-rose-900 font-medium px-8 py-3 rounded-xl hover:bg-rose-50 transition-colors min-h-[48px]">
                Browse the Library
              </Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
