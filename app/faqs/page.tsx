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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              أسئلة عامة شائعة
            </h2>
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

      {/* Still Have Questions */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">💬</div>
          <h2 className="text-4xl font-bold mb-4">
            لم تجد إجابة لسؤالك؟
          </h2>
          <p className="text-2xl text-purple-100 mb-8">
            تواصل معنا الآن وسنجيب على جميع استفساراتك
          </p>
          <Link
            href="/contact"
            className="inline-block px-12 py-5 bg-white text-purple-600 rounded-xl hover:bg-gray-100 transition-all font-bold text-2xl shadow-2xl transform hover:scale-105"
          >
            اتصل بنا
          </Link>
        </div>
      </section>
    </div>
  );
}

