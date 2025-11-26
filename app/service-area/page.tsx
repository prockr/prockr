import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, CircleDot, Navigation, ChevronLeft } from 'lucide-react';
import { CITIES_GEOCODE, getCitiesByTier } from '@/lib/geocoding';
import { SERVICES } from '@/data/services';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'نطاق الخدمة - المدن المغطاة | بروكر',
  description:
    'نغطي أكثر من 40 مدينة سعودية بخدمات منزلية محترفة. اكتشف المدن والأحياء التي نخدمها في جميع أنحاء المملكة العربية السعودية.',
  path: '/service-area',
});

export default function ServiceAreaPage() {
  const tier1Cities = getCitiesByTier(1);
  const tier2Cities = getCitiesByTier(2);
  const tier3Cities = getCitiesByTier(3);

  const totalCoverage = CITIES_GEOCODE.reduce(
    (sum, city) => sum + city.serviceRadius,
    0
  );

  const regions = Array.from(
    new Set(CITIES_GEOCODE.map((city) => city.region))
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6">
              <MapPin className="w-5 h-5" />
              <span className="text-sm font-semibold">40+ مدينة مغطاة</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              نطاق خدماتنا في المملكة
            </h1>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              نقدم خدمات منزلية محترفة في أكثر من 40 مدينة سعودية عبر {regions.length} منطقة
              إدارية، بنطاق تغطية يصل إلى {totalCoverage} كم
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">{CITIES_GEOCODE.length}</div>
                <div className="text-sm text-white/80">مدينة مغطاة</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">{SERVICES.length}</div>
                <div className="text-sm text-white/80">خدمة متاحة</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">{regions.length}</div>
                <div className="text-sm text-white/80">منطقة إدارية</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tier 1 Cities - Major Metro Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-3">
                <CircleDot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">المدن الرئيسية</h2>
                <p className="text-gray-600">تغطية شاملة على مدار 24 ساعة</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tier1Cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/saudi/${city.slug}`}
                  className="group bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 rounded-xl p-6 hover:shadow-xl hover:border-blue-300 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                        {city.name_ar}
                      </h3>
                      <p className="text-sm text-gray-600">{city.region}</p>
                    </div>
                    <div className="bg-blue-100 rounded-full p-2">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Navigation className="w-4 h-4 text-blue-500" />
                      <span>نطاق الخدمة: {city.serviceRadius} كم</span>
                    </div>
                    {city.neighborhoods && city.neighborhoods.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {city.neighborhoods.slice(0, 3).map((neighborhood, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded"
                          >
                            {neighborhood}
                          </span>
                        ))}
                        {city.neighborhoods.length > 3 && (
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            +{city.neighborhoods.length - 3}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center text-primary-600 font-semibold group-hover:gap-2 transition-all">
                    <span>عرض الخدمات</span>
                    <ChevronLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tier 2 Cities - Regional Hubs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-3">
                <CircleDot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">المدن الإقليمية</h2>
                <p className="text-gray-600">خدمات محترفة وسريعة</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {tier2Cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/saudi/${city.slug}`}
                  className="group bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg hover:border-green-300 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-green-100 rounded-full p-1.5">
                      <MapPin className="w-4 h-4 text-green-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {city.name_ar}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">{city.region}</p>
                  <div className="flex items-center gap-1 text-xs text-gray-600">
                    <Navigation className="w-3 h-3 text-green-500" />
                    <span>{city.serviceRadius} كم</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tier 3 Cities - Secondary Cities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-3">
                <CircleDot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">المدن الثانوية</h2>
                <p className="text-gray-600">تغطية متنامية</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {tier3Cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/saudi/${city.slug}`}
                  className="group bg-purple-50 border border-purple-100 rounded-lg p-3 hover:shadow-md hover:border-purple-300 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-3 h-3 text-purple-600" />
                    <h3 className="font-bold text-sm text-gray-900 group-hover:text-primary-600 transition-colors">
                      {city.name_ar}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-500">{city.region}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regions Overview */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              المناطق الإدارية المغطاة
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {regions.map((region, idx) => {
                const citiesInRegion = CITIES_GEOCODE.filter((c) => c.region === region);
                return (
                  <div
                    key={idx}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{region}</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {citiesInRegion.length} {citiesInRegion.length === 1 ? 'مدينة' : 'مدن'}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {citiesInRegion.map((city) => (
                        <Link
                          key={city.slug}
                          href={`/saudi/${city.slug}`}
                          className="text-xs bg-gray-100 hover:bg-primary-100 hover:text-primary-700 text-gray-700 px-3 py-1 rounded-full transition-colors"
                        >
                          {city.name_ar}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Coverage Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
              تفاصيل شاملة عن نطاق خدماتنا
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16">
              معلومات مفصلة عن تغطيتنا في جميع أنحاء المملكة
            </p>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8 mb-12">
              <p className="text-xl">
                منذ تأسيس <strong className="text-primary-600">بروكر</strong>، كان هدفنا الرئيسي هو توفير خدمات منزلية احترافية لكل أسرة ومنشأة في المملكة العربية السعودية، بغض النظر عن موقعها الجغرافي. اليوم، نفخر بأننا نغطي <Link href="/saudi" className="text-primary-600 font-semibold hover:underline">أكثر من 40 مدينة سعودية</Link> عبر 13 منطقة إدارية، مما يجعلنا واحدة من أكبر منصات الخدمات المنزلية في المملكة من حيث التغطية الجغرافية.
              </p>

              <p className="text-xl">
                لا تقتصر تغطيتنا على المدن الكبرى فقط. بينما نوفر <Link href="/emergency" className="text-primary-600 font-semibold hover:underline">خدمة طوارئ 24/7</Link> في المدن الرئيسية مثل <Link href="/saudi/riyadh" className="text-primary-600 font-semibold hover:underline">الرياض</Link>، <Link href="/saudi/jeddah" className="text-primary-600 font-semibold hover:underline">جدة</Link>، و<Link href="/saudi/dammam" className="text-primary-600 font-semibold hover:underline">الدمام</Link>، نمتد تغطيتنا لتشمل مدن إقليمية وثانوية في جميع أنحاء المملكة. هذا التنوع في التغطية يضمن حصول الجميع على خدمات منزلية عالية الجودة، سواء كنت في قلب العاصمة أو في مدينة صغيرة بالمنطقة الشمالية.
              </p>

              <p className="text-xl">
                تغطيتنا الشاملة ليست مجرد أرقام - إنها التزام حقيقي بخدمة المجتمع السعودي. في كل مدينة نعمل فيها، لدينا شبكة من <Link href="/providers" className="text-primary-600 font-semibold hover:underline">مقدمي الخدمات المعتمدين</Link> والمدربين على أعلى المعايير. هذا يضمن أن تحصل على نفس الجودة والاحترافية سواء طلبت خدمة <Link href="/services/cleaning" className="text-primary-600 font-semibold hover:underline">تنظيف</Link> في الرياض أو خدمة <Link href="/services/ac" className="text-primary-600 font-semibold hover:underline">صيانة تكييف</Link> في تبوك.
              </p>
            </div>

            {/* Service Response Times */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">المدن الرئيسية</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">30-60</div>
                <div className="text-gray-700 mb-4">دقيقة للطوارئ</div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  استجابة فورية في الرياض، جدة، الدمام، مكة، والمدينة
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">🚗</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">المدن الإقليمية</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">1-2</div>
                <div className="text-gray-700 mb-4">ساعة للوصول</div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  خدمة سريعة في الطائف، حائل، جازان، تبوك، وباقي المدن المتوسطة
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">📅</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">المدن الثانوية</h3>
                <div className="text-4xl font-bold text-purple-600 mb-2">24</div>
                <div className="text-gray-700 mb-4">ساعة أو بالموعد</div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  خدمة موثوقة ومخططة في جميع المدن الأخرى
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Expand Coverage */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
              كيف نوسع نطاق خدماتنا؟
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16">
              استراتيجية مدروسة للوصول إلى كل بيت في المملكة
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-6 bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex-shrink-0 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">دراسة احتياجات السوق</h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    نبدأ بدراسة شاملة للطلب على الخدمات في كل منطقة. نحلل بيانات البحث، نستمع لطلبات العملاء، ونقيّم الفجوات في السوق. هذا يساعدنا على تحديد أولوياتنا للتوسع بناءً على احتياجات حقيقية وليس مجرد توسع عشوائي.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    عندما نرى طلباً متزايداً على <Link href="/services" className="text-primary-600 font-semibold hover:underline">خدماتنا</Link> من مدينة معينة، نبدأ فوراً في التحضير لتوفير تغطية كاملة في تلك المدينة. هدفنا ليس مجرد الوجود، بل تقديم خدمة استثنائية تلبي وتتجاوز توقعات العملاء.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex-shrink-0 w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">البحث عن الشركاء المحليين</h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    نحن نؤمن بأن <Link href="/providers" className="text-green-600 font-semibold hover:underline">مقدمي الخدمات المحليين</Link> هم الأفضل في فهم احتياجات مدينتهم. لذلك، نسعى للشراكة مع أفضل مقدمي الخدمات في كل منطقة - أولئك الذين لديهم خبرة واسعة، سمعة ممتازة، والتزام حقيقي بالجودة.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    عملية اختيار الشركاء صارمة. نتحقق من التراخيص، نفحص الخبرة، ونقيّم جودة العمل. فقط الأفضل يصبحون جزءاً من عائلة بروكر. هذا يضمن أن عملاءنا يحصلون على خدمة استثنائية من محترفين موثوقين في كل مدينة.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">التدريب على معاييرنا</h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    حتى الفنيون ذوو الخبرة الواسعة يخضعون لبرنامج تدريبي شامل قبل البدء بالعمل مع عملائنا. نعلمهم معاييرنا في الجودة، أفضل الممارسات في خدمة العملاء، واستخدام نظامنا الإلكتروني. التدريب ليس مجرد إجراء شكلي - إنه استثمار في جودة الخدمة.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    نوفر تدريباً مستمراً على أحدث التقنيات والمعدات، خاصة في <Link href="/services/leaks-plumbing" className="text-blue-600 font-semibold hover:underline">كشف التسربات</Link>، <Link href="/services/electrical" className="text-blue-600 font-semibold hover:underline">الكهرباء</Link>، و<Link href="/services/ac" className="text-blue-600 font-semibold hover:underline">التكييف</Link>. هذا يضمن أن شركاءنا دائماً في طليعة مجالهم.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex-shrink-0 w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">الإطلاق التدريجي والمراقبة</h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    لا نطلق خدماتنا في مدينة جديدة دفعة واحدة. نبدأ تدريجياً، نراقب الجودة عن كثب، ونجمع آراء العملاء. هذا النهج يساعدنا على تحديد أي مشاكل مبكراً وحلها قبل التوسع الكامل.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    نظام <Link href="/about" className="text-purple-600 font-semibold hover:underline">مراقبة الجودة</Link> لدينا يتتبع كل طلب، كل تقييم، وكل تعليق. إذا لاحظنا أي انخفاض في الجودة، نتدخل فوراً. رضا العملاء ليس خياراً - إنه أولويتنا القصوى في كل مدينة نعمل فيها.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
              فوائد تغطيتنا الواسعة
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16">
              لماذا تعتبر تغطيتنا الشاملة ميزة حقيقية لك
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-8">
                <div className="text-5xl mb-6 text-center">🏠</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">خدمة محلية بمعايير وطنية</h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  عندما تطلب خدمة من بروكر، تحصل على مزيج مثالي: مقدم خدمة محلي يعرف منطقتك جيداً، مدعوم بمعايير جودة وطنية صارمة. لا تضحي بالجودة من أجل الخدمة المحلية - احصل على الاثنين معاً.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  هذا يعني وصول أسرع، فهم أفضل لاحتياجاتك المحلية، والتزام بمعايير بروكر العالية في كل خدمة نقدمها. سواء كنت تحتاج <Link href="/services/moving" className="text-blue-600 font-semibold hover:underline">نقل عفش</Link> أو <Link href="/services/pest-control" className="text-blue-600 font-semibold hover:underline">مكافحة حشرات</Link>، ستحصل على نفس الجودة الاستثنائية.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-2xl p-8">
                <div className="text-5xl mb-6 text-center">💰</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">أسعار عادلة في كل مكان</h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  نفهم أن تكاليف المعيشة والعمل تختلف من مدينة لأخرى. لذلك، <Link href="/pricing" className="text-green-600 font-semibold hover:underline">أسعارنا</Link> مصممة لتكون عادلة ومنافسة في كل سوق محلي. لا نطبق أسعار الرياض على مدينة صغيرة، ولا نفرض رسوماً إضافية غير مبررة.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  الشفافية هي أساس تسعيرنا. تحصل على عرض سعر واضح قبل البدء، بدون رسوم خفية. وبفضل <Link href="/deals" className="text-green-600 font-semibold hover:underline">عروضنا الخاصة</Link>، يمكنك الحصول على خصومات رائعة على خدمات عالية الجودة في أي مدينة.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 rounded-2xl p-8">
                <div className="text-5xl mb-6 text-center">📱</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">نظام موحد سهل الاستخدام</h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  سواء كنت تطلب خدمة في الرياض أو في مدينة صغيرة، تستخدم نفس النظام البسيط والفعال. نفس الموقع، نفس التطبيق، نفس طريقة الحجز. هذا يعني أنك لا تحتاج لتعلم نظام جديد أو التعامل مع منصة مختلفة في كل مرة تنتقل لمدينة أخرى.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  نظام الحجز لدينا متاح 24/7، يدعم الدفع الإلكتروني الآمن، ويتيح لك متابعة طلبك في الوقت الفعلي. كل هذا في واجهة بسيطة وسهلة الاستخدام حتى لغير المتخصصين في التقنية.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-2xl p-8">
                <div className="text-5xl mb-6 text-center">🛡️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">ضمان موحد وحماية شاملة</h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  <Link href="/about" className="text-orange-600 font-semibold hover:underline">ضماننا المكتوب</Link> ساري في جميع المدن التي نخدمها. لا فرق بين عميل في العاصمة وعميل في مدينة صغيرة - الجميع يحصل على نفس الحماية والضمانات. إذا لم تكن راضياً، نحل المشكلة أو نسترد أموالك.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  فريق <Link href="/contact" className="text-orange-600 font-semibold hover:underline">خدمة العملاء</Link> المتخصص لدينا متاح للجميع بنفس المستوى من الدعم. رقم واحد، نظام شكاوى موحد، وحلول سريعة بغض النظر عن موقعك.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Expansion Plans */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
              خططنا للتوسع المستقبلي
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              رؤيتنا للوصول إلى كل منزل في المملكة
            </p>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6 mb-12">
              <p className="text-xl">
                هدفنا طموح لكنه واقعي: الوصول إلى <strong className="text-primary-600">100+ مدينة وقرية</strong> في المملكة خلال السنوات القليلة القادمة. نعمل حالياً على توسيع تغطيتنا لتشمل مدن جديدة في المنطقة الشمالية، الجنوبية، والوسطى. كل شهر، نضيف 2-3 مدن جديدة لشبكتنا.
              </p>

              <p className="text-xl">
                لكن التوسع ليس مجرد أرقام بالنسبة لنا. نحن نريد أن نكون حاضرين بشكل فعال ومؤثر في كل مدينة. هذا يعني بناء فريق محلي قوي، فهم احتياجات المجتمع المحلي، والالتزام بنفس معايير الجودة العالية التي جعلت بروكر الخيار الأول للعملاء في المدن التي نخدمها حالياً.
              </p>

              <p className="text-xl">
                نستثمر بشكل مستمر في البنية التحتية التقنية، تدريب الشركاء، وتطوير <Link href="/services" className="text-primary-600 font-semibold hover:underline">خدماتنا</Link> لنضمن أننا جاهزون للنمو السريع مع الحفاظ على الجودة. إذا كانت مدينتك غير مدرجة حالياً، فهناك احتمال كبير أن نصل إليها قريباً. <Link href="/contact" className="text-primary-600 font-semibold hover:underline">أخبرنا عن اهتمامك</Link> وسنعطي الأولوية للمدن التي يرغب عملاؤنا في خدمتها!
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-r-4 border-primary-600 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="text-6xl">🚀</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">مدينتك القادمة؟</h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    إذا كانت مدينتك غير مدرجة في قائمتنا الحالية، لا تقلق! نحن نضيف مدن جديدة باستمرار. اتصل بنا وأخبرنا عن اهتمامك - قد نكون قادرين على خدمتك حتى قبل الإدراج الرسمي، أو يمكننا وضع مدينتك في قائمة الأولويات للتوسع القادم.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-bold">
                      <span>اقترح مدينتك</span>
                      <span>←</span>
                    </Link>
                    <Link href="/faqs" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors font-bold">
                      <span>أسئلة شائعة</span>
                      <span>←</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-7xl mb-6">🗺️</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">هل تبحث عن خدمة في مدينتك؟</h2>
            <p className="text-2xl text-white/90 mb-10 leading-relaxed">
              اختر مدينتك من القائمة أعلاه واستعرض جميع <Link href="/services" className="text-yellow-300 font-bold hover:underline">الخدمات المتاحة</Link>. نحن هنا لخدمتك أينما كنت!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/saudi"
                className="px-12 py-5 bg-white text-primary-600 hover:bg-gray-100 rounded-xl font-bold text-xl transition-all shadow-2xl transform hover:scale-105"
              >
                تصفح جميع المدن
              </Link>
              <Link
                href="/services"
                className="px-12 py-5 bg-yellow-400 text-gray-900 hover:bg-yellow-300 rounded-xl font-bold text-xl transition-all shadow-2xl transform hover:scale-105"
              >
                جميع الخدمات
              </Link>
              <Link
                href="/coverage"
                className="px-12 py-5 bg-primary-700 hover:bg-primary-800 border-2 border-white/30 rounded-xl font-bold text-xl transition-all shadow-2xl transform hover:scale-105"
              >
                تفاصيل التغطية
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 text-primary-100 text-lg">
              <div className="flex items-center gap-2">
                <span className="text-3xl">✅</span>
                <span>40+ مدينة</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl">⚡</span>
                <span>استجابة سريعة</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl">🏆</span>
                <span>جودة موحدة</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

