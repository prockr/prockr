/**
 * Image Utilities for Performance Optimization
 * 
 * Helpers for generating blur placeholders, optimizing image loading,
 * and managing image resources efficiently.
 */

/**
 * Base64 encoded tiny blur placeholder (1x1 pixel)
 * Used as a lightweight placeholder while images load
 */
export const BLUR_DATA_URL = 
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=';

/**
 * Get optimized image quality based on image type and priority
 */
export function getOptimizedQuality(isPriority: boolean, imageType?: 'hero' | 'card' | 'gallery' | 'thumbnail'): number {
  if (isPriority) {
    return imageType === 'hero' ? 85 : 80;
  }
  
  switch (imageType) {
    case 'hero':
      return 80;
    case 'card':
      return 75;
    case 'gallery':
      return 75;
    case 'thumbnail':
      return 70;
    default:
      return 75;
  }
}

/**
 * Get optimized sizes attribute for responsive images
 */
export function getOptimizedSizes(type: 'hero' | 'card' | 'gallery' | 'thumbnail' | 'full'): string {
  switch (type) {
    case 'hero':
      return '(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px';
    case 'card':
      return '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
    case 'gallery':
      return '(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw';
    case 'thumbnail':
      return '(max-width: 768px) 20vw, (max-width: 1200px) 15vw, 10vw';
    case 'full':
      return '100vw';
    default:
      return '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
  }
}

/**
 * Determine if an image should be loaded with priority
 */
export function shouldPrioritizeImage(index: number, type: 'hero' | 'card' | 'gallery'): boolean {
  switch (type) {
    case 'hero':
      return index === 0; // Only first hero image
    case 'card':
      return index < 3; // First 3 cards
    case 'gallery':
      return index < 4; // First 4 gallery images
    default:
      return false;
  }
}

/**
 * Get loading strategy for image
 */
export function getLoadingStrategy(isPriority: boolean): 'eager' | 'lazy' {
  return isPriority ? 'eager' : 'lazy';
}

/**
 * Image optimization configuration
 */
export const IMAGE_CONFIG = {
  formats: ['avif', 'webp'],
  defaultQuality: 80,
  minimumCacheTTL: 31536000, // 1 year
  sizes: {
    hero: { width: 1920, height: 1080 },
    card: { width: 800, height: 600 },
    gallery: { width: 600, height: 600 },
    thumbnail: { width: 200, height: 200 },
  },
} as const;

/**
 * Helper to generate srcset for responsive images
 */
export function generateSrcSet(basePath: string, widths: number[]): string {
  return widths
    .map((width) => `${basePath}?w=${width} ${width}w`)
    .join(', ');
}

/**
 * Preload critical images for better LCP
 */
export function preloadImage(src: string, priority: 'high' | 'low' = 'high') {
  if (typeof window === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  link.fetchPriority = priority;
  document.head.appendChild(link);
}

