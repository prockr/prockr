import { generateAllUrls, generateSitemapXml } from '@/lib/sitemaps';

export async function generateStaticParams() {
  return [
    { shard: 'pages' },
    { shard: 'dynamic' },
    { shard: 'blog' },
  ];
}

export async function GET(
  request: Request,
  { params }: { params: { shard: string } }
) {
  const allUrls = generateAllUrls();
  let urls = allUrls;
  
  const getPath = (u: typeof urls[0]) => u.url.replace(/https?:\/\/[^/]+/, '');
  
  switch (params.shard) {
    case 'pages':
      // All main pages: static, services, cities, subservices
      urls = allUrls.filter((u) => {
        const path = getPath(u);
        // Homepage
        if (path === '/') return true;
        // Main navigation pages
        if (['/services', '/saudi', '/about', '/contact', '/pricing', '/faqs', 
             '/deals', '/emergency', '/providers', '/coverage', '/service-area',
             '/privacy', '/terms', '/blog'].includes(path)) return true;
        // Service pages (/services/*)
        if (path.startsWith('/services/')) return true;
        // City and city-service pages (/saudi/*)
        if (path.startsWith('/saudi/')) return true;
        return false;
      });
      break;
      
    case 'dynamic':
      // All dynamic pages: pricing, faq, deals, emergency
      urls = allUrls.filter((u) => {
        const path = getPath(u);
        return (
          path.includes('/pricing/') || 
          path.includes('/faq/') ||
          path.includes('/deals/') ||
          path.includes('/emergency/')
        );
      });
      break;
      
    case 'blog':
      // Blog posts and category pages
      urls = allUrls.filter((u) => getPath(u).includes('/blog/'));
      break;
      
    default:
      // Return all URLs if unknown shard
      urls = allUrls;
  }

  const xml = generateSitemapXml(urls);

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

