import { CITIES, getTier1And2Cities } from '@/data/cities';
import { SERVICES } from '@/data/services';
import { absoluteUrl, cityPath, servicePath, pricingPath, faqPath } from './urls';
import { SITEMAP_MAX_URLS } from './constants';

export type SitemapUrl = {
  url: string;
  lastModified: Date;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
};

/**
 * Generate all URLs for sitemaps
 */
export function generateAllUrls(): SitemapUrl[] {
  const urls: SitemapUrl[] = [];
  const now = new Date();

  // Homepage
  urls.push({
    url: absoluteUrl('/'),
    lastModified: now,
    changeFrequency: 'daily',
    priority: 1.0,
  });

  // Saudi hub
  urls.push({
    url: absoluteUrl('/saudi'),
    lastModified: now,
    changeFrequency: 'daily',
    priority: 0.9,
  });

  // Static pages
  urls.push(
    {
      url: absoluteUrl('/services'),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: absoluteUrl('/providers'),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: absoluteUrl('/coverage'),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    }
  );

  // City hubs (Tier 1 & 2)
  const tier1And2 = getTier1And2Cities();
  tier1And2.forEach((city) => {
    urls.push({
      url: absoluteUrl(cityPath(city.slug)),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: city.tier === 1 ? 0.9 : 0.8,
    });
  });

  // Service × City pages (money pages)
  // For Tier 1: all services
  // For Tier 2: top services only
  CITIES.forEach((city) => {
    const services = city.tier === 1 ? SERVICES : SERVICES.slice(0, 8);
    services.forEach((service) => {
      // Main service page
      urls.push({
        url: absoluteUrl(servicePath(city.slug, service.slug)),
        lastModified: now,
        changeFrequency: 'weekly',
        priority: city.tier === 1 ? 0.9 : 0.7,
      });

      // Pricing page
      urls.push({
        url: absoluteUrl(pricingPath(service.slug, city.slug)),
        lastModified: now,
        changeFrequency: 'weekly',
        priority: city.tier === 1 ? 0.8 : 0.6,
      });

      // FAQ page
      urls.push({
        url: absoluteUrl(faqPath(service.slug, city.slug)),
        lastModified: now,
        changeFrequency: 'weekly',
        priority: city.tier === 1 ? 0.8 : 0.6,
      });
    });
  });

  return urls;
}

/**
 * Shard URLs into manageable chunks
 */
export function shardUrls(urls: SitemapUrl[]): SitemapUrl[][] {
  const shards: SitemapUrl[][] = [];
  for (let i = 0; i < urls.length; i += SITEMAP_MAX_URLS) {
    shards.push(urls.slice(i, i + SITEMAP_MAX_URLS));
  }
  return shards;
}

/**
 * Get shard names
 */
export function getShardNames(urls: SitemapUrl[]): string[] {
  const totalShards = Math.ceil(urls.length / SITEMAP_MAX_URLS);
  const names: string[] = [];

  // Static pages shard
  names.push('static');

  // City shards
  const citiesCount = Math.ceil(getTier1And2Cities().length / 100);
  for (let i = 1; i <= citiesCount; i++) {
    names.push(`cities-${i}`);
  }

  // Service shards
  const remainingShards = totalShards - names.length;
  for (let i = 1; i <= Math.max(1, remainingShards); i++) {
    names.push(`services-${i}`);
  }

  return names;
}

/**
 * Generate sitemap XML
 */
export function generateSitemapXml(urls: SitemapUrl[]): string {
  const urlsXml = urls
    .map(
      (item) => `  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastModified.toISOString()}</lastmod>
    <changefreq>${item.changeFrequency}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>`;
}

/**
 * Generate sitemap index XML
 */
export function generateSitemapIndexXml(shardNames: string[]): string {
  const now = new Date().toISOString();
  const sitemapsXml = shardNames
    .map(
      (name) => `  <sitemap>
    <loc>${absoluteUrl(`/sitemaps/${name}.xml`)}</loc>
    <lastmod>${now}</lastmod>
  </sitemap>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapsXml}
</sitemapindex>`;
}

