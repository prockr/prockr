# 📊 Quality Metrics & Anti-Doorway Guidelines

## Overview

This document outlines the quality standards enforced by Prokr.com to comply with Google's guidelines against doorway pages and ensure all content provides unique value to users.

---

## 🎯 Core Principles

### 1. **No Doorway Pages**
- Every page must provide **unique, substantial value**
- Content must be **genuinely useful** for the specific city/service combination
- Avoid thin, repetitive, or auto-generated content

### 2. **Quality First**
- Better to have **fewer high-quality pages** than many thin pages
- Pages that don't meet standards are marked `noindex,follow`
- Only quality pages are included in sitemaps

### 3. **Local Relevance**
- Content must mention **specific local information**
- Include **neighborhood names** for Tier 1 cities
- Provide **city-specific examples** and scenarios

---

## 📏 Quantitative Requirements

All content is checked against these metrics before indexing:

### Minimum Word Count
```
Intro: ≥ 300 words (Arabic)
Total content: ≥ 400 characters
```

### FAQ Requirements
```
Minimum FAQs: 5
City mentions in FAQs: ≥ 3
Substantial answers (>50 chars): ≥ 2
```

### Internal Links
```
Minimum internal links: 4
Links to: subservices, pricing, FAQs, related services
```

### Local Content
```
City name mentions: ≥ 2 (Tier 2/3), ≥ 3 (Tier 1)
Neighborhood mentions: ≥ 1 (Tier 1 cities only)
Local example: Required (>100 chars)
```

---

## 🔍 Quality Checks

### 1. Content Uniqueness Check

**Function:** `checkContentQuality()`  
**Location:** `lib/guards.ts`

Validates:
- ✅ Word count
- ✅ FAQ count and uniqueness
- ✅ Local example presence
- ✅ Neighborhood mentions
- ✅ City-specific information
- ✅ Unique value provision
- ✅ Internal link count

**Return:** `ContentQuality` object with detailed issues

---

### 2. FAQ Uniqueness

**Function:** `checkFAQUniqueness()`

Requirements:
- At least **3 FAQs** must mention the city name
- At least **2 FAQs** must have answers >50 characters
- Questions should be **specific to the city**, not generic

**Example:**
```typescript
// ✅ Good: City-specific
{
  q: "كم تستغرق خدمة نقل العفش في حي العليا بالرياض؟",
  a: "عادةً تستغرق الخدمة في حي العليا من 3-5 ساعات..."
}

// ❌ Bad: Generic
{
  q: "كم تستغرق خدمة نقل العفش؟",
  a: "يعتمد على الحجم"
}
```

---

### 3. City-Specific Information

**Function:** `checkCitySpecificInfo()`

Requirements:
- **Tier 1 cities:** City name mentioned ≥ 3 times
- **Tier 2/3 cities:** City name mentioned ≥ 2 times
- Content should include local context, not just city name

---

### 4. Unique Value Check

**Function:** `checkUniqueValue()`

Criteria (at least 3 must pass):
- ✅ Has 3+ value propositions
- ✅ Intro >400 characters
- ✅ Detailed example >100 characters
- ✅ 5+ FAQs with substantial answers (>30 chars each)

---

## 🏙️ City Tier Strategy

### Tier 1 Cities (Riyadh, Jeddah, Makkah, Madinah, Dammam)

**Content Requirements:**
- Full service coverage (all services + subservices)
- Neighborhood-specific content mandatory
- More detailed examples and FAQs
- Higher content quality standards

**Example:**
```
- City mentions: ≥ 3
- Neighborhoods: Must mention at least 1
- FAQs: 7+ (more detailed)
- Examples: Include specific neighborhood
```

---

### Tier 2 Cities (15 cities)

**Content Requirements:**
- Main services + high-demand subservices
- City-specific content required
- Standard quality metrics

**High-Demand Services:**
- moving
- cleaning
- leaks-plumbing
- pest-control
- ac

---

### Tier 3 Cities (15+ cities)

**Content Requirements:**
- Essential services only (moving, cleaning)
- Basic city-specific content
- Standard quality metrics
- Focus on quality over quantity

---

## 🚫 When to Noindex

A page receives `noindex,follow` if ANY of these fail:

1. ❌ Word count < 300
2. ❌ FAQ count < 5
3. ❌ FAQs too generic (not city-specific)
4. ❌ No local example
5. ❌ Internal links < 4
6. ❌ No city-specific information
7. ❌ No unique value (fails 2+ criteria)

**Meta Tag:** `<meta name="robots" content="noindex,follow">`

**Sitemap:** Excluded from sitemap.xml

**Crawling:** Allowed (follow), but not indexed

---

## 📈 Quality Scoring

### Excellent (90-100%)
```
✅ All criteria passed
✅ No issues
✅ Should index: true
✅ Included in sitemap
```

### Good (75-89%)
```
✅ Core criteria passed
⚠️ 1-2 minor issues
✅ Should index: true (with improvements)
✅ Included in sitemap
```

### Poor (50-74%)
```
❌ Some criteria failed
⚠️ 3-5 issues
❌ Should index: false
❌ Not included in sitemap
```

### Fail (<50%)
```
❌ Major criteria failed
❌ 6+ issues
❌ Should index: false
❌ Not included in sitemap
```

---

## 🛠️ Implementation

### In Page Components

```typescript
import { checkContentQuality } from '@/lib/guards';
import { composeServiceCityContent } from '@/lib/content';

// Generate content
const content = composeServiceCityContent({ city, service });

// Check quality
const quality = checkContentQuality({
  intro: content.intro,
  faqs: content.faqs,
  example: content.example,
  valueProps: content.valueProps,
  internalLinks: content.relatedLinks?.length || 0,
  city,
  service,
});

// Apply noindex if needed
const shouldIndex = quality.shouldIndex;
```

---

### In Metadata Generation

```typescript
export async function generateMetadata(): Promise<Metadata> {
  const quality = checkContentQuality(content);
  
  return {
    title: '...',
    description: '...',
    robots: {
      index: quality.shouldIndex,
      follow: true,
    },
  };
}
```

---

### In Sitemaps

```typescript
import { shouldIncludeInSitemap } from '@/lib/guards';

// Only include quality pages
if (shouldIncludeInSitemap(quality)) {
  urls.push({
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  });
}
```

---

## 📊 Content Templates

### Required Sections

Every money page must include:

1. **H1:** Service name + city name
2. **Intro (80-120 words):** Local context, neighborhoods, seasonal factors
3. **Value Props (3-5 items):** Unique selling points
4. **What's Included:** List of included services
5. **Add-ons:** Optional extras
6. **Price Table:** 3 tiers (small, medium, large)
7. **FAQs (5-7):** City-specific questions
8. **Local Example:** Real-world scenario in a specific neighborhood
9. **Related Links (4-8):** Internal links to subservices, pricing, FAQs

---

## 🔄 Continuous Improvement

### Monthly Review
- Analyze low-quality pages
- Improve content templates
- Update guards based on learnings

### Metrics to Track
- Index rate (% of pages indexed)
- Average quality score
- User engagement metrics
- Search visibility

---

## 📚 References

### Google Guidelines
- [Quality Guidelines](https://developers.google.com/search/docs/essentials/spam-policies)
- [Doorway Pages](https://developers.google.com/search/docs/essentials/spam-policies#doorways)
- [Helpful Content System](https://developers.google.com/search/docs/essentials/creating-helpful-content)

### Internal Documentation
- `lib/guards.ts` - Quality check implementation
- `lib/content.ts` - Content generation templates
- `lib/seo.ts` - SEO utilities
- `prompt.md` - Project requirements

---

## 🎯 Success Criteria

**A successful page:**
- ✅ Provides real value to users in that specific city
- ✅ Contains unique, non-duplicated content
- ✅ Mentions local facts and neighborhoods
- ✅ Answers city-specific questions
- ✅ Links to relevant resources
- ✅ Passes all quality checks
- ✅ Is indexed by Google
- ✅ Ranks for relevant local queries

---

## 📝 Examples

### ✅ Good Example: Riyadh Moving Page

```
Word Count: 350 words
FAQs: 7 (5 mention "الرياض")
City Mentions: 4 times
Neighborhoods: "العليا", "الياسمين" mentioned
Local Example: "عميل في حي النرجس..."
Internal Links: 6 links
Quality Score: 95%
Should Index: YES
```

### ❌ Bad Example: Generic Page

```
Word Count: 180 words
FAQs: 3 (0 mention city)
City Mentions: 1 time
Neighborhoods: None
Local Example: Generic example
Internal Links: 2 links
Quality Score: 35%
Should Index: NO
```

---

## 🚀 Next Steps

1. **Monitor** quality metrics in production
2. **Improve** templates based on real data
3. **A/B test** content variations
4. **Expand** to English when quality is proven
5. **Scale** to more cities with confidence

---

**Last Updated:** November 2025  
**Version:** 1.0  
**Status:** ✅ Active

