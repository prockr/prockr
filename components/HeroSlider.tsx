'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    image: '/images/moving/furniture-moving-company.jpg',
    title: 'نقل عفش احترافي',
    subtitle: 'فريق متخصص • تغليف آمن • نقل سريع',
  },
  {
    image: '/images/cleaning/home-cleaning-Riyadh.jpg',
    title: 'تنظيف منزلي شامل',
    subtitle: 'تنظيف عميق • معقمات آمنة • نتائج مضمونة',
  },
  {
    image: '/images/ac/AC-maintenance.jpg',
    title: 'صيانة مكيفات',
    subtitle: 'فنيون خبراء • قطع أصلية • ضمان معتمد',
  },
  {
    image: '/images/leaks-plumbing/water-leak-detection.jpg',
    title: 'كشف تسربات المياه',
    subtitle: 'أحدث الأجهزة • دقة عالية • حلول فورية',
  },
  {
    image: '/images/pest-control/pest-control-services-Saudi-Arabia.jpg',
    title: 'مكافحة حشرات',
    subtitle: 'مواد آمنة • فعالية طويلة • صحة عائلتك',
  },
  {
    image: '/images/electricity/electrician-in-Saudi-Arabia.jpg',
    title: 'خدمات كهرباء',
    subtitle: 'كهربائيون معتمدون • أمان تام • خدمة 24/7',
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-2xl shadow-2xl">
      {/* Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ${
            index === currentSlide
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-105'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority={index === 0}
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
        <div
          className={`transition-all duration-500 ${
            isAnimating
              ? 'opacity-0 translate-y-4'
              : 'opacity-100 translate-y-0'
          }`}
        >
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {slides[currentSlide].title}
          </h3>
          <p className="text-xl md:text-2xl text-white/90 mb-6">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex gap-3">
            <a
              href="/saudi"
              className="px-8 py-4 bg-white text-primary-600 rounded-xl hover:bg-gray-100 transition-all font-bold text-lg shadow-2xl transform hover:scale-105"
            >
              احجز الآن
            </a>
            <a
              href="/services"
              className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white rounded-xl hover:bg-white/30 transition-all font-bold text-lg"
            >
              جميع الخدمات
            </a>
          </div>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`الذهاب إلى الشريحة ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow Navigation - Hidden on Mobile */}
      <button
        onClick={() =>
          goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)
        }
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full items-center justify-center transition-all group"
        aria-label="الشريحة السابقة"
      >
        <svg
          className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={() => goToSlide((currentSlide + 1) % slides.length)}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full items-center justify-center transition-all group"
        aria-label="الشريحة التالية"
      >
        <svg
          className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}

