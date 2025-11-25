import Link from 'next/link';
import Image from 'next/image';
import { SERVICES } from '@/data/services';
import { getTier1Cities } from '@/data/cities';
import { generateMetadata as genMetadata } from '@/lib/seo';
import { faqPath } from '@/lib/urls';
import { REVALIDATE_DEFAULT } from '@/lib/constants';

export const revalidate = REVALIDATE_DEFAULT;

export const metadata = genMetadata({
  title: 'الأسئلة الشائعة | إجابات على جميع أسئلتك | بروكر',
  description:
    'تصفح الأسئلة الشائعة حول جميع خدماتنا المنزلية. إجابات واضحة وشاملة على أكثر الأسئلة شيوعاً.',
  path: '/faqs',
});

export default function FAQsHubPage() {
  const tier1Cities = getTier1Cities();

  const commonFAQs = [
    {
      q: 'كيف يمكنني حجز خدمة؟',
      a: 'يمكنك الحجز عبر الاتصال المباشر أو إرسال رسالة واتساب. فريقنا سيرد عليك فوراً ويحدد موعداً مناسباً.',
    },
    {
      q: 'هل توفرون ضمان على الخدمات؟',
      a: 'نعم، نقدم ضمان مكتوب على جميع خدماتنا يتراوح من 3 أشهر إلى سنتين حسب نوع الخدمة.',
    },
    {
      q: 'ما هي مدة الانتظار بعد الحجز؟',
      a: 'نصل خلال ساعة إلى 24 ساعة حسب نوع الخدمة والمدينة. للحالات الطارئة نصل في أقل من 30 دقيقة.',
    },
    {
      q: 'هل الأسعار المعروضة نهائية؟',
      a: 'الأسعار المعروضة تقريبية. نقدم معاينة مجانية لتقدير التكلفة الدقيقة بدون أي التزام.',
    },
    {
      q: 'هل الفنيون مدربون ومعتمدون؟',
      a: 'نعم، جميع فنيينا مدربون على أعلى المعايير ومعتمدون ومؤمّنون بالكامل.',
    },
    {
      q: 'ما هي المدن التي تخدمونها؟',
      a: 'نخدم أكثر من 45 مدينة سعودية في جميع أنحاء المملكة. راجع صفحة التغطية للتفاصيل.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Enhanced with Image */}
      <section className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-primary-700 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 md:py-20">
            {/* Left Content */}
            <div className="text-center lg:text-right">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <span className="text-3xl">❓</span>
                <span className="font-bold text-lg">لديك سؤال؟ لدينا الإجابة</span>
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                الأسئلة الشائعة
                <span className="block text-yellow-300 mt-2">
                  إجابات فورية
                </span>
              </h1>

              {/* Description */}
              <p className="text-2xl text-purple-100 mb-8 leading-relaxed">
                تصفح آلاف الأسئلة والأجوبة حول خدماتنا المنزلية
              </p>

              {/* Search Simulation */}
              <div className="max-w-2xl mx-auto lg:mx-0 mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <div className="flex-1 text-right text-white/60">
                    ابحث عن سؤالك هنا...
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
                <a
                  href="#services"
                  className="px-10 py-5 bg-white text-purple-600 rounded-xl hover:bg-gray-100 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
                >
                  تصفح حسب الخدمة
                </a>
                <a
                  href="/contact"
                  className="px-10 py-5 bg-yellow-400 text-gray-900 rounded-xl hover:bg-yellow-300 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
                >
                  اسأل سؤالك
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div>
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/ac/Air-conditioner-repair.jpg"
                  alt="الأسئلة الشائعة"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent" />
                <div className="absolute bottom-6 right-6 left-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl">
                  <div className="text-2xl font-bold text-purple-600 mb-2">لديك سؤال؟</div>
                  <div className="text-gray-900">إجابات فورية على جميع استفساراتك</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common FAQs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
              أسئلة عامة شائعة
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              إجابات واضحة ومفصلة على أكثر الأسئلة شيوعاً حول خدماتنا
            </p>
            <div className="space-y-4">
              {commonFAQs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-primary-500 transition-colors"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer">
                    <h3 className="text-lg font-bold text-gray-900 flex-1 pl-4">
                      {faq.q}
                    </h3>
                    <svg
                      className="w-6 h-6 text-primary-600 flex-shrink-0 group-open:rotate-180 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              أسئلة مفصلة حسب الموضوع
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              استكشف الأسئلة والأجوبة المتعلقة بكل جانب من جوانب خدماتنا
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                الحجز والتواصل
              </h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">→</span>
                  <span>كيف يمكنني حجز خدمة؟</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">→</span>
                  <span>ما هي طرق التواصل المتاحة؟</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">→</span>
                  <span>هل يمكنني إلغاء أو تعديل الحجز؟</span>
                </li>
              </ul>
              <Link href="/contact" className="text-purple-600 font-semibold hover:underline">
                اتصل بنا للمزيد ←
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                الأسعار والدفع
              </h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">→</span>
                  <span>كيف يتم احتساب الأسعار؟</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">→</span>
                  <span>ما هي طرق الدفع المتاحة؟</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">→</span>
                  <span>هل هناك رسوم إضافية؟</span>
                </li>
              </ul>
              <Link href="/pricing" className="text-purple-600 font-semibold hover:underline">
                تصفح الأسعار ←
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                الضمان والأمان
              </h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">→</span>
                  <span>ما هي مدة الضمان المقدمة؟</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">→</span>
                  <span>هل الفنيون مؤمّنون؟</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">→</span>
                  <span>ماذا لو حدث ضرر؟</span>
                </li>
              </ul>
              <Link href="/about" className="text-purple-600 font-semibold hover:underline">
                عن الشركة ←
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">⏰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                المواعيد والتوقيت
              </h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">→</span>
                  <span>كم يستغرق تنفيذ الخدمة؟</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">→</span>
                  <span>هل تقدمون خدمات مسائية؟</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">→</span>
                  <span>ماذا عن عطل نهاية الأسبوع؟</span>
                </li>
              </ul>
              <Link href="/emergency" className="text-purple-600 font-semibold hover:underline">
                خدمة الطوارئ 24/7 ←
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                الجودة والمعايير
              </h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">→</span>
                  <span>ما هي مؤهلات الفنيين؟</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">→</span>
                  <span>ما هي المواد المستخدمة؟</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">→</span>
                  <span>كيف تضمنون الجودة؟</span>
                </li>
              </ul>
              <Link href="/about" className="text-purple-600 font-semibold hover:underline">
                معايير الجودة ←
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                التغطية والمناطق
              </h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">→</span>
                  <span>أي المدن تخدمونها؟</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">→</span>
                  <span>هل تغطون جميع الأحياء؟</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">→</span>
                  <span>خدمات خارج المدينة؟</span>
                </li>
              </ul>
              <Link href="/coverage" className="text-purple-600 font-semibold hover:underline">
                المناطق المغطاة ←
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed FAQ Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                أسئلة تفصيلية حسب الخدمة
              </h2>
              <p className="text-xl text-gray-600">
                كل خدمة لها أسئلتها الخاصة - اختر خدمتك لمعرفة المزيد
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-primary-50 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-6xl">🚚</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">نقل العفش</h3>
                    <p className="text-gray-600">15+ سؤال وجواب</p>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2 text-gray-700">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>كيف يتم حساب تكلفة <Link href="/services/moving" className="text-primary-600 font-semibold hover:underline">نقل العفش</Link>؟</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-700">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>هل تقدمون خدمة <Link href="/services/moving/packing" className="text-primary-600 font-semibold hover:underline">التغليف</Link> والفك؟</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-700">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>ما هي إجراءات الحماية للأثاث؟</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-700">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>كم تستغرق عملية النقل؟</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href="/faq/moving/riyadh" className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold">
                    الأسئلة الكاملة
                  </Link>
                  <Link href="/deals/moving/riyadh" className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold">
                    العروض
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-6xl">✨</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">التنظيف</h3>
                    <p className="text-gray-600">12+ سؤال وجواب</p>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2 text-gray-700">
                    <span className="text-green-600 font-bold">•</span>
                    <span>ما الفرق بين <Link href="/services/cleaning/deep" className="text-primary-600 font-semibold hover:underline">التنظيف العميق</Link> والعادي؟</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-700">
                    <span className="text-green-600 font-bold">•</span>
                    <span>هل المواد المستخدمة آمنة؟</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-700">
                    <span className="text-green-600 font-bold">•</span>
                    <span>كم يستغرق <Link href="/services/cleaning/tanks" className="text-primary-600 font-semibold hover:underline">تنظيف الخزانات</Link>؟</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-700">
                    <span className="text-green-600 font-bold">•</span>
                    <span>هل يشمل التنظيف الشبابيك؟</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href="/faq/cleaning/riyadh" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold">
                    الأسئلة الكاملة
                  </Link>
                  <Link href="/deals/cleaning/riyadh" className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold">
                    العروض
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-6xl">💧</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">كشف التسربات</h3>
                    <p className="text-gray-600">10+ سؤال وجواب</p>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2 text-gray-700">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>كيف يتم <Link href="/services/leaks-plumbing" className="text-primary-600 font-semibold hover:underline">كشف التسربات</Link> إلكترونياً؟</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-700">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>هل يتطلب الأمر تكسير؟</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-700">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>ما هي علامات التسرب المخفي؟</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-700">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>كم تكلفة الفحص الإلكتروني؟</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href="/faq/leaks-plumbing/riyadh" className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold">
                    الأسئلة الكاملة
                  </Link>
                  <Link href="/emergency/leaks-plumbing/riyadh" className="px-4 py-2 bg-red-800 text-white rounded-lg hover:bg-red-900 transition-colors font-semibold">
                    طوارئ 24/7
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-6xl">🐜</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">مكافحة الحشرات</h3>
                    <p className="text-gray-600">13+ سؤال وجواب</p>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2 text-gray-700">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>هل المبيدات آمنة للأطفال؟</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-700">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>كم يستمر مفعول <Link href="/services/pest-control" className="text-primary-600 font-semibold hover:underline">الرش</Link>؟</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-700">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>هل يجب إخلاء المنزل؟</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-700">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>ما هي مدة الضمان؟</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href="/faq/pest-control/riyadh" className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold">
                    الأسئلة الكاملة
                  </Link>
                  <Link href="/pricing/pest-control/riyadh" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                    الأسعار
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs by Service */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              أسئلة حسب الخدمة
            </h2>
            <p className="text-xl text-gray-600">
              اختر الخدمة للاطلاع على الأسئلة المتعلقة بها
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.slug}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-3xl">
                    ❓
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 flex-1">
                    {service.name_ar}
                  </h3>
                </div>

                <p className="text-gray-600 mb-4 text-sm">
                  5-7 أسئلة شائعة لكل مدينة
                </p>

                <div className="space-y-2">
                  {tier1Cities.map((city) => (
                    <Link
                      key={city.slug}
                      href={faqPath(service.slug, city.slug)}
                      className="block w-full px-4 py-3 bg-purple-600 text-white text-center rounded-lg hover:bg-purple-700 transition-colors font-medium"
                    >
                      أسئلة {city.name_ar}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              روابط مفيدة أخرى
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/pricing"
                className="block bg-gradient-to-br from-blue-500 to-primary-600 text-white rounded-xl p-8 text-center hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-2xl font-bold mb-2">الأسعار</h3>
                <p className="text-blue-100">
                  تعرف على أسعار جميع الخدمات
                </p>
              </Link>

              <Link
                href="/deals"
                className="block bg-gradient-to-br from-red-500 to-red-600 text-white rounded-xl p-8 text-center hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">🎁</div>
                <h3 className="text-2xl font-bold mb-2">العروض</h3>
                <p className="text-red-100">
                  احصل على خصومات حتى 30%
                </p>
              </Link>

              <Link
                href="/emergency"
                className="block bg-gradient-to-br from-red-600 to-red-800 text-white rounded-xl p-8 text-center hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">🚨</div>
                <h3 className="text-2xl font-bold mb-2">الطوارئ</h3>
                <p className="text-red-100">
                  خدمة 24/7 - نصلك في 30 دقيقة
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                نصائح مهمة قبل طلب الخدمة
              </h2>
              <p className="text-xl text-gray-600">
                معلومات قيّمة لضمان أفضل تجربة ممكنة
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl flex-shrink-0">📝</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      قبل حجز نقل العفش
                    </h3>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold text-xl">✓</span>
                    <span>جرد كامل للأثاث والممتلكات</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold text-xl">✓</span>
                    <span>حدد القطع الثمينة أو الهشة مسبقاً</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold text-xl">✓</span>
                    <span>احصل على تقدير مجاني من عدة شركات</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold text-xl">✓</span>
                    <span>تأكد من <Link href="/faq/moving/riyadh" className="text-primary-600 font-semibold hover:underline">شروط الضمان</Link> المقدمة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold text-xl">✓</span>
                    <span>احجز مبكراً في مواسم الذروة</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl flex-shrink-0">🧹</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      قبل طلب التنظيف
                    </h3>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold text-xl">✓</span>
                    <span>رتّب الأغراض الشخصية والقيمة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold text-xl">✓</span>
                    <span>حدد المناطق التي تحتاج اهتمام خاص</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold text-xl">✓</span>
                    <span>تأكد من توفر الماء والكهرباء</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold text-xl">✓</span>
                    <span>استفسر عن <Link href="/faq/cleaning/riyadh" className="text-primary-600 font-semibold hover:underline">المواد المستخدمة</Link></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold text-xl">✓</span>
                    <span>اسأل عن وقت التجفيف المتوقع</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl flex-shrink-0">🔧</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      قبل الصيانة
                    </h3>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold text-xl">✓</span>
                    <span>صف المشكلة بدقة للفني</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold text-xl">✓</span>
                    <span>تأكد من إيقاف الماء/الكهرباء إن لزم</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold text-xl">✓</span>
                    <span>وفّر مساحة عمل كافية للفني</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold text-xl">✓</span>
                    <span>احتفظ بفواتير الصيانة السابقة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold text-xl">✓</span>
                    <span>اطلب <Link href="/pricing" className="text-primary-600 font-semibold hover:underline">تقدير التكلفة</Link> قبل البدء</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl flex-shrink-0">🐜</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      قبل مكافحة الحشرات
                    </h3>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold text-xl">✓</span>
                    <span>غطِّ الأطعمة وأدوات المطبخ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold text-xl">✓</span>
                    <span>أبعد الأطفال والحيوانات الأليفة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold text-xl">✓</span>
                    <span>نظّف الأرضيات قبل الرش</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold text-xl">✓</span>
                    <span>استفسر عن <Link href="/faq/pest-control/riyadh" className="text-primary-600 font-semibold hover:underline">نوع المبيدات</Link> المستخدمة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold text-xl">✓</span>
                    <span>اسأل عن مدة الضمان المقدمة</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                كيف يمكننا مساعدتك؟
              </h2>
              <p className="text-xl text-gray-600">
                اختر الموضوع المناسب للحصول على المساعدة الفورية
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                href="/contact"
                className="group bg-gradient-to-br from-purple-500 to-blue-500 text-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                <div className="text-6xl mb-4">📞</div>
                <h3 className="text-2xl font-bold mb-2">اتصل بنا</h3>
                <p className="text-purple-100 mb-4">تحدث مع فريقنا مباشرة</p>
                <div className="inline-block px-4 py-2 bg-white/20 rounded-lg font-semibold">
                  متاح 24/7
                </div>
              </Link>

              <Link
                href="/services"
                className="group bg-gradient-to-br from-blue-500 to-primary-600 text-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                <div className="text-6xl mb-4">🛠️</div>
                <h3 className="text-2xl font-bold mb-2">تصفح الخدمات</h3>
                <p className="text-blue-100 mb-4">اكتشف جميع خدماتنا</p>
                <div className="inline-block px-4 py-2 bg-white/20 rounded-lg font-semibold">
                  14+ خدمة
                </div>
              </Link>

              <Link
                href="/deals"
                className="group bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                <div className="text-6xl mb-4">🎁</div>
                <h3 className="text-2xl font-bold mb-2">احصل على عرض</h3>
                <p className="text-red-100 mb-4">خصومات حتى 30%</p>
                <div className="inline-block px-4 py-2 bg-white/20 rounded-lg font-semibold">
                  وفّر الآن
                </div>
              </Link>

              <Link
                href="/pricing"
                className="group bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                <div className="text-6xl mb-4">💰</div>
                <h3 className="text-2xl font-bold mb-2">الأسعار</h3>
                <p className="text-green-100 mb-4">أسعار واضحة وشفافة</p>
                <div className="inline-block px-4 py-2 bg-white/20 rounded-lg font-semibold">
                  تصفح الآن
                </div>
              </Link>

              <Link
                href="/emergency"
                className="group bg-gradient-to-br from-red-600 to-red-800 text-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all transform hover:-translate-y-1 animate-pulse"
              >
                <div className="text-6xl mb-4">🚨</div>
                <h3 className="text-2xl font-bold mb-2">الطوارئ</h3>
                <p className="text-red-100 mb-4">نصل خلال 30 دقيقة</p>
                <div className="inline-block px-4 py-2 bg-white/20 rounded-lg font-semibold">
                  اتصل فوراً
                </div>
              </Link>

              <Link
                href="/coverage"
                className="group bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                <div className="text-6xl mb-4">🌍</div>
                <h3 className="text-2xl font-bold mb-2">المناطق</h3>
                <p className="text-orange-100 mb-4">اعرف تغطيتنا</p>
                <div className="inline-block px-4 py-2 bg-white/20 rounded-lg font-semibold">
                  45+ مدينة
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-7xl mb-6">💬</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              لم تجد إجابة لسؤالك؟
            </h2>
            <p className="text-2xl text-purple-100 mb-8 leading-relaxed">
              تواصل معنا الآن وسنجيب على جميع استفساراتك فوراً. فريقنا متاح 24/7 لخدمتك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-12 py-5 bg-white text-purple-600 rounded-xl hover:bg-gray-100 transition-all font-bold text-2xl shadow-2xl transform hover:scale-105"
              >
                اتصل بنا الآن
              </Link>
              <Link
                href="/saudi"
                className="inline-block px-12 py-5 bg-yellow-400 text-gray-900 rounded-xl hover:bg-yellow-300 transition-all font-bold text-2xl shadow-2xl transform hover:scale-105"
              >
                اطلب خدمة
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-purple-100">
              <div className="flex items-center gap-2">
                <span className="text-3xl">⚡</span>
                <span className="text-lg">رد فوري</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl">👨‍💼</span>
                <span className="text-lg">فريق محترف</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl">🎯</span>
                <span className="text-lg">حلول فعّالة</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

