/**
 * Geocoding Database for Saudi Arabian Cities
 * Contains precise GPS coordinates, service radius, and geographic metadata
 * for all 40+ cities covered by prokr.com
 */

export interface CityGeocode {
  slug: string;
  name_ar: string;
  name_en: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  serviceRadius: number; // in kilometers
  region: string; // المنطقة الإدارية
  province?: string; // المحافظة (if applicable)
  tier: 1 | 2 | 3;
  neighborhoods?: string[];
  timezone: string;
  population: 'large' | 'medium' | 'small';
  bounds?: {
    northeast: { lat: number; lng: number };
    southwest: { lat: number; lng: number };
  };
}

/**
 * Complete geocoding database for all Saudi cities
 * Coordinates sourced from Google Maps Geocoding API
 * Updated: November 2024
 */
export const CITIES_GEOCODE: CityGeocode[] = [
  // ==================== TIER 1 - Major Metropolitan Cities ====================
  {
    slug: 'riyadh',
    name_ar: 'الرياض',
    name_en: 'Riyadh',
    coordinates: { lat: 24.7136, lng: 46.6753 },
    serviceRadius: 50,
    region: 'منطقة الرياض',
    tier: 1,
    neighborhoods: ['العليا', 'الياسمين', 'النرجس', 'الملز', 'الصحافة', 'الملقا', 'العقيق'],
    timezone: 'Asia/Riyadh',
    population: 'large',
    bounds: {
      northeast: { lat: 24.9247, lng: 46.9224 },
      southwest: { lat: 24.4539, lng: 46.3972 },
    },
  },
  {
    slug: 'jeddah',
    name_ar: 'جدة',
    name_en: 'Jeddah',
    coordinates: { lat: 21.5433, lng: 39.1728 },
    serviceRadius: 50,
    region: 'منطقة مكة المكرمة',
    tier: 1,
    neighborhoods: ['السلامة', 'النهضة', 'الفيصلية', 'الحمدانية', 'الروضة', 'البساتين'],
    timezone: 'Asia/Riyadh',
    population: 'large',
    bounds: {
      northeast: { lat: 21.7814, lng: 39.3197 },
      southwest: { lat: 21.3891, lng: 39.0431 },
    },
  },
  {
    slug: 'makkah',
    name_ar: 'مكة المكرمة',
    name_en: 'Makkah',
    coordinates: { lat: 21.3891, lng: 39.8579 },
    serviceRadius: 40,
    region: 'منطقة مكة المكرمة',
    tier: 1,
    neighborhoods: ['العزيزية', 'الششة', 'الزاهر', 'المعابدة'],
    timezone: 'Asia/Riyadh',
    population: 'large',
    bounds: {
      northeast: { lat: 21.4858, lng: 39.9163 },
      southwest: { lat: 21.3542, lng: 39.7722 },
    },
  },
  {
    slug: 'madinah',
    name_ar: 'المدينة المنورة',
    name_en: 'Madinah',
    coordinates: { lat: 24.5247, lng: 39.5692 },
    serviceRadius: 40,
    region: 'منطقة المدينة المنورة',
    tier: 1,
    neighborhoods: ['العيون', 'قباء', 'الحزام الذهبي'],
    timezone: 'Asia/Riyadh',
    population: 'large',
    bounds: {
      northeast: { lat: 24.6139, lng: 39.6533 },
      southwest: { lat: 24.4011, lng: 39.4289 },
    },
  },
  {
    slug: 'dammam',
    name_ar: 'الدمام',
    name_en: 'Dammam',
    coordinates: { lat: 26.4207, lng: 50.0888 },
    serviceRadius: 45,
    region: 'المنطقة الشرقية',
    tier: 1,
    neighborhoods: ['الشاطئ', 'الفيصلية', 'الأمانة', 'الشعلة'],
    timezone: 'Asia/Riyadh',
    population: 'large',
    bounds: {
      northeast: { lat: 26.5417, lng: 50.2167 },
      southwest: { lat: 26.3219, lng: 49.9722 },
    },
  },

  // ==================== TIER 2 - Regional Hub Cities ====================
  {
    slug: 'khobar',
    name_ar: 'الخبر',
    name_en: 'Khobar',
    coordinates: { lat: 26.2172, lng: 50.1971 },
    serviceRadius: 35,
    region: 'المنطقة الشرقية',
    tier: 2,
    timezone: 'Asia/Riyadh',
    population: 'large',
    bounds: {
      northeast: { lat: 26.3583, lng: 50.2722 },
      southwest: { lat: 26.1611, lng: 50.1167 },
    },
  },
  {
    slug: 'dhahran',
    name_ar: 'الظهران',
    name_en: 'Dhahran',
    coordinates: { lat: 26.2946, lng: 50.1529 },
    serviceRadius: 30,
    region: 'المنطقة الشرقية',
    tier: 2,
    timezone: 'Asia/Riyadh',
    population: 'medium',
  },
  {
    slug: 'taif',
    name_ar: 'الطائف',
    name_en: 'Taif',
    coordinates: { lat: 21.2703, lng: 40.4158 },
    serviceRadius: 35,
    region: 'منطقة مكة المكرمة',
    tier: 2,
    timezone: 'Asia/Riyadh',
    population: 'large',
  },
  {
    slug: 'buraydah',
    name_ar: 'بريدة',
    name_en: 'Buraydah',
    coordinates: { lat: 26.3264, lng: 43.9750 },
    serviceRadius: 35,
    region: 'منطقة القصيم',
    tier: 2,
    timezone: 'Asia/Riyadh',
    population: 'large',
  },
  {
    slug: 'onaizah',
    name_ar: 'عنيزة',
    name_en: 'Unayzah',
    coordinates: { lat: 26.0879, lng: 43.9933 },
    serviceRadius: 30,
    region: 'منطقة القصيم',
    tier: 2,
    timezone: 'Asia/Riyadh',
    population: 'medium',
  },
  {
    slug: 'tabuk',
    name_ar: 'تبوك',
    name_en: 'Tabuk',
    coordinates: { lat: 28.3838, lng: 36.5550 },
    serviceRadius: 35,
    region: 'منطقة تبوك',
    tier: 2,
    timezone: 'Asia/Riyadh',
    population: 'large',
  },
  {
    slug: 'hail',
    name_ar: 'حائل',
    name_en: 'Hail',
    coordinates: { lat: 27.5114, lng: 41.6901 },
    serviceRadius: 35,
    region: 'منطقة حائل',
    tier: 2,
    timezone: 'Asia/Riyadh',
    population: 'large',
  },
  {
    slug: 'abha',
    name_ar: 'أبها',
    name_en: 'Abha',
    coordinates: { lat: 18.2164, lng: 42.5053 },
    serviceRadius: 35,
    region: 'منطقة عسير',
    tier: 2,
    timezone: 'Asia/Riyadh',
    population: 'large',
  },
  {
    slug: 'khamis-mushait',
    name_ar: 'خميس مشيط',
    name_en: 'Khamis Mushait',
    coordinates: { lat: 18.3067, lng: 42.7289 },
    serviceRadius: 30,
    region: 'منطقة عسير',
    tier: 2,
    timezone: 'Asia/Riyadh',
    population: 'large',
  },
  {
    slug: 'jazan',
    name_ar: 'جازان',
    name_en: 'Jazan',
    coordinates: { lat: 16.8892, lng: 42.5511 },
    serviceRadius: 35,
    region: 'منطقة جازان',
    tier: 2,
    timezone: 'Asia/Riyadh',
    population: 'large',
  },
  {
    slug: 'najran',
    name_ar: 'نجران',
    name_en: 'Najran',
    coordinates: { lat: 17.4924, lng: 44.1277 },
    serviceRadius: 35,
    region: 'منطقة نجران',
    tier: 2,
    timezone: 'Asia/Riyadh',
    population: 'large',
  },
  {
    slug: 'al-bahah',
    name_ar: 'الباحة',
    name_en: 'Al-Bahah',
    coordinates: { lat: 20.0129, lng: 41.4677 },
    serviceRadius: 30,
    region: 'منطقة الباحة',
    tier: 2,
    timezone: 'Asia/Riyadh',
    population: 'medium',
  },
  {
    slug: 'yanbu',
    name_ar: 'ينبع',
    name_en: 'Yanbu',
    coordinates: { lat: 24.0896, lng: 38.0618 },
    serviceRadius: 35,
    region: 'منطقة المدينة المنورة',
    tier: 2,
    timezone: 'Asia/Riyadh',
    population: 'large',
  },
  {
    slug: 'jubail',
    name_ar: 'الجبيل',
    name_en: 'Jubail',
    coordinates: { lat: 27.0174, lng: 49.6584 },
    serviceRadius: 35,
    region: 'المنطقة الشرقية',
    tier: 2,
    timezone: 'Asia/Riyadh',
    population: 'large',
  },
  {
    slug: 'qatif',
    name_ar: 'القطيف',
    name_en: 'Qatif',
    coordinates: { lat: 26.5654, lng: 50.0088 },
    serviceRadius: 30,
    region: 'المنطقة الشرقية',
    tier: 2,
    timezone: 'Asia/Riyadh',
    population: 'large',
  },
  {
    slug: 'al-ahsa',
    name_ar: 'الأحساء',
    name_en: 'Al-Ahsa',
    coordinates: { lat: 25.3780, lng: 49.5857 },
    serviceRadius: 40,
    region: 'المنطقة الشرقية',
    tier: 2,
    neighborhoods: ['الهفوف', 'المبرز'],
    timezone: 'Asia/Riyadh',
    population: 'large',
  },
  {
    slug: 'sakaka',
    name_ar: 'سكاكا',
    name_en: 'Sakaka',
    coordinates: { lat: 29.9697, lng: 40.2064 },
    serviceRadius: 30,
    region: 'منطقة الجوف',
    tier: 2,
    timezone: 'Asia/Riyadh',
    population: 'medium',
  },
  {
    slug: 'arar',
    name_ar: 'عرعر',
    name_en: 'Arar',
    coordinates: { lat: 30.9753, lng: 41.0381 },
    serviceRadius: 30,
    region: 'منطقة الحدود الشمالية',
    tier: 2,
    timezone: 'Asia/Riyadh',
    population: 'medium',
  },

  // ==================== TIER 3 - Secondary Cities ====================
  {
    slug: 'rabigh',
    name_ar: 'رابغ',
    name_en: 'Rabigh',
    coordinates: { lat: 22.7984, lng: 39.0342 },
    serviceRadius: 25,
    region: 'منطقة مكة المكرمة',
    province: 'محافظة رابغ',
    tier: 3,
    timezone: 'Asia/Riyadh',
    population: 'medium',
  },
  {
    slug: 'alqunfudhah',
    name_ar: 'القنفذة',
    name_en: 'Al Qunfudhah',
    coordinates: { lat: 19.1293, lng: 41.0780 },
    serviceRadius: 25,
    region: 'منطقة مكة المكرمة',
    province: 'محافظة القنفذة',
    tier: 3,
    timezone: 'Asia/Riyadh',
    population: 'medium',
  },
  {
    slug: 'al-lith',
    name_ar: 'الليث',
    name_en: 'Al-Lith',
    coordinates: { lat: 20.1599, lng: 40.2691 },
    serviceRadius: 20,
    region: 'منطقة مكة المكرمة',
    province: 'محافظة الليث',
    tier: 3,
    timezone: 'Asia/Riyadh',
    population: 'small',
  },
  {
    slug: 'bisha',
    name_ar: 'بيشة',
    name_en: 'Bisha',
    coordinates: { lat: 19.9842, lng: 42.6063 },
    serviceRadius: 25,
    region: 'منطقة عسير',
    province: 'محافظة بيشة',
    tier: 3,
    timezone: 'Asia/Riyadh',
    population: 'medium',
  },
  {
    slug: 'muhayil',
    name_ar: 'محايل',
    name_en: 'Muhayil',
    coordinates: { lat: 18.5115, lng: 42.0453 },
    serviceRadius: 25,
    region: 'منطقة عسير',
    province: 'محافظة محايل',
    tier: 3,
    timezone: 'Asia/Riyadh',
    population: 'medium',
  },
  {
    slug: 'umluj',
    name_ar: 'أملج',
    name_en: 'Umluj',
    coordinates: { lat: 25.0226, lng: 37.2685 },
    serviceRadius: 20,
    region: 'منطقة تبوك',
    province: 'محافظة أملج',
    tier: 3,
    timezone: 'Asia/Riyadh',
    population: 'small',
  },
  {
    slug: 'duba',
    name_ar: 'ضباء',
    name_en: 'Duba',
    coordinates: { lat: 27.3500, lng: 35.6922 },
    serviceRadius: 20,
    region: 'منطقة تبوك',
    province: 'محافظة ضباء',
    tier: 3,
    timezone: 'Asia/Riyadh',
    population: 'small',
  },
  {
    slug: 'tayma',
    name_ar: 'تيماء',
    name_en: 'Tayma',
    coordinates: { lat: 27.6310, lng: 38.4974 },
    serviceRadius: 20,
    region: 'منطقة تبوك',
    province: 'محافظة تيماء',
    tier: 3,
    timezone: 'Asia/Riyadh',
    population: 'small',
  },
  {
    slug: 'hafr-al-batin',
    name_ar: 'حفر الباطن',
    name_en: 'Hafr Al-Batin',
    coordinates: { lat: 28.4327, lng: 45.9603 },
    serviceRadius: 25,
    region: 'المنطقة الشرقية',
    province: 'محافظة حفر الباطن',
    tier: 3,
    timezone: 'Asia/Riyadh',
    population: 'medium',
  },
  {
    slug: 'ras-tanura',
    name_ar: 'رأس تنورة',
    name_en: 'Ras Tanura',
    coordinates: { lat: 26.6514, lng: 50.1647 },
    serviceRadius: 20,
    region: 'المنطقة الشرقية',
    province: 'محافظة رأس تنورة',
    tier: 3,
    timezone: 'Asia/Riyadh',
    population: 'small',
  },
  {
    slug: 'safwa',
    name_ar: 'صفوى',
    name_en: 'Safwa',
    coordinates: { lat: 26.6532, lng: 49.9456 },
    serviceRadius: 20,
    region: 'المنطقة الشرقية',
    province: 'محافظة القطيف',
    tier: 3,
    timezone: 'Asia/Riyadh',
    population: 'small',
  },
  {
    slug: 'sayhat',
    name_ar: 'سيهات',
    name_en: 'Sayhat',
    coordinates: { lat: 26.4826, lng: 50.0483 },
    serviceRadius: 20,
    region: 'المنطقة الشرقية',
    province: 'محافظة القطيف',
    tier: 3,
    timezone: 'Asia/Riyadh',
    population: 'small',
  },
  {
    slug: 'az-zulfi',
    name_ar: 'الزلفي',
    name_en: 'Az-Zulfi',
    coordinates: { lat: 26.2993, lng: 44.8077 },
    serviceRadius: 25,
    region: 'منطقة الرياض',
    province: 'محافظة الزلفي',
    tier: 3,
    timezone: 'Asia/Riyadh',
    population: 'medium',
  },
  {
    slug: 'al-majmah',
    name_ar: 'المجمعة',
    name_en: 'Al-Majmaah',
    coordinates: { lat: 25.9042, lng: 45.3601 },
    serviceRadius: 25,
    region: 'منطقة الرياض',
    province: 'محافظة المجمعة',
    tier: 3,
    timezone: 'Asia/Riyadh',
    population: 'medium',
  },
  {
    slug: 'wadi-ad-dawasir',
    name_ar: 'وادي الدواسر',
    name_en: 'Wadi Ad-Dawasir',
    coordinates: { lat: 20.5048, lng: 44.7925 },
    serviceRadius: 25,
    region: 'منطقة الرياض',
    province: 'محافظة وادي الدواسر',
    tier: 3,
    timezone: 'Asia/Riyadh',
    population: 'medium',
  },
];

/**
 * Get geocode data for a specific city by slug
 */
export function getCityGeocodeBySlug(slug: string): CityGeocode | undefined {
  return CITIES_GEOCODE.find((city) => city.slug === slug);
}

/**
 * Get all cities in a specific region
 */
export function getCitiesByRegion(region: string): CityGeocode[] {
  return CITIES_GEOCODE.filter((city) => city.region === region);
}

/**
 * Get cities within a certain distance from coordinates
 */
export function getCitiesNearCoordinates(
  lat: number,
  lng: number,
  maxDistanceKm: number
): CityGeocode[] {
  return CITIES_GEOCODE.filter((city) => {
    const distance = calculateDistance(
      lat,
      lng,
      city.coordinates.lat,
      city.coordinates.lng
    );
    return distance <= maxDistanceKm;
  });
}

/**
 * Calculate distance between two coordinates using Haversine formula
 * Returns distance in kilometers
 */
export function calculateDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const R = 6371; // Radius of Earth in kilometers
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

/**
 * Check if coordinates are within city bounds
 */
export function isWithinCityBounds(
  lat: number,
  lng: number,
  citySlug: string
): boolean {
  const city = getCityGeocodeBySlug(citySlug);
  if (!city || !city.bounds) return false;

  return (
    lat <= city.bounds.northeast.lat &&
    lat >= city.bounds.southwest.lat &&
    lng <= city.bounds.northeast.lng &&
    lng >= city.bounds.southwest.lng
  );
}

/**
 * Get nearest city to given coordinates
 */
export function getNearestCity(lat: number, lng: number): CityGeocode | null {
  if (CITIES_GEOCODE.length === 0) return null;

  let nearestCity = CITIES_GEOCODE[0];
  let minDistance = calculateDistance(
    lat,
    lng,
    nearestCity.coordinates.lat,
    nearestCity.coordinates.lng
  );

  for (const city of CITIES_GEOCODE) {
    const distance = calculateDistance(
      lat,
      lng,
      city.coordinates.lat,
      city.coordinates.lng
    );
    if (distance < minDistance) {
      minDistance = distance;
      nearestCity = city;
    }
  }

  return nearestCity;
}

/**
 * Get service coverage area (cities within service radius)
 */
export function getServiceCoverage(citySlug: string): string[] {
  const city = getCityGeocodeBySlug(citySlug);
  if (!city) return [];

  const nearbyCities = getCitiesNearCoordinates(
    city.coordinates.lat,
    city.coordinates.lng,
    city.serviceRadius
  );

  return nearbyCities.map((c) => c.slug);
}

/**
 * Get all Tier 1 cities
 */
export function getTier1Cities(): CityGeocode[] {
  return CITIES_GEOCODE.filter((city) => city.tier === 1);
}

/**
 * Get all Tier 2 cities
 */
export function getTier2Cities(): CityGeocode[] {
  return CITIES_GEOCODE.filter((city) => city.tier === 2);
}

/**
 * Get all Tier 3 cities
 */
export function getTier3Cities(): CityGeocode[] {
  return CITIES_GEOCODE.filter((city) => city.tier === 3);
}

/**
 * Get cities by tier level
 */
export function getCitiesByTier(tier: 1 | 2 | 3): CityGeocode[] {
  return CITIES_GEOCODE.filter((city) => city.tier === tier);
}

