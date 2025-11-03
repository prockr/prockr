import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CITIES } from '@/data/cities';
import { SERVICES } from '@/data/services';
import { ServiceCard } from '@/components/ServiceCard';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { TrustBadges } from '@/components/TrustBadges';
import { cityPath, servicePath } from '@/lib/urls';
import { REVALIDATE_DEFAULT } from '@/lib/constants';
import type { Metadata } from 'next';

export const revalidate = REVALIDATE_DEFAULT;

interface PageProps {
  params: {
    city: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const city = CITIES.find((c) => c.slug === params.city);

  if (!city) {
    return {
      title: 'المدينة غير موجودة | بروكر',
    };
  }

  return {
    title: `خدمات منزلية في ${city.name_ar} | جميع الخدمات | بروكر`,
    description: `احصل على أفضل الخدمات المنزلية في ${city.name_ar}. نقل عفش، تنظيف، سباكة، مكافحة حشرات، تكييف، كهرباء والمزيد. فريق معتمد وضمان مكتوب.`,
    openGraph: {
      title: `خدمات منزلية في ${city.name_ar} | بروكر`,
      description: `أفضل الخدمات المنزلية في ${city.name_ar} بأسعار تنافسية وضمان مكتوب`,
      type: 'website',
    },
  };
}

export async function generateStaticParams() {
  // Generate for all Tier 1 cities
  return CITIES.filter((c) => c.tier === 1).map((city) => ({
    city: city.slug,
  }));
}

export default function CityHubPage({ params }: PageProps) {
  const city = CITIES.find((c) => c.slug === params.city);

  if (!city) {
    notFound();
  }

  const breadcrumbs = [
    { label: 'الرئيسية', href: '/' },
    { label: 'المملكة', href: '/saudi' },
    { label: city.name_ar, href: cityPath(city.slug) },
  ];

  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <span className="text-3xl">🏙️</span>
              <span className="font-bold text-lg">جميع الخدمات المنزلية</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              خدمات منزلية في
              <span className="block text-yellow-300 mt-2">{city.name_ar}</span>
            </h1>

            <p className="text-2xl text-primary-100 mb-8 leading-relaxed">
              مقدمو خدمات معتمدون • استجابة سريعة • ضمان مكتوب • أسعار واضحة
            </p>

            {/* Neighborhoods */}
            {city.neighborhoods && city.neighborhoods.length > 0 && (
              <div className="mb-8">
                <div className="text-sm text-primary-200 mb-3">نخدم جميع الأحياء:</div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {city.neighborhoods.map((neighborhood) => (
                    <span
                      key={neighborhood}
                      className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium"
                    >
                      {neighborhood}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold text-yellow-300 mb-2">14</div>
                <div className="text-sm text-primary-100">خدمة رئيسية</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold text-yellow-300 mb-2">100+</div>
                <div className="text-sm text-primary-100">خدمة فرعية</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold text-yellow-300 mb-2">24/7</div>
                <div className="text-sm text-primary-100">خدمة طوارئ</div>
              </div>
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

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              الخدمات المتاحة في {city.name_ar}
            </h2>
            <p className="text-xl text-gray-600">
              اختر الخدمة المناسبة لك
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.slug} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <ServiceCard
                  service={service}
                  citySlug={city.slug}
                  href={servicePath(city.slug, service.slug)}
                />
                <div className="p-6 bg-gray-50 border-t">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-primary-600">✓</span>
                    الخدمات المتخصصة
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.subservices.slice(0, 4).map((sub) => (
                      <span
                        key={sub.slug}
                        className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-gray-200 hover:border-primary-400 transition-colors"
                      >
                        {sub.name_ar}
                      </span>
                    ))}
                    {service.subservices.length > 4 && (
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full font-medium">
                        +{service.subservices.length - 4} المزيد
                      </span>
                    )}
                  </div>
                  <div className="mt-4">
                    <Link
                      href={servicePath(city.slug, service.slug)}
                      className="block text-center py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-bold"
                    >
                      اطلب الخدمة
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              روابط سريعة
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/deals"
                className="block p-8 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <div className="text-5xl mb-4">🎁</div>
                <h3 className="text-2xl font-bold mb-2">العروض والخصومات</h3>
                <p className="text-red-100 mb-4">وفّر حتى 30% على خدماتنا</p>
                <span className="text-yellow-300 font-bold">تصفح العروض ←</span>
              </Link>

              <Link
                href="/emergency"
                className="block p-8 bg-gradient-to-br from-red-700 to-red-900 text-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 animate-pulse"
              >
                <div className="text-5xl mb-4">🚨</div>
                <h3 className="text-2xl font-bold mb-2">خدمة طوارئ 24/7</h3>
                <p className="text-red-200 mb-4">استجابة فورية في أي وقت</p>
                <span className="text-yellow-300 font-bold">اتصل الآن ←</span>
              </Link>

              <Link
                href="/pricing"
                className="block p-8 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-2xl font-bold mb-2">الأسعار</h3>
                <p className="text-blue-100 mb-4">أسعار واضحة وشفافة</p>
                <span className="text-yellow-300 font-bold">اطلع على الأسعار ←</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            جاهز لطلب خدمتك في {city.name_ar}؟
          </h2>
          <p className="text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
            اتصل بنا الآن واحصل على خدمة احترافية في أي حي من أحياء {city.name_ar}
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
            <Link
              href="/contact"
              className="px-10 py-5 bg-yellow-400 text-gray-900 rounded-xl hover:bg-yellow-300 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
            >
              اتصل بنا
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
