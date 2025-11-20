export type City = {
  slug: string;
  name_ar: string;
  tier: 1 | 2 | 3;
  neighborhoods?: string[];
  // Geocoding data available via lib/geocoding/cities-geocode.ts
  // Use getCityGeocodeBySlug(slug) to access GPS coordinates and service radius
};

export const CITIES: City[] = [
  // Tier 1 - Major cities
  {
    slug: 'riyadh',
    name_ar: 'الرياض',
    tier: 1,
    neighborhoods: ['العليا', 'الياسمين', 'النرجس', 'الملز', 'الصحافة', 'الملقا', 'العقيق'],
  },
  {
    slug: 'jeddah',
    name_ar: 'جدة',
    tier: 1,
    neighborhoods: ['السلامة', 'النهضة', 'الفيصلية', 'الحمدانية', 'الروضة', 'البساتين'],
  },
  {
    slug: 'makkah',
    name_ar: 'مكة',
    tier: 1,
    neighborhoods: ['العزيزية', 'الششة', 'الزاهر', 'المعابدة'],
  },
  {
    slug: 'madinah',
    name_ar: 'المدينة المنورة',
    tier: 1,
    neighborhoods: ['العيون', 'قباء', 'الحزام الذهبي'],
  },
  {
    slug: 'dammam',
    name_ar: 'الدمام',
    tier: 1,
    neighborhoods: ['الشاطئ', 'الفيصلية', 'الأمانة', 'الشعلة'],
  },
  // Tier 2
  { slug: 'khobar', name_ar: 'الخبر', tier: 2 },
  { slug: 'dhahran', name_ar: 'الظهران', tier: 2 },
  { slug: 'taif', name_ar: 'الطائف', tier: 2 },
  { slug: 'buraydah', name_ar: 'بريدة', tier: 2 },
  { slug: 'onaizah', name_ar: 'عنيزة', tier: 2 },
  { slug: 'tabuk', name_ar: 'تبوك', tier: 2 },
  { slug: 'hail', name_ar: 'حائل', tier: 2 },
  { slug: 'abha', name_ar: 'أبها', tier: 2 },
  { slug: 'khamis-mushait', name_ar: 'خميس مشيط', tier: 2 },
  { slug: 'jazan', name_ar: 'جازان', tier: 2 },
  { slug: 'najran', name_ar: 'نجران', tier: 2 },
  { slug: 'al-bahah', name_ar: 'الباحة', tier: 2 },
  { slug: 'yanbu', name_ar: 'ينبع', tier: 2 },
  { slug: 'jubail', name_ar: 'الجبيل', tier: 2 },
  { slug: 'qatif', name_ar: 'القطيف', tier: 2 },
  {
    slug: 'al-ahsa',
    name_ar: 'الأحساء',
    tier: 2,
    neighborhoods: ['الهفوف', 'المبرز'],
  },
  { slug: 'sakaka', name_ar: 'سكاكا', tier: 2 },
  { slug: 'arar', name_ar: 'عرعر', tier: 2 },
  // Tier 3
  { slug: 'rabigh', name_ar: 'رابغ', tier: 3 },
  { slug: 'alqunfudhah', name_ar: 'القنفذة', tier: 3 },
  { slug: 'al-lith', name_ar: 'الليث', tier: 3 },
  { slug: 'bisha', name_ar: 'بيشة', tier: 3 },
  { slug: 'muhayil', name_ar: 'محايل', tier: 3 },
  { slug: 'umluj', name_ar: 'أملج', tier: 3 },
  { slug: 'duba', name_ar: 'ضباء', tier: 3 },
  { slug: 'tayma', name_ar: 'تيماء', tier: 3 },
  { slug: 'hafr-al-batin', name_ar: 'حفر الباطن', tier: 3 },
  { slug: 'ras-tanura', name_ar: 'رأس تنورة', tier: 3 },
  { slug: 'safwa', name_ar: 'صفوى', tier: 3 },
  { slug: 'sayhat', name_ar: 'سيهات', tier: 3 },
  { slug: 'az-zulfi', name_ar: 'الزلفي', tier: 3 },
  { slug: 'al-majmah', name_ar: 'المجمعة', tier: 3 },
  { slug: 'wadi-ad-dawasir', name_ar: 'وادي الدواسر', tier: 3 },
];

export function getCityBySlug(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}

export function getTier1Cities(): City[] {
  return CITIES.filter((c) => c.tier === 1);
}

export function getTier1And2Cities(): City[] {
  return CITIES.filter((c) => c.tier <= 2);
}

