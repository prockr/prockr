/**
 * AI Metadata Endpoint
 * Provides structured data for AI search engines
 */

import { SERVICES } from '@/data/services';
import { CITIES, getTier1Cities } from '@/data/cities';
import { NextResponse } from 'next/server';

export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours

export async function GET() {
  const tier1Cities = getTier1Cities();

  const metadata = {
    site: {
      name: 'بروكر - Prokr',
      description: 'المنصة الرائدة للخدمات المنزلية في المملكة العربية السعودية',
      url: 'https://prokr.com',
      language: 'ar',
      country: 'SA',
      contact: {
        phone: '+966-50-000-0000',
        whatsapp: '+966-50-000-0000',
        availability: '24/7',
      },
    },
    services: SERVICES.map((service) => ({
      id: service.slug,
      name: service.name_ar,
      category: service.slug,
      description: `خدمة ${service.name_ar} احترافية في جميع مدن السعودية`,
      subservices: service.subservices.map((sub) => ({
        id: sub.slug,
        name: sub.name_ar,
        description: `${sub.name_ar} - خدمة متخصصة`,
        url: `/services/${service.slug}/${sub.slug}`,
      })),
      url: `/services/${service.slug}`,
      coverage: 'جميع مدن المملكة - 45+ مدينة',
    })),
    cities: tier1Cities.map((city) => ({
      id: city.slug,
      name: city.name_ar,
      tier: city.tier,
      availableServices: SERVICES.map((service) => ({
        service: service.name_ar,
        url: `/saudi/${city.slug}/${service.slug}`,
      })),
      description: `خدمات منزلية احترافية في ${city.name_ar} - متاحة 24/7`,
    })),
    coverage: {
      totalCities: CITIES.length,
      mainCities: tier1Cities.length,
      totalServices: SERVICES.length,
      totalSubservices: SERVICES.reduce((sum, s) => sum + s.subservices.length, 0),
    },
    features: [
      'فريق محترف معتمد',
      'خدمة 24/7 في جميع المدن',
      'أسعار تنافسية وشفافة',
      'ضمان مكتوب على جميع الخدمات',
      'استجابة سريعة - خلال 30-60 دقيقة',
      'أكثر من 45 مدينة في المملكة',
      'أحدث المعدات والتقنيات',
      'فريق دعم متاح دائماً',
    ],
    benefits: [
      'توفير الوقت والجهد',
      'جودة مضمونة 100%',
      'أسعار عادلة ومناسبة',
      'خدمة سريعة واحترافية',
      'فريق مدرب ومؤهل',
      'تأمين شامل على الخدمات',
    ],
    keywords: [
      'خدمات منزلية',
      'نقل عفش',
      'تنظيف منازل',
      'مكافحة حشرات',
      'كشف تسربات',
      'صيانة مكيفات',
      'عزل خزانات',
      'تسليك مجاري',
      'السعودية',
      'الرياض',
      'جدة',
      'الدمام',
      'مكة',
      'المدينة',
    ],
    lastUpdated: new Date().toISOString(),
  };

  return NextResponse.json(metadata, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

