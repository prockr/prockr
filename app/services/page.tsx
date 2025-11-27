import Link from 'next/link';
import Image from 'next/image';
import { SERVICES } from '@/data/services';
import { ServiceCard } from '@/components/ServiceCard';
import { generateMetadata as genMetadata } from '@/lib/seo';
import { REVALIDATE_DEFAULT } from '@/lib/constants';
import { IMAGE_CACHE_VERSION } from '@/lib/images';

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
                  src={`/images/moving/furniture-moving-company.jpg?v=${IMAGE_CACHE_VERSION}`}
                  alt="نقل عفش"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  quality={85}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 right-4 left-4">
                  <div className="text-white font-bold text-lg">نقل العفش</div>
                </div>
              </div>

              <div className="relative h-[200px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={`/images/cleaning/deep-cleaning-Jeddah.jpg?v=${IMAGE_CACHE_VERSION}`}
                  alt="تنظيف"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  quality={85}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 right-4 left-4">
                  <div className="text-white font-bold text-lg">التنظيف</div>
                </div>
              </div>

              <div className="relative h-[200px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={`/images/ac/AC-maintenance.jpg?v=${IMAGE_CACHE_VERSION}`}
                  alt="تكييف"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  quality={85}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 right-4 left-4">
                  <div className="text-white font-bold text-lg">التكييف</div>
                </div>
              </div>

              <div className="relative h-[200px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={`/images/leaks-plumbing/water-leak-detection-Riyadh.jpg?v=${IMAGE_CACHE_VERSION}`}
                  alt="كشف تسربات"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  quality={85}
                  loading="lazy"
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

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                كيف نعمل؟
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                عملية بسيطة وسريعة للحصول على خدمتك
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-700 text-white rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-6 shadow-xl">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">اختر الخدمة</h3>
                <p className="text-gray-700 leading-relaxed">
                  تصفح <Link href="/services/moving" className="text-primary-600 font-semibold hover:underline">نقل العفش</Link>، <Link href="/services/cleaning" className="text-primary-600 font-semibold hover:underline">التنظيف</Link>، أو أي من <Link href="#services" className="text-primary-600 font-semibold hover:underline">14 خدمة رئيسية</Link> متاحة
                </p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-700 text-white rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-6 shadow-xl">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">اختر مدينتك</h3>
                <p className="text-gray-700 leading-relaxed">
                  نخدم <Link href="/saudi/riyadh" className="text-primary-600 font-semibold hover:underline">الرياض</Link>، <Link href="/saudi/jeddah" className="text-primary-600 font-semibold hover:underline">جدة</Link>، و<Link href="/saudi" className="text-primary-600 font-semibold hover:underline">45+ مدينة أخرى</Link> في جميع أنحاء المملكة
                </p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-700 text-white rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-6 shadow-xl">
                  3
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">احجز الآن</h3>
                <p className="text-gray-700 leading-relaxed">
                  <Link href="/contact" className="text-primary-600 font-semibold hover:underline">اتصل بنا</Link> أو احجز أونلاين واحصل على تأكيد فوري. <Link href="/pricing" className="text-primary-600 font-semibold hover:underline">أسعار واضحة</Link> بدون مفاجآت
                </p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-6 shadow-xl">
                  4
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">استمتع بالنتيجة</h3>
                <p className="text-gray-700 leading-relaxed">
                  فريقنا المحترف ينفذ الخدمة بأعلى جودة مع <Link href="/about" className="text-primary-600 font-semibold hover:underline">ضمان مكتوب</Link> وخدمة ما بعد البيع
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                فئات خدماتنا
              </h2>
              <p className="text-xl text-gray-600">
                تغطية شاملة لجميع احتياجاتك المنزلية
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="text-6xl mb-6">🏠</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">خدمات النقل</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <Link href="/services/moving" className="hover:text-primary-600 hover:underline">نقل العفش والأثاث</Link>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <Link href="/services/moving/packing" className="hover:text-primary-600 hover:underline">التغليف والفك والتركيب</Link>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <Link href="/services/moving/storage" className="hover:text-primary-600 hover:underline">التخزين الآمن</Link>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>نقل بين المدن</span>
                  </li>
                </ul>
                <div className="mt-6 flex gap-3">
                  <Link href="/saudi/riyadh/moving" className="px-4 py-2 bg-primary-100 text-primary-700 rounded-lg hover:bg-primary-200 text-sm font-medium">الرياض</Link>
                  <Link href="/deals/moving/jeddah" className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 text-sm font-medium">عروض</Link>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="text-6xl mb-6">✨</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">خدمات التنظيف</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <Link href="/services/cleaning" className="hover:text-primary-600 hover:underline">تنظيف المنازل والفلل</Link>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <Link href="/services/cleaning/deep" className="hover:text-primary-600 hover:underline">التنظيف العميق</Link>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <Link href="/services/cleaning/office" className="hover:text-primary-600 hover:underline">تنظيف المكاتب</Link>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>تنظيف المجالس والكنب</span>
                  </li>
                </ul>
                <div className="mt-6 flex gap-3">
                  <Link href="/saudi/jeddah/cleaning" className="px-4 py-2 bg-primary-100 text-primary-700 rounded-lg hover:bg-primary-200 text-sm font-medium">جدة</Link>
                  <Link href="/deals/cleaning/riyadh" className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 text-sm font-medium">عروض</Link>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="text-6xl mb-6">🔧</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">خدمات الصيانة</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <Link href="/services/ac" className="hover:text-primary-600 hover:underline">صيانة المكيفات</Link>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <Link href="/services/plumbing" className="hover:text-primary-600 hover:underline">السباكة والصرف</Link>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <Link href="/services/electrical" className="hover:text-primary-600 hover:underline">الكهرباء</Link>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <Link href="/services/appliances" className="hover:text-primary-600 hover:underline">صيانة الأجهزة</Link>
                  </li>
                </ul>
                <div className="mt-6 flex gap-3">
                  <Link href="/emergency/ac/riyadh" className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm font-medium">طوارئ</Link>
                  <Link href="/pricing/ac/riyadh" className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 text-sm font-medium">أسعار</Link>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="text-6xl mb-6">💧</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">خدمات الكشف</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <Link href="/services/leaks-plumbing" className="hover:text-primary-600 hover:underline">كشف تسربات المياه</Link>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>العزل المائي والحراري</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>فحص السباكة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>إصلاح التسربات</span>
                  </li>
                </ul>
                <div className="mt-6 flex gap-3">
                  <Link href="/emergency/leaks-plumbing/dammam" className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm font-medium">طوارئ</Link>
                  <Link href="/faq/leaks-plumbing/riyadh" className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 text-sm font-medium">أسئلة</Link>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="text-6xl mb-6">🐜</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">خدمات المكافحة</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <Link href="/services/pest-control" className="hover:text-primary-600 hover:underline">مكافحة الحشرات</Link>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>رش المبيدات الآمنة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>ضمان 6 أشهر</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>مواد معتمدة من الصحة</span>
                  </li>
                </ul>
                <div className="mt-6 flex gap-3">
                  <Link href="/saudi/jeddah/pest-control" className="px-4 py-2 bg-primary-100 text-primary-700 rounded-lg hover:bg-primary-200 text-sm font-medium">جدة</Link>
                  <Link href="/deals/pest-control/riyadh" className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 text-sm font-medium">عروض</Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary-600 mb-4">+9</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">خدمات أخرى</h3>
                  <p className="text-gray-700 mb-4">دهانات، ديكور، حدائق، وأكثر</p>
                  <Link href="#services" className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium">
                    تصفح الكل →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                نخدمك في جميع أنحاء المملكة
              </h2>
              <p className="text-xl text-gray-600">
                تغطية شاملة لأكثر من 45 مدينة سعودية
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">🏙️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">المدن الرئيسية</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  خدمة سريعة ومتكاملة في <Link href="/saudi/riyadh" className="text-primary-600 font-semibold hover:underline">الرياض</Link>، <Link href="/saudi/jeddah" className="text-primary-600 font-semibold hover:underline">جدة</Link>، <Link href="/saudi/makkah" className="text-primary-600 font-semibold hover:underline">مكة</Link>، <Link href="/saudi/madinah" className="text-primary-600 font-semibold hover:underline">المدينة</Link>، و<Link href="/saudi/dammam" className="text-primary-600 font-semibold hover:underline">الدمام</Link>
                </p>
                <div className="text-primary-600 font-bold">وصول خلال 60 دقيقة</div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">📍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">مدن أخرى</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  نخدم 40+ مدينة إضافية في جميع المناطق. شاهد <Link href="/saudi" className="text-primary-600 font-semibold hover:underline">القائمة الكاملة</Link> أو <Link href="/contact" className="text-primary-600 font-semibold hover:underline">اتصل بنا</Link> للاستفسار
                </p>
                <div className="text-green-600 font-bold">تغطية شاملة</div>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">توسع مستمر</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  نعمل على إضافة مدن جديدة باستمرار. إذا لم تكن مدينتك متاحة، اطلع على <Link href="/coverage" className="text-primary-600 font-semibold hover:underline">خطة التوسع</Link>
                </p>
                <div className="text-yellow-600 font-bold">100+ مدينة قريباً</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                لماذا تختار خدماتنا؟
              </h2>
              <p className="text-xl text-gray-600">
                مميزات تجعلنا الخيار الأول للآلاف من العملاء
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-6 bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex-shrink-0 w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center text-3xl">
                  ✅
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">فريق محترف ومعتمد</h3>
                  <p className="text-gray-700 leading-relaxed">
                    جميع مقدمي الخدمات لدينا خضعوا لفحص دقيق وتدريب شامل. نضمن أن كل فني يصل إليك يحمل الشهادات اللازمة والخبرة العملية في مجاله. تعرف على المزيد عن <Link href="/about" className="text-primary-600 font-semibold hover:underline">فريقنا</Link> ومعايير الاختيار لدينا.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center text-3xl">
                  💰
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">أسعار واضحة وتنافسية</h3>
                  <p className="text-gray-700 leading-relaxed">
                    لا مفاجآت في الفاتورة النهائية! جميع <Link href="/pricing" className="text-primary-600 font-semibold hover:underline">أسعارنا</Link> واضحة ومعلنة مسبقاً. نوفر تقييم مجاني قبل البدء، ونلتزم بالسعر المتفق عليه. استفد من <Link href="/deals" className="text-primary-600 font-semibold hover:underline">عروضنا</Link> الحصرية بخصومات تصل إلى 30%.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-3xl">
                  ⚡
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">استجابة سريعة وفورية</h3>
                  <p className="text-gray-700 leading-relaxed">
                    نصل إليك في الوقت المحدد - هذا وعدنا! للحالات العادية، نحجز خلال 24 ساعة. أما <Link href="/emergency" className="text-primary-600 font-semibold hover:underline">حالات الطوارئ</Link> مثل تسربات المياه أو أعطال المكيفات، فنصل خلال 30-60 دقيقة في المدن الرئيسية.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex-shrink-0 w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center text-3xl">
                  🛡️
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">ضمان شامل ومكتوب</h3>
                  <p className="text-gray-700 leading-relaxed">
                    كل خدمة نقدمها مغطاة بضمان مكتوب يتراوح من 3 إلى 24 شهراً حسب نوع الخدمة. إذا ظهرت أي مشكلة خلال فترة الضمان، نحلها فوراً ومجاناً. راحة بالك هي أولويتنا. راجع <Link href="/faqs" className="text-primary-600 font-semibold hover:underline">الأسئلة الشائعة</Link> للمزيد من التفاصيل.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                أسئلة شائعة عن خدماتنا
              </h2>
              <p className="text-xl text-gray-600">
                إجابات على الأسئلة الأكثر شيوعاً
              </p>
            </div>

            <div className="space-y-4">
              <details className="group bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-primary-500 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-bold text-gray-900 flex-1 pl-4">
                    ما هي الخدمات المتاحة؟
                  </h3>
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    نقدم <Link href="#services" className="text-primary-600 font-semibold hover:underline">14 خدمة رئيسية</Link> تشمل أكثر من 100 خدمة فرعية متخصصة. من <Link href="/services/moving" className="text-primary-600 font-semibold hover:underline">نقل العفش</Link> و<Link href="/services/cleaning" className="text-primary-600 font-semibold hover:underline">التنظيف</Link> إلى <Link href="/services/ac" className="text-primary-600 font-semibold hover:underline">صيانة المكيفات</Link> و<Link href="/services/leaks-plumbing" className="text-primary-600 font-semibold hover:underline">كشف التسربات</Link>. تصفح جميع الخدمات أعلاه للتفاصيل الكاملة.
                  </p>
                </div>
              </details>

              <details className="group bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-primary-500 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-bold text-gray-900 flex-1 pl-4">
                    هل تغطون جميع مدن المملكة؟
                  </h3>
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    نعم! نخدم حالياً أكثر من <Link href="/saudi" className="text-primary-600 font-semibold hover:underline">45 مدينة سعودية</Link> بما فيها <Link href="/saudi/riyadh" className="text-primary-600 font-semibold hover:underline">الرياض</Link>، <Link href="/saudi/jeddah" className="text-primary-600 font-semibold hover:underline">جدة</Link>، <Link href="/saudi/makkah" className="text-primary-600 font-semibold hover:underline">مكة</Link>، وجميع المدن الرئيسية. نعمل باستمرار على التوسع لتشمل مدن جديدة. <Link href="/contact" className="text-primary-600 font-semibold hover:underline">اتصل بنا</Link> لمعرفة التغطية في منطقتك.
                  </p>
                </div>
              </details>

              <details className="group bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-primary-500 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-bold text-gray-900 flex-1 pl-4">
                    كم تكلفة الخدمات؟
                  </h3>
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    تختلف الأسعار حسب نوع الخدمة وحجم العمل والمدينة. نوفر <Link href="/pricing" className="text-primary-600 font-semibold hover:underline">أسعار تقريبية</Link> على موقعنا لكل خدمة ومدينة. يمكنك <Link href="/contact" className="text-primary-600 font-semibold hover:underline">طلب عرض سعر مجاني</Link> للحصول على تقدير دقيق. لا تفوت <Link href="/deals" className="text-primary-600 font-semibold hover:underline">عروضنا الحالية</Link> بخصومات تصل إلى 30%!
                  </p>
                </div>
              </details>

              <details className="group bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-primary-500 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-bold text-gray-900 flex-1 pl-4">
                    هل تقدمون ضمان على الخدمات؟
                  </h3>
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    بالتأكيد! جميع خدماتنا مغطاة بضمان مكتوب. مدة الضمان تختلف حسب نوع الخدمة (3-24 شهراً). نلتزم بحل أي مشكلة تظهر خلال فترة الضمان مجاناً وفوراً. راجع <Link href="/faqs" className="text-primary-600 font-semibold hover:underline">الأسئلة الشائعة</Link> أو <Link href="/about" className="text-primary-600 font-semibold hover:underline">سياسة الضمان</Link> لمزيد من التفاصيل.
                  </p>
                </div>
              </details>
            </div>

            <div className="mt-12 text-center">
              <Link href="/faqs" className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors font-bold text-lg shadow-lg">
                <span>المزيد من الأسئلة والأجوبة</span>
                <span>←</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-7xl mb-6">🚀</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              جاهز لطلب خدمتك؟
            </h2>
            <p className="text-2xl text-primary-100 mb-10 leading-relaxed">
              اختر مدينتك الآن واحصل على أفضل الخدمات المنزلية مع ضمان الجودة والاحترافية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/saudi"
                className="px-12 py-5 bg-white text-primary-600 rounded-xl hover:bg-gray-100 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
              >
                اختر المدينة
              </Link>
              <Link
                href="/deals"
                className="px-12 py-5 bg-yellow-400 text-gray-900 rounded-xl hover:bg-yellow-300 transition-all font-bold text-xl shadow-2xl transform hover:scale-105 flex items-center gap-2 justify-center"
              >
                <span>🎁</span>
                <span>تصفح العروض</span>
              </Link>
              <Link
                href="/contact"
                className="px-12 py-5 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
              >
                اتصل بنا
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 text-primary-100">
              <div className="flex items-center gap-2">
                <span className="text-3xl">✅</span>
                <span className="text-lg">14 خدمة رئيسية</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl">⚡</span>
                <span className="text-lg">45+ مدينة</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl">🏆</span>
                <span className="text-lg">ضمان مكتوب</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
