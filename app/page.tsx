import Link from 'next/link';
import { SERVICES } from '@/data/services';
import { getTier1Cities } from '@/data/cities';
import { ServiceCard } from '@/components/ServiceCard';
import { TrustBadges } from '@/components/TrustBadges';
import { HeroSlider } from '@/components/HeroSlider';
import { cityPath } from '@/lib/urls';
import { REVALIDATE_HOMEPAGE } from '@/lib/constants';
import { generateMetadata as genMetadata } from '@/lib/seo';

export const revalidate = REVALIDATE_HOMEPAGE;

export const metadata = genMetadata({
  title: 'بروكر - منصة الخدمات المنزلية الأولى في السعودية',
  description: 'احصل على أفضل الخدمات المنزلية في السعودية. نقل عفش، تنظيف، سباكة، مكافحة حشرات، تكييف وأكثر. فريق معتمد متاح 24/7 في +45 مدينة.',
  path: '/',
});

export default function HomePage() {
  const tier1Cities = getTier1Cities();
  const topServices = SERVICES.slice(0, 8);

  return (
    <>
      {/* Hero Section - Image Slider */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary-50 via-blue-50 to-white">
        <div className="container mx-auto px-4">
          {/* Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary-100 rounded-full">
              <span className="text-2xl">🏆</span>
              <span className="font-bold text-primary-900">المنصة الأولى للخدمات المنزلية في المملكة</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 leading-tight text-gray-900">
            خدمات منزلية احترافية
            <span className="block text-primary-600 mt-2">في جميع أنحاء المملكة</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-center text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
            نربطك بأفضل مقدمي الخدمات المعتمدين • ضمان مكتوب • أسعار واضحة • استجابة فورية
          </p>

          {/* Hero Slider */}
          <div className="max-w-7xl mx-auto mb-12">
            <HeroSlider />
          </div>

          {/* Quick Access Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            <Link
              href="/deals"
              className="group bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl p-6 text-center transition-all hover:scale-105 shadow-lg"
            >
              <div className="text-4xl mb-2">🎁</div>
              <div className="font-bold mb-1">العروض</div>
              <div className="text-xs">خصم 30%</div>
            </Link>

            <Link
              href="/pricing"
              className="group bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl p-6 text-center transition-all hover:scale-105 shadow-lg"
            >
              <div className="text-4xl mb-2">💰</div>
              <div className="font-bold mb-1">الأسعار</div>
              <div className="text-xs">شفافة</div>
            </Link>

            <Link
              href="/emergency"
              className="group bg-gradient-to-br from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white rounded-xl p-6 text-center transition-all hover:scale-105 animate-pulse shadow-lg"
            >
              <div className="text-4xl mb-2">🚨</div>
              <div className="font-bold mb-1">طوارئ</div>
              <div className="text-xs">24/7</div>
            </Link>

            <Link
              href="/faqs"
              className="group bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-xl p-6 text-center transition-all hover:scale-105 shadow-lg"
            >
              <div className="text-4xl mb-2">❓</div>
              <div className="font-bold mb-1">أسئلة</div>
              <div className="text-xs">إجابات</div>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 text-center max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-5xl font-bold text-primary-600 mb-2">45+</div>
              <div className="text-sm text-gray-600 font-medium">مدينة مغطاة</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-5xl font-bold text-primary-600 mb-2">14</div>
              <div className="text-sm text-gray-600 font-medium">خدمة رئيسية</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-5xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600 font-medium">خدمة طوارئ</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <TrustBadges />
        </div>
      </section>

      {/* Top Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              خدماتنا الأكثر طلباً
            </h2>
            <p className="text-lg text-gray-600">
              اختر الخدمة المناسبة من بين مجموعة واسعة من الخدمات المنزلية
              الاحترافية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topServices.map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
                citySlug="riyadh"
                href={`/services#${service.slug}`}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              عرض جميع الخدمات
            </Link>
          </div>
        </div>
      </section>

      {/* Cities Coverage */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              نخدم جميع المدن الرئيسية
            </h2>
            <p className="text-lg text-gray-600">
              تغطية شاملة في أكثر من 45 مدينة سعودية
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {tier1Cities.map((city) => (
              <Link
                key={city.slug}
                href={cityPath(city.slug)}
                className="p-6 bg-gray-50 rounded-lg text-center hover:bg-primary-50 hover:shadow-md transition-all group"
              >
                <div className="text-4xl mb-3">🏙️</div>
                <h3 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {city.name_ar}
                </h3>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/saudi"
              className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              عرض جميع المدن
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">كيف يعمل بروكر</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              عملية بسيطة وسريعة للحصول على أفضل الخدمات المنزلية في المملكة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-primary-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                اختر الخدمة والمدينة
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                حدد الخدمة المطلوبة من بين 14 خدمة رئيسية والمدينة التي تحتاج الخدمة فيها من بين 45+ مدينة مغطاة
              </p>
              <Link href="/services" className="text-primary-600 font-semibold hover:underline">
                تصفح الخدمات ←
              </Link>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-primary-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">تواصل مباشرة</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                اتصل أو أرسل رسالة واتساب لمقدم الخدمة المعتمد. فريقنا متاح 24/7 للرد على استفساراتك فوراً
              </p>
              <Link href="/contact" className="text-primary-600 font-semibold hover:underline">
                اتصل بنا ←
              </Link>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-primary-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                احصل على الخدمة
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                استمتع بخدمة احترافية من فنيين معتمدين مع ضمان مكتوب يصل إلى سنتين وأسعار شفافة واضحة
              </p>
              <Link href="/about" className="text-primary-600 font-semibold hover:underline">
                اعرف المزيد ←
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              لماذا نحن الخيار الأول في المملكة؟
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              نفخر بتقديم أفضل الخدمات المنزلية في السعودية بمعايير عالمية وأسعار تنافسية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-primary-50 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">خبرة واسعة</h3>
              <p className="text-gray-700 leading-relaxed">
                أكثر من 10 سنوات من الخبرة في تقديم <Link href="/services/moving" className="text-primary-600 font-semibold hover:underline">خدمات نقل العفش</Link> و<Link href="/services/cleaning" className="text-primary-600 font-semibold hover:underline">التنظيف</Link> والصيانة المنزلية في جميع أنحاء المملكة
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">ضمان شامل</h3>
              <p className="text-gray-700 leading-relaxed">
                نقدم ضمان مكتوب على جميع خدماتنا يتراوح من 3 أشهر إلى سنتين، مع <Link href="/deals" className="text-primary-600 font-semibold hover:underline">عروض وخصومات</Link> تصل إلى 30% على الخدمات
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">استجابة فورية</h3>
              <p className="text-gray-700 leading-relaxed">
                نصل خلال ساعة واحدة للحالات الطارئة. <Link href="/emergency" className="text-primary-600 font-semibold hover:underline">خدمة طوارئ 24/7</Link> متاحة في <Link href="/saudi/riyadh" className="text-primary-600 font-semibold hover:underline">الرياض</Link> و<Link href="/saudi/jeddah" className="text-primary-600 font-semibold hover:underline">جدة</Link> وكافة المدن
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">أسعار شفافة</h3>
              <p className="text-gray-700 leading-relaxed">
                لا توجد رسوم خفية. <Link href="/pricing" className="text-primary-600 font-semibold hover:underline">أسعار واضحة ومعلنة</Link> مسبقاً مع إمكانية الحصول على تقدير مجاني قبل بدء العمل
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Deep Dive */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              خدمات منزلية شاملة لكل احتياجاتك
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              من نقل العفش إلى الصيانة والتنظيف، نقدم مجموعة كاملة من الخدمات المنزلية الاحترافية
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-6">
                <div className="text-6xl flex-shrink-0">🚚</div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    خدمات نقل العفش الاحترافية
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    نقدم <Link href="/services/moving" className="text-primary-600 font-semibold hover:underline">خدمات نقل العفش</Link> في <Link href="/saudi/riyadh/moving" className="text-primary-600 font-semibold hover:underline">الرياض</Link>، <Link href="/saudi/jeddah/moving" className="text-primary-600 font-semibold hover:underline">جدة</Link>، <Link href="/saudi/makkah/moving" className="text-primary-600 font-semibold hover:underline">مكة</Link>، <Link href="/saudi/dammam/moving" className="text-primary-600 font-semibold hover:underline">الدمام</Link> وجميع مدن المملكة. فريقنا المحترف يضمن نقل أثاثك بأمان تام مع <Link href="/services/moving/packing" className="text-primary-600 font-semibold hover:underline">التغليف الكامل</Link> و<Link href="/services/moving/disassembly" className="text-primary-600 font-semibold hover:underline">الفك والتركيب</Link> وخدمات <Link href="/services/moving/storage" className="text-primary-600 font-semibold hover:underline">التخزين</Link>.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/pricing/moving/riyadh" className="px-4 py-2 bg-primary-100 text-primary-800 rounded-lg hover:bg-primary-200 transition-colors font-medium">
                      أسعار نقل العفش
                    </Link>
                    <Link href="/deals/moving/riyadh" className="px-4 py-2 bg-red-100 text-red-800 rounded-lg hover:bg-red-200 transition-colors font-medium">
                      عروض نقل العفش
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-6">
                <div className="text-6xl flex-shrink-0">✨</div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    خدمات التنظيف الشاملة
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    نوفر <Link href="/services/cleaning" className="text-primary-600 font-semibold hover:underline">خدمات التنظيف</Link> بجميع أنواعها: <Link href="/services/cleaning/deep" className="text-primary-600 font-semibold hover:underline">التنظيف العميق</Link>، <Link href="/services/cleaning/steam" className="text-primary-600 font-semibold hover:underline">التنظيف بالبخار</Link>، <Link href="/services/cleaning/tanks" className="text-primary-600 font-semibold hover:underline">تنظيف الخزانات</Link>، <Link href="/services/cleaning/carpets" className="text-primary-600 font-semibold hover:underline">تنظيف السجاد والمفروشات</Link>. فريق متخصص مع مواد آمنة ومعدات حديثة في <Link href="/saudi/riyadh/cleaning" className="text-primary-600 font-semibold hover:underline">الرياض</Link> وجميع المدن.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/pricing/cleaning/riyadh" className="px-4 py-2 bg-primary-100 text-primary-800 rounded-lg hover:bg-primary-200 transition-colors font-medium">
                      أسعار التنظيف
                    </Link>
                    <Link href="/deals/cleaning/jeddah" className="px-4 py-2 bg-red-100 text-red-800 rounded-lg hover:bg-red-200 transition-colors font-medium">
                      عروض التنظيف
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-6">
                <div className="text-6xl flex-shrink-0">🔧</div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    خدمات الصيانة والإصلاح
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    نقدم <Link href="/services/ac" className="text-primary-600 font-semibold hover:underline">صيانة المكيفات</Link>، <Link href="/services/leaks-plumbing" className="text-primary-600 font-semibold hover:underline">كشف تسربات المياه</Link>، <Link href="/services/plumbing" className="text-primary-600 font-semibold hover:underline">السباكة</Link>، <Link href="/services/electrical" className="text-primary-600 font-semibold hover:underline">الكهرباء</Link>، <Link href="/services/appliance-repair" className="text-primary-600 font-semibold hover:underline">إصلاح الأجهزة</Link>. فنيون معتمدون متاحون <Link href="/emergency/leaks-plumbing/riyadh" className="text-primary-600 font-semibold hover:underline">24/7 للطوارئ</Link> في جميع أنحاء المملكة.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/services/ac" className="px-4 py-2 bg-primary-100 text-primary-800 rounded-lg hover:bg-primary-200 transition-colors font-medium">
                      صيانة المكيفات
                    </Link>
                    <Link href="/services/leaks-plumbing" className="px-4 py-2 bg-primary-100 text-primary-800 rounded-lg hover:bg-primary-200 transition-colors font-medium">
                      كشف التسربات
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-6">
                <div className="text-6xl flex-shrink-0">🐜</div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    مكافحة الحشرات بأحدث التقنيات
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    <Link href="/services/pest-control" className="text-primary-600 font-semibold hover:underline">خدمات مكافحة الحشرات</Link> الشاملة في <Link href="/saudi/riyadh/pest-control" className="text-primary-600 font-semibold hover:underline">الرياض</Link> و<Link href="/saudi/jeddah/pest-control" className="text-primary-600 font-semibold hover:underline">جدة</Link>. نستخدم مواد آمنة ومعتمدة من وزارة الصحة مع ضمان يصل إلى 6 أشهر. متخصصون في مكافحة النمل الأبيض، الصراصير، الفئران، والبق.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/pricing/pest-control/riyadh" className="px-4 py-2 bg-primary-100 text-primary-800 rounded-lg hover:bg-primary-200 transition-colors font-medium">
                      أسعار المكافحة
                    </Link>
                    <Link href="/faq/pest-control/riyadh" className="px-4 py-2 bg-purple-100 text-purple-800 rounded-lg hover:bg-purple-200 transition-colors font-medium">
                      أسئلة شائعة
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              تغطية شاملة في جميع أنحاء المملكة
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              نخدم أكثر من 45 مدينة سعودية بنفس المعايير العالية والاحترافية
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">🏙️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">المدن الكبرى</h3>
                <div className="space-y-3 text-right">
                  <Link href="/saudi/riyadh" className="block text-lg text-primary-600 hover:text-primary-700 font-semibold">
                    → الرياض (العاصمة)
                  </Link>
                  <Link href="/saudi/jeddah" className="block text-lg text-primary-600 hover:text-primary-700 font-semibold">
                    → جدة (عروس البحر الأحمر)
                  </Link>
                  <Link href="/saudi/makkah" className="block text-lg text-primary-600 hover:text-primary-700 font-semibold">
                    → مكة المكرمة
                  </Link>
                  <Link href="/saudi/madinah" className="block text-lg text-primary-600 hover:text-primary-700 font-semibold">
                    → المدينة المنورة
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">المنطقة الشرقية</h3>
                <div className="space-y-3 text-right">
                  <Link href="/saudi/dammam" className="block text-lg text-primary-600 hover:text-primary-700 font-semibold">
                    → الدمام
                  </Link>
                  <Link href="/saudi/khobar" className="block text-lg text-primary-600 hover:text-primary-700 font-semibold">
                    → الخبر
                  </Link>
                  <Link href="/saudi/dhahran" className="block text-lg text-primary-600 hover:text-primary-700 font-semibold">
                    → الظهران
                  </Link>
                  <Link href="/saudi/qatif" className="block text-lg text-primary-600 hover:text-primary-700 font-semibold">
                    → القطيف
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">🌆</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">مدن أخرى</h3>
                <div className="space-y-3 text-right">
                  <Link href="/saudi/taif" className="block text-lg text-primary-600 hover:text-primary-700 font-semibold">
                    → الطائف
                  </Link>
                  <Link href="/saudi/abha" className="block text-lg text-primary-600 hover:text-primary-700 font-semibold">
                    → أبها
                  </Link>
                  <Link href="/saudi/tabuk" className="block text-lg text-primary-600 hover:text-primary-700 font-semibold">
                    → تبوك
                  </Link>
                  <Link href="/saudi/buraidah" className="block text-lg text-primary-600 hover:text-primary-700 font-semibold">
                    → بريدة
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/coverage"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors font-bold text-lg shadow-lg"
              >
                <span>عرض جميع المدن المغطاة (45+)</span>
                <span>←</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials / Trust Factors */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              عملاؤنا يثقون بنا
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              آلاف العملاء الراضين في جميع أنحاء المملكة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-3xl">
                  👨‍💼
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">أحمد العتيبي</div>
                  <div className="text-sm text-gray-600">الرياض</div>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">
                &ldquo;استخدمت <Link href="/services/moving" className="text-primary-600 font-semibold hover:underline">خدمة نقل العفش</Link> من بروكر وكانت التجربة ممتازة. الفريق محترف جداً والأسعار معقولة. أنصح بشدة!&rdquo;
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-3xl">
                  👩‍💼
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">فاطمة الغامدي</div>
                  <div className="text-sm text-gray-600">جدة</div>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">
                &ldquo;<Link href="/services/cleaning" className="text-primary-600 font-semibold hover:underline">خدمة التنظيف العميق</Link> كانت رائعة! المنزل أصبح نظيفاً بشكل لا يصدق. سأستخدم الخدمة مرة أخرى بالتأكيد.&rdquo;
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-3xl">
                  👨‍💼
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">خالد المطيري</div>
                  <div className="text-sm text-gray-600">الدمام</div>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">
                &ldquo;استدعيتهم لـ<Link href="/emergency/leaks-plumbing/dammam" className="text-primary-600 font-semibold hover:underline">حالة طوارئ تسرب مياه</Link> ووصلوا خلال 30 دقيقة! خدمة سريعة واحترافية جداً.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                أسئلة شائعة
              </h2>
              <p className="text-xl text-gray-600">
                إجابات سريعة على أكثر الأسئلة شيوعاً
              </p>
            </div>

            <div className="space-y-4">
              <details className="group bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-primary-500 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-bold text-gray-900 flex-1 pl-4">
                    هل تقدمون خدمات في جميع أحياء المدينة؟
                  </h3>
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    نعم، نقدم خدماتنا في جميع أحياء المدن المغطاة. سواء كنت في <Link href="/saudi/riyadh" className="text-primary-600 font-semibold hover:underline">الرياض</Link>، <Link href="/saudi/jeddah" className="text-primary-600 font-semibold hover:underline">جدة</Link>، <Link href="/saudi/makkah" className="text-primary-600 font-semibold hover:underline">مكة</Link> أو أي مدينة أخرى، فريقنا جاهز للوصول إليك في أي حي.
                  </p>
                </div>
              </details>

              <details className="group bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-primary-500 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-bold text-gray-900 flex-1 pl-4">
                    كم من الوقت تستغرق خدمة نقل العفش؟
                  </h3>
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    تعتمد المدة على حجم المنزل والمسافة. شقة من غرفتين تستغرق 3-4 ساعات، بينما فيلا كبيرة قد تحتاج يوم كامل. نقدم <Link href="/pricing/moving/riyadh" className="text-primary-600 font-semibold hover:underline">تقدير مجاني للوقت والتكلفة</Link> قبل البدء.
                  </p>
                </div>
              </details>

              <details className="group bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-primary-500 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-bold text-gray-900 flex-1 pl-4">
                    هل يمكنني الحصول على عرض سعر قبل الحجز؟
                  </h3>
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    بالتأكيد! نقدم معاينة مجانية وعرض سعر تفصيلي قبل بدء أي عمل. يمكنك مراجعة <Link href="/pricing" className="text-primary-600 font-semibold hover:underline">صفحة الأسعار</Link> للحصول على تقدير أولي، أو التواصل معنا للحصول على عرض سعر دقيق.
                  </p>
                </div>
              </details>

              <details className="group bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-primary-500 transition-colors">
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
                    نقبل النقد والتحويل البنكي والدفع الإلكتروني. الدفع يتم بعد إتمام الخدمة والتأكد من رضاك التام عن العمل المنجز.
                  </p>
                </div>
              </details>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/faqs"
                className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors font-bold text-lg shadow-lg"
              >
                <span>المزيد من الأسئلة والأجوبة</span>
                <span>←</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview / Tips */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              نصائح ومقالات مفيدة
            </h2>
            <p className="text-xl text-gray-600">
              تعلم المزيد عن الخدمات المنزلية والصيانة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="p-6">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  أفضل النصائح لنقل العفش بأمان
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  دليل شامل لحماية أثاثك أثناء النقل مع نصائح من الخبراء
                </p>
                <span className="text-primary-600 font-semibold">اقرأ المزيد ←</span>
              </div>
            </Link>

            <Link href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="p-6">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  كيف تختار شركة تنظيف موثوقة؟
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  معايير أساسية لاختيار أفضل شركة تنظيف في مدينتك
                </p>
                <span className="text-primary-600 font-semibold">اقرأ المزيد ←</span>
              </div>
            </Link>

            <Link href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="p-6">
                <div className="text-4xl mb-4">🛠️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  علامات تسرب المياه المخفية
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  اكتشف التسربات مبكراً وتجنب الأضرار الكبيرة
                </p>
                <span className="text-primary-600 font-semibold">اقرأ المزيد ←</span>
              </div>
            </Link>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="inline-block px-8 py-4 bg-white text-primary-600 rounded-xl hover:bg-gray-50 transition-colors font-bold text-lg shadow-lg"
            >
              تصفح جميع المقالات
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-6xl mb-6">🚀</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              جاهز لبدء خدمتك؟
            </h2>
            <p className="text-2xl mb-8 text-primary-100 leading-relaxed">
              فريقنا جاهز لخدمتك على مدار الساعة في جميع أنحاء المملكة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/saudi"
                className="inline-block px-12 py-5 bg-white text-primary-600 rounded-xl hover:bg-gray-100 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
              >
                اختر مدينتك وابدأ
              </Link>
              <Link
                href="/contact"
                className="inline-block px-12 py-5 bg-yellow-400 text-gray-900 rounded-xl hover:bg-yellow-300 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
              >
                اتصل الآن
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center gap-8 text-primary-100">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✅</span>
                <span>ضمان مكتوب</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                <span>استجابة فورية</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏆</span>
                <span>فنيون معتمدون</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

