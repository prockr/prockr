# دليل البدء السريع - Prokr

## التثبيت والإعداد

### 1. تثبيت المكتبات

```bash
npm install
```

### 2. إعداد المتغيرات البيئية

أنشئ ملف `.env.local` في الجذر:

```env
SITE_URL=https://prokr.com
NEXT_PUBLIC_SITE_URL=https://prokr.com
NEXT_PUBLIC_PHONE=966501234567
NEXT_PUBLIC_WHATSAPP=966501234567
```

### 3. تشغيل السيرفر المحلي

```bash
npm run dev
```

افتح المتصفح على: `http://localhost:3000`

## البنية الأساسية

### الصفحات المهمة

- `/` - الصفحة الرئيسية
- `/saudi` - قائمة جميع المدن
- `/saudi/riyadh` - صفحة مدينة الرياض
- `/saudi/riyadh/moving` - صفحة خدمة نقل العفش في الرياض (Money Page)
- `/pricing/moving/riyadh` - صفحة الأسعار
- `/faq/moving/riyadh` - صفحة الأسئلة الشائعة
- `/services` - قائمة جميع الخدمات

### الصفحات المولدة تلقائياً

المشروع يولد تلقائياً صفحات لـ:
- **45+ مدينة** في `/saudi/[city]`
- **500+ صفحة خدمة** في `/saudi/[city]/[service]`
- **500+ صفحة أسعار** في `/pricing/[service]/[city]`
- **500+ صفحة FAQ** في `/faq/[service]/[city]`

## المجلدات الأساسية

### `/data`

- `cities.ts` - بيانات جميع المدن السعودية (45+ مدينة)
- `services.ts` - بيانات جميع الخدمات (14 فئة + 80+ خدمة فرعية)

### `/lib`

- `content.ts` - توليد المحتوى العربي الفريد لكل صفحة
- `seo.ts` - إدارة SEO والـ metadata
- `schema.ts` - توليد Schema.org structured data
- `urls.ts` - بناء روابط URL
- `guards.ts` - حماية من صفحات doorway
- `sitemaps.ts` - توليد sitemaps مقسّمة
- `constants.ts` - الثوابت والإعدادات

### `/components`

- `CTASticky.tsx` - أزرار اتصال ثابتة للموبايل
- `ServiceCard.tsx` - بطاقة عرض الخدمة
- `PriceTable.tsx` - جدول الأسعار
- `FAQ.tsx` - قسم الأسئلة الشائعة
- `Breadcrumbs.tsx` - مسار التنقل
- `TrustBadges.tsx` - شارات الثقة
- `Gallery.tsx` - معرض الصور
- `RelatedLinks.tsx` - روابط ذات صلة
- `SchemaInjector.tsx` - حقن schema في الصفحة

### `/app`

هيكل Next.js App Router:
- `layout.tsx` - الـ layout الرئيسي
- `page.tsx` - الصفحة الرئيسية
- `saudi/` - صفحات المدن والخدمات
- `pricing/` - صفحات الأسعار
- `faq/` - صفحات الأسئلة
- `sitemaps/` - API routes للـ sitemaps
- `robots.txt/` - API route للـ robots.txt

## تخصيص المحتوى

### إضافة مدينة جديدة

في `data/cities.ts`:

```typescript
{
  slug: 'city-name',
  name_ar: 'اسم المدينة',
  tier: 2,
  neighborhoods: ['حي 1', 'حي 2']
}
```

### إضافة خدمة جديدة

في `data/services.ts`:

```typescript
{
  slug: 'service-name',
  name_ar: 'اسم الخدمة',
  subservices: [
    { slug: 'sub-1', name_ar: 'خدمة فرعية 1' }
  ]
}
```

### تخصيص المحتوى

المحتوى يتم توليده تلقائياً في `lib/content.ts`. يمكنك تعديل:
- النصوص التعريفية
- المميزات
- الأسعار
- الأسئلة الشائعة
- الأمثلة الواقعية

## الصور

الصور موجودة في `public/images/` ومقسمة حسب الخدمة:
- `moving/` - صور خدمات نقل العفش
- `cleaning/` - صور خدمات التنظيف
- `leaks-plumbing/` - صور كشف التسربات
- `pest-control/` - صور مكافحة الحشرات
- `ac/` - صور التكييف
- إلخ...

## البناء للإنتاج

```bash
# بناء المشروع
npm run build

# معاينة البناء
npm start
```

## التحقق من الجودة

```bash
# Type checking
npm run type-check

# Linting
npm run lint
```

## SEO

### Sitemaps

- Index: `http://localhost:3000/sitemaps/index.xml`
- Static: `http://localhost:3000/sitemaps/static.xml`
- Cities: `http://localhost:3000/sitemaps/cities-1.xml`
- Services: `http://localhost:3000/sitemaps/services-1.xml`

### Robots.txt

`http://localhost:3000/robots.txt`

### Structured Data

كل صفحة خدمة تحتوي على:
- LocalBusiness schema
- Service schema
- FAQPage schema
- BreadcrumbList schema

## الأداء

### ISR (Incremental Static Regeneration)

- الصفحة الرئيسية: 1 ساعة
- صفحات المدن: 12 ساعة
- صفحات الخدمات: 24 ساعة

### Image Optimization

الصور محسّنة تلقائياً بـ:
- WebP format
- AVIF format (modern browsers)
- Lazy loading
- Responsive sizes

## المساعدة

إذا واجهت أي مشاكل:

1. تأكد من تثبيت Node.js 18+
2. احذف `node_modules/` و `.next/` ثم أعد التثبيت
3. تحقق من ملف `.env.local`
4. راجع ملف `README.md` للمزيد من التفاصيل

## الخطوات التالية

1. ✅ راجع الصفحات المولدة
2. ✅ خصص المحتوى حسب احتياجاتك
3. ✅ أضف المزيد من الصور
4. ✅ اختبر على أجهزة مختلفة
5. ✅ افحص SEO باستخدام Google Search Console
6. ✅ تابع Core Web Vitals
7. ✅ انشر على Vercel أو خادمك المفضل

---

صنع بـ ❤️ للمملكة العربية السعودية

