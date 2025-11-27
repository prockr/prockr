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
  // Redirects for SEO - fix broken links and old URLs
  async redirects() {
    return [
      // Service slug fixes
      { source: '/services/electrical', destination: '/services/electricity', permanent: true },
      { source: '/services/plumbing', destination: '/services/leaks-plumbing', permanent: true },
      { source: '/services/appliance-repair', destination: '/services/appliances', permanent: true },
      
      // Subservice slug fixes
      { source: '/services/moving/packing', destination: '/services/moving/furniture-packing', permanent: true },
      { source: '/services/moving/disassembly', destination: '/services/moving/disassembly-assembly', permanent: true },
      { source: '/services/cleaning/carpets', destination: '/services/cleaning/carpet-rug', permanent: true },
      { source: '/services/cleaning/deep', destination: '/services/cleaning/deep-cleaning', permanent: true },
      { source: '/services/cleaning/tanks', destination: '/services/cleaning/tank-cleaning', permanent: true },
      { source: '/services/cleaning/steam', destination: '/services/cleaning/sanitization', permanent: true },
      
      // City slug fixes
      { source: '/saudi/buraidah', destination: '/saudi/buraydah', permanent: true },
      { source: '/saudi/buraidah/:path*', destination: '/saudi/buraydah/:path*', permanent: true },
      
      // Service name variations in city pages
      { source: '/saudi/:city/ac-maintenance', destination: '/saudi/:city/ac', permanent: true },
      { source: '/saudi/:city/electrician', destination: '/saudi/:city/electricity', permanent: true },
      { source: '/saudi/:city/plumber', destination: '/saudi/:city/leaks-plumbing', permanent: true },
      { source: '/saudi/:city/plumbing', destination: '/saudi/:city/leaks-plumbing', permanent: true },
      
      // Legacy URL patterns
      { source: '/city/:city', destination: '/saudi/:city', permanent: true },
      { source: '/service/:service', destination: '/services/:service', permanent: true },
    ];
  },
  
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

