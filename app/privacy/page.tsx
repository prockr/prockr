import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'سياسة الخصوصية | بروكر',
  description: 'سياسة الخصوصية وحماية البيانات الشخصية في منصة بروكر للخدمات المنزلية',
};

export default function PrivacyPage() {
  const breadcrumbs = [
    { label: 'الرئيسية', href: '/' },
    { label: 'سياسة الخصوصية', href: '/privacy' },
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
            سياسة الخصوصية
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            نحن ملتزمون بحماية خصوصيتك وبياناتك الشخصية
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            {/* مقدمة */}
            <div className="mb-12 bg-blue-50 p-8 rounded-xl border-r-4 border-blue-600">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">التزامنا بالخصوصية</h2>
              <p className="text-gray-700 leading-relaxed">
                في <strong>بروكر</strong>، نحترم خصوصيتك ونلتزم بحماية معلوماتك الشخصية. 
                توضح هذه السياسة كيفية جمعنا واستخدامنا وحمايتنا ومشاركتنا لبياناتك الشخصية.
              </p>
            </div>

            {/* 1. البيانات التي نجمعها */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">1. البيانات التي نجمعها</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">1.1 البيانات الشخصية</h3>
                  <p className="text-gray-700 mb-3">عند التسجيل أو استخدام خدماتنا، قد نجمع:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mr-6">
                    <li>الاسم الكامل</li>
                    <li>رقم الهاتف</li>
                    <li>عنوان البريد الإلكتروني</li>
                    <li>العنوان الوطني أو عنوان الخدمة</li>
                    <li>تفاصيل الدفع (بشكل آمن ومشفر)</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">1.2 بيانات الاستخدام</h3>
                  <p className="text-gray-700 mb-3">نجمع تلقائياً:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mr-6">
                    <li>عنوان IP الخاص بك</li>
                    <li>نوع المتصفح والجهاز</li>
                    <li>الصفحات التي تزورها</li>
                    <li>وقت وتاريخ الزيارة</li>
                    <li>مدة البقاء في الموقع</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">1.3 بيانات الموقع</h3>
                  <p className="text-gray-700">
                    قد نجمع بيانات موقعك (بإذنك) لتقديم خدمات محلية دقيقة وتحسين تجربتك.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. كيف نستخدم بياناتك */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">2. كيف نستخدم بياناتك</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-xl border-r-4 border-green-600">
                  <div className="text-3xl mb-3">📋</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">تقديم الخدمات</h3>
                  <p className="text-gray-700">
                    معالجة حجوزاتك وتنفيذ الخدمات المطلوبة
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border-r-4 border-blue-600">
                  <div className="text-3xl mb-3">📞</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">التواصل</h3>
                  <p className="text-gray-700">
                    إرسال تأكيدات وتحديثات وإشعارات مهمة
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-xl border-r-4 border-purple-600">
                  <div className="text-3xl mb-3">📊</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">التحسين</h3>
                  <p className="text-gray-700">
                    تحليل الاستخدام لتحسين خدماتنا
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-xl border-r-4 border-yellow-600">
                  <div className="text-3xl mb-3">🔒</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">الأمان</h3>
                  <p className="text-gray-700">
                    منع الاحتيال وحماية حساباتك
                  </p>
                </div>

                <div className="bg-red-50 p-6 rounded-xl border-r-4 border-red-600">
                  <div className="text-3xl mb-3">📢</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">التسويق</h3>
                  <p className="text-gray-700">
                    إرسال عروض خاصة (يمكنك إلغاء الاشتراك)
                  </p>
                </div>

                <div className="bg-indigo-50 p-6 rounded-xl border-r-4 border-indigo-600">
                  <div className="text-3xl mb-3">⚖️</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">الامتثال</h3>
                  <p className="text-gray-700">
                    الالتزام بالقوانين والأنظمة
                  </p>
                </div>
              </div>
            </div>

            {/* 3. مشاركة البيانات */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">3. مشاركة البيانات</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                نحن لا نبيع بياناتك الشخصية. قد نشارك معلوماتك فقط مع:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl">
                  <span className="text-3xl">🤝</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">مقدمو الخدمات</h3>
                    <p className="text-gray-700">
                      نشارك المعلومات الضرورية فقط لتنفيذ الخدمة (الاسم، العنوان، رقم الهاتف)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl">
                  <span className="text-3xl">🏦</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">معالجو الدفع</h3>
                    <p className="text-gray-700">
                      معلومات الدفع يتم نقلها بشكل آمن ومشفر إلى معالجي الدفع المعتمدين
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl">
                  <span className="text-3xl">📊</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">مزودو التحليلات</h3>
                    <p className="text-gray-700">
                      بيانات مجمعة ومجهولة لتحسين الخدمة (مثل Google Analytics)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl">
                  <span className="text-3xl">⚖️</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">الجهات القانونية</h3>
                    <p className="text-gray-700">
                      عند الطلب من السلطات المختصة أو بموجب القانون
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. حماية البيانات */}
            <div className="mb-12 bg-green-50 p-8 rounded-xl border-r-4 border-green-600">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">4. كيف نحمي بياناتك</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                نستخدم تدابير أمنية متقدمة لحماية معلوماتك:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🔐</span>
                  <span><strong>تشفير SSL/TLS:</strong> جميع البيانات المنقولة مشفرة</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🛡️</span>
                  <span><strong>جدران حماية:</strong> حماية متقدمة للخوادم</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">👁️</span>
                  <span><strong>مراقبة مستمرة:</strong> كشف التهديدات على مدار الساعة</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🔑</span>
                  <span><strong>وصول محدود:</strong> فقط الموظفون المصرح لهم</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">📱</span>
                  <span><strong>مصادقة ثنائية:</strong> حماية إضافية لحسابك</span>
                </li>
              </ul>
            </div>

            {/* 5. حقوقك */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">5. حقوقك</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                لديك الحقوق التالية فيما يتعلق ببياناتك الشخصية:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">✅ حق الوصول</h3>
                  <p className="text-gray-700">
                    طلب نسخة من بياناتك الشخصية
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">✏️ حق التصحيح</h3>
                  <p className="text-gray-700">
                    تحديث أو تصحيح بياناتك غير الدقيقة
                  </p>
                </div>

                <div className="bg-red-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🗑️ حق الحذف</h3>
                  <p className="text-gray-700">
                    طلب حذف بياناتك الشخصية
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">⛔ حق الاعتراض</h3>
                  <p className="text-gray-700">
                    الاعتراض على معالجة بياناتك
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">📋 حق النقل</h3>
                  <p className="text-gray-700">
                    الحصول على بياناتك بصيغة قابلة للاستخدام
                  </p>
                </div>

                <div className="bg-indigo-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🚫 حق الرفض</h3>
                  <p className="text-gray-700">
                    رفض التسويق المباشر في أي وقت
                  </p>
                </div>
              </div>
            </div>

            {/* 6. ملفات تعريف الارتباط */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">6. ملفات تعريف الارتباط (Cookies)</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                نستخدم ملفات تعريف الارتباط لتحسين تجربتك:
              </p>

              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🍪 ملفات ضرورية</h3>
                  <p className="text-gray-700">
                    أساسية لتشغيل الموقع (تسجيل الدخول، الأمان)
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">📊 ملفات تحليلية</h3>
                  <p className="text-gray-700">
                    لفهم كيفية استخدام الموقع وتحسينه
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🎯 ملفات تسويقية</h3>
                  <p className="text-gray-700">
                    لعرض إعلانات مخصصة (يمكنك رفضها)
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mt-6 bg-yellow-50 p-4 rounded-lg">
                💡 يمكنك التحكم في ملفات تعريف الارتباط من إعدادات متصفحك
              </p>
            </div>

            {/* 7. الاحتفاظ بالبيانات */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">7. مدة الاحتفاظ بالبيانات</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                نحتفظ ببياناتك الشخصية طالما:
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 mr-6">
                <li>كان حسابك نشطاً</li>
                <li>كانت ضرورية لتقديم الخدمات</li>
                <li>مطلوبة قانونياً أو للامتثال التنظيمي</li>
                <li>ضرورية لحل النزاعات أو إنفاذ اتفاقياتنا</li>
              </ul>
              <p className="text-gray-700 mt-4">
                بعد ذلك، سيتم حذف أو إخفاء هوية بياناتك بشكل آمن.
              </p>
            </div>

            {/* 8. حقوق الأطفال */}
            <div className="mb-12 bg-red-50 p-8 rounded-xl border-r-4 border-red-600">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">8. خصوصية الأطفال</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                خدماتنا غير موجهة للأطفال دون سن 18 عاماً. نحن لا نجمع معلومات شخصية من الأطفال عن قصد.
              </p>
              <p className="text-gray-700 leading-relaxed">
                إذا علمنا أننا جمعنا معلومات من طفل دون موافقة والديه، سنتخذ خطوات لحذف تلك المعلومات فوراً.
              </p>
            </div>

            {/* 9. التحديثات */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">9. تحديثات السياسة</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. سنقوم بما يلي:
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 mr-6">
                <li>نشر السياسة المحدثة على هذه الصفحة</li>
                <li>تحديث تاريخ &ldquo;آخر تحديث&rdquo; أعلى الصفحة</li>
                <li>إشعارك عبر البريد الإلكتروني بالتغييرات الجوهرية</li>
                <li>طلب موافقتك على التغييرات المهمة</li>
              </ul>
            </div>

            {/* 10. اتصل بنا */}
            <div className="mb-12 bg-primary-50 p-8 rounded-xl border-r-4 border-primary-600">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">10. اتصل بنا</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                إذا كان لديك أي أسئلة أو مخاوف بشأن خصوصيتك أو ترغب في ممارسة حقوقك:
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">📧</span>
                  <div>
                    <div className="font-bold text-gray-900">البريد الإلكتروني</div>
                    <div className="text-gray-700">privacy@prokr.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-3xl">📞</span>
                  <div>
                    <div className="font-bold text-gray-900">الهاتف</div>
                    <div className="text-gray-700">+966-50-000-0000</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-3xl">💬</span>
                  <div>
                    <div className="font-bold text-gray-900">واتساب</div>
                    <div className="text-gray-700">+966-50-000-0000</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-3xl">🌐</span>
                  <div>
                    <div className="font-bold text-gray-900">الموقع</div>
                    <div className="text-gray-700">www.prokr.com/contact</div>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mt-6">
                سنرد على استفساراتك خلال 48 ساعة عمل.
              </p>
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
            بياناتك في أيدٍ أمينة
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            نحن ملتزمون بحماية خصوصيتك وأمان معلوماتك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="px-10 py-5 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all font-bold text-xl shadow-xl transform hover:scale-105"
            >
              تصفح الخدمات
            </Link>
            <Link
              href="/terms"
              className="px-10 py-5 bg-white text-primary-600 border-2 border-primary-600 rounded-xl hover:bg-primary-50 transition-all font-bold text-xl shadow-xl transform hover:scale-105"
            >
              الشروط والأحكام
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

