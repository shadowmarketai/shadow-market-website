'use client';

import { Suspense } from 'react';
import { MetaPixel } from './MetaPixel';

/**
 * MetaPixelWrapper Component
 * Wraps MetaPixel in Suspense boundary to fix Next.js 16 build error
 * Error: "useSearchParams() should be wrapped in a suspense boundary"
 */
export function MetaPixelWrapper() {
  return (
    <Suspense fallback={null}>
      <MetaPixel />
    </Suspense>
  );
}
