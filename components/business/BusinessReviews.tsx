"use client";

import { useEffect, useState } from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { ReviewCard } from './ReviewCard';
import { Button } from '@/components/ui/button';

interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url?: string;
  relative_time_description: string;
}

interface BusinessData {
  reviews?: Review[];
  rating?: number;
  user_ratings_total?: number;
  fallback?: boolean;
}

export function BusinessReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [rating, setRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [loading, setLoading] = useState(true);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    fetch('/api/business')
      .then(res => res.json())
      .then((data: BusinessData) => {
        if (data.fallback || !data.reviews) {
          setUseFallback(true);
        } else {
          setReviews(data.reviews?.slice(0, 6) || []);
          setRating(data.rating || 0);
          setTotalReviews(data.user_ratings_total || 0);
        }
        setLoading(false);
      })
      .catch(() => {
        setUseFallback(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-muted rounded w-64 mx-auto"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-48 bg-muted rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (useFallback || reviews.length === 0) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 text-[hsl(var(--foreground))]">
              What Our Clients Say
            </h2>
            <p className="text-lg text-[hsl(var(--muted-foreground))] mb-8">
              We're proud to work with amazing clients who trust us with their digital growth.
            </p>
            <a
              href={`https://search.google.com/local/writereview?placeid=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg">
                View Our Reviews on Google
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-[hsl(var(--foreground))]">
            What Our Clients Say
          </h2>

          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i < Math.floor(rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-[hsl(var(--foreground))]">
              {rating.toFixed(1)}
            </span>
          </div>

          <p className="text-[hsl(var(--muted-foreground))]">
            Based on {totalReviews} Google reviews
          </p>
        </div>

        {/* Horizontal Scrolling Reviews */}
        <div className="relative mb-8">
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory scroll-smooth px-4 -mx-4">
            {reviews.map((review, idx) => (
              <div key={idx} className="flex-shrink-0 w-[350px] snap-start">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>

          {/* Scroll Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {reviews.map((_, idx) => (
              <div
                key={idx}
                className="w-2 h-2 rounded-full bg-[hsl(var(--muted))]"
              />
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href={`https://search.google.com/local/reviews?placeid=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="outline">
              View All {totalReviews} Reviews on Google
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default BusinessReviews;
