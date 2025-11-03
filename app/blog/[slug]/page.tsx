import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getPostBySlug, getRelatedPosts, getAllPosts } from '@/data/blog';
import { generateMetadata as genMetadata } from '@/lib/seo';
import { SchemaInjector } from '@/components/SchemaInjector';
import { SITE_NAME_AR, SITE_URL, REVALIDATE_DEFAULT } from '@/lib/constants';
import { absoluteUrl } from '@/lib/urls';
import type { Metadata } from 'next';

export const revalidate = REVALIDATE_DEFAULT;

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'المقال غير موجود | بروكر',
    };
  }

  return genMetadata({
    title: `${post.title} | ${SITE_NAME_AR}`,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    image: post.image,
  });
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, 3);
  
  const publishDate = new Date(post.publishedAt);
  const updateDate = post.updatedAt ? new Date(post.updatedAt) : null;

  // Schema.org JSON-LD for Article
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: [absoluteUrl(post.image)],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME_AR,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/images/Logo.png'),
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl(`/blog/${post.slug}`),
    },
    articleSection: post.category.name,
    keywords: post.tags.join(', '),
    inLanguage: 'ar',
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'الرئيسية',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'المدونة',
        item: absoluteUrl('/blog'),
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: absoluteUrl(`/blog/${post.slug}`),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SchemaInjector schemas={[articleSchema, breadcrumbSchema]} />

      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary-600">الرئيسية</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary-600">المدونة</Link>
            <span>/</span>
            <span className="text-gray-900">{post.category.name}</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <Link
              href={`/blog/category/${post.category.slug}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full hover:bg-primary-200 transition-colors mb-6"
            >
              <span>{post.category.icon}</span>
              <span className="font-medium">{post.category.name}</span>
            </Link>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">{post.author.name}</div>
                  <div className="text-sm">{post.author.role}</div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <time dateTime={post.publishedAt}>
                    {publishDate.toLocaleDateString('ar-SA', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
                {updateDate && (
                  <div className="flex items-center gap-2 text-primary-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span>تحديث: {updateDate.toLocaleDateString('ar-SA', { year: 'numeric', month: 'long' })}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{post.readingTime} دقائق قراءة</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden mb-12 shadow-2xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg prose-gray max-w-none mb-12" 
                 style={{ direction: 'rtl' }}
                 dangerouslySetInnerHTML={{ __html: post.content.split('\n').map(line => {
                   // Convert markdown-style headers
                   if (line.startsWith('## ')) {
                     return `<h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">${line.replace('## ', '')}</h2>`;
                   }
                   if (line.startsWith('### ')) {
                     return `<h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">${line.replace('### ', '')}</h3>`;
                   }
                   if (line.startsWith('#### ')) {
                     return `<h4 class="text-xl font-bold text-gray-900 mt-6 mb-3">${line.replace('#### ', '')}</h4>`;
                   }
                   // Bold text
                   line = line.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>');
                   // Lists
                   if (line.startsWith('- ')) {
                     return `<li class="mb-2">${line.replace('- ', '')}</li>`;
                   }
                   // Regular paragraphs
                   if (line.trim() && !line.includes('<')) {
                     return `<p class="mb-4 leading-relaxed">${line}</p>`;
                   }
                   return line;
                 }).join('') }}
            />

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-4">الوسوم</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Share & CTA */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                هل كانت هذه المقالة مفيدة؟
              </h3>
              <p className="text-gray-700 text-center mb-6">
                شاركها مع أصدقائك أو تواصل معنا للحصول على المساعدة
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/services"
                  className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-bold text-center"
                >
                  تصفح خدماتنا
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition-colors font-bold text-center"
                >
                  تواصل معنا
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                مقالات ذات صلة
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <article key={relatedPost.slug} className="group">
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="text-sm text-primary-600 font-medium mb-2">
                        {relatedPost.category.icon} {relatedPost.category.name}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2 mb-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

