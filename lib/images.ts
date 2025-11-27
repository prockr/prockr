/**
 * Image mapping for all services and subservices
 * Maps service/subservice slugs to their corresponding images
 * 
 * Total Images: ~289 across all categories
 * Last Updated: Nov 2025
 */

export interface ServiceImages {
  hero: string[]; // Hero/main images
  gallery?: string[]; // Additional gallery images
  icon?: string; // Optional icon
}

// Complete image mapping for all services
export const SERVICE_IMAGES: Record<string, ServiceImages> = {
  // ====================================
  // Moving / نقل العفش - 44 صورة
  // ====================================
  moving: {
    hero: [
      '/images/moving/furniture-moving-company.jpg',
      '/images/moving/professional-moving-team.jpg',
      '/images/moving/movers-and-packers-Jeddah.jpg',
      '/images/moving/best-moving-company-Riyadh.jpg',
      '/images/moving/movers-in-Saudi-Arabia.jpg',
      '/images/moving/trusted-moving-experts.jpg',
    ],
    gallery: [
      '/images/moving/villa-moving-service.jpg',
      '/images/moving/apartment-movers.jpg',
      '/images/moving/office-moving-services.jpg',
      '/images/moving/furniture-packing-service.jpg',
      '/images/moving/moving-company-with-lifting-tools.jpg',
      '/images/moving/storage-and-moving-company.jpg',
      '/images/moving/full-service-movers.jpg',
      '/images/moving/reliable-furniture-movers.png',
      '/images/moving/same-day-movers.jpg',
      '/images/moving/moving-service-24-hours.jpg',
    ],
  },
  'apartment-moving': {
    hero: [
      '/images/moving/apartment-movers.jpg',
      '/images/moving/house-shifting-service.jpg',
      '/images/moving/household-items-shifting.jpg',
      '/images/moving/cheap-movers-in-Riyadh.jpg',
    ],
    gallery: [
      '/images/moving/local-moving-services.jpg',
      '/images/moving/moving-company-near-me.jpg',
      '/images/moving/door-to-door-moving.jpg',
    ],
  },
  'villa-moving': {
    hero: [
      '/images/moving/villa-moving-service.jpg',
      '/images/moving/home-relocation-Saudi-Arabia.jpg',
      '/images/moving/full-service-movers.jpg',
      '/images/moving/heavy-furniture-movers.jpg',
    ],
    gallery: [
      '/images/moving/trusted-moving-experts.jpg',
      '/images/moving/insured-moving-company.jpg',
    ],
  },
  'office-moving': {
    hero: [
      '/images/moving/office-moving-services.jpg',
      '/images/moving/commercial-moving-company.jpg',
      '/images/moving/relocation-company-Saudi-Arabia.jpg',
    ],
    gallery: [
      '/images/moving/professional-moving-team.jpg',
      '/images/moving/furniture-transport-Saudi-Arabia.jpg',
    ],
  },
  'disassembly-assembly': {
    hero: [
      '/images/moving/dismantling-and-assembling-furniture.jpg',
      '/images/moving/furniture-moving-company.jpg',
    ],
    gallery: [
      '/images/moving/professional-packers-and-movers.jpg',
    ],
  },
  'furniture-packing': {
    hero: [
      '/images/moving/furniture-packing-service.jpg',
      '/images/moving/furniture-wrapping-and-packing.jpg',
      '/images/moving/professional-packers-and-movers.jpg',
    ],
    gallery: [
      '/images/moving/moving-company-offers.jpg',
      '/images/moving/affordable-moving-service.jpg',
    ],
  },
  'crane-lifting': {
    hero: [
      '/images/moving/moving-company-with-lifting-tools.jpg',
      '/images/moving/heavy-furniture-movers.jpg',
    ],
  },
  'city-to-city': {
    hero: [
      '/images/moving/intercity-moving-Saudi-Arabia.jpg',
      '/images/moving/long-distance-movers.jpg',
      '/images/moving/moving-company-in-Dammam.jpg',
      '/images/moving/moving-company-in-Madinah.jpg',
    ],
    gallery: [
      '/images/moving/best-movers-in-Jeddah.jpg',
      '/images/moving/moving-service-in-Makkah.jpg',
      '/images/moving/international-relocation-Saudi-Arabia.jpg',
    ],
  },
  storage: {
    hero: [
      '/images/moving/storage-and-moving-company.jpg',
      '/images/moving/moving-and-storage-Riyadh.jpg',
    ],
    gallery: [
      '/images/moving/furniture-transportation.jpg',
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
      '/images/moving/trusted-moving-experts.jpg',
    ],
  },

  // ====================================
  // Cleaning / التنظيف - 38 صورة
  // ====================================
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
      '/images/cleaning/apartment-cleaning-Riyadh.jpg',
      '/images/cleaning/commercial-cleaning-Saudi.jpg',
      '/images/cleaning/eco-friendly-cleaning.jpg',
    ],
  },
  'hourly-cleaning': {
    hero: [
      '/images/cleaning/hourly-maid-service.jpg',
      '/images/cleaning/part-time-cleaner-Riyadh.jpg',
      '/images/cleaning/housemaid-service-Saudi-Arabia.jpg',
    ],
    gallery: [
      '/images/cleaning/professional-maid-Riyadh.jpg',
      '/images/cleaning/daily-cleaning-contracts.jpg',
    ],
  },
  'deep-cleaning': {
    hero: [
      '/images/cleaning/deep-cleaning-Jeddah.jpg',
      '/images/cleaning/house-deep-cleaning-Jeddah.jpg',
      '/images/cleaning/residential-cleaning.jpg',
    ],
    gallery: [
      '/images/cleaning/bathroom-cleaning-Riyadh.jpg',
      '/images/cleaning/kitchen-cleaning-service.jpg',
    ],
  },
  'post-construction': {
    hero: [
      '/images/cleaning/post-construction-cleaning.jpg',
      '/images/cleaning/building-cleaning-company.jpg',
    ],
    gallery: [
      '/images/cleaning/move-in-cleaning-service.jpg',
      '/images/cleaning/janitorial-services-Saudi-Arabia.jpg',
    ],
  },
  'tank-cleaning': {
    hero: [
      '/images/cleaning/water-tank-cleaning-Saudi-Arabia.jpg',
      '/images/cleaning/cleaning-and-sterilization.jpg',
    ],
  },
  'carpet-rug': {
    hero: [
      '/images/cleaning/carpet-cleaning-Dammam.jpg',
      '/images/cleaning/floor-cleaning-service.jpg',
    ],
  },
  'sofa-curtains': {
    hero: [
      '/images/cleaning/sofa-cleaning-Jeddah.jpg',
      '/images/cleaning/sofa-shampoo-cleaning.jpg',
      '/images/cleaning/curtain-cleaning-service.jpg',
    ],
    gallery: [
      '/images/cleaning/mattress-cleaning-Jeddah.jpg',
    ],
  },
  sanitization: {
    hero: [
      '/images/cleaning/disinfection-and-sanitization.jpg',
      '/images/cleaning/cleaning-and-sterilization.jpg',
      '/images/cleaning/pest-control-Riyadh.jpg',
    ],
  },
  'marble-polishing': {
    hero: [
      '/images/cleaning/marble-floor-polishing.jpg',
      '/images/cleaning/floor-cleaning-service.jpg',
    ],
  },
  'facade-cleaning': {
    hero: [
      '/images/cleaning/glass-and-window-cleaning.jpg',
      '/images/cleaning/building-cleaning-company.jpg',
    ],
  },

  // ====================================
  // Leaks & Plumbing / كشف التسربات والسباكة - 48 صورة
  // ====================================
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
      '/images/leaks-plumbing/best-leak-detection-Saudi-Arabia.jpg',
      '/images/leaks-plumbing/professional-leak-company-Saudi-Arabia.jpg',
      '/images/leaks-plumbing/certified-leak-detection-Riyadh.jpg',
    ],
  },
  'thermal-leak-detection': {
    hero: [
      '/images/leaks-plumbing/thermal-leak-inspection-Riyadh.jpg',
      '/images/leaks-plumbing/infrared-leak-detection-Jeddah.jpg',
      '/images/leaks-plumbing/hidden-water-leak-detection-Madinah.jpg',
    ],
    gallery: [
      '/images/leaks-plumbing/non-destructive-leak-detection-Khobar.jpg',
      '/images/leaks-plumbing/moisture-inspection-Dammam.jpg',
    ],
  },
  'acoustic-leak-detection': {
    hero: [
      '/images/leaks-plumbing/acoustic-leak-testing-Riyadh.jpg',
      '/images/leaks-plumbing/leak-detection-near-me-Saudi-Arabia.jpg',
    ],
    gallery: [
      '/images/leaks-plumbing/water-leak-maintenance-Riyadh.jpg',
    ],
  },
  'pipe-repair': {
    hero: [
      '/images/leaks-plumbing/pipe-leak-repair-Makkah.jpg',
      '/images/leaks-plumbing/plumbing-leak-repair-Jeddah.jpg',
      '/images/leaks-plumbing/plumbing-contractor-Saudi-Arabia.jpg',
    ],
    gallery: [
      '/images/leaks-plumbing/underground-pipe-leak-Dammam.jpg',
      '/images/leaks-plumbing/leak-repair-experts-Dammam.jpg',
    ],
  },
  'drain-unclogging': {
    hero: [
      '/images/leaks-plumbing/drain-pipe-inspection-Jeddah.jpg',
      '/images/leaks-plumbing/underground-pipe-leak-Dammam.jpg',
      '/images/leaks-plumbing/affordable-plumbing-Jeddah.jpg',
    ],
  },
  'bathroom-kitchen-waterproofing': {
    hero: [
      '/images/leaks-plumbing/bathroom-leak-repair-Riyadh.jpg',
      '/images/leaks-plumbing/kitchen-leak-detection-Jeddah.jpg',
      '/images/leaks-plumbing/roof-waterproofing-Dammam.jpg',
    ],
    gallery: [
      '/images/leaks-plumbing/water-leakage-testing-Taif.jpg',
      '/images/leaks-plumbing/building-leak-inspection-Jeddah.jpg',
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
      '/images/leaks-plumbing/swimming-pool-leak-repair-Riyadh.jpg',
    ],
    gallery: [
      '/images/leaks-plumbing/water-leak-specialist-Dammam.jpg',
    ],
  },

  // City-specific leak detection images
  'leak-riyadh': {
    hero: [
      '/images/leaks-plumbing/water-leak-detection-Riyadh.jpg',
      '/images/leaks-plumbing/house-leak-repair-Riyadh.jpg',
      '/images/leaks-plumbing/certified-leak-detection-Riyadh.jpg',
    ],
  },
  'leak-jeddah': {
    hero: [
      '/images/leaks-plumbing/water-leak-detection-Jeddah.jpg',
      '/images/leaks-plumbing/home-leak-detection-Jeddah.jpg',
      '/images/leaks-plumbing/ceiling-water-damage-Jeddah.jpg',
    ],
  },
  'leak-dammam': {
    hero: [
      '/images/leaks-plumbing/water-leak-detection-Dammam.jpg',
      '/images/leaks-plumbing/roof-leak-repair-Dammam.jpg',
      '/images/leaks-plumbing/moisture-inspection-Dammam.jpg',
    ],
  },
  'leak-makkah': {
    hero: [
      '/images/leaks-plumbing/water-leak-detection-Makkah.jpg',
      '/images/leaks-plumbing/pipe-leak-repair-Makkah.jpg',
    ],
  },
  'leak-madinah': {
    hero: [
      '/images/leaks-plumbing/water-leak-detection-Madinah.jpg',
      '/images/leaks-plumbing/hidden-water-leak-detection-Madinah.jpg',
    ],
  },

  // ====================================
  // Pest Control / مكافحة الحشرات - 42 صورة
  // ====================================
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
      '/images/pest-control/best-pest-company-in-Saudi-Arabia.jpg',
      '/images/pest-control/eco-friendly-pest-control.jpg',
      '/images/pest-control/pest-control-Saudi-homes.jpg',
    ],
  },
  'general-spray': {
    hero: [
      '/images/pest-control/fumigation-services-KSA.jpg',
      '/images/pest-control/home-pest-inspection.jpg',
      '/images/pest-control/pest-disinfection-service.jpg',
    ],
    gallery: [
      '/images/pest-control/insect-killer-Saudi-Arabia.jpg',
      '/images/pest-control/pest-cleaning-services.jpg',
    ],
  },
  cockroaches: {
    hero: [
      '/images/pest-control/cockroach-extermination.jpg',
      '/images/pest-control/insect-exterminator-near-me.jpg',
      '/images/pest-control/pest-removal-service.jpg',
    ],
  },
  ants: {
    hero: [
      '/images/pest-control/ant-control-service.jpg',
      '/images/pest-control/pest-prevention-Saudi-Arabia.jpg',
    ],
  },
  rodents: {
    hero: [
      '/images/pest-control/rodent-removal-Saudi.jpg',
      '/images/pest-control/rodent-proofing-service.jpg',
      '/images/pest-control/snake-and-scorpion-removal.jpg',
    ],
  },
  'bed-bugs': {
    hero: [
      '/images/pest-control/bed-bug-removal-Jeddah.jpg',
      '/images/pest-control/fumigation-company-Riyadh.jpg',
      '/images/pest-control/pest-control-for-villas.jpg',
    ],
  },
  termites: {
    hero: [
      '/images/pest-control/termite-treatment-Saudi-Arabia.jpg',
      '/images/pest-control/termite-control-Riyadh.jpg',
      '/images/pest-control/white-ants-treatment.jpg',
    ],
    gallery: [
      '/images/pest-control/pest-protection-plans.jpg',
    ],
  },
  'municipality-certificate': {
    hero: [
      '/images/pest-control/best-pest-company-in-Saudi-Arabia.jpg',
      '/images/pest-control/pest-control-experts-Riyadh.jpg',
      '/images/pest-control/pest-control-for-restaurants.jpg',
    ],
    gallery: [
      '/images/pest-control/commercial-pest-service.jpg',
      '/images/pest-control/pest-control-for-warehouses.jpg',
    ],
  },
  'annual-contracts': {
    hero: [
      '/images/pest-control/pest-control-contracts.jpg',
      '/images/pest-control/pest-control-maintenance.jpg',
      '/images/pest-control/pest-control-cost-in-Saudi.jpg',
    ],
    gallery: [
      '/images/pest-control/organic-pest-solutions.jpg',
      '/images/pest-control/pest-control-chemicals-safe.jpg',
    ],
  },

  // City-specific pest control
  'pest-riyadh': {
    hero: [
      '/images/pest-control/pest-control-Riyadh.jpg',
      '/images/pest-control/fumigation-company-Riyadh.jpg',
      '/images/pest-control/pest-control-experts-Riyadh.jpg',
    ],
  },
  'pest-jeddah': {
    hero: [
      '/images/pest-control/pest-control-Jeddah.jpg',
      '/images/pest-control/bed-bug-removal-Jeddah.jpg',
    ],
  },
  'pest-dammam': {
    hero: [
      '/images/pest-control/pest-control-Dammam.jpg',
      '/images/pest-control/pest-extermination-Dammam.jpg',
    ],
  },
  'pest-offices': {
    hero: [
      '/images/pest-control/pest-control-in-offices.jpg',
      '/images/pest-control/commercial-pest-service.jpg',
    ],
  },
  'pest-garden': {
    hero: [
      '/images/pest-control/garden-pest-control.jpg',
      '/images/pest-control/organic-pest-solutions.jpg',
    ],
  },

  // ====================================
  // AC / التكييف - 10 صور
  // ====================================
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
      '/images/ac/AC-duct-cleaning.jpg',
      '/images/ac/AC-gas-refilling.jpg',
      '/images/ac/AC-troubleshooting.jpg',
      '/images/ac/Air-conditioning-cleaning.jpg',
    ],
  },
  'split-ac-cleaning': {
    hero: [
      '/images/ac/Air-conditioning-cleaning.jpg',
      '/images/ac/Split-AC-installation.jpg',
    ],
    gallery: [
      '/images/cleaning/AC-cleaning-and-maintenance.jpg',
    ],
  },
  'duct-cleaning': {
    hero: [
      '/images/ac/AC-duct-cleaning.jpg',
      '/images/ac/Central-AC-service.jpg',
    ],
  },
  'maintenance-repair': {
    hero: [
      '/images/ac/AC-maintenance.jpg',
      '/images/ac/AC-troubleshooting.jpg',
      '/images/ac/Air-conditioner-repair.jpg',
    ],
    gallery: [
      '/images/ac/HVAC-services.jpg',
    ],
  },
  'freon-refill': {
    hero: [
      '/images/ac/AC-gas-refilling.jpg',
      '/images/ac/AC-maintenance.jpg',
    ],
  },
  'ac-installation': {
    hero: [
      '/images/ac/AC-installation.jpg',
      '/images/ac/Split-AC-installation.jpg',
      '/images/ac/Central-AC-service.jpg',
    ],
  },
  'unit-relocation': {
    hero: [
      '/images/ac/AC-installation.jpg',
      '/images/ac/Split-AC-installation.jpg',
    ],
  },

  // ====================================
  // Electricity / الكهرباء - 37 صورة
  // ====================================
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
      '/images/electricity/home-electrical-maintenance.jpg',
      '/images/electricity/commercial-electrical-services.jpg',
      '/images/electricity/residential-electrician-Riyadh.jpg',
    ],
  },
  'electrical-faults': {
    hero: [
      '/images/electricity/electrical-troubleshooting.jpg',
      '/images/electricity/short-circuit-repair.jpg',
      '/images/electricity/emergency-electrician.jpg',
      '/images/electricity/power-outage-repair.jpg',
    ],
    gallery: [
      '/images/electricity/electrical-emergency-service.jpg',
      '/images/electricity/cable-fault-detection.jpg',
      '/images/electricity/electric-current-leak-fix.jpg',
    ],
  },
  'panels-distribution': {
    hero: [
      '/images/electricity/electrical-panel-upgrade.jpg',
      '/images/electricity/power-panel-repair.jpg',
      '/images/electricity/fuse-box-installation.jpg',
    ],
    gallery: [
      '/images/electricity/circuit-breaker-replacement.jpg',
      '/images/electricity/surge-protection-system.jpg',
    ],
  },
  'wiring-lighting': {
    hero: [
      '/images/electricity/wiring-installation-Saudi-Arabia.jpg',
      '/images/electricity/lighting-installation-service.jpg',
      '/images/electricity/LED-lighting-design.jpg',
    ],
    gallery: [
      '/images/electricity/ceiling-light-installation.jpg',
      '/images/electricity/LED-light-repair.jpg',
      '/images/electricity/outdoor-lighting-repair.jpg',
      '/images/electricity/wiring-upgrade-service.jpg',
      '/images/electricity/electrical-wiring-maintenance.jpg',
    ],
  },
  'cctv-systems': {
    hero: [
      '/images/electricity/smart-home-electrical-setup.jpg',
      '/images/electricity/electrical-maintenance-company.jpg',
      '/images/electricity/electrical-safety-inspection.jpg',
    ],
    gallery: [
      '/images/electricity/industrial-electrical-maintenance.jpg',
      '/images/electricity/generator-installation.jpg',
    ],
  },

  // City-specific electrical
  'electric-riyadh': {
    hero: [
      '/images/electricity/residential-electrician-Riyadh.jpg',
      '/images/electricity/electrical-repair-services.jpg',
    ],
  },
  'electric-jeddah': {
    hero: [
      '/images/electricity/best-electrician-in-Jeddah.jpg',
      '/images/electricity/licensed-electrician-Saudi-Arabia.jpg',
    ],
  },
  'electric-24hr': {
    hero: [
      '/images/electricity/24-hour-electrician.jpg',
      '/images/electricity/emergency-electrician.jpg',
      '/images/electricity/electrical-emergency-service.jpg',
    ],
  },
  'electric-near-me': {
    hero: [
      '/images/electricity/electrician-near-me-Saudi-Arabia.jpg',
      '/images/electricity/electrician-in-Saudi-Arabia.jpg',
    ],
  },
  'electric-grounding': {
    hero: [
      '/images/electricity/electrical-grounding-service.jpg',
      '/images/electricity/electrical-safety-inspection.jpg',
    ],
  },
  'electric-sockets': {
    hero: [
      '/images/electricity/electric-socket-replacement.jpg',
      '/images/electricity/wiring-upgrade-service.jpg',
    ],
  },
  'energy-saving': {
    hero: [
      '/images/electricity/energy-saving-solutions3..jpg',
      '/images/electricity/smart-home-electrical-setup.jpg',
    ],
  },

  // ====================================
  // Painting & Gypsum / الدهانات والجبس - 11 صورة
  // ====================================
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
      '/images/painting-gypsum/Crack-wall-repair.jpg',
      '/images/painting-gypsum/Epoxy-flooring-Saudi-Arabia.jpg',
    ],
  },
  'interior-painting': {
    hero: [
      '/images/painting-gypsum/Interior-painting-Riyadh.jpg',
      '/images/painting-gypsum/House-painting-services.jpg',
      '/images/painting-gypsum/Wall-painting-company.jpg',
    ],
    gallery: [
      '/images/painting-gypsum/Painting-services-Saudi-Arabia.jpg',
    ],
  },
  'exterior-painting': {
    hero: [
      '/images/painting-gypsum/Exterior-painting-Jeddah.jpg',
      '/images/painting-gypsum/Crack-wall-repair.jpg',
      '/images/painting-gypsum/Professional-painters-KSA.jpg',
    ],
  },
  wallpaper: {
    hero: [
      '/images/painting-gypsum/3D-wall-panels-KSA.jpg',
      '/images/painting-gypsum/Interior-painting-Riyadh.jpg',
    ],
  },
  'gypsum-board': {
    hero: [
      '/images/painting-gypsum/Gypsum-partitions.jpg',
      '/images/painting-gypsum/False-ceiling-lights.jpg',
    ],
    gallery: [
      '/images/painting-gypsum/3D-wall-panels-KSA.jpg',
    ],
  },
  decor: {
    hero: [
      '/images/painting-gypsum/3D-wall-panels-KSA.jpg',
      '/images/painting-gypsum/False-ceiling-lights.jpg',
      '/images/painting-gypsum/Interior-painting-Riyadh.jpg',
    ],
  },
  epoxy: {
    hero: [
      '/images/painting-gypsum/Epoxy-flooring-Saudi-Arabia.jpg',
      '/images/flooring/Epoxy Floor Coating.jpg',
    ],
  },

  // ====================================
  // Landscaping / تنسيق الحدائق - 16 صورة
  // ====================================
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
      '/images/landscaping/artificial grass installation.jpg',
      '/images/landscaping/garden renovation.jpg',
      '/images/landscaping/garden trees planting.jpg',
      '/images/landscaping/outdoor lighting.jpg',
    ],
  },
  'lawn-mowing': {
    hero: [
      '/images/landscaping/lawn installation.jpg',
      '/images/landscaping/artificial grass installation.jpg',
      '/images/landscaping/garden maintenance.jpg',
    ],
    gallery: [
      '/images/landscaping/garden renovation.jpg',
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
    gallery: [
      '/images/landscaping/garden decoration.jpg',
      '/images/landscaping/outdoor seating area.jpg',
      '/images/landscaping/pergola installation.jpg',
    ],
  },
  'palm-trees': {
    hero: [
      '/images/landscaping/palm tree planting.jpg',
      '/images/landscaping/garden trees planting.jpg',
      '/images/landscaping/flower planting service.jpg',
    ],
  },
  'garden-lighting': {
    hero: [
      '/images/landscaping/outdoor lighting.jpg',
      '/images/landscaping/garden decoration.jpg',
    ],
  },

  // ====================================
  // Carpentry / النجارة - 10 صور
  // ====================================
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
      '/images/carpentry/Woodworking Saudi Arabia.jpg',
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
  'wooden-flooring': {
    hero: [
      '/images/carpentry/Wooden flooring.jpg',
      '/images/flooring/Wooden Floor Installation.jpg',
      '/images/flooring/Laminate Flooring Experts.jpg',
    ],
  },

  // ====================================
  // Aluminum & Glass / الألمنيوم والزجاج - 7 صور
  // ====================================
  'aluminum-glass': {
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
  'aluminum-windows-doors': {
    hero: [
      '/images/aluminum-glass/Aluminum Windows.jpg',
      '/images/aluminum-glass/Sliding Glass Doors.jpg',
      '/images/aluminum-glass/Aluminum Fabrication.jpg',
    ],
  },
  'glass-facades': {
    hero: [
      '/images/aluminum-glass/Frameless Glass Systems.jpg',
      '/images/aluminum-glass/Glass Installation Services.jpg',
      '/images/aluminum-glass/Glass Partition Installation.jpg',
    ],
  },
  'shades-curtains': {
    hero: [
      '/images/aluminum-glass/Aluminum Cladding.jpg',
      '/images/landscaping/pergola installation.jpg',
    ],
  },
  'glass-partitions': {
    hero: [
      '/images/aluminum-glass/Glass Partition Installation.jpg',
      '/images/aluminum-glass/Frameless Glass Systems.jpg',
    ],
  },

  // ====================================
  // Flooring / الأرضيات - 10 صور جديدة! 🆕
  // ====================================
  flooring: {
    hero: [
      '/images/flooring/Flooring Installation Saudi Arabia.jpg',
      '/images/flooring/Professional Floor Fitters.jpg',
      '/images/flooring/Residential Flooring Services.jpg',
      '/images/flooring/Commercial Flooring Contractors.jpg',
    ],
    gallery: [
      '/images/flooring/Tile Flooring Installation.jpg',
      '/images/flooring/Wooden Floor Installation.jpg',
      '/images/flooring/Vinyl Flooring Services.jpg',
      '/images/flooring/Laminate Flooring Experts.jpg',
      '/images/flooring/Epoxy Floor Coating.jpg',
      '/images/flooring/Floor Repair and Replacement.jpg',
    ],
  },
  'ceramic-porcelain': {
    hero: [
      '/images/flooring/Tile Flooring Installation.jpg',
      '/images/flooring/Flooring Installation Saudi Arabia.jpg',
      '/images/flooring/Professional Floor Fitters.jpg',
    ],
    gallery: [
      '/images/flooring/Residential Flooring Services.jpg',
      '/images/flooring/Commercial Flooring Contractors.jpg',
    ],
  },
  'parquet-vinyl': {
    hero: [
      '/images/flooring/Vinyl Flooring Services.jpg',
      '/images/flooring/Laminate Flooring Experts.jpg',
      '/images/flooring/Wooden Floor Installation.jpg',
    ],
    gallery: [
      '/images/flooring/Professional Floor Fitters.jpg',
      '/images/flooring/Residential Flooring Services.jpg',
    ],
  },
  'marble-granite': {
    hero: [
      '/images/flooring/Professional Floor Fitters.jpg',
      '/images/flooring/Flooring Installation Saudi Arabia.jpg',
      '/images/cleaning/marble-floor-polishing.jpg',
    ],
    gallery: [
      '/images/flooring/Commercial Flooring Contractors.jpg',
    ],
  },
  'grinding-polishing': {
    hero: [
      '/images/cleaning/marble-floor-polishing.jpg',
      '/images/flooring/Floor Repair and Replacement.jpg',
      '/images/flooring/Professional Floor Fitters.jpg',
    ],
  },
  'epoxy-flooring': {
    hero: [
      '/images/flooring/Epoxy Floor Coating.jpg',
      '/images/painting-gypsum/Epoxy-flooring-Saudi-Arabia.jpg',
      '/images/flooring/Commercial Flooring Contractors.jpg',
    ],
  },
  'floor-repair': {
    hero: [
      '/images/flooring/Floor Repair and Replacement.jpg',
      '/images/flooring/Professional Floor Fitters.jpg',
    ],
  },

  // ====================================
  // Insulation & Roofs / العزل والأسطح - 9 صور
  // ====================================
  'insulation-roofs': {
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
      '/images/insulation-roofs/Roof repair Saudi Arabia.jpg',
      '/images/insulation-roofs/Roof leak repair.jpg',
    ],
  },
  'water-proofing': {
    hero: [
      '/images/insulation-roofs/Roof waterproofing Saudi Arabia.jpg',
      '/images/insulation-roofs/Waterproofing services.jpg',
      '/images/insulation-roofs/Roof protection.jpg',
    ],
  },
  'thermal-insulation': {
    hero: [
      '/images/insulation-roofs/Thermal insulation.jpg',
      '/images/insulation-roofs/Heat-resistant coating.jpg',
      '/images/insulation-roofs/Building insulation services.jpg',
    ],
  },
  'foam-bitumen': {
    hero: [
      '/images/insulation-roofs/Roof insulation.jpg',
      '/images/insulation-roofs/Waterproofing services.jpg',
      '/images/insulation-roofs/Building insulation services.jpg',
    ],
  },
  'cracks-treatment': {
    hero: [
      '/images/insulation-roofs/Roof leak repair.jpg',
      '/images/insulation-roofs/Roof repair Saudi Arabia.jpg',
      '/images/painting-gypsum/Crack-wall-repair.jpg',
    ],
  },
  'roof-repair': {
    hero: [
      '/images/insulation-roofs/Roof repair Saudi Arabia.jpg',
      '/images/insulation-roofs/Roof leak repair.jpg',
      '/images/insulation-roofs/Roof protection.jpg',
    ],
  },

  // ====================================
  // Appliances / الأجهزة المنزلية - 7 صور
  // ====================================
  appliances: {
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
  'washing-machines': {
    hero: [
      '/images/appliances/Washing machine repair.jpg',
      '/images/appliances/Home appliance repair.jpg',
      '/images/appliances/Appliance technician Saudi Arabia.jpg',
    ],
  },
  refrigerators: {
    hero: [
      '/images/appliances/Refrigerator repair service.jpg',
      '/images/appliances/Home appliance maintenance.jpg',
      '/images/appliances/Appliance technician Saudi Arabia.jpg',
    ],
  },
  'ovens-stoves': {
    hero: [
      '/images/appliances/Oven and stove maintenance.jpg',
      '/images/appliances/Home appliance repair.jpg',
      '/images/appliances/Emergency appliance repair service.jpg',
    ],
  },
  dryers: {
    hero: [
      '/images/appliances/Home appliance maintenance.jpg',
      '/images/appliances/Appliance technician Saudi Arabia.jpg',
      '/images/appliances/Emergency appliance repair service.jpg',
    ],
  },

  // ====================================
  // Car Towing / سطحة ونقل سيارات
  // ====================================
  'car-towing': {
    hero: [
      '/images/moving/furniture-transport-Saudi-Arabia.jpg',
      '/images/moving/intercity-moving-Saudi-Arabia.jpg',
      '/images/moving/long-distance-movers.jpg',
    ],
    gallery: [
      '/images/moving/moving-truck-rental.jpg',
      '/images/moving/heavy-furniture-movers.jpg',
    ],
  },
  'city-towing': {
    hero: [
      '/images/moving/same-day-movers.jpg',
      '/images/moving/moving-service-24-hours.jpg',
    ],
  },
  'intercity-towing': {
    hero: [
      '/images/moving/long-distance-movers.jpg',
      '/images/moving/intercity-moving-Saudi-Arabia.jpg',
    ],
  },
  'luxury-car-transport': {
    hero: [
      '/images/moving/insured-moving-company.jpg',
      '/images/moving/professional-moving-team.jpg',
    ],
  },
};

// ====================================
// City-specific image utilities
// ====================================

/**
 * Get images for a specific service in a specific city
 */
export function getCityServiceImages(serviceSlug: string, citySlug: string): string[] {
  // Check for city-specific images first
  const cityKey = `${serviceSlug}-${citySlug}`;
  if (SERVICE_IMAGES[cityKey]) {
    return SERVICE_IMAGES[cityKey].hero;
  }
  
  // Check for leak detection city-specific
  if (serviceSlug === 'leaks-plumbing') {
    const leakCityKey = `leak-${citySlug}`;
    if (SERVICE_IMAGES[leakCityKey]) {
      return SERVICE_IMAGES[leakCityKey].hero;
    }
  }
  
  // Check for pest control city-specific
  if (serviceSlug === 'pest-control') {
    const pestCityKey = `pest-${citySlug}`;
    if (SERVICE_IMAGES[pestCityKey]) {
      return SERVICE_IMAGES[pestCityKey].hero;
    }
  }
  
  // Fallback to general service images
  return SERVICE_IMAGES[serviceSlug]?.hero || [];
}

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
 * Get all images (hero + gallery) for a service
 */
export function getAllServiceImages(slug: string): string[] {
  const serviceImages = SERVICE_IMAGES[slug];
  if (!serviceImages) return [];
  
  return [
    ...(serviceImages.hero || []),
    ...(serviceImages.gallery || []),
  ];
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
  const allImages = getAllServiceImages(slug);
  
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

/**
 * Get images for slider/carousel
 */
export function getSliderImages(slug: string, maxCount: number = 4): string[] {
  const heroImages = SERVICE_IMAGES[slug]?.hero || [];
  return heroImages.slice(0, maxCount);
}

/**
 * Get total image count for statistics
 */
export function getTotalImageCount(): number {
  let total = 0;
  for (const key in SERVICE_IMAGES) {
    const images = SERVICE_IMAGES[key];
    total += (images.hero?.length || 0) + (images.gallery?.length || 0);
  }
  return total;
}
