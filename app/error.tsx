'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { AlertTriangle, Home, RefreshCcw, ArrowRight } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    // Log error for debugging
    console.error('Application error:', error);

    // Countdown timer - longer for errors (user might want to see the error)
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [error, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Error Icon */}
        <div className="mb-8 relative">
          <div className="inline-block">
            <div className="animate-pulse">
              <AlertTriangle className="w-24 h-24 text-red-500" />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            حدث خطأ غير متوقع
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            عذراً، حدث خطأ أثناء معالجة طلبك
          </p>
          <p className="text-lg text-gray-500">
            سيتم تحويلك إلى الصفحة الرئيسية خلال {countdown} ثانية...
          </p>
        </div>

        {/* Error Details (Development only) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-left max-w-lg mx-auto">
            <p className="text-sm font-mono text-red-800 break-all">
              {error.message}
            </p>
            {error.digest && (
              <p className="text-xs text-red-600 mt-2">
                Digest: {error.digest}
              </p>
            )}
          </div>
        )}

        {/* Progress Bar */}
        <div className="mb-8 max-w-md mx-auto">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-red-500 transition-all duration-1000 ease-linear"
              style={{ width: `${((10 - countdown) / 10) * 100}%` }}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-bold text-lg"
          >
            <RefreshCcw className="w-6 h-6" />
            إعادة المحاولة
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-full hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg border-2 border-primary-200 font-semibold text-lg"
          >
            <Home className="w-6 h-6" />
            الصفحة الرئيسية
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Help Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            هل تحتاج مساعدة؟
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="px-4 py-2 bg-white text-primary-600 rounded-full hover:bg-primary-50 transition-colors shadow-sm border border-primary-200"
            >
              الصفحة الرئيسية
            </Link>
            <Link
              href="/saudi/riyadh"
              className="px-4 py-2 bg-white text-primary-600 rounded-full hover:bg-primary-50 transition-colors shadow-sm border border-primary-200"
            >
              خدمات الرياض
            </Link>
            <Link
              href="/services/moving"
              className="px-4 py-2 bg-white text-primary-600 rounded-full hover:bg-primary-50 transition-colors shadow-sm border border-primary-200"
            >
              نقل عفش
            </Link>
          </div>
        </div>

        {/* Support Info */}
        <div className="mt-8 text-sm text-gray-500">
          <p>
            إذا استمرت المشكلة، يرجى التواصل مع الدعم الفني
          </p>
          <p className="mt-2 font-semibold text-primary-600">
            📞 920001234
          </p>
        </div>
      </div>
    </div>
  );
}

