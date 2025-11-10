import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CITIES, getCityBySlug } from '@/data/cities';
import { SERVICES, getServiceBySlug } from '@/data/services';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { generateMetadata as genMetadata, buildBreadcrumbs } from '@/lib/seo';
import { cityPath, servicePath, emergencyPath } from '@/lib/urls';
import { REVALIDATE_DEFAULT, PHONE, WHATSAPP } from '@/lib/constants';

export const revalidate = REVALIDATE_DEFAULT;

export async function generateStaticParams() {
  const params: { service: string; city: string }[] = [];

  // Generate for Tier 1 cities and emergency services only
  const emergencyServices = ['moving', 'leaks-plumbing', 'pest-control', 'ac', 'electricity'];
  
  CITIES.filter((c) => c.tier === 1).forEach((city) => {
    SERVICES.filter((s) => emergencyServices.includes(s.slug)).forEach((service) => {
      params.push({
        service: service.slug,
        city: city.slug,
      });
    });
  });

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { service: string; city: string };
}) {
  const city = getCityBySlug(params.city);
  const service = getServiceBySlug(params.service);

  if (!city || !service) return {};

  return genMetadata({
    title: `خدمة طوارئ ${service.name_ar} 24 ساعة في ${city.name_ar} | استجابة فورية | بروكر`,
    description: `خدمة طوارئ ${service.name_ar} على مدار 24 ساعة في ${city.name_ar}. استجابة فورية في أقل من 30 دقيقة. اتصل الآن للحالات العاجلة.`,
    path: emergencyPath(service.slug, city.slug),
  });
}

export default function EmergencyPage({
  params,
}: {
  params: { service: string; city: string };
}) {
  const city = getCityBySlug(params.city);
  const service = getServiceBySlug(params.service);

  if (!city || !service) {
    notFound();
  }

  const breadcrumbs = buildBreadcrumbs([
    { label: 'السعودية', href: '/saudi' },
    { label: city.name_ar, href: cityPath(city.slug) },
    { label: service.name_ar, href: servicePath(city.slug, service.slug) },
    { label: 'خدمة طوارئ', href: emergencyPath(service.slug, city.slug) },
  ]);

  const emergencyScenarios: Record<string, { title: string; scenarios: string[] }> = {
    moving: {
      title: 'نقل عاجل',
      scenarios: [
        'إخلاء مفاجئ للمنزل',
        'نقل طارئ بسبب ظروف عمل',
        'نقل عاجل في نفس اليوم',
        'إصلاح طارئ يتطلب إخلاء الأثاث',
      ],
    },
    'leaks-plumbing': {
      title: 'تسريبات وسباكة طارئة',
      scenarios: [
        'تسريب مياه شديد',
        'انفجار ماسورة',
        'انسداد مجاري خطير',
        'تسريب يهدد المبنى',
        'فيضان في الحمام أو المطبخ',
      ],
    },
    'pest-control': {
      title: 'مكافحة حشرات طارئة',
      scenarios: [
        'انتشار حشرات مفاجئ',
        'لدغات حشرات خطيرة',
        'غزو نحل أو دبابير',
        'مشكلة قبل مناسبة مهمة',
        'اكتشاف أرضة في المنزل',
      ],
    },
    ac: {
      title: 'تكييف طارئ',
      scenarios: [
        'عطل مكيف في الصيف الحار',
        'توقف تبريد نهائي',
        'تسريب فريون',
        'مشكلة كهربائية خطيرة',
        'أصوات غريبة ومقلقة',
      ],
    },
    electricity: {
      title: 'كهرباء طارئة',
      scenarios: [
        'انقطاع كهرباء كامل',
        'شرارة أو دخان من اللوحة',
        'ماس كهربائي',
        'سخونة شديدة في الأسلاك',
        'عطل كهربائي خطير',
      ],
    },
  };

  const info = emergencyScenarios[service.slug] || {
    title: 'خدمة طوارئ',
    scenarios: ['حالة طارئة تحتاج تدخل فوري'],
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumbs items={breadcrumbs} />

      <div className="max-w-4xl mx-auto">
        {/* Emergency Header */}
        <div className="bg-red-600 text-white rounded-lg p-8 mb-12 text-center">
          <div className="text-6xl mb-4">🚨</div>
          <h1 className="text-4xl font-bold mb-4">
            خدمة طوارئ {service.name_ar} 24 ساعة في {city.name_ar}
          </h1>
          <p className="text-xl mb-8">
            نصلك في أقل من 30 دقيقة
          </p>

          {/* Emergency CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE}`}
              className="flex items-center justify-center gap-2 px-8 py-5 bg-white text-red-600 rounded-lg hover:bg-gray-100 transition-colors font-bold text-xl shadow-lg"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              اتصل فوراً
            </a>

            <a
              href={`https://wa.me/${WHATSAPP}?text=طوارئ: ${service.name_ar} في ${city.name_ar}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-bold text-xl shadow-lg"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              واتساب
            </a>
          </div>
        </div>

        {/* متى تحتاج خدمة طوارئ؟ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            متى تحتاج خدمة طوارئ {service.name_ar}؟
          </h2>
          <div className="bg-yellow-50 border-r-4 border-yellow-500 rounded-lg p-6">
            <ul className="space-y-3">
              {info.scenarios.map((scenario, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-yellow-600 text-xl mt-1">⚠️</span>
                  <span className="text-gray-900 font-medium">{scenario}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* لماذا خدمة الطوارئ لدينا؟ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            لماذا خدمة الطوارئ لدينا؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg border-2 border-primary-200 p-6">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                استجابة فورية
              </h3>
              <p className="text-gray-700">
                نصلك في أقل من 30 دقيقة في {city.name_ar}
              </p>
            </div>

            <div className="bg-white rounded-lg border-2 border-primary-200 p-6">
              <div className="text-4xl mb-3">🕐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                24/7 على مدار الساعة
              </h3>
              <p className="text-gray-700">
                متاحون دائماً - ليلاً ونهاراً وأيام العطل
              </p>
            </div>

            <div className="bg-white rounded-lg border-2 border-primary-200 p-6">
              <div className="text-4xl mb-3">👨‍🔧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                فنيون مدربون
              </h3>
              <p className="text-gray-700">
                فريق متخصص جاهز للحالات الطارئة
              </p>
            </div>

            <div className="bg-white rounded-lg border-2 border-primary-200 p-6">
              <div className="text-4xl mb-3">🚚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                معدات كاملة
              </h3>
              <p className="text-gray-700">
                نحمل جميع المعدات والقطع اللازمة
              </p>
            </div>
          </div>
        </section>

        {/* ملاحظة هامة */}
        <div className="bg-primary-50 border-r-4 border-primary-600 rounded-lg p-6 mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            💡 ملاحظة هامة
          </h3>
          <p className="text-gray-700 mb-3">
            خدمة الطوارئ متاحة على مدار 24 ساعة في {city.name_ar}. قد تطبق رسوم إضافية للخدمة الليلية (بعد 10 مساءً) وأيام العطل الرسمية.
          </p>
          <p className="text-gray-700">
            للحالات الطارئة جداً، اتصل مباشرة على الرقم أعلاه.
          </p>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            لديك حالة طوارئ؟
          </h2>
          <p className="text-xl text-red-100 mb-6">
            اتصل الآن ونحن في الطريق إليك
          </p>
          <a
            href={`tel:${PHONE}`}
            className="inline-block px-12 py-5 bg-white text-red-600 rounded-lg hover:bg-gray-100 transition-colors font-bold text-2xl shadow-lg"
          >
            📞 {PHONE}
          </a>
        </div>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <Link
            href={servicePath(city.slug, service.slug)}
            className="text-primary-600 hover:underline font-medium"
          >
            ← العودة لصفحة الخدمة العادية
          </Link>
        </div>
      </div>
    </div>
  );
}

