import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CITIES } from '@/data/cities';
import { SERVICES } from '@/data/services';
import { PriceTable } from '@/components/PriceTable';
import { FAQ } from '@/components/FAQ';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CTASticky } from '@/components/CTASticky';
import { SchemaInjector } from '@/components/SchemaInjector';
import { TrustBadges } from '@/components/TrustBadges';
import { composeServiceCityContent } from '@/lib/content';
import { servicePath, subservicePath } from '@/lib/urls';
import { REVALIDATE_DEFAULT } from '@/lib/constants';
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';
import type { Metadata } from 'next';

export const revalidate = REVALIDATE_DEFAULT;

interface PageProps {
  params: {
    city: string;
    service: string;
    subservice: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const city = CITIES.find((c) => c.slug === params.city);
  const service = SERVICES.find((s) => s.slug === params.service);
  const subservice = service?.subservices.find((ss) => ss.slug === params.subservice);

  if (!city || !service || !subservice) {
    return {
      title: 'الصفحة غير موجودة | بروكر',
    };
  }

  return {
    title: `${subservice.name_ar} في ${city.name_ar} | ${service.name_ar} | بروكر`,
    description: `احصل على أفضل خدمة ${subservice.name_ar} في ${city.name_ar}. فريق متخصص معتمد وضمان مكتوب وأسعار تنافسية. احجز الآن!`,
    alternates: {
      canonical: `https://prokr.com/saudi/${params.city}/${params.service}/${params.subservice}`,
    },
    openGraph: {
      title: `${subservice.name_ar} في ${city.name_ar}`,
      description: `خدمة ${subservice.name_ar} احترافية في ${city.name_ar}`,
      type: 'website',
    },
  };
}

export async function generateStaticParams() {
  const params: { city: string; service: string; subservice: string }[] = [];

  // Generate for top cities × services × subservices
  const topCities = CITIES.filter((c) => c.tier === 1);
  
  for (const city of topCities) {
    for (const service of SERVICES) {
      // Generate only first 3 subservices for each service to avoid too many pages
      for (const subservice of service.subservices.slice(0, 3)) {
        params.push({
          city: city.slug,
          service: service.slug,
          subservice: subservice.slug,
        });
      }
    }
  }

  return params;
}

export default function SubserviceCityPage({ params }: PageProps) {
  const city = CITIES.find((c) => c.slug === params.city);
  const service = SERVICES.find((s) => s.slug === params.service);
  const subservice = service?.subservices.find((ss) => ss.slug === params.subservice);

  if (!city || !service || !subservice) {
    notFound();
  }

  const content = composeServiceCityContent({ city, service });

  const breadcrumbs = [
    { label: 'الرئيسية', href: '/' },
    { label: 'المملكة', href: '/saudi' },
    { label: city.name_ar, href: `/saudi/${city.slug}` },
    { label: service.name_ar, href: servicePath(city.slug, service.slug) },
    { label: subservice.name_ar, href: subservicePath(city.slug, service.slug, subservice.slug) },
  ];

  const schemas = [
    generateServiceSchema({
      serviceName: `${subservice.name_ar} - ${service.name_ar}`,
      serviceType: subservice.name_ar,
      cityName: city.name_ar,
      description: `خدمة ${subservice.name_ar} في ${city.name_ar}`,
    }),
    generateFAQSchema(content.faqs),
    generateBreadcrumbSchema(breadcrumbs),
  ];

  // Get related subservices
  const relatedSubservices = service.subservices.filter((ss) => ss.slug !== subservice.slug);

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
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <span className="text-3xl">⭐</span>
              <span className="font-bold text-lg">خدمة متخصصة</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {subservice.name_ar}
              <span className="block text-yellow-300 mt-2">في {city.name_ar}</span>
            </h1>

            <p className="text-xl text-primary-100 mb-8 leading-relaxed max-w-3xl">
              {content.intro}
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#pricing"
                className="px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg"
              >
                الأسعار
              </a>
              <a
                href="#faq"
                className="px-8 py-4 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-300 transition-colors font-bold text-lg"
              >
                أسئلة شائعة
              </a>
              <a
                href="tel:+966500000000"
                className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-bold text-lg"
              >
                اتصل الآن
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <TrustBadges />
        </div>
      </section>

      {/* Detailed Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              خدمة {subservice.name_ar} المتخصصة في {city.name_ar}
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p className="text-xl">
                في <span className="font-bold text-primary-600">{city.name_ar}</span>، تُعد خدمة <span className="font-bold text-primary-600">{subservice.name_ar}</span> من أكثر الخدمات المتخصصة المطلوبة. في <span className="font-bold text-primary-600">بروكر</span>، نفخر بأننا نمتلك الفريق الأكثر احترافية وتخصصاً في تقديم هذه الخدمة لسكان المدينة.
              </p>

              <p className="text-xl">
                نحن نفهم الطبيعة الخاصة لـ{city.name_ar} ومتطلباتها الفريدة عندما يتعلق الأمر بـ{subservice.name_ar}. فريقنا المحلي مدرب خصيصاً على التعامل مع جميع الحالات والتحديات المختلفة التي قد تواجهها في المدينة.
              </p>

              <p className="text-xl">
                سواء كنت في حي راقي أو منطقة صناعية أو مجمع سكني في {city.name_ar}، نحن نصل إليك بسرعة ونقدم خدمة {subservice.name_ar} بأعلى معايير الجودة والاحترافية. نستخدم أحدث المعدات والتقنيات المتخصصة في هذا المجال.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Specific Service */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              لماذا تختار {subservice.name_ar} من بروكر في {city.name_ar}؟
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              مزايا فريدة تجعلنا الخيار الأمثل
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center text-2xl">
                    🎯
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">تخصص دقيق</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      فريقنا متخصص حصرياً في {subservice.name_ar}. هذا التخصص العميق يعني أننا نملك خبرة لا مثيل لها ونعرف كل التفاصيل الدقيقة لهذه الخدمة. لا نقدم خدمات عامة، بل نركز على الإتقان والتميز في مجالنا.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                    📍
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">معرفة محلية عميقة</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      نعرف {city.name_ar} جيداً - أحياءها، طبيعة مبانيها، مناخها، وخصوصية احتياجاتها. هذه المعرفة المحلية تمكننا من تقديم خدمة {subservice.name_ar} مصممة خصيصاً لظروف المدينة الفريدة.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                    ⚡
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">استجابة فورية محلية</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      فريقنا المتخصص في {subservice.name_ar} متمركز في {city.name_ar} ويمكنه الوصول إليك في أسرع وقت. في حالات الطوارئ، نصل خلال دقائق. جميع معداتنا وفنيينا المتخصصين متواجدون في المدينة.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center text-2xl">
                    💎
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">جودة مضمونة</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      نقدم ضماناً مكتوباً على خدمة {subservice.name_ar} في {city.name_ar}. إذا لم تكن راضياً بنسبة 100%، نعود ونصلح أي مشكلة مجاناً. رضاك التام هو هدفنا الأول والأخير.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center text-2xl">
                    🔧
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">معدات متطورة متخصصة</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      نستخدم أحدث المعدات المتخصصة في {subservice.name_ar}. جميع أدواتنا حديثة، معتمدة، ويتم صيانتها بانتظام. نستثمر باستمرار في أحدث التقنيات لنقدم لك أفضل خدمة ممكنة.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-red-100 rounded-full flex items-center justify-center text-2xl">
                    💰
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">أسعار شفافة وعادلة</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      أسعارنا واضحة ومحددة مسبقاً دون أي رسوم خفية. نقدم عروضاً خاصة لسكان {city.name_ar} مع إمكانية التقسيط. احصل على قيمة حقيقية مقابل ما تدفعه.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              كيف نقدم خدمة {subservice.name_ar} في {city.name_ar}؟
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              منهجية عمل متطورة ومجربة
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 p-8 bg-gradient-to-l from-primary-50 to-white rounded-2xl shadow-lg border-r-4 border-primary-600">
                <div className="flex-shrink-0 w-14 h-14 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">الاتصال الأولي والاستشارة المجانية</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    اتصل بنا عبر الهاتف أو واتساب وأخبرنا عن احتياجك لـ{subservice.name_ar} في {city.name_ar}. فريقنا الاستشاري المتخصص سيطرح عليك أسئلة دقيقة لفهم الوضع بشكل كامل. نقدم استشارات مجانية ونصائح مهنية حتى قبل البدء بالخدمة.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-8 bg-gradient-to-l from-green-50 to-white rounded-2xl shadow-lg border-r-4 border-green-600">
                <div className="flex-shrink-0 w-14 h-14 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">زيارة ميدانية وتقييم متخصص</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    يزورك فني متخصص في {subservice.name_ar} لمعاينة الموقع في {city.name_ar}. نستخدم أدوات قياس وفحص احترافية لتقييم دقيق. بعد التقييم، نقدم لك عرض سعر تفصيلي واضح يشمل كل التفاصيل والمواد المستخدمة.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-8 bg-gradient-to-l from-blue-50 to-white rounded-2xl shadow-lg border-r-4 border-blue-600">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">التنفيذ بأعلى المعايير</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    فريقنا المتخصص في {subservice.name_ar} يبدأ العمل وفق جدول زمني محدد. نستخدم أفضل المواد والمعدات المتاحة، ونطبق أعلى معايير الجودة والسلامة. نحافظ على النظافة التامة ونحترم خصوصيتك في {city.name_ar}.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-8 bg-gradient-to-l from-yellow-50 to-white rounded-2xl shadow-lg border-r-4 border-yellow-600">
                <div className="flex-shrink-0 w-14 h-14 bg-yellow-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">الفحص النهائي والضمان</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    بعد إنهاء {subservice.name_ar}، نجري فحصاً شاملاً للتأكد من الجودة. نراجع معك كل التفاصيل ونجيب على أسئلتك. نسلمك شهادة ضمان مكتوبة ونوضح لك كيفية الحفاظ على النتائج. فريق الدعم متاح دائماً للمتابعة.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Tips */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              نصائح متخصصة لـ{subservice.name_ar} في {city.name_ar}
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              خبرة محلية ونصائح مهنية قيّمة
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-3xl mb-6 mx-auto">
                  ⏰
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">التوقيت الأمثل</h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  في {city.name_ar}، هناك أوقات معينة تكون أفضل لـ{subservice.name_ar} بسبب طبيعة المناخ والظروف المحلية. استشر خبراءنا لاختيار الوقت الأمثل لحالتك الخاصة.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl mb-6 mx-auto">
                  🔍
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">الفحص الدوري</h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  نوصي بإجراء فحص دوري لـ{subservice.name_ar} كل 6-12 شهر. نقدم برامج صيانة سنوية بأسعار خاصة لسكان {city.name_ar} لضمان استمرار النتائج الممتازة.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl mb-6 mx-auto">
                  📋
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">التحضير المسبق</h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  هناك بعض التحضيرات البسيطة التي تسهل عملية {subservice.name_ar}. سنرسل لك دليلاً تحضيرياً مفصلاً قبل الموعد المحدد في {city.name_ar}.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-3xl mb-6 mx-auto">
                  💬
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">التواصل الواضح</h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  لا تتردد في طرح جميع أسئلتك ومشاركة مخاوفك. كلما كان التواصل أوضح، كانت النتائج أفضل. فريقنا في {city.name_ar} يتحدث لغتك ويفهم احتياجاتك.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-3xl mb-6 mx-auto">
                  🎯
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">الجودة أولاً</h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  لا تختر بناءً على السعر فقط. {subservice.name_ar} من فريق محترف تدوم أطول وتوفر عليك المال على المدى البعيد. استثمر في الجودة من البداية.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-3xl mb-6 mx-auto">
                  📱
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">الطوارئ متاحة</h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  لحالات {subservice.name_ar} الطارئة في {city.name_ar}، نحن متاحون 24/7. اتصل بنا في أي وقت وسنكون عندك في أسرع وقت ممكن.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-white rounded-xl shadow-lg p-8 border-r-4 border-primary-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">💡</span>
                نصيحة ذهبية من خبرائنا في {city.name_ar}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                أفضل نصيحة يمكن أن نقدمها لك بخصوص {subservice.name_ar} في {city.name_ar} هي: لا تؤجل! المشاكل الصغيرة تتحول إلى مشاكل كبيرة ومكلفة مع الوقت. تعامل مع الموضوع فوراً مع متخصصين موثوقين. اتصل بنا الآن للحصول على استشارة مجانية وسنساعدك في اتخاذ القرار الصحيح لحالتك الخاصة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            لماذا تختارنا لـ {subservice.name_ar}؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {content.valueProps.map((prop, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-900 font-medium">{prop}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              ما يشمله عرض {subservice.name_ar}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.included.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-900">{item}</span>
                </div>
              ))}
            </div>

            {content.addons.length > 0 && (
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  خدمات إضافية متاحة
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {content.addons.map((addon, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                      <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      <span className="text-gray-900">{addon}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              الأسعار التقريبية
            </h2>
            <p className="text-gray-600 text-center mb-8">
              الأسعار قد تختلف حسب حجم العمل والمتطلبات
            </p>
            <PriceTable rows={content.priceRows} />
            <div className="mt-6 text-center">
              <Link
                href={`/pricing/${service.slug}/${city.slug}`}
                className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-bold"
              >
                احصل على تسعيرة دقيقة
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Example */}
      {content.example && (
        <section className="py-12 bg-primary-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                مثال واقعي
              </h2>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">💡</div>
                  <div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {content.example}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section id="faq" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              الأسئلة الشائعة
            </h2>
            <FAQ faqs={content.faqs} />
          </div>
        </div>
      </section>

      {/* Related Subservices */}
      {relatedSubservices.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                خدمات {service.name_ar} الأخرى في {city.name_ar}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedSubservices.map((sub) => (
                  <Link
                    key={sub.slug}
                    href={subservicePath(city.slug, service.slug, sub.slug)}
                    className="block p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow group"
                  >
                    <h3 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
                      {sub.name_ar}
                    </h3>
                    <span className="text-sm text-primary-600 group-hover:underline">
                      اعرف المزيد ←
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Bottom */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            جاهز لطلب {subservice.name_ar}؟
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            اتصل بنا الآن واحصل على خدمة احترافية في {city.name_ar}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+966500000000"
              className="px-10 py-5 bg-white text-primary-600 rounded-xl hover:bg-gray-100 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
            >
              📞 اتصل الآن
            </a>
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
            >
              💬 واتساب
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
