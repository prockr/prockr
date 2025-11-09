# تحسين محركات البحث للذكاء الاصطناعي
# AI Search Engine Optimization (AI-SEO)

## نظرة عامة

تم تحسين الموقع بشكل شامل لمحركات البحث المدعومة بالذكاء الاصطناعي مثل:
- **Perplexity AI**
- **ChatGPT Search (OpenAI)**
- **Google Gemini/Bard**
- **Bing AI**
- **Claude AI**
- **Meta AI**

---

## الملفات المضافة

### 1. `components/AISearchOptimization.tsx`
مكون React لتحسين البيانات المنظمة:
```tsx
<AISearchOptimization
  pageType="city-service"
  data={{
    title: "نقل عفش في الرياض",
    description: "خدمة نقل عفش احترافية في الرياض",
    service: "نقل عفش",
    location: "الرياض",
    keywords: ["نقل عفش", "الرياض"],
    faqs: [...]
  }}
/>
```

### 2. `lib/ai-seo.ts`
مكتبة دوال مساعدة:
- `generateAIMetadata()` - توليد metadata محسّن
- `generateFAQSchemaForAI()` - schema للأسئلة الشائعة
- `generateServiceSchemaForAI()` - schema للخدمات
- `generateAIKeywords()` - توليد كلمات مفتاحية
- `generateAISummary()` - ملخص للـ AI

### 3. `app/ai-metadata/route.ts`
API endpoint يوفر بيانات منظمة:
```
GET /ai-metadata
```
يعيد JSON كامل عن:
- جميع الخدمات
- جميع المدن
- التغطية
- الميزات والفوائد

### 4. `public/robots.txt`
محسّن لـ AI crawlers:
```txt
User-agent: GPTBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Claude-Web
Allow: /
```

### 5. `public/.well-known/ai-plugin.json`
ملف تعريف للـ AI plugins:
```json
{
  "name_for_model": "prokr_home_services",
  "description_for_model": "...",
  "capabilities": {...}
}
```

---

## المزايا المحققة

### ✅ Structured Data (Schema.org)
- **LocalBusiness** schema
- **Service** schema
- **FAQPage** schema
- **BreadcrumbList** schema
- **AggregateOffer** schema

### ✅ Meta Tags للـ AI
```html
<meta property="ai:title" content="..." />
<meta property="ai:service_type" content="..." />
<meta property="perplexity:entity" content="..." />
<meta property="chatgpt:summary" content="..." />
<meta property="openai:title" content="..." />
```

### ✅ HTTP Headers
- `X-Robots-Tag`: للتحكم في الفهرسة
- `X-AI-Index`: السماح للـ AI بالفهرسة
- `Access-Control-Allow-Origin`: للـ API endpoints

### ✅ Semantic HTML
```html
<article itemScope itemType="https://schema.org/Article">
  <h1 itemProp="headline">...</h1>
  <div itemProp="description">...</div>
</article>
```

---

## كيفية الاستخدام

### في صفحات الخدمات:

```tsx
import { AISearchOptimization } from '@/components/AISearchOptimization';
import { generateAIMetadata } from '@/lib/ai-seo';

export const metadata = generateAIMetadata({
  title: 'نقل عفش في الرياض',
  description: '...',
  service: 'نقل عفش',
  location: 'الرياض',
  keywords: ['نقل عفش', 'الرياض', 'نقل أثاث'],
  price: { min: 800, max: 5000, currency: 'SAR' },
  features: ['فريق محترف', 'ضمان مكتوب'],
});

export default function Page() {
  return (
    <>
      <AISearchOptimization
        pageType="city-service"
        data={{...}}
      />
      {/* محتوى الصفحة */}
    </>
  );
}
```

### في المقالات:

```tsx
import { AIContentStructure } from '@/components/AISearchOptimization';

export default function BlogPost() {
  return (
    <AIContentStructure>
      <article>
        {/* محتوى المقال */}
      </article>
    </AIContentStructure>
  );
}
```

---

## الكلمات المفتاحية المحسّنة

### الكلمات الرئيسية:
- خدمات منزلية
- نقل عفش
- تنظيف منازل
- مكافحة حشرات
- كشف تسربات
- صيانة مكيفات

### الكلمات الطويلة (Long-tail):
- نقل عفش في الرياض
- شركة تنظيف منازل بجدة
- مكافحة حشرات الدمام
- كشف تسربات المياه مكة

### الكلمات الدلالية:
- احترافي
- معتمد
- ضمان مكتوب
- أسعار تنافسية
- متاح 24/7

---

## FAQs المحسّنة للـ AI

تم تنظيم الأسئلة الشائعة بطريقة تساعد AI على الفهم:

```typescript
const faqs = [
  {
    q: "كم تستغرق خدمة نقل العفش في الرياض؟",
    a: "تعتمد المدة على حجم المنزل. شقة متوسطة تستغرق 4-6 ساعات."
  },
  {
    q: "هل يوجد ضمان على الخدمة؟",
    a: "نعم، نوفر ضمان مكتوب على جميع خدماتنا."
  }
];
```

---

## محتوى محسّن للـ AI

### النصائح:
1. **عناوين واضحة**: استخدم H1, H2, H3 بشكل دلالي
2. **فقرات قصيرة**: 2-3 جمل لكل فقرة
3. **قوائم منظمة**: استخدم bullet points
4. **معلومات دقيقة**: أرقام، أسعار، مواعيد
5. **روابط داخلية**: مع anchor text واضح

### مثال:
```markdown
## خدمة نقل العفش في الرياض

نوفر خدمة نقل عفش احترافية في الرياض على مدار 24/7.

**المزايا:**
- فريق محترف معتمد
- ضمان مكتوب
- أسعار من 800-5000 ريال

**الأسعار:**
- شقة صغيرة: 800-1200 ريال
- شقة متوسطة: 1500-2500 ريال
- فيلا كبيرة: 3000-5000 ريال
```

---

## اختبار التحسينات

### 1. Google Rich Results Test
```
https://search.google.com/test/rich-results
```

### 2. Schema Markup Validator
```
https://validator.schema.org/
```

### 3. OpenGraph Debugger
```
https://www.opengraph.xyz/
```

### 4. AI Crawler Headers
```bash
curl -I https://prokr.com/saudi/riyadh/moving
```

---

## Endpoints للـ AI

### 1. AI Metadata
```
GET /ai-metadata
```
بيانات شاملة عن الموقع بصيغة JSON

### 2. AI Plugin Manifest
```
GET /.well-known/ai-plugin.json
```
تعريف للـ AI plugins

### 3. Robots.txt
```
GET /robots.txt
```
قواعد للـ AI crawlers

---

## الإحصائيات

- **659 صفحة** مُحسّنة للـ AI
- **14 خدمة** رئيسية
- **75+ خدمة** فرعية
- **45+ مدينة** مغطاة
- **1200-1700 كلمة** محتوى لكل صفحة
- **100+ FAQ** محسّنة

---

## المراجع

- [Schema.org](https://schema.org/)
- [OpenAI Plugin Docs](https://platform.openai.com/docs/plugins)
- [Google AI Overview](https://developers.google.com/search/docs/appearance/google-ai-overviews)
- [Perplexity AI](https://www.perplexity.ai/)

---

## الدعم

للمزيد من المعلومات أو الاستفسارات:
- Email: info@prokr.com
- Website: https://prokr.com
- Phone: +966-50-000-0000

---

**آخر تحديث:** 2025-01-09
**الإصدار:** 2.0
**الحالة:** ✅ مفعّل ويعمل

