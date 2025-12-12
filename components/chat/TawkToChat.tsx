'use client';

import { useEffect } from 'react';

/**
 * Tawk.to Live Chat Component
 *
 * This component loads the Tawk.to live chat widget on your website.
 *
 * Setup Instructions:
 * 1. Sign up at https://tawk.to (100% FREE - unlimited agents, unlimited chats)
 * 2. Create a property (your website)
 * 3. Get your Property ID and Widget ID from the admin panel
 * 4. Add to .env.local:
 *    - NEXT_PUBLIC_TAWK_PROPERTY_ID=your_property_id
 *    - NEXT_PUBLIC_TAWK_WIDGET_ID=your_widget_id
 * 5. Download the mobile app (iOS/Android) to respond on the go
 *
 * Features:
 * - 100% free forever
 * - Unlimited agents and conversations
 * - Mobile apps for iOS and Android
 * - Customizable widget appearance
 * - Canned responses (quick replies)
 * - Chat history and analytics
 * - Visitor monitoring
 * - Integration with analytics (GA4, Meta Pixel)
 */

export function TawkToChat() {
  useEffect(() => {
    // Get Tawk.to credentials from environment variables
    const propertyId = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID;
    const widgetId = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID;

    // Don't load if credentials are missing
    if (!propertyId || !widgetId) {
      console.warn(
        '⚠️ Tawk.to credentials missing. Add NEXT_PUBLIC_TAWK_PROPERTY_ID and NEXT_PUBLIC_TAWK_WIDGET_ID to .env.local'
      );
      return;
    }

    // Check if Tawk.to script is already loaded
    if (document.getElementById('tawk-to-script')) {
      return;
    }

    // Create Tawk.to script
    const script = document.createElement('script');
    script.id = 'tawk-to-script';
    script.async = true;
    script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    // Add script to document
    document.body.appendChild(script);

    // Initialize Tawk.to API when loaded
    script.onload = () => {
      console.log('✅ Tawk.to chat widget loaded successfully');

      // Wait for Tawk.to API to be available
      const checkTawkAPI = setInterval(() => {
        // @ts-ignore - Tawk_API is loaded from external script
        if (window.Tawk_API) {
          clearInterval(checkTawkAPI);

          // Track chat events with analytics
          setupChatAnalytics();
        }
      }, 100);

      // Clear interval after 5 seconds if API not loaded
      setTimeout(() => clearInterval(checkTawkAPI), 5000);
    };

    script.onerror = () => {
      console.error('❌ Failed to load Tawk.to chat widget');
    };

    // Cleanup function
    return () => {
      const existingScript = document.getElementById('tawk-to-script');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
}

/**
 * Setup analytics tracking for chat events
 */
function setupChatAnalytics() {
  // @ts-ignore
  if (!window.Tawk_API) return;

  try {
    // Track when chat widget loads
    // @ts-ignore
    window.Tawk_API.onLoad = function () {
      console.log('📊 Tawk.to widget loaded');

      // Track with Google Analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'tawk_widget_loaded', {
          event_category: 'Live Chat',
          event_label: 'Widget Loaded',
        });
      }
    };

    // Track when user opens the chat widget
    // @ts-ignore
    window.Tawk_API.onChatMaximized = function () {
      console.log('📊 Chat opened by user');

      // Google Analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'chat_opened', {
          event_category: 'Live Chat',
          event_label: 'Chat Maximized',
        });
      }

      // Meta Pixel
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('trackCustom', 'ChatOpened', {
          source: 'tawk_to',
        });
      }
    };

    // Track when user minimizes the chat widget
    // @ts-ignore
    window.Tawk_API.onChatMinimized = function () {
      console.log('📊 Chat minimized by user');

      // Google Analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'chat_minimized', {
          event_category: 'Live Chat',
          event_label: 'Chat Minimized',
        });
      }
    };

    // Track when user starts a chat conversation
    // @ts-ignore
    window.Tawk_API.onChatStarted = function () {
      console.log('🎉 Chat conversation started!');

      // Google Analytics - Track as Lead
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'generate_lead', {
          currency: 'INR',
          value: 300, // Estimated value of a chat lead
          lead_source: 'live_chat',
        });

        window.gtag('event', 'chat_started', {
          event_category: 'Live Chat',
          event_label: 'Conversation Started',
        });
      }

      // Meta Pixel - Track as Lead
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Lead', {
          content_name: 'Live Chat Conversation',
          value: 300,
          currency: 'INR',
        });

        window.fbq('trackCustom', 'ChatStarted', {
          source: 'tawk_to',
        });
      }
    };

    // Track when user sends a message
    // @ts-ignore
    window.Tawk_API.onChatMessageVisitor = function (message: any) {
      console.log('📊 User sent message:', message);

      // Google Analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'chat_message_sent', {
          event_category: 'Live Chat',
          event_label: 'User Message',
        });
      }
    };

    // Track when agent responds
    // @ts-ignore
    window.Tawk_API.onChatMessageAgent = function (message: any) {
      console.log('📊 Agent responded');

      // Google Analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'chat_agent_response', {
          event_category: 'Live Chat',
          event_label: 'Agent Response',
        });
      }
    };

    // Track when chat ends
    // @ts-ignore
    window.Tawk_API.onChatEnded = function () {
      console.log('📊 Chat conversation ended');

      // Google Analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'chat_ended', {
          event_category: 'Live Chat',
          event_label: 'Conversation Ended',
        });
      }

      // Meta Pixel
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('trackCustom', 'ChatEnded', {
          source: 'tawk_to',
        });
      }
    };

    console.log('✅ Chat analytics tracking configured');
  } catch (error) {
    console.error('❌ Error setting up chat analytics:', error);
  }
}

/**
 * Utility functions to interact with Tawk.to API
 * Call these from anywhere in your app
 */

/**
 * Show the chat widget
 */
export function showChat() {
  // @ts-ignore
  if (window.Tawk_API && window.Tawk_API.showWidget) {
    // @ts-ignore
    window.Tawk_API.showWidget();
  }
}

/**
 * Hide the chat widget
 */
export function hideChat() {
  // @ts-ignore
  if (window.Tawk_API && window.Tawk_API.hideWidget) {
    // @ts-ignore
    window.Tawk_API.hideWidget();
  }
}

/**
 * Maximize (open) the chat widget
 */
export function openChat() {
  // @ts-ignore
  if (window.Tawk_API && window.Tawk_API.maximize) {
    // @ts-ignore
    window.Tawk_API.maximize();
  }
}

/**
 * Minimize (close) the chat widget
 */
export function closeChat() {
  // @ts-ignore
  if (window.Tawk_API && window.Tawk_API.minimize) {
    // @ts-ignore
    window.Tawk_API.minimize();
  }
}

/**
 * Set visitor attributes (for personalization)
 */
export function setVisitorAttributes(attributes: {
  name?: string;
  email?: string;
  phone?: string;
  [key: string]: any;
}) {
  // @ts-ignore
  if (window.Tawk_API && window.Tawk_API.setAttributes) {
    // @ts-ignore
    window.Tawk_API.setAttributes(attributes);
  }
}

// Declare window.Tawk_API for TypeScript
declare global {
  interface Window {
    Tawk_API?: any;
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}
