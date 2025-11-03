import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts, getFeaturedPosts, BLOG_CATEGORIES } from '@/data/blog';
import { generateMetadata as genMetadata } from '@/lib/seo';
import { REVALIDATE_DEFAULT } from '@/lib/constants';
import type { Metadata } from 'next';

export const revalidate = REVALIDATE_DEFAULT;

export const metadata: Metadata = genMetadata({
  title: 'مدونة بروكر - نصائح وأدلة للعناية بالمنزل في السعودية',
  description: 'اكتشف أحدث النصائح والأدلة الشاملة للعناية بمنزلك. محتوى حصري من خبراء سعوديين في الصيانة، التنظيف، النقل، ومكافحة الآفات.',
  path: '/blog',
});

export default function BlogPage() {
  const featuredPosts = getFeaturedPosts(3);
  const allPosts = getAllPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              مدونة بروكر
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8">
              نصائح عملية من خبراء سعوديين لمنزل أفضل
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {BLOG_CATEGORIES.map((category) => (
                <Link
                  key={category.slug}
                  href={`/blog/category/${category.slug}`}
                  className="px-4 py-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full transition-colors"
                >
                  <span className="ml-2">{category.icon}</span>
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              مقالات مميزة
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.slug} className="group">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-primary-600 text-white text-sm rounded-full">
                          {post.category.icon} {post.category.name}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <span>{post.author.name}</span>
                      </div>
                      <span>{post.readingTime} دقائق</span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            جميع المقالات
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <Link href={`/blog/${post.slug}`} className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-48 h-48 flex-shrink-0">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{post.category.icon}</span>
                      <span className="text-sm text-primary-600 font-medium">
                        {post.category.name}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-primary-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex flex-col">
                        <span className="font-medium text-gray-700">{post.author.name}</span>
                        <span className="text-xs">{post.author.role}</span>
                      </div>
                      <div className="text-left">
                        <div>{new Date(post.publishedAt).toLocaleDateString('ar-SA')}</div>
                        <div className="text-xs">{post.readingTime} دقائق قراءة</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            هل تحتاج مساعدة مع منزلك؟
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            فريقنا من الخبراء جاهز لمساعدتك في جميع احتياجات الصيانة والخدمات المنزلية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="px-8 py-4 bg-white text-primary-600 rounded-xl hover:bg-gray-100 transition-colors font-bold text-lg"
            >
              تصفح خدماتنا
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-yellow-400 text-gray-900 rounded-xl hover:bg-yellow-300 transition-colors font-bold text-lg"
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

