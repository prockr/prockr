'use client';

import { useEffect, useRef, useState } from 'react';
import { getCityGeocodeBySlug, type CityGeocode } from '@/lib/geocoding';

interface InteractiveMapProps {
  citySlug: string;
  height?: string;
  showServiceRadius?: boolean;
  showNearbyCities?: boolean;
}

// Global flag to track if script is loading
let isScriptLoading = false;
let isScriptLoaded = false;

/**
 * Interactive Map Component using Google Maps
 * Displays city location, service radius, and nearby cities
 */
export function InteractiveMap({
  citySlug,
  height = '400px',
  showServiceRadius = true,
  showNearbyCities = false,
}: InteractiveMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const cityData = getCityGeocodeBySlug(citySlug);

  useEffect(() => {
    if (!cityData) {
      setError('لم يتم العثور على بيانات المدينة');
      return;
    }

    // Check if Google Maps is already loaded
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof window !== 'undefined' && (window as any).google?.maps) {
      setIsLoaded(true);
      isScriptLoaded = true;
      return;
    }

    // If script is already loaded (from another component)
    if (isScriptLoaded) {
      setIsLoaded(true);
      return;
    }

    // If script is currently loading, wait for it
    if (isScriptLoading) {
      const checkInterval = setInterval(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((window as any).google?.maps) {
          setIsLoaded(true);
          isScriptLoaded = true;
          clearInterval(checkInterval);
        }
      }, 100);

      return () => clearInterval(checkInterval);
    }

    // Load Google Maps script for the first time
    isScriptLoading = true;

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&language=ar&region=SA`;
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      isScriptLoading = false;
      isScriptLoaded = true;
      setIsLoaded(true);
    };
    
    script.onerror = () => {
      isScriptLoading = false;
      setError('فشل تحميل الخريطة. تحقق من API Key.');
      console.error('Failed to load Google Maps script');
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup: don't remove script as other components might need it
    };
  }, [cityData]);

  useEffect(() => {
    if (!isLoaded || !cityData || !mapRef.current) return;

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const google = (window as any).google;
      const { lat, lng } = cityData.coordinates;

      // Initialize map
      const map = new google.maps.Map(mapRef.current, {
        center: { lat, lng },
        zoom: cityData.tier === 1 ? 11 : cityData.tier === 2 ? 12 : 13,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        zoomControl: true,
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }],
          },
        ],
      });

      // Add city marker
      new google.maps.Marker({
        position: { lat, lng },
        map,
        title: cityData.name_ar,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 10,
          fillColor: '#2563eb',
          fillOpacity: 1,
          strokeColor: '#ffffff',
          strokeWeight: 2,
        },
      });

      // Add info window
      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="padding: 10px; text-align: center; direction: rtl;">
            <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold; color: #1e40af;">
              ${cityData.name_ar}
            </h3>
            <p style="margin: 0 0 4px 0; font-size: 14px; color: #6b7280;">
              ${cityData.region}
            </p>
            <p style="margin: 0; font-size: 12px; color: #9ca3af;">
              نطاق الخدمة: ${cityData.serviceRadius} كم
            </p>
          </div>
        `,
        position: { lat, lng },
      });

      // Show info window by default
      infoWindow.open(map);

      // Add service radius circle
      if (showServiceRadius) {
        new google.maps.Circle({
          strokeColor: '#2563eb',
          strokeOpacity: 0.6,
          strokeWeight: 2,
          fillColor: '#3b82f6',
          fillOpacity: 0.15,
          map,
          center: { lat, lng },
          radius: cityData.serviceRadius * 1000, // Convert km to meters
        });
      }

      // Add nearby cities markers if enabled
      if (showNearbyCities) {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const { getCitiesNearCoordinates } = require('@/lib/geocoding');
        const nearbyCities = getCitiesNearCoordinates(lat, lng, cityData.serviceRadius).filter(
          (c: CityGeocode) => c.slug !== citySlug
        );

        nearbyCities.forEach((nearbyCity: CityGeocode) => {
          new google.maps.Marker({
            position: {
              lat: nearbyCity.coordinates.lat,
              lng: nearbyCity.coordinates.lng,
            },
            map,
            title: nearbyCity.name_ar,
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              scale: 6,
              fillColor: '#10b981',
              fillOpacity: 0.8,
              strokeColor: '#ffffff',
              strokeWeight: 1,
            },
          });
        });
      }
    } catch (err) {
      console.error('Error initializing map:', err);
      setError('حدث خطأ أثناء تحميل الخريطة');
    }
  }, [isLoaded, cityData, citySlug, showServiceRadius, showNearbyCities]);

  if (!cityData) {
    return (
      <div
        className="flex items-center justify-center bg-gray-100 rounded-lg"
        style={{ height }}
      >
        <p className="text-gray-600">لم يتم العثور على بيانات المدينة</p>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="flex items-center justify-center bg-gray-100 rounded-lg"
        style={{ height }}
      >
        <div className="text-center">
          <p className="text-red-600 mb-2">{error}</p>
          <p className="text-sm text-gray-500">
            الموقع: {cityData.name_ar} - {cityData.coordinates.lat.toFixed(4)},{' '}
            {cityData.coordinates.lng.toFixed(4)}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg">
      <div ref={mapRef} style={{ height, width: '100%' }} />
      {!isLoaded && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-gray-100"
          style={{ height }}
        >
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
            <p className="text-gray-600">جاري تحميل الخريطة...</p>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Static Map Component (fallback for no JS or API key)
 * Uses static Google Maps image API
 */
export function StaticMap({ citySlug, height = '300px' }: { citySlug: string; height?: string }) {
  const cityData = getCityGeocodeBySlug(citySlug);

  if (!cityData) return null;

  const { lat, lng } = cityData.coordinates;
  const zoom = cityData.tier === 1 ? 11 : cityData.tier === 2 ? 12 : 13;
  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=800x400&markers=color:blue%7C${lat},${lng}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;

  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg" style={{ height }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={mapUrl}
        alt={`خريطة ${cityData.name_ar}`}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <p className="text-white font-bold text-lg">{cityData.name_ar}</p>
        <p className="text-white/80 text-sm">{cityData.region}</p>
      </div>
    </div>
  );
}

