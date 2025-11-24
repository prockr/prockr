import Link from 'next/link';
import { RichServiceContent } from '@/lib/rich-content';

interface RichContentSectionsProps {
  content: RichServiceContent;
  serviceName: string;
  cityName: string;
}

export function RichContentSections({ content, serviceName, cityName }: RichContentSectionsProps) {
  return (
    <>
      {/* Detailed Introduction */}
      {content.detailedIntro && content.detailedIntro.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center border-b-4 border-primary-600 inline-block pb-2">
                {serviceName} في {cityName} - دليل شامل
              </h2>
              
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6 mt-8">
                {content.detailedIntro.map((paragraph, index) => (
                  <p key={index} className="text-lg leading-loose">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              {/* Internal Links */}
              {content.internalLinks && content.internalLinks.length > 0 && (
                <div className="mt-8 p-6 bg-primary-50 rounded-lg border-l-4 border-primary-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">🔗 روابط مفيدة:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {content.internalLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.url}
                        className="text-primary-600 hover:text-primary-800 font-semibold flex items-center gap-2 transition-colors"
                      >
                        <span className="text-primary-600">→</span>
                        {link.text}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* How It Works */}
      {content.howItWorks && content.howItWorks.content.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
                {content.howItWorks.title}
              </h2>
              <p className="text-xl text-gray-600 text-center mb-12">
                خطوات بسيطة ونتائج مضمونة
              </p>
              
              <div className="space-y-6">
                {content.howItWorks.content.map((step, index) => {
                  const isHightlighted = step.startsWith('**');
                  const cleanText = step.replace(/\*\*/g, '');
                  const parts = cleanText.split(' - ');
                  const title = parts[0];
                  const description = parts[1] || cleanText;
                  
                  return (
                    <div key={index} className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-all duration-300 border-r-4 border-primary-600">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            {isHightlighted ? title : cleanText.substring(0, 100)}
                          </h3>
                          <p className="text-gray-700 leading-relaxed text-lg">
                            {isHightlighted ? description : ''}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Benefits */}
      {content.benefits && content.benefits.content.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
                {content.benefits.title}
              </h2>
              <p className="text-xl text-gray-600 text-center mb-12">
                مزايا فريدة تجعلنا الخيار الأول
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {content.benefits.content.map((benefit, index) => {
                  const parts = benefit.split(' - ');
                  const title = parts[0].replace(/\*\*/g, '').replace('**', '');
                  const description = parts[1] || benefit.replace(/\*\*/g, '');
                  
                  const icons = ['✅', '🌟', '💎', '🎯', '🏆', '⭐'];
                  const icon = icons[index % icons.length];
                  
                  return (
                    <div key={index} className="bg-gradient-to-br from-primary-50 to-white rounded-xl shadow-md p-6 border-2 border-primary-100 hover:border-primary-300 transition-all">
                      <div className="flex items-start gap-4">
                        <div className="text-4xl flex-shrink-0">{icon}</div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {title}
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            {description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Common Mistakes */}
      {content.commonMistakes && content.commonMistakes.content.length > 0 && (
        <section className="py-16 bg-red-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
                {content.commonMistakes.title}
              </h2>
              <p className="text-xl text-gray-600 text-center mb-12">
                تعلّم من أخطاء الآخرين ووفّر على نفسك المتاعب
              </p>
              
              <div className="space-y-6">
                {content.commonMistakes.content.map((mistake, index) => {
                  const parts = mistake.split(' - ');
                  const title = parts[0].replace(/\*\*/g, '');
                  const description = parts[1] || mistake.replace(/\*\*/g, '');
                  
                  return (
                    <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
                      <div className="flex items-start gap-4">
                        <div className="text-4xl flex-shrink-0">⚠️</div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-red-700 mb-3">
                            {title}
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            {description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Tips */}
      {content.tips && content.tips.content.length > 0 && (
        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
                {content.tips.title}
              </h2>
              <p className="text-xl text-gray-600 text-center mb-12">
                نصائح الخبراء لنتائج مثالية
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {content.tips.content.map((tip, index) => {
                  const parts = tip.split(' - ');
                  const title = parts[0].replace(/\*\*/g, '');
                  const description = parts[1] || tip.replace(/\*\*/g, '');
                  
                  return (
                    <div key={index} className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
                      <div className="flex items-start gap-4">
                        <div className="text-3xl flex-shrink-0">💡</div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-green-700 mb-2">
                            {title}
                          </h3>
                          <p className="text-gray-700 leading-relaxed text-sm">
                            {description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Comparison */}
      {content.comparison && content.comparison.content.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
                {content.comparison.title}
              </h2>
              <p className="text-xl text-gray-600 text-center mb-12">
                قارن واختر الأفضل لك
              </p>
              
              <div className="space-y-6">
                {content.comparison.content.map((item, index) => {
                  const parts = item.split(': ');
                  const title = parts[0].replace(/\*\*/g, '');
                  const description = parts[1] || item.replace(/\*\*/g, '');
                  
                  return (
                    <div key={index} className="bg-gradient-to-r from-blue-50 to-white rounded-xl shadow-md p-6 border-2 border-blue-200">
                      <h3 className="text-2xl font-bold text-blue-900 mb-3">
                        {title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* City Info */}
      {content.cityInfo && content.cityInfo.content.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-primary-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
                {content.cityInfo.title}
              </h2>
              <p className="text-xl text-gray-600 text-center mb-12">
                نعرف مدينتك جيداً
              </p>
              
              <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
                {content.cityInfo.content.map((paragraph, index) => (
                  <p key={index} className="text-lg text-gray-700 leading-loose">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      {content.whyChooseUs && content.whyChooseUs.content.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
                {content.whyChooseUs.title}
              </h2>
              <p className="text-xl text-gray-600 text-center mb-12">
                الثقة والجودة في كل خدمة
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {content.whyChooseUs.content.map((reason, index) => {
                  const parts = reason.split(': ');
                  const title = parts[0].replace(/\*\*/g, '');
                  const description = parts[1] || reason.replace(/\*\*/g, '');
                  
                  return (
                    <div key={index} className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
                      <div className="text-center mb-4">
                        <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                          {index + 1}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                        {title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-sm text-center">
                        {description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {content.testimonials && content.testimonials.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
                ماذا يقول عملاؤنا؟
              </h2>
              <p className="text-xl text-gray-600 text-center mb-12">
                شهادات حقيقية من عملاء راضين
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {content.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-lg p-6 border-2 border-primary-100">
                    <div className="flex items-center gap-1 mb-4 justify-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-2xl text-yellow-400">⭐</span>
                      ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4 text-center italic">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <div className="text-center">
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.area}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {content.relatedServices && content.relatedServices.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
                خدمات ذات صلة قد تهمك
              </h2>
              <p className="text-xl text-gray-600 text-center mb-12">
                اكتشف المزيد من خدماتنا المتميزة
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {content.relatedServices.map((service, index) => (
                  <Link
                    key={index}
                    href={service.link}
                    className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-transparent hover:border-primary-600"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="text-primary-600 font-semibold flex items-center gap-2">
                      اعرف المزيد <span>←</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

