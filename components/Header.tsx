'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { PHONE, WHATSAPP } from '@/lib/constants';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <>
      {/* Top Bar - Contact Info (Desktop only) */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-2.5 hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-8">
              {/* Phone */}
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-2.5 hover:text-primary-400 transition-colors group"
              >
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="font-semibold tracking-wide" dir="ltr">{PHONE}</span>
              </a>

              {/* Working Hours */}
              <div className="flex items-center gap-2.5 text-slate-300">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-medium">متاحون على مدار الساعة</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-500 px-5 py-2 rounded-full transition-all transform hover:scale-105 font-semibold shadow-lg shadow-green-600/30"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>تواصل واتساب</span>
              </a>

              {/* Emergency Badge */}
              <Link
                href="/emergency"
                className="flex items-center gap-2 bg-red-600 hover:bg-red-500 px-4 py-2 rounded-full transition-all font-semibold animate-pulse shadow-lg shadow-red-600/30"
              >
                <span>🚨</span>
                <span>طوارئ 24/7</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-slate-200/50' 
          : 'bg-white shadow-md'
      }`}>
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/Logo.png"
                  alt="بروكر - خدمات منزلية السعودية"
                  width={144}
                  height={144}
                  className="object-contain drop-shadow-lg"
                  priority
                  quality={100}
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {[
                { href: '/services', label: 'الخدمات', icon: '📋' },
                { href: '/saudi', label: 'المدن', icon: '🏙️' },
                { href: '/pricing', label: 'الأسعار', icon: '💰' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2.5 text-slate-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all font-medium text-sm xl:text-base"
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Deals - Special Style */}
              <Link
                href="/deals"
                className="px-4 py-2.5 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl transition-all font-bold text-sm xl:text-base flex items-center gap-2 shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/40 transform hover:scale-105"
              >
                <span>🎁</span>
                <span>العروض</span>
                <span className="bg-white text-red-600 text-xs px-2 py-0.5 rounded-full font-bold">30%</span>
              </Link>

              {[
                { href: '/about', label: 'من نحن' },
                { href: '/faqs', label: 'أسئلة' },
                { href: '/blog', label: 'المدونة' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2.5 text-slate-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all font-medium text-sm xl:text-base"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 rounded-xl transition-all font-bold shadow-lg shadow-primary-600/30 hover:shadow-xl transform hover:scale-105"
              >
                اتصل بنا
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center gap-2">
              {/* Mobile Phone */}
              <a
                href={`tel:${PHONE}`}
                className="p-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-xl transition-all shadow-lg"
                aria-label="اتصل بنا"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>

              {/* Mobile WhatsApp */}
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-all shadow-lg"
                aria-label="واتساب"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 text-slate-700 hover:text-primary-600 hover:bg-slate-100 rounded-xl transition-colors"
                aria-label="القائمة"
              >
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-4 space-y-1 border-t border-slate-200">
              {/* Navigation Links */}
              {[
                { href: '/services', label: 'الخدمات', icon: '📋' },
                { href: '/saudi', label: 'المدن', icon: '🏙️' },
                { href: '/pricing', label: 'الأسعار', icon: '💰' },
                { href: '/about', label: 'من نحن', icon: 'ℹ️' },
                { href: '/faqs', label: 'أسئلة شائعة', icon: '❓' },
                { href: '/blog', label: 'المدونة', icon: '📰' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-slate-50 hover:text-primary-600 rounded-xl transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}

              {/* Deals - Special */}
              <Link
                href="/deals"
                className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-red-50 to-orange-50 text-red-600 rounded-xl font-bold mx-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">🎁</span>
                  <span>العروض والخصومات</span>
                </div>
                <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full">
                  خصم 30%
                </span>
              </Link>

              <div className="h-px bg-slate-200 my-3"></div>

              {/* CTA Buttons */}
              <div className="space-y-2 px-2">
                <Link
                  href="/emergency"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3.5 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-bold shadow-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>🚨</span>
                  <span>خدمة طوارئ 24/7</span>
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-bold shadow-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>📞</span>
                  <span>اتصل بنا</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${WHATSAPP}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 group"
        aria-label="تواصل عبر واتساب"
      >
        <div className="relative">
          {/* Pulse Effect */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25"></div>
          
          {/* Button */}
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-2xl shadow-green-600/40 flex items-center justify-center transition-all transform hover:scale-110">
            <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-slate-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            تواصل معنا
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900"></div>
          </div>
        </div>
      </a>
    </>
  );
}
