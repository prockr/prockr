import type { Metadata } from 'next';
import { Tajawal } from 'next/font/google';
import './globals.css';
import { generateMetadata as genMetadata } from '@/lib/seo';
import { generateLocalBusinessSchema } from '@/lib/schema';
import { SchemaInjector } from '@/components/SchemaInjector';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const tajawal = Tajawal({
  weight: ['300', '400', '500', '700', '800'],
  subsets: ['arabic'],
  variable: '--font-tajawal',
  display: 'swap',
});

export const metadata: Metadata = genMetadata({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemas = [generateLocalBusinessSchema()];

  return (
    <html lang="ar" dir="rtl" className={tajawal.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <SchemaInjector schemas={schemas} />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

