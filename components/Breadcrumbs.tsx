import Link from 'next/link';
import type { BreadcrumbItem } from '@/lib/seo';

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {index > 0 && <span className="text-gray-400">‹</span>}
            {index === items.length - 1 ? (
              <span className="text-gray-600 font-medium">{item.label}</span>
            ) : (
              <Link
                href={item.href}
                className="text-primary-600 hover:text-primary-700 hover:underline"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

