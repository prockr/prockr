/**
 * AI Search Engine Optimization Utilities
 * Enhanced SEO for AI-powered search engines
 */

import { Metadata } from 'next';

export interface AIMetadataParams {
  title: string;
  description: string;
  keywords?: string[];
  service?: string;
  location?: string;
  price?: {
    min: number;
    max: number;
    currency: string;
  };
  features?: string[];
  benefits?: string[];
  faqs?: Array<{ q: string; a: string }>;
  images?: string[];
}

/**
 * Generate AI-optimized metadata
 */
export function generateAIMetadata(params: AIMetadataParams): Metadata {
  const {
    title,
    description,
    keywords = [],
    service,
    location,
    images = [],
  } = params;

  // Create semantic title for AI understanding
  const semanticTitle = location && service
    ? `${service} في ${location} - بروكر`
    : title;

  // Enhanced description with context
  const enhancedDescription = location && service
    ? `${description} خدمة ${service} احترافية في ${location}. فريق معتمد، ضمان مكتوب، أسعار تنافسية. متاح 24/7`
    : description;

  return {
    title: semanticTitle,
    description: enhancedDescription,
    keywords: keywords.join(', '),
    authors: [{ name: 'بروكر - Prokr' }],
    creator: 'بروكر',
    publisher: 'بروكر',
    formatDetection: {
      telephone: true,
      date: true,
      address: true,
      email: true,
    },
    openGraph: {
      title: semanticTitle,
      description: enhancedDescription,
      type: 'website',
      locale: 'ar_SA',
      siteName: 'بروكر - Prokr',
      images: images.length > 0 ? images : ['/images/Logo.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: semanticTitle,
      description: enhancedDescription,
      images: images.length > 0 ? images : ['/images/Logo.png'],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: location && service
        ? `https://prokr.com/saudi/${location}/${service}`
        : undefined,
    },
  };
}

/**
 * Generate structured FAQ schema for AI
 */
export function generateFAQSchemaForAI(faqs: Array<{ q: string; a: string }>) {
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

/**
 * Generate service schema for AI understanding
 */
export function generateServiceSchemaForAI(params: {
  serviceName: string;
  description: string;
  location?: string;
  price?: { min: number; max: number; currency: string };
  features?: string[];
}) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: params.serviceName,
    description: params.description,
    provider: {
      '@type': 'Organization',
      name: 'بروكر - Prokr',
      url: 'https://prokr.com',
      logo: 'https://prokr.com/images/Logo.png',
      telephone: '+966-50-000-0000',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'SA',
        addressRegion: params.location || 'Saudi Arabia',
      },
    },
    serviceType: params.serviceName,
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://prokr.com',
      servicePhone: '+966-50-000-0000',
      availableLanguage: {
        '@type': 'Language',
        name: 'Arabic',
        alternateName: 'ar',
      },
    },
  };

  if (params.location) {
    schema.areaServed = {
      '@type': 'City',
      name: params.location,
      containedInPlace: {
        '@type': 'Country',
        name: 'Saudi Arabia',
      },
    };
  }

  if (params.price) {
    schema.offers = {
      '@type': 'AggregateOffer',
      priceCurrency: params.price.currency,
      lowPrice: params.price.min,
      highPrice: params.price.max,
    };
  }

  if (params.features && params.features.length > 0) {
    schema.hasOfferCatalog = {
      '@type': 'OfferCatalog',
      name: 'مميزات الخدمة',
      itemListElement: params.features.map((feature, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: feature,
        },
        position: index + 1,
      })),
    };
  }

  return schema;
}

/**
 * Generate breadcrumb schema for AI navigation
 */
export function generateBreadcrumbSchemaForAI(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `https://prokr.com${crumb.url}`,
    })),
  };
}

/**
 * Generate AI-friendly keywords
 */
export function generateAIKeywords(params: {
  service?: string;
  location?: string;
  category?: string;
}): string[] {
  const baseKeywords = [
    'خدمات منزلية',
    'خدمات احترافية',
    'السعودية',
    'متاح 24/7',
    'ضمان مكتوب',
    'فريق معتمد',
  ];

  if (params.service) {
    baseKeywords.push(
      params.service,
      `خدمة ${params.service}`,
      `${params.service} احترافية`,
      `شركة ${params.service}`,
      `أفضل ${params.service}`
    );
  }

  if (params.location) {
    baseKeywords.push(
      params.location,
      `في ${params.location}`,
      `${params.location} السعودية`
    );

    if (params.service) {
      baseKeywords.push(
        `${params.service} في ${params.location}`,
        `${params.service} ${params.location}`,
        `شركة ${params.service} في ${params.location}`
      );
    }
  }

  return baseKeywords;
}

/**
 * Format content for AI readability
 */
export function formatContentForAI(content: string): string {
  // Add semantic markers for AI understanding
  return content
    .replace(/## /g, '\n**القسم:** ')
    .replace(/### /g, '\n**النقطة:** ')
    .replace(/\*\*/g, '')
    .trim();
}

/**
 * Generate AI-friendly summary
 */
export function generateAISummary(params: {
  service: string;
  location?: string;
  features: string[];
  price?: { min: number; max: number };
}): string {
  const { service, location, features, price } = params;

  let summary = `خدمة ${service} احترافية`;
  
  if (location) {
    summary += ` في ${location}`;
  }

  summary += '. ';
  summary += features.slice(0, 3).join(' • ') + '. ';

  if (price) {
    summary += `الأسعار من ${price.min} إلى ${price.max} ريال. `;
  }

  summary += 'متاح 24/7 مع ضمان مكتوب.';

  return summary;
}

