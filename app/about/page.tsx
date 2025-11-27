import { generateMetadata as genMetadata } from '@/lib/seo';
import { PHONE, REVALIDATE_DEFAULT } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import { IMAGE_CACHE_VERSION } from '@/lib/images';

export const revalidate = REVALIDATE_DEFAULT;

export const metadata = genMetadata({
  title: 'من نحن | بروكر - منصة الخدمات المنزلية الأولى في السعودية',
  description:
    'بروكر هي المنصة الرائدة لربط العملاء بمقدمي الخدمات المنزلية المعتمدين في جميع أنحاء المملكة. نضمن الجودة والاحترافية والأسعار الواضحة.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className={`absolute inset-0 bg-[url('/images/cleaning/home-cleaning-Riyadh.jpg?v=${IMAGE_CACHE_VERSION}')] bg-cover bg-center`} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 md:py-24">
            {/* Left Content */}
            <div className="text-center lg:text-right">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <span className="text-3xl">🏆</span>
                <span className="font-bold text-lg">المنصة الأولى في المملكة</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                من نحن؟
                <span className="block text-yellow-300 mt-2">بروكر</span>
              </h1>

              <p className="text-2xl text-primary-100 mb-8 leading-relaxed">
                نربط العملاء بأفضل مقدمي الخدمات المنزلية المعتمدين في جميع أنحاء المملكة
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
                <Link
                  href="/services"
                  className="px-10 py-5 bg-white text-primary-600 rounded-xl hover:bg-gray-100 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
                >
                  تصفح خدماتنا
                </Link>
                <Link
                  href="/contact"
                  className="px-10 py-5 bg-yellow-400 text-gray-900 rounded-xl hover:bg-yellow-300 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
                >
                  اتصل بنا
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div>
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={`/images/cleaning/professional-cleaning-company.jpg?v=${IMAGE_CACHE_VERSION}`}
                  alt="من نحن - بروكر"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary-600 mb-2">45+</div>
              <div className="text-gray-700 font-medium">مدينة مغطاة</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary-600 mb-2">14</div>
              <div className="text-gray-700 font-medium">خدمة رئيسية</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary-600 mb-2">100+</div>
              <div className="text-gray-700 font-medium">خدمة فرعية</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-gray-700 font-medium">خدمة طوارئ</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
              قصتنا
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p className="text-xl">
                بدأت <span className="font-bold text-primary-600">بروكر</span> من رؤية بسيطة: جعل الوصول إلى الخدمات المنزلية الاحترافية أمراً سهلاً وموثوقاً لكل أسرة في المملكة العربية السعودية.
              </p>

              <p className="text-xl">
                لاحظنا التحديات التي يواجهها الناس عند البحث عن خدمات منزلية موثوقة - من صعوبة العثور على مقدمي خدمات معتمدين، إلى عدم وضوح الأسعار، وطول فترات الانتظار. قررنا أن نغير هذا الواقع.
              </p>

              <p className="text-xl">
                اليوم، <span className="font-bold text-primary-600">بروكر</span> هي المنصة الرائدة التي تربط العملاء بشبكة واسعة من مقدمي الخدمات المعتمدين والمدربين في أكثر من 45 مدينة سعودية، نقدم 14 خدمة رئيسية تشمل أكثر من 100 خدمة فرعية متخصصة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
              قيمنا
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Value 1 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-4xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">الجودة</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  نضمن أعلى معايير الجودة من خلال اختيار دقيق لمقدمي الخدمات وتقييم مستمر لأدائهم
                </p>
              </div>

              {/* Value 2 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-4xl">💎</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">الشفافية</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  أسعار واضحة ومعلنة مسبقاً، لا مفاجآت، لا رسوم خفية، كل شيء واضح منذ البداية
                </p>
              </div>

              {/* Value 3 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-4xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">السرعة</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  استجابة سريعة لطلباتك، فريق متاح 24/7، ووصول مقدمي الخدمات في الوقت المحدد
                </p>
              </div>

              {/* Value 4 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-4xl">🛡️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">الضمان</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  ضمان مكتوب على جميع خدماتنا، راحة بالك هي أولويتنا القصوى
                </p>
              </div>

              {/* Value 5 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-4xl">👥</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">الاحترافية</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  فنيون مدربون ومعتمدون، يلتزمون بأعلى معايير الاحترافية والأخلاقيات
                </p>
              </div>

              {/* Value 6 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-4xl">📱</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">التكنولوجيا</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  منصة سهلة الاستخدام، حجز إلكتروني، تتبع الطلبات، وتواصل مباشر مع مقدمي الخدمات
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
              كيف نعمل؟
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">فحص دقيق لمقدمي الخدمات</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    نختار مقدمي الخدمات بعناية فائقة. كل مقدم خدمة يمر بعملية فحص شاملة تشمل التحقق من الخبرة، المؤهلات، السجل الجنائي، والتراخيص اللازمة. نرفض أكثر من 70% من المتقدمين لضمان أعلى معايير الجودة. بعد القبول، نوفر تدريباً مستمراً على أفضل الممارسات ومعايير الخدمة العالية. نتابع أداء كل مقدم خدمة بانتظام ونجري تقييمات دورية لضمان استمرارية الجودة.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">ربط ذكي بين العملاء والمزودين</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    عندما تطلب خدمة، تقنيتنا المتطورة تربطك تلقائياً بأفضل مقدم خدمة متاح في منطقتك. نأخذ في الاعتبار عدة عوامل: القرب الجغرافي، التقييمات السابقة، التخصص في نوع الخدمة المطلوبة، والتوفر الفوري. هذا يضمن لك الحصول على أفضل خدمة ممكنة في أسرع وقت. نظامنا يراقب كل طلب لحظة بلحظة ويتدخل فوراً إذا حدثت أي مشكلة. هدفنا هو توفير تجربة سلسة من البداية للنهاية.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">تنفيذ احترافي مع ضمان الجودة</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    مقدم الخدمة يصل في الموعد المحدد، مجهز بكل المعدات اللازمة. أثناء تنفيذ الخدمة، نتابع معك ومع مقدم الخدمة لضمان سير كل شيء بسلاسة. نوفر خط اتصال مباشر بفريق الدعم لأي استفسار أو مشكلة. بعد إتمام الخدمة، نتواصل معك للتأكد من رضاك الكامل. نطلب تقييمك الصادق الذي يساعدنا على التحسين المستمر. كل خدمة مغطاة بضمان مكتوب نلتزم به كاملاً، وإذا حدثت أي مشكلة، نحلها فوراً ومجاناً.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">متابعة ما بعد الخدمة وضمان الرضا</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    علاقتنا معك لا تنتهي بإتمام الخدمة. نتابع معك خلال 24-48 ساعة للتأكد من رضاك واستمرار جودة الخدمة. إذا ظهرت أي مشكلة، نتعامل معها فوراً بدون تكلفة إضافية. نحتفظ بسجل كامل لجميع خدماتك معنا لتوفير خدمة أفضل في المرات القادمة. عملاؤنا الدائمون يحصلون على مزايا إضافية وأولوية في الحجز. نستمع لملاحظاتك واقتراحاتك ونستخدمها لتحسين خدماتنا باستمرار. رضاك التام هو معيار نجاحنا الحقيقي.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Coverage */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
              تغطيتنا الشاملة في المملكة
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12 leading-relaxed max-w-3xl mx-auto">
              نفخر بتقديم خدماتنا في أكثر من 45 مدينة سعودية، من أكبر المدن إلى المدن الصغيرة. أينما كنت في المملكة، بروكر معك.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-primary-600 mb-4">المدن الرئيسية (Tier 1)</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  نوفر خدمة شاملة ومتكاملة في المدن الكبرى بما في ذلك الرياض، جدة، مكة المكرمة، المدينة المنورة، والدمام. في هذه المدن، لدينا فرق متعددة ومعدات كاملة وقدرة على الاستجابة الفورية حتى للطلبات العاجلة. نغطي جميع أحياء هذه المدن دون استثناء، ونوفر خدمة طوارئ 24/7 طوال أيام الأسبوع. عملاؤنا في المدن الرئيسية يحصلون على وقت استجابة أقل من 60 دقيقة في معظم الحالات.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-primary-600 mb-4">المدن الثانوية والصغيرة</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  نحن لا نقتصر على المدن الكبرى فقط. نخدم أيضاً المدن المتوسطة والصغيرة في جميع مناطق المملكة. رؤيتنا هي جعل الخدمات المنزلية الاحترافية متاحة للجميع، بغض النظر عن موقعهم. في كل مدينة، نعمل مع مقدمي خدمات محليين يعرفون المنطقة جيداً ويفهمون احتياجاتها الخاصة. نفس المعايير العالية للجودة والاحترافية تطبق في كل مكان نخدمه.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">التوسع المستمر</h3>
              <p className="text-gray-700 text-lg text-center leading-relaxed">
                نعمل باستمرار على توسيع تغطيتنا لتشمل مدناً جديدة. خطتنا هي الوصول إلى 100+ مدينة سعودية خلال السنوات القادمة. إذا كانت مدينتك غير مغطاة حالياً، ترقب ذلك قريباً! يمكنك التسجيل في قائمة الانتظار لنخبرك فور توفر خدماتنا في منطقتك. توسعنا مبني على احتياجات عملائنا واقتراحاتهم، لذا صوتك مهم في تحديد وجهتنا التالية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
              لماذا تختار بروكر؟
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">مقدمو خدمات معتمدون</h3>
                  <p className="text-gray-700">
                    جميع مقدمي الخدمات لدينا يخضعون لعملية فحص دقيقة وتقييم مستمر
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">أسعار تنافسية</h3>
                  <p className="text-gray-700">
                    نقدم أفضل الأسعار في السوق مع الحفاظ على أعلى معايير الجودة
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">تغطية شاملة</h3>
                  <p className="text-gray-700">
                    نخدم أكثر من 45 مدينة في جميع مناطق المملكة العربية السعودية
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">خدمة عملاء متميزة</h3>
                  <p className="text-gray-700">
                    فريق دعم متاح على مدار الساعة للإجابة على استفساراتك وحل مشاكلك
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">حجز سهل وسريع</h3>
                  <p className="text-gray-700">
                    احجز خدمتك بنقرات قليلة، واحصل على تأكيد فوري، وتتبع طلبك مباشرة
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">ضمان الرضا</h3>
                  <p className="text-gray-700">
                    إذا لم تكن راضياً عن الخدمة، نعيد تنفيذها مجاناً أو نسترد أموالك
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team & Expertise */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                فريق عمل متخصص واحترافي
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                نفخر بفريقنا المتكامل من الخبراء والمختصين في مجال الخدمات المنزلية
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all">
                <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-lg">
                  500+
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">فني معتمد</h3>
                <p className="text-gray-700 leading-relaxed">
                  شبكة واسعة من الفنيين المدربين والمعتمدين في <Link href="/services/moving" className="text-primary-600 font-semibold hover:underline">نقل العفش</Link>، <Link href="/services/cleaning" className="text-primary-600 font-semibold hover:underline">التنظيف</Link>، <Link href="/services/ac" className="text-primary-600 font-semibold hover:underline">صيانة المكيفات</Link>، وجميع الخدمات الأخرى
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-lg">
                  50+
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">مشرف جودة</h3>
                <p className="text-gray-700 leading-relaxed">
                  فريق متخصص لمراقبة الجودة ومتابعة الخدمات في <Link href="/saudi/riyadh" className="text-primary-600 font-semibold hover:underline">الرياض</Link>، <Link href="/saudi/jeddah" className="text-primary-600 font-semibold hover:underline">جدة</Link>، <Link href="/saudi/makkah" className="text-primary-600 font-semibold hover:underline">مكة</Link> وجميع المدن
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all">
                <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-lg">
                  30+
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">خبير خدمة عملاء</h3>
                <p className="text-gray-700 leading-relaxed">
                  فريق دعم متاح <Link href="/emergency" className="text-primary-600 font-semibold hover:underline">24/7</Link> للرد على استفساراتك وحل أي مشاكل فوراً في أي وقت
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-lg">
                  20+
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">مدير عمليات</h3>
                <p className="text-gray-700 leading-relaxed">
                  إدارة محترفة لتنسيق الخدمات وضمان سير العمل بسلاسة في جميع <Link href="/coverage" className="text-primary-600 font-semibold hover:underline">المناطق المغطاة</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements & Certifications */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                إنجازاتنا وشهاداتنا
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نفخر بالاعتراف والتقدير الذي حصلنا عليه من عملائنا والجهات الرسمية
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="text-6xl flex-shrink-0">🏆</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">جوائز وتقديرات</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-primary-600 font-bold text-xl">✓</span>
                        <span>جائزة أفضل منصة خدمات منزلية في المملكة 2023</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-600 font-bold text-xl">✓</span>
                        <span>شهادة التميز في خدمة العملاء</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-600 font-bold text-xl">✓</span>
                        <span>تصنيف 5 نجوم من أكثر من 10,000 عميل</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-600 font-bold text-xl">✓</span>
                        <span>معدل رضا 98% من العملاء</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="text-6xl flex-shrink-0">📜</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">تراخيص واعتمادات</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-primary-600 font-bold text-xl">✓</span>
                        <span>مرخص من وزارة التجارة السعودية</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-600 font-bold text-xl">✓</span>
                        <span>معتمد من الهيئة السعودية للمواصفات والمقاييس</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-600 font-bold text-xl">✓</span>
                        <span>شهادات ISO في الجودة والسلامة</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-600 font-bold text-xl">✓</span>
                        <span>تأمين شامل على جميع الخدمات</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">شهادات العملاء</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl p-6">
                    <div className="text-5xl font-bold text-primary-600 mb-2">10,000+</div>
                    <div className="text-gray-700 font-medium">عميل راضٍ</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                    <div className="text-5xl font-bold text-green-600 mb-2">98%</div>
                    <div className="text-gray-700 font-medium">معدل الرضا</div>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6">
                    <div className="text-5xl font-bold text-yellow-600 mb-2">4.9/5</div>
                    <div className="text-gray-700 font-medium">التقييم العام</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                خدماتنا الشاملة
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                نقدم مجموعة متكاملة من الخدمات المنزلية لتلبية جميع احتياجاتك
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group bg-gradient-to-br from-blue-50 to-primary-50 rounded-xl p-6 hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">🚚</div>
                <Link href="/services/moving">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 hover:underline">نقل العفش</h3>
                </Link>
                <p className="text-gray-700 text-sm mb-3">خدمة نقل احترافية مع التغليف والفك والتركيب في جميع مدن المملكة</p>
                <div className="flex flex-wrap gap-2">
                  <Link href="/deals/moving/riyadh" className="text-xs px-3 py-1 bg-red-100 text-red-700 rounded-full hover:bg-red-200">عروض</Link>
                  <Link href="/pricing/moving/riyadh" className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200">أسعار</Link>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">✨</div>
                <Link href="/services/cleaning">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 hover:underline">التنظيف</h3>
                </Link>
                <p className="text-gray-700 text-sm mb-3">تنظيف شامل ومتخصص للمنازل والفلل والمكاتب مع مواد آمنة</p>
                <div className="flex flex-wrap gap-2">
                  <Link href="/deals/cleaning/jeddah" className="text-xs px-3 py-1 bg-red-100 text-red-700 rounded-full hover:bg-red-200">عروض</Link>
                  <Link href="/faq/cleaning/riyadh" className="text-xs px-3 py-1 bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200">أسئلة</Link>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">❄️</div>
                <Link href="/services/ac">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 hover:underline">صيانة المكيفات</h3>
                </Link>
                <p className="text-gray-700 text-sm mb-3">صيانة وإصلاح جميع أنواع المكيفات بأسعار تنافسية</p>
                <div className="flex flex-wrap gap-2">
                  <Link href="/deals/ac/riyadh" className="text-xs px-3 py-1 bg-red-100 text-red-700 rounded-full hover:bg-red-200">عروض</Link>
                  <Link href="/emergency/ac/riyadh" className="text-xs px-3 py-1 bg-red-800 text-white rounded-full hover:bg-red-900">طوارئ</Link>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">💧</div>
                <Link href="/services/leaks-plumbing">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 hover:underline">كشف التسربات</h3>
                </Link>
                <p className="text-gray-700 text-sm mb-3">كشف تسربات المياه بأحدث الأجهزة الإلكترونية بدون تكسير</p>
                <div className="flex flex-wrap gap-2">
                  <Link href="/pricing/leaks-plumbing/riyadh" className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200">أسعار</Link>
                  <Link href="/emergency/leaks-plumbing/dammam" className="text-xs px-3 py-1 bg-red-800 text-white rounded-full hover:bg-red-900">طوارئ</Link>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">🐜</div>
                <Link href="/services/pest-control">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 hover:underline">مكافحة الحشرات</h3>
                </Link>
                <p className="text-gray-700 text-sm mb-3">مكافحة شاملة لجميع أنواع الحشرات بمواد آمنة ومعتمدة</p>
                <div className="flex flex-wrap gap-2">
                  <Link href="/deals/pest-control/jeddah" className="text-xs px-3 py-1 bg-red-100 text-red-700 rounded-full hover:bg-red-200">عروض</Link>
                  <Link href="/faq/pest-control/riyadh" className="text-xs px-3 py-1 bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200">أسئلة</Link>
                </div>
              </div>

              <Link href="/services" className="group bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-6 hover:shadow-xl transition-all flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">+9</div>
                  <div className="text-lg font-bold text-gray-900">خدمات أخرى</div>
                  <div className="text-sm text-gray-600 mt-2">تصفح جميع الخدمات →</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                قصص نجاح عملائنا
              </h2>
              <p className="text-xl text-gray-600">
                اكتشف كيف ساعدنا عملاءنا في الحصول على أفضل الخدمات
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  &ldquo;استخدمت <Link href="/services/moving" className="text-primary-600 font-semibold hover:underline">خدمة نقل العفش</Link> من بروكر عند انتقالي من <Link href="/saudi/riyadh" className="text-primary-600 font-semibold hover:underline">الرياض</Link> إلى <Link href="/saudi/jeddah" className="text-primary-600 font-semibold hover:underline">جدة</Link>. الفريق كان محترف جداً والأثاث وصل بحالة ممتازة. أنصح بشدة!&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center text-2xl">
                    👨‍💼
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">أحمد العتيبي</div>
                    <div className="text-sm text-gray-600">الرياض</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  &ldquo;حصلت على <Link href="/services/cleaning/deep" className="text-primary-600 font-semibold hover:underline">تنظيف عميق</Link> للفيلا وكانت النتيجة فوق التوقعات! استفدت من <Link href="/deals/cleaning/jeddah" className="text-primary-600 font-semibold hover:underline">عرض 25% خصم</Link>. خدمة رائعة وسعر ممتاز.&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center text-2xl">
                    👩‍💼
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">فاطمة الغامدي</div>
                    <div className="text-sm text-gray-600">جدة</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  &ldquo;كان لدي <Link href="/services/leaks-plumbing" className="text-primary-600 font-semibold hover:underline">تسرب مياه</Link> في منتصف الليل. استخدمت <Link href="/emergency/leaks-plumbing/dammam" className="text-primary-600 font-semibold hover:underline">خدمة الطوارئ 24/7</Link> ووصلوا خلال 20 دقيقة! احترافية عالية.&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center text-2xl">
                    👨‍💼
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">خالد المطيري</div>
                    <div className="text-sm text-gray-600">الدمام</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision & Future */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                رؤيتنا للمستقبل
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                نعمل باستمرار لنكون الخيار الأول والأفضل للخدمات المنزلية في المملكة والمنطقة
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 هدفنا</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  نسعى لتغطية جميع مدن المملكة بحلول 2025، مع إضافة 50+ مدينة جديدة. نعمل على تطوير خدماتنا باستمرار لتشمل المزيد من التخصصات. هدفنا هو أن نصبح الشريك الموثوق لكل أسرة سعودية في جميع احتياجاتها المنزلية. نستثمر في التكنولوجيا والتدريب لضمان أعلى مستويات الجودة والكفاءة.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🌱 مسؤوليتنا الاجتماعية</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  نؤمن بدورنا في خدمة المجتمع. نوفر فرص عمل لمئات الأسر السعودية ونستثمر في تدريب وتأهيل الشباب. نستخدم مواد صديقة للبيئة في جميع خدماتنا، ونساهم في برامج خيرية لدعم الأسر المحتاجة. نشارك في مبادرات توعوية حول أهمية الصيانة الدورية والحفاظ على البيئة.
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🚀 التطوير المستمر</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  نستثمر بشكل مستمر في أحدث التقنيات والمعدات. فريقنا يخضع لتدريبات دورية على أحدث الأساليب والمعايير العالمية. نستمع لملاحظات عملائنا ونستخدمها في تحسين خدماتنا. نعمل على تطوير تطبيق جوال متقدم لتسهيل الحجز والمتابعة. هدفنا هو تقديم تجربة متميزة تتجاوز توقعات عملائنا.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-7xl mb-6">🚀</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              جاهز للبدء معنا؟
            </h2>
            <p className="text-2xl text-primary-100 mb-8 leading-relaxed">
              انضم إلى آلاف العملاء الراضين واكتشف كيف يمكننا مساعدتك في الحصول على خدمات منزلية احترافية بسهولة وثقة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/services"
                className="px-12 py-5 bg-white text-primary-600 rounded-xl hover:bg-gray-100 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
              >
                تصفح الخدمات
              </Link>
              <Link
                href="/saudi"
                className="px-12 py-5 bg-yellow-400 text-gray-900 rounded-xl hover:bg-yellow-300 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
              >
                اختر مدينتك
              </Link>
              <a
                href={`tel:${PHONE}`}
                className="px-12 py-5 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
              >
                اتصل الآن
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 text-primary-100">
              <div className="flex items-center gap-2">
                <span className="text-3xl">✅</span>
                <span className="text-lg">10,000+ عميل راضٍ</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl">⚡</span>
                <span className="text-lg">استجابة فورية</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl">🏆</span>
                <span className="text-lg">جودة مضمونة</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

