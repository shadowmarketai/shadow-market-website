'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { trackScrollDepth as trackGA4ScrollDepth, trackTimeOnPage as trackGA4TimeOnPage } from '@/lib/analytics/ga4-events';
import { trackScrollDepth as trackMetaScrollDepth, trackTimeOnPage as trackMetaTimeOnPage } from '@/lib/meta-pixel';

/**
 * Analytics Trackers Component
 * Tracks scroll depth and time on page for both GA4 and Meta Pixel
 * Automatically resets on page navigation
 */
export function AnalyticsTrackers() {
  const pathname = usePathname();
  const scrollDepthTracked = useRef<Set<number>>(new Set());
  const timeTracked = useRef<Set<number>>(new Set());
  const pageStartTime = useRef<number>(Date.now());

  // Reset trackers on page change
  useEffect(() => {
    scrollDepthTracked.current = new Set();
    timeTracked.current = new Set();
    pageStartTime.current = Date.now();
  }, [pathname]);

  // Scroll Depth Tracking
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

      // Track at 25%, 50%, 75%, 100%
      const depths = [25, 50, 75, 100] as const;
      depths.forEach(depth => {
        if (scrollPercent >= depth && !scrollDepthTracked.current.has(depth)) {
          scrollDepthTracked.current.add(depth);
          trackGA4ScrollDepth(depth);
          trackMetaScrollDepth(depth);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Time on Page Tracking
  useEffect(() => {
    const interval = setInterval(() => {
      const secondsOnPage = Math.floor((Date.now() - pageStartTime.current) / 1000);

      // Track at 30s, 60s, 2min, 5min
      const milestones = [30, 60, 120, 300];
      milestones.forEach(milestone => {
        if (secondsOnPage >= milestone && !timeTracked.current.has(milestone)) {
          timeTracked.current.add(milestone);
          trackGA4TimeOnPage(milestone);
          trackMetaTimeOnPage(milestone);
        }
      });
    }, 5000); // Check every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Track page exit (before unload)
  useEffect(() => {
    const handleBeforeUnload = () => {
      const secondsOnPage = Math.floor((Date.now() - pageStartTime.current) / 1000);
      if (secondsOnPage > 10) { // Only track if stayed more than 10 seconds
        trackGA4TimeOnPage(secondsOnPage);
        trackMetaTimeOnPage(secondsOnPage);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  return null; // This component doesn't render anything
}
