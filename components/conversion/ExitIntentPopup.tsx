'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { trackFormStart, trackLead } from '@/lib/analytics/ga4-events';
import { trackFormStart as trackMetaFormStart, trackLead as trackMetaLead } from '@/lib/meta-pixel';

/**
 * Exit Intent Popup Component
 * Triggers when user is about to leave the page
 * Offers lead magnet (free consultation, ebook, etc.)
 */
export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem('exit_popup_shown');
    if (hasSeenPopup) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse leaves from top of viewport
      if (e.clientY <= 0 && !hasShown && !isOpen) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('exit_popup_shown', 'true');
        trackMetaFormStart('exit_intent_popup');
      }
    };

    // Add delay before enabling exit intent (don't annoy immediate visitors)
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 5000); // Wait 5 seconds

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    trackFormStart('exit_intent_lead_form', 'exit_popup');

    try {
      // Here you would send to your backend/CRM
      // For now, we'll just simulate
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Track conversion
      trackLead({
        value: 500, // Estimated lead value
        method: 'exit_intent_popup',
        lead_source: 'website_exit_intent',
      });

      trackMetaLead({
        content_name: 'Free Digital Marketing Guide',
        content_category: 'lead_magnet',
        value: 500,
      });

      setSubmitted(true);

      // Close popup after 3 seconds
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="relative z-10 mx-4 max-w-lg w-full bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
          aria-label="Close popup"
        >
          <X className="w-6 h-6" />
        </button>

        {!submitted ? (
          <>
            {/* Header with gradient */}
            <div className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] px-8 py-6 text-white">
              <div className="text-4xl mb-2">🎁</div>
              <h2 className="text-2xl font-bold mb-2">Wait! Don't Leave Empty-Handed</h2>
              <p className="text-white/90">
                Get our FREE Digital Marketing Success Guide
              </p>
            </div>

            {/* Content */}
            <div className="px-8 py-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What You'll Get:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>10 proven strategies to boost your online presence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>ROI calculator to estimate your potential revenue</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Exclusive access to our marketing webinar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Free 30-minute consultation with our experts</span>
                  </li>
                </ul>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Get My Free Guide Now'}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  No spam. Unsubscribe anytime. We respect your privacy.
                </p>
              </form>
            </div>
          </>
        ) : (
          <div className="px-8 py-12 text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Success!
            </h3>
            <p className="text-gray-700 mb-6">
              Check your email for your free guide and consultation booking link.
            </p>
            <p className="text-sm text-gray-500">
              This window will close automatically...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
