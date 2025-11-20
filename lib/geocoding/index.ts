/**
 * Geocoding System - Main Export
 * Central hub for all geocoding and image location functionality
 */

// Export all geocoding functions and types
export {
  type CityGeocode,
  CITIES_GEOCODE,
  getCityGeocodeBySlug,
  getCitiesByRegion,
  getCitiesNearCoordinates,
  calculateDistance,
  isWithinCityBounds,
  getNearestCity,
  getServiceCoverage,
  getTier1Cities,
  getTier2Cities,
  getTier3Cities,
  getCitiesByTier,
} from './cities-geocode';

// Export all image location functions
export {
  type ServiceImageMapping,
  IMAGE_LOCATION_MAP,
  getOptimalServiceImage,
  getAllServiceImages,
  generateImageAltTag,
  generateImageTitleTag,
  hasCitySpecificImages,
  getImageDescription,
  isServiceApplicableToCity,
  getPrimaryCitiesForService,
} from './image-location-mapping';

import { getCityBySlug } from '@/data/cities';
import {
  getCityGeocodeBySlug,
  getCitiesNearCoordinates,
  getServiceCoverage,
} from './cities-geocode';
import { getOptimalServiceImage, generateImageAltTag } from './image-location-mapping';

/**
 * Quick access function: Get city info with geocoding
 */
export function getCityFullInfo(citySlug: string) {
  const cityData = getCityBySlug(citySlug);
  const geoData = getCityGeocodeBySlug(citySlug);

  if (!cityData || !geoData) return null;

  return {
    ...cityData,
    geo: geoData,
  };
}

/**
 * Get service image with location-aware alt tag
 */
export function getServiceImageWithAlt(
  serviceSlug: string,
  serviceNameAr: string,
  citySlug: string,
  cityNameAr: string,
  imageType: 'hero' | 'gallery' = 'hero'
) {
  return {
    src: getOptimalServiceImage(serviceSlug, citySlug, imageType),
    alt: generateImageAltTag(serviceNameAr, cityNameAr),
  };
}

/**
 * Calculate service area coverage
 * Returns array of cities within service radius
 */
export function calculateServiceArea(citySlug: string): string[] {
  return getServiceCoverage(citySlug);
}

/**
 * Get location-specific metadata for SEO
 */
export function getLocationMetadata(citySlug: string) {
  const geoData = getCityGeocodeBySlug(citySlug);
  if (!geoData) return null;

  return {
    coordinates: geoData.coordinates,
    region: geoData.region,
    serviceRadius: geoData.serviceRadius,
    bounds: geoData.bounds,
    timezone: geoData.timezone,
  };
}

/**
 * Format coordinates for Schema.org GeoCoordinates
 */
export function formatGeoCoordinates(citySlug: string) {
  const geoData = getCityGeocodeBySlug(citySlug);
  if (!geoData) return null;

  return {
    '@type': 'GeoCoordinates',
    latitude: geoData.coordinates.lat,
    longitude: geoData.coordinates.lng,
  };
}

/**
 * Get nearby cities for "Available Also In" sections
 */
export function getNearbyCities(citySlug: string, limit: number = 5) {
  const city = getCityGeocodeBySlug(citySlug);
  if (!city) return [];

  const nearby = getCitiesNearCoordinates(
    city.coordinates.lat,
    city.coordinates.lng,
    city.serviceRadius
  );

  // Filter out the current city and limit results
  return nearby.filter((c) => c.slug !== citySlug).slice(0, limit);
}

/**
 * Generate Schema.org Place object for a city
 */
export function generatePlaceSchema(citySlug: string) {
  const geoData = getCityGeocodeBySlug(citySlug);
  if (!geoData) return null;

  return {
    '@type': 'Place',
    name: geoData.name_ar,
    alternateName: geoData.name_en,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: geoData.coordinates.lat,
      longitude: geoData.coordinates.lng,
    },
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: geoData.region,
    },
  };
}

/**
 * Get recommended image dimensions based on city tier
 * Tier 1 cities get higher quality/larger images
 */
export function getRecommendedImageSize(citySlug: string): {
  width: number;
  height: number;
  quality: number;
} {
  const geoData = getCityGeocodeBySlug(citySlug);
  if (!geoData) {
    return { width: 1200, height: 800, quality: 85 };
  }

  switch (geoData.tier) {
    case 1:
      return { width: 1920, height: 1280, quality: 95 };
    case 2:
      return { width: 1600, height: 1067, quality: 90 };
    case 3:
      return { width: 1200, height: 800, quality: 85 };
    default:
      return { width: 1200, height: 800, quality: 85 };
  }
}

/**
 * Get service availability text based on service radius
 */
export function getServiceAvailabilityText(citySlug: string): string {
  const geoData = getCityGeocodeBySlug(citySlug);
  if (!geoData) return 'خدماتنا متاحة في جميع أنحاء المملكة';

  return `نغطي نطاقاً يصل إلى ${geoData.serviceRadius} كم من ${geoData.name_ar}`;
}

