import Link from 'next/link';
import { SERVICES } from '@/data/services';
import { getTier1Cities } from '@/data/cities';
import { ServiceCard } from '@/components/ServiceCard';
import { TrustBadges } from '@/components/TrustBadges';
import { HeroSlider } from '@/components/HeroSlider';
import { cityPath } from '@/lib/urls';
import { REVALIDATE_HOMEPAGE, PHONE, WHATSAPP } from '@/lib/constants';
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
      {/* Hero Section - Modern & Professional */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-0 left-0 w-72 h-72 md:w-96 md:h-96 bg-primary-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        
        <div className="relative container mx-auto px-4 py-12 md:py-20 lg:py-24">
          {/* Badge */}
          <div className="text-center mb-6 md:mb-8">
            <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
              <span className="text-xl md:text-2xl">🏆</span>
              <span className="font-bold text-white text-sm md:text-base">المنصة الأولى للخدمات المنزلية في المملكة</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-center mb-4 md:mb-6 leading-tight">
            <span className="text-white">خدمات منزلية</span>
            <span className="block mt-2 bg-gradient-to-r from-primary-400 via-blue-400 to-primary-400 bg-clip-text text-transparent">
              احترافية وموثوقة
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center text-slate-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto px-4">
            نربطك بأفضل مقدمي الخدمات المعتمدين في
            <span className="text-white font-semibold"> 45+ مدينة </span>
            سعودية
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-10 md:mb-14 px-4">
            <a
              href={`tel:${PHONE}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-3.5 md:py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-xl md:rounded-2xl font-bold text-base md:text-lg shadow-xl shadow-primary-500/30 transition-all transform hover:scale-105"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>اتصل الآن</span>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-3.5 md:py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl md:rounded-2xl font-bold text-base md:text-lg shadow-xl shadow-green-500/30 transition-all transform hover:scale-105"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>واتساب</span>
            </a>
            <Link
              href="/emergency"
              className="w-full sm:w-auto flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-3.5 md:py-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl md:rounded-2xl font-bold text-base md:text-lg shadow-xl shadow-red-500/30 transition-all transform hover:scale-105 animate-pulse"
            >
              <span className="text-xl md:text-2xl">🚨</span>
              <span>طوارئ 24/7</span>
            </Link>
          </div>

          {/* Hero Slider */}
          <div className="max-w-6xl mx-auto mb-10 md:mb-14 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
            <HeroSlider />
          </div>

          {/* Stats - Glass Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl p-4 md:p-6 text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-1 md:mb-2">45+</div>
              <div className="text-xs md:text-sm text-slate-300 font-medium">مدينة مغطاة</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl p-4 md:p-6 text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-1 md:mb-2">14</div>
              <div className="text-xs md:text-sm text-slate-300 font-medium">خدمة رئيسية</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl p-4 md:p-6 text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-primary-400 mb-1 md:mb-2">24/7</div>
              <div className="text-xs md:text-sm text-slate-300 font-medium">خدمة طوارئ</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl p-4 md:p-6 text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-green-400 mb-1 md:mb-2">30%</div>
              <div className="text-xs md:text-sm text-slate-300 font-medium">خصم حالي</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="py-8 md:py-12 bg-white -mt-6 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto -mt-12 md:-mt-16">
            <Link
              href="/deals"
              className="group bg-gradient-to-br from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white rounded-xl md:rounded-2xl p-4 md:p-6 text-center transition-all hover:scale-105 shadow-xl shadow-red-500/20"
            >
              <div className="text-2xl md:text-4xl mb-1 md:mb-2">🎁</div>
              <div className="font-bold text-sm md:text-base mb-0.5 md:mb-1">العروض</div>
              <div className="text-xs opacity-90">خصم 30%</div>
            </Link>

            <Link
              href="/pricing"
              className="group bg-gradient-to-br from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-xl md:rounded-2xl p-4 md:p-6 text-center transition-all hover:scale-105 shadow-xl shadow-blue-500/20"
            >
              <div className="text-2xl md:text-4xl mb-1 md:mb-2">💰</div>
              <div className="font-bold text-sm md:text-base mb-0.5 md:mb-1">الأسعار</div>
              <div className="text-xs opacity-90">شفافة</div>
            </Link>

            <Link
              href="/services"
              className="group bg-gradient-to-br from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-xl md:rounded-2xl p-4 md:p-6 text-center transition-all hover:scale-105 shadow-xl shadow-primary-500/20"
            >
              <div className="text-2xl md:text-4xl mb-1 md:mb-2">📋</div>
              <div className="font-bold text-sm md:text-base mb-0.5 md:mb-1">الخدمات</div>
              <div className="text-xs opacity-90">14 خدمة</div>
            </Link>

            <Link
              href="/saudi"
              className="group bg-gradient-to-br from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white rounded-xl md:rounded-2xl p-4 md:p-6 text-center transition-all hover:scale-105 shadow-xl shadow-green-500/20"
            >
              <div className="text-2xl md:text-4xl mb-1 md:mb-2">🏙️</div>
              <div className="font-bold text-sm md:text-base mb-0.5 md:mb-1">المدن</div>
              <div className="text-xs opacity-90">45+ مدينة</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-10 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <TrustBadges />
        </div>
      </section>

      {/* Top Services */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              خدماتنا المميزة
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 md:mb-4">
              خدماتنا الأكثر طلباً
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
              اختر الخدمة المناسبة من بين مجموعة واسعة من الخدمات المنزلية الاحترافية
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {topServices.map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
                citySlug="riyadh"
                href={`/services#${service.slug}`}
              />
            ))}
          </div>

          <div className="text-center mt-8 md:mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all font-bold shadow-lg shadow-primary-600/25"
            >
              <span>عرض جميع الخدمات</span>
              <span>←</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Cities Coverage */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              تغطية واسعة
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 md:mb-4">
              نخدم جميع المدن الرئيسية
            </h2>
            <p className="text-base md:text-lg text-slate-600">
              تغطية شاملة في أكثر من 45 مدينة سعودية
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {tier1Cities.map((city) => (
              <Link
                key={city.slug}
                href={cityPath(city.slug)}
                className="p-4 md:p-6 bg-white rounded-xl md:rounded-2xl text-center hover:bg-primary-50 hover:shadow-lg transition-all group border border-slate-100"
              >
                <div className="text-3xl md:text-4xl mb-2 md:mb-3">🏙️</div>
                <h3 className="font-bold text-sm md:text-base text-slate-900 group-hover:text-primary-600 transition-colors">
                  {city.name_ar}
                </h3>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-10">
            <Link
              href="/saudi"
              className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-xl hover:bg-primary-50 transition-all font-bold"
            >
              <span>عرض جميع المدن</span>
              <span>←</span>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              سهولة التعامل
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 md:mb-4">كيف يعمل بروكر</h2>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
              عملية بسيطة وسريعة للحصول على أفضل الخدمات المنزلية في المملكة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              {
                num: '1',
                title: 'اختر الخدمة والمدينة',
                desc: 'حدد الخدمة المطلوبة من بين 14 خدمة رئيسية والمدينة التي تحتاج الخدمة فيها',
                link: '/services',
                linkText: 'تصفح الخدمات',
                color: 'primary'
              },
              {
                num: '2',
                title: 'تواصل مباشرة',
                desc: 'اتصل أو أرسل رسالة واتساب لمقدم الخدمة المعتمد. فريقنا متاح 24/7',
                link: '/contact',
                linkText: 'اتصل بنا',
                color: 'blue'
              },
              {
                num: '3',
                title: 'احصل على الخدمة',
                desc: 'استمتع بخدمة احترافية من فنيين معتمدين مع ضمان مكتوب يصل إلى سنتين',
                link: '/about',
                linkText: 'اعرف المزيد',
                color: 'green'
              }
            ].map((step) => (
              <div key={step.num} className="text-center bg-slate-50 rounded-2xl md:rounded-3xl p-6 md:p-8 hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 md:w-20 md:h-20 bg-${step.color}-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-bold mx-auto mb-4 md:mb-6 shadow-lg`}>
                  {step.num}
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-slate-900 mb-3 md:mb-4">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-3 md:mb-4">
                  {step.desc}
                </p>
                <Link href={step.link} className="text-primary-600 font-semibold hover:underline text-sm md:text-base">
                  {step.linkText} ←
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-8 md:mb-16">
            <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-semibold mb-4">
              لماذا نحن
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              لماذا نحن الخيار الأول في المملكة؟
            </h2>
            <p className="text-base md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              نفخر بتقديم أفضل الخدمات المنزلية في السعودية بمعايير عالمية وأسعار تنافسية
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: '🏆', title: 'خبرة واسعة', desc: 'أكثر من 10 سنوات من الخبرة في تقديم الخدمات المنزلية', color: 'from-primary-500/20 to-blue-500/20' },
              { icon: '✅', title: 'ضمان شامل', desc: 'ضمان مكتوب يصل إلى سنتين على جميع خدماتنا', color: 'from-green-500/20 to-emerald-500/20' },
              { icon: '⚡', title: 'استجابة فورية', desc: 'نصل خلال ساعة واحدة للحالات الطارئة 24/7', color: 'from-red-500/20 to-orange-500/20' },
              { icon: '💰', title: 'أسعار شفافة', desc: 'لا توجد رسوم خفية مع تقدير مجاني قبل البدء', color: 'from-purple-500/20 to-pink-500/20' }
            ].map((item, i) => (
              <div key={i} className={`bg-gradient-to-br ${item.color} backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/30 transition-all`}>
                <div className="text-4xl md:text-5xl mb-3 md:mb-4">{item.icon}</div>
                <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3">{item.title}</h3>
                <p className="text-sm md:text-base text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Deep Dive */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              خدماتنا الشاملة
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6">
              خدمات منزلية شاملة لكل احتياجاتك
            </h2>
            <p className="text-base md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              من نقل العفش إلى الصيانة والتنظيف، نقدم مجموعة كاملة من الخدمات المنزلية الاحترافية
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-4 md:space-y-6">
            {[
              {
                icon: '🚚',
                title: 'خدمات نقل العفش الاحترافية',
                desc: 'نقدم خدمات نقل العفش في الرياض، جدة، مكة، الدمام وجميع مدن المملكة. فريقنا المحترف يضمن نقل أثاثك بأمان تام مع التغليف الكامل والفك والتركيب.',
                links: ['/pricing/moving/riyadh', '/deals/moving/riyadh'],
                linkTexts: ['أسعار نقل العفش', 'عروض نقل العفش']
              },
              {
                icon: '✨',
                title: 'خدمات التنظيف الشاملة',
                desc: 'نوفر خدمات التنظيف بجميع أنواعها: التنظيف العميق، التنظيف بالبخار، تنظيف الخزانات، تنظيف السجاد والمفروشات. فريق متخصص مع مواد آمنة.',
                links: ['/pricing/cleaning/riyadh', '/deals/cleaning/jeddah'],
                linkTexts: ['أسعار التنظيف', 'عروض التنظيف']
              },
              {
                icon: '🔧',
                title: 'خدمات الصيانة والإصلاح',
                desc: 'نقدم صيانة المكيفات، كشف تسربات المياه، السباكة، الكهرباء، إصلاح الأجهزة. فنيون معتمدون متاحون 24/7 للطوارئ في جميع أنحاء المملكة.',
                links: ['/services/ac', '/services/leaks-plumbing'],
                linkTexts: ['صيانة المكيفات', 'كشف التسربات']
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                  <div className="text-4xl md:text-6xl flex-shrink-0">{item.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-3xl font-bold text-slate-900 mb-3 md:mb-4">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-lg text-slate-700 leading-relaxed mb-4 md:mb-6">
                      {item.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {item.links.map((link, j) => (
                        <Link key={j} href={link} className={`px-3 md:px-4 py-1.5 md:py-2 ${j === 0 ? 'bg-primary-100 text-primary-800 hover:bg-primary-200' : 'bg-red-100 text-red-800 hover:bg-red-200'} rounded-lg transition-colors font-medium text-sm md:text-base`}>
                          {item.linkTexts[j]}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
              مناطق التغطية
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6">
              تغطية شاملة في جميع أنحاء المملكة
            </h2>
            <p className="text-base md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              نخدم أكثر من 45 مدينة سعودية بنفس المعايير العالية والاحترافية
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
              {[
                { title: 'المدن الكبرى', icon: '🏙️', cities: ['الرياض (العاصمة)', 'جدة (عروس البحر الأحمر)', 'مكة المكرمة', 'المدينة المنورة'], links: ['/saudi/riyadh', '/saudi/jeddah', '/saudi/makkah', '/saudi/madinah'], color: 'primary' },
                { title: 'المنطقة الشرقية', icon: '⚡', cities: ['الدمام', 'الخبر', 'الظهران', 'القطيف'], links: ['/saudi/dammam', '/saudi/khobar', '/saudi/dhahran', '/saudi/qatif'], color: 'green' },
                { title: 'مدن أخرى', icon: '🌆', cities: ['الطائف', 'أبها', 'تبوك', 'بريدة'], links: ['/saudi/taif', '/saudi/abha', '/saudi/tabuk', '/saudi/buraidah'], color: 'orange' }
              ].map((region, i) => (
                <div key={i} className={`bg-gradient-to-br from-${region.color}-50 to-${region.color}-100/50 rounded-2xl md:rounded-3xl p-6 md:p-8 text-center`}>
                  <div className="text-4xl md:text-6xl mb-3 md:mb-4">{region.icon}</div>
                  <h3 className="text-lg md:text-2xl font-bold text-slate-900 mb-4">{region.title}</h3>
                  <div className="space-y-2 md:space-y-3 text-right">
                    {region.cities.map((city, j) => (
                      <Link key={j} href={region.links[j]} className="block text-sm md:text-lg text-primary-600 hover:text-primary-700 font-semibold">
                        → {city}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/coverage"
                className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl hover:from-primary-700 hover:to-primary-800 transition-colors font-bold text-base md:text-lg shadow-lg"
              >
                <span>عرض جميع المدن المغطاة (45+)</span>
                <span>←</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <span className="inline-block px-4 py-1.5 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold mb-4">
              آراء العملاء
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6">
              عملاؤنا يثقون بنا
            </h2>
            <p className="text-base md:text-xl text-slate-600 max-w-3xl mx-auto">
              آلاف العملاء الراضين في جميع أنحاء المملكة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
            {[
              { name: 'أحمد العتيبي', city: 'الرياض', icon: '👨‍💼', text: 'استخدمت خدمة نقل العفش من بروكر وكانت التجربة ممتازة. الفريق محترف جداً والأسعار معقولة. أنصح بشدة!' },
              { name: 'فاطمة الغامدي', city: 'جدة', icon: '👩‍💼', text: 'خدمة التنظيف العميق كانت رائعة! المنزل أصبح نظيفاً بشكل لا يصدق. سأستخدم الخدمة مرة أخرى بالتأكيد.' },
              { name: 'خالد المطيري', city: 'الدمام', icon: '👨‍💼', text: 'استدعيتهم لحالة طوارئ تسرب مياه ووصلوا خلال 30 دقيقة! خدمة سريعة واحترافية جداً.' }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary-100 rounded-full flex items-center justify-center text-2xl md:text-3xl">
                    {testimonial.icon}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm md:text-lg">{testimonial.name}</div>
                    <div className="text-xs md:text-sm text-slate-600">{testimonial.city}</div>
                  </div>
                </div>
                <div className="flex gap-0.5 md:gap-1 mb-2 md:mb-3">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-yellow-400 text-base md:text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
                الأسئلة الشائعة
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 md:mb-4">
                أسئلة شائعة
              </h2>
              <p className="text-base md:text-xl text-slate-600">
                إجابات سريعة على أكثر الأسئلة شيوعاً
              </p>
            </div>

            <div className="space-y-3 md:space-y-4">
              {[
                { q: 'هل تقدمون خدمات في جميع أحياء المدينة؟', a: 'نعم، نقدم خدماتنا في جميع أحياء المدن المغطاة. سواء كنت في الرياض، جدة، مكة أو أي مدينة أخرى، فريقنا جاهز للوصول إليك في أي حي.' },
                { q: 'كم من الوقت تستغرق خدمة نقل العفش؟', a: 'تعتمد المدة على حجم المنزل والمسافة. شقة من غرفتين تستغرق 3-4 ساعات، بينما فيلا كبيرة قد تحتاج يوم كامل. نقدم تقدير مجاني للوقت والتكلفة قبل البدء.' },
                { q: 'هل يمكنني الحصول على عرض سعر قبل الحجز؟', a: 'بالتأكيد! نقدم معاينة مجانية وعرض سعر تفصيلي قبل بدء أي عمل. يمكنك مراجعة صفحة الأسعار للحصول على تقدير أولي.' },
                { q: 'ما هي طرق الدفع المتاحة؟', a: 'نقبل النقد والتحويل البنكي والدفع الإلكتروني. الدفع يتم بعد إتمام الخدمة والتأكد من رضاك التام عن العمل المنجز.' }
              ].map((faq, i) => (
                <details key={i} className="group bg-slate-50 rounded-xl md:rounded-2xl border-2 border-slate-200 hover:border-primary-500 transition-colors">
                  <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer">
                    <h3 className="text-sm md:text-lg font-bold text-slate-900 flex-1 pl-4 text-right">
                      {faq.q}
                    </h3>
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-primary-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-4 md:px-6 pb-4 md:pb-6">
                    <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>

            <div className="text-center mt-6 md:mt-8">
              <Link
                href="/faqs"
                className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors font-bold text-base md:text-lg shadow-lg"
              >
                <span>المزيد من الأسئلة والأجوبة</span>
                <span>←</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-primary-600 via-primary-700 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-4xl md:text-6xl mb-4 md:mb-6">🚀</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              جاهز لبدء خدمتك؟
            </h2>
            <p className="text-lg md:text-2xl mb-6 md:mb-8 text-primary-100 leading-relaxed">
              فريقنا جاهز لخدمتك على مدار الساعة في جميع أنحاء المملكة
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link
                href="/saudi"
                className="px-8 md:px-12 py-4 md:py-5 bg-white text-primary-600 rounded-xl hover:bg-slate-100 transition-all font-bold text-base md:text-xl shadow-2xl transform hover:scale-105"
              >
                اختر مدينتك وابدأ
              </Link>
              <Link
                href="/contact"
                className="px-8 md:px-12 py-4 md:py-5 bg-yellow-400 text-slate-900 rounded-xl hover:bg-yellow-300 transition-all font-bold text-base md:text-xl shadow-2xl transform hover:scale-105"
              >
                اتصل الآن
              </Link>
            </div>
            <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-8 text-primary-100 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <span className="text-xl md:text-2xl">✅</span>
                <span>ضمان مكتوب</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl md:text-2xl">⚡</span>
                <span>استجابة فورية</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl md:text-2xl">🏆</span>
                <span>فنيون معتمدون</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
