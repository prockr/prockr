'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // تحويل فوري من جانب العميل
    router.replace('/');
  }, [router]);

  // Fallback - meta refresh في حال فشل JavaScript
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/" />
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">جاري التحويل...</p>
        </div>
      </div>
    </>
  );
}

