import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { CITIES } from '@/data/cities';
import { SERVICES } from '@/data/services';
import { PriceTable } from '@/components/PriceTable';
import { FAQ } from '@/components/FAQ';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CTASticky } from '@/components/CTASticky';
import { SchemaInjector } from '@/components/SchemaInjector';
import { TrustBadges } from '@/components/TrustBadges';
import { Gallery } from '@/components/Gallery';
// // import { InteractiveMap } from '@/components/InteractiveMap';
import { LocationDetector } from '@/components/LocationDetector';
import { RichContentSections } from '@/components/RichContentSections';
import { composeServiceCityContent } from '@/lib/content';
import { generateRichContent } from '@/lib/rich-content';
import { servicePath, subservicePath } from '@/lib/urls';
import { getGalleryImages, getHeroImage } from '@/lib/images';
import { REVALIDATE_DEFAULT } from '@/lib/constants';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';
import { generateServiceSchemaWithGeo, generateLocalBusinessSchema } from '@/lib/schema-geo';
import { getServiceAvailabilityText, getNearbyCities } from '@/lib/geocoding';
import type { Metadata } from 'next';

export const revalidate = REVALIDATE_DEFAULT;

interface PageProps {
  params: {
    city: string;
    service: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const city = CITIES.find((c) => c.slug === params.city);
  const service = SERVICES.find((s) => s.slug === params.service);

  if (!city || !service) {
    return {
      title: 'الصفحة غير موجودة | بروكر',
      description: 'الصفحة المطلوبة غير موجودة',
    };
  }

  return {
    title: `خدمة ${service.name_ar} في ${city.name_ar} | بروكر`,
    description: `احصل على أفضل خدمة ${service.name_ar} في ${city.name_ar}. فريق معتمد وضمان مكتوب وأسعار تنافسية.`,
    alternates: {
      canonical: `https://prokr.com/saudi/${params.city}/${params.service}`,
    },
    openGraph: {
      title: `خدمة ${service.name_ar} في ${city.name_ar}`,
      description: `أفضل ${service.name_ar} في ${city.name_ar}`,
      type: 'website',
    },
  };
}

export async function generateStaticParams() {
  const params: { city: string; service: string }[] = [];

  // Generate for top cities × services
  const topCities = CITIES.filter((c) => c.tier === 1);
  
  for (const city of topCities) {
    for (const service of SERVICES) {
      params.push({
        city: city.slug,
        service: service.slug,
      });
    }
  }

  return params;
}

export default function ServiceCityPage({ params }: PageProps) {
  const city = CITIES.find((c) => c.slug === params.city);
  const service = SERVICES.find((s) => s.slug === params.service);

  if (!city || !service) {
    notFound();
  }

  const content = composeServiceCityContent({ city, service });

  const breadcrumbs = [
    { label: 'الرئيسية', href: '/' },
    { label: 'المملكة', href: '/saudi' },
    { label: city.name_ar, href: `/saudi/${city.slug}` },
    { label: service.name_ar, href: servicePath(city.slug, service.slug) },
  ];

  const schemas = [
    generateServiceSchemaWithGeo(service, city),
    generateLocalBusinessSchema(city),
    generateFAQSchema(content.faqs),
    generateBreadcrumbSchema(breadcrumbs),
  ];

  const nearbyCities = getNearbyCities(city.slug, 5);
  const serviceAvailability = getServiceAvailabilityText(city.slug);
  const richContent = generateRichContent({ city, service });

  return (
    <div className="min-h-screen">
      <SchemaInjector schemas={schemas} />
      <CTASticky />

      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-12 md:py-20 overflow-hidden">
        {/* Hero Image Background */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src={getHeroImage(service.slug, 0)}
            alt={service.name_ar}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {content.h1}
              </h1>
              <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                {content.intro}
              </p>
              
              {/* Quick Actions */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="#pricing"
                  className="px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg shadow-xl"
                >
                  اطلع على الأسعار
                </a>
                <a
                  href="#faq"
                  className="px-8 py-4 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-300 transition-colors font-bold text-lg shadow-xl"
                >
                  أسئلة شائعة
                </a>
                <a
                  href="tel:+966500000000"
                  className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-bold text-lg shadow-xl"
                >
                  اتصل الآن
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hidden lg:block">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <Image
                  src={getHeroImage(service.slug, 0)}
                  alt={`خدمة ${service.name_ar} في ${city.name_ar}`}
                  fill
                  className="object-cover"
                  priority
                  quality={90}
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
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

      {/* Location Detector */}
      <section className="py-6 bg-gray-50">
        <div className="container mx-auto px-4">
          <LocationDetector showPrompt={false} />
        </div>
      </section>

      {/* Detailed Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              خدمة {service.name_ar} الاحترافية في {city.name_ar}
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p className="text-xl">
                تشتهر <span className="font-bold text-primary-600">{city.name_ar}</span> بكونها واحدة من أهم المدن في المملكة العربية السعودية، ولذلك فإن الحصول على خدمات منزلية احترافية أمر بالغ الأهمية. في <span className="font-bold text-primary-600">بروكر</span>، نفخر بتقديم أفضل خدمات {service.name_ar} في {city.name_ar} مع فريق محلي متخصص يفهم احتياجات سكان المدينة.
              </p>

              <p className="text-xl">
                سواء كنت تبحث عن {service.name_ar} لمنزلك، مكتبك، أو منشأتك التجارية في {city.name_ar}، فإن فريقنا جاهز لخدمتك على مدار الساعة. نحن نعمل مع أفضل المتخصصين المحليين والمعتمدين، ونضمن لك جودة الخدمة وسرعة الاستجابة.
              </p>

              <p className="text-xl">
                ما يميزنا في {city.name_ar} هو معرفتنا العميقة بطبيعة المدينة ومناخها وخصوصية احتياجات سكانها. كل خدمة نقدمها مصممة خصيصاً لتناسب ظروف {city.name_ar} ومتطلباتها الفريدة. فريقنا المحلي متواجد في جميع أحياء {city.name_ar} لضمان سرعة الوصول إليك.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us in This City */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              لماذا نحن الخيار الأول لـ{service.name_ar} في {city.name_ar}؟
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              مزايا لن تجدها في أي مكان آخر
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-3xl mb-6 mx-auto">
                  🏆
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">فريق محلي متخصص</h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  فريقنا في {city.name_ar} يتكون من أفضل المتخصصين المحليين الذين يعرفون المدينة جيداً ويفهمون احتياجاتها الخاصة. نحن نعيش هنا ونعمل هنا ونفخر بخدمة مجتمعنا.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl mb-6 mx-auto">
                  ⚡
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">استجابة فورية</h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  بفضل تواجدنا القوي في جميع أحياء {city.name_ar}، نستطيع الوصول إليك في أسرع وقت ممكن. نحن نعد بالاستجابة خلال ساعات قليلة، وفي حالات الطوارئ نصل خلال دقائق.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl mb-6 mx-auto">
                  💰
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">أسعار خاصة لأهل {city.name_ar}</h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  نقدم باقات وعروض خاصة لسكان {city.name_ar}، مع أسعار تنافسية ومرونة في الدفع. لا توجد رسوم خفية، وكل شيء واضح ومكتوب.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-3xl mb-6 mx-auto">
                  🛡️
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">ضمان شامل</h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  نقدم ضماناً مكتوباً على جميع خدماتنا في {city.name_ar}. إذا لم تكن راضياً تماماً، نعود ونصلح أي مشكلة دون أي تكلفة إضافية.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-3xl mb-6 mx-auto">
                  🔧
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">معدات متطورة</h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  نستخدم أحدث المعدات والتقنيات في تقديم خدمات {service.name_ar}. جميع أدواتنا معتمدة ويتم صيانتها بانتظام لضمان أفضل النتائج.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-3xl mb-6 mx-auto">
                  📞
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">دعم مستمر</h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  فريق خدمة العملاء متاح 24/7 للرد على استفساراتك وحل أي مشكلة قد تواجهك. نحن دائماً على بعد مكالمة هاتفية أو رسالة واحدة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work in City */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              كيف نعمل في {city.name_ar}؟
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              عملية بسيطة وسريعة من البداية حتى النهاية
            </p>

            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-200 via-primary-400 to-primary-600 transform -translate-x-1/2"></div>

              {/* Step 1 */}
              <div className="relative mb-12 lg:mb-16">
                <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                  <div className="lg:text-left text-center mb-6 lg:mb-0">
                    <div className="inline-block lg:ml-auto">
                      <div className="bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4 mx-auto lg:mx-0">
                        1
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">اتصل أو احجز أونلاين</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        اتصل بنا على الرقم الموحد أو احجز عبر الموقع أو تطبيق واتساب. فريقنا في {city.name_ar} متاح على مدار الساعة لاستقبال طلبك وتحديد موعد مناسب لك.
                      </p>
                    </div>
                  </div>
                  <div className="hidden lg:block"></div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative mb-12 lg:mb-16">
                <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                  <div className="hidden lg:block"></div>
                  <div className="lg:text-right text-center mb-6 lg:mb-0">
                    <div className="inline-block lg:mr-auto">
                      <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4 mx-auto lg:mx-0">
                        2
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">زيارة الفريق المتخصص</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        يصل فريقنا المتخصص إلى موقعك في {city.name_ar} في الوقت المحدد. نقوم بمعاينة شاملة وتقييم دقيق للعمل المطلوب، ونقدم لك عرض سعر واضح ومفصل.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative mb-12 lg:mb-16">
                <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                  <div className="lg:text-left text-center mb-6 lg:mb-0">
                    <div className="inline-block lg:ml-auto">
                      <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4 mx-auto lg:mx-0">
                        3
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">تنفيذ الخدمة بمهنية</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        بعد موافقتك، نبدأ العمل فوراً باستخدام أفضل المعدات والمواد. نلتزم بأعلى معايير الجودة والسلامة، ونحافظ على نظافة مكان العمل طوال فترة التنفيذ.
                      </p>
                    </div>
                  </div>
                  <div className="hidden lg:block"></div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                  <div className="hidden lg:block"></div>
                  <div className="lg:text-right text-center">
                    <div className="inline-block lg:mr-auto">
                      <div className="bg-yellow-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4 mx-auto lg:mx-0">
                        4
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">التسليم والمتابعة</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        بعد إنهاء العمل، نقوم بمراجعة شاملة معك للتأكد من رضاك التام. نسلمك شهادة ضمان مكتوبة ونبقى على تواصل معك للمتابعة وتقديم الدعم المستمر.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* City Specific Tips */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              نصائح خاصة بـ{service.name_ar} في {city.name_ar}
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              إرشادات من خبرائنا المحليين
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-2xl">
                    🌡️
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">توقيت الخدمة المناسب</h3>
                    <p className="text-gray-700 leading-relaxed">
                      في {city.name_ar}، نوصي بتنسيق خدمات {service.name_ar} مع الأخذ بعين الاعتبار طبيعة مناخ المدينة والأوقات المناسبة للعمل. فريقنا سيرشدك لاختيار أفضل توقيت لضمان نتائج مثالية ومستدامة.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                    🏠
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">خصوصية المنازل في {city.name_ar}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      نحن نفهم طبيعة المباني والمنازل في {city.name_ar}. سواء كانت فيلا، شقة، أو منشأة تجارية، لدينا الخبرة والمعرفة اللازمة للتعامل مع كل نوع بشكل احترافي وفعال.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                    ⏰
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">الصيانة الدورية</h3>
                    <p className="text-gray-700 leading-relaxed">
                      بسبب الظروف المناخية الخاصة في {city.name_ar}، نوصي بشدة بإجراء صيانة دورية لـ{service.name_ar}. نقدم برامج صيانة سنوية بأسعار تفضيلية لسكان المدينة.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-2xl">
                    📍
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">تغطية شاملة للأحياء</h3>
                    <p className="text-gray-700 leading-relaxed">
                      نغطي جميع أحياء {city.name_ar} دون استثناء. بغض النظر عن موقعك في المدينة، فريقنا يصل إليك بسرعة ويقدم نفس مستوى الخدمة الممتاز.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-white rounded-xl shadow-lg p-8 border-r-4 border-primary-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">💡</span>
                نصيحة خاصة لأهل {city.name_ar}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                استفد من العروض الخاصة التي نقدمها لسكان {city.name_ar}. اشترك في برنامج الولاء الخاص بنا واحصل على خصومات دائمة على جميع خدمات {service.name_ar} والخدمات الأخرى. كلما استخدمت خدماتنا أكثر، كلما حصلت على مزايا أكبر!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            لماذا تختارنا؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {content.valueProps.map((prop, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-900 font-medium">{prop}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              ما يشمله العرض
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.included.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-900">{item}</span>
                </div>
              ))}
            </div>

            {content.addons.length > 0 && (
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  خدمات إضافية
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {content.addons.map((addon, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                      <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      <span className="text-gray-900">{addon}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              الأسعار التقريبية
            </h2>
            <p className="text-gray-600 text-center mb-8">
              الأسعار قد تختلف حسب حجم العمل والمتطلبات
            </p>
            <PriceTable rows={content.priceRows} />
            <div className="mt-6 text-center">
              <Link
                href={`/pricing/${service.slug}/${city.slug}`}
                className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-bold"
              >
                احصل على تسعيرة دقيقة
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Example */}
      {content.example && (
        <section className="py-12 bg-primary-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                مثال واقعي
              </h2>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">💡</div>
                  <div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {content.example}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section id="faq" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              الأسئلة الشائعة
            </h2>
            <FAQ faqs={content.faqs} />
            <div className="mt-8 text-center">
              <Link
                href={`/faq/${service.slug}/${city.slug}`}
                className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-bold"
              >
                المزيد من الأسئلة
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              معرض الصور - {service.name_ar}
            </h2>
            <Gallery images={getGalleryImages(service.slug).map(src => ({ src, alt: `${service.name_ar} - صورة` }))} />
          </div>
        </div>
      </section>

      {/* Interactive Map & Service Area */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              نطاق الخدمة في {city.name_ar}
            </h2>
            <p className="text-center text-gray-600 mb-8">
              {serviceAvailability}
            </p>
            
            {/* Temporarily disabled until Google Maps API key is fixed */}
            {/* <div className="mb-12">
              <InteractiveMap 
                citySlug={city.slug} 
                height="500px" 
                showServiceRadius={true}
                showNearbyCities={true}
              />
            </div> */}

            {/* Nearby Cities */}
            {nearbyCities.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  خدماتنا متاحة أيضاً في المدن القريبة
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {nearbyCities.map((nearbyCity) => (
                    <Link
                      key={nearbyCity.slug}
                      href={`/saudi/${nearbyCity.slug}/${service.slug}`}
                      className="group bg-gray-50 hover:bg-primary-50 border border-gray-200 hover:border-primary-300 rounded-lg p-4 transition-all duration-300"
                    >
                      <div className="text-center">
                        <div className="font-bold text-gray-900 group-hover:text-primary-600 mb-1">
                          {nearbyCity.name_ar}
                        </div>
                        <div className="text-xs text-gray-500">
                          {nearbyCity.region}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Subservices */}
      {service.subservices.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                خدمات {service.name_ar} المتخصصة
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {service.subservices.map((sub) => (
                  <Link
                    key={sub.slug}
                    href={subservicePath(city.slug, service.slug, sub.slug)}
                    className="block p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow group"
                  >
                    <h3 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
                      {sub.name_ar}
                    </h3>
                    <span className="text-sm text-primary-600 group-hover:underline">
                      اعرف المزيد ←
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Rich Content Sections */}
      <RichContentSections 
        content={richContent} 
        serviceName={service.name_ar} 
        cityName={city.name_ar} 
      />

      {/* CTA Bottom */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            جاهز لطلب الخدمة؟
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            اتصل بنا الآن واحصل على خدمة احترافية في {city.name_ar}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+966500000000"
              className="px-10 py-5 bg-white text-primary-600 rounded-xl hover:bg-gray-100 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
            >
              📞 اتصل الآن
            </a>
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all font-bold text-xl shadow-2xl transform hover:scale-105"
            >
              💬 واتساب
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
