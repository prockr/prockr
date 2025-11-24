import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // الحصول على URL الحالي
  const url = request.nextUrl.clone();
  
  // قائمة المسارات الصالحة (patterns)
  const validPathPatterns = [
    /^\/$/,                                           // الصفحة الرئيسية
    /^\/about$/,
    /^\/contact$/,
    /^\/providers$/,
    /^\/coverage$/,
    /^\/terms$/,
    /^\/privacy$/,
    /^\/faqs$/,
    /^\/services$/,
    /^\/services\/[^/]+$/,
    /^\/services\/[^/]+\/[^/]+$/,
    /^\/saudi$/,
    /^\/saudi\/[^/]+$/,
    /^\/saudi\/[^/]+\/[^/]+$/,
    /^\/saudi\/[^/]+\/[^/]+\/[^/]+$/,
    /^\/pricing$/,
    /^\/pricing\/[^/]+\/[^/]+$/,
    /^\/faq\/[^/]+\/[^/]+$/,
    /^\/deals$/,
    /^\/deals\/[^/]+\/[^/]+$/,
    /^\/emergency$/,
    /^\/emergency\/[^/]+\/[^/]+$/,
    /^\/blog$/,
    /^\/blog\/[^/]+$/,
    /^\/blog\/category\/[^/]+$/,
    /^\/service-area$/,
    /^\/test-map$/,
    /^\/_next\/.+$/,                                  // Next.js assets
    /^\/images\/.+$/,                                 // Images
    /^\/api\/.+$/,                                    // API routes
    /^\/sitemap\.xml$/,                               // Sitemap
    /^\/sitemaps\/.+\.xml$/,                          // Sitemaps
    /^\/robots\.txt$/,                                // Robots
    /^\/manifest\.webmanifest$/,                      // Manifest
    /^\/favicon\.ico$/,                               // Favicon
    /^\/googlecc00a0a77f0a60b5\.html$/,              // Google verification
    /^\/\.well-known\/.+$/,                           // Well-known
    /^\/ai-metadata$/,                                // AI metadata
  ];

  const pathname = url.pathname;

  // تحقق إذا كان المسار صالحاً
  const isValidPath = validPathPatterns.some(pattern => pattern.test(pathname));

  // إذا لم يكن المسار صالحاً، حوّل للصفحة الرئيسية
  if (!isValidPath && !pathname.startsWith('/_next/') && !pathname.includes('.')) {
    url.pathname = '/';
    return NextResponse.redirect(url, 308); // 308 Permanent Redirect
  }

  return NextResponse.next();
}

// تحديد المسارات التي سيعمل عليها الـ middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files with extensions
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
};

