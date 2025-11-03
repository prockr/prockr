import { generateMetadata as genMetadata } from '@/lib/seo';
import { REVALIDATE_DEFAULT } from '@/lib/constants';

export const revalidate = REVALIDATE_DEFAULT;

export const metadata = genMetadata({
  title: 'مقدمي الخدمات | انضم إلى شبكة بروكر',
  description:
    'انضم إلى شبكة بروكر واحصل على المزيد من العملاء. نربطك بآلاف العملاء الباحثين عن خدمات منزلية احترافية في جميع أنحاء المملكة.',
  path: '/providers',
});

export default function ProvidersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          انضم إلى شبكة بروكر لمقدمي الخدمات
        </h1>

        <p className="text-xl text-gray-600 text-center mb-12">
          احصل على المزيد من العملاء وزد دخلك من خلال الانضمام إلى أكبر منصة
          للخدمات المنزلية في المملكة
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-5xl mb-4">👥</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              عملاء أكثر
            </h3>
            <p className="text-gray-600">
              احصل على طلبات خدمة من آلاف العملاء في منطقتك
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-5xl mb-4">⭐</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              سمعة قوية
            </h3>
            <p className="text-gray-600">
              بناء سمعة موثوقة من خلال تقييمات العملاء
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-5xl mb-4">📈</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              نمو مستمر
            </h3>
            <p className="text-gray-600">
              زد دخلك وطور أعمالك مع بروكر
            </p>
          </div>
        </div>

        <div className="bg-primary-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">جاهز للانضمام؟</h2>
          <p className="text-xl text-primary-100 mb-6">
            تواصل معنا الآن لتصبح شريكاً في شبكة بروكر
          </p>
          <a
            href="mailto:providers@prokr.com"
            className="inline-block px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg"
          >
            تواصل معنا
          </a>
        </div>
      </div>
    </div>
  );
}

