import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICES } from '@/data/services';
import { getTier1Cities } from '@/data/cities';
import { CitySelector } from '@/components/CitySelector';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQ } from '@/components/FAQ';
import { TrustBadges } from '@/components/TrustBadges';
import { REVALIDATE_DEFAULT } from '@/lib/constants';
import type { Metadata } from 'next';

export const revalidate = REVALIDATE_DEFAULT;

interface PageProps {
  params: {
    service: string;
    subservice: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = SERVICES.find((s) => s.slug === params.service);
  const subservice = service?.subservices.find((ss) => ss.slug === params.subservice);

  if (!service || !subservice) {
    return {
      title: 'الخدمة غير موجودة | بروكر',
    };
  }

  return {
    title: `${subservice.name_ar} - ${service.name_ar} | في جميع مدن السعودية | بروكر`,
    description: `احصل على خدمة ${subservice.name_ar} المتخصصة في جميع أنحاء المملكة. فريق محترف معتمد وأسعار تنافسية. اختر مدينتك واحجز الآن.`,
    openGraph: {
      title: `${subservice.name_ar} في السعودية`,
      description: `خدمة ${subservice.name_ar} احترافية في جميع مدن المملكة`,
      type: 'website',
    },
  };
}

export async function generateStaticParams() {
  const params: { service: string; subservice: string }[] = [];

  for (const service of SERVICES) {
    for (const subservice of service.subservices) {
      params.push({
        service: service.slug,
        subservice: subservice.slug,
      });
    }
  }

  return params;
}

export default function SubserviceHubPage({ params }: PageProps) {
  const service = SERVICES.find((s) => s.slug === params.service);
  const subservice = service?.subservices.find((ss) => ss.slug === params.subservice);

  if (!service || !subservice) {
    notFound();
  }

  const tier1Cities = getTier1Cities();

  const breadcrumbs = [
    { label: 'الرئيسية', href: '/' },
    { label: 'الخدمات', href: '/services' },
    { label: service.name_ar, href: `/services/${service.slug}` },
    { label: subservice.name_ar, href: `/services/${service.slug}/${subservice.slug}` },
  ];

  // Get service-specific image
  const getServiceImage = (serviceSlug: string, subserviceSlug: string): string => {
    // Try to find specific image for subservice
    const imageMap: Record<string, string> = {
      'moving-apartment-moving': '/images/moving/apartment-movers.jpg',
      'moving-villa-moving': '/images/moving/villa-moving-service.jpg',
      'moving-office-moving': '/images/moving/office-moving-services.jpg',
      'moving-furniture-packing': '/images/moving/furniture-packing-service.jpg',
      'cleaning-deep-cleaning': '/images/cleaning/deep-cleaning-Jeddah.jpg',
      'cleaning-hourly-cleaning': '/images/cleaning/hourly-maid-service.jpg',
      'cleaning-tank-cleaning': '/images/cleaning/water-tank-cleaning-Saudi-Arabia.jpg',
      'pest-control-general-spray': '/images/pest-control/pest-control-services-Saudi-Arabia.jpg',
      'leaks-plumbing-thermal-leak-detection': '/images/leaks-plumbing/water-leak-detection.jpg',
      'ac-split-ac-cleaning': '/images/ac/AC-cleaning-and-maintenance.jpg',
    };

    const key = `${serviceSlug}-${subserviceSlug}`;
    return imageMap[key] || '/images/cleaning/professional-cleaning-company.jpg';
  };

  // FAQs for subservice
  const subserviceFAQs = [
    {
      q: `ما هي المدن التي تغطيها خدمة ${subservice.name_ar}؟`,
      a: `نغطي أكثر من 45 مدينة في المملكة، بما في ذلك جميع المدن الرئيسية. اختر مدينتك من القائمة أدناه.`,
    },
    {
      q: `كم تستغرق خدمة ${subservice.name_ar}؟`,
      a: 'المدة تعتمد على حجم العمل والمتطلبات المحددة. سيقوم فريقنا بتقييم دقيق وإعطائك تقديراً للوقت.',
    },
    {
      q: 'ما هي تكلفة الخدمة؟',
      a: 'التكلفة تختلف حسب المدينة وحجم العمل. اختر مدينتك للحصول على عرض سعر مخصص.',
    },
    {
      q: 'هل يوجد ضمان على الخدمة؟',
      a: 'نعم، جميع خدماتنا مضمونة بضمان مكتوب. مدة الضمان تختلف حسب نوع الخدمة.',
    },
    {
      q: 'كيف يمكنني الحجز؟',
      a: 'اختر مدينتك من القائمة أدناه، أو اتصل بنا مباشرة عبر الهاتف أو واتساب.',
    },
  ];

  // Related subservices
  const relatedSubservices = service.subservices.filter(
    (ss) => ss.slug !== subservice.slug
  ).slice(0, 6);

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
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 md:py-20">
            {/* Left Content */}
            <div className="text-center lg:text-right">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <span className="text-3xl">⭐</span>
                <span className="font-bold text-lg">خدمة متخصصة</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {subservice.name_ar}
                <span className="block text-yellow-300 mt-2 text-3xl md:text-4xl">
                  في جميع أنحاء المملكة
                </span>
              </h1>

              <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                خدمة {subservice.name_ar} احترافية ومتخصصة • متوفرة في +45 مدينة
              </p>

              {/* Quick Info */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold text-yellow-300 mb-1">45+</div>
                  <div className="text-xs text-primary-100">مدينة</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold text-yellow-300 mb-1">100%</div>
                  <div className="text-xs text-primary-100">مضمون</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold text-yellow-300 mb-1">24/7</div>
                  <div className="text-xs text-primary-100">متاح</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
                <a
                  href="#choose-city"
                  className="px-8 py-4 bg-white text-primary-600 rounded-xl hover:bg-gray-100 transition-all font-bold text-lg shadow-2xl transform hover:scale-105"
                >
                  اختر مدينتك
                </a>
                <a
                  href="tel:+966500000000"
                  className="px-8 py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all font-bold text-lg shadow-2xl transform hover:scale-105"
                >
                  📞 اتصل الآن
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div>
              <div className="relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={getServiceImage(service.slug, subservice.slug)}
                  alt={subservice.name_ar}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 right-6 left-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl">
                  <div className="text-xl font-bold text-primary-600 mb-1">
                    {subservice.name_ar}
                  </div>
                  <div className="text-gray-900 text-sm">{service.name_ar}</div>
                </div>
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

      {/* Quick City Access */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">وصول سريع - المدن الرئيسية</h2>
            <p className="text-lg text-gray-600">اضغط على مدينتك للحصول على الخدمة مباشرة</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {tier1Cities.map((city) => (
              <Link
                key={city.slug}
                href={`/saudi/${city.slug}/${service.slug}/${subservice.slug}`}
                className="block p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 group"
              >
                <div className="text-center">
                  <div className="text-4xl mb-2">📍</div>
                  <h3 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {city.name_ar}
                  </h3>
                  <div className="mt-2 text-xs text-primary-600 group-hover:underline">
                    اطلب الآن ←
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              ما يمكنك توقعه من خدمة {subservice.name_ar}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">فريق متخصص</h3>
                  <p className="text-gray-700">فنيون مدربون على {subservice.name_ar} خصيصاً</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">استجابة سريعة</h3>
                  <p className="text-gray-700">نصل إليك في أقرب وقت ممكن</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">ضمان مكتوب</h3>
                  <p className="text-gray-700">جميع أعمالنا مضمونة بشكل كامل</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">أسعار واضحة</h3>
                  <p className="text-gray-700">لا رسوم خفية، كل شيء شفاف</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Subservices */}
      {relatedSubservices.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                خدمات {service.name_ar} الأخرى
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedSubservices.map((ss) => (
                  <Link
                    key={ss.slug}
                    href={`/services/${service.slug}/${ss.slug}`}
                    className="block p-6 bg-white rounded-xl hover:shadow-lg transition-all group"
                  >
                    <h3 className="font-bold text-gray-900 group-hover:text-primary-600 mb-2 transition-colors">
                      {ss.name_ar}
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

      {/* City Selector */}
      <section id="choose-city" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">اختر مدينتك</h2>
              <p className="text-xl text-gray-600">
                ابحث عن مدينتك واطلب خدمة {subservice.name_ar} الآن
              </p>
            </div>

            <CitySelector
              serviceSlug={service.slug}
              subserviceSlug={subservice.slug}
              variant="grid"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              الأسئلة الشائعة
            </h2>
            <FAQ faqs={subserviceFAQs} />
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            جاهز لطلب خدمة {subservice.name_ar}؟
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            اختر مدينتك الآن أو اتصل بنا مباشرة
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

