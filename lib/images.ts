/**
 * Image mapping for all services and subservices
 * Maps service/subservice slugs to their corresponding images
 */

export interface ServiceImages {
  hero: string[]; // Hero/main images
  gallery?: string[]; // Additional gallery images
  icon?: string; // Optional icon
}

// Complete image mapping for all services
export const SERVICE_IMAGES: Record<string, ServiceImages> = {
  // Moving / نقل العفش
  moving: {
    hero: [
      '/images/moving/furniture-moving-company.jpg',
      '/images/moving/professional-moving-team.jpg',
      '/images/moving/movers-and-packers-Jeddah.jpg',
      '/images/moving/best-moving-company-Riyadh.jpg',
    ],
    gallery: [
      '/images/moving/villa-moving-service.jpg',
      '/images/moving/apartment-movers.jpg',
      '/images/moving/office-moving-services.jpg',
      '/images/moving/furniture-packing-service.jpg',
      '/images/moving/moving-company-with-lifting-tools.jpg',
      '/images/moving/storage-and-moving-company.jpg',
    ],
  },
  'apartment-moving': {
    hero: [
      '/images/moving/apartment-movers.jpg',
      '/images/moving/house-shifting-service.jpg',
      '/images/moving/household-items-shifting.jpg',
    ],
  },
  'villa-moving': {
    hero: [
      '/images/moving/villa-moving-service.jpg',
      '/images/moving/home-relocation-Saudi-Arabia.jpg',
      '/images/moving/full-service-movers.jpg',
    ],
  },
  'office-moving': {
    hero: [
      '/images/moving/office-moving-services.jpg',
      '/images/moving/commercial-moving-company.jpg',
    ],
  },
  'disassembly-assembly': {
    hero: ['/images/moving/dismantling-and-assembling-furniture.jpg'],
  },
  'furniture-packing': {
    hero: [
      '/images/moving/furniture-packing-service.jpg',
      '/images/moving/furniture-wrapping-and-packing.jpg',
      '/images/moving/professional-packers-and-movers.jpg',
    ],
  },
  'crane-lifting': {
    hero: ['/images/moving/moving-company-with-lifting-tools.jpg'],
  },
  'city-to-city': {
    hero: [
      '/images/moving/intercity-moving-Saudi-Arabia.jpg',
      '/images/moving/long-distance-movers.jpg',
    ],
  },
  storage: {
    hero: [
      '/images/moving/storage-and-moving-company.jpg',
      '/images/moving/moving-and-storage-Riyadh.jpg',
    ],
  },

  // Cleaning / التنظيف
  cleaning: {
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
      '/images/cleaning/carpet-cleaning-Dammam.jpg',
      '/images/cleaning/water-tank-cleaning-Saudi-Arabia.jpg',
    ],
  },
  'hourly-cleaning': {
    hero: [
      '/images/cleaning/hourly-maid-service.jpg',
      '/images/cleaning/part-time-cleaner-Riyadh.jpg',
    ],
  },
  'deep-cleaning': {
    hero: [
      '/images/cleaning/deep-cleaning-Jeddah.jpg',
      '/images/cleaning/house-deep-cleaning-Jeddah.jpg',
    ],
  },
  'post-construction': {
    hero: ['/images/cleaning/post-construction-cleaning.jpg'],
  },
  'tank-cleaning': {
    hero: ['/images/cleaning/water-tank-cleaning-Saudi-Arabia.jpg'],
  },
  'carpet-rug': {
    hero: ['/images/cleaning/carpet-cleaning-Dammam.jpg'],
  },
  'sofa-curtains': {
    hero: [
      '/images/cleaning/sofa-cleaning-Jeddah.jpg',
      '/images/cleaning/sofa-shampoo-cleaning.jpg',
      '/images/cleaning/curtain-cleaning-service.jpg',
    ],
  },
  sanitization: {
    hero: [
      '/images/cleaning/disinfection-and-sanitization.jpg',
      '/images/cleaning/cleaning-and-sterilization.jpg',
    ],
  },
  'marble-polishing': {
    hero: ['/images/cleaning/marble-floor-polishing.jpg'],
  },
  'facade-cleaning': {
    hero: ['/images/cleaning/glass-and-window-cleaning.jpg'],
  },

  // Leaks & Plumbing / كشف التسربات والسباكة
  'leaks-plumbing': {
    hero: [
      '/images/leaks-plumbing/water-leak-detection-Riyadh.jpg',
      '/images/leaks-plumbing/leak-detection-services-Saudi-Arabia.jpg',
      '/images/leaks-plumbing/thermal-leak-detection.jpg',
      '/images/leaks-plumbing/plumbing-services-Saudi-Arabia.jpg',
    ],
    gallery: [
      '/images/leaks-plumbing/bathroom-leak-repair.jpg',
      '/images/leaks-plumbing/kitchen-plumbing-services.jpg',
      '/images/leaks-plumbing/drain-cleaning-service.jpg',
      '/images/leaks-plumbing/water-pipe-repair.jpg',
      '/images/leaks-plumbing/tank-leak-detection.jpg',
      '/images/leaks-plumbing/waterproofing-services-Saudi-Arabia.jpg',
    ],
  },
  'thermal-leak-detection': {
    hero: [
      '/images/leaks-plumbing/thermal-leak-detection.jpg',
      '/images/leaks-plumbing/infrared-leak-detection.jpg',
    ],
  },
  'acoustic-leak-detection': {
    hero: ['/images/leaks-plumbing/acoustic-leak-detection.jpg'],
  },
  'pipe-repair': {
    hero: [
      '/images/leaks-plumbing/water-pipe-repair.jpg',
      '/images/leaks-plumbing/pipe-installation-Saudi-Arabia.jpg',
    ],
  },
  'drain-unclogging': {
    hero: [
      '/images/leaks-plumbing/drain-cleaning-service.jpg',
      '/images/leaks-plumbing/sewer-line-cleaning.jpg',
    ],
  },
  'bathroom-kitchen-waterproofing': {
    hero: [
      '/images/leaks-plumbing/bathroom-waterproofing-Jeddah.jpg',
      '/images/leaks-plumbing/kitchen-waterproofing-service.jpg',
      '/images/leaks-plumbing/waterproofing-services-Saudi-Arabia.jpg',
    ],
  },

  // Pest Control / مكافحة الحشرات
  'pest-control': {
    hero: [
      '/images/pest-control/pest-control-Saudi-Arabia.jpg',
      '/images/pest-control/pest-control-Riyadh.jpg',
      '/images/pest-control/pest-extermination-services.jpg',
      '/images/pest-control/professional-pest-control.jpg',
    ],
    gallery: [
      '/images/pest-control/cockroach-control.jpg',
      '/images/pest-control/termite-control-Saudi-Arabia.jpg',
      '/images/pest-control/bed-bug-treatment.jpg',
      '/images/pest-control/rodent-control-Jeddah.jpg',
      '/images/pest-control/ant-control-service.jpg',
      '/images/pest-control/residential-pest-control.jpg',
    ],
  },
  'general-spray': {
    hero: [
      '/images/pest-control/general-pest-spray.jpg',
      '/images/pest-control/home-pest-control.jpg',
    ],
  },
  cockroaches: {
    hero: [
      '/images/pest-control/cockroach-control.jpg',
      '/images/pest-control/cockroach-extermination.jpg',
    ],
  },
  ants: {
    hero: ['/images/pest-control/ant-control-service.jpg'],
  },
  rodents: {
    hero: [
      '/images/pest-control/rodent-control-Jeddah.jpg',
      '/images/pest-control/rat-control-service.jpg',
    ],
  },
  'bed-bugs': {
    hero: [
      '/images/pest-control/bed-bug-treatment.jpg',
      '/images/pest-control/bed-bug-control-Riyadh.jpg',
    ],
  },
  termites: {
    hero: [
      '/images/pest-control/termite-control-Saudi-Arabia.jpg',
      '/images/pest-control/termite-treatment-Riyadh.jpg',
    ],
  },

  // AC / التكييف
  ac: {
    hero: [
      '/images/ac/AC-maintenance.jpg',
      '/images/ac/Air-conditioner-repair.jpg',
      '/images/ac/HVAC-services.jpg',
      '/images/ac/AC-installation.jpg',
    ],
    gallery: [
      '/images/ac/Split-AC-installation.jpg',
      '/images/ac/Central-AC-service.jpg',
      '/images/ac/AC-cleaning-and-maintenance.jpg',
      '/images/ac/AC-duct-cleaning.jpg',
      '/images/ac/AC-gas-refilling.jpg',
      '/images/ac/AC-troubleshooting.jpg',
    ],
  },
  'split-ac-cleaning': {
    hero: [
      '/images/ac/Air-conditioning-cleaning.jpg',
      '/images/ac/AC-cleaning-and-maintenance.jpg',
    ],
  },
  'duct-cleaning': {
    hero: ['/images/ac/AC-duct-cleaning.jpg'],
  },
  'maintenance-repair': {
    hero: [
      '/images/ac/AC-maintenance.jpg',
      '/images/ac/AC-troubleshooting.jpg',
      '/images/ac/Air-conditioner-repair.jpg',
    ],
  },
  'freon-refill': {
    hero: ['/images/ac/AC-gas-refilling.jpg'],
  },
  'ac-installation': {
    hero: [
      '/images/ac/AC-installation.jpg',
      '/images/ac/Split-AC-installation.jpg',
    ],
  },

  // Electricity / الكهرباء
  electricity: {
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
      '/images/electricity/electrical-panel-upgrade.jpg',
      '/images/electricity/emergency-electrician.jpg',
      '/images/electricity/smart-home-electrical-setup.jpg',
    ],
  },
  'electrical-faults': {
    hero: [
      '/images/electricity/electrical-troubleshooting.jpg',
      '/images/electricity/short-circuit-repair.jpg',
      '/images/electricity/emergency-electrician.jpg',
    ],
  },
  'panels-distribution': {
    hero: [
      '/images/electricity/electrical-panel-upgrade.jpg',
      '/images/electricity/power-panel-repair.jpg',
      '/images/electricity/fuse-box-installation.jpg',
    ],
  },
  'wiring-lighting': {
    hero: [
      '/images/electricity/wiring-installation-Saudi-Arabia.jpg',
      '/images/electricity/lighting-installation-service.jpg',
      '/images/electricity/LED-lighting-design.jpg',
    ],
  },

  // Painting & Gypsum / الدهانات والجبس
  'painting-gypsum': {
    hero: [
      '/images/painting-gypsum/Interior-painting-Riyadh.jpg',
      '/images/painting-gypsum/exterior-painting-services.jpg',
      '/images/painting-gypsum/professional-painting-company.jpg',
      '/images/painting-gypsum/gypsum-board-installation.jpg',
    ],
    gallery: [
      '/images/painting-gypsum/wall-painting-Jeddah.jpg',
      '/images/painting-gypsum/residential-painting-Saudi-Arabia.jpg',
      '/images/painting-gypsum/gypsum-ceiling-design.jpg',
      '/images/painting-gypsum/wallpaper-installation.jpg',
      '/images/painting-gypsum/commercial-painting-services.jpg',
    ],
  },
  'interior-painting': {
    hero: [
      '/images/painting-gypsum/Interior-painting-Riyadh.jpg',
      '/images/painting-gypsum/residential-painting-Saudi-Arabia.jpg',
    ],
  },
  'exterior-painting': {
    hero: ['/images/painting-gypsum/exterior-painting-services.jpg'],
  },
  wallpaper: {
    hero: ['/images/painting-gypsum/wallpaper-installation.jpg'],
  },
  'gypsum-board': {
    hero: [
      '/images/painting-gypsum/gypsum-board-installation.jpg',
      '/images/painting-gypsum/gypsum-ceiling-design.jpg',
    ],
  },
};

/**
 * Get hero image for a service or subservice
 */
export function getHeroImage(slug: string, index: number = 0): string {
  const images = SERVICE_IMAGES[slug];
  if (images?.hero && images.hero[index]) {
    return images.hero[index];
  }
  // Fallback to first hero image or default
  return images?.hero?.[0] || '/images/Logo.png';
}

/**
 * Get all hero images for a service
 */
export function getAllHeroImages(slug: string): string[] {
  return SERVICE_IMAGES[slug]?.hero || [];
}

/**
 * Get gallery images for a service
 */
export function getGalleryImages(slug: string): string[] {
  return SERVICE_IMAGES[slug]?.gallery || SERVICE_IMAGES[slug]?.hero || [];
}

/**
 * Get random hero image for a service
 */
export function getRandomHeroImage(slug: string): string {
  const images = SERVICE_IMAGES[slug]?.hero;
  if (!images || images.length === 0) {
    return '/images/Logo.png';
  }
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

/**
 * Get multiple random images for a service
 */
export function getRandomImages(slug: string, count: number): string[] {
  const allImages = [
    ...(SERVICE_IMAGES[slug]?.hero || []),
    ...(SERVICE_IMAGES[slug]?.gallery || []),
  ];
  
  if (allImages.length === 0) {
    return ['/images/Logo.png'];
  }
  
  // Shuffle and take first 'count' images
  const shuffled = [...allImages].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

/**
 * Check if service has images
 */
export function hasImages(slug: string): boolean {
  const images = SERVICE_IMAGES[slug];
  return !!(images?.hero && images.hero.length > 0);
}

/**
 * Get image for service card (first hero image)
 */
export function getServiceCardImage(serviceSlug: string): string {
  return getHeroImage(serviceSlug, 0);
}

