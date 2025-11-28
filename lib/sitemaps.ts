import { CITIES, getTier1And2Cities } from '@/data/cities';
import { SERVICES } from '@/data/services';
import { getAllPosts, BLOG_CATEGORIES } from '@/data/blog';
import { absoluteUrl, cityPath, servicePath, pricingPath, faqPath } from './urls';
import { SITEMAP_MAX_URLS } from './constants';

export type SitemapUrl = {
  url: string;
  lastModified: Date;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  images?: { url: string; title?: string; caption?: string }[];
};

/**
 * Generate all URLs for sitemaps - Complete site coverage for Google Search Console
 */
export function generateAllUrls(): SitemapUrl[] {
  const urls: SitemapUrl[] = [];
  const now = new Date();

  // ==========================================
  // 1. HIGH PRIORITY PAGES (Priority 1.0 - 0.9)
  // ==========================================
  
  // Homepage - Most important
  urls.push({
    url: absoluteUrl('/'),
    lastModified: now,
    changeFrequency: 'daily',
    priority: 1.0,
  });

  // Saudi hub - Main regional page
  urls.push({
    url: absoluteUrl('/saudi'),
    lastModified: now,
    changeFrequency: 'daily',
    priority: 0.9,
  });

  // Services hub
  urls.push({
    url: absoluteUrl('/services'),
    lastModified: now,
    changeFrequency: 'daily',
    priority: 0.9,
  });

  // ==========================================
  // 2. MAIN NAVIGATION PAGES (Priority 0.8)
  // ==========================================
  const mainPages = [
    { path: '/about', freq: 'monthly' as const },
    { path: '/contact', freq: 'monthly' as const },
    { path: '/pricing', freq: 'weekly' as const },
    { path: '/faqs', freq: 'weekly' as const },
    { path: '/deals', freq: 'daily' as const },
    { path: '/emergency', freq: 'daily' as const },
    { path: '/providers', freq: 'weekly' as const },
    { path: '/coverage', freq: 'weekly' as const },
    { path: '/service-area', freq: 'weekly' as const },
    { path: '/blog', freq: 'daily' as const },
  ];

  mainPages.forEach((page) => {
    urls.push({
      url: absoluteUrl(page.path),
      lastModified: now,
      changeFrequency: page.freq,
      priority: 0.8,
    });
  });

  // Legal pages (lower priority)
  urls.push(
    {
      url: absoluteUrl('/privacy'),
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: absoluteUrl('/terms'),
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    }
  );

  // ==========================================
  // 3. SERVICE PAGES (Priority 0.85)
  // ==========================================
  SERVICES.forEach((service) => {
    // Main service page
    urls.push({
      url: absoluteUrl(`/services/${service.slug}`),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    });

    // Subservice pages
    service.subservices?.forEach((subservice) => {
      urls.push({
        url: absoluteUrl(`/services/${service.slug}/${subservice.slug}`),
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    });
  });

  // ==========================================
  // 4. CITY HUB PAGES (Priority 0.85 - 0.75)
  // ==========================================
  const tier1And2 = getTier1And2Cities();
  tier1And2.forEach((city) => {
    urls.push({
      url: absoluteUrl(cityPath(city.slug)),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: city.tier === 1 ? 0.85 : 0.75,
    });
  });

  // ==========================================
  // 5. CITY × SERVICE PAGES (Money Pages - Priority 0.9 - 0.7)
  // ==========================================
  CITIES.forEach((city) => {
    const services = city.tier === 1 ? SERVICES : SERVICES.slice(0, 8);
    services.forEach((service) => {
      // Main service page for city
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

      // Deals page
      urls.push({
        url: absoluteUrl(`/deals/${service.slug}/${city.slug}`),
        lastModified: now,
        changeFrequency: 'daily',
        priority: city.tier === 1 ? 0.75 : 0.55,
      });

      // Emergency page (for relevant services)
      const emergencyServices = ['moving', 'leaks-plumbing', 'pest-control', 'electricity', 'ac'];
      if (emergencyServices.includes(service.slug)) {
        urls.push({
          url: absoluteUrl(`/emergency/${service.slug}/${city.slug}`),
          lastModified: now,
          changeFrequency: 'daily',
          priority: city.tier === 1 ? 0.8 : 0.6,
        });
      }

      // Subservice pages for tier 1 cities
      if (city.tier === 1) {
        service.subservices?.forEach((subservice) => {
          urls.push({
            url: absoluteUrl(`/saudi/${city.slug}/${service.slug}/${subservice.slug}`),
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.75,
          });
        });
      }
    });
  });

  // ==========================================
  // 6. BLOG PAGES (Priority 0.7 - 0.6)
  // ==========================================
  const blogPosts = getAllPosts();
  blogPosts.forEach((post) => {
    urls.push({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.updatedAt || post.publishedAt),
      changeFrequency: 'monthly',
      priority: 0.7,
      images: post.image ? [{ url: absoluteUrl(post.image), title: post.title }] : undefined,
    });
  });

  // Blog category pages
  BLOG_CATEGORIES.forEach((category) => {
    urls.push({
      url: absoluteUrl(`/blog/category/${category.slug}`),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
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

