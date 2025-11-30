import { absoluteUrl } from '@/lib/urls';

/**
 * Main Sitemap Index for Google Search Console
 * Simplified structure with guaranteed content
 */
export async function GET() {
  const lastmod = new Date().toISOString();
  
  // Simplified sitemap structure - 4 main shards
  const sitemaps = [
    'pages',      // All main pages (static, services, cities)
    'dynamic',    // All dynamic pages (pricing, faq, deals, emergency)
    'blog',       // Blog posts and categories
    'images',     // Image sitemap
  ];
  
  const sitemapEntries = sitemaps
    .map(name => `  <sitemap>
    <loc>${absoluteUrl(`/sitemaps/${name}.xml`)}</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>`)
    .join('\n');
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</sitemapindex>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

