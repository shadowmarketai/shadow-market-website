"use client";

import { Star } from 'lucide-react';

interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url?: string;
  relative_time_description: string;
}

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-[hsl(var(--muted))] rounded-xl p-6 h-full flex flex-col">
      <div className="flex items-start gap-4 mb-4">
        {review.profile_photo_url ? (
          <img
            src={review.profile_photo_url}
            alt={review.author_name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center text-white font-bold">
            {review.author_name.charAt(0).toUpperCase()}
          </div>
        )}
        <div className="flex-1">
          <h4 className="font-semibold text-[hsl(var(--foreground))]">{review.author_name}</h4>
          <p className="text-xs text-[hsl(var(--muted-foreground))]">
            {review.relative_time_description}
          </p>
        </div>
      </div>

      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < review.rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>

      <p className="text-sm text-[hsl(var(--foreground))] line-clamp-4 flex-1">
        {review.text}
      </p>
    </div>
  );
}

export default ReviewCard;
