import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { EmailCaptureForm } from '@/components/EmailCaptureForm';
import { Download, CheckCircle, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Free Cigar Tasting Notes Template",
  description: "A printable tasting card — brand, vitola, wrapper, draw, burn, ash, and flavor notes for each smoke. Free printable from Cedro — no signup required.",
};

export default function FreeDownloadPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">
        <section className="py-20 px-4" style={{ backgroundColor: '#FFF1F2' }}>
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex w-16 h-16 bg-rose-50 rounded-2xl items-center justify-center mb-6">
              <Download className="text-rose-800" size={28} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Free Cigar Tasting Notes Template
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              A printable tasting card — brand, vitola, wrapper, draw, burn, ash, and flavor notes for each smoke.
            </p>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-left mb-6">
              <h2 className="font-bold text-gray-900 text-lg mb-4">What is inside</h2>
              <ul className="space-y-3">
                            <li key="Brand, vitola, and country of origin fields" className="flex items-start gap-3 text-gray-600 text-sm"><CheckCircle size={16} className="text-rose-800 mt-0.5 shrink-0" /> Brand, vitola, and country of origin fields</li>
            <li key="Wrapper color and type" className="flex items-start gap-3 text-gray-600 text-sm"><CheckCircle size={16} className="text-rose-800 mt-0.5 shrink-0" /> Wrapper color and type</li>
            <li key="Draw, burn, and ash observations" className="flex items-start gap-3 text-gray-600 text-sm"><CheckCircle size={16} className="text-rose-800 mt-0.5 shrink-0" /> Draw, burn, and ash observations</li>
            <li key="Flavor notes in thirds" className="flex items-start gap-3 text-gray-600 text-sm"><CheckCircle size={16} className="text-rose-800 mt-0.5 shrink-0" /> Flavor notes in thirds</li>
            <li key="Finish rating and overall score" className="flex items-start gap-3 text-gray-600 text-sm"><CheckCircle size={16} className="text-rose-800 mt-0.5 shrink-0" /> Finish rating and overall score</li>
              </ul>
            </div>
            <div className="bg-rose-50 border border-rose-100 rounded-2xl p-8">
              <h2 className="font-bold text-gray-900 text-xl mb-2">Get your free copy</h2>
              <p className="text-gray-500 text-sm mb-6">Enter your email and we will send it right to your inbox.</p>
              <EmailCaptureForm buttonLabel="Send Me the Free PDF" />
              <p className="text-xs text-gray-400 mt-4 text-center">No spam. Unsubscribe any time.</p>
            </div>
          </div>
        </section>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Want the searchable database?</h2>
            <p className="text-gray-500 mb-6">The free PDF covers the basics. The Cedro app gives you the full searchable library and your personal log — free on iPhone and Android.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors min-h-[48px]">
                Get on App Store <ArrowRight size={18} />
              </a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors min-h-[48px]">
                Get on Google Play <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
