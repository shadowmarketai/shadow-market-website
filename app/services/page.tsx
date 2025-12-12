import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Megaphone,
  Code2,
  Target,
  Smartphone,
  Bot,
  BarChart3,
  Globe,
  Zap,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = generateMetadata({
  title: "Our Services - Digital Marketing & AI Development | SHADOW MARKET",
  description: "Comprehensive digital solutions including Meta Ads, Google Ads, web development, mobile apps, AI chatbots, and marketing automation in Coimbatore.",
  keywords: [
    "digital marketing services",
    "AI development services",
    "web development coimbatore",
    "mobile app development",
    "marketing automation",
  ],
});

export default function ServicesPage() {
  const services = [
    {
      category: "Digital Marketing",
      href: "/services/digital-marketing",
      gradient: "from-[hsl(var(--primary))] to-[hsl(var(--secondary))]",
      icon: <Megaphone className="w-12 h-12" />,
      description: "Drive traffic, engagement, and sales with data-driven marketing strategies.",
      services: [
        {
          icon: <Target className="w-6 h-6" />,
          name: "Meta Advertising",
          desc: "Facebook & Instagram ads that convert"
        },
        {
          icon: <Globe className="w-6 h-6" />,
          name: "Google Ads",
          desc: "Search, Display & YouTube campaigns"
        },
        {
          icon: <Megaphone className="w-6 h-6" />,
          name: "Social Media Marketing",
          desc: "Build engaged communities"
        },
        {
          icon: <BarChart3 className="w-6 h-6" />,
          name: "SEO & Content",
          desc: "Rank higher, get organic traffic"
        }
      ]
    },
    {
      category: "AI Development",
      href: "/services/ai-development",
      gradient: "from-[hsl(var(--accent))] to-[hsl(var(--cyan))]",
      icon: <Code2 className="w-12 h-12" />,
      description: "Build powerful platforms and automate processes with modern technology.",
      badge: "NEW & FEATURED",
      services: [
        {
          icon: <Globe className="w-6 h-6" />,
          name: "Web Development",
          desc: "Full-stack solutions with Next.js & React"
        },
        {
          icon: <Smartphone className="w-6 h-6" />,
          name: "Mobile Apps",
          desc: "iOS & Android native experiences"
        },
        {
          icon: <Bot className="w-6 h-6" />,
          name: "AI Chatbots",
          desc: "Intelligent customer support"
        },
        {
          icon: <Zap className="w-6 h-6" />,
          name: "Automation",
          desc: "Marketing & business process automation"
        }
      ]
    }
  ];

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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Complete Digital Solutions
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              From driving traffic to building the platforms that convert it—we handle everything
              your business needs to succeed online.
            </p>

            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-6 py-3">
              <span className="text-white font-medium">
                Two Powerful Categories, One Complete Solution
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {services.map((category, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${category.gradient} p-8 text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10">
                  {category.badge && (
                    <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                      {category.badge}
                    </div>
                  )}

                  <div className="mb-6">{category.icon}</div>

                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {category.category}
                  </h2>

                  <p className="text-white/90 mb-8 text-lg">
                    {category.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    {category.services.map((service, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="mt-1 text-white/80">
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{service.name}</h3>
                          <p className="text-white/80 text-sm">{service.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link href={category.href}>
                    <Button
                      variant="outline"
                      className="bg-white text-[hsl(var(--primary))] hover:bg-white/90 border-0 group"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-[hsl(var(--muted))]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--foreground))] mb-6">
              Why Choose SHADOW MARKET?
            </h2>
            <p className="text-xl text-[hsl(var(--muted-foreground))]">
              The only agency in Coimbatore offering complete digital solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "All-in-One Solution",
                description: "No need to coordinate multiple agencies. We handle marketing, development, and everything in between.",
                emoji: "🎯"
              },
              {
                title: "24 AI Agents",
                description: "Our SHADOW-AI system with 24 specialized agents ensures world-class quality on every project.",
                emoji: "🤖"
              },
              {
                title: "Latest Technology",
                description: "We use 2024-2025 tech stack: Next.js 15, React 19, AI/ML, and cutting-edge tools.",
                emoji: "⚡"
              },
              {
                title: "Local Expertise",
                description: "Based in Coimbatore, we understand Tamil Nadu market dynamics and cultural nuances.",
                emoji: "🌏"
              },
              {
                title: "Proven Track Record",
                description: "150+ successful projects, 80+ satisfied clients, and crores in revenue generated.",
                emoji: "📈"
              },
              {
                title: "Transparent Process",
                description: "Clear pricing, detailed proposals, and regular updates. No hidden costs or surprises.",
                emoji: "💰"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-5xl mb-4">{feature.emoji}</div>
                <h3 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[hsl(var(--muted-foreground))]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free consultation and discover which services are perfect for your goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button variant="accent" size="lg">
                Get Free Consultation
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-[hsl(var(--primary))]"
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
