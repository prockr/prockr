'use client';

import { useState } from 'react';
import { CITIES, getTier1Cities } from '@/data/cities';
import Link from 'next/link';

interface CitySelectorProps {
  serviceSlug: string;
  subserviceSlug?: string;
  variant?: 'dropdown' | 'grid' | 'compact';
  className?: string;
}

export function CitySelector({
  serviceSlug,
  subserviceSlug,
  variant = 'grid',
  className = '',
}: CitySelectorProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTier, setSelectedTier] = useState<number | 'all'>('all');

  // Filter cities based on search and tier
  const filteredCities = CITIES.filter((city) => {
    const matchesSearch = city.name_ar.includes(searchTerm);
    const matchesTier = selectedTier === 'all' || city.tier === selectedTier;
    return matchesSearch && matchesTier;
  });

  const tier1Cities = getTier1Cities();

  // Build URL based on whether it's a subservice or not
  const getCityUrl = (citySlug: string) => {
    if (subserviceSlug) {
      return `/saudi/${citySlug}/${serviceSlug}/${subserviceSlug}`;
    }
    return `/saudi/${citySlug}/${serviceSlug}`;
  };

  if (variant === 'compact') {
    return (
      <div className={`bg-white rounded-xl shadow-lg p-6 ${className}`}>
        <h3 className="text-xl font-bold text-gray-900 mb-4">اختر مدينتك</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {tier1Cities.map((city) => (
            <Link
              key={city.slug}
              href={getCityUrl(city.slug)}
              className="block p-4 bg-primary-50 hover:bg-primary-100 rounded-lg text-center transition-colors group"
            >
              <div className="text-2xl mb-1">📍</div>
              <div className="font-bold text-gray-900 group-hover:text-primary-600">
                {city.name_ar}
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-4 text-center">
          <button
            onClick={() => {
              const elem = document.getElementById('all-cities');
              elem?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-primary-600 hover:underline text-sm font-medium"
          >
            عرض جميع المدن ({CITIES.length}+) ←
          </button>
        </div>
      </div>
    );
  }

  if (variant === 'dropdown') {
    return (
      <div className={`bg-white rounded-xl shadow-lg p-6 ${className}`}>
        <label className="block text-lg font-bold text-gray-900 mb-3">
          اختر المدينة:
        </label>
        <select
          onChange={(e) => {
            if (e.target.value) {
              window.location.href = getCityUrl(e.target.value);
            }
          }}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 text-lg"
          defaultValue=""
        >
          <option value="" disabled>
            -- اختر مدينتك --
          </option>
          <optgroup label="المدن الرئيسية">
            {tier1Cities.map((city) => (
              <option key={city.slug} value={city.slug}>
                {city.name_ar}
              </option>
            ))}
          </optgroup>
          <optgroup label="مدن أخرى">
            {CITIES.filter((c) => c.tier !== 1).map((city) => (
              <option key={city.slug} value={city.slug}>
                {city.name_ar}
              </option>
            ))}
          </optgroup>
        </select>
      </div>
    );
  }

  // Grid variant (default)
  return (
    <div className={className}>
      {/* Search & Filter */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Search */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              ابحث عن مدينة
            </label>
            <input
              type="text"
              placeholder="اكتب اسم المدينة..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
            />
          </div>

          {/* Tier Filter */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              تصنيف المدن
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedTier('all')}
                className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
                  selectedTier === 'all'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                الكل ({CITIES.length})
              </button>
              <button
                onClick={() => setSelectedTier(1)}
                className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
                  selectedTier === 1
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                الرئيسية
              </button>
              <button
                onClick={() => setSelectedTier(2)}
                className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
                  selectedTier === 2
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                ثانوية
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cities Grid */}
      <div id="all-cities" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredCities.length > 0 ? (
          filteredCities.map((city) => (
            <Link
              key={city.slug}
              href={getCityUrl(city.slug)}
              className="block p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 group"
            >
              <div className="text-center">
                <div className="text-4xl mb-3">
                  {city.tier === 1 ? '🏙️' : city.tier === 2 ? '📍' : '🏘️'}
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors text-lg">
                  {city.name_ar}
                </h3>
                {city.tier === 1 && (
                  <span className="inline-block mt-2 px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                    مدينة رئيسية
                  </span>
                )}
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-600 text-lg">لم يتم العثور على مدن مطابقة</p>
          </div>
        )}
      </div>

      {/* Results Count */}
      {searchTerm && (
        <div className="mt-6 text-center text-gray-600">
          عرض {filteredCities.length} من أصل {CITIES.length} مدينة
        </div>
      )}
    </div>
  );
}

