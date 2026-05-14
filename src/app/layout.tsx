import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Mulish } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const bodoniModa = Bodoni_Moda({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const mulish = Mulish({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://www.cigarsbase.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CigarsBase — Search 1,840+ cigars from Cigar Aficionado and Halfwheel",
    template: "%s | CigarsBase",
  },
  description: "CigarsBase has 1,840+ cigars curated from Cigar Aficionado and Halfwheel with ratings, vitolas, wrappers, and tasting notes. Log your smokes, track your humidor, and build a personal collection.",
  keywords: ["cigar log app", "cigar tracker", "humidor app", "cigar journal", "cigar rating app"],
  authors: [{ name: "Anvil Road LLC" }],
  creator: "Anvil Road LLC",
  publisher: "Anvil Road LLC",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "CigarsBase",
    title: "CigarsBase — Search 1,840+ cigars from Cigar Aficionado and Halfwheel",
    description: "CigarsBase has 1,840+ cigars curated from Cigar Aficionado and Halfwheel with ratings, vitolas, wrappers, and tasting notes. Log your smokes, track your humidor, and build a personal collection.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "CigarsBase" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CigarsBase — Search 1,840+ cigars from Cigar Aficionado and Halfwheel",
    description: "CigarsBase has 1,840+ cigars curated from Cigar Aficionado and Halfwheel with ratings, vitolas, wrappers, and tasting notes. Log your smokes, track your humidor, and build a personal collection.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: SITE_URL },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/icons/icon-192.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#9F1239",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bodoniModa.variable} ${mulish.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-body">
        {/* Google Tag Manager - GTM-NVJJ4WLF */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NVJJ4WLF');`}
        </Script>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NVJJ4WLF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>{children}</body>
    </html>
  );
}
