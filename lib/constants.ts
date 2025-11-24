export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://prokr.com';
export const SITE_NAME = 'Prokr';
export const SITE_NAME_AR = 'بروكر';
export const PHONE = process.env.NEXT_PUBLIC_PHONE || '966548923300';
export const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP || '966548923300';

export const DEFAULT_LOCALE = 'ar';
export const LOCALES = ['ar'] as const;

// SEO
export const DEFAULT_TITLE_AR = 'بروكر - خدمات منزلية موثوقة في السعودية';
export const DEFAULT_DESCRIPTION_AR =
  'خدمات منزلية احترافية في جميع مدن المملكة العربية السعودية. نقل العفش، التنظيف، السباكة، مكافحة الحشرات وأكثر. فنيون معتمدون وأسعار واضحة.';

// ISR
export const REVALIDATE_DEFAULT = 86400; // 1 day
export const REVALIDATE_HOMEPAGE = 3600; // 1 hour
export const REVALIDATE_CITY_HUB = 43200; // 12 hours

// Content guards
export const MIN_CONTENT_LENGTH = 300; // words
export const MIN_FAQS = 5;
export const MIN_INTERNAL_LINKS = 4;

// Sitemap
export const SITEMAP_MAX_URLS = 50000;
export const SITEMAP_MAX_SIZE = 50 * 1024 * 1024; // 50MB

// Images
export const IMAGE_QUALITY = 85;
export const IMAGE_SIZES = {
  thumbnail: 256,
  small: 384,
  medium: 640,
  large: 1024,
  hero: 1920,
};

