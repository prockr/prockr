'use client';

import { useState, useEffect, useCallback } from 'react';
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
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsAnimating(false);
    }, 300);
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      prevSlide();
    } else if (isRightSwipe) {
      nextSlide();
    }
  };

  return (
    <div 
      className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[16/8] lg:aspect-[16/7] overflow-hidden rounded-xl md:rounded-2xl lg:rounded-3xl shadow-2xl"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Images */}
      {slides.map((slide, index) => (
        <div
          key={`slide-${slide.title}-${index}`}
          className={`absolute inset-0 transition-all duration-500 ease-out ${
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
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
            priority={index === 0}
            quality={index === 0 ? 85 : 70}
            loading={index === 0 ? 'eager' : 'lazy'}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8 lg:p-12">
        <div
          className={`transition-all duration-300 ${
            isAnimating
              ? 'opacity-0 translate-y-4'
              : 'opacity-100 translate-y-0'
          }`}
        >
          <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-1 sm:mb-2 md:mb-4">
            {slides[currentSlide].title}
          </h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 mb-3 sm:mb-4 md:mb-6">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <a
              href="/saudi"
              className="px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 bg-white text-primary-600 rounded-lg md:rounded-xl hover:bg-slate-100 transition-all font-bold text-xs sm:text-sm md:text-base lg:text-lg shadow-2xl transform hover:scale-105"
            >
              احجز الآن
            </a>
            <a
              href="/services"
              className="px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 bg-white/20 backdrop-blur-sm text-white border border-white/50 md:border-2 md:border-white rounded-lg md:rounded-xl hover:bg-white/30 transition-all font-bold text-xs sm:text-sm md:text-base lg:text-lg"
            >
              جميع الخدمات
            </a>
          </div>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1 sm:gap-1.5 z-10">
        {slides.slice(0, 7).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`flex-shrink-0 h-1.5 sm:h-2 md:h-2.5 rounded-full transition-all ${
              index === currentSlide % 7
                ? 'bg-white w-4 sm:w-5 md:w-6'
                : 'bg-white/50 hover:bg-white/75 w-1.5 sm:w-2 md:w-2.5'
            }`}
            aria-label={`الذهاب إلى الشريحة ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow Navigation - Hidden on small screens */}
      <button
        onClick={prevSlide}
        className="hidden sm:flex absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full items-center justify-center transition-all group"
        aria-label="الشريحة السابقة"
      >
        <svg
          className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white group-hover:scale-110 transition-transform"
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
        onClick={nextSlide}
        className="hidden sm:flex absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full items-center justify-center transition-all group"
        aria-label="الشريحة التالية"
      >
        <svg
          className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white group-hover:scale-110 transition-transform"
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

      {/* Slide Counter - Mobile */}
      <div className="absolute top-2 right-2 sm:hidden bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full text-white text-xs font-medium">
        {currentSlide + 1}/{slides.length}
      </div>
    </div>
  );
}
