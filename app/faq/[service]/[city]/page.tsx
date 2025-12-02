import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CITIES } from '@/data/cities';
import { SERVICES } from '@/data/services';
import { FAQ } from '@/components/FAQ';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CTASticky } from '@/components/CTASticky';
import { SchemaInjector } from '@/components/SchemaInjector';
import { RichContentSections } from '@/components/RichContentSections';
import { composeServiceCityContent } from '@/lib/content';
import { generateFAQContent } from '@/lib/rich-content';
import { servicePath, faqPath } from '@/lib/urls';
import { generateFAQSchema } from '@/lib/schema';
import { REVALIDATE_DEFAULT } from '@/lib/constants';
import type { Metadata } from 'next';

export const revalidate = REVALIDATE_DEFAULT;

interface PageProps {
  params: {
    service: string;
    city: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const city = CITIES.find((c) => c.slug === params.city);
  const service = SERVICES.find((s) => s.slug === params.service);

  if (!city || !service) {
    return {
      title: 'الصفحة غير موجودة | بروكر',
    };
  }

  return {
    title: `أسئلة شائعة عن ${service.name_ar} في ${city.name_ar} | بروكر`,
    description: `إجابات على الأسئلة الأكثر شيوعاً حول خدمة ${service.name_ar} في ${city.name_ar}. كل ما تحتاج معرفته قبل طلب الخدمة.`,
    alternates: {
      canonical: `https://prokr.com/faq/${params.service}/${params.city}`,
    },
    openGraph: {
      title: `أسئلة شائعة عن ${service.name_ar} في ${city.name_ar}`,
      description: `إجابات شاملة على أسئلتك حول ${service.name_ar}`,
      type: 'website',
    },
  };
}

export async function generateStaticParams() {
  const params: { service: string; city: string }[] = [];
  const topCities = CITIES.filter((c) => c.tier === 1);
  
  for (const service of SERVICES) {
    for (const city of topCities) {
      params.push({
        service: service.slug,
        city: city.slug,
      });
    }
  }

  return params;
}

export default function FAQPage({ params }: PageProps) {
  const city = CITIES.find((c) => c.slug === params.city);
  const service = SERVICES.find((s) => s.slug === params.service);

  if (!city || !service) {
    notFound();
  }

  const content = composeServiceCityContent({ city, service });
  const richContent = generateFAQContent({ city, service });

  const breadcrumbs = [
    { label: 'الرئيسية', href: '/' },
    { label: 'أسئلة شائعة', href: '/faqs' },
    { label: service.name_ar, href: faqPath(service.slug, city.slug) },
  ];

  const schemas = [generateFAQSchema(content.faqs)];

  return (
    <div className="min-h-screen">
      <SchemaInjector schemas={schemas} />
      <CTASticky />

      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <span className="text-3xl">❓</span>
              <span className="font-bold text-lg">الأسئلة الشائعة</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              أسئلة شائعة عن
              <span className="block text-yellow-300 mt-2">{service.name_ar} في {city.name_ar}</span>
            </h1>

            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              إجابات شاملة على الأسئلة الأكثر شيوعاً لمساعدتك في اتخاذ القرار الصحيح
            </p>
          </div>
        </div>
      </section>

      {/* Main FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <FAQ faqs={content.faqs} />
            </div>

            {/* Still Have Questions? */}
            <div className="bg-primary-50 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                لم تجد إجابة لسؤالك؟
              </h2>
              <p className="text-gray-700 mb-6">
                فريق خدمة العملاء جاهز للإجابة على جميع استفساراتك
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+966543654700"
                  className="px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-bold"
                >
                  اتصل بنا الآن
                </a>
                <a
                  href="https://wa.me/966500000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-bold"
                >
                  راسلنا على واتساب
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Questions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
              مواضيع إضافية مفيدة
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* General Tips */}
              <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="text-5xl mb-6">💡</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-5">
                  نصائح عامة
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-primary-600 font-bold text-lg mt-1">✓</span>
                    <span className="leading-relaxed">احجز مبكراً خاصة في <Link href={`/saudi/${city.slug}`} className="text-primary-600 font-semibold hover:underline">{city.name_ar}</Link> لضمان توفر الموعد</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-600 font-bold text-lg mt-1">✓</span>
                    <span className="leading-relaxed">اطلب معاينة مجانية من <Link href="/about" className="text-primary-600 font-semibold hover:underline">فريقنا</Link> لتقييم دقيق</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-600 font-bold text-lg mt-1">✓</span>
                    <span className="leading-relaxed">اطلب تفاصيل الضمان كتابياً قبل بدء العمل</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-600 font-bold text-lg mt-1">✓</span>
                    <span className="leading-relaxed">تأكد من التأمين الشامل على الخدمة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-600 font-bold text-lg mt-1">✓</span>
                    <span className="leading-relaxed">استفسر عن <Link href={`/deals/${service.slug}/${city.slug}`} className="text-primary-600 font-semibold hover:underline">العروض المتاحة</Link></span>
                  </li>
                </ul>
              </div>

              {/* What to Prepare */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="text-5xl mb-6">📋</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-5">
                  ما يجب تحضيره
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-lg mt-1">✓</span>
                    <span className="leading-relaxed">حدد الموعد المناسب مسبقاً مع مراعاة <Link href="/contact" className="text-primary-600 font-semibold hover:underline">أوقات العمل</Link></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-lg mt-1">✓</span>
                    <span className="leading-relaxed">جهّز المنطقة المطلوب العمل بها وأزل أي عوائق</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-lg mt-1">✓</span>
                    <span className="leading-relaxed">وفر مدخل سهل ومواقف للفنيين</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-lg mt-1">✓</span>
                    <span className="leading-relaxed">جهّز أسئلتك واستفساراتك مسبقاً</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-lg mt-1">✓</span>
                    <span className="leading-relaxed">اطلع على <Link href={`/pricing/${service.slug}/${city.slug}`} className="text-primary-600 font-semibold hover:underline">الأسعار</Link> لتكون على دراية</span>
                  </li>
                </ul>
              </div>

              {/* Safety & Quality */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="text-5xl mb-6">🛡️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-5">
                  الأمان والجودة
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-600 font-bold text-lg mt-1">✓</span>
                    <span className="leading-relaxed">جميع <Link href="/about" className="text-primary-600 font-semibold hover:underline">فنيينا</Link> معتمدون ومؤهلون بشهادات رسمية</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-600 font-bold text-lg mt-1">✓</span>
                    <span className="leading-relaxed">نستخدم مواد آمنة ومعتمدة من وزارة الصحة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-600 font-bold text-lg mt-1">✓</span>
                    <span className="leading-relaxed">تأمين شامل على جميع الخدمات في {city.name_ar}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-600 font-bold text-lg mt-1">✓</span>
                    <span className="leading-relaxed">ضمان مكتوب يتراوح من 3-24 شهر</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-600 font-bold text-lg mt-1">✓</span>
                    <span className="leading-relaxed">فحص دوري لجودة العمل من فريق مختص</span>
                  </li>
                </ul>
              </div>

              {/* After Service */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="text-5xl mb-6">✅</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-5">
                  بعد إتمام الخدمة
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold text-lg mt-1">✓</span>
                    <span className="leading-relaxed">تفقد العمل بدقة مع الفني قبل المغادرة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold text-lg mt-1">✓</span>
                    <span className="leading-relaxed">احصل على شهادة الضمان موقعة ومختومة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold text-lg mt-1">✓</span>
                    <span className="leading-relaxed">احتفظ بإيصال الدفع وجميع المستندات</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold text-lg mt-1">✓</span>
                    <span className="leading-relaxed">قيّم الخدمة لمساعدة عملاء آخرين</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold text-lg mt-1">✓</span>
                    <span className="leading-relaxed"><Link href="/contact" className="text-primary-600 font-semibold hover:underline">تواصل معنا</Link> لأي استفسار لاحق</span>
                  </li>
                </ul>
              </div>

              {/* Costs & Payment */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="text-5xl mb-6">💰</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-5">
                  التكاليف والدفع
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 font-bold text-lg mt-1">✓</span>
                    <span className="leading-relaxed">اطلب <Link href={`/pricing/${service.slug}/${city.slug}`} className="text-primary-600 font-semibold hover:underline">عرض سعر</Link> مفصل قبل البدء</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 font-bold text-lg mt-1">✓</span>
                    <span className="leading-relaxed">لا توجد رسوم خفية - السعر المعلن هو النهائي</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 font-bold text-lg mt-1">✓</span>
                    <span className="leading-relaxed">نقبل النقد، التحويل، والدفع الإلكتروني</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 font-bold text-lg mt-1">✓</span>
                    <span className="leading-relaxed">استفد من <Link href={`/deals/${service.slug}/${city.slug}`} className="text-primary-600 font-semibold hover:underline">خصومات تصل 30%</Link></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 font-bold text-lg mt-1">✓</span>
                    <span className="leading-relaxed">إمكانية التقسيط لبعض الخدمات الكبيرة</span>
                  </li>
                </ul>
              </div>

              {/* Emergency Services */}
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="text-5xl mb-6">🚨</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-5">
                  خدمات الطوارئ
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold text-lg mt-1">✓</span>
                    <span className="leading-relaxed"><Link href={`/emergency/${service.slug}/${city.slug}`} className="text-primary-600 font-semibold hover:underline">متاحون 24/7</Link> للحالات الطارئة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold text-lg mt-1">✓</span>
                    <span className="leading-relaxed">وصول خلال 30-60 دقيقة في {city.name_ar}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold text-lg mt-1">✓</span>
                    <span className="leading-relaxed">فريق طوارئ مجهز بالكامل</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold text-lg mt-1">✓</span>
                    <span className="leading-relaxed">أسعار خاصة للحالات العاجلة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold text-lg mt-1">✓</span>
                    <span className="leading-relaxed"><Link href="/contact" className="text-primary-600 font-semibold hover:underline">اتصل الآن</Link> للطوارئ</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Info About the Service */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                معلومات إضافية عن {service.name_ar}
              </h2>
              <p className="text-xl text-gray-600">
                كل ما تحتاج معرفته لاتخاذ القرار الصحيح
              </p>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-xl">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-3xl">⏱️</span>
                    <span>مدة تنفيذ الخدمة</span>
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    تختلف مدة تنفيذ خدمة {service.name_ar} حسب حجم العمل والمتطلبات الخاصة. في المتوسط، تستغرق الخدمة من ساعتين إلى يوم كامل. نحن نلتزم دائماً بالمواعيد المتفق عليها. يمكنك <Link href="/contact" className="text-primary-600 font-semibold hover:underline">الاتصال بنا</Link> للحصول على تقدير دقيق لحالتك الخاصة في {city.name_ar}.
                  </p>
                </div>

                <div className="border-t-2 border-gray-200 pt-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-3xl">📍</span>
                    <span>المناطق المخدومة</span>
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    نقدم خدمة {service.name_ar} في جميع أحياء <Link href={`/saudi/${city.slug}`} className="text-primary-600 font-semibold hover:underline">{city.name_ar}</Link> بدون استثناء. كما نخدم المدن المجاورة مثل <Link href="/saudi/riyadh" className="text-primary-600 font-semibold hover:underline">الرياض</Link>، <Link href="/saudi/jeddah" className="text-primary-600 font-semibold hover:underline">جدة</Link>، و<Link href="/coverage" className="text-primary-600 font-semibold hover:underline">45+ مدينة أخرى</Link> في جميع أنحاء المملكة. فريقنا المحلي يعرف المنطقة جيداً ويصل إليك بسرعة.
                  </p>
                </div>

                <div className="border-t-2 border-gray-200 pt-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-3xl">🔧</span>
                    <span>المعدات والمواد</span>
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    نستخدم أحدث المعدات والأدوات المتخصصة في {service.name_ar}. جميع المواد المستخدمة آمنة ومعتمدة من الجهات الرسمية. فريقنا مجهز بالكامل ولا يحتاج لأي معدات من جانبك. نحرص على استخدام أفضل المنتجات لضمان نتائج ممتازة وطويلة الأمد. اطلع على المزيد عن <Link href="/about" className="text-primary-600 font-semibold hover:underline">معاييرنا</Link>.
                  </p>
                </div>

                <div className="border-t-2 border-gray-200 pt-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-3xl">📞</span>
                    <span>كيفية الحجز</span>
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    الحجز سهل وسريع! <Link href="/contact" className="text-primary-600 font-semibold hover:underline">اتصل بنا</Link> مباشرة أو أرسل رسالة واتساب، وسيقوم فريقنا بالرد خلال دقائق. نوفر أيضاً حجز إلكتروني عبر موقعنا. بعد الحجز، ستحصل على تأكيد فوري مع تفاصيل الفني والموعد. يمكنك تعديل أو إلغاء الحجز بسهولة. راجع <Link href={`/pricing/${service.slug}/${city.slug}`} className="text-primary-600 font-semibold hover:underline">الأسعار</Link> أولاً لتكون على دراية.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              روابط ذات صلة
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href={servicePath(city.slug, service.slug)}
                className="block p-6 bg-white rounded-lg hover:bg-primary-50 transition-colors text-center group shadow"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-primary-600 mb-2">
                  تفاصيل الخدمة
                </h3>
                <span className="text-sm text-primary-600">اعرف المزيد ←</span>
              </Link>

              <Link
                href={`/pricing/${service.slug}/${city.slug}`}
                className="block p-6 bg-white rounded-lg hover:bg-blue-50 transition-colors text-center group shadow"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 mb-2">
                  الأسعار
                </h3>
                <span className="text-sm text-blue-600">اطلع على الأسعار ←</span>
              </Link>

              <Link
                href={`/deals/${service.slug}/${city.slug}`}
                className="block p-6 bg-white rounded-lg hover:bg-red-50 transition-colors text-center group shadow"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-red-600 mb-2">
                  العروض الحالية
                </h3>
                <span className="text-sm text-red-600">وفّر الآن ←</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            جاهز لطلب الخدمة؟
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            اتصل بنا الآن للحصول على استشارة مجانية وحجز موعد
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+966543654700"
              className="px-10 py-5 bg-white text-primary-600 rounded-xl hover:bg-gray-100 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
            >
              📞 اتصل الآن
            </a>
            <a
              href="https://wa.me/966543654700"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
            >
              💬 واتساب
            </a>
          </div>
        </div>
      </section>

      {/* Rich Content Sections */}
      <RichContentSections 
        content={richContent} 
        serviceName={service.name_ar} 
        cityName={city.name_ar}
      />
    </div>
  );
}
