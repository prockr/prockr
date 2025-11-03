import { SITE_URL } from '@/lib/constants';

export async function GET() {
  const robots = `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${SITE_URL}/sitemaps/index.xml

# Crawl-delay
Crawl-delay: 1
`;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}

