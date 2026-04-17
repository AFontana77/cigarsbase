import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });

const SITE_URL = "https://www.cigarsbase.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cedro — Search 73 cigars from Cigar Aficionado and Halfwheel",
    template: "%s | Cedro",
  },
  description: "Cedro has 73 cigars curated from Cigar Aficionado and Halfwheel with ratings, vitolas, wrappers, and tasting notes. Log your smokes, track your humidor, and build a personal collection.",
  keywords: ["cigar log app", "cigar tracker", "humidor app", "cigar journal", "cigar rating app"],
  authors: [{ name: "Anvil Road LLC" }],
  creator: "Anvil Road LLC",
  publisher: "Anvil Road LLC",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Cedro",
    title: "Cedro — Search 73 cigars from Cigar Aficionado and Halfwheel",
    description: "Cedro has 73 cigars curated from Cigar Aficionado and Halfwheel with ratings, vitolas, wrappers, and tasting notes. Log your smokes, track your humidor, and build a personal collection.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Cedro" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cedro — Search 73 cigars from Cigar Aficionado and Halfwheel",
    description: "Cedro has 73 cigars curated from Cigar Aficionado and Halfwheel with ratings, vitolas, wrappers, and tasting notes. Log your smokes, track your humidor, and build a personal collection.",
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
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
