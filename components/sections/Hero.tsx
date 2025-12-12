"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { SITE_CONFIG, USP } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--secondary))] to-[hsl(var(--accent))]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 mb-8 animate-fade-in">
            <Sparkles className="w-5 h-5 text-white" />
            <span className="text-white font-medium">
              Coimbatore's First AI-Powered Marketing & Development Agency
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
            Digital Marketing Meets{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--cyan))]">
              AI Development
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto animate-slide-up delay-200">
            Your Complete Growth Partner in {SITE_CONFIG.location.city}
          </p>

          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto animate-slide-up delay-300">
            We don't just get you traffic — we build the platforms that convert that traffic into revenue. From Meta Ads to SaaS platforms, we handle it all.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up delay-400">
            <Link href="/contact">
              <Button
                variant="accent"
                size="lg"
                className="group px-8"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-[hsl(var(--primary))] px-8"
              >
                View Our Work
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in delay-500">
            {[
              { label: "Projects Completed", value: `${SITE_CONFIG.stats.projectsCompleted}+` },
              { label: "Happy Clients", value: `${SITE_CONFIG.stats.clientsSatisfied}+` },
              { label: "AI Agents", value: SITE_CONFIG.stats.aiAgents },
              { label: "Team Members", value: `${SITE_CONFIG.stats.teamSize}+` },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* USP Badge */}
          <div className="mt-12 inline-block bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 animate-fade-in delay-700">
            <p className="text-white/90 text-sm font-medium">
              {USP[0]}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
