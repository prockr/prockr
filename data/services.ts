export type Subservice = {
  slug: string;
  name_ar: string;
};

export type ServiceCategory = {
  slug: string;
  name_ar: string;
  subservices: Subservice[];
};

export const SERVICES: ServiceCategory[] = [
  {
    slug: 'moving',
    name_ar: 'نقل العفش',
    subservices: [
      { slug: 'apartment-moving', name_ar: 'نقل شقق' },
      { slug: 'villa-moving', name_ar: 'نقل فلل' },
      { slug: 'office-moving', name_ar: 'نقل مكاتب' },
      { slug: 'disassembly-assembly', name_ar: 'فك وتركيب الأثاث' },
      { slug: 'furniture-packing', name_ar: 'تغليف الأثاث' },
      { slug: 'crane-lifting', name_ar: 'ونش رفع' },
      { slug: 'city-to-city', name_ar: 'نقل بين المدن' },
      { slug: 'storage', name_ar: 'تخزين العفش' },
      { slug: 'moving-boxes', name_ar: 'كراتين نقل' },
      { slug: 'insurance-warranty', name_ar: 'تأمين وضمان' },
    ],
  },
  {
    slug: 'cleaning',
    name_ar: 'التنظيف',
    subservices: [
      { slug: 'hourly-cleaning', name_ar: 'تنظيف بالساعة' },
      { slug: 'deep-cleaning', name_ar: 'تنظيف عميق' },
      { slug: 'post-construction', name_ar: 'تنظيف بعد التشطيب' },
      { slug: 'tank-cleaning', name_ar: 'تنظيف خزانات' },
      { slug: 'carpet-rug', name_ar: 'تنظيف سجاد وموكيت' },
      { slug: 'sofa-curtains', name_ar: 'غسيل كنب وستائر' },
      { slug: 'sanitization', name_ar: 'تعقيم وتطهير' },
      { slug: 'marble-polishing', name_ar: 'جلي وتلميع رخام' },
      { slug: 'facade-cleaning', name_ar: 'تنظيف واجهات زجاج' },
    ],
  },
  {
    slug: 'leaks-plumbing',
    name_ar: 'كشف التسربات والسباكة',
    subservices: [
      { slug: 'thermal-leak-detection', name_ar: 'كشف تسربات حراري' },
      { slug: 'acoustic-leak-detection', name_ar: 'كشف تسربات صوتي' },
      { slug: 'pipe-repair', name_ar: 'إصلاح مواسير' },
      { slug: 'drain-unclogging', name_ar: 'تسليك مجاري' },
      { slug: 'bathroom-kitchen-waterproofing', name_ar: 'عزل حمامات ومطابخ' },
      { slug: 'pumps-valves', name_ar: 'مضخات ومحابس' },
      { slug: 'tank-leaks', name_ar: 'تسربات خزانات' },
    ],
  },
  {
    slug: 'pest-control',
    name_ar: 'مكافحة الحشرات',
    subservices: [
      { slug: 'general-spray', name_ar: 'رش عام' },
      { slug: 'cockroaches', name_ar: 'مكافحة الصراصير' },
      { slug: 'ants', name_ar: 'مكافحة النمل' },
      { slug: 'rodents', name_ar: 'القوارض والفئران' },
      { slug: 'bed-bugs', name_ar: 'بقّ الفراش' },
      { slug: 'termites', name_ar: 'النمل الأبيض (الأرضة)' },
      { slug: 'municipality-certificate', name_ar: 'شهادة بلدية' },
      { slug: 'annual-contracts', name_ar: 'عقود صيانة دورية' },
    ],
  },
  {
    slug: 'ac',
    name_ar: 'التكييف',
    subservices: [
      { slug: 'split-ac-cleaning', name_ar: 'تنظيف مكيفات سبليت' },
      { slug: 'duct-cleaning', name_ar: 'تنظيف دكت' },
      { slug: 'maintenance-repair', name_ar: 'صيانة وأعطال' },
      { slug: 'freon-refill', name_ar: 'شحن فريون' },
      { slug: 'ac-installation', name_ar: 'تركيب مكيفات' },
      { slug: 'unit-relocation', name_ar: 'نقل وتركيب وحدات' },
    ],
  },
  {
    slug: 'electricity',
    name_ar: 'الكهرباء',
    subservices: [
      { slug: 'electrical-faults', name_ar: 'أعطال كهرباء' },
      { slug: 'panels-distribution', name_ar: 'لوحات وتوزيع' },
      { slug: 'wiring-lighting', name_ar: 'تمديدات وإنارة' },
      { slug: 'cctv-systems', name_ar: 'كاميرات وأنظمة' },
    ],
  },
  {
    slug: 'painting-gypsum',
    name_ar: 'الدهانات والجبس',
    subservices: [
      { slug: 'interior-painting', name_ar: 'دهانات داخلية' },
      { slug: 'exterior-painting', name_ar: 'دهانات خارجية' },
      { slug: 'wallpaper', name_ar: 'ورق جدران' },
      { slug: 'gypsum-board', name_ar: 'جبس بورد' },
      { slug: 'decor', name_ar: 'ديكورات' },
    ],
  },
  {
    slug: 'carpentry',
    name_ar: 'النجارة',
    subservices: [
      { slug: 'kitchen-cabinets', name_ar: 'تصنيع مطابخ' },
      { slug: 'doors-windows', name_ar: 'أبواب وشبابيك' },
      { slug: 'bedrooms', name_ar: 'غرف نوم' },
      { slug: 'furniture-repair', name_ar: 'تصليح أثاث' },
    ],
  },
  {
    slug: 'aluminum-glass',
    name_ar: 'الألمنيوم والزجاج',
    subservices: [
      { slug: 'aluminum-windows-doors', name_ar: 'شبابيك وأبواب ألمنيوم' },
      { slug: 'glass-facades', name_ar: 'واجهات زجاج' },
      { slug: 'shades-curtains', name_ar: 'مظلات وستائر' },
    ],
  },
  {
    slug: 'flooring',
    name_ar: 'الأرضيات',
    subservices: [
      { slug: 'ceramic-porcelain', name_ar: 'سيراميك وبورسلان' },
      { slug: 'parquet-vinyl', name_ar: 'باركيه وفينيل' },
      { slug: 'marble-granite', name_ar: 'رخام وجرانيت' },
      { slug: 'grinding-polishing', name_ar: 'جلي وتلميع' },
    ],
  },
  {
    slug: 'insulation-roofs',
    name_ar: 'العزل والأسطح',
    subservices: [
      { slug: 'water-proofing', name_ar: 'عزل مائي' },
      { slug: 'thermal-insulation', name_ar: 'عزل حراري' },
      { slug: 'foam-bitumen', name_ar: 'عزل فوم وبيتومين' },
      { slug: 'cracks-treatment', name_ar: 'معالجة تشققات الأسطح' },
    ],
  },
  {
    slug: 'appliances',
    name_ar: 'الأجهزة المنزلية',
    subservices: [
      { slug: 'washing-machines', name_ar: 'صيانة غسالات' },
      { slug: 'refrigerators', name_ar: 'صيانة ثلاجات' },
      { slug: 'ovens-stoves', name_ar: 'صيانة أفران وبوتاجازات' },
      { slug: 'dryers', name_ar: 'نشافات ومجففات' },
    ],
  },
  {
    slug: 'landscaping',
    name_ar: 'تنسيق الحدائق',
    subservices: [
      { slug: 'lawn-mowing', name_ar: 'قص نجيل' },
      { slug: 'irrigation-systems', name_ar: 'شبكات ري' },
      { slug: 'garden-design', name_ar: 'تصميم حدائق' },
      { slug: 'palm-trees', name_ar: 'نخيل وأشجار' },
    ],
  },
  {
    slug: 'car-towing',
    name_ar: 'سطحة ونقل سيارات',
    subservices: [
      { slug: 'city-towing', name_ar: 'سطحة داخل المدينة' },
      { slug: 'intercity-towing', name_ar: 'سطحة بين المدن' },
      { slug: 'luxury-car-transport', name_ar: 'نقل سيارات مميزة' },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceCategory | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getSubservice(serviceSlug: string, subserviceSlug: string): Subservice | undefined {
  const service = getServiceBySlug(serviceSlug);
  return service?.subservices.find((ss) => ss.slug === subserviceSlug);
}

