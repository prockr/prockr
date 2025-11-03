import Link from 'next/link';

type RelatedLink = {
  href: string;
  label: string;
};

type RelatedLinksProps = {
  links: RelatedLink[];
  title?: string;
};

export function RelatedLinks({ links, title = 'خدمات ذات صلة' }: RelatedLinksProps) {
  if (links.length === 0) return null;

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-200 hover:border-primary-500 hover:shadow-sm transition-all group"
          >
            <svg
              className="w-5 h-5 text-primary-600 flex-shrink-0 group-hover:translate-x-1 transition-transform"
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
            <span className="text-gray-900 font-medium">{link.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

