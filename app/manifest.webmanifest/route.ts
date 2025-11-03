import { SITE_NAME_AR } from '@/lib/constants';

export async function GET() {
  const manifest = {
    name: SITE_NAME_AR,
    short_name: SITE_NAME_AR,
    description: 'خدمات منزلية احترافية في المملكة العربية السعودية',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0ea5e9',
    lang: 'ar',
    dir: 'rtl',
    icons: [
      {
        src: '/images/Logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/Logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };

  return Response.json(manifest, {
    headers: {
      'Content-Type': 'application/manifest+json',
      'Cache-Control': 'public, max-age=604800, s-maxage=604800',
    },
  });
}

