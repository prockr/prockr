'use client';

import { useEffect, useRef, useState } from 'react';

export default function TestMapPage() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState('جاري التحميل...');
  const [apiKey, setApiKey] = useState('');

  useEffect(() => {
    // Display API Key (first 10 chars only for security)
    const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'غير موجود';
    setApiKey(key.substring(0, 20) + '...');

    if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
      setStatus('❌ خطأ: API Key غير موجود في .env.local');
      return;
    }

    setStatus('⏳ جاري تحميل Google Maps...');

    // Check if Google Maps is already loaded
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((window as any).google) {
      setStatus('✅ Google Maps محمّل مسبقاً');
      initMap();
      return;
    }

    // Load Google Maps script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&language=ar&region=SA&callback=initMap`;
    script.async = true;
    script.defer = true;

    // Define callback
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).initMap = () => {
      setStatus('✅ تم تحميل Google Maps بنجاح!');
      initMap();
    };

    script.onerror = () => {
      setStatus('❌ فشل تحميل Google Maps - تحقق من API Key');
    };

    document.head.appendChild(script);

    return () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (window as any).initMap;
    };
  }, []);

  const initMap = () => {
    if (!mapRef.current) return;

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const google = (window as any).google;
      
      // Riyadh coordinates
      const riyadh = { lat: 24.7136, lng: 46.6753 };

      const map = new google.maps.Map(mapRef.current, {
        center: riyadh,
        zoom: 11,
        mapTypeControl: true,
        streetViewControl: true,
        fullscreenControl: true,
      });

      // Add marker
      new google.maps.Marker({
        position: riyadh,
        map: map,
        title: 'الرياض',
      });

      // Add circle (50km radius)
      new google.maps.Circle({
        strokeColor: '#2563eb',
        strokeOpacity: 0.6,
        strokeWeight: 2,
        fillColor: '#3b82f6',
        fillOpacity: 0.15,
        map: map,
        center: riyadh,
        radius: 50000, // 50km in meters
      });

      setStatus('✅ الخريطة تعمل بشكل صحيح!');
    } catch (error) {
      console.error('Map initialization error:', error);
      setStatus('❌ خطأ في تهيئة الخريطة: ' + (error as Error).message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          🗺️ صفحة اختبار Google Maps
        </h1>

        {/* Status Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">الحالة:</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">{status.includes('✅') ? '✅' : status.includes('❌') ? '❌' : '⏳'}</span>
              <div>
                <p className="text-lg font-semibold">{status}</p>
              </div>
            </div>
            
            <div className="border-t pt-3 mt-3">
              <p className="text-sm text-gray-600 mb-2">API Key (أول 20 حرف):</p>
              <code className="bg-gray-100 px-3 py-1 rounded text-sm font-mono">
                {apiKey}
              </code>
            </div>
          </div>
        </div>

        {/* Map Container */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">الخريطة:</h2>
          <div 
            ref={mapRef} 
            className="w-full rounded-lg overflow-hidden border-2 border-gray-200"
            style={{ height: '500px' }}
          />
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
          <h3 className="text-xl font-bold text-blue-900 mb-3">📋 تعليمات الاختبار:</h3>
          <ol className="list-decimal list-inside space-y-2 text-blue-900">
            <li>إذا ظهرت الخريطة → كل شيء يعمل بشكل صحيح ✅</li>
            <li>إذا ظهرت رسالة خطأ → افتح Console (F12) لمزيد من التفاصيل</li>
            <li>تحقق من أن API Key يبدأ بـ: AIzaSy...</li>
            <li>تأكد من تفعيل Maps JavaScript API في Google Cloud Console</li>
            <li>تأكد من وجود Billing Account مفعّل</li>
          </ol>
        </div>

        {/* Console Instructions */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-4">
          <h3 className="text-xl font-bold text-yellow-900 mb-3">🔍 للتحقق من الأخطاء:</h3>
          <ol className="list-decimal list-inside space-y-2 text-yellow-900">
            <li>اضغط F12 لفتح Developer Tools</li>
            <li>اذهب لتبويب &quot;Console&quot;</li>
            <li>ابحث عن رسائل خطأ حمراء</li>
            <li>إذا وجدت &quot;Google Maps JavaScript API error&quot;:
              <ul className="list-disc list-inside mr-6 mt-2 space-y-1">
                <li>&quot;RefererNotAllowedMapError&quot; → أضف localhost في API restrictions</li>
                <li>&quot;ApiNotActivatedMapError&quot; → فعّل Maps JavaScript API</li>
                <li>&quot;BillingNotEnabledMapError&quot; → فعّل Billing Account</li>
              </ul>
            </li>
          </ol>
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">🔗 روابط مفيدة:</h3>
          <div className="space-y-2">
            <a 
              href="https://console.cloud.google.com/google/maps-apis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-blue-600 hover:text-blue-800 underline"
            >
              → Google Cloud Console - Maps APIs
            </a>
            <a 
              href="https://console.cloud.google.com/apis/credentials" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-blue-600 hover:text-blue-800 underline"
            >
              → API Keys Management
            </a>
            <a 
              href="https://console.cloud.google.com/billing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-blue-600 hover:text-blue-800 underline"
            >
              → Billing Account
            </a>
            <a 
              href="https://developers.google.com/maps/documentation/javascript/error-messages" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-blue-600 hover:text-blue-800 underline"
            >
              → Google Maps Error Messages Reference
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


