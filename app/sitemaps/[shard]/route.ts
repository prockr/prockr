import { generateAllUrls, shardUrls, generateSitemapXml } from '@/lib/sitemaps';

export async function generateStaticParams() {
  return [
    { shard: 'static' },
    { shard: 'cities-1' },
    { shard: 'services-1' },
    { shard: 'services-2' },
    { shard: 'services-3' },
  ];
}

export async function GET(
  request: Request,
  { params }: { params: { shard: string } }
) {
  const allUrls = generateAllUrls();
  const shards = shardUrls(allUrls);

  // Simple shard mapping - in production you'd want more sophisticated logic
  let urls = shards[0] || [];
  
  if (params.shard === 'static') {
    urls = allUrls.filter((u) => 
      u.url.includes('/services') || 
      u.url.includes('/providers') || 
      u.url.includes('/coverage') ||
      u.url.endsWith('/saudi') ||
      !u.url.includes('/saudi/')
    );
  } else if (params.shard.startsWith('cities-')) {
    urls = allUrls.filter((u) => 
      u.url.includes('/saudi/') && 
      !u.url.includes('/pricing/') && 
      !u.url.includes('/faq/') &&
      (u.url.match(/\//g) || []).length === 4
    );
  } else if (params.shard.startsWith('services-')) {
    const shardNum = parseInt(params.shard.split('-')[1]);
    const serviceUrls = allUrls.filter((u) => 
      (u.url.includes('/pricing/') || u.url.includes('/faq/') || 
       ((u.url.match(/\//g) || []).length === 5))
    );
    const chunkSize = Math.ceil(serviceUrls.length / 3);
    urls = serviceUrls.slice((shardNum - 1) * chunkSize, shardNum * chunkSize);
  }

  const xml = generateSitemapXml(urls);

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}

