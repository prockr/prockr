import Link from 'next/link';
import Image from 'next/image';
import { CITIES, getTier1Cities } from '@/data/cities';
import { cityPath } from '@/lib/urls';
import { generateMetadata as genMetadata } from '@/lib/seo';
import { REVALIDATE_DEFAULT } from '@/lib/constants';

export const revalidate = REVALIDATE_DEFAULT;

export const metadata = genMetadata({
  title: 'خدمات منزلية في جميع مدن المملكة العربية السعودية | بروكر',
  description:
    'اختر مدينتك واحصل على أفضل الخدمات المنزلية في السعودية. نغطي أكثر من 45 مدينة بخدمات احترافية معتمدة.',
  path: '/saudi',
});

export default function SaudiHubPage() {
  const tier1 = getTier1Cities();
  const tier2 = CITIES.filter((c) => c.tier === 2);
  const tier3 = CITIES.filter((c) => c.tier === 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-700 via-green-800 to-green-900 text-white overflow-hidden">
        {/* Background Pattern - Saudi Flag Style */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(45deg, transparent 45%, white 45%, white 55%, transparent 55%)',
            backgroundSize: '80px 80px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 md:py-24">
            {/* Left Content */}
            <div className="text-center lg:text-right">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <span className="text-3xl">🇸🇦</span>
                <span className="font-bold text-lg">نخدم جميع مناطق المملكة</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                اختر مدينتك
                <span className="block text-yellow-300 mt-2">في المملكة</span>
              </h1>

              <p className="text-2xl text-green-100 mb-8 leading-relaxed">
                خدمات منزلية احترافية في أكثر من 45 مدينة سعودية • مقدمو خدمات معتمدون
              </p>

              {/* Cities Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-4xl font-bold text-yellow-300 mb-1">45+</div>
                  <div className="text-sm text-green-100">مدينة</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-4xl font-bold text-yellow-300 mb-1">5</div>
                  <div className="text-sm text-green-100">مدن رئيسية</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-4xl font-bold text-yellow-300 mb-1">100%</div>
                  <div className="text-sm text-green-100">تغطية</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
                <a
                  href="#main-cities"
                  className="px-10 py-5 bg-white text-green-700 rounded-xl hover:bg-gray-100 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
                >
                  اختر مدينتك
                </a>
                <Link
                  href="/services"
                  className="px-10 py-5 bg-yellow-400 text-gray-900 rounded-xl hover:bg-yellow-300 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
                >
                  تصفح الخدمات
                </Link>
              </div>
            </div>

            {/* Right - Map Style Images */}
            <div className="grid grid-cols-2 gap-4">
              {/* Riyadh */}
              <div className="relative h-[220px] rounded-xl overflow-hidden shadow-xl group">
                <Image
                  src="/images/cleaning/home-cleaning-Riyadh.jpg"
                  alt="الرياض"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 right-4 left-4">
                  <div className="text-2xl font-bold text-white mb-1">الرياض</div>
                  <div className="text-sm text-gray-200">العاصمة</div>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-red-500 rounded-full animate-pulse" />
              </div>

              {/* Jeddah */}
              <div className="relative h-[220px] rounded-xl overflow-hidden shadow-xl group">
                <Image
                  src="/images/cleaning/deep-cleaning-Jeddah.jpg"
                  alt="جدة"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 right-4 left-4">
                  <div className="text-2xl font-bold text-white mb-1">جدة</div>
                  <div className="text-sm text-gray-200">عروس البحر</div>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-red-500 rounded-full animate-pulse" />
              </div>

              {/* Dammam */}
              <div className="relative h-[220px] rounded-xl overflow-hidden shadow-xl group">
                <Image
                  src="/images/cleaning/cleaning-services-Dammam.jpg"
                  alt="الدمام"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 right-4 left-4">
                  <div className="text-2xl font-bold text-white mb-1">الدمام</div>
                  <div className="text-sm text-gray-200">عاصمة الشرقية</div>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-red-500 rounded-full animate-pulse" />
              </div>

              {/* Makkah */}
              <div className="relative h-[220px] rounded-xl overflow-hidden shadow-xl group">
                <Image
                  src="/images/moving/moving-service-in-Makkah.jpg"
                  alt="مكة المكرمة"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 right-4 left-4">
                  <div className="text-2xl font-bold text-white mb-1">مكة</div>
                  <div className="text-sm text-gray-200">المدينة المقدسة</div>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-red-500 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Cities Section */}
      <section id="main-cities" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              المدن الرئيسية
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              المدن الكبرى في المملكة مع تغطية شاملة لجميع الأحياء
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tier1.map((city) => (
              <Link
                key={city.slug}
                href={cityPath(city.slug)}
                className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-6xl">🏙️</div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-1">
                        {city.name_ar}
                      </h3>
                      {city.neighborhoods && (
                        <p className="text-sm text-gray-600 font-medium">
                          {city.neighborhoods.length}+ حي مغطى
                        </p>
                      )}
                    </div>
                    <div>
                      <svg className="w-8 h-8 text-primary-600 group-hover:translate-x-[-4px] transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </div>
                  </div>
                  
                  {city.neighborhoods && city.neighborhoods.length > 0 && (
                    <div>
                      <div className="text-sm font-bold text-gray-700 mb-3">الأحياء المغطاة:</div>
                      <div className="flex flex-wrap gap-2">
                        {city.neighborhoods.slice(0, 5).map((neighborhood) => (
                          <span
                            key={neighborhood}
                            className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full font-medium"
                          >
                            {neighborhood}
                          </span>
                        ))}
                        {city.neighborhoods.length > 5 && (
                          <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full font-medium">
                            +{city.neighborhoods.length - 5} المزيد
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                  <div className="flex items-center justify-between">
                    <span className="font-bold">اطلب خدمتك الآن</span>
                    <span className="text-2xl">←</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tier 2 Cities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">مدن أخرى</h2>
            <p className="text-lg text-gray-600">
              المزيد من المدن في جميع مناطق المملكة
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {tier2.map((city) => (
              <Link
                key={city.slug}
                href={cityPath(city.slug)}
                className="block p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition-all group text-center hover:bg-primary-50"
              >
                <div className="text-4xl mb-3">📍</div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {city.name_ar}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tier 3 Cities */}
      {tier3.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                المزيد من المدن
              </h2>
              <p className="text-lg text-gray-600">
                تغطية شاملة لجميع مناطق المملكة
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {tier3.map((city) => (
                <Link
                  key={city.slug}
                  href={cityPath(city.slug)}
                  className="block p-4 bg-white rounded-lg hover:bg-primary-50 hover:shadow-md transition-all text-center group"
                >
                  <span className="text-gray-900 font-medium group-hover:text-primary-600 transition-colors">
                    {city.name_ar}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            لم تجد مدينتك؟
          </h2>
          <p className="text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
            نحن نتوسع باستمرار. اتصل بنا لمعرفة مدى التغطية في منطقتك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-5 bg-white text-primary-600 rounded-xl hover:bg-gray-100 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
            >
              اتصل بنا
            </Link>
            <Link
              href="/coverage"
              className="px-10 py-5 bg-yellow-400 text-gray-900 rounded-xl hover:bg-yellow-300 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
            >
              مناطق التغطية
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
