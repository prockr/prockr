import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts, BLOG_CATEGORIES } from '@/data/blog';
import type { Metadata } from 'next';

// Category-specific content for better SEO
const categoryContent: Record<string, {
  longDescription: string;
  relatedServices: { name: string; href: string }[];
  tips: string[];
}> = {
  'home-maintenance': {
    longDescription: 'صيانة المنزل الدورية هي المفتاح للحفاظ على قيمة عقارك وتجنب الإصلاحات المكلفة. في هذا القسم، نقدم لك أدلة شاملة ونصائح عملية من خبراء الصيانة المنزلية في المملكة العربية السعودية. تعلم كيفية الكشف عن المشاكل مبكراً، وجدولة الصيانة الوقائية، واختيار أفضل مقدمي الخدمات.',
    relatedServices: [
      { name: 'كشف التسربات', href: '/services/leaks-plumbing' },
      { name: 'صيانة التكييف', href: '/services/ac' },
      { name: 'الكهرباء', href: '/services/electricity' },
      { name: 'عقود الصيانة', href: '/services/pest-control' },
    ],
    tips: [
      'اجعل الصيانة الوقائية عادة شهرية لتجنب الأعطال المفاجئة',
      'احتفظ بسجل لجميع أعمال الصيانة والتواريخ',
      'فحص نظام التكييف قبل الصيف يوفر 30% من تكاليف الإصلاح',
    ],
  },
  'moving-tips': {
    longDescription: 'نقل العفش يتطلب تخطيطاً دقيقاً وخبرة عملية. سواء كنت تنتقل داخل نفس المدينة أو بين المدن، نوفر لك هنا كل ما تحتاجه من نصائح حول التغليف الصحيح، اختيار شركة النقل المناسبة، تجنب الأخطاء الشائعة، وتنظيم عملية النقل بكفاءة.',
    relatedServices: [
      { name: 'نقل العفش', href: '/services/moving' },
      { name: 'تغليف الأثاث', href: '/services/moving/furniture-packing' },
      { name: 'التخزين', href: '/services/moving/storage' },
      { name: 'النقل بين المدن', href: '/services/moving/city-to-city' },
    ],
    tips: [
      'ابدأ التخطيط قبل موعد النقل بـ 3 أسابيع على الأقل',
      'تخلص من الأغراض غير الضرورية قبل النقل لتقليل التكلفة',
      'احجز شركة النقل في منتصف الشهر لأفضل الأسعار',
    ],
  },
  'cleaning-guides': {
    longDescription: 'التنظيف الاحترافي يتطلب معرفة الطرق الصحيحة والأدوات المناسبة. في هذا القسم نشارك أسرار التنظيف من المحترفين: كيفية تنظيف المواد المختلفة، جدول التنظيف المثالي، والتعامل مع البقع العنيدة. تعلم كيف تحافظ على نظافة منزلك بأقل جهد.',
    relatedServices: [
      { name: 'التنظيف العميق', href: '/services/cleaning/deep-cleaning' },
      { name: 'تنظيف السجاد', href: '/services/cleaning/carpet-rug' },
      { name: 'تنظيف الخزانات', href: '/services/cleaning/tank-cleaning' },
      { name: 'جلي الرخام', href: '/services/cleaning/marble-polishing' },
    ],
    tips: [
      'استخدم منتجات تنظيف آمنة خاصة مع وجود أطفال أو حيوانات',
      'التنظيف اليومي السريع يغنيك عن التنظيف العميق المتكرر',
      'تنظيف خزان المياه كل 6 أشهر ضروري لصحة العائلة',
    ],
  },
  'pest-control': {
    longDescription: 'مكافحة الآفات تتطلب فهماً للحشرات وسلوكها. نقدم لك معلومات شاملة عن أنواع الحشرات المنتشرة في السعودية، علامات الإصابة، طرق الوقاية الفعالة، ومتى تحتاج لمساعدة المتخصصين. احمِ منزلك وعائلتك من الآفات بالمعرفة الصحيحة.',
    relatedServices: [
      { name: 'مكافحة الحشرات', href: '/services/pest-control' },
      { name: 'مكافحة النمل الأبيض', href: '/services/pest-control/termites' },
      { name: 'مكافحة الصراصير', href: '/services/pest-control/cockroaches' },
      { name: 'شهادة البلدية', href: '/services/pest-control/municipality-certificate' },
    ],
    tips: [
      'سد الشقوق والفتحات يمنع 80% من دخول الحشرات',
      'عدم ترك الطعام مكشوفاً هو الوقاية الأولى',
      'الرش الدوري كل 6 أشهر يمنع الإصابات الكبيرة',
    ],
  },
  'energy-saving': {
    longDescription: 'توفير الطاقة في المنزل السعودي أصبح ضرورة مع ارتفاع تكاليف الكهرباء. نشارك معك أحدث النصائح والتقنيات لخفض فواتير الكهرباء والماء دون التأثير على راحتك. من ضبط المكيفات بشكل صحيح إلى اختيار الأجهزة الموفرة للطاقة.',
    relatedServices: [
      { name: 'صيانة المكيفات', href: '/services/ac' },
      { name: 'العزل الحراري', href: '/services/insulation-roofs/thermal-insulation' },
      { name: 'الكهرباء', href: '/services/electricity' },
      { name: 'كشف التسربات', href: '/services/leaks-plumbing' },
    ],
    tips: [
      'ضبط المكيف على 24 درجة يوفر 30% من الكهرباء',
      'العزل الحراري للأسطح يقلل استهلاك التكييف بشكل كبير',
      'فحص تسربات المياه شهرياً يوفر فاتورة المياه',
    ],
  },
  'saudi-homes': {
    longDescription: 'المنازل في المملكة العربية السعودية لها خصائص فريدة تتعلق بالمناخ الصحراوي والثقافة المحلية. نتناول في هذا القسم مواضيع خاصة بالمساكن السعودية: التعامل مع الحرارة الشديدة، العناية بالحدائق في البيئة الجافة، والمتطلبات البلدية والتنظيمية.',
    relatedServices: [
      { name: 'تنسيق الحدائق', href: '/services/landscaping' },
      { name: 'العزل الحراري', href: '/services/insulation-roofs' },
      { name: 'صيانة المكيفات', href: '/services/ac' },
      { name: 'الدهانات', href: '/services/painting-gypsum' },
    ],
    tips: [
      'الدهانات الفاتحة تعكس الحرارة وتحافظ على برودة المنزل',
      'النباتات المحلية تستهلك مياه أقل وتتحمل الحرارة أفضل',
      'تظليل النوافذ الشرقية والغربية يقلل الحرارة 40%',
    ],
  },
};

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
    alternates: {
      canonical: `https://prokr.com/blog/category/${params.category}`,
    },
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
              مقالات {category.name}
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              {categoryContent[params.category]?.longDescription || category.description}
            </p>
            <div className="mt-6 text-primary-200">
              {categoryPosts.length} مقال متخصص
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      {categoryContent[params.category]?.tips && (
        <section className="py-10 bg-gradient-to-r from-yellow-50 to-orange-50 border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                💡 نصائح سريعة عن {category.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {categoryContent[params.category].tips.map((tip, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-yellow-200">
                    <div className="flex items-start gap-3">
                      <span className="text-yellow-500 text-xl">✓</span>
                      <p className="text-gray-700 text-sm leading-relaxed">{tip}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Services Section */}
      {categoryContent[params.category]?.relatedServices && (
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap items-center justify-center gap-4">
                <span className="text-gray-600 font-medium">خدمات ذات صلة:</span>
                {categoryContent[params.category].relatedServices.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full hover:bg-primary-100 transition-colors text-sm font-medium"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              هل تحتاج مساعدة احترافية؟
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              فريقنا المتخصص جاهز لخدمتك في جميع مدن المملكة. احصل على استشارة مجانية الآن!
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
                اتصل بنا الآن
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

