import type { MetadataRoute } from 'next';

const BASE = 'https://www.cigarsbase.com';
const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/library`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/free-download`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    // SEO content pages
    { url: `${BASE}/cohiba-cigars`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/cigar-humidor`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/how-to-smoke-a-cigar`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/padron-cigars`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/cigar-sizes`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/types-of-cigars`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/best-cigars-for-beginners`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ];
}
