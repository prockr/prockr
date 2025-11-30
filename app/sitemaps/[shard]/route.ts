import { generateAllUrls, generateSitemapXml } from '@/lib/sitemaps';

export async function generateStaticParams() {
  return [
    // Core pages
    { shard: 'static' },
    { shard: 'services' },
    // City pages
    { shard: 'cities-1' },
    { shard: 'cities-services' },
    // Money pages
    { shard: 'pricing-1' },
    { shard: 'pricing-2' },
    { shard: 'faq-1' },
    { shard: 'faq-2' },
    { shard: 'deals' },
    { shard: 'emergency' },
    // Subservices
    { shard: 'subservices-1' },
    { shard: 'subservices-2' },
    // Blog
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
    case 'static':
      // Homepage, main navigation, legal pages
      urls = allUrls.filter((u) => {
        const path = getPath(u);
        if (path === '/') return true;
        if (['/services', '/saudi', '/about', '/contact', '/pricing', '/faqs', 
             '/deals', '/emergency', '/providers', '/coverage', '/service-area',
             '/privacy', '/terms', '/blog'].includes(path)) return true;
        return false;
      });
      break;
      
    case 'services':
      // Service hub pages (/services/*)
      urls = allUrls.filter((u) => {
        const path = getPath(u);
        return path.startsWith('/services/') && !path.includes('/saudi/');
      });
      break;
      
    case 'cities-1':
      // City hub pages (/saudi/cityname)
      urls = allUrls.filter((u) => {
        const path = getPath(u);
        return path.match(/^\/saudi\/[^/]+$/) !== null;
      });
      break;
      
    case 'cities-services':
      // City × Service pages (/saudi/city/service)
      urls = allUrls.filter((u) => {
        const path = getPath(u);
        return path.match(/^\/saudi\/[^/]+\/[^/]+$/) !== null;
      });
      break;
      
    case 'pricing-1':
    case 'pricing-2':
      const pricingUrls = allUrls.filter((u) => getPath(u).includes('/pricing/'));
      const pricingHalf = Math.ceil(pricingUrls.length / 2);
      urls = params.shard === 'pricing-1' 
        ? pricingUrls.slice(0, pricingHalf)
        : pricingUrls.slice(pricingHalf);
      break;
      
    case 'faq-1':
    case 'faq-2':
      const faqUrls = allUrls.filter((u) => getPath(u).includes('/faq/'));
      const faqHalf = Math.ceil(faqUrls.length / 2);
      urls = params.shard === 'faq-1' 
        ? faqUrls.slice(0, faqHalf)
        : faqUrls.slice(faqHalf);
      break;
      
    case 'deals':
      urls = allUrls.filter((u) => getPath(u).includes('/deals/'));
      break;
      
    case 'emergency':
      urls = allUrls.filter((u) => getPath(u).includes('/emergency/'));
      break;
      
    case 'subservices-1':
    case 'subservices-2':
      const subserviceUrls = allUrls.filter((u) => {
        const path = getPath(u);
        // Subservice pages: /saudi/city/service/subservice
        return path.startsWith('/saudi/') && (path.match(/\//g) || []).length >= 4;
      });
      const subHalf = Math.ceil(subserviceUrls.length / 2);
      urls = params.shard === 'subservices-1' 
        ? subserviceUrls.slice(0, subHalf)
        : subserviceUrls.slice(subHalf);
      break;
      
    case 'blog':
      urls = allUrls.filter((u) => getPath(u).includes('/blog/'));
      break;
      
    default:
      urls = [];
  }

  const xml = generateSitemapXml(urls);

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

