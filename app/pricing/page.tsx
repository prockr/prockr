import Link from 'next/link';
import Image from 'next/image';
import { SERVICES } from '@/data/services';
import { getTier1Cities } from '@/data/cities';
import { generateMetadata as genMetadata } from '@/lib/seo';
import { pricingPath, getServiceImage } from '@/lib/urls';
import { REVALIDATE_DEFAULT } from '@/lib/constants';

export const revalidate = REVALIDATE_DEFAULT;

export const metadata = genMetadata({
  title: 'الأسعار | أسعار واضحة بدون تكاليف خفية | بروكر',
  description:
    'تعرف على أسعار جميع الخدمات المنزلية في المملكة. أسعار واضحة وشفافة بدون تكاليف خفية. احصل على عرض سعر مفصل الآن.',
  path: '/pricing',
});

export default function PricingHubPage() {
  const tier1Cities = getTier1Cities();

  return (
    <div className="min-h-screen">
      {/* Hero Section - Enhanced with Image */}
      <section className="relative bg-gradient-to-br from-primary-600 via-blue-600 to-primary-700 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 md:py-20">
            {/* Left Content */}
            <div className="text-center lg:text-right">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <span className="text-3xl">💰</span>
                <span className="font-bold text-lg">أسعار واضحة وشفافة</span>
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                تعرف على أسعارنا
                <span className="block text-yellow-300 mt-2">
                  قبل الحجز
                </span>
              </h1>

              {/* Description */}
              <p className="text-2xl text-primary-100 mb-8 leading-relaxed">
                لا مفاجآت - لا تكاليف خفية - شفافية كاملة في التسعير
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl mb-2">✓</div>
                  <div className="font-bold mb-1">تنافسية</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl mb-2">✓</div>
                  <div className="font-bold mb-1">لا مفاجآت</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl mb-2">✓</div>
                  <div className="font-bold mb-1">تقييم مجاني</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
                <a
                  href="#services"
                  className="px-10 py-5 bg-white text-primary-600 rounded-xl hover:bg-gray-100 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
                >
                  اختر خدمتك
                </a>
                <a
                  href="/contact"
                  className="px-10 py-5 bg-yellow-400 text-gray-900 rounded-xl hover:bg-yellow-300 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
                >
                  اطلب عرض سعر
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div>
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/moving/villa-moving-Riyadh.jpg"
                  alt="أسعار الخدمات المنزلية"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                <div className="absolute bottom-6 right-6 left-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900 mb-2">أسعار واضحة</div>
                  <div className="text-gray-700">بدون تكاليف خفية • تقييم مجاني</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Pricing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              لماذا أسعارنا الأفضل؟
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🎯</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">تسعير عادل</h3>
                <p className="text-gray-600 text-sm">
                  أسعار تتناسب مع حجم وطبيعة العمل
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🔍</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">شفافية كاملة</h3>
                <p className="text-gray-600 text-sm">
                  نوضح لك كل التفاصيل قبل البدء
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">💎</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">قيمة ممتازة</h3>
                <p className="text-gray-600 text-sm">
                  أفضل نسبة جودة مقابل السعر
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">📋</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">تقييم مجاني</h3>
                <p className="text-gray-600 text-sm">
                  معاينة الموقع وتقدير دقيق مجاناً
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Pricing */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              أسعار خدماتنا
            </h2>
            <p className="text-xl text-gray-600">
              اختر الخدمة والمدينة لمعرفة الأسعار التفصيلية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.slug}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <Image
                    src={getServiceImage(service.slug)}
                    alt={service.name_ar}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.name_ar}
                  </h3>

                  <div className="mb-4 text-sm text-gray-600">
                    {service.subservices.length} خدمة فرعية متاحة
                  </div>

                  <div className="space-y-2">
                    {tier1Cities.map((city) => (
                      <Link
                        key={city.slug}
                        href={pricingPath(service.slug, city.slug)}
                        className="block w-full px-4 py-3 bg-primary-600 text-white text-center rounded-lg hover:bg-primary-700 transition-colors font-medium"
                      >
                        أسعار {city.name_ar}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-primary-50 border-r-4 border-primary-600 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              💡 ملاحظة هامة عن الأسعار
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-primary-600 text-xl">•</span>
                <span>جميع الأسعار المعروضة تقريبية وتعتمد على حجم العمل</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 text-xl">•</span>
                <span>نقدم معاينة مجانية لتقدير التكلفة بدقة</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 text-xl">•</span>
                <span>الأسعار شاملة جميع المواد والمعدات الأساسية</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 text-xl">•</span>
                <span>خدمات إضافية متاحة بأسعار منفصلة</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 text-xl">•</span>
                <span>عروض وخصومات متاحة - <Link href="/deals" className="text-primary-600 underline font-bold">اطلع عليها الآن</Link></span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            جاهز لطلب عرض سعر دقيق؟
          </h2>
          <p className="text-2xl text-primary-100 mb-8">
            تواصل معنا الآن واحصل على تقييم مجاني وعرض سعر مفصل
          </p>
          <Link
            href="/contact"
            className="inline-block px-12 py-5 bg-white text-primary-600 rounded-xl hover:bg-gray-100 transition-all font-bold text-2xl shadow-2xl transform hover:scale-105"
          >
            اطلب عرض سعر الآن
          </Link>
        </div>
      </section>
    </div>
  );
}

