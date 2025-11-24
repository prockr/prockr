import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CITIES } from '@/data/cities';
import { SERVICES } from '@/data/services';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CTASticky } from '@/components/CTASticky';
import { composeServiceCityContent } from '@/lib/content';
import { servicePath, dealsPath } from '@/lib/urls';
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
    title: `عروض ${service.name_ar} في ${city.name_ar} | خصم حتى 30% | بروكر`,
    description: `عروض وخصومات استثنائية على خدمة ${service.name_ar} في ${city.name_ar}. وفّر حتى 30% على الخدمات المنزلية الاحترافية.`,
    alternates: {
      canonical: `https://prokr.com/deals/${params.service}/${params.city}`,
    },
    openGraph: {
      title: `عروض ${service.name_ar} في ${city.name_ar} - خصم 30%`,
      description: `عروض محدودة على ${service.name_ar} في ${city.name_ar}`,
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

export default function DealsPage({ params }: PageProps) {
  const city = CITIES.find((c) => c.slug === params.city);
  const service = SERVICES.find((s) => s.slug === params.service);

  if (!city || !service) {
    notFound();
  }

  const content = composeServiceCityContent({ city, service });

  const breadcrumbs = [
    { label: 'الرئيسية', href: '/' },
    { label: 'العروض', href: '/deals' },
    { label: service.name_ar, href: dealsPath(service.slug, city.slug) },
  ];

  // Calculate discounted prices
  const dealPrices = content.priceRows.map((row) => ({
    ...row,
    originalMin: row.min,
    originalMax: row.max,
    min: Math.round(row.min * 0.7), // 30% discount
    max: Math.round(row.max * 0.7),
  }));

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
      <section className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-pulse">
              <span className="text-3xl">🔥</span>
              <span className="font-bold text-lg">عرض محدود لفترة قصيرة</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              خصم حتى
              <span className="block text-7xl md:text-8xl text-yellow-300 my-4">30%</span>
              على {service.name_ar}
            </h1>

            <p className="text-2xl text-red-100 mb-8 leading-relaxed">
              في {city.name_ar} • عرض محدود • احجز الآن
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#deals"
                className="px-10 py-5 bg-white text-red-600 rounded-xl hover:bg-gray-100 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
              >
                اطلع على العروض
              </a>
              <a
                href="tel:+966548923300"
                className="px-10 py-5 bg-yellow-400 text-gray-900 rounded-xl hover:bg-yellow-300 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
              >
                احجز الآن
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Timer */}
      <section className="py-8 bg-yellow-50 border-y-2 border-yellow-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-yellow-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-bold text-lg">
                العرض ساري حتى نهاية الشهر • لا تفوت الفرصة!
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Deals Section */}
      <section id="deals" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              أسعار العرض الخاص
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {dealPrices.map((deal, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-red-500">
                  {/* Badge */}
                  <div className="bg-red-600 text-white text-center py-3 font-bold">
                    وفّر 30%
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                      {deal.label}
                    </h3>

                    {/* Original Price */}
                    <div className="text-center mb-4">
                      <div className="text-gray-500 line-through text-sm">
                        {deal.originalMin} - {deal.originalMax} {deal.unit}
                      </div>
                      <div className="text-3xl font-bold text-red-600 mt-2">
                        {deal.min} - {deal.max}
                        <span className="text-xl mr-2">{deal.unit}</span>
                      </div>
                    </div>

                    {/* What's Included */}
                    <div className="space-y-2 mb-6">
                      {content.included.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <a
                      href="tel:+966548923300"
                      className="block text-center py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-bold"
                    >
                      احجز الآن
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Terms */}
            <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                شروط العرض
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>العرض ساري حتى نهاية الشهر الحالي</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>يشمل جميع الخدمات المذكورة في الباقة</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>الأسعار شاملة الضريبة</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>يجب الحجز المسبق للاستفادة من العرض</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>الضمان المكتوب ساري على جميع الخدمات</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Book Now */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              لماذا تحجز الآن؟
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-6 bg-red-50 rounded-xl">
                <div className="text-4xl">💰</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">وفّر 30%</h3>
                  <p className="text-gray-700">خصم استثنائي لفترة محدودة فقط</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl">
                <div className="text-4xl">⚡</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">حجز سريع</h3>
                  <p className="text-gray-700">نضمن لك موعداً في أقرب وقت</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-green-50 rounded-xl">
                <div className="text-4xl">🛡️</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">ضمان مكتوب</h3>
                  <p className="text-gray-700">جميع الخدمات مضمونة كالمعتاد</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-purple-50 rounded-xl">
                <div className="text-4xl">👨‍🔧</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">فريق محترف</h3>
                  <p className="text-gray-700">نفس الجودة العالية بسعر مخفض</p>
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
                  الأسعار العادية
                </h3>
                <span className="text-sm text-blue-600">قارن الأسعار ←</span>
              </Link>

              <Link
                href={`/faq/${service.slug}/${city.slug}`}
                className="block p-6 bg-white rounded-lg hover:bg-purple-50 transition-colors text-center group shadow"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-purple-600 mb-2">
                  أسئلة شائعة
                </h3>
                <span className="text-sm text-purple-600">إجابات ←</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold text-xl mb-6 animate-bounce">
            وفّر 30% الآن!
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            لا تفوت هذا العرض!
          </h2>
          <p className="text-2xl text-red-100 mb-8 max-w-3xl mx-auto">
            اتصل الآن واحجز موعدك للاستفادة من الخصم الاستثنائي
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+966548923300"
              className="px-10 py-5 bg-white text-red-600 rounded-xl hover:bg-gray-100 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
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
