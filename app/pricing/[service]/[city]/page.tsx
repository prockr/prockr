import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CITIES } from '@/data/cities';
import { SERVICES } from '@/data/services';
import { PriceTable } from '@/components/PriceTable';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CTASticky } from '@/components/CTASticky';
import { composeServiceCityContent } from '@/lib/content';
import { servicePath, pricingPath } from '@/lib/urls';
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
    title: `أسعار ${service.name_ar} في ${city.name_ar} | بروكر`,
    description: `اطلع على أسعار خدمة ${service.name_ar} في ${city.name_ar}. أسعار واضحة وشفافة بدون رسوم خفية.`,
    alternates: {
      canonical: `https://prokr.com/pricing/${params.service}/${params.city}`,
    },
    openGraph: {
      title: `أسعار ${service.name_ar} في ${city.name_ar}`,
      description: `أسعار شفافة لخدمة ${service.name_ar} في ${city.name_ar}`,
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

export default function PricingPage({ params }: PageProps) {
  const city = CITIES.find((c) => c.slug === params.city);
  const service = SERVICES.find((s) => s.slug === params.service);

  if (!city || !service) {
    notFound();
  }

  const content = composeServiceCityContent({ city, service });

  const breadcrumbs = [
    { label: 'الرئيسية', href: '/' },
    { label: 'الأسعار', href: '/pricing' },
    { label: service.name_ar, href: pricingPath(service.slug, city.slug) },
  ];

  return (
    <div className="min-h-screen">
      <CTASticky />

      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <span className="text-3xl">💰</span>
              <span className="font-bold text-lg">أسعار واضحة وشفافة</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              أسعار {service.name_ar}
              <span className="block text-yellow-300 mt-2">في {city.name_ar}</span>
            </h1>

            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              جميع الأسعار شاملة الضريبة • لا رسوم خفية • أسعار تنافسية
            </p>
          </div>
        </div>
      </section>

      {/* Main Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                الأسعار التقريبية
              </h2>
              <PriceTable rows={content.priceRows} />
              
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  ملاحظة هامة
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  الأسعار المذكورة تقريبية وقد تختلف حسب حجم العمل، المتطلبات الخاصة، وموقع العقار. للحصول على سعر دقيق، يُرجى التواصل معنا للمعاينة المجانية.
                </p>
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                ما يشمله السعر
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {content.included.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Services */}
            {content.addons.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  خدمات إضافية (بأسعار منفصلة)
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {content.addons.map((addon, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      <span className="text-gray-700">{addon}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Why Our Prices? */}
            <div className="bg-primary-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                لماذا أسعارنا تنافسية؟
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💎</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">جودة عالية</h3>
                    <p className="text-gray-700 text-sm">نستخدم أفضل المواد والمعدات</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">ضمان مكتوب</h3>
                    <p className="text-gray-700 text-sm">جميع خدماتنا مضمونة</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">👨‍🔧</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">فريق محترف</h3>
                    <p className="text-gray-700 text-sm">فنيون مدربون ومعتمدون</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">خدمة سريعة</h3>
                    <p className="text-gray-700 text-sm">نصل إليك في الوقت المحدد</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              روابط ذات صلة
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href={servicePath(city.slug, service.slug)}
                className="block p-6 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center group"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-primary-600 mb-2">
                  تفاصيل الخدمة
                </h3>
                <span className="text-sm text-primary-600">اعرف المزيد ←</span>
              </Link>

              <Link
                href={`/faq/${service.slug}/${city.slug}`}
                className="block p-6 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center group"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-primary-600 mb-2">
                  أسئلة شائعة
                </h3>
                <span className="text-sm text-primary-600">اطلع على الإجابات ←</span>
              </Link>

              <Link
                href={`/deals/${service.slug}/${city.slug}`}
                className="block p-6 bg-red-50 rounded-lg hover:bg-red-100 transition-colors text-center group"
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
            احصل على تسعيرة دقيقة
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            اتصل بنا الآن للحصول على تسعيرة دقيقة ومعاينة مجانية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+966548923300"
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
