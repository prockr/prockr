# Prokr - خدمات منزلية في المملكة العربية السعودية

منصة موثوقة لربطك بأفضل مقدمي الخدمات المنزلية في المملكة العربية السعودية.

## التقنيات المستخدمة

- **Next.js 14** - App Router + TypeScript
- **TailwindCSS** - للتصميم
- **Arabic RTL** - واجهة عربية كاملة
- **SEO Optimized** - محسّن لمحركات البحث
- **Programmatic SEO** - توليد صفحات ديناميكية

## الميزات الرئيسية

- ✅ **تغطية شاملة**: أكثر من 45 مدينة سعودية
- ✅ **خدمات متنوعة**: 14+ فئة خدمة مع خدمات فرعية
- ✅ **محتوى عربي فريد**: محتوى مخصص لكل مدينة وخدمة
- ✅ **SEO متقدم**: Schema markup، Sitemaps، وoptimized metadata
- ✅ **أداء عالي**: ISR، Image optimization، وCore Web Vitals
- ✅ **Quality Guards**: حماية من صفحات الـ doorway

## البنية الأساسية

```
prokr/
├── app/                           # Next.js App Router
│   ├── layout.tsx                # Layout رئيسي
│   ├── page.tsx                  # الصفحة الرئيسية
│   ├── saudi/                    # صفحات المدن والخدمات
│   │   ├── page.tsx             # قائمة المدن
│   │   └── [city]/
│   │       ├── page.tsx         # صفحة المدينة
│   │       └── [service]/
│   │           └── page.tsx     # صفحة الخدمة (Money Page)
│   ├── pricing/                 # صفحات الأسعار
│   ├── faq/                     # صفحات الأسئلة الشائعة
│   ├── services/                # قائمة الخدمات
│   ├── sitemaps/                # Sitemaps مقسّمة
│   └── robots.txt/              # Robots.txt
├── components/                   # مكونات قابلة لإعادة الاستخدام
├── data/                         # بيانات المدن والخدمات
├── lib/                          # Utilities ومساعدات
└── public/                       # الصور والملفات الثابتة
```

## البدء

### المتطلبات

- Node.js 18+
- npm أو yarn

### التثبيت

```bash
# تثبيت المكتبات
npm install

# تشغيل السيرفر المحلي
npm run dev

# فتح في المتصفح
# http://localhost:3000
```

### البناء للإنتاج

```bash
# بناء المشروع
npm run build

# تشغيل النسخة المبنية
npm start
```

## المتغيرات البيئية

أنشئ ملف `.env.local`:

```env
SITE_URL=https://prokr.com
NEXT_PUBLIC_SITE_URL=https://prokr.com
NEXT_PUBLIC_PHONE=966501234567
NEXT_PUBLIC_WHATSAPP=966501234567
```

## البيانات

### المدن (data/cities.ts)

- **Tier 1**: المدن الرئيسية (الرياض، جدة، مكة، المدينة، الدمام)
- **Tier 2**: مدن متوسطة (23 مدينة)
- **Tier 3**: مدن صغيرة (17 مدينة)

### الخدمات (data/services.ts)

14 فئة خدمة رئيسية:
- نقل العفش
- التنظيف
- كشف التسربات والسباكة
- مكافحة الحشرات
- التكييف
- الكهرباء
- الدهانات والجبس
- النجارة
- الألمنيوم والزجاج
- الأرضيات
- العزل والأسطح
- الأجهزة المنزلية
- تنسيق الحدائق
- سطحة ونقل سيارات

## SEO

### Structured Data (Schema.org)

- ✅ LocalBusiness
- ✅ Service
- ✅ FAQPage
- ✅ BreadcrumbList

### Sitemaps

- Sitemap Index: `/sitemaps/index.xml`
- Sharded Sitemaps: `/sitemaps/[shard].xml`
- أقل من 50,000 URL لكل sitemap

### Content Quality

- ✅ محتوى فريد لكل مدينة
- ✅ أسئلة شائعة مخصصة
- ✅ أمثلة محلية واقعية
- ✅ حد أدنى 300 كلمة للمحتوى

## الأداء

### Core Web Vitals Targets

- **LCP** ≤ 2.5s
- **INP** ≤ 200ms
- **CLS** ≤ 0.1

### Optimizations

- ISR (Incremental Static Regeneration)
- Image Optimization (WebP, AVIF)
- Font Optimization (next/font)
- Lazy Loading
- Static Generation

## المساهمة

نرحب بمساهماتكم! يرجى:

1. Fork المشروع
2. إنشاء branch جديد (`git checkout -b feature/amazing-feature`)
3. Commit التغييرات (`git commit -m 'Add amazing feature'`)
4. Push إلى الـ branch (`git push origin feature/amazing-feature`)
5. فتح Pull Request

## الترخيص

هذا المشروع مرخص تحت MIT License.

## التواصل

- الموقع: [prokr.com](https://prokr.com)
- البريد الإلكتروني: info@prokr.com

---

صنع بـ ❤️ في المملكة العربية السعودية

