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

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          التغطية الجغرافية
        </h1>

        <p className="text-xl text-gray-600 text-center mb-12">
          نفخر بتوفير خدماتنا في أكثر من 45 مدينة سعودية من الشمال إلى الجنوب
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-primary-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {tier1.length} مدن رئيسية
            </h2>
            <p className="text-gray-700 mb-4">
              تغطية شاملة لجميع الخدمات مع استجابة فورية
            </p>
            <ul className="space-y-2">
              {tier1.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={cityPath(city.slug)}
                    className="text-primary-600 hover:underline font-medium"
                  >
                    {city.name_ar}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {SERVICES.length} خدمة متخصصة
            </h2>
            <p className="text-gray-700 mb-4">
              مجموعة شاملة من الخدمات المنزلية والصيانة
            </p>
            <div className="flex flex-wrap gap-2">
              {SERVICES.slice(0, 8).map((service) => (
                <span
                  key={service.slug}
                  className="px-3 py-1 bg-white text-gray-900 text-sm rounded-full border border-gray-200"
                >
                  {service.name_ar}
                </span>
              ))}
            </div>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            جميع المدن المغطاة
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {CITIES.map((city) => (
                <Link
                  key={city.slug}
                  href={cityPath(city.slug)}
                  className="text-gray-900 hover:text-primary-600 transition-colors"
                >
                  {city.name_ar}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <div className="bg-primary-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            لا تجد مدينتك؟
          </h2>
          <p className="text-primary-100 mb-6">
            نعمل باستمرار على توسيع تغطيتنا. تواصل معنا وسنبذل قصارى جهدنا لخدمتك
          </p>
          <Link
            href="/saudi"
            className="inline-block px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-colors font-bold"
          >
            تصفح المدن
          </Link>
        </div>
      </div>
    </div>
  );
}

