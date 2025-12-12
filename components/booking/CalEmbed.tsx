'use client';

import { useEffect } from 'react';

interface CalEmbedProps {
  calLink: string;
  config?: {
    name?: string;
    email?: string;
    notes?: string;
    guests?: string[];
    theme?: 'light' | 'dark' | 'auto';
  };
}

/**
 * Cal.com Embed Component
 *
 * This component loads the Cal.com embed script and displays the booking interface.
 *
 * @param calLink - Your Cal.com booking link (e.g., "shadowmarket/consultation")
 * @param config - Optional configuration for pre-filling form fields
 *
 * Setup Instructions:
 * 1. Sign up at https://cal.com
 * 2. Create your event types (consultations, demos, etc.)
 * 3. Get your Cal.com username
 * 4. Add to .env.local: NEXT_PUBLIC_CAL_LINK=your-username/event-type
 */
export function CalEmbed({ calLink, config = {} }: CalEmbedProps) {
  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Initialize Cal embed when script loads
    script.onload = () => {
      // @ts-ignore - Cal is loaded from external script
      if (typeof window.Cal !== 'undefined') {
        // @ts-ignore
        window.Cal('init', { origin: 'https://cal.com' });
      }
    };

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  // Build data-cal-config from config prop
  const calConfig = JSON.stringify({
    layout: 'month_view',
    theme: config.theme || 'auto',
    ...config,
  });

  return (
    <div className="w-full">
      <div
        data-cal-link={calLink}
        data-cal-config={calConfig}
        className="w-full min-h-[600px] rounded-lg overflow-hidden"
        style={{
          width: '100%',
          height: '100%',
          overflow: 'scroll',
        }}
      />
    </div>
  );
}

/**
 * Cal.com Inline Button Component
 *
 * Creates a button that opens Cal.com in a modal/popup
 */
interface CalButtonProps {
  calLink: string;
  children: React.ReactNode;
  className?: string;
}

export function CalButton({ calLink, children, className = '' }: CalButtonProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <button
      data-cal-link={calLink}
      data-cal-config='{"layout":"month_view"}'
      className={className}
    >
      {children}
    </button>
  );
}
