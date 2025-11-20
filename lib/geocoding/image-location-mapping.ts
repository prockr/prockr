/**
 * Image Location Mapping System
 * Maps service images to specific cities and regions for optimal local SEO
 * and contextually relevant image serving
 */

export interface ServiceImageMapping {
  serviceSlug: string;
  applicableCities: 'all' | string[]; // 'all' or array of city slugs
  primaryCities: string[]; // Cities where this image is most relevant
  imageVariants?: {
    citySlug: string;
    imagePath: string;
    description: string; // For SEO alt tags
  }[];
  defaultImages: {
    hero: string[];
    gallery?: string[];
  };
}

/**
 * Complete image-to-location mapping for all services
 */
export const IMAGE_LOCATION_MAP: ServiceImageMapping[] = [
  // ==================== نقل العفش (Moving) ====================
  {
    serviceSlug: 'moving',
    applicableCities: 'all',
    primaryCities: ['riyadh', 'jeddah', 'dammam', 'makkah', 'madinah'],
    imageVariants: [
      {
        citySlug: 'riyadh',
        imagePath: '/images/moving/furniture-moving-company.jpg',
        description: 'شركة نقل عفش في الرياض - بروكر',
      },
      {
        citySlug: 'jeddah',
        imagePath: '/images/moving/movers-and-packers-Jeddah.jpg',
        description: 'خدمة نقل عفش في جدة - بروكر',
      },
    ],
    defaultImages: {
      hero: [
        '/images/moving/furniture-moving-company.jpg',
        '/images/moving/professional-moving-team.jpg',
        '/images/moving/best-moving-company-Riyadh.jpg',
      ],
      gallery: [
        '/images/moving/villa-moving-service.jpg',
        '/images/moving/apartment-movers.jpg',
        '/images/moving/office-moving-services.jpg',
        '/images/moving/furniture-packing-service.jpg',
      ],
    },
  },

  // ==================== التنظيف (Cleaning) ====================
  {
    serviceSlug: 'cleaning',
    applicableCities: 'all',
    primaryCities: ['riyadh', 'jeddah', 'dammam', 'makkah', 'madinah'],
    defaultImages: {
      hero: [
        '/images/cleaning/professional-cleaning-company.jpg',
        '/images/cleaning/best-cleaning-company-in-Saudi-Arabia.jpg',
        '/images/cleaning/cleaning-services-in-Saudi-Arabia.jpg',
        '/images/cleaning/home-cleaning-Riyadh.jpg',
      ],
      gallery: [
        '/images/cleaning/deep-cleaning-Jeddah.jpg',
        '/images/cleaning/villa-cleaning-service.jpg',
        '/images/cleaning/office-cleaning-Saudi-Arabia.jpg',
        '/images/cleaning/sofa-cleaning-Jeddah.jpg',
      ],
    },
  },

  // ==================== كشف التسربات والسباكة (Leaks & Plumbing) ====================
  {
    serviceSlug: 'leaks-plumbing',
    applicableCities: 'all',
    primaryCities: ['riyadh', 'jeddah', 'dammam'],
    defaultImages: {
      hero: [
        '/images/leaks-plumbing/water-leak-detection-Riyadh.jpg',
        '/images/leaks-plumbing/leak-detection-service-Saudi-Arabia.jpg',
        '/images/leaks-plumbing/thermal-leak-inspection-Riyadh.jpg',
        '/images/leaks-plumbing/plumbing-services-Riyadh.jpg',
      ],
      gallery: [
        '/images/leaks-plumbing/bathroom-leak-repair-Riyadh.jpg',
        '/images/leaks-plumbing/kitchen-leak-detection-Jeddah.jpg',
        '/images/leaks-plumbing/drain-pipe-inspection-Jeddah.jpg',
      ],
    },
  },

  // ==================== مكافحة الحشرات (Pest Control) ====================
  {
    serviceSlug: 'pest-control',
    applicableCities: 'all',
    primaryCities: ['riyadh', 'jeddah', 'dammam'],
    defaultImages: {
      hero: [
        '/images/pest-control/pest-control-Saudi-Arabia.jpg',
        '/images/pest-control/pest-control-Riyadh.jpg',
        '/images/pest-control/pest-extermination-Dammam.jpg',
        '/images/pest-control/professional-pest-exterminators.jpg',
      ],
      gallery: [
        '/images/pest-control/cockroach-extermination.jpg',
        '/images/pest-control/termite-treatment-Saudi-Arabia.jpg',
        '/images/pest-control/bed-bug-removal-Jeddah.jpg',
      ],
    },
  },

  // ==================== التكييف (AC) ====================
  {
    serviceSlug: 'ac',
    applicableCities: 'all',
    primaryCities: ['riyadh', 'jeddah', 'dammam', 'makkah', 'madinah'],
    defaultImages: {
      hero: [
        '/images/ac/AC-maintenance.jpg',
        '/images/ac/Air-conditioner-repair.jpg',
        '/images/ac/HVAC-services.jpg',
        '/images/ac/AC-installation.jpg',
      ],
      gallery: [
        '/images/ac/Split-AC-installation.jpg',
        '/images/ac/Central-AC-service.jpg',
        '/images/cleaning/AC-cleaning-and-maintenance.jpg',
      ],
    },
  },

  // ==================== الكهرباء (Electricity) ====================
  {
    serviceSlug: 'electricity',
    applicableCities: 'all',
    primaryCities: ['riyadh', 'jeddah', 'dammam'],
    defaultImages: {
      hero: [
        '/images/electricity/electrical-repair-services.jpg',
        '/images/electricity/electrician-in-Saudi-Arabia.jpg',
        '/images/electricity/electrical-maintenance-company.jpg',
        '/images/electricity/licensed-electrician-Saudi-Arabia.jpg',
      ],
      gallery: [
        '/images/electricity/electrical-wiring-maintenance.jpg',
        '/images/electricity/circuit-breaker-replacement.jpg',
        '/images/electricity/lighting-installation-service.jpg',
      ],
    },
  },

  // ==================== الدهانات والجبس (Painting & Gypsum) ====================
  {
    serviceSlug: 'painting-gypsum',
    applicableCities: 'all',
    primaryCities: ['riyadh', 'jeddah', 'dammam'],
    defaultImages: {
      hero: [
        '/images/painting-gypsum/Interior-painting-Riyadh.jpg',
        '/images/painting-gypsum/Exterior-painting-Jeddah.jpg',
        '/images/painting-gypsum/Professional-painters-KSA.jpg',
        '/images/painting-gypsum/Gypsum-partitions.jpg',
      ],
      gallery: [
        '/images/painting-gypsum/Wall-painting-company.jpg',
        '/images/painting-gypsum/House-painting-services.jpg',
        '/images/painting-gypsum/False-ceiling-lights.jpg',
      ],
    },
  },

  // ==================== النجارة (Carpentry) ====================
  {
    serviceSlug: 'carpentry',
    applicableCities: 'all',
    primaryCities: ['riyadh', 'jeddah', 'dammam'],
    defaultImages: {
      hero: [
        '/images/carpentry/Carpentry services.jpg',
        '/images/carpentry/Custom furniture.jpg',
        '/images/carpentry/Home carpentry.jpg',
        '/images/carpentry/Saudi carpenters.jpg',
      ],
      gallery: [
        '/images/carpentry/Kitchen cabinets.jpg',
        '/images/carpentry/Door installation.jpg',
        '/images/carpentry/Wardrobe design.jpg',
        '/images/carpentry/Furniture repair.jpg',
      ],
    },
  },

  // ==================== الألمنيوم والزجاج (Aluminum & Glass) ====================
  {
    serviceSlug: 'aluminum-glass',
    applicableCities: 'all',
    primaryCities: ['riyadh', 'jeddah', 'dammam'],
    defaultImages: {
      hero: [
        '/images/aluminum-glass/Aluminum Windows.jpg',
        '/images/aluminum-glass/Glass Installation Services.jpg',
        '/images/aluminum-glass/Sliding Glass Doors.jpg',
        '/images/aluminum-glass/Frameless Glass Systems.jpg',
      ],
      gallery: [
        '/images/aluminum-glass/Aluminum Fabrication.jpg',
        '/images/aluminum-glass/Glass Partition Installation.jpg',
        '/images/aluminum-glass/Aluminum Cladding.jpg',
      ],
    },
  },

  // ==================== الأرضيات (Flooring) ====================
  {
    serviceSlug: 'flooring',
    applicableCities: 'all',
    primaryCities: ['riyadh', 'jeddah', 'dammam'],
    defaultImages: {
      hero: [
        '/images/cleaning/marble-floor-polishing.jpg',
        '/images/cleaning/floor-cleaning-service.jpg',
        '/images/painting-gypsum/Epoxy-flooring-Saudi-Arabia.jpg',
      ],
    },
  },

  // ==================== العزل والأسطح (Insulation & Roofs) ====================
  {
    serviceSlug: 'insulation-roofs',
    applicableCities: 'all',
    primaryCities: ['riyadh', 'jeddah', 'dammam', 'makkah', 'madinah'],
    defaultImages: {
      hero: [
        '/images/insulation-roofs/Roof waterproofing Saudi Arabia.jpg',
        '/images/insulation-roofs/Thermal insulation.jpg',
        '/images/insulation-roofs/Roof insulation.jpg',
        '/images/insulation-roofs/Building insulation services.jpg',
      ],
      gallery: [
        '/images/insulation-roofs/Waterproofing services.jpg',
        '/images/insulation-roofs/Heat-resistant coating.jpg',
        '/images/insulation-roofs/Roof protection.jpg',
      ],
    },
  },

  // ==================== الأجهزة المنزلية (Appliances) ====================
  {
    serviceSlug: 'appliances',
    applicableCities: 'all',
    primaryCities: ['riyadh', 'jeddah', 'dammam'],
    defaultImages: {
      hero: [
        '/images/appliances/Home appliance repair.jpg',
        '/images/appliances/Appliance technician Saudi Arabia.jpg',
        '/images/appliances/Home appliance maintenance.jpg',
        '/images/appliances/Emergency appliance repair service.jpg',
      ],
      gallery: [
        '/images/appliances/Washing machine repair.jpg',
        '/images/appliances/Refrigerator repair service.jpg',
        '/images/appliances/Oven and stove maintenance.jpg',
      ],
    },
  },

  // ==================== تنسيق الحدائق (Landscaping) ====================
  {
    serviceSlug: 'landscaping',
    applicableCities: 'all',
    primaryCities: ['riyadh', 'jeddah', 'dammam', 'taif'],
    defaultImages: {
      hero: [
        '/images/landscaping/garden landscaping.jpg',
        '/images/landscaping/landscape design.jpg',
        '/images/landscaping/garden maintenance.jpg',
        '/images/landscaping/garden decoration.jpg',
      ],
      gallery: [
        '/images/landscaping/lawn installation.jpg',
        '/images/landscaping/palm tree planting.jpg',
        '/images/landscaping/garden irrigation system.jpg',
      ],
    },
  },

  // ==================== سطحة ونقل سيارات (Car Towing) ====================
  {
    serviceSlug: 'car-towing',
    applicableCities: 'all',
    primaryCities: ['riyadh', 'jeddah', 'dammam', 'makkah', 'madinah'],
    defaultImages: {
      hero: [
        '/images/car-towing/Car towing service.jpg',
        '/images/car-towing/Car transport services.jpg',
        '/images/car-towing/Auto transport company.jpg',
        '/images/car-towing/Vehicle shipping Saudi Arabia.jpg',
      ],
      gallery: [
        '/images/car-towing/Car carrier service.jpg',
        '/images/car-towing/Door-to-door car delivery.jpg',
        '/images/car-towing/Long-distance car transport.jpg',
      ],
    },
  },
];

/**
 * Get optimal image for a service in a specific city
 */
export function getOptimalServiceImage(
  serviceSlug: string,
  citySlug: string,
  imageType: 'hero' | 'gallery' = 'hero'
): string {
  const mapping = IMAGE_LOCATION_MAP.find((m) => m.serviceSlug === serviceSlug);
  if (!mapping) return '/images/Logo.png';

  // Check for city-specific variant
  const variant = mapping.imageVariants?.find((v) => v.citySlug === citySlug);
  if (variant) return variant.imagePath;

  // Return default image based on type
  const images =
    imageType === 'hero'
      ? mapping.defaultImages.hero
      : mapping.defaultImages.gallery || mapping.defaultImages.hero;

  return images[0] || '/images/Logo.png';
}

/**
 * Get all images for a service in a city
 */
export function getAllServiceImages(
  serviceSlug: string,
  citySlug: string
): { hero: string[]; gallery: string[] } {
  const mapping = IMAGE_LOCATION_MAP.find((m) => m.serviceSlug === serviceSlug);
  if (!mapping) {
    return { hero: ['/images/Logo.png'], gallery: [] };
  }

  // Check if city has custom variants
  const cityVariants = mapping.imageVariants?.filter((v) => v.citySlug === citySlug) || [];

  if (cityVariants.length > 0) {
    return {
      hero: cityVariants.map((v) => v.imagePath),
      gallery: mapping.defaultImages.gallery || [],
    };
  }

  // Return default images
  return {
    hero: mapping.defaultImages.hero,
    gallery: mapping.defaultImages.gallery || [],
  };
}

/**
 * Generate location-specific image alt tag (Arabic)
 */
export function generateImageAltTag(
  serviceNameAr: string,
  cityNameAr: string
): string {
  return `خدمة ${serviceNameAr} في ${cityNameAr} - بروكر Prokr | أفضل الأسعار والجودة`;
}

/**
 * Generate location-specific image title tag
 */
export function generateImageTitleTag(
  serviceNameAr: string,
  cityNameAr: string
): string {
  return `${serviceNameAr} في ${cityNameAr} | بروكر - خدمات منزلية محترفة`;
}

/**
 * Check if service has city-specific images
 */
export function hasCitySpecificImages(serviceSlug: string, citySlug: string): boolean {
  const mapping = IMAGE_LOCATION_MAP.find((m) => m.serviceSlug === serviceSlug);
  if (!mapping || !mapping.imageVariants) return false;

  return mapping.imageVariants.some((v) => v.citySlug === citySlug);
}

/**
 * Get image description for SEO
 */
export function getImageDescription(serviceSlug: string, citySlug: string): string {
  const mapping = IMAGE_LOCATION_MAP.find((m) => m.serviceSlug === serviceSlug);
  if (!mapping) return '';

  const variant = mapping.imageVariants?.find((v) => v.citySlug === citySlug);
  return variant?.description || '';
}

/**
 * Check if service is applicable to a city
 */
export function isServiceApplicableToCity(serviceSlug: string, citySlug: string): boolean {
  const mapping = IMAGE_LOCATION_MAP.find((m) => m.serviceSlug === serviceSlug);
  if (!mapping) return false;

  if (mapping.applicableCities === 'all') return true;
  return mapping.applicableCities.includes(citySlug);
}

/**
 * Get primary cities for a service (for prioritizing images)
 */
export function getPrimaryCitiesForService(serviceSlug: string): string[] {
  const mapping = IMAGE_LOCATION_MAP.find((m) => m.serviceSlug === serviceSlug);
  return mapping?.primaryCities || [];
}

