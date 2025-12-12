'use client';

import { Suspense } from 'react';
import { Clarity } from './Clarity';

/**
 * ClarityWrapper Component
 * Wraps Clarity in Suspense boundary to fix Next.js 16 build error
 * Error: "useSearchParams() should be wrapped in a suspense boundary"
 */
export function ClarityWrapper() {
  return (
    <Suspense fallback={null}>
      <Clarity />
    </Suspense>
  );
}
