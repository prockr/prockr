import { generateMetadata as genMetadata } from '@/lib/seo';
import { REVALIDATE_DEFAULT, PHONE, WHATSAPP } from '@/lib/constants';
import Image from 'next/image';

export const revalidate = REVALIDATE_DEFAULT;

export const metadata = genMetadata({
  title: 'مقدمي الخدمات | انضم إلى شبكة بروكر | شريكك في النجاح',
  description:
    'انضم إلى شبكة بروكر واحصل على المزيد من العملاء. نربطك بآلاف العملاء الباحثين عن خدمات منزلية احترافية في جميع أنحاء المملكة. فرص نمو غير محدودة.',
  path: '/providers',
});

export default function ProvidersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(45deg, white 25%, transparent 25%, transparent 75%, white 75%, white), linear-gradient(45deg, white 25%, transparent 25%, transparent 75%, white 75%, white)',
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 30px 30px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 md:py-24">
            {/* Left Content */}
            <div className="text-center lg:text-right">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <span className="text-3xl">🤝</span>
                <span className="font-bold text-lg">انضم لشبكة النجاح</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                كن شريكنا
                <span className="block text-yellow-300 mt-2">في النجاح</span>
        </h1>

              <p className="text-2xl text-green-100 mb-8 leading-relaxed">
                انضم إلى أكبر منصة للخدمات المنزلية في المملكة وضاعف دخلك
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-4xl font-bold text-yellow-300 mb-1">45+</div>
                  <div className="text-sm text-green-100">مدينة</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-4xl font-bold text-yellow-300 mb-1">1000+</div>
                  <div className="text-sm text-green-100">شريك</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-4xl font-bold text-yellow-300 mb-1">24/7</div>
                  <div className="text-sm text-green-100">طلبات</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
                <a
                  href={`tel:${PHONE}`}
                  className="px-10 py-5 bg-white text-green-700 rounded-xl hover:bg-gray-100 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
                >
                  اتصل الآن
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP}?text=أرغب في الانضمام كمقدم خدمة`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-yellow-400 text-gray-900 rounded-xl hover:bg-yellow-300 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
                >
                  واتساب
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div>
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/cleaning/professional-cleaning-company.jpg"
                  alt="انضم إلى شبكة بروكر"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent" />
                <div className="absolute bottom-6 right-6 left-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl">
                  <div className="text-2xl font-bold text-green-600 mb-2">فرصة النمو</div>
                  <div className="text-gray-900">انضم لآلاف الشركاء الناجحين</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              لماذا بروكر هو الخيار الأمثل لنمو أعمالك؟
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p className="text-xl">
                في عصر التحول الرقمي، أصبحت المنصات الإلكترونية هي المكان الأول الذي يلجأ إليه العملاء للبحث عن الخدمات. <span className="font-bold text-primary-600">بروكر</span> هي المنصة الرائدة للخدمات المنزلية في المملكة العربية السعودية، حيث نربط مقدمي الخدمات المحترفين بآلاف العملاء الذين يبحثون عن خدمات عالية الجودة كل يوم.
              </p>

              <p className="text-xl">
                عندما تنضم إلى شبكة بروكر، أنت لا تنضم فقط إلى منصة إلكترونية - بل تصبح جزءاً من عائلة كبيرة من الشركاء الناجحين الذين يشتركون في نفس الرؤية: تقديم خدمات منزلية احترافية ذات جودة عالية للعملاء في جميع أنحاء المملكة.
              </p>

              <p className="text-xl">
                نحن نوفر لك البنية التحتية الكاملة للنجاح: من التسويق والترويج إلى إدارة العملاء والدفع الإلكتروني. كل ما عليك فعله هو التركيز على ما تجيده - تقديم خدمات استثنائية لعملائك.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              مزايا الانضمام إلى بروكر
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              نوفر لك كل ما تحتاجه لتنمية أعمالك ومضاعفة دخلك
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Benefit 1 */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-4xl mb-6 mx-auto">
                  👥
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  آلاف العملاء المحتملين
                </h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  احصل على طلبات خدمة يومية من عملاء حقيقيين يبحثون عن خدماتك في منطقتك. نحن نوصل طلبات العملاء إليك مباشرة دون أي وسيط.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-4xl mb-6 mx-auto">
                  📱
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  تسويق مجاني لخدماتك
                </h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  نستثمر آلاف الريالات شهرياً في التسويق الرقمي وتحسين محركات البحث. عملاؤنا يجدوننا أولاً، وأنت تستفيد من ذلك مباشرة.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-4xl mb-6 mx-auto">
                  ⭐
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  بناء سمعة قوية
                </h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  نظام تقييمات احترافي يساعدك على بناء سمعة ممتازة. العملاء الراضون يتركون تقييمات إيجابية تجلب لك المزيد من العملاء.
                </p>
              </div>

              {/* Benefit 4 */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-4xl mb-6 mx-auto">
                  💰
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  زيادة الدخل
                </h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  شركاؤنا يشهدون زيادة في دخلهم تصل إلى 300% خلال الأشهر الستة الأولى من الانضمام. المزيد من الطلبات = المزيد من الدخل.
                </p>
              </div>

              {/* Benefit 5 */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-4xl mb-6 mx-auto">
                  🎯
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  دعم فني وتسويقي
                </h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  فريق الدعم لدينا متاح دائماً لمساعدتك. نوفر تدريب مجاني، مواد تسويقية، وإرشادات للنجاح.
                </p>
              </div>

              {/* Benefit 6 */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-4xl mb-6 mx-auto">
                  📊
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  إدارة سهلة للطلبات
                </h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  نظام إدارة متطور يساعدك على تتبع طلباتك، إدارة مواعيدك، والتواصل مع العملاء بسهولة من خلال لوحة تحكم واحدة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              كيف يعمل النظام؟
            </h2>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute right-1/2 top-0 bottom-0 w-1 bg-primary-200 hidden lg:block" style={{transform: 'translateX(50%)'}}></div>

              {/* Step 1 */}
              <div className="mb-12 lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                <div className="bg-primary-50 rounded-xl p-8 lg:text-left text-center order-1">
                  <div className="inline-block w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">التسجيل والتقييم</h3>
                  <p className="text-gray-700 leading-relaxed">
                    قدم طلبك عبر الهاتف أو واتساب. نقوم بمراجعة معلوماتك والتأكد من استيفاء المعايير المطلوبة. نحن نبحث عن مقدمي خدمات محترفين ملتزمين بالجودة.
                  </p>
                </div>
                <div className="order-2"></div>
              </div>

              {/* Step 2 */}
              <div className="mb-12 lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                <div className="order-2"></div>
                <div className="bg-green-50 rounded-xl p-8 text-center lg:text-right order-1 lg:order-3">
                  <div className="inline-block w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">التدريب والإعداد</h3>
                  <p className="text-gray-700 leading-relaxed">
                    نوفر لك تدريباً شاملاً على استخدام المنصة، معايير الجودة المطلوبة، وأفضل الممارسات للتعامل مع العملاء. نضمن أنك جاهز تماماً قبل استلام أول طلب.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="mb-12 lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                <div className="bg-blue-50 rounded-xl p-8 lg:text-left text-center order-1">
                  <div className="inline-block w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">استلام الطلبات</h3>
                  <p className="text-gray-700 leading-relaxed">
                    بمجرد تفعيل حسابك، تبدأ بتلقي طلبات الخدمة من العملاء في منطقتك. اختر الطلبات التي تناسب جدولك وموقعك، وابدأ العمل مباشرة.
                  </p>
                </div>
                <div className="order-2"></div>
              </div>

              {/* Step 4 */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                <div className="order-2"></div>
                <div className="bg-yellow-50 rounded-xl p-8 text-center lg:text-right order-1 lg:order-3">
                  <div className="inline-block w-12 h-12 bg-yellow-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    4
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">تقديم الخدمة والدفع</h3>
                  <p className="text-gray-700 leading-relaxed">
                    قدم خدمتك بأعلى جودة، واحصل على تقييم العميل. نحن نتعامل مع كل الأمور المالية ونضمن حصولك على أجرك بسرعة وأمان.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              متطلبات الانضمام
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              نسعى للعمل مع أفضل مقدمي الخدمات في المملكة
            </p>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">خبرة مثبتة</h3>
                    <p className="text-gray-700">
                      خبرة لا تقل عن سنتين في مجال الخدمات المنزلية. نبحث عن محترفين يفهمون احتياجات العملاء ويقدمون خدمات عالية الجودة.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">سجل تجاري ساري</h3>
                    <p className="text-gray-700">
                      سجل تجاري نشط وساري المفعول. هذا يضمن للعملاء أنهم يتعاملون مع جهة معتمدة ورسمية.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">تأمين وترخيص</h3>
                    <p className="text-gray-700">
                      تأمين ضد المسؤولية وجميع التراخيص اللازمة لنوع الخدمة التي تقدمها. سلامة عملائنا هي أولويتنا.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">معدات وأدوات احترافية</h3>
                    <p className="text-gray-700">
                      امتلاك جميع المعدات والأدوات اللازمة لتقديم خدماتك بأعلى جودة. لا نقبل مقدمي خدمات بمعدات غير كافية.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">التزام بالمواعيد والجودة</h3>
                    <p className="text-gray-700">
                      الالتزام التام بالمواعيد المحددة ومعايير الجودة العالية. سمعتنا تعتمد على رضا العملاء، ونتوقع نفس الالتزام من شركائنا.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">تغطية جغرافية</h3>
                    <p className="text-gray-700">
                      القدرة على تغطية منطقة جغرافية معقولة في مدينتك. نبحث عن شركاء قادرين على الوصول إلى العملاء بسرعة.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services We Need */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              الخدمات التي نبحث عن شركاء فيها
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              نرحب بمقدمي الخدمات في جميع المجالات التالية
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: 'نقل العفش', icon: '🚚' },
                { name: 'التنظيف', icon: '🧹' },
                { name: 'كشف التسربات', icon: '💧' },
                { name: 'مكافحة الحشرات', icon: '🐛' },
                { name: 'التكييف', icon: '❄️' },
                { name: 'الكهرباء', icon: '⚡' },
                { name: 'السباكة', icon: '🔧' },
                { name: 'الدهان', icon: '🎨' },
                { name: 'النجارة', icon: '🪵' },
                { name: 'تنسيق الحدائق', icon: '🌳' },
                { name: 'العزل', icon: '🛡️' },
                { name: 'الديكور', icon: '✨' },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-primary-50 rounded-xl p-6 text-center hover:bg-primary-100 transition-colors"
                >
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <div className="font-bold text-gray-900">{service.name}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-700 text-lg">
                لديك خدمة أخرى غير مدرجة؟ <span className="font-bold">اتصل بنا</span> وسنناقش إمكانية التعاون
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              قصص نجاح شركائنا
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Story 1 */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="text-6xl mb-4 text-center">👨‍🔧</div>
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-gray-900 mb-1">أحمد - الرياض</div>
                  <div className="text-gray-600">خدمات تكييف</div>
                </div>
                <p className="text-gray-700 leading-relaxed text-center italic">
                  &ldquo;انضممت لبروكر قبل 6 أشهر، وزاد دخلي الشهري بنسبة 250%. الآن لدي فريق من 5 فنيين ونستقبل طلبات يومية من المنصة.&rdquo;
                </p>
                <div className="flex justify-center gap-1 mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
              </div>

              {/* Story 2 */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="text-6xl mb-4 text-center">👨‍💼</div>
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-gray-900 mb-1">محمد - جدة</div>
                  <div className="text-gray-600">نقل عفش</div>
                </div>
                <p className="text-gray-700 leading-relaxed text-center italic">
                  &ldquo;كنت أعتمد على التوصيات فقط، لكن مع بروكر أصبح لدي تدفق مستمر من العملاء. أفضل قرار أخذته لتطوير أعمالي.&rdquo;
                </p>
                <div className="flex justify-center gap-1 mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
              </div>

              {/* Story 3 */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="text-6xl mb-4 text-center">👩‍💼</div>
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-gray-900 mb-1">فاطمة - الدمام</div>
                  <div className="text-gray-600">خدمات تنظيف</div>
                </div>
                <p className="text-gray-700 leading-relaxed text-center italic">
                  &ldquo;المنصة سهلة الاستخدام والدعم ممتاز. التقييمات الإيجابية من العملاء ساعدتني في بناء سمعة قوية وجذب المزيد من العملاء.&rdquo;
                </p>
                <div className="flex justify-center gap-1 mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ for Providers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              أسئلة شائعة للشركاء
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: 'كم تستغرق عملية الموافقة على طلبي؟',
                  a: 'عادة ما تستغرق عملية المراجعة والموافقة من 2-5 أيام عمل. نقوم بمراجعة جميع المستندات والتحقق من المعلومات للتأكد من استيفاء جميع المعايير.'
                },
                {
                  q: 'هل هناك رسوم للانضمام؟',
                  a: 'لا توجد رسوم انضمام. نحن نحصل على نسبة صغيرة من كل خدمة تقدمها فقط. هذا يعني أننا ننجح معاً - كلما قدمت خدمات أكثر، ربحنا أكثر.'
                },
                {
                  q: 'كيف أحصل على أموالي؟',
                  a: 'نقوم بتحويل مستحقاتك إلى حسابك البنكي بشكل أسبوعي. يمكنك متابعة أرباحك وسحوباتك من خلال لوحة التحكم الخاصة بك.'
                },
                {
                  q: 'هل يمكنني اختيار الطلبات التي أريد قبولها؟',
                  a: 'نعم، لديك الحرية الكاملة في قبول أو رفض أي طلب. يمكنك تحديد مواعيد عملك، المناطق التي تخدمها، وأنواع الخدمات التي تقدمها.'
                },
                {
                  q: 'ماذا لو حصلت على تقييم سلبي؟',
                  a: 'نفهم أن الأخطاء تحدث. نراجع جميع التقييمات السلبية ونعطيك فرصة للرد. إذا كان هناك سوء فهم، نعمل على حله. التقييمات السلبية المتكررة قد تؤدي إلى تعليق أو إنهاء الشراكة.'
                },
                {
                  q: 'هل توفرون تدريباً؟',
                  a: 'نعم، نوفر تدريباً شاملاً على استخدام المنصة، معايير الخدمة، والتعامل مع العملاء. كما نقدم ورش عمل دورية لتطوير مهارات شركائنا.'
                }
              ].map((faq, index) => (
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

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              جاهز للانضمام؟
            </h2>
            <p className="text-2xl text-green-100 mb-8 leading-relaxed">
              لا تفوت فرصة النمو مع أكبر منصة للخدمات المنزلية في المملكة. تواصل معنا الآن وابدأ رحلة النجاح!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={`tel:${PHONE}`}
                className="px-10 py-5 bg-white text-green-700 rounded-xl hover:bg-gray-100 transition-all font-bold text-xl shadow-2xl transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                اتصل الآن: {PHONE}
              </a>
              
              <a
                href={`https://wa.me/${WHATSAPP}?text=أرغب في الانضمام كمقدم خدمة`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-yellow-400 text-gray-900 rounded-xl hover:bg-yellow-300 transition-all font-bold text-xl shadow-2xl transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                واتساب
              </a>
            </div>

            <div className="text-green-200">
              <p className="mb-2">📧 البريد الإلكتروني: providers@prokr.com</p>
              <p>⏰ نرد على جميع الاستفسارات خلال 24 ساعة</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

