'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { trackCTAClick } from '@/lib/analytics/ga4-events';
import { trackCTAClick as trackMetaCTA, trackWhatsAppClick } from '@/lib/meta-pixel';
import { SITE_CONFIG } from '@/lib/constants';

/**
 * Sticky CTA Bar Component
 * Appears after user scrolls down, provides easy access to main CTAs
 * Mobile-optimized with bottom positioning
 */
export function StickyCTABar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Show bar after scrolling 300px
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleCTAClick = (ctaName: string, destination: string) => {
    trackCTAClick(ctaName, 'sticky_cta_bar', destination);
    trackMetaCTA(ctaName, 'sticky_cta_bar');
  };

  const handleWhatsAppClick = () => {
    handleCTAClick('WhatsApp', 'whatsapp');
    trackWhatsAppClick('sticky_cta_bar');
  };

  if (!isVisible) return null;

  if (isMobile) {
    // Mobile: Bottom sticky bar
    return (
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg animate-in slide-in-from-bottom duration-300">
        <div className="grid grid-cols-2 gap-2 p-2">
          <a
            href={`https://wa.me/${SITE_CONFIG.contact.phone.replace(/\D/g, '')}?text=${encodeURIComponent("Hi! I'd like to discuss my project.")}`}
            onClick={handleWhatsAppClick}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp</span>
          </a>

          <Link
            href="/book"
            onClick={() => handleCTAClick('Book Now', '/book')}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-white px-4 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            <span>Book Now</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    );
  }

  // Desktop: Top sticky bar
  return (
    <div className="fixed top-20 left-0 right-0 z-40 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-white shadow-lg animate-in slide-in-from-top duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="text-2xl">🚀</div>
            <div>
              <p className="font-semibold">Ready to transform your business?</p>
              <p className="text-sm text-white/90">Get a free consultation today</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${SITE_CONFIG.contact.phone.replace(/\D/g, '')}`}
              onClick={() => handleCTAClick('Call Now', 'tel')}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">Call Now</span>
            </a>

            <a
              href={`https://wa.me/${SITE_CONFIG.contact.phone.replace(/\D/g, '')}?text=${encodeURIComponent("Hi! I'd like to discuss my project.")}`}
              onClick={handleWhatsAppClick}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <Link
              href="/book"
              onClick={() => handleCTAClick('Book Free Consultation', '/book')}
              className="flex items-center gap-2 bg-white text-[hsl(var(--primary))] px-6 py-2 rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
