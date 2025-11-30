import { absoluteUrl } from '@/lib/urls';

/**
 * Main Sitemap Index for Google Search Console
 * Complete site coverage with organized shards
 */
export async function GET() {
  const lastmod = new Date().toISOString();
  
  // Define all sitemap shards - organized by content type
  const sitemaps = [
    // Core pages
    'static',           // Homepage, main nav, legal pages
    'services',         // Service hub pages (/services/*)
    
    // City pages
    'cities-1',         // City hub pages (/saudi/*)
    'cities-services',  // City × Service pages (/saudi/*/*)
    
    // Money pages (high-value SEO)
    'pricing-1',        // Pricing pages part 1
    'pricing-2',        // Pricing pages part 2
    'faq-1',            // FAQ pages part 1
    'faq-2',            // FAQ pages part 2
    'deals',            // Deals pages
    'emergency',        // Emergency pages
    
    // Subservices
    'subservices-1',    // Subservice pages part 1
    'subservices-2',    // Subservice pages part 2
    
    // Blog
    'blog',             // Blog posts and categories
    
    // Images (for Google Image Search)
    'images',           // All site images
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

