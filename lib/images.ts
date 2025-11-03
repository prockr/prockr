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
  'moving-boxes': {
    hero: [
      '/images/moving/furniture-wrapping-and-packing.jpg',
      '/images/moving/furniture-packing-service.jpg',
    ],
  },
  'insurance-warranty': {
    hero: [
      '/images/moving/insured-moving-company.jpg',
      '/images/moving/moving-service-with-warranty.jpg',
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
      '/images/leaks-plumbing/leak-detection-service-Saudi-Arabia.jpg',
      '/images/leaks-plumbing/thermal-leak-inspection-Riyadh.jpg',
      '/images/leaks-plumbing/plumbing-services-Riyadh.jpg',
    ],
    gallery: [
      '/images/leaks-plumbing/bathroom-leak-repair-Riyadh.jpg',
      '/images/leaks-plumbing/kitchen-leak-detection-Jeddah.jpg',
      '/images/leaks-plumbing/drain-pipe-inspection-Jeddah.jpg',
      '/images/leaks-plumbing/pipe-leak-repair-Makkah.jpg',
      '/images/leaks-plumbing/water-tank-leak-detection-Khobar.jpg',
      '/images/leaks-plumbing/roof-waterproofing-Dammam.jpg',
    ],
  },
  'thermal-leak-detection': {
    hero: [
      '/images/leaks-plumbing/thermal-leak-inspection-Riyadh.jpg',
      '/images/leaks-plumbing/infrared-leak-detection-Jeddah.jpg',
    ],
  },
  'acoustic-leak-detection': {
    hero: ['/images/leaks-plumbing/acoustic-leak-testing-Riyadh.jpg'],
  },
  'pipe-repair': {
    hero: [
      '/images/leaks-plumbing/pipe-leak-repair-Makkah.jpg',
      '/images/leaks-plumbing/plumbing-leak-repair-Jeddah.jpg',
    ],
  },
  'drain-unclogging': {
    hero: [
      '/images/leaks-plumbing/drain-pipe-inspection-Jeddah.jpg',
      '/images/leaks-plumbing/underground-pipe-leak-Dammam.jpg',
    ],
  },
  'bathroom-kitchen-waterproofing': {
    hero: [
      '/images/leaks-plumbing/bathroom-leak-repair-Riyadh.jpg',
      '/images/leaks-plumbing/kitchen-leak-detection-Jeddah.jpg',
      '/images/leaks-plumbing/roof-waterproofing-Dammam.jpg',
    ],
  },
  'pumps-valves': {
    hero: [
      '/images/leaks-plumbing/plumbing-services-Riyadh.jpg',
      '/images/leaks-plumbing/emergency-plumbing-Jeddah.jpg',
    ],
  },
  'tank-leaks': {
    hero: [
      '/images/leaks-plumbing/water-tank-leak-detection-Khobar.jpg',
      '/images/cleaning/water-tank-cleaning-Saudi-Arabia.jpg',
    ],
  },

  // Pest Control / مكافحة الحشرات
  'pest-control': {
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
      '/images/pest-control/rodent-removal-Saudi.jpg',
      '/images/pest-control/ant-control-service.jpg',
      '/images/pest-control/residential-pest-management.jpg',
    ],
  },
  'general-spray': {
    hero: [
      '/images/pest-control/fumigation-services-KSA.jpg',
      '/images/pest-control/home-pest-inspection.jpg',
    ],
  },
  cockroaches: {
    hero: [
      '/images/pest-control/cockroach-extermination.jpg',
      '/images/pest-control/insect-exterminator-near-me.jpg',
    ],
  },
  ants: {
    hero: ['/images/pest-control/ant-control-service.jpg'],
  },
  rodents: {
    hero: [
      '/images/pest-control/rodent-removal-Saudi.jpg',
      '/images/pest-control/rodent-proofing-service.jpg',
    ],
  },
  'bed-bugs': {
    hero: [
      '/images/pest-control/bed-bug-removal-Jeddah.jpg',
      '/images/pest-control/fumigation-company-Riyadh.jpg',
    ],
  },
  termites: {
    hero: [
      '/images/pest-control/termite-treatment-Saudi-Arabia.jpg',
      '/images/pest-control/termite-control-Riyadh.jpg',
      '/images/pest-control/white-ants-treatment.jpg',
    ],
  },
  'municipality-certificate': {
    hero: [
      '/images/pest-control/best-pest-company-in-Saudi-Arabia.jpg',
      '/images/pest-control/pest-control-experts-Riyadh.jpg',
    ],
  },
  'annual-contracts': {
    hero: [
      '/images/pest-control/pest-control-contracts.jpg',
      '/images/pest-control/pest-control-maintenance.jpg',
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
  'unit-relocation': {
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
  'cctv-systems': {
    hero: [
      '/images/electricity/smart-home-electrical-setup.jpg',
      '/images/electricity/electrical-maintenance-company.jpg',
    ],
  },

  // Painting & Gypsum / الدهانات والجبس
  'painting-gypsum': {
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
      '/images/painting-gypsum/3D-wall-panels-KSA.jpg',
      '/images/painting-gypsum/Painting-services-Saudi-Arabia.jpg',
    ],
  },
  'interior-painting': {
    hero: [
      '/images/painting-gypsum/Interior-painting-Riyadh.jpg',
      '/images/painting-gypsum/House-painting-services.jpg',
      '/images/painting-gypsum/Wall-painting-company.jpg',
    ],
  },
  'exterior-painting': {
    hero: [
      '/images/painting-gypsum/Exterior-painting-Jeddah.jpg',
      '/images/painting-gypsum/Crack-wall-repair.jpg',
    ],
  },
  wallpaper: {
    hero: ['/images/painting-gypsum/3D-wall-panels-KSA.jpg'],
  },
  'gypsum-board': {
    hero: [
      '/images/painting-gypsum/Gypsum-partitions.jpg',
      '/images/painting-gypsum/False-ceiling-lights.jpg',
    ],
  },
  decor: {
    hero: [
      '/images/painting-gypsum/3D-wall-panels-KSA.jpg',
      '/images/painting-gypsum/False-ceiling-lights.jpg',
    ],
  },

  // Landscaping / تنسيق الحدائق
  landscaping: {
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
      '/images/landscaping/outdoor seating area.jpg',
      '/images/landscaping/flower planting service.jpg',
      '/images/landscaping/pergola installation.jpg',
    ],
  },
  'lawn-mowing': {
    hero: [
      '/images/landscaping/lawn installation.jpg',
      '/images/landscaping/artificial grass installation.jpg',
      '/images/landscaping/garden maintenance.jpg',
    ],
  },
  'irrigation-systems': {
    hero: [
      '/images/landscaping/garden irrigation system.jpg',
      '/images/landscaping/automatic irrigation.jpg',
      '/images/landscaping/drip irrigation.jpg',
    ],
  },
  'garden-design': {
    hero: [
      '/images/landscaping/landscape design.jpg',
      '/images/landscaping/garden landscaping.jpg',
      '/images/landscaping/garden renovation.jpg',
    ],
  },
  'palm-trees': {
    hero: [
      '/images/landscaping/palm tree planting.jpg',
      '/images/landscaping/garden trees planting.jpg',
      '/images/landscaping/flower planting service.jpg',
    ],
  },

  // Carpentry / النجارة
  carpentry: {
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
      '/images/carpentry/Wooden flooring.jpg',
      '/images/carpentry/Woodworking Saudi Arabia.jpg',
    ],
  },
  'kitchen-cabinets': {
    hero: [
      '/images/carpentry/Kitchen cabinets.jpg',
      '/images/carpentry/Custom furniture.jpg',
      '/images/carpentry/Carpentry services.jpg',
    ],
  },
  'doors-windows': {
    hero: [
      '/images/carpentry/Door installation.jpg',
      '/images/carpentry/Home carpentry.jpg',
    ],
  },
  bedrooms: {
    hero: [
      '/images/carpentry/Wardrobe design.jpg',
      '/images/carpentry/Custom furniture.jpg',
      '/images/carpentry/Furniture repair.jpg',
    ],
  },
  'furniture-repair': {
    hero: [
      '/images/carpentry/Furniture repair.jpg',
      '/images/carpentry/Carpentry services.jpg',
      '/images/carpentry/Woodworking Saudi Arabia.jpg',
    ],
  },

  // Aluminum & Glass / الألمنيوم والزجاج
  'aluminum-glass': {
    hero: [
      '/images/cleaning/glass-and-window-cleaning.jpg',
      '/images/painting-gypsum/3D-wall-panels-KSA.jpg',
    ],
  },
  'aluminum-windows-doors': {
    hero: ['/images/cleaning/glass-and-window-cleaning.jpg'],
  },
  'glass-facades': {
    hero: ['/images/cleaning/glass-and-window-cleaning.jpg'],
  },
  'shades-curtains': {
    hero: [
      '/images/cleaning/curtain-cleaning-service.jpg',
      '/images/landscaping/pergola installation.jpg',
    ],
  },

  // Flooring / الأرضيات
  flooring: {
    hero: [
      '/images/cleaning/marble-floor-polishing.jpg',
      '/images/cleaning/floor-cleaning-service.jpg',
      '/images/painting-gypsum/Epoxy-flooring-Saudi-Arabia.jpg',
    ],
  },
  'ceramic-porcelain': {
    hero: ['/images/cleaning/floor-cleaning-service.jpg'],
  },
  'parquet-vinyl': {
    hero: ['/images/cleaning/floor-cleaning-service.jpg'],
  },
  'marble-granite': {
    hero: ['/images/cleaning/marble-floor-polishing.jpg'],
  },
  'grinding-polishing': {
    hero: ['/images/cleaning/marble-floor-polishing.jpg'],
  },

  // Insulation & Roofs / العزل والأسطح
  'insulation-roofs': {
    hero: [
      '/images/leaks-plumbing/roof-waterproofing-Dammam.jpg',
      '/images/leaks-plumbing/roof-leak-repair-Dammam.jpg',
    ],
  },
  'water-proofing': {
    hero: ['/images/leaks-plumbing/roof-waterproofing-Dammam.jpg'],
  },
  'thermal-insulation': {
    hero: ['/images/leaks-plumbing/roof-waterproofing-Dammam.jpg'],
  },
  'foam-bitumen': {
    hero: ['/images/leaks-plumbing/roof-waterproofing-Dammam.jpg'],
  },
  'cracks-treatment': {
    hero: [
      '/images/leaks-plumbing/roof-leak-repair-Dammam.jpg',
      '/images/painting-gypsum/Crack-wall-repair.jpg',
    ],
  },

  // Appliances / الأجهزة المنزلية
  appliances: {
    hero: [
      '/images/ac/AC-maintenance.jpg',
      '/images/electricity/electrical-repair-services.jpg',
    ],
  },
  'washing-machines': {
    hero: ['/images/ac/AC-maintenance.jpg'],
  },
  refrigerators: {
    hero: ['/images/ac/AC-maintenance.jpg'],
  },
  'ovens-stoves': {
    hero: ['/images/ac/AC-maintenance.jpg'],
  },
  dryers: {
    hero: ['/images/ac/AC-maintenance.jpg'],
  },

  // Car Towing / سطحة ونقل سيارات
  'car-towing': {
    hero: [
      '/images/moving/moving-truck-rental.jpg',
      '/images/moving/door-to-door-moving.jpg',
    ],
  },
  'city-towing': {
    hero: ['/images/moving/moving-truck-rental.jpg'],
  },
  'intercity-towing': {
    hero: ['/images/moving/intercity-moving-Saudi-Arabia.jpg'],
  },
  'luxury-car-transport': {
    hero: ['/images/moving/insured-moving-company.jpg'],
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

