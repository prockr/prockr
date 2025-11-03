# دليل النشر - Prokr

## النشر على Vercel (الطريقة الموصى بها)

### الخطوات

#### 1. التحضير

تأكد من أن المشروع يعمل محلياً:

```bash
npm install
npm run build
npm start
```

#### 2. Push إلى GitHub

```bash
git init
git add .
git commit -m "Initial commit - Prokr platform"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main
```

#### 3. ربط Vercel

1. اذهب إلى [vercel.com](https://vercel.com)
2. سجل الدخول بحساب GitHub
3. اضغط "New Project"
4. اختر repository الخاص بـ Prokr
5. اضغط "Import"

#### 4. إعدادات Vercel

**Framework Preset**: Next.js

**Build Command**: `next build` (تلقائي)

**Output Directory**: `.next` (تلقائي)

**Install Command**: `npm install` (تلقائي)

#### 5. المتغيرات البيئية

أضف هذه المتغيرات في Vercel Dashboard:

```
SITE_URL=https://prokr.com
NEXT_PUBLIC_SITE_URL=https://prokr.com
NEXT_PUBLIC_PHONE=966501234567
NEXT_PUBLIC_WHATSAPP=966501234567
```

#### 6. Domain Settings

1. اذهب إلى Project Settings → Domains
2. أضف domain الخاص بك: `prokr.com`
3. أضف `www.prokr.com` كـ redirect
4. اتبع تعليمات DNS configuration

#### 7. Deploy

اضغط "Deploy" وانتظر 2-5 دقائق.

## التحقق بعد النشر

### 1. فحص الصفحات الأساسية

- ✅ `/` - الصفحة الرئيسية
- ✅ `/saudi` - صفحة المدن
- ✅ `/saudi/riyadh` - مثال صفحة مدينة
- ✅ `/saudi/riyadh/moving` - مثال money page
- ✅ `/services` - قائمة الخدمات

### 2. فحص SEO

- ✅ `/sitemaps/index.xml` - Sitemap index
- ✅ `/robots.txt` - Robots file
- ✅ View page source → تحقق من schemas
- ✅ تحقق من meta tags

### 3. فحص الأداء

استخدم [PageSpeed Insights](https://pagespeed.web.dev/):
- ✅ Desktop score ≥ 90
- ✅ Mobile score ≥ 85
- ✅ LCP ≤ 2.5s
- ✅ INP ≤ 200ms
- ✅ CLS ≤ 0.1

### 4. فحص الصور

تأكد من أن الصور تُحمّل بشكل صحيح:
- ✅ Logo في الـ header
- ✅ صور الخدمات في الـ cards
- ✅ صور hero في money pages

## Google Search Console

### 1. إضافة الموقع

1. اذهب إلى [Google Search Console](https://search.google.com/search-console)
2. أضف property: `https://prokr.com`
3. تحقق من الملكية (DNS أو HTML file)

### 2. Submit Sitemaps

```
https://prokr.com/sitemaps/index.xml
```

### 3. Request Indexing

اطلب فهرسة للصفحات المهمة:
- الصفحة الرئيسية
- صفحات المدن الرئيسية
- أهم money pages

### 4. تابع الأداء

راقب:
- ✅ Impressions
- ✅ Clicks
- ✅ CTR
- ✅ Average position
- ✅ Coverage (indexed vs errors)

## Analytics

### Google Analytics 4

1. أنشئ property في [Google Analytics](https://analytics.google.com)
2. احصل على Measurement ID (G-XXXXXXXXXX)
3. أضف في `app/layout.tsx`:

```typescript
import Script from 'next/script';

// في الـ head أو body
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

## Monitoring

### 1. Vercel Analytics (مضمّن)

تفعيل تلقائي في Vercel Dashboard:
- Real User Monitoring
- Core Web Vitals
- Traffic insights

### 2. Error Tracking

يمكن إضافة Sentry للـ error tracking:

```bash
npm install @sentry/nextjs
npx @sentry/wizard -i nextjs
```

## التحديثات المستقبلية

### Automatic Deployments

Vercel يعمل deploy تلقائي عند:
- Push إلى `main` branch → Production deployment
- Push إلى branches أخرى → Preview deployments
- Pull requests → Preview deployments

### Manual Redeploy

في Vercel Dashboard:
1. اذهب إلى Deployments
2. اختر آخر deployment ناجح
3. اضغط ⋮ → Redeploy

## Troubleshooting

### Build Errors

```bash
# محلياً
npm run build

# إذا فشل
rm -rf .next node_modules
npm install
npm run build
```

### 404 Errors

تحقق من:
- ✅ `generateStaticParams` في dynamic routes
- ✅ File names صحيحة
- ✅ `notFound()` في الحالات المناسبة

### Slow Loading

- ✅ فحص Image sizes
- ✅ تقليل JavaScript bundle
- ✅ استخدام dynamic imports للـ heavy components

### SEO Issues

- ✅ تحقق من `robots.txt` (should allow all)
- ✅ تحقق من sitemaps (should be accessible)
- ✅ تحقق من canonical URLs
- ✅ تحقق من noindex tags (should be minimal)

## Backup

### Database (إذا أضفت قاعدة بيانات لاحقاً)

استخدم Vercel Postgres أو أي خدمة خارجية.

### Code

الـ code محفوظ في GitHub - تأكد من:
- ✅ Regular commits
- ✅ Branches للـ features
- ✅ Protected main branch

## الأمان

### Environment Variables

- ✅ **لا تضع أبداً** secrets في الكود
- ✅ استخدم Environment Variables في Vercel
- ✅ استخدم `NEXT_PUBLIC_` فقط للـ public values

### HTTPS

- ✅ Vercel يوفر SSL تلقائياً
- ✅ تحقق من أن Domain يعمل على HTTPS

### Headers Security

أضف في `next.config.ts`:

```typescript
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin',
        },
      ],
    },
  ];
},
```

## الدعم

### Vercel Support

- Documentation: [vercel.com/docs](https://vercel.com/docs)
- Community: [vercel.com/community](https://vercel.com/community)

### Next.js Support

- Documentation: [nextjs.org/docs](https://nextjs.org/docs)
- GitHub: [github.com/vercel/next.js](https://github.com/vercel/next.js)

---

**مبروك! موقعك الآن في Production 🎉**

