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
            <ul style={bodyStyle} className="list-disc pl-6 mb-4 space-y-1">
              <li><strong style={{ color: 'oklch(0.93 0.015 10)' }}>Account email address.</strong> Optional, for cross-device sync only.</li>
              <li><strong style={{ color: 'oklch(0.93 0.015 10)' }}>Cigar smoke logs you create.</strong> Stored locally on your device and, if you have an account, in our secure cloud database (Supabase).</li>
              <li><strong style={{ color: 'oklch(0.93 0.015 10)' }}>Purchase confirmation.</strong> Via RevenueCat when you unlock premium features. We do not receive your payment details.</li>
              <li><strong style={{ color: 'oklch(0.93 0.015 10)' }}>Device identifiers.</strong> Used by RevenueCat to associate your purchase with your device.</li>
            </ul>

            <h2 style={headingStyle} className="text-xl font-semibold mt-10 mb-3">
              3. How We Use Your Information
            </h2>
            <ul style={bodyStyle} className="list-disc pl-6 mb-4 space-y-1">
              <li>To operate the app and sync your data across devices (if you have an account)</li>
              <li>To restore your purchase on new devices</li>
              <li>To respond to support requests</li>
            </ul>
            <p style={bodyStyle} className="mb-4">We do not use your data for advertising. We do not sell your data to any third party.</p>

            <h2 style={headingStyle} className="text-xl font-semibold mt-10 mb-3">
              4. Third-Party Services
            </h2>
            <ul style={bodyStyle} className="list-disc pl-6 mb-4 space-y-1">
              <li><strong style={{ color: 'oklch(0.93 0.015 10)' }}>Supabase.</strong> Secure cloud database for optional account sync. Hosted on AWS US-East.</li>
              <li><strong style={{ color: 'oklch(0.93 0.015 10)' }}>RevenueCat.</strong> In-app purchase management and subscription tracking.</li>
              <li><strong style={{ color: 'oklch(0.93 0.015 10)' }}>Apple App Store / Google Play.</strong> App distribution and payment processing.</li>
            </ul>

            <h2 style={headingStyle} className="text-xl font-semibold mt-10 mb-3">
              5. Data Deletion
            </h2>
            <p style={bodyStyle} className="leading-relaxed mb-4">
              You may delete your account and all associated cloud data at any time from the app settings. We will delete your data within 30 days of the request. Local device data is deleted when you uninstall the app.
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
              We may update this policy. We will post the revised policy at this URL with a new last updated date. Continued use of the app after changes constitutes acceptance of the updated policy.
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
