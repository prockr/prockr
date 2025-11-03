You are a senior architect for Next.js 14 (App Router + TypeScript) and a Google Search Central–aligned SEO engineer. 
Build a production-grade repo for *prokr.com* (Arabic UI, RTL) with *ENGLISH URL slugs*. 
The site programmatically covers ALL core home-services across ALL Saudi cities, while strictly following Google guidelines (no doorway pages; unique, helpful content; valid structured data; indexable, shardable sitemaps; Core Web Vitals budgets).

========================
0) NON-NEGOTIABLE PRINCIPLES
========================
- Arabic UI text (lang="ar", dir="rtl"). All visible content is Arabic. 
- All path segments (folders/slugs) are ENGLISH: e.g., /saudi/riyadh/moving/deep-cleaning/.
- Programmatic SEO with QUALITY GUARDS:
  • Generate pages only when uniqueness checks pass (min 300 words, city-specific data, distinct FAQs, examples, and internal links). 
  • If a page fails uniqueness checks or is incomplete → render but set <meta name="robots" content="noindex,follow"> and exclude from sitemap.
  • Never auto-redirect based on IP or Accept-Language; prepare for hreflang without enforced redirection.
- Clean URL hygiene: lower-case; hyphens for word separation; stable slugs; no file extensions.

========================
1) STACK & PROJECT SETUP
========================
- Next.js 14 (App Router) + TypeScript + TailwindCSS + ESLint + Prettier.
- Fonts via next/font (Tajawal or Noto Kufi Arabic).
- Images optimized (next/image) + WebP + AVIF.
- ISR default revalidate: 86_400s (1 day). Per-route overrides allowed.
- Repo skeleton:
  /app
    /(marketing)/page.tsx          → Arabic homepage
    /saudi/page.tsx                → KSA Hub (cities/services)
    /saudi/[city]/page.tsx         → City Hub
    /saudi/[city]/[service]/page.tsx           → Money page: Service × City
    /saudi/[city]/[service]/[subservice]/page.tsx → Long-tail (guarded)
    /pricing/[service]/[city]/page.tsx
    /faq/[service]/[city]/page.tsx
    /deals/[service]/[city]/page.tsx
    /emergency/[service]/[city]/page.tsx
    /services/page.tsx
    /providers/page.tsx
    /coverage/page.tsx
    /sitemaps/index/route.ts      → sitemap index
    /sitemaps/[shard]/route.ts    → sharded sitemaps (≤50k URLs each)
    /robots.txt/route.ts
    /manifest.webmanifest
  /components (CTASticky, CitySelector, ServiceCard, PriceTable, FAQ, Breadcrumbs, TrustBadges, Gallery, RelatedLinks, SchemaInjector)
  /data (cities.ts, services.ts, content-seeds.ts)
  /lib  (seo.ts, schema.ts, urls.ts, content.ts, sitemaps.ts, guards.ts, constants.ts)
  /public (og templates, icons)

- next.config.ts: i18n with locales ['ar'], defaultLocale 'ar'. Prepare alternates/hreflang utilities for future EN.

========================
2) TAXONOMY (DATA LAYER)
========================
Create strongly-typed data in /data with EN slugs + Arabic names.

2.1) Cities (/data/cities.ts)
export type City = { slug: string; name_ar: string; tier: 1|2|3; neighborhoods?: string[] }
export const CITIES: City[] = [
  // Tier 1
  {slug:'riyadh', name_ar:'الرياض', tier:1, neighborhoods:['العليا','الياسمين','النرجس','الملز','الصحافة']},
  {slug:'jeddah', name_ar:'جدة', tier:1, neighborhoods:['السلامة','النهضة','الفيصلية','الحمدانية','الروضة']},
  {slug:'makkah', name_ar:'مكة', tier:1},
  {slug:'madinah', name_ar:'المدينة المنورة', tier:1},
  {slug:'dammam', name_ar:'الدمام', tier:1},
  // Tier 2 (examples; include all)
  {slug:'khobar', name_ar:'الخبر', tier:2},{slug:'dhahran', name_ar:'الظهران', tier:2},{slug:'taif', name_ar:'الطائف', tier:2},
  {slug:'buraydah', name_ar:'بريدة', tier:2},{slug:'onaizah', name_ar:'عنيزة', tier:2},{slug:'tabuk', name_ar:'تبوك', tier:2},
  {slug:'hail', name_ar:'حائل', tier:2},{slug:'abha', name_ar:'أبها', tier:2},{slug:'khamis-mushait', name_ar:'خميس مشيط', tier:2},
  {slug:'jazan', name_ar:'جازان', tier:2},{slug:'najran', name_ar:'نجران', tier:2},{slug:'al-bahah', name_ar:'الباحة', tier:2},
  {slug:'yanbu', name_ar:'ينبع', tier:2},{slug:'jubail', name_ar:'الجبيل', tier:2},{slug:'qatif', name_ar:'القطيف', tier:2},
  {slug:'al-ahsa', name_ar:'الأحساء', tier:2, neighborhoods:['الهفوف','المبرز']},{slug:'sakaka', name_ar:'سكاكا', tier:2},{slug:'arar', name_ar:'عرعر', tier:2},
  // Tier 3 (extend as needed)
  {slug:'rabigh', name_ar:'رابغ', tier:3},{slug:'alqunfudhah', name_ar:'القنفذة', tier:3},{slug:'al-lith', name_ar:'الليث', tier:3},
  {slug:'bisha', name_ar:'بيشة', tier:3},{slug:'muhayil', name_ar:'محايل', tier:3},{slug:'umluj', name_ar:'أملج', tier:3},
  {slug:'duba', name_ar:'ضباء', tier:3},{slug:'tayma', name_ar:'تيماء', tier:3},{slug:'hafr-al-batin', name_ar:'حفر الباطن', tier:3},
  {slug:'ras-tanura', name_ar:'رأس تنورة', tier:3},{slug:'safwa', name_ar:'صفوى', tier:3},{slug:'sayhat', name_ar:'سيهات', tier:3},
  {slug:'az-zulfi', name_ar:'الزلفي', tier:3},{slug:'al-majmah', name_ar:'المجمعة', tier:3},{slug:'wadi-ad-dawasir', name_ar:'وادي الدواسر', tier:3}
];

2.2) Services (/data/services.ts)
export type ServiceCategory = { slug: string; name_ar: string; subservices: {slug:string; name_ar:string}[] }
export const SERVICES: ServiceCategory[] = [
  {slug:'moving', name_ar:'نقل العفش', subservices:[
    {slug:'apartment-moving', name_ar:'نقل شقق'},{slug:'villa-moving', name_ar:'نقل فلل'},{slug:'office-moving', name_ar:'نقل مكاتب'},
    {slug:'disassembly-assembly', name_ar:'فك وتركيب الأثاث'},{slug:'furniture-packing', name_ar:'تغليف الأثاث'},
    {slug:'crane-lifting', name_ar:'ونش رفع'},{slug:'city-to-city', name_ar:'نقل بين المدن'},{slug:'storage', name_ar:'تخزين العفش'},
    {slug:'moving-boxes', name_ar:'كراتين نقل'},{slug:'insurance-warranty', name_ar:'تأمين وضمان'}
  ]},
  {slug:'cleaning', name_ar:'التنظيف', subservices:[
    {slug:'hourly-cleaning', name_ar:'تنظيف بالساعة'},{slug:'deep-cleaning', name_ar:'تنظيف عميق'},{slug:'post-construction', name_ar:'تنظيف بعد التشطيب'},
    {slug:'tank-cleaning', name_ar:'تنظيف خزانات'},{slug:'carpet-rug', name_ar:'تنظيف سجاد وموكيت'},{slug:'sofa-curtains', name_ar:'غسيل كنب وستائر'},
    {slug:'sanitization', name_ar:'تعقيم وتطهير'},{slug:'marble-polishing', name_ar:'جلي وتلميع رخام'},{slug:'facade-cleaning', name_ar:'تنظيف واجهات زجاج'}
  ]},
  {slug:'leaks-plumbing', name_ar:'كشف التسربات والسباكة', subservices:[
    {slug:'thermal-leak-detection', name_ar:'كشف تسربات حراري'},{slug:'acoustic-leak-detection', name_ar:'كشف تسربات صوتي'},
    {slug:'pipe-repair', name_ar:'إصلاح مواسير'},{slug:'drain-unclogging', name_ar:'تسليك مجاري'},
    {slug:'bathroom-kitchen-waterproofing', name_ar:'عزل حمامات ومطابخ'},{slug:'pumps-valves', name_ar:'مضخات ومحابس'},{slug:'tank-leaks', name_ar:'تسربات خزانات'}
  ]},
  {slug:'pest-control', name_ar:'مكافحة الحشرات', subservices:[
    {slug:'general-spray', name_ar:'رش عام'},{slug:'cockroaches', name_ar:'مكافحة الصراصير'},{slug:'ants', name_ar:'مكافحة النمل'},
    {slug:'rodents', name_ar:'القوارض والفئران'},{slug:'bed-bugs', name_ar:'بقّ الفراش'},{slug:'termites', name_ar:'النمل الأبيض (الأرضة)'},
    {slug:'municipality-certificate', name_ar:'شهادة بلدية'},{slug:'annual-contracts', name_ar:'عقود صيانة دورية'}
  ]},
  {slug:'ac', name_ar:'التكييف', subservices:[
    {slug:'split-ac-cleaning', name_ar:'تنظيف مكيفات سبليت'},{slug:'duct-cleaning', name_ar:'تنظيف دكت'},
    {slug:'maintenance-repair', name_ar:'صيانة وأعطال'},{slug:'freon-refill', name_ar:'شحن فريون'},
    {slug:'ac-installation', name_ar:'تركيب مكيفات'},{slug:'unit-relocation', name_ar:'نقل وتركيب وحدات'}
  ]},
  {slug:'electricity', name_ar:'الكهرباء', subservices:[
    {slug:'electrical-faults', name_ar:'أعطال كهرباء'},{slug:'panels-distribution', name_ar:'لوحات وتوزيع'},
    {slug:'wiring-lighting', name_ar:'تمديدات وإنارة'},{slug:'cctv-systems', name_ar:'كاميرات وأنظمة'}
  ]},
  {slug:'painting-gypsum', name_ar:'الدهانات والجبس', subservices:[
    {slug:'interior-painting', name_ar:'دهانات داخلية'},{slug:'exterior-painting', name_ar:'دهانات خارجية'},
    {slug:'wallpaper', name_ar:'ورق جدران'},{slug:'gypsum-board', name_ar:'جبس بورد'},{slug:'decor', name_ar:'ديكورات'}
  ]},
  {slug:'carpentry', name_ar:'النجارة', subservices:[
    {slug:'kitchen-cabinets', name_ar:'تصنيع مطابخ'},{slug:'doors-windows', name_ar:'أبواب وشبابيك'},
    {slug:'bedrooms', name_ar:'غرف نوم'},{slug:'furniture-repair', name_ar:'تصليح أثاث'}
  ]},
  {slug:'aluminum-glass', name_ar:'الألمنيوم والزجاج', subservices:[
    {slug:'aluminum-windows-doors', name_ar:'شبابيك وأبواب ألمنيوم'},{slug:'glass-facades', name_ar:'واجهات زجاج'},{slug:'shades-curtains', name_ar:'مظلات وستائر'}
  ]},
  {slug:'flooring', name_ar:'الأرضيات', subservices:[
    {slug:'ceramic-porcelain', name_ar:'سيراميك وبورسلان'},{slug:'parquet-vinyl', name_ar:'باركيه وفينيل'},
    {slug:'marble-granite', name_ar:'رخام وجرانيت'},{slug:'grinding-polishing', name_ar:'جلي وتلميع'}
  ]},
  {slug:'insulation-roofs', name_ar:'العزل والأسطح', subservices:[
    {slug:'water-proofing', name_ar:'عزل مائي'},{slug:'thermal-insulation', name_ar:'عزل حراري'},
    {slug:'foam-bitumen', name_ar:'عزل فوم وبيتومين'},{slug:'cracks-treatment', name_ar:'معالجة تشققات الأسطح'}
  ]},
  {slug:'appliances', name_ar:'الأجهزة المنزلية', subservices:[
    {slug:'washing-machines', name_ar:'صيانة غسالات'},{slug:'refrigerators', name_ar:'صيانة ثلاجات'},
    {slug:'ovens-stoves', name_ar:'صيانة أفران وبوتاجازات'},{slug:'dryers', name_ar:'نشافات ومجففات'}
  ]},
  {slug:'landscaping', name_ar:'تنسيق الحدائق', subservices:[
    {slug:'lawn-mowing', name_ar:'قص نجيل'},{slug:'irrigation-systems', name_ar:'شبكات ري'},{slug:'garden-design', name_ar:'تصميم حدائق'},{slug:'palm-trees', name_ar:'نخيل وأشجار'}
  ]},
  {slug:'car-towing', name_ar:'سطحة ونقل سيارات', subservices:[
    {slug:'city-towing', name_ar:'سطحة داخل المدينة'},{slug:'intercity-towing', name_ar:'سطحة بين المدن'},{slug:'luxury-car-transport', name_ar:'نقل سيارات مميزة'}
  ]}
];

========================
3) URL SCHEME & BUILDERS
========================
- EN-only slugs with hyphens; no underscores; all-lowercase.
- url builders in /lib/urls.ts:
  cityPath(c) → /saudi/{city}/
  servicePath(c,s) → /saudi/{city}/{service}/
  subservicePath(c,s,ss) → /saudi/{city}/{service}/{subservice}/
  pricingPath(s,c) → /pricing/{service}/{city}/
  faqPath(s,c) → /faq/{service}/{city}/
  dealsPath(s,c) → /deals/{service}/{city}/
  emergencyPath(s,c) → /emergency/{service}/{city}/

========================
4) CONTENT TEMPLATES (ARABIC)
========================
Implement /lib/content.ts to return *unique Arabic blocks* per (city, service[, subservice]):

composeServiceCityCopy({city, service}) → {
  title: خدمة ${service.name_ar} في ${city.name_ar} | ضمان وأسعار واضحة | prokr,
  meta:  خدمة ${service.name_ar} في ${city.name_ar} مع فِرق معتمدة وضمان مكتوب وزمن استجابة سريع. اطلب تسعيرة دقيقة الآن.,
  h1:    خدمة ${service.name_ar} في ${city.name_ar},
  intro: (80–120w) يذكر أحياء/زمن وصول/عوامل محلية موسمية،
  valueProps: [3–5 بنود قصيرة: سرعة/ضمان/فنيون/سعر واضح],
  included:  [قائمة بما يشمله العرض],
  addons:    [إضافات ممكنة],
  priceRows: [{label:'صغير', min:..., max:...}, {label:'متوسط',...}, {label:'كبير',...}],
  faqs:      [{q:'', a:''} × 5–7 أسئلة محلية فريدة],
  example:   "مثال واقعي في {حي} داخل {city}",
  related:   {subservices: [...], siblings: [...]}  // لبناء internal links
}

- For subservices, composeSubserviceCopy extends above with use-case specificity.
- Strict uniqueness guard:
  • inject 1–2 neighborhoods where available,
  • vary example scenarios and seasonal notes per city,
  • guarantee different FAQs for different cities/services.

========================
5) PAGE IMPLEMENTATIONS
========================
- City Hub (/saudi/[city]/):
  Arabic intro + neighborhoods list; grid of top SERVICES; FAQ (city-level); internal links to money pages.

- Money page Service×City (/saudi/[city]/[service]/):
  Order of sections: H1 → ValueProps → Included/Add-ons → <PriceTable/> → FAQ → Gallery → RelatedLinks.
  Add <CTASticky/> (phone/WhatsApp) on mobile.

- Subservice×City:
  Generate only if content length ≥ 300 words + unique FAQs + example. Else render noindex.

- Pricing/FAQ/Deals/Emergency:
  Dedicated routes fed by builders above (Arabic copy).

========================
6) SEO & SCHEMA
========================
- lib/seo.ts → helpers:
  titleServiceCity(), metaDescServiceCity(), canonical(url), alternates(url, 'ar'), breadcrumbs().
- components/SchemaInjector renders JSON-LD blocks:
  • Service (name = Arabic, serviceType, areaServed = { "@type":"City", "name": city.name_ar })
  • LocalBusiness (site-level in layout; add areaServed when city known; include contactPoint/phone)
  • FAQPage (for FAQ blocks)
  • BreadcrumbList (Home → السعودية → City → Service → Subservice)
- Each money page MUST inject: Service + FAQPage + BreadcrumbList; LocalBusiness at least site-level.
- Note: rich features aren’t guaranteed; keep markup valid.

========================
7) SITEMAPS & ROBOTS
========================
- /sitemaps/index/route.ts → dynamic index referencing shards:
  /sitemaps/cities-1.xml, /sitemaps/services-1.xml, /sitemaps/services-2.xml, ...
  Rules:
   • ≤50,000 URLs per sitemap; ≤50 MB uncompressed.
   • Include <lastmod>.
   • Optionally add xhtml:link alternates when EN added later.
- /robots.txt → Allow all; Disallow admin/internal; Sitemap: https://prokr.com/sitemaps/index.xml
- Exclude noindex pages from sitemaps automatically.

========================
8) QUALITY GUARDS (ANTI-DOORWAY)
========================
- DO NOT mass-generate near-duplicate city pages. Before writing a page:
  checkUnique({city, service}) → requires:
   • intro ≥ 80 words with city facts,
   • 5 distinct FAQs for this city/service,
   • 1 local example scenario,
   • ≥ 4 internal links (to subservices/siblings/pricing/faq).
- If any fails → render minimal page with noindex; do NOT include in sitemap.

========================
9) PERFORMANCE (CORE WEB VITALS BUDGETS)
========================
- Budgets: LCP ≤ 2.5s; INP ≤ 200ms; CLS ≤ 0.1 on money pages.
- Enforce via:
  • critical CSS (Tailwind) + font-display: swap,
  • responsive images with proper sizes; avoid layout shifts,
  • defer non-critical JS; avoid heavy client components on money pages.

========================
10) INTERNAL LINKING
========================
- City Hub → top services + neighborhoods.
- Service×City → subservices + sibling services (contextual).
- RelatedLinks renders 6–8 internal anchors with Arabic labels, EN paths.
- Avoid orphan pages.

========================
11) QA & ACCEPTANCE
========================
- Lint & type-check pass; all routes build SSG with ISR.
- For Tier1 cities × all SERVICES: generate money pages + pricing + FAQ (no subservices initially unless unique).
- Each money page includes:
   • Arabic title/meta/H1,
   • value props, included/add-ons, PriceTable, 5–7 FAQs,
   • Schema: Service + FAQPage + BreadcrumbList,
   • canonical + breadcrumb UI,
   • 4+ internal links.
- Sitemaps validate; robots served; noindex pages excluded.
- Lighthouse SEO/Perf ≥ 90 on at least 5 seed pages.

========================
12) INITIAL SEED TASKS
========================
- Implement /lib/guards.ts (unique-content guard + noindex toggler).
- Implement /lib/sitemaps.ts (sharded generation from CITIES × SERVICES).
- Implement content-seeds.ts for Tier1 cities with realistic Arabic copy blocks (per template).
- Generate at least 5 money pages now:
  /saudi/riyadh/moving/
  /saudi/jeddah/cleaning/
  /saudi/dammam/pest-control/
  /saudi/makkah/leaks-plumbing/
  /saudi/madinah/ac/
- Create /pricing and /faq counterparts for those 5 (Arabic copy).

========================
13) DEVELOPER NOTES
========================
- Keep all UI text Arabic; keep all paths EN.
- Never auto-redirect by IP/Accept-Language; add language switcher (future).
- Use hyphens in slugs; normalize and freeze slugs.
- Provide <link rel="alternate" hreflang="ar" ...> (and x-default on home) scaffolding for future EN.
- Document env vars in .env.example (SITE_URL).