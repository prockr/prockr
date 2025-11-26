import Link from 'next/link';
import Image from 'next/image';
import { CITIES, getTier1Cities } from '@/data/cities';
import { cityPath } from '@/lib/urls';
import { generateMetadata as genMetadata } from '@/lib/seo';
import { REVALIDATE_DEFAULT } from '@/lib/constants';

export const revalidate = REVALIDATE_DEFAULT;

export const metadata = genMetadata({
  title: 'خدمات منزلية في جميع مدن المملكة العربية السعودية | بروكر',
  description:
    'اختر مدينتك واحصل على أفضل الخدمات المنزلية في السعودية. نغطي أكثر من 45 مدينة بخدمات احترافية معتمدة.',
  path: '/saudi',
});

export default function SaudiHubPage() {
  const tier1 = getTier1Cities();
  const tier2 = CITIES.filter((c) => c.tier === 2);
  const tier3 = CITIES.filter((c) => c.tier === 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-700 via-green-800 to-green-900 text-white overflow-hidden">
        {/* Background Pattern - Saudi Flag Style */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(45deg, transparent 45%, white 45%, white 55%, transparent 55%)',
            backgroundSize: '80px 80px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 md:py-24">
            {/* Left Content */}
            <div className="text-center lg:text-right">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <span className="text-3xl">🇸🇦</span>
                <span className="font-bold text-lg">نخدم جميع مناطق المملكة</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                اختر مدينتك
                <span className="block text-yellow-300 mt-2">في المملكة</span>
              </h1>

              <p className="text-2xl text-green-100 mb-8 leading-relaxed">
                خدمات منزلية احترافية في أكثر من 45 مدينة سعودية • مقدمو خدمات معتمدون
              </p>

              {/* Cities Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-4xl font-bold text-yellow-300 mb-1">45+</div>
                  <div className="text-sm text-green-100">مدينة</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-4xl font-bold text-yellow-300 mb-1">5</div>
                  <div className="text-sm text-green-100">مدن رئيسية</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-4xl font-bold text-yellow-300 mb-1">100%</div>
                  <div className="text-sm text-green-100">تغطية</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
                <a
                  href="#main-cities"
                  className="px-10 py-5 bg-white text-green-700 rounded-xl hover:bg-gray-100 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
                >
                  اختر مدينتك
                </a>
                <Link
                  href="/services"
                  className="px-10 py-5 bg-yellow-400 text-gray-900 rounded-xl hover:bg-yellow-300 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
                >
                  تصفح الخدمات
                </Link>
              </div>
            </div>

            {/* Right - Map Style Images */}
            <div className="grid grid-cols-2 gap-4">
              {/* Riyadh */}
              <div className="relative h-[220px] rounded-xl overflow-hidden shadow-xl group">
                <Image
                  src="/images/cleaning/home-cleaning-Riyadh.jpg"
                  alt="الرياض"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 right-4 left-4">
                  <div className="text-2xl font-bold text-white mb-1">الرياض</div>
                  <div className="text-sm text-gray-200">العاصمة</div>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-red-500 rounded-full animate-pulse" />
              </div>

              {/* Jeddah */}
              <div className="relative h-[220px] rounded-xl overflow-hidden shadow-xl group">
                <Image
                  src="/images/cleaning/deep-cleaning-Jeddah.jpg"
                  alt="جدة"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 right-4 left-4">
                  <div className="text-2xl font-bold text-white mb-1">جدة</div>
                  <div className="text-sm text-gray-200">عروس البحر</div>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-red-500 rounded-full animate-pulse" />
              </div>

              {/* Dammam */}
              <div className="relative h-[220px] rounded-xl overflow-hidden shadow-xl group">
                <Image
                  src="/images/cleaning/cleaning-services-Dammam.jpg"
                  alt="الدمام"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 right-4 left-4">
                  <div className="text-2xl font-bold text-white mb-1">الدمام</div>
                  <div className="text-sm text-gray-200">عاصمة الشرقية</div>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-red-500 rounded-full animate-pulse" />
              </div>

              {/* Makkah */}
              <div className="relative h-[220px] rounded-xl overflow-hidden shadow-xl group">
                <Image
                  src="/images/moving/moving-service-in-Makkah.jpg"
                  alt="مكة المكرمة"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 right-4 left-4">
                  <div className="text-2xl font-bold text-white mb-1">مكة</div>
                  <div className="text-sm text-gray-200">المدينة المقدسة</div>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-red-500 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Cities Section */}
      <section id="main-cities" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              المدن الرئيسية
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              المدن الكبرى في المملكة مع تغطية شاملة لجميع الأحياء
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tier1.map((city) => (
              <Link
                key={city.slug}
                href={cityPath(city.slug)}
                className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-6xl">🏙️</div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-1">
                        {city.name_ar}
                      </h3>
                      {city.neighborhoods && (
                        <p className="text-sm text-gray-600 font-medium">
                          {city.neighborhoods.length}+ حي مغطى
                        </p>
                      )}
                    </div>
                    <div>
                      <svg className="w-8 h-8 text-primary-600 group-hover:translate-x-[-4px] transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </div>
                  </div>
                  
                  {city.neighborhoods && city.neighborhoods.length > 0 && (
                    <div>
                      <div className="text-sm font-bold text-gray-700 mb-3">الأحياء المغطاة:</div>
                      <div className="flex flex-wrap gap-2">
                        {city.neighborhoods.slice(0, 5).map((neighborhood) => (
                          <span
                            key={neighborhood}
                            className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full font-medium"
                          >
                            {neighborhood}
                          </span>
                        ))}
                        {city.neighborhoods.length > 5 && (
                          <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full font-medium">
                            +{city.neighborhoods.length - 5} المزيد
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                  <div className="flex items-center justify-between">
                    <span className="font-bold">اطلب خدمتك الآن</span>
                    <span className="text-2xl">←</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tier 2 Cities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">مدن أخرى</h2>
            <p className="text-lg text-gray-600">
              المزيد من المدن في جميع مناطق المملكة
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {tier2.map((city) => (
              <Link
                key={city.slug}
                href={cityPath(city.slug)}
                className="block p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition-all group text-center hover:bg-primary-50"
              >
                <div className="text-4xl mb-3">📍</div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {city.name_ar}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tier 3 Cities */}
      {tier3.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                المزيد من المدن
              </h2>
              <p className="text-lg text-gray-600">
                تغطية شاملة لجميع مناطق المملكة
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {tier3.map((city) => (
                <Link
                  key={city.slug}
                  href={cityPath(city.slug)}
                  className="block p-4 bg-white rounded-lg hover:bg-primary-50 hover:shadow-md transition-all text-center group"
                >
                  <span className="text-gray-900 font-medium group-hover:text-primary-600 transition-colors">
                    {city.name_ar}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services Available */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                خدماتنا في جميع المدن
              </h2>
              <p className="text-xl text-gray-600">
                نفس الجودة ونفس الاحترافية في كل مدينة
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/services/moving" className="group bg-gradient-to-br from-blue-50 to-primary-50 rounded-xl p-6 hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">🚚</div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 mb-2">نقل العفش</h3>
                <p className="text-gray-700 text-sm mb-4">متاح في جميع المدن مع فريق متخصص</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1 bg-primary-100 text-primary-700 rounded-full">الرياض</span>
                  <span className="text-xs px-3 py-1 bg-primary-100 text-primary-700 rounded-full">جدة</span>
                  <span className="text-xs px-3 py-1 bg-primary-100 text-primary-700 rounded-full">+43</span>
                </div>
              </Link>

              <Link href="/services/cleaning" className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">✨</div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 mb-2">التنظيف</h3>
                <p className="text-gray-700 text-sm mb-4">خدمات تنظيف شاملة في كل مكان</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full">مكة</span>
                  <span className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full">المدينة</span>
                  <span className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full">+43</span>
                </div>
              </Link>

              <Link href="/services/ac" className="group bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">❄️</div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-cyan-600 mb-2">المكيفات</h3>
                <p className="text-gray-700 text-sm mb-4">صيانة وإصلاح فوري في كل مدينة</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full">الدمام</span>
                  <span className="text-xs px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full">الخبر</span>
                  <span className="text-xs px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full">+43</span>
                </div>
              </Link>

              <Link href="/services/leaks-plumbing" className="group bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">💧</div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 mb-2">التسربات</h3>
                <p className="text-gray-700 text-sm mb-4">كشف وإصلاح 24/7 في كل المدن</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1 bg-orange-100 text-orange-700 rounded-full">الطائف</span>
                  <span className="text-xs px-3 py-1 bg-orange-100 text-orange-700 rounded-full">أبها</span>
                  <span className="text-xs px-3 py-1 bg-orange-100 text-orange-700 rounded-full">+43</span>
                </div>
              </Link>
            </div>

            <div className="mt-8 text-center">
              <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors font-bold text-lg shadow-lg">
                <span>تصفح جميع الخدمات</span>
                <span>←</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us by Region */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                لماذا نحن الخيار الأول في كل مدينة؟
              </h2>
              <p className="text-xl text-gray-600">
                مميزات تجعلنا الشركة الأكثر ثقة في المملكة
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center text-3xl">
                    🏙️
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">فريق محلي في كل مدينة</h3>
                    <p className="text-gray-700 leading-relaxed">
                      لدينا فرق محلية في <Link href="/saudi/riyadh" className="text-primary-600 font-semibold hover:underline">الرياض</Link>، <Link href="/saudi/jeddah" className="text-primary-600 font-semibold hover:underline">جدة</Link>، <Link href="/saudi/dammam" className="text-primary-600 font-semibold hover:underline">الدمام</Link> وجميع المدن الأخرى. فريقنا يعرف منطقتك جيداً ويصل إليك بسرعة. هذا يعني استجابة أسرع وخدمة أفضل مصممة خصيصاً لاحتياجات مدينتك.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center text-3xl">
                    ⚡
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">استجابة سريعة في كل منطقة</h3>
                    <p className="text-gray-700 leading-relaxed">
                      في المدن الرئيسية، نصل خلال 30-60 دقيقة <Link href="/emergency" className="text-primary-600 font-semibold hover:underline">للطوارئ</Link>. في المدن الأخرى، نلتزم بالمواعيد المحددة دائماً. نفهم أن وقتك ثمين، لذا نحرص على الوصول في الموعد بدون تأخير.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-3xl">
                    💰
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">أسعار مناسبة لكل مدينة</h3>
                    <p className="text-gray-700 leading-relaxed">
                      <Link href="/pricing" className="text-primary-600 font-semibold hover:underline">أسعارنا</Link> تراعي طبيعة كل مدينة وتكاليفها. نوفر تقييم مجاني ونلتزم بالسعر المتفق عليه. استفد من <Link href="/deals" className="text-primary-600 font-semibold hover:underline">عروضنا الحصرية</Link> في مدينتك بخصومات تصل إلى 30%.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center text-3xl">
                    🛡️
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">نفس الجودة في كل مكان</h3>
                    <p className="text-gray-700 leading-relaxed">
                      معاييرنا موحدة في جميع المدن. سواء كنت في <Link href="/saudi/makkah" className="text-primary-600 font-semibold hover:underline">مكة</Link> أو <Link href="/saudi/tabuk" className="text-primary-600 font-semibold hover:underline">تبوك</Link>، ستحصل على نفس مستوى الاحترافية والجودة مع ضمان مكتوب. راجع <Link href="/about" className="text-primary-600 font-semibold hover:underline">معايير الجودة</Link> لدينا.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                مناطق المملكة التي نخدمها
              </h2>
              <p className="text-xl text-gray-600">
                تغطية شاملة من الشمال إلى الجنوب
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8">
                <div className="text-5xl mb-4">🏛️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">المنطقة الوسطى</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><Link href="/saudi/riyadh" className="hover:text-primary-600 hover:underline font-semibold">• الرياض (العاصمة)</Link></li>
                  <li>• الخرج • الدوادمي • المجمعة</li>
                  <li>• شقراء • عفيف • القويعية</li>
                  <li>• حوطة بني تميم • الأفلاج</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-300">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    خدمات <Link href="/services/moving" className="text-primary-600 font-semibold hover:underline">نقل العفش</Link> و<Link href="/services/cleaning" className="text-primary-600 font-semibold hover:underline">التنظيف</Link> متاحة في جميع أحياء المنطقة
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
                <div className="text-5xl mb-4">🌊</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">المنطقة الغربية</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><Link href="/saudi/jeddah" className="hover:text-primary-600 hover:underline font-semibold">• جدة (عروس البحر)</Link></li>
                  <li><Link href="/saudi/makkah" className="hover:text-primary-600 hover:underline font-semibold">• مكة المكرمة</Link></li>
                  <li><Link href="/saudi/madinah" className="hover:text-primary-600 hover:underline font-semibold">• المدينة المنورة</Link></li>
                  <li>• الطائف • ينبع • رابغ</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-300">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <Link href="/emergency" className="text-primary-600 font-semibold hover:underline">خدمة طوارئ 24/7</Link> متاحة في جميع مدن المنطقة الغربية
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8">
                <div className="text-5xl mb-4">⚙️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">المنطقة الشرقية</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><Link href="/saudi/dammam" className="hover:text-primary-600 hover:underline font-semibold">• الدمام (عاصمة الشرقية)</Link></li>
                  <li>• الخبر • الظهران • القطيف</li>
                  <li>• الجبيل • الأحساء • حفر الباطن</li>
                  <li>• بقيق • النعيرية • رأس تنورة</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-300">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    خدمات <Link href="/services/ac" className="text-primary-600 font-semibold hover:underline">المكيفات</Link> و<Link href="/services/leaks-plumbing" className="text-primary-600 font-semibold hover:underline">كشف التسربات</Link> متاحة دائماً
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8">
                <div className="text-5xl mb-4">🏔️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">المنطقة الجنوبية</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• أبها • خميس مشيط • نجران</li>
                  <li>• جازان • بيشة • محايل عسير</li>
                  <li>• صبيا • سراة عبيدة</li>
                  <li>• ظهران الجنوب • شرورة</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-300">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    فريق متخصص في جميع <Link href="/services" className="text-primary-600 font-semibold hover:underline">الخدمات المنزلية</Link> في المنطقة الجنوبية
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
                <div className="text-5xl mb-4">🌅</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">المنطقة الشمالية</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• تبوك • حائل • الجوف</li>
                  <li>• عرعر • سكاكا • طريف</li>
                  <li>• القريات • رفحاء</li>
                  <li>• دومة الجندل • بقعاء</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-300">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <Link href="/pricing" className="text-primary-600 font-semibold hover:underline">أسعار خاصة</Link> للمنطقة الشمالية مع خدمة متميزة
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8">
                <div className="text-5xl mb-4">🌴</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">منطقة القصيم</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• بريدة • عنيزة • الرس</li>
                  <li>• البكيرية • المذنب • البدائع</li>
                  <li>• عيون الجواء • رياض الخبراء</li>
                  <li>• النبهانية • الأسياح</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-300">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    تغطية شاملة لجميع <Link href="/services" className="text-primary-600 font-semibold hover:underline">الخدمات</Link> في منطقة القصيم
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
                أسئلة شائعة عن تغطيتنا
              </h2>
              <p className="text-xl text-gray-600">
                إجابات على الأسئلة الأكثر شيوعاً
              </p>
            </div>

            <div className="space-y-4">
              <details className="group bg-white rounded-xl border-2 border-gray-200 hover:border-primary-500 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-bold text-gray-900 flex-1 pl-4">
                    هل تخدمون جميع أحياء المدينة؟
                  </h3>
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    نعم! نخدم جميع أحياء المدن الرئيسية مثل <Link href="/saudi/riyadh" className="text-primary-600 font-semibold hover:underline">الرياض</Link> (شمال، جنوب، شرق، غرب، وسط) و<Link href="/saudi/jeddah" className="text-primary-600 font-semibold hover:underline">جدة</Link> (شمال، جنوب، وسط) بدون استثناء. في المدن الأخرى، نغطي المناطق الرئيسية والضواحي المجاورة. <Link href="/contact" className="text-primary-600 font-semibold hover:underline">اتصل بنا</Link> لتأكيد التغطية في حيك.
                  </p>
                </div>
              </details>

              <details className="group bg-white rounded-xl border-2 border-gray-200 hover:border-primary-500 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-bold text-gray-900 flex-1 pl-4">
                    كم يستغرق الوصول إلى مدينتي؟
                  </h3>
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    في المدن الرئيسية (الرياض، جدة، الدمام)، نصل خلال 30-60 دقيقة <Link href="/emergency" className="text-primary-600 font-semibold hover:underline">للطوارئ</Link>. للحجز العادي، نحدد موعد مناسب لك خلال 24-48 ساعة. في المدن الأخرى، نتواصل معك لتحديد الموعد الأمثل. راجع <Link href="/pricing" className="text-primary-600 font-semibold hover:underline">صفحة الأسعار</Link> لمعلومات أكثر تفصيلاً عن مدينتك.
                  </p>
                </div>
              </details>

              <details className="group bg-white rounded-xl border-2 border-gray-200 hover:border-primary-500 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-bold text-gray-900 flex-1 pl-4">
                    هل الأسعار مختلفة بين المدن؟
                  </h3>
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    قد تختلف <Link href="/pricing" className="text-primary-600 font-semibold hover:underline">الأسعار</Link> قليلاً بين المدن بناءً على تكاليف التشغيل المحلية. لكننا نحرص دائماً على تقديم أفضل قيمة مقابل السعر في كل مدينة. نوفر <Link href="/deals" className="text-primary-600 font-semibold hover:underline">عروض خاصة</Link> في جميع المدن بخصومات تصل إلى 30%. <Link href="/contact" className="text-primary-600 font-semibold hover:underline">اطلب عرض سعر مجاني</Link> لمدينتك الآن.
                  </p>
                </div>
              </details>

              <details className="group bg-white rounded-xl border-2 border-gray-200 hover:border-primary-500 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-bold text-gray-900 flex-1 pl-4">
                    ماذا لو لم تكن مدينتي في القائمة؟
                  </h3>
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    <Link href="/contact" className="text-primary-600 font-semibold hover:underline">تواصل معنا</Link> مباشرة! قد نخدم مدينتك حتى لو لم تكن مدرجة في القائمة. نحن نتوسع باستمرار ونضيف مدن جديدة كل شهر. يمكنك أيضاً الاطلاع على <Link href="/coverage" className="text-primary-600 font-semibold hover:underline">خطة التوسع</Link> لمعرفة المدن القادمة. رأيك مهم في تحديد أولويات التوسع!
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-700 to-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-7xl mb-6">🇸🇦</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              لم تجد مدينتك؟
            </h2>
            <p className="text-2xl text-green-100 mb-10 leading-relaxed">
              نحن نتوسع باستمرار لخدمة المزيد من المدن السعودية. اتصل بنا لمعرفة مدى التغطية في منطقتك أو للاستفسار عن أي خدمة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/contact"
                className="px-12 py-5 bg-white text-green-700 rounded-xl hover:bg-gray-100 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
              >
                اتصل بنا الآن
              </Link>
              <Link
                href="/coverage"
                className="px-12 py-5 bg-yellow-400 text-gray-900 rounded-xl hover:bg-yellow-300 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
              >
                مناطق التغطية
              </Link>
              <Link
                href="/services"
                className="px-12 py-5 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
              >
                تصفح الخدمات
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 text-green-100">
              <div className="flex items-center gap-2">
                <span className="text-3xl">✅</span>
                <span className="text-lg">45+ مدينة</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl">⚡</span>
                <span className="text-lg">تغطية شاملة</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl">🏆</span>
                <span className="text-lg">نفس الجودة</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
