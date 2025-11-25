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
                  href="tel:+966548923300"
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              مواضيع إضافية مفيدة
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* General Tips */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  نصائح عامة
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>احجز مبكراً لضمان توفر الموعد المناسب</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>قم بالمعاينة المجانية لتقييم دقيق</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>اطلب تفاصيل الضمان كتابياً</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>تأكد من التأمين الشامل على الخدمة</span>
                  </li>
                </ul>
              </div>

              {/* What to Prepare */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  ما يجب تحضيره
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>حدد الموعد المناسب مسبقاً</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>جهّز المنطقة المطلوب العمل بها</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>وفر مدخل سهل للفنيين</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>جهّز أسئلتك واستفساراتك</span>
                  </li>
                </ul>
              </div>

              {/* Safety & Quality */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  الأمان والجودة
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>جميع فنيينا معتمدون ومؤهلون</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>نستخدم مواد آمنة ومعتمدة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>تأمين شامل على جميع الخدمات</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>ضمان مكتوب على العمل</span>
                  </li>
                </ul>
              </div>

              {/* After Service */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  بعد إتمام الخدمة
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>تفقد العمل مع الفني</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>احصل على شهادة الضمان</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>احتفظ بإيصال الدفع</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>قيّم الخدمة لمساعدة الآخرين</span>
                  </li>
                </ul>
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
              href="tel:+966548923300"
              className="px-10 py-5 bg-white text-primary-600 rounded-xl hover:bg-gray-100 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
            >
              📞 اتصل الآن
            </a>
            <a
              href="https://wa.me/966548923300"
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
