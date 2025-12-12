import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Target, Users, Award, Rocket } from "lucide-react";
import { AwardsSection } from "@/components/sections/AwardsSection";

export const metadata: Metadata = generateMetadata({
  title: "About Us - SHADOW MARKET | Digital Marketing & AI Development Agency",
  description: "Learn about SHADOW MARKET, Coimbatore's leading digital marketing and AI development agency. Founded by M. Kumaran and Mrs. Kiruthika, we combine marketing expertise with cutting-edge AI technology.",
  keywords: [
    "about shadow market",
    "digital agency coimbatore",
    "AI development company",
    "marketing agency founders",
  ],
});

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl top-10 right-10 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl bottom-10 left-10 animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 mb-8">
              <Sparkles className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Where Shadows Transform into Opportunities</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About SHADOW MARKET
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              We're not just another agency. We're Coimbatore's first complete digital solutions provider,
              combining world-class marketing strategies with cutting-edge AI development.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--foreground))] mb-8 text-center">
              Our Story
            </h2>

            <div className="prose prose-lg max-w-none text-[hsl(var(--muted-foreground))]">
              <p className="text-xl leading-relaxed mb-6">
                SHADOW MARKET was born from a simple observation: businesses in Coimbatore and across
                Tamil Nadu were forced to work with multiple agencies—one for marketing, another for
                web development, and yet another for mobile apps or AI solutions. This fragmented
                approach led to miscommunication, delays, and inconsistent results.
              </p>

              <p className="text-xl leading-relaxed mb-6">
                Founded by <strong>M. Kumaran</strong> and <strong>Mrs. Kiruthika</strong>, SHADOW MARKET
                set out to change this. We built a team that could handle everything from Meta Ads
                campaigns to full-stack SaaS platform development, all under one roof.
              </p>

              <p className="text-xl leading-relaxed">
                Today, we're powered by our proprietary <strong>SHADOW-AI system</strong>—a network of
                24 expert AI agents that ensure every project meets world-class standards. Whether you
                need to drive traffic or build the platform that converts that traffic, we've got you covered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-[hsl(var(--muted))]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--foreground))] mb-16 text-center">
            Meet Our Founders
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {SITE_CONFIG.founders.map((founder, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="relative w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full border-4 border-[hsl(var(--primary))]">
                  {founder.image ? (
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover object-center"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] flex items-center justify-center">
                      <span className="text-5xl text-white font-bold">
                        {founder.name.split(' ').map((n: string) => n[0] || '').join('')}
                      </span>
                    </div>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-[hsl(var(--foreground))] text-center mb-2">
                  {founder.name}
                </h3>

                <p className="text-[hsl(var(--primary))] font-semibold text-center mb-4">
                  {founder.role}
                </p>

                <p className="text-[hsl(var(--muted-foreground))] text-center">
                  {index === 0
                    ? "Visionary leader with 5+ years in digital marketing and AI development. Passionate about transforming businesses through technology."
                    : "Strategic thinker specializing in business development and client relations. Ensures every project delivers exceptional value."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--foreground))] mb-16 text-center">
            What Drives Us
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Target className="w-12 h-12" />,
                title: "Results First",
                description: "We measure success by your ROI, not vanity metrics."
              },
              {
                icon: <Sparkles className="w-12 h-12" />,
                title: "Innovation Always",
                description: "We use the latest tech stack: Next.js 15, React 19, AI/ML."
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Client Partnership",
                description: "Your success is our success. We're in this together."
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: "Quality Standards",
                description: "24 AI Agents ensure production-ready, world-class quality."
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:bg-[hsl(var(--muted))] transition-colors">
                <div className="text-[hsl(var(--primary))] mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[hsl(var(--foreground))] mb-3">
                  {value.title}
                </h3>
                <p className="text-[hsl(var(--muted-foreground))]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Our Impact in Numbers
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { label: "Projects Delivered", value: `${SITE_CONFIG.stats.projectsCompleted}+` },
              { label: "Happy Clients", value: `${SITE_CONFIG.stats.clientsSatisfied}+` },
              { label: "AI Agents", value: SITE_CONFIG.stats.aiAgents },
              { label: "Team Members", value: `${SITE_CONFIG.stats.teamSize}+` },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition Section */}
      <AwardsSection />

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Rocket className="w-16 h-16 text-[hsl(var(--primary))] mx-auto mb-6" />

            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--foreground))] mb-6">
              Ready to Work Together?
            </h2>

            <p className="text-xl text-[hsl(var(--muted-foreground))] mb-8">
              Let's discuss how SHADOW MARKET can help transform your business with our
              complete digital solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button variant="default" size="lg">
                  Get Free Consultation
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" size="lg">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
