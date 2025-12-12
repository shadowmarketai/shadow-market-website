/**
 * Meta Pixel (Facebook Pixel) Helper Functions
 * Advanced tracking for marketing campaigns and conversion optimization
 */

// Extend Window interface to include fbq
declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

// Standard Events
export const MetaEvents = {
  PAGE_VIEW: 'PageView',
  VIEW_CONTENT: 'ViewContent',
  SEARCH: 'Search',
  ADD_TO_CART: 'AddToCart',
  INITIATE_CHECKOUT: 'InitiateCheckout',
  PURCHASE: 'Purchase',
  LEAD: 'Lead',
  COMPLETE_REGISTRATION: 'CompleteRegistration',
  CONTACT: 'Contact',
  SUBMIT_APPLICATION: 'SubmitApplication',
} as const;

// Custom Events for Shadow Market
export const CustomEvents = {
  WHATSAPP_CLICK: 'WhatsAppClick',
  CALL_CLICK: 'CallClick',
  EMAIL_CLICK: 'EmailClick',
  SERVICE_VIEW: 'ServiceView',
  PORTFOLIO_VIEW: 'PortfolioView',
  BLOG_VIEW: 'BlogView',
  CTA_CLICK: 'CTAClick',
  FORM_START: 'FormStart',
  SCROLL_DEPTH: 'ScrollDepth',
  TIME_ON_PAGE: 'TimeOnPage',
} as const;

// Initialize Meta Pixel
export const initMetaPixel = () => {
  if (!FB_PIXEL_ID) {
    console.warn('Meta Pixel ID not configured');
    return;
  }

  if (typeof window === 'undefined') return;

  // Check if fbq is already initialized
  if (window.fbq) return;

  const f = window as any;
  const fbq: any = function(...args: any[]) {
    if (fbq.callMethod) {
      fbq.callMethod.apply(fbq, args);
    } else {
      fbq.queue.push(args);
    }
  };

  if (!f.fbq) f.fbq = fbq;
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = '2.0';
  fbq.queue = [];

  window.fbq = fbq;
};

// Track PageView
export const pageView = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', MetaEvents.PAGE_VIEW);
  }
};

// Track standard events
export const trackEvent = (
  eventName: string,
  params?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.fbq) {
    if (params) {
      window.fbq('track', eventName, params);
    } else {
      window.fbq('track', eventName);
    }
  }
};

// Track custom events
export const trackCustomEvent = (
  eventName: string,
  params?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.fbq) {
    if (params) {
      window.fbq('trackCustom', eventName, params);
    } else {
      window.fbq('trackCustom', eventName);
    }
  }
};

// Lead Event - Form Submission
export const trackLead = (params?: {
  content_name?: string;
  content_category?: string;
  value?: number;
  currency?: string;
}) => {
  trackEvent(MetaEvents.LEAD, {
    currency: 'INR',
    ...params,
  });
};

// Contact Event - Any contact action
export const trackContact = (method: 'whatsapp' | 'phone' | 'email' | 'form') => {
  trackEvent(MetaEvents.CONTACT, {
    contact_method: method,
  });
};

// ViewContent Event - Service/Blog/Portfolio views
export const trackViewContent = (params: {
  content_name: string;
  content_type: 'service' | 'blog' | 'portfolio' | 'page';
  content_category?: string;
}) => {
  trackEvent(MetaEvents.VIEW_CONTENT, params);
};

// WhatsApp Click Tracking
export const trackWhatsAppClick = (source?: string) => {
  trackCustomEvent(CustomEvents.WHATSAPP_CLICK, {
    source: source || 'unknown',
    timestamp: new Date().toISOString(),
  });
  trackContact('whatsapp');
};

// Service View Tracking
export const trackServiceView = (serviceName: string, category: string) => {
  trackViewContent({
    content_name: serviceName,
    content_type: 'service',
    content_category: category,
  });

  trackCustomEvent(CustomEvents.SERVICE_VIEW, {
    service_name: serviceName,
    service_category: category,
  });
};

// CTA Click Tracking
export const trackCTAClick = (ctaName: string, location: string) => {
  trackCustomEvent(CustomEvents.CTA_CLICK, {
    cta_name: ctaName,
    cta_location: location,
  });
};

// Form Interaction Tracking
export const trackFormStart = (formName: string) => {
  trackCustomEvent(CustomEvents.FORM_START, {
    form_name: formName,
  });
};

// Scroll Depth Tracking
export const trackScrollDepth = (depth: 25 | 50 | 75 | 100) => {
  trackCustomEvent(CustomEvents.SCROLL_DEPTH, {
    depth_percentage: depth,
    page_url: typeof window !== 'undefined' ? window.location.href : '',
  });
};

// Time on Page Tracking
export const trackTimeOnPage = (seconds: number) => {
  trackCustomEvent(CustomEvents.TIME_ON_PAGE, {
    time_seconds: seconds,
    page_url: typeof window !== 'undefined' ? window.location.href : '',
  });
};

// Advanced Matching for better conversion tracking
export const setUserData = (userData: {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  city?: string;
  state?: string;
  country?: string;
  zipCode?: string;
}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    // Hash sensitive data before sending (Meta Pixel does this automatically)
    window.fbq('init', FB_PIXEL_ID, userData);
  }
};

// Consent Management (GDPR/Privacy)
export const grantConsent = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('consent', 'grant');
  }
};

export const revokeConsent = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('consent', 'revoke');
  }
};
