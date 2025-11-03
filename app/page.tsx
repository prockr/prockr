import Link from 'next/link';
import { SERVICES } from '@/data/services';
import { getTier1Cities } from '@/data/cities';
import { ServiceCard } from '@/components/ServiceCard';
import { TrustBadges } from '@/components/TrustBadges';
import { HeroSlider } from '@/components/HeroSlider';
import { cityPath } from '@/lib/urls';
import { REVALIDATE_HOMEPAGE } from '@/lib/constants';

export const revalidate = REVALIDATE_HOMEPAGE;

export default function HomePage() {
  const tier1Cities = getTier1Cities();
  const topServices = SERVICES.slice(0, 8);

  return (
    <>
      {/* Hero Section - Image Slider */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary-50 via-blue-50 to-white">
        <div className="container mx-auto px-4">
          {/* Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary-100 rounded-full">
              <span className="text-2xl">🏆</span>
              <span className="font-bold text-primary-900">المنصة الأولى للخدمات المنزلية في المملكة</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 leading-tight text-gray-900">
            خدمات منزلية احترافية
            <span className="block text-primary-600 mt-2">في جميع أنحاء المملكة</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-center text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
            نربطك بأفضل مقدمي الخدمات المعتمدين • ضمان مكتوب • أسعار واضحة • استجابة فورية
          </p>

          {/* Hero Slider */}
          <div className="max-w-7xl mx-auto mb-12">
            <HeroSlider />
          </div>

          {/* Quick Access Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            <Link
              href="/deals"
              className="group bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl p-6 text-center transition-all hover:scale-105 shadow-lg"
            >
              <div className="text-4xl mb-2">🎁</div>
              <div className="font-bold mb-1">العروض</div>
              <div className="text-xs">خصم 30%</div>
            </Link>

            <Link
              href="/pricing"
              className="group bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl p-6 text-center transition-all hover:scale-105 shadow-lg"
            >
              <div className="text-4xl mb-2">💰</div>
              <div className="font-bold mb-1">الأسعار</div>
              <div className="text-xs">شفافة</div>
            </Link>

            <Link
              href="/emergency"
              className="group bg-gradient-to-br from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white rounded-xl p-6 text-center transition-all hover:scale-105 animate-pulse shadow-lg"
            >
              <div className="text-4xl mb-2">🚨</div>
              <div className="font-bold mb-1">طوارئ</div>
              <div className="text-xs">24/7</div>
            </Link>

            <Link
              href="/faqs"
              className="group bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-xl p-6 text-center transition-all hover:scale-105 shadow-lg"
            >
              <div className="text-4xl mb-2">❓</div>
              <div className="font-bold mb-1">أسئلة</div>
              <div className="text-xs">إجابات</div>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 text-center max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-5xl font-bold text-primary-600 mb-2">45+</div>
              <div className="text-sm text-gray-600 font-medium">مدينة مغطاة</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-5xl font-bold text-primary-600 mb-2">14</div>
              <div className="text-sm text-gray-600 font-medium">خدمة رئيسية</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-5xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600 font-medium">خدمة طوارئ</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <TrustBadges />
        </div>
      </section>

      {/* Top Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              خدماتنا الأكثر طلباً
            </h2>
            <p className="text-lg text-gray-600">
              اختر الخدمة المناسبة من بين مجموعة واسعة من الخدمات المنزلية
              الاحترافية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topServices.map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
                citySlug="riyadh"
                href={`/services#${service.slug}`}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              عرض جميع الخدمات
            </Link>
          </div>
        </div>
      </section>

      {/* Cities Coverage */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              نخدم جميع المدن الرئيسية
            </h2>
            <p className="text-lg text-gray-600">
              تغطية شاملة في أكثر من 45 مدينة سعودية
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {tier1Cities.map((city) => (
              <Link
                key={city.slug}
                href={cityPath(city.slug)}
                className="p-6 bg-gray-50 rounded-lg text-center hover:bg-primary-50 hover:shadow-md transition-all group"
              >
                <div className="text-4xl mb-3">🏙️</div>
                <h3 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {city.name_ar}
                </h3>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/saudi"
              className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              عرض جميع المدن
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">كيف يعمل بروكر</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                اختر الخدمة والمدينة
              </h3>
              <p className="text-gray-600">
                حدد الخدمة المطلوبة والمدينة التي تحتاج الخدمة فيها
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">تواصل مباشرة</h3>
              <p className="text-gray-600">
                اتصل أو أرسل رسالة واتساب لمقدم الخدمة المعتمد
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                احصل على الخدمة
              </h3>
              <p className="text-gray-600">
                استمتع بخدمة احترافية مع ضمان مكتوب وأسعار واضحة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">جاهز لبدء خدمتك؟</h2>
          <p className="text-xl mb-8 text-primary-100">
            فريقنا جاهز لخدمتك على مدار الساعة
          </p>
          <Link
            href="/saudi"
            className="inline-block px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg"
          >
            ابدأ الآن
          </Link>
        </div>
      </section>
    </>
  );
}

