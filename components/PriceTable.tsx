import type { PriceRow } from '@/lib/content';

type PriceTableProps = {
  rows: PriceRow[];
};

export function PriceTable({ rows }: PriceTableProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-4 text-right text-sm font-bold text-gray-700"
            >
              نوع الخدمة
            </th>
            <th
              scope="col"
              className="px-6 py-4 text-center text-sm font-bold text-gray-700"
            >
              السعر التقريبي
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {rows.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 text-sm font-medium text-gray-900">
                {row.label}
              </td>
              <td className="px-6 py-4 text-sm text-center">
                <span className="inline-flex items-center gap-1 font-bold text-primary-600">
                  {row.min} - {row.max} {row.unit}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
        <p className="text-xs text-gray-600 text-center">
          * الأسعار تقريبية وتعتمد على حجم العمل والموقع. اطلب عرض سعر دقيق الآن
        </p>
      </div>
    </div>
  );
}

