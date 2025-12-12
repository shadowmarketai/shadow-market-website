import Image, { ImageProps } from 'next/image';
import { IMAGE_QUALITY, RESPONSIVE_IMAGE_SIZES } from '@/lib/performance';

/**
 * Optimized Image Component
 * Wraps next/image with performance best practices
 * Supports AVIF/WebP, lazy loading, blur placeholders
 */

interface OptimizedImageProps extends Omit<ImageProps, 'quality' | 'sizes'> {
  priority?: boolean;
  sizePreset?: keyof typeof RESPONSIVE_IMAGE_SIZES;
  qualityPreset?: keyof typeof IMAGE_QUALITY;
}

export function OptimizedImage({
  priority = false,
  sizePreset = 'content',
  qualityPreset = 'content',
  alt,
  ...props
}: OptimizedImageProps) {
  return (
    <Image
      {...props}
      alt={alt}
      quality={IMAGE_QUALITY[qualityPreset]}
      sizes={RESPONSIVE_IMAGE_SIZES[sizePreset]}
      loading={priority ? 'eager' : 'lazy'}
      priority={priority}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAAA//9k="
    />
  );
}

/**
 * Hero Image - Optimized for above-the-fold hero sections
 */
export function HeroImage(props: Omit<OptimizedImageProps, 'priority' | 'sizePreset' | 'qualityPreset'>) {
  return (
    <OptimizedImage
      {...props}
      priority={true}
      sizePreset="hero"
      qualityPreset="hero"
    />
  );
}

/**
 * Card Image - Optimized for grid/card layouts
 */
export function CardImage(props: Omit<OptimizedImageProps, 'sizePreset' | 'qualityPreset'>) {
  return (
    <OptimizedImage
      {...props}
      sizePreset="card"
      qualityPreset="content"
    />
  );
}

/**
 * Thumbnail Image - Optimized for small previews
 */
export function ThumbnailImage(props: Omit<OptimizedImageProps, 'sizePreset' | 'qualityPreset'>) {
  return (
    <OptimizedImage
      {...props}
      sizePreset="thumbnail"
      qualityPreset="thumbnail"
    />
  );
}
