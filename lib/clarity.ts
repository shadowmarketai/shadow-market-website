/**
 * Microsoft Clarity Helper Functions
 * Session recordings, heatmaps, and user behavior analytics
 * Free forever - no limits on recordings or data
 */

// Extend Window interface to include clarity
declare global {
  interface Window {
    clarity?: (...args: any[]) => void;
  }
}

export const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

// Custom Events for Shadow Market
export const ClarityEvents = {
  WHATSAPP_CLICK: 'whatsapp_click',
  PHONE_CLICK: 'phone_click',
  EMAIL_CLICK: 'email_click',
  FORM_START: 'form_start',
  FORM_SUBMIT: 'form_submit',
  CTA_CLICK: 'cta_click',
  SERVICE_VIEW: 'service_view',
  CHAT_OPEN: 'chat_open',
  BOOKING_START: 'booking_start',
} as const;

// Track custom events
export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.clarity) {
    window.clarity('set', eventName, eventData ? JSON.stringify(eventData) : 'true');
  }
};

// Set custom tags (for filtering sessions)
export const setTag = (key: string, value: string | string[]) => {
  if (typeof window !== 'undefined' && window.clarity) {
    window.clarity('set', key, value);
  }
};

// Track WhatsApp Click
export const trackWhatsAppClick = (source?: string) => {
  trackEvent(ClarityEvents.WHATSAPP_CLICK, { source });
  setTag('contact_method', 'whatsapp');
};

// Track Form Interactions
export const trackFormStart = (formName: string) => {
  trackEvent(ClarityEvents.FORM_START, { form_name: formName });
};

export const trackFormSubmit = (formName: string, success: boolean) => {
  trackEvent(ClarityEvents.FORM_SUBMIT, {
    form_name: formName,
    success: success.toString()
  });
  if (success) {
    setTag('form_submitted', formName);
  }
};

// Track CTA Clicks
export const trackCTAClick = (ctaName: string, location: string) => {
  trackEvent(ClarityEvents.CTA_CLICK, {
    cta_name: ctaName,
    cta_location: location
  });
};

// Track Service Views
export const trackServiceView = (serviceName: string, category: string) => {
  trackEvent(ClarityEvents.SERVICE_VIEW, {
    service_name: serviceName,
    service_category: category
  });
  setTag('viewed_service', serviceName);
};

// Identify user (when user info is available)
export const identifyUser = (userId: string, sessionInfo?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.clarity) {
    window.clarity('identify', userId, sessionInfo);
  }
};

// Upgrade sessions (mark as important for priority processing)
export const upgradeSession = () => {
  if (typeof window !== 'undefined' && window.clarity) {
    window.clarity('upgrade', 'session');
  }
};

// Consent Management (GDPR/Privacy)
export const grantConsent = () => {
  if (typeof window !== 'undefined' && window.clarity) {
    window.clarity('consent');
  }
};
