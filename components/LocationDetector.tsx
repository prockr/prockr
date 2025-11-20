'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { MapPin, X, Navigation } from 'lucide-react';
import { getNearestCity, type CityGeocode } from '@/lib/geocoding';

interface LocationDetectorProps {
  onCityDetected?: (city: CityGeocode) => void;
  showPrompt?: boolean;
}

/**
 * Location Detector Component
 * Detects user location using Browser Geolocation API
 * Suggests nearest city and services
 */
export function LocationDetector({ onCityDetected, showPrompt = true }: LocationDetectorProps) {
  const [detectedCity, setDetectedCity] = useState<CityGeocode | null>(null);
  const [isDetecting, setIsDetecting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed the prompt
    const isDismissed = localStorage.getItem('location-prompt-dismissed');
    if (isDismissed) {
      setDismissed(true);
      return;
    }

    // Auto-show banner after 3 seconds if not dismissed
    if (showPrompt && !dismissed) {
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showPrompt, dismissed]);

  const detectLocation = async () => {
    if (!navigator.geolocation) {
      setError('المتصفح لا يدعم تحديد الموقع');
      return;
    }

    setIsDetecting(true);
    setError(null);

    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 300000, // 5 minutes cache
        });
      });

      const { latitude, longitude } = position.coords;
      const nearestCity = getNearestCity(latitude, longitude);

      if (nearestCity) {
        setDetectedCity(nearestCity);
        if (onCityDetected) {
          onCityDetected(nearestCity);
        }
        // Store in localStorage for future visits
        localStorage.setItem('detected-city', nearestCity.slug);
      } else {
        setError('لم نتمكن من العثور على مدينة قريبة من موقعك');
      }
    } catch (err: unknown) {
      console.error('Location detection error:', err);
      const error = err as GeolocationPositionError;
      if (error.code === 1) {
        setError('تم رفض الإذن بالوصول إلى الموقع');
      } else if (error.code === 2) {
        setError('موقعك غير متاح');
      } else if (error.code === 3) {
        setError('انتهت مهلة تحديد الموقع');
      } else {
        setError('حدث خطأ أثناء تحديد الموقع');
      }
    } finally {
      setIsDetecting(false);
    }
  };

  const handleDismiss = () => {
    setShowBanner(false);
    setDismissed(true);
    localStorage.setItem('location-prompt-dismissed', 'true');
  };

  const handleDetectClick = () => {
    setShowBanner(false);
    detectLocation();
  };

  // Banner prompt
  if (showBanner && !dismissed && !detectedCity) {
    return (
      <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50 animate-slide-up">
        <div className="bg-white rounded-lg shadow-2xl border border-gray-200 p-4">
          <button
            onClick={handleDismiss}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-start gap-3 mb-3">
            <div className="bg-primary-100 rounded-full p-2">
              <MapPin className="w-5 h-5 text-primary-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-1">اكتشف الخدمات القريبة منك</h3>
              <p className="text-sm text-gray-600">
                دعنا نساعدك في العثور على أفضل مقدمي الخدمات في منطقتك
              </p>
            </div>
          </div>

          <button
            onClick={handleDetectClick}
            className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Navigation className="w-4 h-4" />
            تحديد موقعي
          </button>

          <p className="text-xs text-gray-500 text-center mt-2">
            لن نشارك موقعك مع أي طرف ثالث
          </p>
        </div>
      </div>
    );
  }

  // Detected city card
  if (detectedCity) {
    return (
      <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-4 mb-6 border border-primary-200">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary-600" />
            <h3 className="font-bold text-gray-900">موقعك الحالي</h3>
          </div>
          <button
            onClick={() => setDetectedCity(null)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="إزالة"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="mb-3">
          <p className="text-xl font-bold text-primary-700 mb-1">{detectedCity.name_ar}</p>
          <p className="text-sm text-gray-600">{detectedCity.region}</p>
          <p className="text-xs text-gray-500 mt-1">
            نطاق الخدمة: {detectedCity.serviceRadius} كم
          </p>
        </div>

        <div className="flex gap-2">
          <Link
            href={`/saudi/${detectedCity.slug}`}
            className="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-center py-2 px-4 rounded-lg transition-colors text-sm font-semibold"
          >
            عرض الخدمات
          </Link>
          <Link
            href={`/saudi/${detectedCity.slug}#pricing`}
            className="flex-1 bg-white hover:bg-gray-50 text-primary-600 text-center py-2 px-4 rounded-lg transition-colors text-sm font-semibold border border-primary-200"
          >
            الأسعار
          </Link>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="bg-red-50 rounded-lg p-4 mb-6 border border-red-200">
        <div className="flex items-start gap-3">
          <div className="bg-red-100 rounded-full p-2">
            <X className="w-5 h-5 text-red-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-red-900 mb-1">خطأ في تحديد الموقع</h3>
            <p className="text-sm text-red-700 mb-3">{error}</p>
            <button
              onClick={detectLocation}
              className="text-sm text-red-600 hover:text-red-800 font-semibold underline"
            >
              إعادة المحاولة
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Loading state
  if (isDetecting) {
    return (
      <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200">
        <div className="flex items-center gap-3">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
          <div>
            <h3 className="font-bold text-gray-900">جاري تحديد موقعك...</h3>
            <p className="text-sm text-gray-600">قد يستغرق هذا بضع ثوانٍ</p>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

/**
 * Simple location button for header/navbar
 */
export function LocationButton({ className = '' }: { className?: string }) {
  const [detectedCity, setDetectedCity] = useState<string | null>(null);

  useEffect(() => {
    // Check if we have a stored detected city
    const storedCity = localStorage.getItem('detected-city');
    if (storedCity) {
      setDetectedCity(storedCity);
    }
  }, []);

  if (detectedCity) {
    return (
      <Link
        href={`/saudi/${detectedCity}`}
        className={`flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors ${className}`}
      >
        <MapPin className="w-4 h-4" />
        <span className="text-sm font-medium">خدماتي</span>
      </Link>
    );
  }

  return null;
}

