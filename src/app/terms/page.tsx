import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — CigarsBase',
  description: 'Terms of service for the CigarsBase mobile application and cigarsbase.com website.',
};

const headingStyle: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  color: 'oklch(0.93 0.015 10)',
};

const bodyStyle: React.CSSProperties = {
  color: 'oklch(0.68 0.015 10)',
};

export default function TermsPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">
        <section className="pt-24 pb-20 px-6" style={{ background: 'oklch(0.10 0.015 10)' }}>
          <div className="max-w-3xl mx-auto">
            <span
              style={{ color: 'oklch(0.78 0.10 70)', fontFamily: 'var(--font-body)' }}
              className="block text-xs font-semibold uppercase tracking-[0.2em] mb-6"
            >
              Legal
            </span>
            <h1 style={headingStyle} className="text-4xl sm:text-5xl font-bold leading-tight mb-2">
              Terms of Service
            </h1>
            <p style={{ color: 'oklch(0.45 0.012 10)' }} className="text-sm mb-10">
              Last updated: April 18, 2026
            </p>

            <p style={bodyStyle} className="leading-relaxed mb-6">
              These Terms of Service govern your use of the CigarsBase cigar collection and smoking log app and the website at cigarsbase.com. By downloading the app or using the website, you agree to these terms. If you do not agree, do not use the service.
            </p>

            <h2 style={headingStyle} className="text-xl font-semibold mt-10 mb-3">1. Who We Are</h2>
            <p style={bodyStyle} className="leading-relaxed mb-4">
              Anvil Road LLC operates cigarsbase.com and the CigarsBase mobile application. Contact:{' '}
              <a href="mailto:support@cigarsbase.com" style={{ color: 'oklch(0.78 0.10 70)' }} className="hover:underline">
                support@cigarsbase.com
              </a>
            </p>

            <h2 style={headingStyle} className="text-xl font-semibold mt-10 mb-3">2. Use of the Service</h2>
            <p style={bodyStyle} className="leading-relaxed mb-4">
              CigarsBase is a personal cigar collection and smoking log app. You may use the service for personal, non-commercial purposes only. You agree not to misuse the service, reverse-engineer the app, or use it in any way that violates applicable law.
            </p>
            <p style={bodyStyle} className="leading-relaxed mb-4">
              You are responsible for all data you enter into the app. We do not verify the accuracy of your logged entries.
            </p>

            <h2 style={headingStyle} className="text-xl font-semibold mt-10 mb-3">3. User Accounts</h2>
            <p style={bodyStyle} className="leading-relaxed mb-4">
              Creating an account is optional. If you create an account, you are responsible for keeping your credentials secure. You may delete your account at any time from the app settings.
            </p>

            <h2 style={headingStyle} className="text-xl font-semibold mt-10 mb-3">4. In-App Purchases</h2>
            <p style={bodyStyle} className="leading-relaxed mb-4">
              CigarsBase offers a one-time in-app purchase ($6.99 USD) to unlock the full database and premium logging features. Purchases are processed by Apple App Store or Google Play and are subject to their respective refund policies. We do not process payment information directly.
            </p>
            <p style={bodyStyle} className="leading-relaxed mb-4">
              Purchases are tied to your App Store or Google Play account and can be restored on new devices using the restore purchases option in settings.
            </p>

            <h2 style={headingStyle} className="text-xl font-semibold mt-10 mb-3">5. Intellectual Property</h2>
            <p style={bodyStyle} className="leading-relaxed mb-4">
              All content, design, code, and database records in the CigarsBase app and website are owned by Anvil Road LLC or licensed to us. You may not copy, reproduce, or redistribute any part of the service without written permission.
            </p>
            <p style={bodyStyle} className="leading-relaxed mb-4">
              Data you create in the app (your personal log entries) remains yours. We do not claim ownership of your personal records.
            </p>

            <h2 style={headingStyle} className="text-xl font-semibold mt-10 mb-3">Health and Safety Notice</h2>
            <p style={bodyStyle} className="leading-relaxed mb-4">
              CigarsBase is intended for adult users only (18+). Use of tobacco products carries significant health risks. This app is a reference and logging tool only.
            </p>

            <h2 style={headingStyle} className="text-xl font-semibold mt-10 mb-3">6. Limitation of Liability</h2>
            <p style={bodyStyle} className="leading-relaxed mb-4">
              CigarsBase is provided &quot;as is&quot; without warranties of any kind. Anvil Road LLC is not liable for any damages arising from use of the app, including data loss, inaccurate reference information, or service interruptions. Our total liability to you is limited to the amount you paid for any in-app purchase.
            </p>

            <h2 style={headingStyle} className="text-xl font-semibold mt-10 mb-3">7. Changes to These Terms</h2>
            <p style={bodyStyle} className="leading-relaxed mb-4">
              We may update these terms from time to time. We will post the revised terms at this URL with a new last updated date. Continued use of the service after changes constitutes your acceptance of the updated terms.
            </p>

            <h2 style={headingStyle} className="text-xl font-semibold mt-10 mb-3">8. Governing Law</h2>
            <p style={bodyStyle} className="leading-relaxed mb-4">
              These terms are governed by the laws of the State of New Jersey, United States, without regard to conflict of law principles. Any disputes must be brought in the courts of New Jersey.
            </p>

            <h2 style={headingStyle} className="text-xl font-semibold mt-10 mb-3">9. Contact</h2>
            <p style={bodyStyle} className="leading-relaxed">
              Questions about these terms? Email{' '}
              <a href="mailto:support@cigarsbase.com" style={{ color: 'oklch(0.78 0.10 70)' }} className="hover:underline">
                support@cigarsbase.com
              </a>.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
