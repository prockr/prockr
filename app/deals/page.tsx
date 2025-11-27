import Link from 'next/link';
import { SERVICES } from '@/data/services';
import { getTier1Cities } from '@/data/cities';
import { generateMetadata as genMetadata } from '@/lib/seo';
import { dealsPath, getServiceImage } from '@/lib/urls';
import { REVALIDATE_DEFAULT } from '@/lib/constants';
import Image from 'next/image';
import { IMAGE_CACHE_VERSION } from '@/lib/images';

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
                  src={`/images/cleaning/deep-cleaning-Jeddah.jpg?v=${IMAGE_CACHE_VERSION}`}
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

      {/* Special Offers by Category */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              عروض خاصة حسب نوع الخدمة
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              اختر الخدمة المناسبة واحصل على أفضل العروض والخصومات الحصرية
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {/* Moving Deals */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex items-start gap-6">
                <div className="text-7xl flex-shrink-0">🚚</div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-3xl font-bold text-gray-900">
                      عروض نقل العفش
                    </h3>
                    <span className="px-4 py-2 bg-red-600 text-white rounded-full font-bold text-xl">
                      خصم 30%
                    </span>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    احصل على خصم يصل إلى 30% على <Link href="/services/moving" className="text-primary-600 font-semibold hover:underline">خدمات نقل العفش</Link> في <Link href="/saudi/riyadh/moving" className="text-primary-600 font-semibold hover:underline">الرياض</Link>، <Link href="/saudi/jeddah/moving" className="text-primary-600 font-semibold hover:underline">جدة</Link>، و<Link href="/saudi/makkah/moving" className="text-primary-600 font-semibold hover:underline">مكة</Link>. العرض يشمل <Link href="/services/moving/packing" className="text-primary-600 font-semibold hover:underline">التغليف</Link> و<Link href="/services/moving/disassembly" className="text-primary-600 font-semibold hover:underline">الفك والتركيب</Link> مجاناً للمنازل الكبيرة!
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-red-50 rounded-xl p-4 border-2 border-red-200">
                      <div className="font-bold text-red-600 text-lg mb-2">🏠 الشقق</div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">25% خصم</div>
                      <div className="text-sm text-gray-600">للشقق حتى 3 غرف</div>
                    </div>
                    <div className="bg-red-50 rounded-xl p-4 border-2 border-red-200">
                      <div className="font-bold text-red-600 text-lg mb-2">🏡 الفلل</div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">30% خصم</div>
                      <div className="text-sm text-gray-600">للفلل والمنازل الكبيرة</div>
                    </div>
                    <div className="bg-red-50 rounded-xl p-4 border-2 border-red-200">
                      <div className="font-bold text-red-600 text-lg mb-2">🏢 المكاتب</div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">20% خصم</div>
                      <div className="text-sm text-gray-600">نقل المكاتب والشركات</div>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link href="/deals/moving/riyadh" className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold">
                      عروض الرياض
                    </Link>
                    <Link href="/deals/moving/jeddah" className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold">
                      عروض جدة
                    </Link>
                    <Link href="/pricing/moving/riyadh" className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-semibold">
                      الأسعار التفصيلية
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Cleaning Deals */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex items-start gap-6">
                <div className="text-7xl flex-shrink-0">✨</div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-3xl font-bold text-gray-900">
                      عروض التنظيف الشاملة
                    </h3>
                    <span className="px-4 py-2 bg-red-600 text-white rounded-full font-bold text-xl">
                      خصم 25%
                    </span>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    خصومات كبيرة على جميع <Link href="/services/cleaning" className="text-primary-600 font-semibold hover:underline">خدمات التنظيف</Link>: <Link href="/services/cleaning/deep" className="text-primary-600 font-semibold hover:underline">التنظيف العميق</Link>، <Link href="/services/cleaning/steam" className="text-primary-600 font-semibold hover:underline">التنظيف بالبخار</Link>، <Link href="/services/cleaning/tanks" className="text-primary-600 font-semibold hover:underline">تنظيف الخزانات</Link>. احجز الآن واحصل على تعقيم مجاني!
                  </p>
                  <div className="bg-gradient-to-r from-blue-50 to-primary-50 rounded-xl p-6 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="text-5xl">🎁</div>
                      <div>
                        <div className="font-bold text-gray-900 text-xl mb-2">عرض الباقة الشاملة</div>
                        <div className="text-gray-700">احجز تنظيف عميق + تنظيف خزانات + تنظيف مفروشات واحصل على خصم إضافي 10%</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/deals/cleaning/riyadh" className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold">
                      عروض الرياض
                    </Link>
                    <Link href="/deals/cleaning/jeddah" className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold">
                      عروض جدة
                    </Link>
                    <Link href="/faq/cleaning/riyadh" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold">
                      أسئلة شائعة
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Maintenance Deals */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex items-start gap-6">
                <div className="text-7xl flex-shrink-0">🔧</div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-3xl font-bold text-gray-900">
                      عروض الصيانة والإصلاح
                    </h3>
                    <span className="px-4 py-2 bg-red-600 text-white rounded-full font-bold text-xl">
                      خصم 20%
                    </span>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    خصومات على <Link href="/services/ac" className="text-primary-600 font-semibold hover:underline">صيانة المكيفات</Link>، <Link href="/services/leaks-plumbing" className="text-primary-600 font-semibold hover:underline">كشف تسربات المياه</Link>، <Link href="/services/plumbing" className="text-primary-600 font-semibold hover:underline">السباكة</Link>، و<Link href="/services/electrical" className="text-primary-600 font-semibold hover:underline">الكهرباء</Link>. معاينة مجانية مع كل عرض!
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-3xl">❄️</div>
                        <div className="font-bold text-blue-900 text-lg">عرض المكيفات</div>
                      </div>
                      <div className="text-sm text-gray-700 mb-2">صيانة شاملة لجميع أنواع المكيفات</div>
                      <div className="text-2xl font-bold text-blue-600">20% خصم</div>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-3xl">💧</div>
                        <div className="font-bold text-blue-900 text-lg">عرض كشف التسربات</div>
                      </div>
                      <div className="text-sm text-gray-700 mb-2">باستخدام أحدث الأجهزة الإلكترونية</div>
                      <div className="text-2xl font-bold text-blue-600">25% خصم</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/deals/ac/riyadh" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                      عروض المكيفات
                    </Link>
                    <Link href="/deals/leaks-plumbing/riyadh" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                      عروض كشف التسربات
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Pest Control Deals */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex items-start gap-6">
                <div className="text-7xl flex-shrink-0">🐜</div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-3xl font-bold text-gray-900">
                      عروض مكافحة الحشرات
                    </h3>
                    <span className="px-4 py-2 bg-red-600 text-white rounded-full font-bold text-xl">
                      خصم 25%
                    </span>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    <Link href="/services/pest-control" className="text-primary-600 font-semibold hover:underline">خدمات مكافحة الحشرات</Link> بأسعار مخفضة في جميع المدن. ضمان 6 أشهر مع كل رش، ومواد آمنة ومعتمدة من وزارة الصحة.
                  </p>
                  <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="text-5xl">🏆</div>
                      <div>
                        <div className="font-bold text-green-900 text-xl mb-2">باقة الحماية السنوية</div>
                        <div className="text-gray-700">4 زيارات في السنة مع ضمان شامل وخصم إضافي 15%</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/deals/pest-control/riyadh" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold">
                      عروض الرياض
                    </Link>
                    <Link href="/deals/pest-control/jeddah" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold">
                      عروض جدة
                    </Link>
                    <Link href="/pricing/pest-control/riyadh" className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-semibold">
                      الأسعار
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Claim */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                كيف تحصل على الخصم؟
              </h2>
              <p className="text-xl text-gray-600">
                عملية بسيطة وسريعة للاستفادة من عروضنا الحصرية
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4 shadow-lg">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  اختر الخدمة
                </h3>
                <p className="text-gray-600">
                  حدد الخدمة والمدينة من العروض أعلاه
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4 shadow-lg">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  اتصل بنا
                </h3>
                <p className="text-gray-600">
                  تواصل معنا عبر الهاتف أو واتساب
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4 shadow-lg">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  اذكر كود العرض
                </h3>
                <p className="text-gray-600">
                  اذكر رقم العرض للحصول على الخصم
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4 shadow-lg">
                  4
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  احصل على الخدمة
                </h3>
                <p className="text-gray-600">
                  استمتع بالخدمة بسعر مخفض
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              شروط وأحكام العروض
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">مدة العروض</div>
                    <div className="text-gray-600">جميع العروض سارية حتى نهاية الشهر الحالي أو حتى نفاد الكمية</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">تطبيق الخصم</div>
                    <div className="text-gray-600">لا يمكن الجمع بين أكثر من عرض واحد في نفس الخدمة</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">السعر النهائي</div>
                    <div className="text-gray-600">الخصومات تطبق على السعر الأساسي قبل الإضافات</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">كود العرض</div>
                    <div className="text-gray-600">يجب ذكر كود العرض عند الحجز للاستفادة من الخصم</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">التغطية</div>
                    <div className="text-gray-600">العروض متاحة في جميع المدن المذكورة في الصفحة</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">الاستفسارات</div>
                    <div className="text-gray-600">للمزيد من المعلومات <Link href="/contact" className="text-primary-600 font-semibold hover:underline">اتصل بنا</Link></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Deals */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              لماذا عروض بروكر الأفضل؟
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم أفضل قيمة مقابل المال مع الحفاظ على أعلى معايير الجودة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4">💎</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                جودة مضمونة
              </h3>
              <p className="text-gray-700 leading-relaxed">
                الخصم لا يعني التنازل عن الجودة. نفس المعايير العالية والخدمة الاحترافية مع كل عرض
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-primary-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4">📋</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                بدون رسوم خفية
              </h3>
              <p className="text-gray-700 leading-relaxed">
                السعر المعلن هو السعر النهائي. لا توجد رسوم إضافية أو مفاجآت بعد انتهاء العمل
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ضمان كامل
              </h3>
              <p className="text-gray-700 leading-relaxed">
                جميع الخدمات مشمولة بالضمان المكتوب حتى مع الخصم. راحتك وثقتك أولويتنا
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4">⏰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                حجز سريع
              </h3>
              <p className="text-gray-700 leading-relaxed">
                نفس سرعة الاستجابة والمواعيد المرنة. العرض لا يؤثر على جودة الخدمة أو سرعتها
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4">👨‍🔧</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                فنيون معتمدون
              </h3>
              <p className="text-gray-700 leading-relaxed">
                نفس الفريق المحترف والمدرب. فنيون معتمدون ومؤهلون مع خبرات واسعة في المجال
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                عروض متجددة
              </h3>
              <p className="text-gray-700 leading-relaxed">
                نطلق عروض جديدة باستمرار. تابعنا للحصول على أحدث العروض والخصومات الحصرية
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ for Deals */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                أسئلة شائعة عن العروض
              </h2>
              <p className="text-xl text-gray-600">
                إجابات على أكثر الأسئلة شيوعاً حول عروضنا وخصوماتنا
              </p>
            </div>

            <div className="space-y-4">
              <details className="group bg-white rounded-xl border-2 border-gray-200 hover:border-red-500 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-bold text-gray-900 flex-1 pl-4">
                    هل العروض متاحة في جميع المدن؟
                  </h3>
                  <svg className="w-6 h-6 text-red-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    نعم، العروض متاحة في جميع المدن الرئيسية: <Link href="/deals/moving/riyadh" className="text-primary-600 font-semibold hover:underline">الرياض</Link>، <Link href="/deals/moving/jeddah" className="text-primary-600 font-semibold hover:underline">جدة</Link>، <Link href="/deals/moving/makkah" className="text-primary-600 font-semibold hover:underline">مكة</Link>، <Link href="/deals/moving/dammam" className="text-primary-600 font-semibold hover:underline">الدمام</Link> وأكثر من 40 مدينة أخرى في المملكة.
                  </p>
                </div>
              </details>

              <details className="group bg-white rounded-xl border-2 border-gray-200 hover:border-red-500 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-bold text-gray-900 flex-1 pl-4">
                    كيف أحصل على الخصم؟
                  </h3>
                  <svg className="w-6 h-6 text-red-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    فقط <Link href="/contact" className="text-primary-600 font-semibold hover:underline">اتصل بنا</Link> أو أرسل رسالة واتساب واذكر كود العرض. فريقنا سيطبق الخصم فوراً على حجزك. لا تحتاج لأي إجراءات معقدة!
                  </p>
                </div>
              </details>

              <details className="group bg-white rounded-xl border-2 border-gray-200 hover:border-red-500 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-bold text-gray-900 flex-1 pl-4">
                    هل يمكن الجمع بين أكثر من عرض؟
                  </h3>
                  <svg className="w-6 h-6 text-red-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    لا يمكن الجمع بين عرضين على نفس الخدمة، ولكن يمكنك الاستفادة من عروض مختلفة لخدمات مختلفة. مثلاً: عرض <Link href="/deals/moving/riyadh" className="text-primary-600 font-semibold hover:underline">نقل العفش</Link> + عرض <Link href="/deals/cleaning/riyadh" className="text-primary-600 font-semibold hover:underline">التنظيف</Link> معاً.
                  </p>
                </div>
              </details>

              <details className="group bg-white rounded-xl border-2 border-gray-200 hover:border-red-500 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-bold text-gray-900 flex-1 pl-4">
                    هل الخصم يؤثر على جودة الخدمة؟
                  </h3>
                  <svg className="w-6 h-6 text-red-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    أبداً! نحافظ على نفس المعايير العالية من الجودة والاحترافية مع جميع العروض. الفريق نفسه، المعدات نفسها، والضمان نفسه. تابع <Link href="/faqs" className="text-primary-600 font-semibold hover:underline">الأسئلة الشائعة</Link> لمزيد من المعلومات.
                  </p>
                </div>
              </details>

              <details className="group bg-white rounded-xl border-2 border-gray-200 hover:border-red-500 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-bold text-gray-900 flex-1 pl-4">
                    متى تنتهي العروض؟
                  </h3>
                  <svg className="w-6 h-6 text-red-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    معظم العروض سارية حتى نهاية الشهر الحالي، لكن بعض العروض الخاصة قد تنتهي أسرع. ننصح بالحجز مبكراً لضمان الاستفادة. راجع <Link href="/pricing" className="text-primary-600 font-semibold hover:underline">صفحة الأسعار</Link> للمزيد من التفاصيل.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-7xl mb-6">🎉</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              لا تفوّت هذه العروض الحصرية!
            </h2>
            <p className="text-2xl text-red-100 mb-8 leading-relaxed">
              اتصل الآن واحصل على خصمك قبل انتهاء العرض. فريقنا جاهز لخدمتك 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-12 py-5 bg-white text-red-600 rounded-xl hover:bg-gray-100 transition-all font-bold text-2xl shadow-2xl transform hover:scale-105"
              >
                اتصل الآن
              </Link>
              <Link
                href="/saudi"
                className="inline-block px-12 py-5 bg-yellow-400 text-gray-900 rounded-xl hover:bg-yellow-300 transition-all font-bold text-2xl shadow-2xl transform hover:scale-105"
              >
                تصفح الخدمات
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-red-100">
              <div className="flex items-center gap-2">
                <span className="text-3xl">⏰</span>
                <span className="text-lg">عروض محدودة</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl">🎯</span>
                <span className="text-lg">أفضل الأسعار</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl">✅</span>
                <span className="text-lg">ضمان شامل</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

