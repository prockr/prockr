import Link from 'next/link';
import Image from 'next/image';
import { SERVICES } from '@/data/services';
import { getTier1Cities } from '@/data/cities';
import { generateMetadata as genMetadata } from '@/lib/seo';
import { pricingPath, getServiceImage } from '@/lib/urls';
import { REVALIDATE_DEFAULT } from '@/lib/constants';
import { IMAGE_CACHE_VERSION } from '@/lib/images';

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
                  src={`/images/moving/villa-moving-service.jpg?v=${IMAGE_CACHE_VERSION}`}
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

      {/* Pricing Factors */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                ما الذي يحدد سعر الخدمة؟
              </h2>
              <p className="text-xl text-gray-600">
                فهم تفصيلي لكيفية تسعير خدماتنا
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8">
                <div className="text-5xl mb-4">📏</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">حجم العمل</h3>
                <p className="text-gray-700 leading-relaxed">
                  يعتمد السعر على حجم العمل المطلوب. مثلاً، في <Link href="/services/moving" className="text-primary-600 font-semibold hover:underline">نقل العفش</Link>، شقة 2 غرفة تختلف عن فيلا كاملة. نقدم تقييم مجاني لتحديد الحجم بدقة.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
                <div className="text-5xl mb-4">🏙️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">المدينة والمنطقة</h3>
                <p className="text-gray-700 leading-relaxed">
                  الأسعار تختلف قليلاً بين <Link href="/saudi/riyadh" className="text-primary-600 font-semibold hover:underline">الرياض</Link>، <Link href="/saudi/jeddah" className="text-primary-600 font-semibold hover:underline">جدة</Link>، والمدن الأخرى بناءً على تكاليف التشغيل المحلية. نحرص على تقديم أفضل قيمة في كل مكان.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8">
                <div className="text-5xl mb-4">⏰</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">التوقيت والاستعجال</h3>
                <p className="text-gray-700 leading-relaxed">
                  الحجز المسبق عادة أقل تكلفة. <Link href="/emergency" className="text-primary-600 font-semibold hover:underline">خدمات الطوارئ</Link> قد تحمل رسوم إضافية للاستجابة الفورية على مدار 24/7.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
                <div className="text-5xl mb-4">🔧</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">نوع الخدمة</h3>
                <p className="text-gray-700 leading-relaxed">
                  كل خدمة لها تسعير مختلف. <Link href="/services/cleaning" className="text-primary-600 font-semibold hover:underline">التنظيف العادي</Link> يختلف عن <Link href="/services/cleaning/deep" className="text-primary-600 font-semibold hover:underline">التنظيف العميق</Link>. تصفح تفاصيل كل خدمة للأسعار المحددة.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8">
                <div className="text-5xl mb-4">🎁</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">العروض والخصومات</h3>
                <p className="text-gray-700 leading-relaxed">
                  نوفر <Link href="/deals" className="text-primary-600 font-semibold hover:underline">عروض موسمية</Link> بخصومات تصل إلى 30%. العملاء الدائمون يحصلون على خصومات إضافية. تابع عروضنا بانتظام!
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8">
                <div className="text-5xl mb-4">📦</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">الخدمات الإضافية</h3>
                <p className="text-gray-700 leading-relaxed">
                  يمكنك إضافة خدمات إضافية كالتغليف، التخزين، أو خدمات أخرى. كل خدمة إضافية لها سعر منفصل واضح ومعلن.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                لماذا أسعارنا تنافسية؟
              </h2>
              <p className="text-xl text-gray-600">
                مقارنة واضحة توضح القيمة التي تحصل عليها
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center text-3xl">
                    ❌
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">الطريقة التقليدية</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold text-xl">•</span>
                        <span>رسوم خفية تظهر في الفاتورة النهائية</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold text-xl">•</span>
                        <span>عدم وضوح السعر من البداية</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold text-xl">•</span>
                        <span>رسوم إضافية للمعاينة والتقييم</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold text-xl">•</span>
                        <span>عدم وجود ضمان مكتوب واضح</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold text-xl">•</span>
                        <span>صعوبة المقارنة بين العروض</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 shadow-xl border-4 border-primary-400">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center text-3xl">
                    ✅
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary-700 mb-4">طريقة بروكر</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-primary-600 font-bold text-xl">✓</span>
                        <span className="font-semibold">أسعار واضحة بدون مفاجآت نهائياً</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-600 font-bold text-xl">✓</span>
                        <span className="font-semibold">سعر محدد قبل البدء والتزام به</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-600 font-bold text-xl">✓</span>
                        <span className="font-semibold">معاينة وتقييم مجاني تماماً</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-600 font-bold text-xl">✓</span>
                        <span className="font-semibold">ضمان مكتوب على جميع الخدمات</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-600 font-bold text-xl">✓</span>
                        <span className="font-semibold">عروض وخصومات منتظمة تصل 30%</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Best Price */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                كيف تحصل على أفضل سعر؟
              </h2>
              <p className="text-xl text-gray-600">
                نصائح لتوفير المال والحصول على قيمة أكبر
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-6 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8">
                <div className="flex-shrink-0 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">احجز مبكراً</h3>
                  <p className="text-gray-700 leading-relaxed">
                    الحجز المسبق بأسبوع أو أكثر عادة يوفر 10-15% من التكلفة. تصفح <Link href="/services" className="text-primary-600 font-semibold hover:underline">خدماتنا</Link> الآن واحجز موعدك المناسب. <Link href="/contact" className="text-primary-600 font-semibold hover:underline">اتصل بنا</Link> للحجز المسبق.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
                <div className="flex-shrink-0 w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">تابع العروض</h3>
                  <p className="text-gray-700 leading-relaxed">
                    نوفر <Link href="/deals" className="text-primary-600 font-semibold hover:underline">عروض موسمية</Link> بخصومات تصل إلى 30% على خدمات مثل <Link href="/deals/moving/riyadh" className="text-primary-600 font-semibold hover:underline">نقل العفش</Link> و<Link href="/deals/cleaning/jeddah" className="text-primary-600 font-semibold hover:underline">التنظيف</Link>. تابع صفحة العروض بانتظام!
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8">
                <div className="flex-shrink-0 w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">اجمع الخدمات</h3>
                  <p className="text-gray-700 leading-relaxed">
                    طلب خدمات متعددة معاً يوفر المال. مثلاً، <Link href="/services/moving" className="text-primary-600 font-semibold hover:underline">نقل العفش</Link> + <Link href="/services/cleaning" className="text-primary-600 font-semibold hover:underline">التنظيف</Link> معاً أرخص من طلبهما منفصلين. اسأل عن عروض الباقات المدمجة.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
                <div className="flex-shrink-0 w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">كن عميل دائم</h3>
                  <p className="text-gray-700 leading-relaxed">
                    العملاء الدائمون يحصلون على خصومات حصرية وأولوية في الحجز. كلما استخدمت خدماتنا أكثر، كلما حصلت على عروض أفضل. اشترك في قائمتنا البريدية للعروض الحصرية.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8">
                <div className="flex-shrink-0 w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  5
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">اطلب عرض سعر مفصل</h3>
                  <p className="text-gray-700 leading-relaxed">
                    <Link href="/contact" className="text-primary-600 font-semibold hover:underline">اطلب عرض سعر مجاني</Link> ومفصل قبل الموافقة. نوفر تقييم دقيق بدون أي التزام. يمكنك المقارنة والاختيار بحرية. راجع <Link href="/faqs" className="text-primary-600 font-semibold hover:underline">الأسئلة الشائعة</Link> لمزيد من النصائح.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                أسئلة شائعة عن الأسعار
              </h2>
              <p className="text-xl text-gray-600">
                إجابات على الأسئلة الأكثر شيوعاً
              </p>
            </div>

            <div className="space-y-4">
              <details className="group bg-white rounded-xl border-2 border-gray-200 hover:border-primary-500 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-bold text-gray-900 flex-1 pl-4">
                    هل الأسعار المعروضة نهائية؟
                  </h3>
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    الأسعار المعروضة تقريبية وتعتمد على حجم العمل الفعلي. نوفر <Link href="/contact" className="text-primary-600 font-semibold hover:underline">تقييم مجاني</Link> لتحديد السعر الدقيق. بمجرد الاتفاق على السعر، نلتزم به تماماً - لا توجد رسوم خفية نهائياً. السعر المتفق عليه هو السعر النهائي.
                  </p>
                </div>
              </details>

              <details className="group bg-white rounded-xl border-2 border-gray-200 hover:border-primary-500 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-bold text-gray-900 flex-1 pl-4">
                    هل التقييم المجاني ملزم؟
                  </h3>
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    لا إطلاقاً! التقييم مجاني تماماً وبدون أي التزام من جانبك. يمكنك طلب عرض السعر والمقارنة بحرية قبل اتخاذ القرار. نحترم وقتك وخيارك. <Link href="/contact" className="text-primary-600 font-semibold hover:underline">اطلب عرض سعر</Link> الآن بدون أي التزام.
                  </p>
                </div>
              </details>

              <details className="group bg-white rounded-xl border-2 border-gray-200 hover:border-primary-500 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-bold text-gray-900 flex-1 pl-4">
                    ما هي طرق الدفع المتاحة؟
                  </h3>
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    نقبل جميع طرق الدفع: النقد، التحويل البنكي، بطاقات الائتمان، والدفع الإلكتروني. نوفر أيضاً إمكانية التقسيط لبعض الخدمات الكبيرة مثل <Link href="/services/moving" className="text-primary-600 font-semibold hover:underline">نقل العفش</Link> للفلل. <Link href="/faqs" className="text-primary-600 font-semibold hover:underline">اطلع على التفاصيل</Link> أو <Link href="/contact" className="text-primary-600 font-semibold hover:underline">اتصل بنا</Link> للاستفسار.
                  </p>
                </div>
              </details>

              <details className="group bg-white rounded-xl border-2 border-gray-200 hover:border-primary-500 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-bold text-gray-900 flex-1 pl-4">
                    هل توجد عروض حالية؟
                  </h3>
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    نعم! نوفر <Link href="/deals" className="text-primary-600 font-semibold hover:underline">عروض موسمية</Link> بخصومات تصل إلى 30% على معظم الخدمات. تتغير العروض شهرياً، لذا تابع <Link href="/deals" className="text-primary-600 font-semibold hover:underline">صفحة العروض</Link> بانتظام أو <Link href="/contact" className="text-primary-600 font-semibold hover:underline">اشترك في قائمتنا البريدية</Link> لتصلك العروض الحصرية أولاً بأول.
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-7xl mb-6">💰</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              جاهز لطلب عرض سعر دقيق؟
            </h2>
            <p className="text-2xl text-primary-100 mb-10 leading-relaxed">
              تواصل معنا الآن واحصل على تقييم مجاني وعرض سعر مفصل بدون أي التزام. فريقنا جاهز لخدمتك!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/contact"
                className="px-12 py-5 bg-white text-primary-600 rounded-xl hover:bg-gray-100 transition-all font-bold text-2xl shadow-2xl transform hover:scale-105"
              >
                اطلب عرض سعر الآن
              </Link>
              <Link
                href="/deals"
                className="px-12 py-5 bg-yellow-400 text-gray-900 rounded-xl hover:bg-yellow-300 transition-all font-bold text-2xl shadow-2xl transform hover:scale-105 flex items-center gap-2 justify-center"
              >
                <span>🎁</span>
                <span>تصفح العروض</span>
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 text-primary-100">
              <div className="flex items-center gap-2">
                <span className="text-3xl">✅</span>
                <span className="text-lg">تقييم مجاني</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl">⚡</span>
                <span className="text-lg">لا التزام</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl">🏆</span>
                <span className="text-lg">شفافية كاملة</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

