import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, CircleDot, Navigation, ChevronLeft } from 'lucide-react';
import { CITIES_GEOCODE, getCitiesByTier } from '@/lib/geocoding';
import { SERVICES } from '@/data/services';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'نطاق الخدمة - المدن المغطاة | بروكر',
  description:
    'نغطي أكثر من 40 مدينة سعودية بخدمات منزلية محترفة. اكتشف المدن والأحياء التي نخدمها في جميع أنحاء المملكة العربية السعودية.',
  path: '/service-area',
});

export default function ServiceAreaPage() {
  const tier1Cities = getCitiesByTier(1);
  const tier2Cities = getCitiesByTier(2);
  const tier3Cities = getCitiesByTier(3);

  const totalCoverage = CITIES_GEOCODE.reduce(
    (sum, city) => sum + city.serviceRadius,
    0
  );

  const regions = Array.from(
    new Set(CITIES_GEOCODE.map((city) => city.region))
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6">
              <MapPin className="w-5 h-5" />
              <span className="text-sm font-semibold">40+ مدينة مغطاة</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              نطاق خدماتنا في المملكة
            </h1>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              نقدم خدمات منزلية محترفة في أكثر من 40 مدينة سعودية عبر {regions.length} منطقة
              إدارية، بنطاق تغطية يصل إلى {totalCoverage} كم
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">{CITIES_GEOCODE.length}</div>
                <div className="text-sm text-white/80">مدينة مغطاة</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">{SERVICES.length}</div>
                <div className="text-sm text-white/80">خدمة متاحة</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">{regions.length}</div>
                <div className="text-sm text-white/80">منطقة إدارية</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tier 1 Cities - Major Metro Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-3">
                <CircleDot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">المدن الرئيسية</h2>
                <p className="text-gray-600">تغطية شاملة على مدار 24 ساعة</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tier1Cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/saudi/${city.slug}`}
                  className="group bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 rounded-xl p-6 hover:shadow-xl hover:border-blue-300 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                        {city.name_ar}
                      </h3>
                      <p className="text-sm text-gray-600">{city.region}</p>
                    </div>
                    <div className="bg-blue-100 rounded-full p-2">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Navigation className="w-4 h-4 text-blue-500" />
                      <span>نطاق الخدمة: {city.serviceRadius} كم</span>
                    </div>
                    {city.neighborhoods && city.neighborhoods.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {city.neighborhoods.slice(0, 3).map((neighborhood, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded"
                          >
                            {neighborhood}
                          </span>
                        ))}
                        {city.neighborhoods.length > 3 && (
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            +{city.neighborhoods.length - 3}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center text-primary-600 font-semibold group-hover:gap-2 transition-all">
                    <span>عرض الخدمات</span>
                    <ChevronLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tier 2 Cities - Regional Hubs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-3">
                <CircleDot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">المدن الإقليمية</h2>
                <p className="text-gray-600">خدمات محترفة وسريعة</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {tier2Cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/saudi/${city.slug}`}
                  className="group bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg hover:border-green-300 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-green-100 rounded-full p-1.5">
                      <MapPin className="w-4 h-4 text-green-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {city.name_ar}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">{city.region}</p>
                  <div className="flex items-center gap-1 text-xs text-gray-600">
                    <Navigation className="w-3 h-3 text-green-500" />
                    <span>{city.serviceRadius} كم</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tier 3 Cities - Secondary Cities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-3">
                <CircleDot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">المدن الثانوية</h2>
                <p className="text-gray-600">تغطية متنامية</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {tier3Cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/saudi/${city.slug}`}
                  className="group bg-purple-50 border border-purple-100 rounded-lg p-3 hover:shadow-md hover:border-purple-300 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-3 h-3 text-purple-600" />
                    <h3 className="font-bold text-sm text-gray-900 group-hover:text-primary-600 transition-colors">
                      {city.name_ar}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-500">{city.region}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regions Overview */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              المناطق الإدارية المغطاة
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {regions.map((region, idx) => {
                const citiesInRegion = CITIES_GEOCODE.filter((c) => c.region === region);
                return (
                  <div
                    key={idx}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{region}</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {citiesInRegion.length} {citiesInRegion.length === 1 ? 'مدينة' : 'مدن'}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {citiesInRegion.map((city) => (
                        <Link
                          key={city.slug}
                          href={`/saudi/${city.slug}`}
                          className="text-xs bg-gray-100 hover:bg-primary-100 hover:text-primary-700 text-gray-700 px-3 py-1 rounded-full transition-colors"
                        >
                          {city.name_ar}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">هل تبحث عن خدمة في مدينتك؟</h2>
            <p className="text-xl text-white/90 mb-8">
              اختر مدينتك من القائمة أعلاه واستعرض جميع الخدمات المتاحة
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/saudi"
                className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition-colors"
              >
                تصفح جميع المدن
              </Link>
              <Link
                href="/services"
                className="bg-primary-700 hover:bg-primary-800 border-2 border-white/30 px-8 py-3 rounded-lg font-bold transition-colors"
              >
                جميع الخدمات
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

