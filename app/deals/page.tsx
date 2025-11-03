import Link from 'next/link';
import { SERVICES } from '@/data/services';
import { getTier1Cities } from '@/data/cities';
import { generateMetadata as genMetadata } from '@/lib/seo';
import { dealsPath, getServiceImage } from '@/lib/urls';
import { REVALIDATE_DEFAULT } from '@/lib/constants';
import Image from 'next/image';

export const revalidate = REVALIDATE_DEFAULT;

export const metadata = genMetadata({
  title: 'العروض والخصومات | وفر حتى 30% | بروكر',
  description:
    'احصل على أفضل العروض والخصومات على الخدمات المنزلية. خصومات تصل إلى 30% على جميع الخدمات في المملكة العربية السعودية.',
  path: '/deals',
});

export default function DealsHubPage() {
  const tier1Cities = getTier1Cities();

  return (
    <div className="min-h-screen">
      {/* Hero Section - Enhanced with Image */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 md:py-20">
            {/* Left Content */}
            <div className="text-center lg:text-right order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-pulse">
                <span className="text-3xl">🔥</span>
                <span className="font-bold text-lg">عروض حصرية محدودة</span>
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                وفّر حتى
                <span className="block text-7xl md:text-9xl text-yellow-300 my-4">
                  30%
                </span>
                على جميع خدماتنا
              </h1>

              {/* Description */}
              <p className="text-2xl text-red-100 mb-8 leading-relaxed">
                عروض وخصومات استثنائية على الخدمات المنزلية في جميع أنحاء المملكة
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
                <a
                  href="#services"
                  className="px-10 py-5 bg-white text-red-600 rounded-xl hover:bg-gray-100 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
                >
                  اختر خدمتك
                </a>
                <a
                  href="/contact"
                  className="px-10 py-5 bg-yellow-400 text-gray-900 rounded-xl hover:bg-yellow-300 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
                >
                  اتصل الآن
                </a>
              </div>

              {/* Limited Time Notice */}
              <div className="mt-8 inline-flex items-center gap-2 text-yellow-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold">عروض محدودة لفترة قصيرة</span>
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2">
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/cleaning/deep-cleaning-Jeddah.jpg"
                  alt="عروض وخصومات الخدمات المنزلية"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 to-transparent" />
                <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold text-2xl shadow-xl animate-bounce">
                  خصم 30%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deal Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-shadow">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                عرض الموسم
              </h3>
              <div className="text-5xl font-bold text-red-600 mb-2">25%</div>
              <p className="text-gray-600">خصم على جميع الخدمات</p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-shadow border-4 border-yellow-400">
              <div className="text-6xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                باقة العائلة
              </h3>
              <div className="text-5xl font-bold text-red-600 mb-2">30%</div>
              <p className="text-gray-600">للمنازل والفلل الكبيرة</p>
              <div className="mt-3 inline-block px-3 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold">
                الأكثر توفيراً
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-shadow">
              <div className="text-6xl mb-4">🎁</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                عملاء جدد
              </h3>
              <div className="text-5xl font-bold text-red-600 mb-2">20%</div>
              <p className="text-gray-600">خصم خاص لأول خدمة</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services with Deals */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              اختر الخدمة واحصل على خصمك
            </h2>
            <p className="text-xl text-gray-600">
              عروض حصرية على جميع خدماتنا في المدن الرئيسية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.slug}
                className="group bg-white rounded-xl border-2 border-gray-200 hover:border-red-500 overflow-hidden transition-all hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <Image
                    src={getServiceImage(service.slug)}
                    alt={service.name_ar}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Discount Badge */}
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                    خصم 25%
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {service.name_ar}
                  </h3>

                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-2">متاح في:</div>
                    <div className="flex flex-wrap gap-2">
                      {tier1Cities.slice(0, 3).map((city) => (
                        <span
                          key={city.slug}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                        >
                          {city.name_ar}
                        </span>
                      ))}
                      <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded font-medium">
                        +{tier1Cities.length - 3} مدن
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {tier1Cities.map((city) => (
                      <Link
                        key={city.slug}
                        href={dealsPath(service.slug, city.slug)}
                        className="block w-full px-4 py-3 bg-red-600 text-white text-center rounded-lg hover:bg-red-700 transition-colors font-medium"
                      >
                        عرض {city.name_ar}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              شروط وأحكام العروض
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-red-600 text-xl">•</span>
                <span>جميع العروض سارية حتى نهاية الشهر الحالي</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 text-xl">•</span>
                <span>لا يمكن الجمع بين أكثر من عرض واحد</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 text-xl">•</span>
                <span>الخصومات تطبق على السعر الأساسي قبل الإضافات</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 text-xl">•</span>
                <span>يجب ذكر كود العرض عند الحجز</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 text-xl">•</span>
                <span>للمزيد من المعلومات اتصل بنا على الأرقام الموضحة</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            لا تفوّت هذه العروض الحصرية!
          </h2>
          <p className="text-2xl text-red-100 mb-8">
            اتصل الآن واحصل على خصمك قبل انتهاء العرض
          </p>
          <Link
            href="/contact"
            className="inline-block px-12 py-5 bg-white text-red-600 rounded-xl hover:bg-gray-100 transition-all font-bold text-2xl shadow-2xl transform hover:scale-105"
          >
            اتصل الآن
          </Link>
        </div>
      </section>
    </div>
  );
}

