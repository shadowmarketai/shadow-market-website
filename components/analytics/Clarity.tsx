'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';

/**
 * Microsoft Clarity Component
 * Implements Clarity tracking with automatic page view tracking
 * Provides heatmaps, session recordings, and user behavior insights
 * Supports Next.js 16 App Router with client-side navigation
 */
export function Clarity() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

  // Track page views on route changes
  useEffect(() => {
    if (CLARITY_PROJECT_ID && typeof window !== 'undefined' && (window as any).clarity) {
      (window as any).clarity('set', 'page', pathname);
    }
  }, [pathname, searchParams, CLARITY_PROJECT_ID]);

  // Don't render if project ID is not configured
  if (!CLARITY_PROJECT_ID) {
    return null;
  }

  return (
    <Script
      id="microsoft-clarity"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
        `,
      }}
    />
  );
}
