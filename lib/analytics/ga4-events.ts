/**
 * Google Analytics 4 Event Tracking
 * Enhanced event tracking for better conversion and user behavior analysis
 */

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Standard GA4 Events
export const GA4Events = {
  PAGE_VIEW: 'page_view',
  GENERATE_LEAD: 'generate_lead',
  FORM_START: 'form_start',
  FORM_SUBMIT: 'form_submit',
  VIEW_ITEM: 'view_item',
  SELECT_CONTENT: 'select_content',
  SEARCH: 'search',
  CLICK: 'click',
  SCROLL: 'scroll',
  ENGAGEMENT: 'engagement',
} as const;

// Custom Events for Shadow Market
export const CustomGA4Events = {
  WHATSAPP_CLICK: 'whatsapp_click',
  PHONE_CLICK: 'phone_click',
  EMAIL_CLICK: 'email_click',
  SERVICE_VIEW: 'service_view',
  CTA_CLICK: 'cta_click',
  PORTFOLIO_VIEW: 'portfolio_view',
  BLOG_READ: 'blog_read',
  VIDEO_PLAY: 'video_play',
  DOWNLOAD: 'download',
  CALCULATOR_USE: 'calculator_use',
  CHAT_OPEN: 'chat_open',
  CHAT_MESSAGE: 'chat_message',
} as const;

// Helper function to send events to GA4
const sendGAEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      send_to: GA_MEASUREMENT_ID,
      ...eventParams,
    });
  }
};

// Page View (automatic in Next.js with @next/third-parties)
export const trackPageView = (url: string, title?: string) => {
  sendGAEvent(GA4Events.PAGE_VIEW, {
    page_location: url,
    page_title: title || document.title,
  });
};

// Lead Generation Event
export const trackLead = (params: {
  value?: number;
  currency?: string;
  method?: string;
  lead_source?: string;
}) => {
  sendGAEvent(GA4Events.GENERATE_LEAD, {
    currency: 'INR',
    value: params.value || 0,
    method: params.method || 'form',
    lead_source: params.lead_source || 'website',
  });
};

// Form Events
export const trackFormStart = (formName: string, formLocation?: string) => {
  sendGAEvent(GA4Events.FORM_START, {
    form_name: formName,
    form_location: formLocation || window.location.pathname,
  });
};

export const trackFormSubmit = (
  formName: string,
  success: boolean,
  formData?: Record<string, any>
) => {
  sendGAEvent(GA4Events.FORM_SUBMIT, {
    form_name: formName,
    success: success,
    form_location: window.location.pathname,
    ...formData,
  });
};

// WhatsApp Click Tracking
export const trackWhatsAppClick = (source: string) => {
  sendGAEvent(CustomGA4Events.WHATSAPP_CLICK, {
    source: source,
    link_url: 'https://wa.me/',
    link_text: 'WhatsApp',
  });
};

// Phone Click Tracking
export const trackPhoneClick = (phoneNumber: string) => {
  sendGAEvent(CustomGA4Events.PHONE_CLICK, {
    phone_number: phoneNumber,
  });
};

// Email Click Tracking
export const trackEmailClick = (email: string) => {
  sendGAEvent(CustomGA4Events.EMAIL_CLICK, {
    email: email,
  });
};

// Service View Tracking
export const trackServiceView = (
  serviceName: string,
  serviceCategory: string,
  serviceValue?: number
) => {
  sendGAEvent(CustomGA4Events.SERVICE_VIEW, {
    item_name: serviceName,
    item_category: serviceCategory,
    value: serviceValue || 0,
    currency: 'INR',
  });

  // Also track as view_item for e-commerce funnel
  sendGAEvent(GA4Events.VIEW_ITEM, {
    items: [{
      item_name: serviceName,
      item_category: serviceCategory,
      price: serviceValue || 0,
    }],
  });
};

// CTA Click Tracking
export const trackCTAClick = (
  ctaText: string,
  ctaLocation: string,
  ctaDestination?: string
) => {
  sendGAEvent(CustomGA4Events.CTA_CLICK, {
    cta_text: ctaText,
    cta_location: ctaLocation,
    cta_destination: ctaDestination || '',
  });

  // Also track as select_content
  sendGAEvent(GA4Events.SELECT_CONTENT, {
    content_type: 'cta',
    item_id: ctaText,
  });
};

// Portfolio View Tracking
export const trackPortfolioView = (
  projectName: string,
  projectCategory: string
) => {
  sendGAEvent(CustomGA4Events.PORTFOLIO_VIEW, {
    project_name: projectName,
    project_category: projectCategory,
  });
};

// Blog Read Tracking
export const trackBlogRead = (
  blogTitle: string,
  blogCategory: string,
  readPercentage: number
) => {
  sendGAEvent(CustomGA4Events.BLOG_READ, {
    blog_title: blogTitle,
    blog_category: blogCategory,
    read_percentage: readPercentage,
  });
};

// Scroll Depth Tracking
export const trackScrollDepth = (depth: 25 | 50 | 75 | 100) => {
  sendGAEvent(GA4Events.SCROLL, {
    percent_scrolled: depth,
    page_location: window.location.href,
  });
};

// Search Tracking
export const trackSearch = (searchTerm: string, resultsCount?: number) => {
  sendGAEvent(GA4Events.SEARCH, {
    search_term: searchTerm,
    results_count: resultsCount,
  });
};

// Video Play Tracking
export const trackVideoPlay = (videoTitle: string, videoUrl?: string) => {
  sendGAEvent(CustomGA4Events.VIDEO_PLAY, {
    video_title: videoTitle,
    video_url: videoUrl || '',
  });
};

// Download Tracking
export const trackDownload = (fileName: string, fileType: string) => {
  sendGAEvent(CustomGA4Events.DOWNLOAD, {
    file_name: fileName,
    file_type: fileType,
    link_url: window.location.href,
  });
};

// Chat Interaction Tracking
export const trackChatOpen = (source: string) => {
  sendGAEvent(CustomGA4Events.CHAT_OPEN, {
    source: source,
  });
};

export const trackChatMessage = (messageType: 'user' | 'bot') => {
  sendGAEvent(CustomGA4Events.CHAT_MESSAGE, {
    message_type: messageType,
  });
};

// Calculator/Tool Usage
export const trackCalculatorUse = (calculatorType: string, result?: any) => {
  sendGAEvent(CustomGA4Events.CALCULATOR_USE, {
    calculator_type: calculatorType,
    result: JSON.stringify(result),
  });
};

// User Engagement Metrics
export const trackEngagement = (
  engagementType: string,
  engagementValue?: number
) => {
  sendGAEvent(GA4Events.ENGAGEMENT, {
    engagement_type: engagementType,
    engagement_value: engagementValue || 1,
  });
};

// Time on Page Tracking (send after certain thresholds)
export const trackTimeOnPage = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);

  // Track at specific milestones
  if ([30, 60, 120, 300].includes(seconds)) {
    trackEngagement('time_on_page', seconds);
  }
};

// Custom Dimensions Helper
export const setUserProperties = (properties: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('set', 'user_properties', properties);
  }
};

// E-commerce tracking (if needed for service packages)
export const trackPurchase = (params: {
  transaction_id: string;
  value: number;
  currency?: string;
  items: Array<{
    item_name: string;
    item_category?: string;
    price: number;
    quantity?: number;
  }>;
}) => {
  sendGAEvent('purchase', {
    currency: 'INR',
    ...params,
  });
};

// Enhanced Measurement Events (automatic in GA4 but can be manually tracked)
export const trackOutboundClick = (url: string, linkText?: string) => {
  sendGAEvent('click', {
    link_domain: new URL(url).hostname,
    link_url: url,
    link_text: linkText || '',
    outbound: true,
  });
};

// Exception tracking for errors
export const trackException = (description: string, fatal: boolean = false) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'exception', {
      description: description,
      fatal: fatal,
    });
  }
};
