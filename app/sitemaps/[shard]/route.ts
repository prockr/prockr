import { generateAllUrls, generateSitemapXml } from '@/lib/sitemaps';

export async function generateStaticParams() {
  return [
    { shard: 'static' },
    { shard: 'cities-1' },
    { shard: 'services-1' },
    { shard: 'services-2' },
    { shard: 'services-3' },
    { shard: 'blog' },
  ];
}

export async function GET(
  request: Request,
  { params }: { params: { shard: string } }
) {
  const allUrls = generateAllUrls();
  let urls = allUrls;
  
  if (params.shard === 'static') {
    // Static pages: homepage, main pages, service pages (not city-specific)
    urls = allUrls.filter((u) => {
      const path = u.url.replace(/https?:\/\/[^/]+/, '');
      // Include homepage
      if (path === '/') return true;
      // Include main navigation pages
      if (['/services', '/saudi', '/about', '/contact', '/pricing', '/faqs', 
           '/deals', '/emergency', '/providers', '/coverage', '/service-area',
           '/privacy', '/terms'].includes(path)) return true;
      // Include service hub pages (not city-specific)
      if (path.startsWith('/services/') && (path.match(/\//g) || []).length <= 2) return true;
      return false;
    });
  } else if (params.shard.startsWith('cities-')) {
    // City hub pages and city service pages
    urls = allUrls.filter((u) => {
      const path = u.url.replace(/https?:\/\/[^/]+/, '');
      // City hub pages
      if (path.match(/^\/saudi\/[^/]+$/)) return true;
      // City service pages (not subservices)
      if (path.match(/^\/saudi\/[^/]+\/[^/]+$/) && !path.includes('/blog')) return true;
      return false;
    });
  } else if (params.shard.startsWith('services-')) {
    const shardNum = parseInt(params.shard.split('-')[1]);
    // All service-city combination pages (pricing, faq, deals, emergency, subservices)
    const serviceUrls = allUrls.filter((u) => {
      const path = u.url.replace(/https?:\/\/[^/]+/, '');
      return (
        path.includes('/pricing/') || 
        path.includes('/faq/') ||
        path.includes('/deals/') ||
        path.includes('/emergency/') ||
        // Subservice pages
        (path.startsWith('/saudi/') && (path.match(/\//g) || []).length >= 4)
      );
    });
    const chunkSize = Math.ceil(serviceUrls.length / 3);
    urls = serviceUrls.slice((shardNum - 1) * chunkSize, shardNum * chunkSize);
  } else if (params.shard === 'blog') {
    // Blog posts and category pages
    urls = allUrls.filter((u) => u.url.includes('/blog'));
  }

  const xml = generateSitemapXml(urls);

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

