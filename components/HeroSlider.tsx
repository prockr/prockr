'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { IMAGE_CACHE_VERSION } from '@/lib/images';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

// Updated slides with new images from all service categories - with cache busting
const slides: Slide[] = [
  {
    image: `/images/moving/professional-moving-team.jpg?v=${IMAGE_CACHE_VERSION}`,
    title: 'نقل عفش احترافي',
    subtitle: 'فريق متخصص • تغليف آمن • نقل سريع',
  },
  {
    image: `/images/cleaning/professional-cleaning-company.jpg?v=${IMAGE_CACHE_VERSION}`,
    title: 'تنظيف منزلي شامل',
    subtitle: 'تنظيف عميق • معقمات آمنة • نتائج مضمونة',
  },
  {
    image: `/images/ac/HVAC-services.jpg?v=${IMAGE_CACHE_VERSION}`,
    title: 'صيانة مكيفات',
    subtitle: 'فنيون خبراء • قطع أصلية • ضمان معتمد',
  },
  {
    image: `/images/leaks-plumbing/thermal-leak-inspection-Riyadh.jpg?v=${IMAGE_CACHE_VERSION}`,
    title: 'كشف تسربات المياه',
    subtitle: 'أحدث الأجهزة • دقة عالية • حلول فورية',
  },
  {
    image: `/images/pest-control/professional-pest-exterminators.jpg?v=${IMAGE_CACHE_VERSION}`,
    title: 'مكافحة حشرات',
    subtitle: 'مواد آمنة • فعالية طويلة • صحة عائلتك',
  },
  {
    image: `/images/electricity/electrical-maintenance-company.jpg?v=${IMAGE_CACHE_VERSION}`,
    title: 'خدمات كهرباء',
    subtitle: 'كهربائيون معتمدون • أمان تام • خدمة 24/7',
  },
  {
    image: `/images/flooring/Flooring Installation Saudi Arabia.jpg?v=${IMAGE_CACHE_VERSION}`,
    title: 'تركيب أرضيات',
    subtitle: 'سيراميك • باركيه • رخام • فينيل',
  },
  {
    image: `/images/painting-gypsum/Professional-painters-KSA.jpg?v=${IMAGE_CACHE_VERSION}`,
    title: 'دهانات وجبس',
    subtitle: 'دهانات داخلية وخارجية • جبس بورد • ديكورات',
  },
  {
    image: `/images/aluminum-glass/Aluminum Windows.jpg?v=${IMAGE_CACHE_VERSION}`,
    title: 'ألمنيوم وزجاج',
    subtitle: 'نوافذ • أبواب • واجهات زجاجية',
  },
  {
    image: `/images/landscaping/landscape design.jpg?v=${IMAGE_CACHE_VERSION}`,
    title: 'تنسيق حدائق',
    subtitle: 'تصميم احترافي • نباتات متنوعة • أنظمة ري',
  },
  {
    image: `/images/carpentry/Custom furniture.jpg?v=${IMAGE_CACHE_VERSION}`,
    title: 'نجارة وأثاث',
    subtitle: 'تصنيع مطابخ • غرف نوم • أثاث مخصص',
  },
  {
    image: `/images/insulation-roofs/Roof waterproofing Saudi Arabia.jpg?v=${IMAGE_CACHE_VERSION}`,
    title: 'عزل أسطح',
    subtitle: 'عزل مائي • عزل حراري • حماية شاملة',
  },
  {
    image: `/images/appliances/Home appliance repair.jpg?v=${IMAGE_CACHE_VERSION}`,
    title: 'صيانة أجهزة منزلية',
    subtitle: 'غسالات • ثلاجات • أفران • مجففات',
  },
  {
    image: `/images/car-towing/Car towing service.jpg?v=${IMAGE_CACHE_VERSION}`,
    title: 'سطحة ونقل سيارات',
    subtitle: 'نقل آمن • خدمة 24/7 • تغطية جميع المدن',
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
    }, 4000); // Increased to 4 seconds for more slides

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
          key={`slide-${slide.title}-${index}`}
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
            quality={index === 0 ? 85 : 75}
            loading={index === 0 ? 'eager' : 'lazy'}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
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

      {/* Dots Navigation - Scrollable for many slides */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1.5 z-10 max-w-[80%] overflow-x-auto pb-1">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`flex-shrink-0 w-2.5 h-2.5 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white w-6'
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
