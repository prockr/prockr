import Link from 'next/link';
import { CITIES } from '@/data/cities';
import { SERVICES } from '@/data/services';
import { cityPath } from '@/lib/urls';
import { generateMetadata as genMetadata } from '@/lib/seo';
import { REVALIDATE_DEFAULT } from '@/lib/constants';

export const revalidate = REVALIDATE_DEFAULT;

export const metadata = genMetadata({
  title: 'التغطية الجغرافية | خدماتنا في جميع مدن المملكة | بروكر',
  description:
    'تعرف على المدن والمناطق التي نغطيها في المملكة العربية السعودية. نوفر خدمات منزلية في أكثر من 45 مدينة.',
  path: '/coverage',
});

export default function CoveragePage() {
  const tier1 = CITIES.filter((c) => c.tier === 1);
  const tier2 = CITIES.filter((c) => c.tier === 2);
  const tier3 = CITIES.filter((c) => c.tier === 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-blue-600 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <span className="text-3xl">🗺️</span>
              <span className="font-bold text-lg">نخدم جميع مناطق المملكة</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              التغطية الجغرافية
              <span className="block text-yellow-300 mt-2">في جميع أنحاء المملكة</span>
            </h1>

            <p className="text-2xl text-primary-100 mb-8 leading-relaxed">
              نفخر بتوفير خدماتنا المنزلية الاحترافية في أكثر من 45 مدينة سعودية من الشمال إلى الجنوب
            </p>

            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-5xl font-bold text-yellow-300 mb-2">45+</div>
                <div className="text-primary-100">مدينة مغطاة</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-5xl font-bold text-yellow-300 mb-2">13</div>
                <div className="text-primary-100">منطقة إدارية</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-5xl font-bold text-yellow-300 mb-2">14</div>
                <div className="text-primary-100">خدمة رئيسية</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              بروكر - شريكك الموثوق في جميع أنحاء المملكة
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p className="text-xl">
                تأسست <span className="font-bold text-primary-600">بروكر</span> على رؤية واضحة: أن تكون المنصة الأولى والأشمل للخدمات المنزلية في المملكة العربية السعودية. نحن نؤمن بأن كل أسرة سعودية تستحق الوصول إلى خدمات منزلية احترافية وموثوقة، بغض النظر عن موقعها الجغرافي.
              </p>

              <p className="text-xl">
                منذ انطلاقتنا، عملنا بجد لبناء شبكة واسعة من مقدمي الخدمات المعتمدين في جميع أنحاء المملكة. اليوم، نفخر بأننا نخدم أكثر من 45 مدينة سعودية، ونغطي 13 منطقة إدارية من الدمام في الشرق إلى جدة في الغرب، ومن تبوك في الشمال إلى جازان في الجنوب.
              </p>

              <p className="text-xl">
                لا تقتصر تغطيتنا على المدن الكبرى فقط، بل نمتد لنصل إلى المدن المتوسطة والصغيرة، لأننا نؤمن بأن الجودة والاحترافية يجب أن تكون متاحة للجميع. سواء كنت في قلب الرياض أو في مدينة صغيرة بالمنطقة الشمالية، فإن بروكر هنا لخدمتك.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Cities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              المدن الرئيسية
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              تغطية شاملة ومتكاملة مع استجابة فورية في المدن الكبرى
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-3xl">
                    🏙️
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {tier1.length} مدن رئيسية
                    </h3>
                    <p className="text-gray-600">تغطية متكاملة 24/7</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  في المدن الرئيسية، نوفر تغطية شاملة لجميع الخدمات مع ضمان الاستجابة السريعة. فريقنا متواجد على مدار الساعة للتعامل مع جميع الطلبات، سواء كانت عادية أو طارئة.
                </p>

                <ul className="space-y-3">
                  {tier1.map((city) => (
                    <li key={city.slug}>
                      <Link
                        href={cityPath(city.slug)}
                        className="flex items-center gap-3 p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors group"
                      >
                        <span className="text-2xl">📍</span>
                        <div className="flex-1">
                          <div className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors text-lg">
                            {city.name_ar}
                          </div>
                          {city.neighborhoods && (
                            <div className="text-sm text-gray-600">
                              {city.neighborhoods.length}+ حي مغطى
                            </div>
                          )}
                        </div>
                        <svg className="w-6 h-6 text-primary-600 group-hover:translate-x-[-4px] transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
                    ⚡
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      مميزات التغطية الرئيسية
                    </h3>
                    <p className="text-gray-600">خدمات استثنائية</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">خدمة طوارئ 24/7</h4>
                      <p className="text-gray-600 text-sm">نصلك في أقل من 30 دقيقة للحالات الطارئة</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">تغطية لجميع الأحياء</h4>
                      <p className="text-gray-600 text-sm">نصل إلى جميع أحياء المدينة دون استثناء</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">فريق كبير من الفنيين</h4>
                      <p className="text-gray-600 text-sm">شبكة واسعة من مقدمي الخدمات المعتمدين</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">جميع الخدمات متاحة</h4>
                      <p className="text-gray-600 text-sm">14 خدمة رئيسية و100+ خدمة فرعية</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">استجابة فورية</h4>
                      <p className="text-gray-600 text-sm">نرد على طلبك خلال دقائق ونصلك خلال ساعات</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Coverage */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              الخدمات المتاحة في جميع المدن
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              مجموعة شاملة من الخدمات المنزلية والصيانة في كل مدينة نخدمها
            </p>

            <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 mb-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {SERVICES.map((service) => (
                  <div
                    key={service.slug}
                    className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="text-3xl mb-2">✓</div>
                    <div className="font-bold text-gray-900 text-sm">{service.name_ar}</div>
                    <div className="text-xs text-gray-600 mt-1">
                      {service.subservices.length} خدمة فرعية
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-lg leading-relaxed">
                نحرص في بروكر على توفير مجموعة متكاملة من الخدمات في كل مدينة نخدمها. سواء كنت بحاجة إلى نقل عفش، تنظيف منزلي، كشف تسربات، مكافحة حشرات، صيانة تكييف، أعمال كهربائية، سباكة، دهان وديكور، نجارة، تنسيق حدائق، أو أي خدمة منزلية أخرى - نحن هنا لخدمتك.
              </p>

              <p className="text-lg leading-relaxed">
                كل خدمة من خدماتنا تتضمن عدة خدمات فرعية متخصصة. على سبيل المثال، في خدمة التنظيف، نوفر تنظيف منازل، فلل، شقق، قصور، مجالس، كنب، سجاد، خزانات، وأكثر من ذلك بكثير. هذا التنوع يضمن أننا نلبي جميع احتياجاتك تحت سقف واحد.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Cities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              مدن أخرى نخدمها
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              نتوسع باستمرار لنصل إلى المزيد من المدن في جميع مناطق المملكة
            </p>

            {tier2.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">المدن المتوسطة</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {tier2.map((city) => (
                    <Link
                      key={city.slug}
                      href={cityPath(city.slug)}
                      className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-all group text-center"
                    >
                      <div className="text-3xl mb-2">📍</div>
                      <div className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {city.name_ar}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {tier3.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">مدن إضافية</h3>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {tier3.map((city) => (
                      <Link
                        key={city.slug}
                        href={cityPath(city.slug)}
                        className="text-gray-900 hover:text-primary-600 transition-colors font-medium text-center p-3 hover:bg-primary-50 rounded-lg"
                      >
                        {city.name_ar}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Regional Coverage */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              التغطية حسب المناطق الإدارية
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Riyadh Region */}
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-3xl">🏛️</span>
                  منطقة الرياض
                </h3>
                <p className="text-gray-700 mb-4">
                  تغطية شاملة للعاصمة والمدن المحيطة بها مع خدمة استثنائية على مدار الساعة
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white text-primary-700 rounded-full text-sm font-medium">الرياض</span>
                  <span className="px-3 py-1 bg-white text-primary-700 rounded-full text-sm font-medium">الخرج</span>
                  <span className="px-3 py-1 bg-white text-primary-700 rounded-full text-sm font-medium">الدرعية</span>
                  <span className="px-3 py-1 bg-white text-primary-700 rounded-full text-sm font-medium">+المزيد</span>
                </div>
              </div>

              {/* Makkah Region */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-3xl">🕋</span>
                  منطقة مكة المكرمة
                </h3>
                <p className="text-gray-700 mb-4">
                  خدمات متميزة في المدينة المقدسة وجدة والطائف وجميع مدن المنطقة الغربية
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white text-green-700 rounded-full text-sm font-medium">مكة المكرمة</span>
                  <span className="px-3 py-1 bg-white text-green-700 rounded-full text-sm font-medium">جدة</span>
                  <span className="px-3 py-1 bg-white text-green-700 rounded-full text-sm font-medium">الطائف</span>
                  <span className="px-3 py-1 bg-white text-green-700 rounded-full text-sm font-medium">+المزيد</span>
                </div>
              </div>

              {/* Eastern Region */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-3xl">🏝️</span>
                  المنطقة الشرقية
                </h3>
                <p className="text-gray-700 mb-4">
                  تغطية كاملة للمنطقة الشرقية من الدمام إلى الجبيل والأحساء
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-medium">الدمام</span>
                  <span className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-medium">الخبر</span>
                  <span className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-medium">الظهران</span>
                  <span className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-medium">+المزيد</span>
                </div>
              </div>

              {/* Medina Region */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-3xl">🕌</span>
                  منطقة المدينة المنورة
                </h3>
                <p className="text-gray-700 mb-4">
                  خدمات احترافية في المدينة المنورة وينبع وجميع مدن المنطقة
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white text-purple-700 rounded-full text-sm font-medium">المدينة المنورة</span>
                  <span className="px-3 py-1 bg-white text-purple-700 rounded-full text-sm font-medium">ينبع</span>
                  <span className="px-3 py-1 bg-white text-purple-700 rounded-full text-sm font-medium">+المزيد</span>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center text-gray-600">
              <p className="text-lg">
                بالإضافة إلى تغطيتنا في مناطق: عسير، تبوك، حائل، الحدود الشمالية، جازان، نجران، الباحة، والجوف
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Coverage */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              لماذا تغطيتنا الأفضل؟
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center text-2xl">
                    🎯
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">تغطية جغرافية شاملة</h3>
                    <p className="text-gray-700 leading-relaxed">
                      لا نقتصر على المدن الكبرى فقط. نمتد لنصل إلى المدن المتوسطة والصغيرة في جميع أنحاء المملكة، مما يضمن حصول الجميع على خدمات عالية الجودة بغض النظر عن موقعهم.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                    ⚡
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">استجابة سريعة في كل مكان</h3>
                    <p className="text-gray-700 leading-relaxed">
                      بفضل شبكتنا الواسعة من مقدمي الخدمات المحليين، نضمن أوقات استجابة سريعة في جميع المدن. في المدن الرئيسية نصلك خلال ساعة، وفي المدن الأخرى خلال 24 ساعة على الأكثر.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                    👥
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">مقدمو خدمات محليون معتمدون</h3>
                    <p className="text-gray-700 leading-relaxed">
                      نتعاون مع مقدمي خدمات محليين في كل مدينة، مما يضمن معرفتهم العميقة بالمنطقة وقدرتهم على الوصول إليك بسرعة. جميع شركائنا معتمدون ومدربون على أعلى المعايير.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center text-2xl">
                    🌟
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">نفس الجودة في كل مدينة</h3>
                    <p className="text-gray-700 leading-relaxed">
                      نطبق نفس معايير الجودة العالية في جميع المدن التي نخدمها. سواء كنت في الرياض أو في مدينة صغيرة، ستحصل على نفس المستوى من الاحترافية والجودة.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expansion Plans */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              خطط التوسع المستقبلية
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              نعمل باستمرار على توسيع تغطيتنا لنصل إلى المزيد من المدن والمناطق في المملكة. هدفنا هو أن نكون متواجدين في كل مدينة وقرية في السعودية، لنضمن حصول الجميع على خدمات منزلية احترافية وموثوقة.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              إذا كانت مدينتك غير مدرجة في قائمتنا الحالية، لا تتردد في الاتصال بنا. نحن دائماً نستمع لاحتياجات عملائنا ونعمل على تلبيتها. قد نكون قادرين على خدمتك حتى لو لم تكن مدينتك مدرجة بشكل رسمي بعد.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ابحث عن خدمتك في مدينتك
          </h2>
          <p className="text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
            اختر مدينتك الآن واكتشف جميع الخدمات المتاحة لك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/saudi"
              className="px-10 py-5 bg-white text-primary-600 rounded-xl hover:bg-gray-100 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
            >
              اختر مدينتك
            </Link>
            <Link
              href="/services"
              className="px-10 py-5 bg-yellow-400 text-gray-900 rounded-xl hover:bg-yellow-300 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
            >
              تصفح الخدمات
            </Link>
            <Link
              href="/contact"
              className="px-10 py-5 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
            >
              اتصل بنا
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

