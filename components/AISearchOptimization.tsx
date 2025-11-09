/**
 * AI Search Optimization Component
 * Optimizes content for AI search engines like Perplexity, ChatGPT, Google AI
 */

type AISearchOptimizationProps = {
  pageType: 'service' | 'city-service' | 'subservice' | 'article' | 'home';
  data: {
    title: string;
    description: string;
    mainEntity?: string;
    location?: string;
    service?: string;
    price?: { min: number; max: number; currency: string };
    faqs?: Array<{ question: string; answer: string }>;
    features?: string[];
    benefits?: string[];
    keywords?: string[];
  };
};

export function AISearchOptimization({ pageType, data }: AISearchOptimizationProps) {
  // Generate AI-friendly structured data
  const generateAISchema = () => {
    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': pageType === 'article' ? 'Article' : 'Service',
      name: data.title,
      description: data.description,
      provider: {
        '@type': 'Organization',
        name: 'بروكر - Prokr',
        description: 'منصة رائدة للخدمات المنزلية في السعودية',
        url: 'https://prokr.com',
        logo: 'https://prokr.com/images/Logo.png',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+966-50-000-0000',
          contactType: 'customer service',
          areaServed: 'SA',
          availableLanguage: ['ar', 'en'],
        },
      },
    };

    // Add location if available
    if (data.location) {
      Object.assign(baseSchema, {
        areaServed: {
          '@type': 'City',
          name: data.location,
          containedInPlace: {
            '@type': 'Country',
            name: 'Saudi Arabia',
            '@id': 'https://www.wikidata.org/wiki/Q851',
          },
        },
      });
    }

    // Add price if available
    if (data.price) {
      Object.assign(baseSchema, {
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: data.price.currency,
          lowPrice: data.price.min,
          highPrice: data.price.max,
          priceValidUntil: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        },
      });
    }

    // Add FAQs if available
    if (data.faqs && data.faqs.length > 0) {
      const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: data.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      };
      
      return (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        </>
      );
    }

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchema) }}
      />
    );
  };

  return (
    <>
      {generateAISchema()}
    </>
  );
}

/**
 * Generate AI-optimized content structure
 */
export function AIContentStructure({ children }: { children: React.ReactNode }) {
  return (
    <article
      itemScope
      itemType="https://schema.org/Article"
      className="ai-optimized-content"
    >
      {children}
    </article>
  );
}

/**
 * AI-friendly FAQ component
 */
export function AIFAQSection({ 
  faqs 
}: { 
  faqs: Array<{ q: string; a: string }> 
}) {
  return (
    <div itemScope itemType="https://schema.org/FAQPage">
      {faqs.map((faq, index) => (
        <div
          key={`faq-${index}`}
          itemScope
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
          className="mb-6"
        >
          <h3 itemProp="name" className="text-xl font-bold text-gray-900 mb-3">
            {faq.q}
          </h3>
          <div
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <p itemProp="text" className="text-gray-700 leading-relaxed">
              {faq.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

