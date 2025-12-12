/**
 * Performance Optimization Utilities
 * Next.js 16 + React 19 best practices for optimal performance
 */

// Resource hints for critical third-party domains
export const RESOURCE_HINTS = {
  preconnect: [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://www.google-analytics.com',
    'https://connect.facebook.net',
  ],
  dnsPrefetch: [
    'https://www.googletagmanager.com',
    'https://www.facebook.com',
  ],
} as const;

// Critical CSS paths that should be inlined
export const CRITICAL_CSS = [
  '/fonts',
  '/globals.css',
] as const;

// Images that should be preloaded (above the fold)
export const PRELOAD_IMAGES = [
  {
    href: '/images/hero-bg.jpg',
    as: 'image',
    type: 'image/jpeg',
    media: '(min-width: 768px)',
  },
  {
    href: '/images/shadow-market-logo.png',
    as: 'image',
    type: 'image/png',
  },
] as const;

// Font preloading configuration
export const PRELOAD_FONTS = [
  {
    href: '/fonts/inter-var.woff2',
    as: 'font',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
] as const;

/**
 * Lazy load configuration for images
 * Determines loading strategy based on position
 */
export const getImageLoadingStrategy = (priority: boolean = false) => ({
  loading: priority ? ('eager' as const) : ('lazy' as const),
  priority: priority,
});

/**
 * Generate responsive image sizes for next/image
 * Optimizes for different viewport sizes
 */
export const RESPONSIVE_IMAGE_SIZES = {
  hero: '(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px',
  content: '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 66vw',
  card: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  thumbnail: '(max-width: 768px) 50vw, 25vw',
  full: '100vw',
} as const;

/**
 * Image quality settings by use case
 */
export const IMAGE_QUALITY = {
  hero: 90, // High quality for hero images
  content: 80, // Standard for content images
  thumbnail: 70, // Lower for thumbnails
  placeholder: 10, // Very low for blur placeholders
} as const;

/**
 * Intersection Observer options for lazy loading
 */
export const LAZY_LOAD_OPTIONS = {
  rootMargin: '50px', // Start loading 50px before entering viewport
  threshold: 0.01,
} as const;

/**
 * Cache durations for different content types (in seconds)
 */
export const CACHE_DURATIONS = {
  static: 31536000, // 1 year for immutable assets
  images: 2592000, // 30 days for images
  pages: 3600, // 1 hour for pages
  api: 300, // 5 minutes for API responses
  revalidate: 60, // 1 minute default revalidation
} as const;

/**
 * Bundle size monitoring thresholds
 */
export const BUNDLE_SIZE_LIMITS = {
  maxInitialJS: 200, // KB
  maxPageJS: 150, // KB
  maxCSS: 50, // KB
} as const;

/**
 * Core Web Vitals targets
 */
export const WEB_VITALS_TARGETS = {
  LCP: 2500, // ms - Largest Contentful Paint
  FID: 100, // ms - First Input Delay
  CLS: 0.1, // score - Cumulative Layout Shift
  FCP: 1800, // ms - First Contentful Paint
  TTFB: 800, // ms - Time to First Byte
  INP: 200, // ms - Interaction to Next Paint
} as const;

/**
 * Debounce utility for performance-critical event handlers
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle utility for scroll/resize handlers
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Measure and report Web Vitals
 */
export const reportWebVitals = (metric: any) => {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Web Vital] ${metric.name}:`, metric.value, metric.rating);
  }

  // Send to analytics in production
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      metric_id: metric.id,
      metric_value: metric.value,
      metric_delta: metric.delta,
      metric_rating: metric.rating,
    });
  }
};

/**
 * Preload critical resources
 */
export const preloadCriticalResources = () => {
  if (typeof window === 'undefined') return;

  // Preload hero image
  const heroImage = new Image();
  heroImage.src = '/images/hero-bg.jpg';

  // Prefetch next likely pages
  if ('connection' in navigator && (navigator as any).connection?.saveData !== true) {
    // Only prefetch on fast connections
    const prefetchLinks = ['/services', '/contact'];
    prefetchLinks.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = href;
      document.head.appendChild(link);
    });
  }
};

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Get optimal image format support
 */
export const getSupportedImageFormats = async (): Promise<{
  avif: boolean;
  webp: boolean;
}> => {
  if (typeof window === 'undefined') {
    return { avif: false, webp: false };
  }

  const avifSupport = await checkImageSupport('image/avif');
  const webpSupport = await checkImageSupport('image/webp');

  return { avif: avifSupport, webp: webpSupport };
};

const checkImageSupport = (format: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = img.onerror = () => resolve(img.height === 1);
    img.src = `data:${format};base64,AAAAHGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=`;
  });
};

/**
 * Service Worker registration for PWA capabilities
 */
export const registerServiceWorker = async () => {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return;
  }

  try {
    const registration = await navigator.serviceWorker.register('/sw.js');
    console.log('Service Worker registered:', registration);
  } catch (error) {
    console.error('Service Worker registration failed:', error);
  }
};

/**
 * Request idle callback wrapper with fallback
 */
export const requestIdleCallback = (callback: () => void) => {
  if (typeof window === 'undefined') return;

  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(callback);
  } else {
    setTimeout(callback, 1);
  }
};
