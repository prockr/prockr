import Link from 'next/link';
import Image from 'next/image';
import { PHONE, WHATSAPP } from '@/lib/constants';
import { SERVICES } from '@/data/services';
import { getTier1Cities } from '@/data/cities';

export function Footer() {
  const tier1Cities = getTier1Cities();
  const topServices = SERVICES.slice(0, 6);

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <Link href="/" className="inline-block mb-6 group">
              <div className="relative w-40 h-40 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/Logo.png"
                  alt="Prockr - خدمات منزلية السعودية"
                  width={160}
                  height={160}
                  className="object-contain drop-shadow-2xl brightness-110"
                  quality={100}
                  loading="lazy"
                />
              </div>
            </Link>
            <p className="text-gray-400 mb-4 leading-relaxed">
              منصة رائدة لربطك بأفضل مقدمي الخدمات المنزلية المعتمدين في جميع أنحاء
              المملكة العربية السعودية
            </p>
            <div className="flex gap-3">
              <a
                href={`tel:${PHONE}`}
                className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
                aria-label="اتصل بنا"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
                aria-label="واتساب"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  جميع الخدمات
                </Link>
              </li>
              <li>
                <Link href="/saudi" className="hover:text-white transition-colors">
                  المدن المخدومة
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  الأسعار
                </Link>
              </li>
              <li>
                <Link href="/deals" className="hover:text-white text-red-400 transition-colors font-medium">
                  العروض والخصومات 🎁
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-white transition-colors">
                  أسئلة شائعة
                </Link>
              </li>
              <li>
                <Link href="/emergency" className="hover:text-white text-red-400 transition-colors font-medium">
                  خدمة طوارئ 24/7 🚨
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Services */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">خدمات مميزة</h3>
            <ul className="space-y-2">
              {topServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/saudi/riyadh/${service.slug}`}
                    className="hover:text-white transition-colors text-sm"
                  >
                    {service.name_ar}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Cities */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">المدن الرئيسية</h3>
            <ul className="space-y-2">
              {tier1Cities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/saudi/${city.slug}`}
                    className="hover:text-white transition-colors text-sm"
                  >
                    {city.name_ar}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/coverage"
                  className="hover:text-white transition-colors text-sm font-medium text-primary-400"
                >
                  جميع المدن ←
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div>
              © {new Date().getFullYear()} بروكر. جميع الحقوق محفوظة.
            </div>
            <div className="flex gap-6">
              <Link href="/terms" className="hover:text-white transition-colors">
                الشروط والأحكام
              </Link>
              <Link href="/privacy" className="hover:text-white transition-colors">
                سياسة الخصوصية
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

