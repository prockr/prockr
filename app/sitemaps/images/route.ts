import { SERVICES } from '@/data/services';
import { getAllPosts } from '@/data/blog';
import { absoluteUrl } from '@/lib/urls';
import { getServiceCardImage, getHeroImage } from '@/lib/images';

/**
 * Image Sitemap for Google Image Search
 * Helps Google index all images on the site
 */
export async function GET() {
  const images: { pageUrl: string; imageUrl: string; title: string; caption?: string }[] = [];

  // Service images
  SERVICES.forEach((service) => {
    const serviceImage = getServiceCardImage(service.slug);
    if (serviceImage) {
      images.push({
        pageUrl: absoluteUrl(`/services/${service.slug}`),
        imageUrl: absoluteUrl(serviceImage.replace('?v=v2', '')),
        title: `${service.name_ar} - بروكر`,
        caption: `خدمة ${service.name_ar} في السعودية`,
      });
    }

    // Subservice images
    service.subservices?.forEach((subservice) => {
      const subImage = getHeroImage(`${service.slug}/${subservice.slug}`);
      if (subImage) {
        images.push({
          pageUrl: absoluteUrl(`/services/${service.slug}/${subservice.slug}`),
          imageUrl: absoluteUrl(subImage.replace('?v=v2', '')),
          title: `${subservice.name_ar} - بروكر`,
          caption: `خدمة ${subservice.name_ar} في السعودية`,
        });
      }
    });
  });

  // Blog post images
  const posts = getAllPosts();
  posts.forEach((post) => {
    if (post.image) {
      images.push({
        pageUrl: absoluteUrl(`/blog/${post.slug}`),
        imageUrl: absoluteUrl(post.image.replace('?v=v2', '')),
        title: post.title,
        caption: post.excerpt.substring(0, 200),
      });
    }
  });

  // Generate XML
  const urlsXml = images
    .map((img) => `  <url>
    <loc>${escapeXml(img.pageUrl)}</loc>
    <image:image>
      <image:loc>${escapeXml(img.imageUrl)}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>${img.caption ? `
      <image:caption>${escapeXml(img.caption)}</image:caption>` : ''}
    </image:image>
  </url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlsXml}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

