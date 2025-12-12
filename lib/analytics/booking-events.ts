/**
 * Booking Analytics Events
 *
 * Track booking interactions for Google Analytics 4 and Meta Pixel
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

/**
 * Track when user visits the booking page
 */
export function trackBookingPageView() {
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: 'Booking Page',
      page_location: window.location.href,
      page_path: '/book',
    });
  }

  // Meta Pixel - ViewContent event
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_name: 'Booking Page',
      content_category: 'Consultation',
    });
  }

  console.log('📊 Analytics: Booking page view tracked');
}

/**
 * Track when user starts the booking process
 * Call this when user clicks on a date or time slot
 */
export function trackBookingStarted(consultationType?: string) {
  // Google Analytics 4 - Begin Checkout
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'begin_checkout', {
      currency: 'INR',
      value: 0, // Free consultation
      items: [
        {
          item_id: consultationType || 'consultation',
          item_name: consultationType || 'Free Consultation',
          item_category: 'Booking',
          price: 0,
          quantity: 1,
        },
      ],
    });
  }

  // Meta Pixel - InitiateCheckout event
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'InitiateCheckout', {
      content_name: consultationType || 'Consultation',
      content_category: 'Booking',
      value: 0,
      currency: 'INR',
    });
  }

  console.log('📊 Analytics: Booking started -', consultationType);
}

/**
 * Track successful booking completion
 * Call this after user confirms the booking
 *
 * @param consultationType - Type of consultation booked
 * @param value - Estimated value of the consultation/lead (default: ₹500)
 */
export function trackBookingCompleted(consultationType: string, value: number = 500) {
  // Google Analytics 4 - Generate Lead event
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'generate_lead', {
      currency: 'INR',
      value: value,
      lead_source: 'website',
      consultation_type: consultationType,
    });

    // Also track as conversion
    window.gtag('event', 'conversion', {
      send_to: 'AW-CONVERSION_ID', // Replace with your Google Ads conversion ID
      value: value,
      currency: 'INR',
      transaction_id: `booking_${Date.now()}`,
    });
  }

  // Meta Pixel - Schedule event (custom conversion)
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Schedule', {
      content_name: consultationType,
      content_category: 'Consultation',
      value: value,
      currency: 'INR',
    });

    // Also track as Lead
    window.fbq('track', 'Lead', {
      content_name: consultationType,
      value: value,
      currency: 'INR',
    });
  }

  console.log('🎉 Analytics: Booking completed -', consultationType, '- Value: ₹' + value);
}

/**
 * Track when user abandons the booking
 * Call this if user navigates away from the booking page
 */
export function trackBookingAbandoned() {
  // Google Analytics 4 - Custom event
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'booking_abandoned', {
      event_category: 'Booking',
      event_label: 'User left booking page',
    });
  }

  // Meta Pixel - Custom event
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', 'BookingAbandoned', {
      content_category: 'Booking',
    });
  }

  console.log('📊 Analytics: Booking abandoned');
}

/**
 * Track which consultation type was selected
 */
export function trackConsultationTypeSelected(consultationType: string) {
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'select_item', {
      item_list_id: 'consultation_types',
      item_list_name: 'Consultation Types',
      items: [
        {
          item_id: consultationType,
          item_name: consultationType,
          item_category: 'Consultation',
        },
      ],
    });
  }

  // Meta Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', 'ConsultationTypeSelected', {
      consultation_type: consultationType,
    });
  }

  console.log('📊 Analytics: Consultation type selected -', consultationType);
}

/**
 * Track Cal.com widget interactions
 * Call this when Cal.com modal opens
 */
export function trackCalWidgetOpened() {
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'cal_widget_opened', {
      event_category: 'Booking',
      event_label: 'Cal.com Widget Opened',
    });
  }

  // Meta Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', 'CalWidgetOpened');
  }

  console.log('📊 Analytics: Cal.com widget opened');
}

/**
 * Utility: Get consultation type value for tracking
 * Maps consultation types to estimated lead values
 */
export function getConsultationValue(consultationType: string): number {
  const values: Record<string, number> = {
    'Quick Strategy Call': 300,
    'Marketing Consultation': 500,
    'AI Development Demo': 1000,
    consultation: 500, // default
  };

  return values[consultationType] || 500;
}

/**
 * Initialize booking page tracking
 * Call this in the booking page component on mount
 */
export function initBookingTracking() {
  if (typeof window === 'undefined') return;

  // Track page view
  trackBookingPageView();

  // Listen for Cal.com events (if available)
  if (window.addEventListener) {
    // Track when user interacts with Cal widget
    window.addEventListener('message', (event) => {
      if (event.data?.type === 'cal:opened') {
        trackCalWidgetOpened();
      }
      if (event.data?.type === 'cal:booking-started') {
        trackBookingStarted(event.data?.consultationType);
      }
      if (event.data?.type === 'cal:booking-completed') {
        const consultationType = event.data?.consultationType || 'Consultation';
        const value = getConsultationValue(consultationType);
        trackBookingCompleted(consultationType, value);
      }
    });

    // Track abandonment (when user leaves the page)
    let bookingStarted = false;
    window.addEventListener('beforeunload', () => {
      if (bookingStarted) {
        trackBookingAbandoned();
      }
    });
  }

  console.log('📊 Booking analytics initialized');
}
