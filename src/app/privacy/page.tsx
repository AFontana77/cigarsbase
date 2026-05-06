import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — CigarsBase',
  description: 'Privacy policy for the CigarsBase mobile application and cigarsbase.com website.',
};

const headingStyle: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  color: 'oklch(0.93 0.015 10)',
};

const bodyStyle: React.CSSProperties = {
  color: 'oklch(0.68 0.015 10)',
};

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p style={{ color: 'oklch(0.45 0.012 10)' }} className="text-sm mb-10">
              Last updated: April 17, 2026
            </p>

            <h2 style={headingStyle} className="text-xl font-semibold mt-10 mb-3">
              1. Who We Are
            </h2>
            <p style={bodyStyle} className="leading-relaxed mb-4">
              Anvil Road LLC operates cigarsbase.com and the CigarsBase mobile application. Contact:{' '}
              <a href="mailto:support@cigarsbase.com" style={{ color: 'oklch(0.78 0.10 70)' }} className="hover:underline">
                support@cigarsbase.com
              </a>
            </p>

            <h2 style={headingStyle} className="text-xl font-semibold mt-10 mb-3">
              2. Information We Collect
            </h2>
            <p style={bodyStyle} className="mb-3">We collect the minimum data needed to operate the app:</p>
            <ul style={bodyStyle} className="list-disc pl-6 mb-4 space-y-2">
              <li><strong style={{ color: 'oklch(0.93 0.015 10)' }}>Cigar smoke logs you create.</strong> Stored locally on your device only. This data is never uploaded to any server.</li>
              <li><strong style={{ color: 'oklch(0.93 0.015 10)' }}>Purchase data.</strong> When you unlock the full app, RevenueCat receives a transaction ID and device identifier to verify and restore your purchase. We do not receive your payment details.</li>
            </ul>

            <h2 style={headingStyle} className="text-xl font-semibold mt-10 mb-3">
              3. How We Use Your Information
            </h2>
            <ul style={bodyStyle} className="list-disc pl-6 mb-4 space-y-1">
              <li>To operate the app and display your logged smokes</li>
              <li>To restore your purchase on new devices</li>
              <li>To respond to support requests</li>
            </ul>
            <p style={bodyStyle} className="mb-4">We do not use your data for advertising. We do not sell your data to any third party.</p>

            <h2 style={headingStyle} className="text-xl font-semibold mt-10 mb-3">
              4. Third-Party Services
            </h2>
            <ul style={bodyStyle} className="list-disc pl-6 mb-4 space-y-1">
              <li><strong style={{ color: 'oklch(0.93 0.015 10)' }}>RevenueCat.</strong> In-app purchase management. They receive device identifiers and transaction data to process and restore purchases.</li>
              <li><strong style={{ color: 'oklch(0.93 0.015 10)' }}>Apple App Store / Google Play.</strong> App distribution and payment processing.</li>
            </ul>

            <h2 style={headingStyle} className="text-xl font-semibold mt-10 mb-3">
              5. Data Deletion
            </h2>
            <p style={bodyStyle} className="leading-relaxed mb-4">
              Your data is stored only on your device. It is permanently deleted when you uninstall the app.
              We do not store any of your logged data on our servers.
            </p>

            <h2 style={headingStyle} className="text-xl font-semibold mt-10 mb-3">
              6. Children
            </h2>
            <p style={bodyStyle} className="leading-relaxed mb-4">
              This app is not directed at children under 13. We do not knowingly collect personal information from children under 13.
            </p>

            <h2 style={headingStyle} className="text-xl font-semibold mt-10 mb-3">
              7. Changes to This Policy
            </h2>
            <p style={bodyStyle} className="leading-relaxed mb-4">
              We may update this policy. We will post the revised policy at this URL with a new last updated date.
              Continued use of the app after changes constitutes acceptance of the updated policy.
            </p>

            <h2 style={headingStyle} className="text-xl font-semibold mt-10 mb-3">
              8. Contact
            </h2>
            <p style={bodyStyle} className="leading-relaxed">
              Questions about this policy? Email{' '}
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
