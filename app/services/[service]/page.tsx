import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICES } from '@/data/services';
import { getTier1Cities } from '@/data/cities';
import { CitySelector } from '@/components/CitySelector';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQ } from '@/components/FAQ';
import { TrustBadges } from '@/components/TrustBadges';
import { Gallery } from '@/components/Gallery';
import { getGalleryImages, getAllHeroImages } from '@/lib/images';
import { REVALIDATE_DEFAULT } from '@/lib/constants';
import type { Metadata } from 'next';

export const revalidate = REVALIDATE_DEFAULT;

interface PageProps {
  params: {
    service: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = SERVICES.find((s) => s.slug === params.service);

  if (!service) {
    return {
      title: 'الخدمة غير موجودة | بروكر',
    };
  }

  return {
    title: `خدمة ${service.name_ar} في جميع مدن المملكة | بروكر`,
    description: `احصل على أفضل خدمة ${service.name_ar} في جميع أنحاء المملكة. نغطي +45 مدينة سعودية بفريق معتمد وأسعار تنافسية. اختر مدينتك الآن.`,
    alternates: {
      canonical: `https://prokr.com/services/${params.service}`,
    },
    openGraph: {
      title: `خدمة ${service.name_ar} في السعودية`,
      description: `خدمة ${service.name_ar} احترافية في جميع مدن المملكة`,
      type: 'website',
    },
  };
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    service: service.slug,
  }));
}

export default function ServiceHubPage({ params }: PageProps) {
  const service = SERVICES.find((s) => s.slug === params.service);

  if (!service) {
    notFound();
  }

  const tier1Cities = getTier1Cities();

  const breadcrumbs = [
    { label: 'الرئيسية', href: '/' },
    { label: 'الخدمات', href: '/services' },
    { label: service.name_ar, href: `/services/${service.slug}` },
  ];

  // Get all hero images for the service
  const heroImages = getAllHeroImages(service.slug);
  const galleryImages = getGalleryImages(service.slug);

  // FAQs for service
  const serviceFAQs = [
    {
      q: `ما هي المدن التي تغطيها خدمة ${service.name_ar}؟`,
      a: `نغطي أكثر من 45 مدينة في المملكة، بما في ذلك جميع المدن الرئيسية والثانوية. يمكنك اختيار مدينتك من القائمة أدناه.`,
    },
    {
      q: `كيف يمكنني طلب خدمة ${service.name_ar}؟`,
      a: 'اختر مدينتك من القائمة أدناه، ثم اختر نوع الخدمة المحدد، وسيتواصل معك فريقنا خلال دقائق.',
    },
    {
      q: 'هل الأسعار موحدة في جميع المدن؟',
      a: 'الأسعار قد تختلف قليلاً بين المدن حسب تكاليف التشغيل والمسافات، لكن جميع أسعارنا تنافسية وشفافة.',
    },
    {
      q: 'هل يوجد ضمان على الخدمة؟',
      a: 'نعم، جميع خدماتنا مضمونة بضمان مكتوب يختلف مدته حسب نوع الخدمة.',
    },
    {
      q: 'كم يستغرق وصول الفريق؟',
      a: 'في المدن الرئيسية، نصل خلال 30-60 دقيقة للحالات العاجلة. في المدن الأخرى، خلال 1-2 ساعة حسب الموقع.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 md:py-24">
            {/* Left Content */}
            <div className="text-center lg:text-right">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <span className="text-3xl">🇸🇦</span>
                <span className="font-bold text-lg">متوفر في +45 مدينة</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                خدمة {service.name_ar}
                <span className="block text-yellow-300 mt-2">في جميع أنحاء المملكة</span>
              </h1>

              <p className="text-2xl text-primary-100 mb-8 leading-relaxed">
                فريق محترف • ضمان مكتوب • أسعار واضحة • استجابة سريعة
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-4xl font-bold text-yellow-300 mb-1">45+</div>
                  <div className="text-sm text-primary-100">مدينة</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-4xl font-bold text-yellow-300 mb-1">
                    {service.subservices.length}
                  </div>
                  <div className="text-sm text-primary-100">خدمة فرعية</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-4xl font-bold text-yellow-300 mb-1">24/7</div>
                  <div className="text-sm text-primary-100">متاح دائماً</div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
                <a
                  href="#choose-city"
                  className="px-10 py-5 bg-white text-primary-600 rounded-xl hover:bg-gray-100 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
                >
                  اختر مدينتك
                </a>
                <a
                  href="#subservices"
                  className="px-10 py-5 bg-yellow-400 text-gray-900 rounded-xl hover:bg-yellow-300 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
                >
                  الخدمات المتاحة
                </a>
              </div>
            </div>

            {/* Right Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              {heroImages.slice(0, 4).map((image, idx) => (
                <div
                  key={idx}
                  className={`relative rounded-xl overflow-hidden shadow-xl ${
                    idx === 0 ? 'col-span-2 h-64' : 'h-48'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${service.name_ar} - صورة ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={idx === 0}
                    quality={idx === 0 ? 90 : 85}
                    loading={idx === 0 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <TrustBadges />
        </div>
      </section>

      {/* Service Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              خدمة {service.name_ar} الاحترافية في المملكة
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p className="text-xl">
                تُعد خدمة <span className="font-bold text-primary-600">{service.name_ar}</span> من أهم الخدمات المنزلية التي يحتاجها كل منزل ومنشأة في المملكة العربية السعودية. في <span className="font-bold text-primary-600">بروكر</span>، نفخر بتقديم خدمات {service.name_ar} متكاملة تجمع بين الاحترافية والجودة والأسعار التنافسية.
              </p>

              <p className="text-xl">
                نحن ندرك أن {service.name_ar} ليست مجرد خدمة عابرة، بل هي استثمار في راحتك وسلامة منزلك أو منشأتك. لذلك، نضع معايير صارمة لاختيار وتدريب فريق العمل لدينا، ونستخدم أحدث المعدات والتقنيات لضمان تقديم خدمة تفوق توقعاتك.
              </p>

              <p className="text-xl">
                مع وجودنا في أكثر من 45 مدينة سعودية، أصبح الحصول على خدمة {service.name_ar} احترافية أسهل من أي وقت مضى. سواء كنت في الرياض، جدة، الدمام، مكة المكرمة، المدينة المنورة، أو أي مدينة أخرى في المملكة، فريقنا المحترف جاهز لخدمتك على مدار الساعة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              لماذا تختار بروكر لخدمة {service.name_ar}؟
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              نتميز بمجموعة من المزايا التي تجعلنا الخيار الأول للعملاء
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-4xl mb-6 mx-auto">
                  👨‍🔧
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  فريق محترف معتمد
                </h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  جميع فنيينا مدربون على أعلى المعايير العالمية ومعتمدون بشهادات مهنية. نختار كل عضو في فريقنا بعناية لضمان الكفاءة والاحترافية في تقديم خدمة {service.name_ar}.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-4xl mb-6 mx-auto">
                  ⚡
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  استجابة سريعة
                </h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  نصلك في أسرع وقت ممكن. في المدن الرئيسية نصل خلال 30-60 دقيقة للحالات العاجلة. وقتك ثمين، لذلك نلتزم بالمواعيد ونحترم وقتك.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-4xl mb-6 mx-auto">
                  💰
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  أسعار شفافة ومنافسة
                </h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  لا مفاجآت ولا رسوم خفية. نقدم لك عرض سعر واضح قبل البدء بالعمل. أسعارنا تنافسية ونوفر خصومات وعروض خاصة على مدار العام.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-4xl mb-6 mx-auto">
                  🛡️
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  ضمان شامل
                </h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  نقدم ضمان مكتوب على جميع خدماتنا. إذا لم تكن راضياً تماماً عن الخدمة، نعيد العمل مجاناً أو نسترد أموالك. رضاك هو أولويتنا.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-4xl mb-6 mx-auto">
                  🔧
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  معدات حديثة
                </h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  نستخدم أحدث المعدات والتقنيات في تنفيذ خدمات {service.name_ar}. أدواتنا متطورة وصديقة للبيئة، مما يضمن نتائج ممتازة وآمنة.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-4xl mb-6 mx-auto">
                  🌟
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  خدمة عملاء متميزة
                </h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  فريق خدمة العملاء لدينا متاح 24/7 للرد على استفساراتك وحل أي مشكلة قد تواجهها. نحن نؤمن بأن الدعم الجيد جزء أساسي من الخدمة الممتازة.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              كيف نقدم خدمة {service.name_ar}؟
            </h2>

            <div className="relative">
              {/* Timeline connecting line */}
              <div className="absolute right-1/2 top-0 bottom-0 w-1 bg-primary-200 hidden lg:block" style={{transform: 'translateX(50%)'}}></div>

              {/* Step 1 */}
              <div className="mb-12 lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                <div className="bg-primary-50 rounded-xl p-8 lg:text-left text-center order-1">
                  <div className="inline-block w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">التواصل والحجز</h3>
                  <p className="text-gray-700 leading-relaxed">
                    تواصل معنا عبر الهاتف أو واتساب أو من خلال الموقع. حدد نوع خدمة {service.name_ar} التي تحتاجها ومدينتك، وسنرد عليك خلال دقائق لتأكيد الموعد المناسب لك.
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">المعاينة والتقييم</h3>
                  <p className="text-gray-700 leading-relaxed">
                    نرسل لك فنياً متخصصاً لمعاينة الموقع (إذا لزم الأمر) وتقديم تقييم دقيق لحجم العمل. نقدم لك عرض سعر واضح ومفصل قبل البدء بأي عمل.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="mb-12 lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                <div className="bg-blue-50 rounded-xl p-8 lg:text-left text-center order-1">
                  <div className="inline-block w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">تنفيذ الخدمة</h3>
                  <p className="text-gray-700 leading-relaxed">
                    فريقنا المحترف يبدأ العمل في الموعد المحدد باستخدام أفضل المعدات والمواد. نلتزم بمعايير الجودة العالية ونحرص على نظافة وترتيب الموقع طوال فترة العمل.
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">المراجعة والضمان</h3>
                  <p className="text-gray-700 leading-relaxed">
                    بعد إتمام العمل، نراجع معك النتيجة النهائية للتأكد من رضاك التام. نسلمك شهادة ضمان مكتوبة ونوفر لك خدمة متابعة ما بعد البيع لأي استفسار أو احتياج إضافي.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Cities - Quick Access */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              المدن الرئيسية
            </h2>
            <p className="text-xl text-gray-600">
              وصول سريع للمدن الأكثر طلباً
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {tier1Cities.map((city) => (
              <Link
                key={city.slug}
                href={`/saudi/${city.slug}/${service.slug}`}
                className="block p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 group"
              >
                <div className="text-center">
                  <div className="text-5xl mb-3">🏙️</div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {city.name_ar}
                  </h3>
                  <div className="mt-2 text-sm text-primary-600 group-hover:underline">
                    اطلب الآن ←
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Subservices */}
      <section id="subservices" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                الخدمات المتخصصة
              </h2>
              <p className="text-xl text-gray-600">
                اختر الخدمة المحددة التي تحتاجها
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.subservices.map((sub) => (
                <Link
                  key={sub.slug}
                  href={`/services/${service.slug}/${sub.slug}`}
                  className="block p-6 bg-gray-50 rounded-xl hover:bg-primary-50 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                      <svg
                        className="w-6 h-6 text-primary-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 group-hover:text-primary-600 mb-2 transition-colors">
                        {sub.name_ar}
                      </h3>
                      <span className="text-sm text-primary-600 group-hover:underline">
                        اعرف المزيد ←
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* City Selector */}
      <section id="choose-city" className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                اختر مدينتك
              </h2>
              <p className="text-xl text-gray-600">
                ابحث عن مدينتك واطلب خدمة {service.name_ar} الآن
              </p>
            </div>

            <CitySelector serviceSlug={service.slug} variant="grid" />
          </div>
        </div>
      </section>

      {/* Gallery */}
      {galleryImages.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  معرض صور {service.name_ar}
                </h2>
                <p className="text-xl text-gray-600">
                  شاهد أمثلة من أعمالنا في {service.name_ar}
                </p>
              </div>
              
              <Gallery images={galleryImages.map(src => ({ src, alt: `${service.name_ar} - صورة` }))} />
            </div>
          </div>
        </section>
      )}

      {/* Tips and Advice */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              نصائح وإرشادات مهمة حول {service.name_ar}
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              معلومات قيمة تساعدك في الحصول على أفضل النتائج
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">التوقيت المناسب</h3>
                    <p className="text-gray-700 leading-relaxed">
                      اختر الوقت المناسب لطلب خدمة {service.name_ar}. ننصح بالحجز المسبق خاصة في مواسم الذروة لضمان توفر الفريق في الوقت الذي يناسبك. للحالات العاجلة، خدمة الطوارئ متاحة 24/7.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">التحضير المسبق</h3>
                    <p className="text-gray-700 leading-relaxed">
                      حضر الموقع قبل وصول الفريق بإزالة العوائق وتأمين المتعلقات الشخصية القيمة. هذا يساعد فريقنا على إنجاز العمل بسرعة وكفاءة أكبر، مما يوفر وقتك ومالك.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">التواصل الواضح</h3>
                    <p className="text-gray-700 leading-relaxed">
                      كن واضحاً في وصف احتياجاتك عند الحجز. كلما كانت المعلومات أدق، كلما استطعنا تقديم خدمة أفضل وعرض سعر أدق. لا تتردد في طرح أي أسئلة قبل البدء بالعمل.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">الصيانة الدورية</h3>
                    <p className="text-gray-700 leading-relaxed">
                      للحفاظ على جودة النتائج لفترة أطول، ننصح بجدولة صيانة دورية. نقدم عروضاً خاصة لعقود الصيانة السنوية التي توفر عليك المال وتضمن استمرارية الخدمة الممتازة.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">الجودة قبل السعر</h3>
                    <p className="text-gray-700 leading-relaxed">
                      لا تضحي بالجودة من أجل توفير القليل من المال. خدمة {service.name_ar} الرديئة قد تكلفك أكثر على المدى البعيد. معنا، تحصل على أفضل توازن بين الجودة والسعر.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">استفد من الضمان</h3>
                    <p className="text-gray-700 leading-relaxed">
                      احتفظ بشهادة الضمان التي نقدمها لك. إذا واجهت أي مشكلة خلال فترة الضمان، تواصل معنا فوراً. نحن ملتزمون بحل أي مشكلة بسرعة وكفاءة.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-white rounded-xl shadow-lg p-8 border-r-4 border-primary-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">💡</span>
                نصيحة الخبراء
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                للحصول على أفضل تجربة مع خدمة {service.name_ar}، ننصحك بالتواصل معنا مبكراً لمناقشة احتياجاتك بالتفصيل. فريقنا الاستشاري متاح لتقديم النصائح المجانية وإرشادك لاختيار الحلول الأنسب لحالتك الخاصة. تذكر أن الاستثمار في خدمة جيدة من البداية يوفر عليك الوقت والمال والمتاعب في المستقبل.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                الأسئلة الشائعة
              </h2>
              <p className="text-xl text-gray-600">
                إجابات على أكثر الأسئلة شيوعاً حول {service.name_ar}
              </p>
            </div>

            <FAQ faqs={serviceFAQs} />

            <div className="mt-12 text-center bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                لم تجد إجابة لسؤالك؟
              </h3>
              <p className="text-gray-700 mb-6">
                فريق خدمة العملاء جاهز للإجابة على جميع استفساراتك
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+966500000000"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-bold"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  اتصل بنا
                </a>
                <a
                  href="https://wa.me/966500000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-bold"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  واتساب
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            جاهز لطلب خدمة {service.name_ar}؟
          </h2>
          <p className="text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
            اختر مدينتك الآن واحصل على خدمة احترافية بأفضل الأسعار
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#choose-city"
              className="px-10 py-5 bg-white text-primary-600 rounded-xl hover:bg-gray-100 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
            >
              اختر المدينة
            </a>
            <a
              href="tel:+966500000000"
              className="px-10 py-5 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
            >
              📞 اتصل الآن
            </a>
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-yellow-400 text-gray-900 rounded-xl hover:bg-yellow-300 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
            >
              💬 واتساب
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

