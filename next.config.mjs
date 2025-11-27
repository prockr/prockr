/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['ar'],
    defaultLocale: 'ar',
  },
  images: {
    // Priority: AVIF (best compression) → WebP → JPEG
    formats: ['image/avif', 'image/webp'],
    // Optimized device sizes for Saudi mobile users (70%+ mobile)
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    // 1 year cache for immutable images
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: false,
    remotePatterns: [],
    loader: 'default',
    path: '/_next/image',
    domains: [],
  },
  // Enable SWC minification for faster builds
  swcMinify: true,
  // PoweredByHeader removal for smaller response
  poweredByHeader: false,
  // Compression
  compress: true,
  // ISR default
  experimental: {
    staleTimes: {
      dynamic: 86400, // 1 day
    },
  },
  // Redirects configuration - not used for 404s as they need special handling
  // 404s are handled by not-found.tsx with client-side redirect
  
  // Headers for caching and AI optimization
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
          },
          {
            key: 'X-AI-Index',
            value: 'allow',
          },
        ],
      },
      {
        source: '/ai-metadata',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=86400',
          },
        ],
      },
      {
        source: '/.well-known/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

