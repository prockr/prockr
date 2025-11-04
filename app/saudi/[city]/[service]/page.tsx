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
import { composeServiceCityContent } from '@/lib/content';
import { servicePath, subservicePath } from '@/lib/urls';
import { getGalleryImages, getHeroImage } from '@/lib/images';
import { REVALIDATE_DEFAULT } from '@/lib/constants';
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';
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
    generateServiceSchema({
      serviceName: service.name_ar,
      serviceType: service.name_ar,
      cityName: city.name_ar,
      description: content.meta,
    }),
    generateFAQSchema(content.faqs),
    generateBreadcrumbSchema(breadcrumbs),
  ];

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
