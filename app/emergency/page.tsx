import Link from 'next/link';
import Image from 'next/image';
import { SERVICES } from '@/data/services';
import { getTier1Cities } from '@/data/cities';
import { generateMetadata as genMetadata } from '@/lib/seo';
import { emergencyPath, getServiceImage } from '@/lib/urls';
import { PHONE, WHATSAPP, REVALIDATE_DEFAULT } from '@/lib/constants';
import { IMAGE_CACHE_VERSION } from '@/lib/images';

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
                  src={`/images/leaks-plumbing/emergency-plumbing-Jeddah.jpg?v=${IMAGE_CACHE_VERSION}`}
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

      {/* What Makes Us Different in Emergencies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
              ما الذي يميز خدمة الطوارئ لدينا؟
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16">
              نقدم أكثر من مجرد استجابة سريعة - نقدم حلول شاملة وموثوقة
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-red-600 text-white rounded-xl flex items-center justify-center text-3xl">
                    📱
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">تواصل فوري بدون انتظار</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      خط ساخن متاح 24/7 يجيب على مكالمتك في أقل من دقيقة. لا قوائم انتظار، لا تحويلات معقدة - تتحدث مباشرة مع فريق الطوارئ المتخصص الذي يفهم عجلتك.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      نوفر أيضاً <Link href="/contact" className="text-red-600 font-semibold hover:underline">واتساب سريع</Link> للحالات التي تفضل إرسال صور أو فيديو لتقييم الوضع قبل وصول الفريق.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-xl flex items-center justify-center text-3xl">
                    🚗
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">فرق متنقلة جاهزة</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      لدينا فرق طوارئ متنقلة موزعة في جميع أنحاء المدن الرئيسية (<Link href="/saudi/riyadh" className="text-blue-600 font-semibold hover:underline">الرياض</Link>، <Link href="/saudi/jeddah" className="text-blue-600 font-semibold hover:underline">جدة</Link>، <Link href="/saudi/dammam" className="text-blue-600 font-semibold hover:underline">الدمام</Link>). هذا يضمن وصول أسرع - في أقل من 30 دقيقة للحالات الحرجة.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      كل فريق مجهز بكامل المعدات والأدوات اللازمة، لذا لا نحتاج للعودة للمستودع لجلب قطع - كل ما نحتاجه معنا في المركبة.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-green-600 text-white rounded-xl flex items-center justify-center text-3xl">
                    👨‍🔧
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">فنيون متخصصون في الطوارئ</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      ليس كل فني يستطيع التعامل مع الطوارئ. فريقنا مدرب خصيصاً على التشخيص السريع واتخاذ قرارات فورية تحت الضغط. لديهم خبرة واسعة في <Link href="/services/leaks-plumbing" className="text-green-600 font-semibold hover:underline">إصلاح التسربات</Link>، <Link href="/services/electricity" className="text-green-600 font-semibold hover:underline">الأعطال الكهربائية</Link>، و<Link href="/services/ac" className="text-green-600 font-semibold hover:underline">أعطال التكييف</Link> الحرجة.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      كل فني لديه ترخيص معتمد وتأمين ضد الحوادث، لراحة بالك الكاملة.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-purple-600 text-white rounded-xl flex items-center justify-center text-3xl">
                    💡
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">حلول دائمة وليس مؤقتة</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      نحن لا نكتفي بإصلاح مؤقت يعود للعطل بعد أيام. هدفنا حل المشكلة من جذورها. إذا لزم الأمر، نوفر إصلاح مؤقت للطوارئ ثم نعود لإصلاح دائم في وقت لاحق يناسبك.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      نقدم <Link href="/about" className="text-purple-600 font-semibold hover:underline">ضمان مكتوب</Link> على جميع أعمال الطوارئ، لأننا واثقون من جودة عملنا.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Emergency Service Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
              كيف تعمل خدمة الطوارئ؟
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16">
              عملية بسيطة وسريعة لحل مشكلتك في أسرع وقت
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex-shrink-0 w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">اتصل فوراً</h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    اتصل بنا على <a href={`tel:${PHONE}`} className="text-red-600 font-bold hover:underline" dir="ltr">{PHONE}</a> أو عبر <a href={`https://wa.me/${WHATSAPP}?text=طوارئ`} className="text-green-600 font-bold hover:underline">واتساب</a>. أخبرنا بطبيعة الطوارئ وموقعك. كلما كانت المعلومات أدق، كلما استطعنا الوصول أسرع ومستعدين أفضل.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    إذا استطعت، أرسل لنا صورة أو فيديو قصير للمشكلة عبر واتساب - هذا يساعدنا على فهم الوضع وإحضار المعدات المناسبة.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex-shrink-0 w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">تقييم فوري للحالة</h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    بناءً على وصفك، نقيّم مدى خطورة الحالة ونحدد أولوية الاستجابة. للحالات الحرجة جداً (مثل <Link href="/services/leaks-plumbing" className="text-orange-600 font-semibold hover:underline">انفجار ماسورة</Link> أو <Link href="/services/electricity" className="text-orange-600 font-semibold hover:underline">ماس كهربائي</Link>)، نوجه أقرب فريق متاح فوراً - خلال دقائق من مكالمتك.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    للحالات الأقل حرجة قليلاً، نحدد موعد وصول دقيق (عادة خلال ساعة أو ساعتين) ونرسل لك تأكيد عبر رسالة نصية.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">وصول الفريق المجهز</h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    يصل فريقنا في الوقت المحدد (أو أسرع!) مع جميع المعدات اللازمة. نبدأ فوراً بالتشخيص الدقيق للمشكلة. في معظم الحالات، نستطيع تحديد السبب خلال 10-15 دقيقة من الوصول.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    نشرح لك المشكلة بوضوح، والحلول المتاحة، والتكلفة التقريبية. لا نبدأ أي عمل حتى تو افق على الخطة والسعر.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex-shrink-0 w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">إصلاح سريع واحترافي</h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    نبدأ العمل فوراً بعد موافقتك. هدفنا إيقاف الطارئ وإصلاح المشكلة في أسرع وقت ممكن. بفضل خبرتنا ومعداتنا المتطورة، نستطيع حل معظم الطوارئ في الموقع خلال ساعة إلى ساعتين.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    إذا كانت المشكلة تحتاج قطع غيار غير متوفرة، نوفر حل مؤقت لإيقاف الطارئ، ثم نعود لإكمال الإصلاح النهائي خلال 24-48 ساعة بدون تكلفة إضافية للزيارة.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex-shrink-0 w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  5
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">متابعة وضمان</h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    بعد الإصلاح، نختبر العمل للتأكد من أن كل شيء يعمل بشكل مثالي. نقدم لك شهادة ضمان مكتوبة على العمل المنجز. نتواصل معك بعد 24 ساعة للتأكد من عدم وجود مشاكل جديدة.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    إذا ظهرت أي مشكلة خلال فترة الضمان، نعود فوراً ونحلها مجاناً. رقمنا متاح دائماً لأي استفسار أو مشكلة - راجع <Link href="/faqs" className="text-purple-600 font-semibold hover:underline">الأسئلة الشائعة</Link> للمزيد من التفاصيل.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips for Emergencies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
              نصائح هامة للتعامل مع الطوارئ
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16">
              ماذا تفعل في انتظار وصول فريقنا؟
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-red-50 border-r-4 border-red-600 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-4xl">💧</span>
                  عند تسرب المياه
                </h3>
                <ul className="space-y-3 text-gray-700 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">1.</span>
                    <span>أغلق محبس المياه الرئيسي فوراً لإيقاف التسريب</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">2.</span>
                    <span>ابعد الأثاث والأجهزة الكهربائية عن منطقة التسرب</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">3.</span>
                    <span>ضع أوعية لتجميع المياه إن أمكن</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">4.</span>
                    <span>التقط صور وفيديو للمشكلة وأرسلها لنا عبر واتساب</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">5.</span>
                    <span>لا تحاول الإصلاح بنفسك - قد يزيد الوضع سوءاً</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/services/leaks-plumbing" className="text-red-600 font-bold hover:underline">
                    المزيد عن خدمات كشف التسربات →
                  </Link>
                </div>
              </div>

              <div className="bg-yellow-50 border-r-4 border-yellow-600 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-4xl">⚡</span>
                  عند مشكلة كهربائية
                </h3>
                <ul className="space-y-3 text-gray-700 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 font-bold">1.</span>
                    <span>أطفئ القاطع الرئيسي للكهرباء إذا شممت رائحة حرق</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 font-bold">2.</span>
                    <span>لا تلمس أي أسلاك مكشوفة أو تحاول الإصلاح</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 font-bold">3.</span>
                    <span>إذا كان هناك ماء بالقرب من الكهرباء، لا تقترب نهائياً</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 font-bold">4.</span>
                    <span>افصل الأجهزة الكهربائية الهامة من المقابس</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 font-bold">5.</span>
                    <span>انتظر فريقنا في مكان آمن</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/services/electricity" className="text-yellow-600 font-bold hover:underline">
                    المزيد عن خدمات الكهرباء →
                  </Link>
                </div>
              </div>

              <div className="bg-blue-50 border-r-4 border-blue-600 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-4xl">❄️</span>
                  عند عطل التكييف
                </h3>
                <ul className="space-y-3 text-gray-700 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">1.</span>
                    <span>أطفئ المكيف فوراً إذا سمعت صوت غريب أو شممت رائحة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">2.</span>
                    <span>افتح النوافذ لتهوية المكان</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">3.</span>
                    <span>في حر الصيف الشديد، انتقل لغرفة أخرى أو مكان مكيف</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">4.</span>
                    <span>لا تحاول فك أو إصلاح المكيف بنفسك</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">5.</span>
                    <span>تأكد من إمكانية وصول الفني للمكيف بسهولة</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/services/ac" className="text-blue-600 font-bold hover:underline">
                    المزيد عن خدمات التكييف →
                  </Link>
                </div>
              </div>

              <div className="bg-purple-50 border-r-4 border-purple-600 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-4xl">🐛</span>
                  عند غزو حشرات خطيرة
                </h3>
                <ul className="space-y-3 text-gray-700 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold">1.</span>
                    <span>ابتعد فوراً عن المنطقة خاصة للنحل والدبابير</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold">2.</span>
                    <span>أغلق الأبواب والنوافذ لمنع دخول المزيد</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold">3.</span>
                    <span>لا تحاول رش المبيدات بنفسك - قد يزيد العدوانية</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold">4.</span>
                    <span>أبعد الأطفال والحيوانات الأليفة تماماً</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold">5.</span>
                    <span>إذا تعرض أحد للدغة، اطلب عناية طبية فوراً</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/services/pest-control" className="text-purple-600 font-bold hover:underline">
                    المزيد عن خدمات مكافحة الحشرات →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Emergency */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
              أسئلة شائعة عن خدمة الطوارئ
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              إجابات على أكثر الأسئلة شيوعاً
            </p>

            <div className="space-y-4">
              <details className="group bg-white rounded-xl border-2 border-gray-200 hover:border-red-500 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-bold text-gray-900 flex-1 pl-4">
                    كم تستغرق الاستجابة للطوارئ؟
                  </h3>
                  <svg className="w-6 h-6 text-red-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    في المدن الرئيسية (<Link href="/saudi/riyadh" className="text-red-600 font-semibold hover:underline">الرياض</Link>، <Link href="/saudi/jeddah" className="text-red-600 font-semibold hover:underline">جدة</Link>، <Link href="/saudi/dammam" className="text-red-600 font-semibold hover:underline">الدمام</Link>)، نصل خلال 30-60 دقيقة للحالات الحرجة. في المدن الأخرى، قد يستغرق الوصول ساعة إلى ساعتين حسب البعد عن قاعدتنا. نبذل قصارى جهدنا دائماً للوصول في أسرع وقت ممكن.
                  </p>
                </div>
              </details>

              <details className="group bg-white rounded-xl border-2 border-gray-200 hover:border-red-500 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-bold text-gray-900 flex-1 pl-4">
                    هل الأسعار أعلى للطوارئ؟
                  </h3>
                  <svg className="w-6 h-6 text-red-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    خدمة الطوارئ في ساعات العمل العادية بنفس <Link href="/pricing" className="text-red-600 font-semibold hover:underline">الأسعار العادية</Link>. قد تطبق رسوم إضافية بسيطة (15-25%) للخدمة الليلية (بعد 10 مساءً) وأيام العطل والأعياد، لتغطية تكاليف توفر الفريق 24/7. نخبرك بالسعر الكامل قبل البدء بالعمل - لا مفاجآت.
                  </p>
                </div>
              </details>

              <details className="group bg-white rounded-xl border-2 border-gray-200 hover:border-red-500 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-bold text-gray-900 flex-1 pl-4">
                    ماذا لو لم تستطيعوا الإصلاح فوراً؟
                  </h3>
                  <svg className="w-6 h-6 text-red-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    في حالات نادرة جداً، قد تحتاج المشكلة قطع غيار غير متوفرة لدينا فوراً. في هذه الحالة، نوفر <strong>حل مؤقت</strong> لإيقاف الطارئ (مثل إيقاف التسرب أو توفير كهرباء مؤقتة)، ثم نعود خلال 24-48 ساعة لإكمال الإصلاح النهائي بدون تكلفة إضافية للزيارة الثانية. راحتك وسلامتك أولويتنا.
                  </p>
                </div>
              </details>

              <details className="group bg-white rounded-xl border-2 border-gray-200 hover:border-red-500 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-bold text-gray-900 flex-1 pl-4">
                    هل توفرون ضمان على أعمال الطوارئ؟
                  </h3>
                  <svg className="w-6 h-6 text-red-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    نعم! جميع أعمال الطوارئ مغطاة <Link href="/about" className="text-red-600 font-semibold hover:underline">بضمان مكتوب</Link> مثل أي خدمة عادية. مدة الضمان تختلف حسب نوع العمل (عادة 3-12 شهر). إذا حدثت أي مشكلة خلال فترة الضمان، نعود ونحلها مجاناً وفوراً. نحن ملتزمون بجودة عملنا سواء كان طوارئ أو عادي.
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

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-7xl mb-6 animate-bounce">🚨</div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              لديك حالة طوارئ؟
            </h2>
            <p className="text-3xl text-red-100 mb-10">
              اتصل الآن ونحن في الطريق إليك
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-block px-16 py-6 bg-white text-red-600 rounded-xl hover:bg-gray-100 transition-all font-bold text-3xl shadow-2xl transform hover:scale-105 animate-pulse mb-8"
            >
              📞 {PHONE}
            </a>
            <div className="flex flex-wrap items-center justify-center gap-8 text-red-100 text-lg">
              <div className="flex items-center gap-2">
                <span className="text-3xl">✅</span>
                <span>متاحون 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl">⚡</span>
                <span>وصول خلال 30 دقيقة</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl">🏆</span>
                <span>فريق محترف</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

