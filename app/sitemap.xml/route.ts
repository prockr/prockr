import { absoluteUrl } from '@/lib/urls';

/**
 * Main Sitemap Index for Google Search Console
 * This is the primary sitemap that Google will crawl
 */
export async function GET() {
  const lastmod = new Date().toISOString();
  
  // Define all sitemap shards
  const sitemaps = [
    'static',      // Main pages, services hub, about, contact, etc.
    'cities-1',    // City hub pages
    'services-1',  // Service × City pages (part 1)
    'services-2',  // Service × City pages (part 2)
    'services-3',  // Service × City pages (part 3)
    'blog',        // Blog posts and categories
  ];
  
  const sitemapEntries = sitemaps
    .map(name => `  <sitemap>
    <loc>${absoluteUrl(`/sitemaps/${name}.xml`)}</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>`)
    .join('\n');
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap-style.xsl"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</sitemapindex>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      'X-Robots-Tag': 'noindex',
    },
  });
}

