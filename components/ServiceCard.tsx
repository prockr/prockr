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
      className="group block bg-white rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 hover:border-primary-200"
    >
      <div className="relative h-36 sm:h-40 md:h-48 w-full overflow-hidden bg-slate-100">
        <Image
          src={imageSrc}
          alt={service.name_ar}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          quality={80}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-3 sm:p-4 md:p-5">
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1 md:mb-2 group-hover:text-primary-600 transition-colors">
          {service.name_ar}
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm mb-2 md:mb-3">
          {service.subservices.length} خدمة متخصصة
        </p>
        <div className="flex items-center text-primary-600 font-medium text-sm md:text-base">
          <span>اعرف المزيد</span>
          <svg
            className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2 group-hover:-translate-x-1 transition-transform rtl:rotate-180"
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
