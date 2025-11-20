/**
 * Schema.org with Geo-location Support
 * Enhanced structured data with GPS coordinates and location information
 */

import { formatGeoCoordinates, generatePlaceSchema, getCityGeocodeBySlug } from './geocoding';
import type { City } from '@/data/cities';
import type { ServiceCategory } from '@/data/services';

/**
 * Generate LocalBusiness Schema with GeoCoordinates
 */
export function generateLocalBusinessSchema(city: City) {
  const geoData = getCityGeocodeBySlug(city.slug);
  const placeSchema = generatePlaceSchema(city.slug);

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://prokr.com/saudi/${city.slug}#business`,
    name: `بروكر - خدمات منزلية في ${city.name_ar}`,
    description: `خدمات منزلية محترفة في ${city.name_ar} وجميع الأحياء المحيطة. نقل عفش، تنظيف، صيانة، وأكثر.`,
    url: `https://prokr.com/saudi/${city.slug}`,
    telephone: '+966-XX-XXX-XXXX', // Replace with actual phone
    email: 'support@prokr.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name_ar,
      addressRegion: geoData?.region || 'السعودية',
      addressCountry: 'SA',
    },
    geo: formatGeoCoordinates(city.slug),
    areaServed: placeSchema
      ? {
          '@type': 'GeoCircle',
          geoMidpoint: placeSchema.geo,
          geoRadius: `${geoData?.serviceRadius || 30}000`, // meters
        }
      : undefined,
    priceRange: '$$',
    image: 'https://prokr.com/images/Logo.png',
    sameAs: [
      'https://twitter.com/prokr_sa',
      'https://www.facebook.com/prokr',
      'https://www.instagram.com/prokr_sa/',
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
  };
}

/**
 * Generate Service Schema with GeoCoordinates and ServiceArea
 */
export function generateServiceSchemaWithGeo(
  service: ServiceCategory,
  city: City
) {
  const geoData = getCityGeocodeBySlug(city.slug);
  const placeSchema = generatePlaceSchema(city.slug);

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://prokr.com/saudi/${city.slug}/${service.slug}#service`,
    name: `${service.name_ar} في ${city.name_ar}`,
    description: `خدمة ${service.name_ar} محترفة في ${city.name_ar} مع ضمان جودة وأسعار تنافسية.`,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `https://prokr.com/saudi/${city.slug}#business`,
      name: `بروكر - ${service.name_ar}`,
      url: `https://prokr.com/saudi/${city.slug}/${service.slug}`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: city.name_ar,
        addressRegion: geoData?.region || 'السعودية',
        addressCountry: 'SA',
      },
      geo: formatGeoCoordinates(city.slug),
    },
    areaServed: placeSchema
      ? {
          '@type': 'GeoCircle',
          geoMidpoint: placeSchema.geo,
          geoRadius: `${geoData?.serviceRadius || 30}000`, // meters
        }
      : undefined,
    serviceType: service.name_ar,
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `https://prokr.com/saudi/${city.slug}/${service.slug}`,
      servicePhone: '+966-XX-XXX-XXXX',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'SAR',
      availability: 'https://schema.org/InStock',
    },
  };
}

/**
 * Generate Place Schema for City Pages
 */
export function generateCityPlaceSchema(city: City) {
  const geoData = getCityGeocodeBySlug(city.slug);
  if (!geoData) return null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    '@id': `https://prokr.com/saudi/${city.slug}#place`,
    name: city.name_ar,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: geoData.coordinates.lat,
      longitude: geoData.coordinates.lng,
    },
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: geoData.region,
      containedInPlace: {
        '@type': 'Country',
        name: 'المملكة العربية السعودية',
      },
    },
  };

  // Add bounds if available
  if (geoData.bounds) {
    schema.geo.box = `${geoData.bounds.southwest.lat} ${geoData.bounds.southwest.lng} ${geoData.bounds.northeast.lat} ${geoData.bounds.northeast.lng}`;
  }

  return schema;
}

/**
 * Generate Emergency Service Schema with GeoCoordinates
 */
export function generateEmergencyServiceSchema(
  service: ServiceCategory,
  city: City
) {
  const geoData = getCityGeocodeBySlug(city.slug);
  const placeSchema = generatePlaceSchema(city.slug);

  return {
    '@context': 'https://schema.org',
    '@type': 'EmergencyService',
    '@id': `https://prokr.com/emergency/${service.slug}/${city.slug}#emergency`,
    name: `خدمة طوارئ ${service.name_ar} 24 ساعة في ${city.name_ar}`,
    description: `خدمة طوارئ ${service.name_ar} متاحة على مدار 24 ساعة في ${city.name_ar} وجميع المناطق المحيطة.`,
    url: `https://prokr.com/emergency/${service.slug}/${city.slug}`,
    telephone: '+966-XX-XXX-XXXX',
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name_ar,
      addressRegion: geoData?.region || 'السعودية',
      addressCountry: 'SA',
    },
    geo: formatGeoCoordinates(city.slug),
    areaServed: placeSchema
      ? {
          '@type': 'GeoCircle',
          geoMidpoint: placeSchema.geo,
          geoRadius: `${geoData?.serviceRadius || 30}000`,
        }
      : undefined,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  };
}

/**
 * Generate ItemList Schema for Service Area Page
 */
export function generateServiceAreaSchema() {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { CITIES_GEOCODE } = require('./geocoding');

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': 'https://prokr.com/service-area#cities',
    name: 'المدن المغطاة - بروكر',
    description: 'قائمة بجميع المدن السعودية التي نقدم فيها خدماتنا المنزلية',
    numberOfItems: CITIES_GEOCODE.length,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    itemListElement: CITIES_GEOCODE.map((city: any, index: number) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Place',
        '@id': `https://prokr.com/saudi/${city.slug}`,
        name: city.name_ar,
        geo: {
          '@type': 'GeoCoordinates',
          latitude: city.coordinates.lat,
          longitude: city.coordinates.lng,
        },
      },
    })),
  };
}

/**
 * Generate Organization Schema with multiple locations
 */
export function generateOrganizationSchema() {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { getTier1Cities } = require('./geocoding');
  const tier1Cities = getTier1Cities();

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://prokr.com/#organization',
    name: 'بروكر - Prokr',
    alternateName: 'Prokr Home Services',
    url: 'https://prokr.com',
    logo: 'https://prokr.com/images/Logo.png',
    description:
      'منصة رائدة للخدمات المنزلية في المملكة العربية السعودية تربط العملاء بمقدمي خدمات محترفين',
    email: 'support@prokr.com',
    telephone: '+966-XX-XXX-XXXX',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'SA',
      addressRegion: 'المملكة العربية السعودية',
    },
    sameAs: [
      'https://twitter.com/prokr_sa',
      'https://www.facebook.com/prokr',
      'https://www.instagram.com/prokr_sa/',
    ],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    location: tier1Cities.map((city: any) => ({
      '@type': 'Place',
      name: city.name_ar,
      address: {
        '@type': 'PostalAddress',
        addressLocality: city.name_ar,
        addressRegion: city.region,
        addressCountry: 'SA',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: city.coordinates.lat,
        longitude: city.coordinates.lng,
      },
    })),
  };
}

