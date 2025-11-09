import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'الشروط والأحكام | بروكر',
  description: 'الشروط والأحكام الخاصة باستخدام منصة بروكر للخدمات المنزلية في المملكة العربية السعودية',
};

export default function TermsPage() {
  const breadcrumbs = [
    { label: 'الرئيسية', href: '/' },
    { label: 'الشروط والأحكام', href: '/terms' },
  ];

  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            الشروط والأحكام
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام خدماتنا
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            {/* 1. مقدمة */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">1. مقدمة</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                مرحباً بك في <strong>بروكر</strong> - المنصة الرائدة للخدمات المنزلية في المملكة العربية السعودية. 
                باستخدامك لهذا الموقع أو تطبيقاتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام.
              </p>
              <p className="text-gray-700 leading-relaxed">
                تحكم هذه الشروط والأحكام استخدامك لجميع خدماتنا، بما في ذلك على سبيل المثال لا الحصر: 
                نقل العفش، التنظيف، مكافحة الحشرات، كشف التسربات، وغيرها من الخدمات المنزلية.
              </p>
            </div>

            {/* 2. قبول الشروط */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">2. قبول الشروط</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                بالوصول إلى هذا الموقع أو استخدامه، فإنك تقر بأنك:
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 mr-6">
                <li>قرأت هذه الشروط والأحكام بالكامل</li>
                <li>فهمت جميع بنود الاتفاقية</li>
                <li>توافق على الالتزام بها دون قيد أو شرط</li>
                <li>تبلغ من العمر 18 عاماً على الأقل أو تستخدم الخدمة بموافقة ولي الأمر</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام خدماتنا.
              </p>
            </div>

            {/* 3. الخدمات المقدمة */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">3. الخدمات المقدمة</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                تقدم بروكر منصة لربط العملاء بمقدمي الخدمات المنزلية المعتمدين. نحن نوفر:
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 mr-6">
                <li>منصة إلكترونية للبحث عن مقدمي الخدمات</li>
                <li>نظام حجز إلكتروني سهل وآمن</li>
                <li>فريق دعم متاح 24/7</li>
                <li>ضمان جودة على جميع الخدمات</li>
                <li>أسعار شفافة ومحددة مسبقاً</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4 bg-yellow-50 p-4 rounded-lg border-r-4 border-yellow-400">
                <strong>ملاحظة مهمة:</strong> بروكر هي منصة وسيطة. مقدمو الخدمات هم مقاولون مستقلون وليسوا موظفين لدى بروكر.
              </p>
            </div>

            {/* 4. التسجيل والحساب */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">4. التسجيل والحساب</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                لاستخدام بعض ميزات المنصة، قد تحتاج إلى إنشاء حساب. أنت مسؤول عن:
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 mr-6">
                <li>تقديم معلومات دقيقة وصحيحة عند التسجيل</li>
                <li>الحفاظ على سرية بيانات تسجيل الدخول</li>
                <li>جميع الأنشطة التي تتم عبر حسابك</li>
                <li>إخطارنا فوراً بأي استخدام غير مصرح به</li>
              </ul>
            </div>

            {/* 5. الحجز والدفع */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">5. الحجز والدفع</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">5.1 عملية الحجز</h3>
                  <p className="text-gray-700 leading-relaxed">
                    عند حجز خدمة عبر منصتنا، فإنك تدخل في اتفاقية مباشرة مع مقدم الخدمة. نحن نسهل هذه العملية ولا نكون طرفاً في العقد.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">5.2 الأسعار</h3>
                  <p className="text-gray-700 leading-relaxed">
                    جميع الأسعار المعروضة بالريال السعودي وشاملة ضريبة القيمة المضافة ما لم يُذكر خلاف ذلك. 
                    نحتفظ بالحق في تعديل الأسعار في أي وقت.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">5.3 طرق الدفع</h3>
                  <p className="text-gray-700 leading-relaxed">
                    نقبل الدفع عبر: البطاقات الائتمانية، مدى، Apple Pay، والدفع النقدي عند التسليم.
                  </p>
                </div>
              </div>
            </div>

            {/* 6. الإلغاء والاسترجاع */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">6. سياسة الإلغاء والاسترجاع</h2>
              <div className="space-y-4">
                <div className="bg-green-50 p-6 rounded-xl border-r-4 border-green-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">إلغاء مجاني</h3>
                  <p className="text-gray-700 leading-relaxed">
                    يمكنك إلغاء الحجز مجاناً قبل 24 ساعة من موعد تنفيذ الخدمة مع استرجاع كامل المبلغ.
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-xl border-r-4 border-yellow-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">إلغاء متأخر</h3>
                  <p className="text-gray-700 leading-relaxed">
                    الإلغاء خلال 24 ساعة من الموعد يخضع لرسوم إلغاء بنسبة 25% من قيمة الخدمة.
                  </p>
                </div>

                <div className="bg-red-50 p-6 rounded-xl border-r-4 border-red-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">عدم الحضور</h3>
                  <p className="text-gray-700 leading-relaxed">
                    في حالة عدم الحضور أو عدم إتاحة الوصول للموقع، لن يتم استرجاع المبلغ.
                  </p>
                </div>
              </div>
            </div>

            {/* 7. الضمان */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">7. الضمان والجودة</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                نحن نضمن جودة جميع الخدمات المقدمة عبر منصتنا:
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 mr-6">
                <li>ضمان مكتوب على جميع الخدمات</li>
                <li>مقدمو خدمات معتمدون ومفحوصون</li>
                <li>إعادة الخدمة مجاناً في حالة عدم الرضا</li>
                <li>تعويض عن أي أضرار ناتجة عن الإهمال</li>
              </ul>
            </div>

            {/* 8. المسؤولية */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">8. حدود المسؤولية</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                بروكر منصة وسيطة، وعليه:
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 mr-6">
                <li>نحن لسنا مسؤولين عن أفعال أو تقصير مقدمي الخدمات</li>
                <li>مسؤوليتنا تقتصر على قيمة الخدمة المحجوزة</li>
                <li>ننصح بالتأمين على الممتلكات القيمة</li>
                <li>نتحمل مسؤولية الأضرار الناتجة عن إهمالنا المباشر فقط</li>
              </ul>
            </div>

            {/* 9. الخصوصية */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">9. حماية البيانات</h2>
              <p className="text-gray-700 leading-relaxed">
                نحن ملتزمون بحماية خصوصيتك وبياناتك الشخصية. لمعرفة المزيد، يرجى الاطلاع على{' '}
                <Link href="/privacy" className="text-primary-600 hover:text-primary-700 underline font-bold">
                  سياسة الخصوصية
                </Link>
                .
              </p>
            </div>

            {/* 10. التعديلات */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">10. تعديل الشروط</h2>
              <p className="text-gray-700 leading-relaxed">
                نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت. سيتم إشعارك بأي تغييرات جوهرية عبر البريد الإلكتروني أو إشعار على الموقع.
                استمرارك في استخدام خدماتنا بعد التعديلات يعني موافقتك عليها.
              </p>
            </div>

            {/* 11. القانون الحاكم */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">11. القانون الحاكم</h2>
              <p className="text-gray-700 leading-relaxed">
                تخضع هذه الشروط والأحكام لقوانين المملكة العربية السعودية ويتم تفسيرها وفقاً لها. 
                أي نزاع ينشأ عن هذه الاتفاقية يخضع للاختصاص القضائي الحصري للمحاكم السعودية.
              </p>
            </div>

            {/* 12. الاتصال */}
            <div className="mb-12 bg-primary-50 p-8 rounded-xl border-r-4 border-primary-600">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">12. اتصل بنا</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                إذا كان لديك أي أسئلة حول هذه الشروط والأحكام، يرجى التواصل معنا:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="text-2xl">📧</span>
                  <span>info@prokr.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">📞</span>
                  <span className="font-bold">+966-50-000-0000</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">💬</span>
                  <span>واتساب: +966-50-000-0000</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🌐</span>
                  <span>www.prokr.com</span>
                </li>
              </ul>
            </div>

            {/* آخر تحديث */}
            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600">
                آخر تحديث: 9 يناير 2025
              </p>
              <p className="text-gray-500 text-sm mt-2">
                الإصدار 2.0
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            هل أنت جاهز للبدء؟
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            استكشف خدماتنا واحجز الآن بكل ثقة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="px-10 py-5 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all font-bold text-xl shadow-xl transform hover:scale-105"
            >
              تصفح الخدمات
            </Link>
            <Link
              href="/contact"
              className="px-10 py-5 bg-white text-primary-600 border-2 border-primary-600 rounded-xl hover:bg-primary-50 transition-all font-bold text-xl shadow-xl transform hover:scale-105"
            >
              اتصل بنا
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

