import { SITE_URL } from '@/lib/constants';

export async function GET() {
  const robots = `# robots.txt for ${SITE_URL}
# بروكر - منصة الخدمات المنزلية في السعودية

# Allow all search engines
User-agent: *
Allow: /

# Block unnecessary paths
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /*.json$

# Google Bot - Full access with faster crawling
User-agent: Googlebot
Allow: /
Crawl-delay: 0

# Google Image Bot - Allow image indexing
User-agent: Googlebot-Image
Allow: /images/
Allow: /*.jpg
Allow: /*.png
Allow: /*.webp

# Bing Bot
User-agent: Bingbot
Allow: /
Crawl-delay: 1

# Yandex Bot
User-agent: Yandex
Allow: /
Crawl-delay: 2

# Baidu Bot
User-agent: Baiduspider
Allow: /
Crawl-delay: 2

# Social Media Bots - Full access for rich previews
User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: LinkedInBot
Allow: /

User-agent: WhatsApp
Allow: /

# AI Crawlers - Allow for AI search optimization
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Claude-Web
Allow: /

# Primary Sitemap (Index)
Sitemap: ${SITE_URL}/sitemap.xml

# Additional Sitemaps
Sitemap: ${SITE_URL}/sitemaps/index

# Host declaration
Host: ${SITE_URL}
`;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

