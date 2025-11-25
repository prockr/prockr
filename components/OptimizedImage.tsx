import Image, { ImageProps } from 'next/image';

/**
 * Optimized Image Component
 * 
 * A wrapper around next/image with optimized defaults for performance:
 * - Blur placeholder for better UX
 * - Optimized quality settings
 * - Smart loading strategies
 * - Proper sizes configuration
 */

interface OptimizedImageProps extends Omit<ImageProps, 'placeholder' | 'blurDataURL'> {
  priority?: boolean;
  enableBlur?: boolean;
  alt: string; // Required for accessibility
}

// Base64 encoded 1x1 gray blur image
const BLUR_DATA_URL = 
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=';

export function OptimizedImage({ 
  priority = false, 
  enableBlur = true,
  quality = 80,
  loading,
  ...props 
}: OptimizedImageProps) {
  return (
    <Image
      {...props}
      quality={quality}
      loading={priority ? 'eager' : (loading || 'lazy')}
      placeholder={enableBlur ? 'blur' : 'empty'}
      blurDataURL={enableBlur ? BLUR_DATA_URL : undefined}
      priority={priority}
    />
  );
}

