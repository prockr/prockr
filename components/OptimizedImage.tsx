'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

/**
 * Optimized Image Component
 * 
 * A high-performance wrapper around next/image with:
 * - AVIF/WebP auto-conversion
 * - Blur placeholder for better UX
 * - Smart loading strategies (eager for above-fold, lazy for below)
 * - Proper sizes configuration
 * - Error fallback handling
 */

interface OptimizedImageProps extends Omit<ImageProps, 'placeholder' | 'blurDataURL' | 'onError'> {
  priority?: boolean;
  enableBlur?: boolean;
  fallbackSrc?: string;
  imageType?: 'hero' | 'card' | 'gallery' | 'thumbnail';
}

// Tiny blur placeholder (10x10 gray gradient) - only ~200 bytes
const BLUR_DATA_URL = 
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMCwsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgcI/8QAIhAAAgEDBAMBAQAAAAAAAAAAAQIDBAURAAYSIQcTMUFR/8QAFQEBAQAAAAAAAAAAAAAAAAAABQb/xAAcEQABBAMBAAAAAAAAAAAAAAABAAIDBAURITH/2gAMAwEAAhEDEQA/ANI7Y23t6z2e2wW+1UNJFHTxlVhgRAAVB+BRrO3nG57fp/JN4pYLpXwQw3GojjjjnkVVVZGAAAPQGpb5v8gbq2Vv24WK2XmaCyNBDLDGUjby5IkeQnIPoJB/DqK/0v5D8gRt/wAzv91eMqSY/qpJcOPxmUnIH4NL5l5UTZYYzXlF//Z';

// Quality settings by image type
const QUALITY_MAP = {
  hero: 85,
  card: 75,
  gallery: 75,
  thumbnail: 65,
} as const;

// Sizes settings by image type
const SIZES_MAP = {
  hero: '(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px',
  card: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  gallery: '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw',
  thumbnail: '(max-width: 640px) 25vw, 15vw',
} as const;

export function OptimizedImage({ 
  priority = false, 
  enableBlur = true,
  quality,
  loading,
  sizes,
  fallbackSrc = '/images/Logo.png',
  imageType = 'card',
  alt,
  src,
  ...props 
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  // Determine quality based on image type if not specified
  const finalQuality = quality || QUALITY_MAP[imageType];
  
  // Determine sizes based on image type if not specified
  const finalSizes = sizes || SIZES_MAP[imageType];

  // Handle image load error
  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt || 'صورة بروكر'}
      quality={finalQuality}
      sizes={finalSizes}
      loading={priority ? 'eager' : (loading || 'lazy')}
      placeholder={enableBlur ? 'blur' : 'empty'}
      blurDataURL={enableBlur ? BLUR_DATA_URL : undefined}
      priority={priority}
      onError={handleError}
      // Performance hints
      decoding="async"
    />
  );
}

/**
 * Hero Image - optimized for large above-fold images
 */
export function HeroImage(props: Omit<OptimizedImageProps, 'imageType' | 'priority'>) {
  return <OptimizedImage {...props} imageType="hero" priority={true} />;
}

/**
 * Card Image - optimized for service/city cards
 */
export function CardImage(props: Omit<OptimizedImageProps, 'imageType'>) {
  return <OptimizedImage {...props} imageType="card" />;
}

/**
 * Gallery Image - optimized for image galleries
 */
export function GalleryImage(props: Omit<OptimizedImageProps, 'imageType'>) {
  return <OptimizedImage {...props} imageType="gallery" />;
}

/**
 * Thumbnail Image - optimized for small previews
 */
export function ThumbnailImage(props: Omit<OptimizedImageProps, 'imageType'>) {
  return <OptimizedImage {...props} imageType="thumbnail" enableBlur={false} />;
}

export default OptimizedImage;
