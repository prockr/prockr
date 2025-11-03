import type { ServiceCategory, Subservice } from '@/data/services';
import { SITE_URL } from './constants';

/**
 * URL builders - all slugs are lowercase English with hyphens
 */

export function homeUrl(): string {
  return '/';
}

export function saudiHubUrl(): string {
  return '/saudi';
}

export function cityPath(citySlug: string): string {
  return `/saudi/${citySlug}`;
}

export function servicePath(citySlug: string, serviceSlug: string): string {
  return `/saudi/${citySlug}/${serviceSlug}`;
}

export function subservicePath(
  citySlug: string,
  serviceSlug: string,
  subserviceSlug: string
): string {
  return `/saudi/${citySlug}/${serviceSlug}/${subserviceSlug}`;
}

export function pricingPath(serviceSlug: string, citySlug: string): string {
  return `/pricing/${serviceSlug}/${citySlug}`;
}

export function faqPath(serviceSlug: string, citySlug: string): string {
  return `/faq/${serviceSlug}/${citySlug}`;
}

export function dealsPath(serviceSlug: string, citySlug: string): string {
  return `/deals/${serviceSlug}/${citySlug}`;
}

export function emergencyPath(serviceSlug: string, citySlug: string): string {
  return `/emergency/${serviceSlug}/${citySlug}`;
}

export function servicesUrl(): string {
  return '/services';
}

export function providersUrl(): string {
  return '/providers';
}

export function coverageUrl(): string {
  return '/coverage';
}

/**
 * Absolute URLs for canonical/og/sitemap
 */
export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path}`;
}

/**
 * Image helpers - now using centralized image management
 * Import from lib/images.ts for full functionality
 */
export { getHeroImage, getServiceCardImage, getGalleryImages, getRandomImages } from './images';

export function getLogoUrl(): string {
  return '/images/Logo.png';
}

// Legacy compatibility
export function getServiceImage(serviceSlug: string): string {
  // Use centralized image system
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { getHeroImage } = require('./images');
  return getHeroImage(serviceSlug, 0);
}

/**
 * Generate related links for internal linking
 * Helps with SEO and user navigation
 */
import { SERVICES } from '@/data/services';
import type { City } from '@/data/cities';

export type RelatedLink = {
  href: string;
  label: string;
  type: 'subservice' | 'sibling' | 'pricing' | 'faq' | 'deals' | 'emergency';
};

/**
 * Generate related links for a service in a city
 */
export function generateRelatedLinks(
  city: City,
  service: ServiceCategory,
  currentSubservice?: Subservice
): RelatedLink[] {
  const links: RelatedLink[] = [];

  // 1. Subservices (if not already on a subservice page)
  if (!currentSubservice && service.subservices.length > 0) {
    service.subservices.slice(0, 4).forEach((sub) => {
      links.push({
        href: subservicePath(city.slug, service.slug, sub.slug),
        label: sub.name_ar,
        type: 'subservice',
      });
    });
  }

  // 2. Related subservices (if on a subservice page)
  if (currentSubservice && service.subservices.length > 1) {
    service.subservices
      .filter((sub) => sub.slug !== currentSubservice.slug)
      .slice(0, 3)
      .forEach((sub) => {
        links.push({
          href: subservicePath(city.slug, service.slug, sub.slug),
          label: sub.name_ar,
          type: 'subservice',
        });
      });
  }

  // 3. Pricing page
  links.push({
    href: pricingPath(service.slug, city.slug),
    label: `أسعار ${service.name_ar}`,
    type: 'pricing',
  });

  // 4. FAQ page
  links.push({
    href: faqPath(service.slug, city.slug),
    label: `أسئلة شائعة - ${service.name_ar}`,
    type: 'faq',
  });

  // 5. Deals page
  links.push({
    href: dealsPath(service.slug, city.slug),
    label: `عروض ${service.name_ar}`,
    type: 'deals',
  });

  // 6. Emergency page (if urgent service)
  const urgentServices = ['leaks-plumbing', 'electricity', 'ac', 'pest-control'];
  if (urgentServices.includes(service.slug)) {
    links.push({
      href: emergencyPath(service.slug, city.slug),
      label: `طوارئ ${service.name_ar}`,
      type: 'emergency',
    });
  }

  // 7. Sibling services (2-3 related services)
  const siblingServices = getSiblingServices(service);
  siblingServices.slice(0, 2).forEach((sibling) => {
    links.push({
      href: servicePath(city.slug, sibling.slug),
      label: sibling.name_ar,
      type: 'sibling',
    });
  });

  return links;
}

/**
 * Get related/sibling services
 */
function getSiblingServices(currentService: ServiceCategory): ServiceCategory[] {
  // Define service relationships
  const relationships: Record<string, string[]> = {
    moving: ['cleaning', 'pest-control'],
    cleaning: ['moving', 'pest-control', 'sanitization'],
    'leaks-plumbing': ['electricity', 'painting-gypsum'],
    'pest-control': ['cleaning', 'sanitization'],
    ac: ['electricity', 'appliances'],
    electricity: ['ac', 'leaks-plumbing'],
    'painting-gypsum': ['carpentry', 'wallpaper'],
    carpentry: ['painting-gypsum', 'aluminum-glass'],
    'aluminum-glass': ['carpentry', 'flooring'],
    flooring: ['aluminum-glass', 'painting-gypsum'],
    'insulation-roofs': ['leaks-plumbing', 'waterproofing'],
    appliances: ['ac', 'electricity'],
    landscaping: ['irrigation-systems', 'garden-design'],
    'car-towing': ['moving'],
  };

  const relatedSlugs = relationships[currentService.slug] || [];
  return SERVICES.filter((s) => relatedSlugs.includes(s.slug));
}

