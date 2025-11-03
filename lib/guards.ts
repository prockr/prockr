import type { City } from '@/data/cities';
import type { ServiceCategory, Subservice } from '@/data/services';
import { MIN_CONTENT_LENGTH, MIN_FAQS, MIN_INTERNAL_LINKS } from './constants';

/**
 * Quality guards to prevent doorway pages (Google anti-spam compliance)
 */

export type ContentQuality = {
  isUnique: boolean;
  wordCount: number;
  faqCount: number;
  internalLinkCount: number;
  hasLocalExample: boolean;
  hasNeighborhoodMention: boolean;
  hasCitySpecificInfo: boolean;
  hasUniqueValue: boolean;
  shouldIndex: boolean;
  issues: string[];
};

export type ContentCheckInput = {
  intro: string;
  faqs: Array<{ q: string; a: string }>;
  example?: string;
  valueProps?: string[];
  internalLinks?: number;
  city: City;
  service?: ServiceCategory;
};

/**
 * Comprehensive content quality check
 * Returns detailed analysis of content uniqueness and value
 */
export function checkContentQuality(content: ContentCheckInput): ContentQuality {
  const issues: string[] = [];
  
  // 1. Word count check
  const wordCount = countWords(content.intro);
  if (wordCount < MIN_CONTENT_LENGTH) {
    issues.push(`Intro too short: ${wordCount} words (min: ${MIN_CONTENT_LENGTH})`);
  }

  // 2. FAQ count check
  const faqCount = content.faqs.length;
  if (faqCount < MIN_FAQS) {
    issues.push(`Not enough FAQs: ${faqCount} (min: ${MIN_FAQS})`);
  }

  // 3. FAQ uniqueness check
  const hasUniqueFAQs = checkFAQUniqueness(content.faqs, content.city);
  if (!hasUniqueFAQs) {
    issues.push('FAQs are too generic; need city-specific questions');
  }

  // 4. Internal links check
  const internalLinkCount = content.internalLinks || 0;
  if (internalLinkCount < MIN_INTERNAL_LINKS) {
    issues.push(`Not enough internal links: ${internalLinkCount} (min: ${MIN_INTERNAL_LINKS})`);
  }

  // 5. Local example check
  const hasLocalExample = !!content.example && 
    content.example.length > 50 && 
    content.example.includes(content.city.name_ar);
  if (!hasLocalExample) {
    issues.push('Missing or insufficient local example');
  }

  // 6. Neighborhood mention check
  const hasNeighborhoodMention = checkNeighborhoodMention(
    content.intro + (content.example || ''),
    content.city
  );
  if (!hasNeighborhoodMention && content.city.neighborhoods && content.city.neighborhoods.length > 0) {
    issues.push('No neighborhood mentions (recommended for Tier 1 cities)');
  }

  // 7. City-specific information check
  const hasCitySpecificInfo = checkCitySpecificInfo(content.intro, content.city);
  if (!hasCitySpecificInfo) {
    issues.push('Content lacks city-specific information');
  }

  // 8. Unique value check
  const hasUniqueValue = checkUniqueValue(content);
  if (!hasUniqueValue) {
    issues.push('Content provides insufficient unique value');
  }

  // 9. Overall uniqueness
  const isUnique =
    wordCount >= MIN_CONTENT_LENGTH &&
    faqCount >= MIN_FAQS &&
    hasUniqueFAQs &&
    hasLocalExample &&
    hasCitySpecificInfo &&
    internalLinkCount >= MIN_INTERNAL_LINKS;

  // Determine if page should be indexed
  const shouldIndex = isUnique && hasUniqueValue && issues.length === 0;

  return {
    isUnique,
    wordCount,
    faqCount,
    internalLinkCount,
    hasLocalExample,
    hasNeighborhoodMention,
    hasCitySpecificInfo,
    hasUniqueValue,
    shouldIndex,
    issues,
  };
}

/**
 * Helper: Count words in Arabic/English text
 */
function countWords(text: string): number {
  // Handle Arabic and English text
  return text.split(/\s+/).filter((word) => word.length > 0).length;
}

/**
 * Helper: Check FAQ uniqueness
 * FAQs should mention the city name and avoid generic questions
 */
function checkFAQUniqueness(faqs: Array<{ q: string; a: string }>, city: City): boolean {
  // At least 3 FAQs should mention the city
  const cityMentions = faqs.filter(
    (faq) => faq.q.includes(city.name_ar) || faq.a.includes(city.name_ar)
  ).length;
  
  // At least 2 FAQs should have substantial answers (>50 chars)
  const substantialAnswers = faqs.filter((faq) => faq.a.length > 50).length;
  
  return cityMentions >= 3 && substantialAnswers >= 2;
}

/**
 * Helper: Check for neighborhood mentions
 */
function checkNeighborhoodMention(text: string, city: City): boolean {
  if (!city.neighborhoods || city.neighborhoods.length === 0) {
    return true; // No neighborhoods defined, skip check
  }
  
  // Check if at least one neighborhood is mentioned
  return city.neighborhoods.some((neighborhood) => text.includes(neighborhood));
}

/**
 * Helper: Check for city-specific information
 * Should mention local facts, not generic statements
 */
function checkCitySpecificInfo(intro: string, city: City): boolean {
  // City name must be mentioned at least twice
  const cityMentions = (intro.match(new RegExp(city.name_ar, 'g')) || []).length;
  
  // For Tier 1 cities, expect more specific mentions
  if (city.tier === 1) {
    return cityMentions >= 3;
  }
  
  return cityMentions >= 2;
}

/**
 * Helper: Check if content provides unique value
 * Avoid thin, repetitive content
 */
function checkUniqueValue(content: ContentCheckInput): boolean {
  const { intro, faqs, valueProps, example } = content;
  
  // Check for variety in content
  const hasValueProps = valueProps && valueProps.length >= 3;
  const hasSubstantialIntro = intro.length > 400; // chars
  const hasDetailedExample = example && example.length > 100;
  const hasVariedFAQs = faqs.length >= 5 && faqs.every((faq) => faq.a.length > 30);
  
  // At least 3 of these should be true
  const criteria = [hasValueProps, hasSubstantialIntro, hasDetailedExample, hasVariedFAQs];
  const passedCriteria = criteria.filter(Boolean).length;
  
  return passedCriteria >= 3;
}

/**
 * Determine if a subservice page should be generated
 * Based on city tier and service demand
 */
export function shouldGenerateSubservice(
  service: ServiceCategory,
  subservice: Subservice,
  city: City
): boolean {
  // Always generate subservices for Tier 1 cities
  if (city.tier === 1) {
    return true;
  }

  // For Tier 2, generate for high-demand services only
  if (city.tier === 2) {
    const highDemandServices = ['moving', 'cleaning', 'leaks-plumbing', 'pest-control', 'ac'];
    return highDemandServices.includes(service.slug);
  }

  // For Tier 3, only generate for moving and cleaning (most common)
  if (city.tier === 3) {
    return ['moving', 'cleaning'].includes(service.slug);
  }

  return false;
}

/**
 * Generate robots meta tag based on content quality
 */
export function getRobotsMetaTag(quality: ContentQuality): string {
  if (quality.shouldIndex) {
    return 'index,follow';
  }
  return 'noindex,follow'; // Allow crawling but don't index thin content
}

/**
 * Check if page should be included in sitemap
 */
export function shouldIncludeInSitemap(quality: ContentQuality): boolean {
  return quality.shouldIndex && quality.issues.length === 0;
}

