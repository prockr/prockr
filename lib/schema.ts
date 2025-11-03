import type { City } from '@/data/cities';
import { SITE_URL, SITE_NAME_AR, PHONE } from './constants';
import { absoluteUrl } from './urls';
import type { BreadcrumbItem } from './seo';

/**
 * JSON-LD Schema generators
 */

export type FAQ = {
  q: string;
  a: string;
};

export function generateServiceSchema(params: {
  serviceName: string;
  serviceType: string;
  cityName: string;
  description: string;
  url?: string;
}): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `خدمة ${params.serviceName}`,
    description: params.description,
    serviceType: params.serviceType,
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_NAME_AR,
      telephone: PHONE,
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'City',
      name: params.cityName,
    },
    url: params.url ? absoluteUrl(params.url) : SITE_URL,
  };
}

export function generateLocalBusinessSchema(city?: City): object {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME_AR,
    url: SITE_URL,
    telephone: PHONE,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: PHONE,
      contactType: 'customer service',
      availableLanguage: ['ar'],
    },
  };

  if (city) {
    schema.address = {
      '@type': 'PostalAddress',
      addressLocality: city.name_ar,
      addressCountry: 'SA',
    };
    schema.areaServed = {
      '@type': 'City',
      name: city.name_ar,
    };
  } else {
    schema.areaServed = {
      '@type': 'Country',
      name: 'المملكة العربية السعودية',
    };
  }

  return schema;
}

export function generateFAQSchema(faqs: FAQ[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  };
}

/**
 * Wikidata IDs for major Saudi cities (for better entity recognition)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCityWikidataId(citySlug: string): string {
  const ids: Record<string, string> = {
    riyadh: 'Q3692',
    jeddah: 'Q374365',
    makkah: 'Q5806',
    madinah: 'Q35484',
    dammam: 'Q274220',
  };
  return ids[citySlug] || 'Q851';
}

