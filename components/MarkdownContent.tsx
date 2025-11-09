import Link from 'next/link';

type MarkdownContentProps = {
  content: string;
  className?: string;
};

export function MarkdownContent({ content, className = '' }: MarkdownContentProps) {
  // تحويل الروابط Markdown [text](url) إلى anchor tags
  const processMarkdownLinks = (text: string): React.ReactNode[] => {
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    
    // نمط الروابط: [text](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let match;
    
    while ((match = linkRegex.exec(text)) !== null) {
      // إضافة النص قبل الرابط
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      
      const linkText = match[1];
      const linkUrl = match[2];
      
      // إنشاء رابط
      parts.push(
        <Link
          key={`link-${match.index}`}
          href={linkUrl}
          className="text-primary-600 hover:text-primary-700 underline font-medium transition-colors"
        >
          {linkText}
        </Link>
      );
      
      lastIndex = match.index + match[0].length;
    }
    
    // إضافة باقي النص
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }
    
    return parts.length > 0 ? parts : [text];
  };

  // معالجة المحتوى سطر بسطر
  const processContent = (text: string): React.ReactNode[] => {
    return text.split('\n').map((line, index) => {
      if (!line.trim()) {
        return <br key={`br-${index}`} />;
      }
      
      // معالجة العناوين
      if (line.startsWith('### ')) {
        return (
          <h3 key={`h3-${index}`} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            {processMarkdownLinks(line.substring(4))}
          </h3>
        );
      }
      
      if (line.startsWith('## ')) {
        return (
          <h2 key={`h2-${index}`} className="text-3xl font-bold text-gray-900 mt-10 mb-5">
            {processMarkdownLinks(line.substring(3))}
          </h2>
        );
      }
      
      // معالجة القوائم
      if (line.trim().match(/^\d+\./)) {
        return (
          <li key={`li-${index}`} className="mb-2">
            {processMarkdownLinks(line.replace(/^\d+\.\s*/, ''))}
          </li>
        );
      }
      
      if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
        return (
          <li key={`li-${index}`} className="mb-2">
            {processMarkdownLinks(line.replace(/^[-*]\s*/, ''))}
          </li>
        );
      }
      
      // معالجة النص العادي
      if (line.startsWith('**') && line.endsWith('**')) {
        return (
          <p key={`p-${index}`} className="font-bold text-lg mb-3 mt-4">
            {processMarkdownLinks(line.replace(/\*\*/g, ''))}
          </p>
        );
      }
      
      return (
        <p key={`p-${index}`} className="mb-4 leading-relaxed">
          {processMarkdownLinks(line)}
        </p>
      );
    });
  };

  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      {processContent(content)}
    </div>
  );
}

