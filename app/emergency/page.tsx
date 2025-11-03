import Link from 'next/link';
import Image from 'next/image';
import { SERVICES } from '@/data/services';
import { getTier1Cities } from '@/data/cities';
import { generateMetadata as genMetadata } from '@/lib/seo';
import { emergencyPath, getServiceImage } from '@/lib/urls';
import { PHONE, WHATSAPP, REVALIDATE_DEFAULT } from '@/lib/constants';

export const revalidate = REVALIDATE_DEFAULT;

export const metadata = genMetadata({
  title: 'خدمة طوارئ 24/7 | استجابة فورية في أقل من 30 دقيقة | بروكر',
  description:
    'خدمة طوارئ على مدار 24 ساعة في جميع أنحاء المملكة. نصلك في أقل من 30 دقيقة. اتصل الآن للحالات العاجلة.',
  path: '/emergency',
});

export default function EmergencyHubPage() {
  const tier1Cities = getTier1Cities();
  const emergencyServices = SERVICES.filter((s) =>
    ['moving', 'leaks-plumbing', 'pest-control', 'ac', 'electricity'].includes(s.slug)
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section - Enhanced Emergency with Image */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-900 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 md:py-20">
            {/* Left Content */}
            <div className="text-center lg:text-right order-2 lg:order-1">
              {/* Emergency Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-bounce">
                <span className="text-4xl">🚨</span>
                <span className="font-bold text-xl">خدمة طوارئ متاحة الآن</span>
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                نصلك في أقل من
                <span className="block text-yellow-300 text-7xl md:text-9xl my-4">
                  30 دقيقة
                </span>
              </h1>

              {/* Description */}
              <p className="text-3xl text-red-100 mb-8 font-bold">
                خدمة طوارئ 24/7 - على مدار الساعة
              </p>

              {/* Emergency CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end mb-8">
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center justify-center gap-3 px-10 py-5 bg-white text-red-600 rounded-xl hover:bg-gray-100 transition-all font-bold text-xl shadow-2xl transform hover:scale-105 animate-pulse"
                >
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  اتصل فوراً
                </a>

                <a
                  href={`https://wa.me/${WHATSAPP}?text=طوارئ`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-10 py-5 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
                >
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  واتساب
                </a>
              </div>

              {/* Phone Number */}
              <div className="text-2xl font-bold text-yellow-300 mb-4" dir="ltr">
                📞 {PHONE}
              </div>

              <div className="text-red-100 text-lg">
                متاحون 24 ساعة - 7 أيام في الأسبوع - بما في ذلك العطل
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2">
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/leaks-plumbing/emergency-plumbing-Jeddah.jpg"
                  alt="خدمة طوارئ 24/7"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 to-transparent" />
                <div className="absolute top-6 right-6 bg-red-600 text-white px-6 py-4 rounded-xl font-bold text-3xl shadow-xl animate-pulse flex items-center gap-3">
                  <span>🚨</span>
                  <span>طوارئ</span>
                </div>
                <div className="absolute bottom-6 right-6 left-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl">
                  <div className="text-2xl font-bold text-red-600 mb-2">استجابة فورية</div>
                  <div className="text-gray-900">نصلك في أقل من 30 دقيقة</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Emergency Service */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              لماذا خدمة الطوارئ لدينا؟
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-5xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">استجابة فورية</h3>
                <p className="text-gray-600">
                  نصلك في أقل من 30 دقيقة في المدن الرئيسية
                </p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-5xl">🕐</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 متاحون</h3>
                <p className="text-gray-600">
                  على مدار الساعة - ليلاً ونهاراً وأيام العطل
                </p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-5xl">👨‍🔧</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">فريق متخصص</h3>
                <p className="text-gray-600">
                  فنيون مدربون جاهزون للحالات الطارئة
                </p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-5xl">🚚</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">معدات كاملة</h3>
                <p className="text-gray-600">
                  نحمل جميع المعدات والقطع اللازمة
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              خدمات الطوارئ المتاحة
            </h2>
            <p className="text-xl text-gray-600">
              اختر الخدمة للحصول على مساعدة فورية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emergencyServices.map((service) => (
              <div
                key={service.slug}
                className="group bg-white rounded-xl border-2 border-red-200 hover:border-red-500 overflow-hidden transition-all hover:shadow-2xl"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <Image
                    src={getServiceImage(service.slug)}
                    alt={service.name_ar}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Emergency Badge */}
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2">
                    <span>🚨</span>
                    <span>طوارئ</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                    {service.name_ar}
                  </h3>

                  <div className="space-y-2">
                    {tier1Cities.map((city) => (
                      <Link
                        key={city.slug}
                        href={emergencyPath(service.slug, city.slug)}
                        className="block w-full px-4 py-3 bg-red-600 text-white text-center rounded-lg hover:bg-red-700 transition-colors font-medium"
                      >
                        طوارئ {city.name_ar}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Call */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              متى تحتاج خدمة الطوارئ؟
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-yellow-50 border-r-4 border-yellow-500 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>💧</span> تسربات مياه
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>تسريب مياه شديد يهدد المبنى</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>انفجار ماسورة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>فيضان في الحمام أو المطبخ</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-r-4 border-yellow-500 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>⚡</span> أعطال كهربائية
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>انقطاع كهرباء كامل</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>شرارة أو دخان من اللوحة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>ماس كهربائي خطير</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-r-4 border-yellow-500 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>❄️</span> أعطال تكييف
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>عطل مكيف في حر الصيف الشديد</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>توقف تبريد نهائي</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>تسريب فريون خطير</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-r-4 border-yellow-500 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>🐛</span> حشرات خطيرة
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>غزو نحل أو دبابير</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>انتشار حشرات مفاجئ وخطير</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>لدغات حشرات سامة</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-red-50 border-r-4 border-red-600 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="text-4xl">⚠️</span>
              ملاحظة هامة
            </h3>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-red-600 text-xl">•</span>
                <span>خدمة الطوارئ متاحة على مدار 24 ساعة في جميع المدن الرئيسية</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 text-xl">•</span>
                <span>قد تطبق رسوم إضافية للخدمة الليلية (بعد 10 مساءً) وأيام العطل</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 text-xl">•</span>
                <span>للحالات الطارئة جداً، اتصل مباشرة بدلاً من إرسال رسالة</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-red-600 to-red-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">🚨</div>
          <h2 className="text-5xl font-bold mb-4">
            لديك حالة طوارئ؟
          </h2>
          <p className="text-3xl text-red-100 mb-8">
            اتصل الآن ونحن في الطريق إليك
          </p>
          <a
            href={`tel:${PHONE}`}
            className="inline-block px-16 py-6 bg-white text-red-600 rounded-xl hover:bg-gray-100 transition-all font-bold text-3xl shadow-2xl transform hover:scale-105 animate-pulse"
          >
            📞 {PHONE}
          </a>
        </div>
      </section>
    </div>
  );
}

