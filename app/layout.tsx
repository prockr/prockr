import type { Metadata } from 'next';
import { Tajawal } from 'next/font/google';
import Script from 'next/script';
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
        
        {/* Statcounter Analytics */}
        <Script
          id="statcounter-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var sc_project=13017911;
              var sc_invisible=1;
              var sc_security="3e8e336f";
            `,
          }}
        />
        <Script
          id="statcounter-script"
          strategy="afterInteractive"
          src="https://www.statcounter.com/counter/counter.js"
        />
        <noscript>
          <div className="statcounter">
            <a
              title="Web Analytics Made Easy - Statcounter"
              href="https://statcounter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="statcounter"
                src="https://c.statcounter.com/13017911/0/3e8e336f/1/"
                alt="Web Analytics Made Easy - Statcounter"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </a>
          </div>
        </noscript>
      </body>
    </html>
  );
}

