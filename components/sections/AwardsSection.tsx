"use client";

import Image from "next/image";
import { Award as AwardIcon, MapPin, Calendar, ExternalLink } from "lucide-react";
import { AWARDS, Award } from "@/data/awards";

interface AwardsSectionProps {
  title?: string;
  showAll?: boolean;
  limit?: number;
  className?: string;
}

export function AwardsSection({
  title = "Awards & Recognition",
  showAll = true,
  limit = 5,
  className = ""
}: AwardsSectionProps) {
  const displayAwards = showAll ? AWARDS : AWARDS.slice(0, limit);

  return (
    <section className={`py-20 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[hsl(var(--primary))]/10 rounded-full px-6 py-3 mb-6">
            <AwardIcon className="w-5 h-5 text-[hsl(var(--primary))]" />
            <span className="text-[hsl(var(--primary))] font-semibold">Excellence & Recognition</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--foreground))] mb-4">
            {title}
          </h2>

          <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
            Our commitment to excellence has been recognized by industry leaders and organizations across India.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {displayAwards.map((award) => (
            <AwardCard key={award.id} award={award} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Individual Award Card Component
function AwardCard({ award }: { award: Award }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-[hsl(var(--border))] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      {/* Award Image */}
      <div className="relative h-48 bg-gradient-to-br from-[hsl(var(--primary))]/10 to-[hsl(var(--secondary))]/10 overflow-hidden">
        <Image
          src={award.image}
          alt={award.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Icon Overlay */}
        <div className="absolute top-4 right-4 text-5xl bg-white/90 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
          {award.icon}
        </div>
      </div>

      {/* Award Content */}
      <div className="p-6">
        {/* Category Badge */}
        <div className="inline-block mb-3">
          <span className="text-xs font-semibold uppercase tracking-wide text-[hsl(var(--primary))] bg-[hsl(var(--primary))]/10 px-3 py-1 rounded-full">
            {award.category}
          </span>
        </div>

        {/* Award Title */}
        <h3 className="text-xl font-bold text-[hsl(var(--foreground))] mb-2 group-hover:text-[hsl(var(--primary))] transition-colors">
          {award.title}
        </h3>

        {/* Event & Organization */}
        <p className="text-sm font-medium text-[hsl(var(--primary))] mb-3">
          {award.organization} • {award.event}
        </p>

        {/* Description */}
        <p className="text-sm text-[hsl(var(--muted-foreground))] mb-4 line-clamp-3">
          {award.description}
        </p>

        {/* Location & Date */}
        <div className="flex items-center justify-between text-xs text-[hsl(var(--muted-foreground))] pt-4 border-t border-[hsl(var(--border))]">
          <div className="flex items-center space-x-1">
            <MapPin className="w-3 h-3" />
            <span>{award.location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="w-3 h-3" />
            <span>{award.year}</span>
          </div>
        </div>

        {/* Optional Link */}
        {award.link && (
          <a
            href={award.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center space-x-1 text-sm text-[hsl(var(--primary))] hover:underline"
          >
            <span>View Certificate</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  );
}
