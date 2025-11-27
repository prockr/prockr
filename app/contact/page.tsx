import { generateMetadata as genMetadata } from '@/lib/seo';
import { PHONE, WHATSAPP, REVALIDATE_DEFAULT } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import { IMAGE_CACHE_VERSION } from '@/lib/images';

export const revalidate = REVALIDATE_DEFAULT;

export const metadata = genMetadata({
  title: 'اتصل بنا | بروكر - خدمات منزلية احترافية',
  description:
    'تواصل معنا الآن للحصول على أفضل الخدمات المنزلية. فريقنا متاح 24/7 للرد على استفساراتك وحجز خدماتك.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-blue-800 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 md:py-20">
            {/* Left Content */}
            <div className="text-center lg:text-right">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <span className="text-3xl">📞</span>
                <span className="font-bold text-lg">نحن هنا لمساعدتك</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                تواصل معنا
                <span className="block text-yellow-300 mt-2">24/7</span>
              </h1>

              <p className="text-2xl text-primary-100 mb-8 leading-relaxed">
                فريقنا جاهز لخدمتك على مدار الساعة. تواصل معنا الآن وسنرد عليك فوراً
              </p>

              {/* Quick CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end mb-8">
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center justify-center gap-3 px-10 py-5 bg-white text-primary-600 rounded-xl hover:bg-gray-100 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  اتصل الآن
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-10 py-5 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  واتساب
                </a>
              </div>

              <div className="text-xl text-primary-100">
                متاحون 24 ساعة - 7 أيام في الأسبوع
              </div>
            </div>

            {/* Right Image */}
            <div>
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={`/images/pest-control/pest-control-Saudi-Arabia.jpg?v=${IMAGE_CACHE_VERSION}`}
                  alt="اتصل بنا"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent" />
                <div className="absolute bottom-6 right-6 left-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl">
                  <div className="text-2xl font-bold text-primary-600 mb-2">تواصل معنا الآن</div>
                  <div className="text-gray-900">نحن جاهزون لخدمتك على مدار الساعة</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Phone */}
            <a
              href={`tel:${PHONE}`}
              className="group bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">اتصل بنا</h3>
                  <p className="text-primary-100 mb-4">
                    متاحون للرد على مكالماتك على مدار الساعة
                  </p>
                  <div className="text-3xl font-bold" dir="ltr">
                    {PHONE}
                  </div>
                </div>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-green-600 to-green-700 text-white rounded-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">واتساب</h3>
                  <p className="text-green-100 mb-4">
                    راسلنا الآن واحصل على رد فوري
                  </p>
                  <div className="text-2xl font-bold">
                    أرسل رسالة →
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Quick Links */}
          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              روابط سريعة للخدمات
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <a
                href="/deals"
                className="block p-4 bg-white rounded-lg text-center hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-2">🎁</div>
                <div className="font-bold text-gray-900">العروض</div>
                <div className="text-sm text-gray-600">خصومات حتى 30%</div>
              </a>

              <a
                href="/pricing"
                className="block p-4 bg-white rounded-lg text-center hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-2">💰</div>
                <div className="font-bold text-gray-900">الأسعار</div>
                <div className="text-sm text-gray-600">أسعار واضحة</div>
              </a>

              <a
                href="/emergency"
                className="block p-4 bg-white rounded-lg text-center hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-2">🚨</div>
                <div className="font-bold text-gray-900">الطوارئ</div>
                <div className="text-sm text-gray-600">خدمة 24/7</div>
              </a>

              <a
                href="/faqs"
                className="block p-4 bg-white rounded-lg text-center hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-2">❓</div>
                <div className="font-bold text-gray-900">أسئلة شائعة</div>
                <div className="text-sm text-gray-600">إجابات فورية</div>
              </a>
            </div>
          </div>

          {/* Contact Form Alternative */}
          <div className="bg-white rounded-xl border-2 border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              معلومات الاتصال
            </h2>

            <div className="space-y-6">
              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">ساعات العمل</h3>
                  <p className="text-gray-600">
                    على مدار 24 ساعة - 7 أيام في الأسبوع
                  </p>
                  <p className="text-sm text-gray-500">
                    نستقبل طلباتك في أي وقت بما في ذلك العطل الرسمية
                  </p>
                </div>
              </div>

              {/* Response Time */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">سرعة الاستجابة</h3>
                  <p className="text-gray-600">
                    نرد على مكالماتك ورسائلك خلال دقائق
                  </p>
                  <p className="text-sm text-gray-500">
                    للحالات الطارئة: استجابة فورية في أقل من 30 دقيقة
                  </p>
                </div>
              </div>

              {/* Coverage */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">التغطية</h3>
                  <p className="text-gray-600">نخدم أكثر من 45 مدينة سعودية</p>
                  <a
                    href="/coverage"
                    className="text-sm text-primary-600 hover:underline"
                  >
                    اطلع على جميع المدن المغطاة ←
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Why Contact Us */}
          <div className="mt-12 bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              لماذا تتصل بنا؟
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💬</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">استشارة مجانية</h3>
                  <p className="text-gray-700 leading-relaxed">
                    احصل على استشارة مجانية حول <Link href="/services/moving" className="text-primary-600 font-semibold hover:underline">نقل العفش</Link>، <Link href="/services/cleaning" className="text-primary-600 font-semibold hover:underline">التنظيف</Link>، أو أي خدمة أخرى
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📋</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">عرض سعر مخصص</h3>
                  <p className="text-gray-700 leading-relaxed">
                    احصل على <Link href="/pricing" className="text-primary-600 font-semibold hover:underline">عرض سعر</Link> دقيق ومخصص حسب احتياجاتك بدون أي التزام
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📅</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">حجز موعد</h3>
                  <p className="text-gray-700 leading-relaxed">
                    احجز موعد مناسب في <Link href="/saudi/riyadh" className="text-primary-600 font-semibold hover:underline">الرياض</Link>، <Link href="/saudi/jeddah" className="text-primary-600 font-semibold hover:underline">جدة</Link> أو أي مدينة أخرى
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🚨</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">حالات الطوارئ</h3>
                  <p className="text-gray-700 leading-relaxed">
                    <Link href="/emergency" className="text-primary-600 font-semibold hover:underline">خدمة طوارئ 24/7</Link> للتسربات، المكيفات، والحالات العاجلة
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">❓</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">أسئلة واستفسارات</h3>
                  <p className="text-gray-700 leading-relaxed">
                    اسأل عن أي شيء متعلق بخدماتنا - فريقنا جاهز للإجابة
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎁</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">العروض الحالية</h3>
                  <p className="text-gray-700 leading-relaxed">
                    اسأل عن <Link href="/deals" className="text-primary-600 font-semibold hover:underline">العروض والخصومات</Link> الحصرية المتاحة
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How to Reach Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                طرق التواصل معنا
              </h2>
              <p className="text-xl text-gray-600">
                اختر الطريقة الأنسب لك للتواصل معنا
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">📞</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">الهاتف</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  اتصل مباشرة للحجز أو الاستشارة
                </p>
                <a href={`tel:${PHONE}`} className="text-primary-600 font-bold hover:underline">
                  {PHONE}
                </a>
              </div>

              <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">💬</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">واتساب</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  راسلنا وسنرد خلال دقائق
                </p>
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="text-green-600 font-bold hover:underline">
                  أرسل رسالة
                </a>
              </div>

              <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🌐</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">الموقع</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  تصفح خدماتنا واحجز أونلاين
                </p>
                <Link href="/services" className="text-blue-600 font-bold hover:underline">
                  تصفح الخدمات
                </Link>
              </div>

              <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">⏰</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">متاح دائماً</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  24 ساعة - 7 أيام في الأسبوع
                </p>
                <span className="text-primary-600 font-bold">
                  بدون توقف
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                ماذا تتوقع عند التواصل معنا؟
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نضمن لك تجربة تواصل احترافية وسريعة
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0 shadow-lg">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">رد فوري</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    نرد على مكالماتك ورسائلك خلال دقائق قليلة. فريق خدمة العملاء متاح 24/7 للرد على استفساراتك حول <Link href="/services/moving" className="text-primary-600 font-semibold hover:underline">نقل العفش</Link>، <Link href="/services/cleaning" className="text-primary-600 font-semibold hover:underline">التنظيف</Link>، <Link href="/services/ac" className="text-primary-600 font-semibold hover:underline">صيانة المكيفات</Link>، أو أي خدمة أخرى. لا داعي للانتظار - سنكون معك مباشرة!
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0 shadow-lg">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">استشارة مجانية</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    نقدم لك استشارة مجانية شاملة لفهم احتياجاتك بدقة. سواء كنت في <Link href="/saudi/riyadh" className="text-primary-600 font-semibold hover:underline">الرياض</Link>، <Link href="/saudi/jeddah" className="text-primary-600 font-semibold hover:underline">جدة</Link>، <Link href="/saudi/makkah" className="text-primary-600 font-semibold hover:underline">مكة</Link> أو أي مدينة أخرى، نساعدك في اختيار الخدمة المناسبة ونجيب على جميع أسئلتك. لا يوجد التزام - فقط نصيحة صادقة واحترافية.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0 shadow-lg">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">عرض سعر دقيق</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    نقدم لك <Link href="/pricing" className="text-primary-600 font-semibold hover:underline">عرض سعر</Link> واضح ومفصل بدون رسوم خفية. يمكنك مقارنته مع الأسعار المعلنة على موقعنا. إذا كنت تبحث عن <Link href="/deals" className="text-primary-600 font-semibold hover:underline">عروض وخصومات</Link>، سنخبرك بجميع العروض المتاحة حالياً لتستفيد بأقصى قدر ممكن.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0 shadow-lg">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">حجز سهل وسريع</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    بمجرد موافقتك، نحجز لك موعد مناسب فوراً. سواء كنت تحتاج خدمة عادية أو <Link href="/emergency" className="text-primary-600 font-semibold hover:underline">حالة طوارئ</Link>، نضمن لك وصول فريقنا في الموعد المحدد. نرسل لك تأكيد الحجز وتفاصيل الفني المسؤول عبر الرسائل. يمكنك التواصل معنا في أي وقت لتعديل أو إلغاء الموعد.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Questions Before Calling */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                أسئلة شائعة قبل الاتصال
              </h2>
              <p className="text-xl text-gray-600">
                إجابات سريعة على الأسئلة الأكثر شيوعاً
              </p>
            </div>

            <div className="space-y-4">
              <details className="group bg-white rounded-xl border-2 border-gray-200 hover:border-primary-500 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-bold text-gray-900 flex-1 pl-4">
                    متى أفضل وقت للاتصال؟
                  </h3>
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    نحن متاحون 24/7! يمكنك الاتصال في أي وقت يناسبك. لكن أفضل الأوقات للحصول على رد أسرع هي من الساعة 8 صباحاً إلى 10 مساءً. للحالات الطارئة مثل <Link href="/emergency/leaks-plumbing/riyadh" className="text-primary-600 font-semibold hover:underline">تسربات المياه</Link> أو <Link href="/emergency/ac/jeddah" className="text-primary-600 font-semibold hover:underline">أعطال المكيفات</Link>، فريق الطوارئ متاح في أي وقت.
                  </p>
                </div>
              </details>

              <details className="group bg-white rounded-xl border-2 border-gray-200 hover:border-primary-500 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-bold text-gray-900 flex-1 pl-4">
                    هل يمكنني الحصول على عرض سعر بدون التزام؟
                  </h3>
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    بالتأكيد! نقدم عروض أسعار مجانية بدون أي التزام. اتصل بنا أو راسلنا عبر واتساب وسنزودك بعرض سعر تفصيلي. يمكنك أيضاً الاطلاع على <Link href="/pricing" className="text-primary-600 font-semibold hover:underline">الأسعار التقريبية</Link> على موقعنا للحصول على فكرة أولية.
                  </p>
                </div>
              </details>

              <details className="group bg-white rounded-xl border-2 border-gray-200 hover:border-primary-500 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-bold text-gray-900 flex-1 pl-4">
                    كم يستغرق الحصول على موعد؟
                  </h3>
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    للخدمات العادية، يمكننا ترتيب موعد خلال 24-48 ساعة. للحالات العاجلة، نصل خلال ساعة واحدة في المدن الرئيسية. خدمات مثل <Link href="/services/moving" className="text-primary-600 font-semibold hover:underline">نقل العفش</Link> قد تحتاج حجز مسبق بأسبوع خاصة في أوقات الذروة.
                  </p>
                </div>
              </details>

              <details className="group bg-white rounded-xl border-2 border-gray-200 hover:border-primary-500 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-bold text-gray-900 flex-1 pl-4">
                    ماذا أحضّر قبل الاتصال؟
                  </h3>
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    فقط حدد نوع الخدمة المطلوبة، المدينة، والموعد المفضل. لـ<Link href="/services/moving" className="text-primary-600 font-semibold hover:underline">نقل العفش</Link>: حجم المنزل والعنوانين. لـ<Link href="/services/cleaning" className="text-primary-600 font-semibold hover:underline">التنظيف</Link>: مساحة المكان ونوع التنظيف المطلوب. لا تقلق - فريقنا سيساعدك في تحديد كل التفاصيل.
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

      {/* Services We Can Help With */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                الخدمات التي يمكننا مساعدتك بها
              </h2>
              <p className="text-xl text-gray-600">
                اتصل بنا لأي من هذه الخدمات وأكثر
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/services/moving" className="group bg-gradient-to-br from-blue-50 to-primary-50 rounded-xl p-6 hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">🚚</span>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600">نقل العفش</h3>
                </div>
                <p className="text-gray-700 text-sm mb-3">حجز وتنسيق نقل الأثاث في جميع مدن المملكة</p>
                <span className="text-primary-600 font-semibold text-sm">اتصل للحجز ←</span>
              </Link>

              <Link href="/services/cleaning" className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">✨</span>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600">التنظيف</h3>
                </div>
                <p className="text-gray-700 text-sm mb-3">حجز خدمات التنظيف الشامل والمتخصص</p>
                <span className="text-green-600 font-semibold text-sm">اتصل للحجز ←</span>
              </Link>

              <Link href="/services/ac" className="group bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">❄️</span>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-cyan-600">صيانة المكيفات</h3>
                </div>
                <p className="text-gray-700 text-sm mb-3">إصلاح وصيانة فورية للمكيفات</p>
                <span className="text-cyan-600 font-semibold text-sm">اتصل الآن ←</span>
              </Link>

              <Link href="/services/leaks-plumbing" className="group bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">💧</span>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600">كشف التسربات</h3>
                </div>
                <p className="text-gray-700 text-sm mb-3">كشف وإصلاح تسربات المياه بدون تكسير</p>
                <span className="text-orange-600 font-semibold text-sm">طوارئ 24/7 ←</span>
              </Link>

              <Link href="/services/pest-control" className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">🐜</span>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600">مكافحة الحشرات</h3>
                </div>
                <p className="text-gray-700 text-sm mb-3">رش ومكافحة شاملة بضمان 6 أشهر</p>
                <span className="text-purple-600 font-semibold text-sm">احجز الآن ←</span>
              </Link>

              <Link href="/services" className="group bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-6 hover:shadow-xl transition-all flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">+9</div>
                  <div className="font-bold text-gray-900">خدمات أخرى</div>
                  <span className="text-sm text-gray-600 mt-2">تصفح الكل ←</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-7xl mb-6">📞</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              نحن في انتظار مكالمتك!
            </h2>
            <p className="text-2xl text-primary-100 mb-10 leading-relaxed">
              فريقنا جاهز الآن للرد على استفساراتك وحجز خدمتك. لا تتردد - اتصل أو راسلنا فوراً!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center justify-center gap-3 px-12 py-6 bg-white text-primary-600 rounded-xl hover:bg-gray-100 transition-all font-bold text-2xl shadow-2xl transform hover:scale-105"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                اتصل الآن
              </a>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-12 py-6 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all font-bold text-2xl shadow-2xl transform hover:scale-105"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                واتساب
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-primary-100">
              <div className="flex items-center gap-2">
                <span className="text-3xl">✅</span>
                <span className="text-lg">رد فوري خلال دقائق</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl">⚡</span>
                <span className="text-lg">متاح 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl">🎁</span>
                <span className="text-lg">استشارة مجانية</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
