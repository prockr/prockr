import Link from 'next/link';
import Image from 'next/image';
import { SERVICES } from '@/data/services';
import { ServiceCard } from '@/components/ServiceCard';
import { generateMetadata as genMetadata } from '@/lib/seo';
import { REVALIDATE_DEFAULT } from '@/lib/constants';

export const revalidate = REVALIDATE_DEFAULT;

export const metadata = genMetadata({
  title: 'جميع الخدمات المنزلية | بروكر',
  description:
    'تصفح جميع الخدمات المنزلية المتاحة في السعودية. نقل العفش، التنظيف، السباكة، مكافحة الحشرات، التكييف، الكهرباء والمزيد.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-blue-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 md:py-24">
            {/* Left Content */}
            <div className="text-center lg:text-right">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <span className="text-3xl">⚡</span>
                <span className="font-bold text-lg">14 خدمة رئيسية • 100+ خدمة فرعية</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                جميع الخدمات
                <span className="block text-yellow-300 mt-2">تحت سقف واحد</span>
              </h1>

              <p className="text-2xl text-primary-100 mb-8 leading-relaxed">
                من نقل العفش إلى التكييف والكهرباء • مقدمو خدمات معتمدون • ضمان مكتوب
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-4xl font-bold text-yellow-300 mb-1">14</div>
                  <div className="text-sm text-primary-100">خدمة رئيسية</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-4xl font-bold text-yellow-300 mb-1">100+</div>
                  <div className="text-sm text-primary-100">خدمة فرعية</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-4xl font-bold text-yellow-300 mb-1">45+</div>
                  <div className="text-sm text-primary-100">مدينة</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
                <a
                  href="#services"
                  className="px-10 py-5 bg-white text-primary-600 rounded-xl hover:bg-gray-100 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
                >
                  تصفح الخدمات
                </a>
                <Link
                  href="/saudi"
                  className="px-10 py-5 bg-yellow-400 text-gray-900 rounded-xl hover:bg-yellow-300 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
                >
                  اختر مدينتك
                </Link>
              </div>
            </div>

            {/* Right - Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[200px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/moving/furniture-moving-company.jpg"
                  alt="نقل عفش"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 right-4 left-4">
                  <div className="text-white font-bold text-lg">نقل العفش</div>
                </div>
              </div>

              <div className="relative h-[200px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/cleaning/deep-cleaning-Jeddah.jpg"
                  alt="تنظيف"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 right-4 left-4">
                  <div className="text-white font-bold text-lg">التنظيف</div>
                </div>
              </div>

              <div className="relative h-[200px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/ac/AC-maintenance.jpg"
                  alt="تكييف"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 right-4 left-4">
                  <div className="text-white font-bold text-lg">التكييف</div>
                </div>
              </div>

              <div className="relative h-[200px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/leaks-plumbing/water-leak-detection.jpg"
                  alt="كشف تسربات"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 right-4 left-4">
                  <div className="text-white font-bold text-lg">كشف التسربات</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              اختر الخدمة المناسبة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              جميع الخدمات المنزلية التي تحتاجها في مكان واحد
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.slug} id={service.slug} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <Link href={`/services/${service.slug}`} className="block">
                  <ServiceCard
                    service={service}
                    citySlug="riyadh"
                    href={`/services/${service.slug}`}
                  />
                </Link>
                <div className="p-6 bg-gray-50 border-t">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-primary-600">✓</span>
                    الخدمات المتخصصة
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.subservices.slice(0, 6).map((sub) => (
                      <Link
                        key={sub.slug}
                        href={`/services/${service.slug}/${sub.slug}`}
                        className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-gray-200 hover:border-primary-400 hover:text-primary-600 transition-colors hover:shadow-sm"
                      >
                        {sub.name_ar}
                      </Link>
                    ))}
                    {service.subservices.length > 6 && (
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full font-medium">
                        +{service.subservices.length - 6} المزيد
                      </span>
                    )}
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <Link
                      href={`/services/${service.slug}`}
                      className="block text-center py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-bold"
                    >
                      تصفح الخدمة
                    </Link>
                    <Link
                      href={`/saudi/riyadh/${service.slug}`}
                      className="block text-center py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition-colors font-bold"
                    >
                      الرياض
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              لماذا تختار خدماتنا؟
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">مقدمو خدمات معتمدون</h3>
                  <p className="text-gray-600">جميع مقدمي الخدمات مدربون ومعتمدون</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">أسعار واضحة</h3>
                  <p className="text-gray-600">لا رسوم خفية، كل شيء واضح مسبقاً</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">استجابة سريعة</h3>
                  <p className="text-gray-600">نصل إليك في الوقت المحدد</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">ضمان الجودة</h3>
                  <p className="text-gray-600">ضمان مكتوب على جميع الخدمات</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            جاهز لطلب خدمتك؟
          </h2>
          <p className="text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
            اختر مدينتك الآن واحصل على أفضل الخدمات المنزلية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/saudi"
              className="px-10 py-5 bg-white text-primary-600 rounded-xl hover:bg-gray-100 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
            >
              اختر المدينة
            </Link>
            <Link
              href="/deals"
              className="px-10 py-5 bg-yellow-400 text-gray-900 rounded-xl hover:bg-yellow-300 transition-all font-bold text-xl shadow-2xl transform hover:scale-105 flex items-center gap-2 justify-center"
            >
              <span>🎁</span>
              <span>تصفح العروض</span>
            </Link>
            <Link
              href="/contact"
              className="px-10 py-5 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
            >
              اتصل بنا
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
