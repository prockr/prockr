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

