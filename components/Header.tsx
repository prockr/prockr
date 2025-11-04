'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { PHONE, WHATSAPP } from '@/lib/constants';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar - Contact Info */}
      <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              {/* Phone */}
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-2 hover:text-yellow-300 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="font-medium">{PHONE}</span>
              </a>

              {/* Working Hours */}
              <div className="flex items-center gap-2 text-primary-100">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>متاحون 24/7</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-1.5 rounded-full transition-all transform hover:scale-105 font-medium shadow-lg"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>واتساب</span>
              </a>

              {/* Language Selector (Optional) */}
              <div className="flex items-center gap-2 text-primary-100">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
                </svg>
                <span>العربية</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-200">
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-28 h-28 md:w-32 md:h-32 transition-all duration-300 group-hover:scale-105">
                <Image
                  src="/images/Logo.png"
                  alt="Prockr - خدمات منزلية السعودية"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                  quality={95}
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <Link
                href="/services"
                className="px-4 py-2.5 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all font-medium relative group"
              >
                الخدمات
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/saudi"
                className="px-4 py-2.5 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all font-medium relative group"
              >
                المدن
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/pricing"
                className="px-4 py-2.5 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all font-medium relative group"
              >
                الأسعار
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/deals"
                className="px-4 py-2.5 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all font-medium flex items-center gap-1.5 relative group"
              >
                <span className="text-xl">🎁</span>
                <span>العروض</span>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full animate-pulse">
                  30%
                </span>
              </Link>
              <Link
                href="/about"
                className="px-4 py-2.5 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all font-medium relative group"
              >
                من نحن
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/faqs"
                className="px-4 py-2.5 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all font-medium relative group"
              >
                أسئلة
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/blog"
                className="px-4 py-2.5 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all font-medium relative group"
              >
                المدونة
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/emergency"
                className="px-5 py-2.5 bg-red-600 text-white hover:bg-red-700 rounded-lg transition-all font-bold flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 animate-pulse"
              >
                <span className="text-xl">🚨</span>
                <span>طوارئ</span>
              </Link>
              <Link
                href="/contact"
                className="px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 rounded-lg transition-all font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                اتصل بنا
              </Link>
            </div>

            {/* Mobile Menu Button & WhatsApp */}
            <div className="flex lg:hidden items-center gap-2">
              {/* Mobile WhatsApp */}
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all transform hover:scale-110 shadow-lg"
                aria-label="واتساب"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
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
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200 bg-gray-50 rounded-b-xl">
              <div className="flex flex-col gap-1">
                <Link
                  href="/services"
                  className="px-4 py-3 text-gray-700 hover:bg-white hover:text-primary-600 rounded-lg transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  📋 الخدمات
                </Link>
                <Link
                  href="/saudi"
                  className="px-4 py-3 text-gray-700 hover:bg-white hover:text-primary-600 rounded-lg transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  🏙️ المدن
                </Link>
                <Link
                  href="/pricing"
                  className="px-4 py-3 text-gray-700 hover:bg-white hover:text-primary-600 rounded-lg transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  💰 الأسعار
                </Link>
                <Link
                  href="/deals"
                  className="px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors font-bold flex items-center justify-between"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="flex items-center gap-2">
                    <span>🎁</span>
                    <span>العروض والخصومات</span>
                  </span>
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    خصم 30%
                  </span>
                </Link>
                <Link
                  href="/about"
                  className="px-4 py-3 text-gray-700 hover:bg-white hover:text-primary-600 rounded-lg transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ℹ️ من نحن
                </Link>
                <Link
                  href="/faqs"
                  className="px-4 py-3 text-gray-700 hover:bg-white hover:text-primary-600 rounded-lg transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ❓ أسئلة شائعة
                </Link>

                <div className="h-px bg-gray-300 my-2"></div>

                <Link
                  href="/emergency"
                  className="mx-2 px-4 py-3 bg-red-600 text-white hover:bg-red-700 rounded-lg transition-colors font-bold flex items-center justify-center gap-2 shadow-lg animate-pulse"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>🚨</span>
                  <span>خدمة طوارئ 24/7</span>
                </Link>
                <Link
                  href="/contact"
                  className="mx-2 px-4 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 rounded-lg transition-colors font-bold text-center shadow-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  اتصل بنا
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${WHATSAPP}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 animate-bounce"
        aria-label="تواصل عبر واتساب"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </>
  );
}
