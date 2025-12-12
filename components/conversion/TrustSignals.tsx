'use client';

import { useState, useEffect } from 'react';
import { Users, TrendingUp, Award, Shield } from 'lucide-react';

/**
 * Trust Signals Component
 * Displays social proof, live visitor count, and recent conversions
 * Builds credibility and urgency
 */

interface RecentConversion {
  name: string;
  location: string;
  service: string;
  time: string;
}

const mockRecentConversions: RecentConversion[] = [
  { name: 'Raj Kumar', location: 'Chennai', service: 'Digital Marketing Package', time: '5 minutes ago' },
  { name: 'Priya S.', location: 'Coimbatore', service: 'Web Development', time: '12 minutes ago' },
  { name: 'Arjun M.', location: 'Bangalore', service: 'AI Chatbot Solution', time: '23 minutes ago' },
  { name: 'Lakshmi V.', location: 'Madurai', service: 'Google Ads Campaign', time: '31 minutes ago' },
  { name: 'Karthik R.', location: 'Trichy', service: 'Free Consultation', time: '45 minutes ago' },
  { name: 'Divya P.', location: 'Salem', service: 'Mobile App Development', time: '1 hour ago' },
];

export function TrustSignals() {
  const [currentConversion, setCurrentConversion] = useState(0);
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Simulate visitor count (would be real from analytics in production)
    const baseCount = 42;
    const randomAddition = Math.floor(Math.random() * 20);
    setVisitorCount(baseCount + randomAddition);

    // Rotate recent conversions
    const interval = setInterval(() => {
      setCurrentConversion(prev => (prev + 1) % mockRecentConversions.length);
    }, 8000); // Change every 8 seconds

    return () => clearInterval(interval);
  }, []);

  const conversion = mockRecentConversions[currentConversion];

  return (
    <>
      {/* Floating Notification - Recent Conversion */}
      <div className="fixed bottom-24 md:bottom-6 left-4 md:left-6 z-40 max-w-sm animate-in slide-in-from-left duration-500">
        <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-4 backdrop-blur-sm">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] rounded-full flex items-center justify-center text-white font-bold">
              {conversion.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate">
                {conversion.name} from {conversion.location}
              </p>
              <p className="text-xs text-gray-600 mt-1">
                just booked: {conversion.service}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {conversion.time}
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Live Visitor Counter - Desktop Only */}
      <div className="hidden md:block fixed bottom-6 right-6 z-40">
        <div className="bg-white rounded-lg shadow-xl border border-gray-200 px-4 py-3 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Users className="w-5 h-5 text-[hsl(var(--primary))]" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Visitors online</p>
              <p className="text-lg font-bold text-gray-900">{visitorCount}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/**
 * Trust Badges Section
 * Display certifications, guarantees, and trust indicators
 */
export function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: '100% Secure',
      description: 'SSL Encrypted',
    },
    {
      icon: Award,
      title: 'Certified Partners',
      description: 'Google & Meta',
    },
    {
      icon: TrendingUp,
      title: '150+ Projects',
      description: 'Delivered Successfully',
    },
    {
      icon: Users,
      title: '98% Satisfaction',
      description: 'Client Rating',
    },
  ];

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-[hsl(var(--primary))]/10 rounded-full flex items-center justify-center mb-3">
                <badge.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
              </div>
              <h4 className="font-semibold text-gray-900 text-sm mb-1">
                {badge.title}
              </h4>
              <p className="text-xs text-gray-600">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Client Logos Section
 * Display trusted client/partner logos
 */
export function ClientLogos() {
  const partners = [
    'Google Partner',
    'Meta Business Partner',
    'Microsoft Certified',
    'AWS Partner',
    'Razorpay',
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-gray-500 mb-6 uppercase tracking-wide">
          Trusted By 150+ Businesses Across India
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60 hover:opacity-100 transition-opacity">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="text-gray-400 font-semibold text-sm md:text-base"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
