/**
 * Hreflang Links Component
 * Renders hreflang alternate links in the HTML head
 * Prepared for future multilingual support
 */

import { generateHreflangLinks, type HreflangLink } from '@/lib/seo';

interface HreflangLinksProps {
  path: string;
}

export function HreflangLinks({ path }: HreflangLinksProps) {
  const links = generateHreflangLinks(path);

  return (
    <>
      {links.map((link: HreflangLink) => (
        <link
          key={link.hreflang}
          rel="alternate"
          hrefLang={link.hreflang}
          href={link.href}
        />
      ))}
    </>
  );
}

