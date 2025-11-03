import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts, BLOG_CATEGORIES } from '@/data/blog';
import type { Metadata } from 'next';

type PageProps = {
  params: { category: string };
};

export function generateStaticParams() {
  return BLOG_CATEGORIES.map((category) => ({
    category: category.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const category = BLOG_CATEGORIES.find((cat) => cat.slug === params.category);
  
  if (!category) {
    return {
      title: 'الفئة غير موجودة',
    };
  }

  return {
    title: `${category.name} - مدونة بروكر`,
    description: category.description,
  };
}

export default function CategoryPage({ params }: PageProps) {
  const category = BLOG_CATEGORIES.find((cat) => cat.slug === params.category);

  if (!category) {
    notFound();
  }

  const categoryPosts = getAllPosts().filter((post) => post.category.slug === params.category);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary-100 hover:text-white mb-6 transition-colors"
            >
              <span>←</span>
              <span>العودة للمدونة</span>
            </Link>
            <div className="text-6xl mb-4">{category.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {category.name}
            </h1>
            <p className="text-xl text-primary-100">
              {category.description}
            </p>
            <div className="mt-6 text-primary-200">
              {categoryPosts.length} مقال
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {categoryPosts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📝</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                لا توجد مقالات في هذه الفئة بعد
              </h2>
              <p className="text-gray-600 mb-8">
                نعمل على إضافة محتوى جديد قريباً
              </p>
              <Link
                href="/blog"
                className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                العودة للمدونة
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {categoryPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="relative h-48 bg-gray-200">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                      {post.featured && (
                        <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                          ⭐ مميز
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-2xl">{post.category.icon}</span>
                        <span className="text-sm text-primary-600 font-medium">
                          {post.category.name}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex flex-col">
                          <span className="font-medium text-gray-700">
                            {post.author.name}
                          </span>
                          <span className="text-xs">{post.author.role}</span>
                        </div>
                        <div className="text-left">
                          <div>
                            {new Date(post.publishedAt).toLocaleDateString('ar-SA')}
                          </div>
                          <div className="text-xs">{post.readingTime} دقائق</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Other Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            تصفح فئات أخرى
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {BLOG_CATEGORIES.filter((cat) => cat.slug !== params.category).map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/category/${cat.slug}`}
                className="px-6 py-3 bg-gray-100 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors font-medium"
              >
                <span className="ml-2">{cat.icon}</span>
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

