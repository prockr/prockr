import Link from 'next/link';
import Image from 'next/image';
import type { ServiceCategory } from '@/data/services';
import { getServiceImage } from '@/lib/urls';

type ServiceCardProps = {
  service: ServiceCategory;
  citySlug: string;
  href: string;
};

export function ServiceCard({ service, href }: ServiceCardProps) {
  const imageSrc = getServiceImage(service.slug);

  return (
    <Link
      href={href}
      className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
    >
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        <Image
          src={imageSrc}
          alt={service.name_ar}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
          {service.name_ar}
        </h3>
        <p className="text-gray-600 text-sm mb-3">
          {service.subservices.length} خدمة متخصصة
        </p>
        <div className="flex items-center text-primary-600 font-medium">
          <span>اعرف المزيد</span>
          <svg
            className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}

