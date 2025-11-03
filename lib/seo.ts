import type { Metadata } from 'next';
import type { City } from '@/data/cities';
import type { ServiceCategory } from '@/data/services';
import { SITE_URL, SITE_NAME_AR, DEFAULT_TITLE_AR, DEFAULT_DESCRIPTION_AR } from './constants';
import { absoluteUrl } from './urls';

export function titleServiceCity(service: ServiceCategory, city: City): string {
  return `خدمة ${service.name_ar} في ${city.name_ar} | ضمان وأسعار واضحة | ${SITE_NAME_AR}`;
}

export function metaDescServiceCity(service: ServiceCategory, city: City): string {
  return `خدمة ${service.name_ar} في ${city.name_ar} مع فِرق معتمدة وضمان مكتوب وزمن استجابة سريع. اطلب تسعيرة دقيقة الآن وتمتع بخدمة احترافية.`;
}

export function generateMetadata({
  title,
  description,
  path,
  image,
  noindex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noindex?: boolean;
}): Metadata {
  const canonical = path ? absoluteUrl(path) : SITE_URL;
  const ogImage = image ? absoluteUrl(image) : absoluteUrl('/images/Logo.png');

  const metadata: Metadata = {
    title: title || DEFAULT_TITLE_AR,
    description: description || DEFAULT_DESCRIPTION_AR,
    alternates: {
      canonical,
      languages: {
        ar: canonical,
        'x-default': canonical,
      },
    },
    openGraph: {
      title: title || DEFAULT_TITLE_AR,
      description: description || DEFAULT_DESCRIPTION_AR,
      url: canonical,
      siteName: SITE_NAME_AR,
      locale: 'ar_SA',
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title || DEFAULT_TITLE_AR,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title || DEFAULT_TITLE_AR,
      description: description || DEFAULT_DESCRIPTION_AR,
      images: [ogImage],
    },
  };

  if (noindex) {
    metadata.robots = {
      index: false,
      follow: true,
      nocache: false,
    };
  }

  return metadata;
}

/**
 * Breadcrumb data for UI rendering
 */
export type BreadcrumbItem = {
  label: string;
  href: string;
};

export function buildBreadcrumbs(items: BreadcrumbItem[]): BreadcrumbItem[] {
  return [{ label: 'الرئيسية', href: '/' }, ...items];
}

/**
 * Hreflang scaffolding for future multilingual support
 * Currently only Arabic, but prepared for English expansion
 */
export type HreflangLink = {
  hreflang: string;
  href: string;
};

/**
 * Generate hreflang alternate links for a page
 * Path should be the current page path without domain
 */
export function generateHreflangLinks(path: string): HreflangLink[] {
  const links: HreflangLink[] = [];
  
  // Arabic (current)
  links.push({
    hreflang: 'ar',
    href: absoluteUrl(path),
  });
  
  // X-default points to Arabic for now
  links.push({
    hreflang: 'x-default',
    href: absoluteUrl(path),
  });
  
  // TODO: When English is added, include:
  // links.push({
  //   hreflang: 'en',
  //   href: absoluteUrl(`/en${path}`),
  // });
  
  return links;
}

/**
 * Generate language alternates for Next.js metadata
 * Used in generateMetadata function
 */
export function getLanguageAlternates(path: string): Record<string, string> {
  const alternates: Record<string, string> = {
    ar: absoluteUrl(path),
    'x-default': absoluteUrl(path),
  };
  
  // TODO: Add English when ready
  // alternates.en = absoluteUrl(`/en${path}`);
  
  return alternates;
}

