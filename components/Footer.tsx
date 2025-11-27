import Link from 'next/link';
import Image from 'next/image';
import { PHONE, WHATSAPP } from '@/lib/constants';
import { SERVICES } from '@/data/services';
import { getTier1Cities } from '@/data/cities';

export function Footer() {
  const tier1Cities = getTier1Cities();
  const topServices = SERVICES.slice(0, 6);

  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-slate-300">
      {/* Newsletter / CTA Section */}
      <div className="border-b border-slate-800">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
            <div className="text-center lg:text-right">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                جاهز لطلب خدمتك؟
              </h3>
              <p className="text-slate-400 text-sm md:text-base">
                تواصل معنا الآن واحصل على خدمة احترافية بأفضل الأسعار
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all font-bold shadow-lg shadow-primary-600/25 hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>اتصل الآن</span>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all font-bold shadow-lg shadow-green-600/25 hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>واتساب</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* About */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block mb-6 group">
              <div className="relative w-32 h-32 md:w-40 md:h-40 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/Logo.png"
                  alt="بروكر - خدمات منزلية السعودية"
                  width={160}
                  height={160}
                  className="object-contain drop-shadow-2xl brightness-110"
                  quality={100}
                  loading="lazy"
                />
              </div>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed text-sm md:text-base max-w-sm">
              منصة رائدة لربطك بأفضل مقدمي الخدمات المنزلية المعتمدين في جميع أنحاء
              المملكة العربية السعودية. ضمان الجودة والاحترافية.
            </p>
            
            {/* Social & Contact */}
            <div className="flex gap-3">
              <a
                href={`tel:${PHONE}`}
                className="w-11 h-11 bg-slate-800 hover:bg-primary-600 rounded-xl flex items-center justify-center transition-all group"
                aria-label="اتصل بنا"
              >
                <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-slate-800 hover:bg-green-600 rounded-xl flex items-center justify-center transition-all group"
                aria-label="واتساب"
              >
                <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
              <a
                href="mailto:info@prokr.com"
                className="w-11 h-11 bg-slate-800 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all group"
                aria-label="البريد الإلكتروني"
              >
                <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-base md:text-lg font-bold mb-4 md:mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-primary-600 rounded-full"></span>
              روابط سريعة
            </h3>
            <ul className="space-y-2.5 md:space-y-3">
              {[
                { href: '/services', label: 'جميع الخدمات' },
                { href: '/saudi', label: 'المدن المخدومة' },
                { href: '/pricing', label: 'الأسعار' },
                { href: '/deals', label: 'العروض والخصومات', highlight: true },
                { href: '/faqs', label: 'أسئلة شائعة' },
                { href: '/emergency', label: 'خدمة طوارئ 24/7', emergency: true },
                { href: '/contact', label: 'اتصل بنا' },
              ].map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className={`hover:text-white transition-colors text-sm md:text-base flex items-center gap-1.5 ${
                      item.highlight ? 'text-orange-400 hover:text-orange-300 font-medium' : 
                      item.emergency ? 'text-red-400 hover:text-red-300 font-medium' : ''
                    }`}
                  >
                    {item.highlight && <span>🎁</span>}
                    {item.emergency && <span>🚨</span>}
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Services */}
          <div>
            <h3 className="text-white text-base md:text-lg font-bold mb-4 md:mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-green-600 rounded-full"></span>
              خدماتنا
            </h3>
            <ul className="space-y-2.5 md:space-y-3">
              {topServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/saudi/riyadh/${service.slug}`}
                    className="hover:text-white transition-colors text-sm md:text-base"
                  >
                    {service.name_ar}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-primary-400 hover:text-primary-300 transition-colors text-sm md:text-base font-medium"
                >
                  جميع الخدمات ←
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Cities */}
          <div>
            <h3 className="text-white text-base md:text-lg font-bold mb-4 md:mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
              المدن الرئيسية
            </h3>
            <ul className="space-y-2.5 md:space-y-3">
              {tier1Cities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/saudi/${city.slug}`}
                    className="hover:text-white transition-colors text-sm md:text-base"
                  >
                    {city.name_ar}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/coverage"
                  className="text-primary-400 hover:text-primary-300 transition-colors text-sm md:text-base font-medium"
                >
                  جميع المدن ←
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-xs md:text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <span className="text-lg md:text-xl">✅</span>
              <span>ضمان مكتوب</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg md:text-xl">⚡</span>
              <span>استجابة فورية</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg md:text-xl">🛡️</span>
              <span>فنيون معتمدون</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg md:text-xl">💯</span>
              <span>رضا العملاء</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800 bg-slate-950/50">
        <div className="container mx-auto px-4 py-5 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <span>© {new Date().getFullYear()}</span>
              <span className="text-primary-500 font-semibold">بروكر</span>
              <span>جميع الحقوق محفوظة</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link href="/terms" className="hover:text-white transition-colors">
                الشروط والأحكام
              </Link>
              <Link href="/privacy" className="hover:text-white transition-colors">
                سياسة الخصوصية
              </Link>
              <Link href="/providers" className="hover:text-white transition-colors">
                انضم كمقدم خدمة
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
