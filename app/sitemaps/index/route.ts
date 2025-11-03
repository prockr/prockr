import { generateAllUrls, getShardNames, generateSitemapIndexXml } from '@/lib/sitemaps';

export async function GET() {
  const allUrls = generateAllUrls();
  const shardNames = getShardNames(allUrls);
  const xml = generateSitemapIndexXml(shardNames);

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}

