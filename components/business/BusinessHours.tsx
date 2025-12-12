"use client";

import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

interface OpeningHours {
  weekday_text?: string[];
  open_now?: boolean;
}

interface BusinessData {
  opening_hours?: OpeningHours;
  fallback?: boolean;
}

export function BusinessHours() {
  const [hours, setHours] = useState<OpeningHours | null>(null);
  const [loading, setLoading] = useState(true);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    fetch('/api/business')
      .then(res => res.json())
      .then((data: BusinessData) => {
        if (data.fallback || !data.opening_hours) {
          setUseFallback(true);
        } else {
          setHours(data.opening_hours);
        }
        setLoading(false);
      })
      .catch(() => {
        setUseFallback(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="animate-pulse h-64 bg-muted rounded-xl" />;
  }

  const fallbackHours = [
    'Monday: 9:00 AM – 7:00 PM',
    'Tuesday: 9:00 AM – 7:00 PM',
    'Wednesday: 9:00 AM – 7:00 PM',
    'Thursday: 9:00 AM – 7:00 PM',
    'Friday: 9:00 AM – 7:00 PM',
    'Saturday: 9:00 AM – 7:00 PM',
    'Sunday: Closed',
  ];

  const displayHours = useFallback ? fallbackHours : hours?.weekday_text || fallbackHours;
  const isOpenNow = !useFallback && hours?.open_now !== undefined ? hours.open_now : undefined;

  // Determine if open based on current time for fallback
  const getCurrentOpenStatus = () => {
    if (isOpenNow !== undefined) return isOpenNow;

    const now = new Date();
    const day = now.getDay(); // 0 = Sunday
    const hour = now.getHours();

    // Sunday (0) = closed, Mon-Sat (1-6) = 9am-7pm
    if (day === 0) return false;
    return hour >= 9 && hour < 19;
  };

  const openNow = getCurrentOpenStatus();

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="w-6 h-6 text-[hsl(var(--primary))]" />
        <h3 className="text-xl font-bold text-[hsl(var(--foreground))]">Business Hours</h3>
      </div>

      <div
        className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${
          openNow
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800'
        }`}
      >
        {openNow ? '✓ Open Now' : '✕ Closed'}
      </div>

      <div className="space-y-2">
        {displayHours.map((day, idx) => {
          const [dayName, time] = day.split(': ');
          const isToday = new Date().getDay() === (idx + 1) % 7;

          return (
            <div
              key={idx}
              className={`flex justify-between py-2 ${
                isToday ? 'font-bold text-[hsl(var(--primary))]' : 'text-[hsl(var(--muted-foreground))]'
              }`}
            >
              <span>{dayName}</span>
              <span>{time}</span>
            </div>
          );
        })}
      </div>

      {useFallback && (
        <p className="mt-4 text-xs text-[hsl(var(--muted-foreground))] italic">
          * Hours displayed from local data
        </p>
      )}
    </div>
  );
}

export default BusinessHours;
