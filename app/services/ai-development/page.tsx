import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Smartphone,
  Bot,
  Zap,
  Database,
  Cloud,
  Shield,
  Rocket,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema, generateBreadcrumbs } from "@/components/seo/BreadcrumbSchema";
import { aiDevelopmentFAQs } from "@/data/faqs";

export const metadata: Metadata = generateMetadata({
  title: "AI Development Services - Web, Mobile, SaaS & AI Solutions | SHADOW MARKET",
  description: "Expert AI & software development services in Coimbatore: Full-stack web development, mobile apps, SaaS platforms, AI chatbots, and marketing automation.",
  keywords: [
    "web development coimbatore",
    "mobile app development",
    "SaaS development",
    "AI chatbot development",
    "full-stack development tamil nadu",
  ],
});

export default function AIDevelopmentPage() {
  const services = [
    {
      icon: <Code2 className="w-10 h-10" />,
      title: "Full-Stack Web Development",
      subtitle: "Modern, Scalable Web Applications",
      description: "Build lightning-fast, SEO-optimized websites and web applications using the latest technology stack. From landing pages to complex SaaS platforms.",
      features: [
        "Next.js 15 & React 19 development",
        "Responsive design for all devices",
        "SEO optimization built-in",
        "Fast page loads (<3 seconds)",
        "Database design & integration",
        "API development & integrations"
      ],
      tech: "Next.js, React, TypeScript, Tailwind CSS",
      results: "99.9% uptime for our applications"
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Mobile App Development",
      subtitle: "iOS & Android Native Apps",
      description: "Create beautiful, high-performance mobile apps that your customers will love. Native experiences for both iOS and Android platforms.",
      features: [
        "Native iOS & Android development",
        "Cross-platform with React Native",
        "Intuitive UI/UX design",
        "Push notifications & analytics",
        "App Store & Play Store deployment",
        "Ongoing maintenance & updates"
      ],
      tech: "React Native, Swift, Kotlin, Flutter",
      results: "4.5+ star average app ratings"
    },
    {
      icon: <Rocket className="w-10 h-10" />,
      title: "SaaS Platform Development",
      subtitle: "Multi-Tenant Software Solutions",
      description: "Build and launch your SaaS product. From MVP to enterprise-scale platforms with authentication, billing, and everything in between.",
      features: [
        "Multi-tenant architecture",
        "User authentication & authorization",
        "Subscription & payment integration",
        "Admin dashboards & analytics",
        "API for third-party integrations",
        "Scalable cloud infrastructure"
      ],
      tech: "Next.js, PostgreSQL, Stripe, AWS/Vercel",
      results: "Platforms serving 10,000+ users"
    },
    {
      icon: <Bot className="w-10 h-10" />,
      title: "AI Chatbot Solutions",
      subtitle: "Intelligent Customer Support",
      description: "Deploy AI-powered chatbots that handle customer queries 24/7. Reduce support costs while improving customer satisfaction.",
      features: [
        "Custom AI training on your data",
        "Natural language understanding",
        "Multi-language support",
        "WhatsApp, web, & social integration",
        "Lead qualification & booking",
        "Analytics & conversation insights"
      ],
      tech: "Claude AI, GPT-4, LangChain, Vector DBs",
      results: "70% reduction in support tickets"
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Marketing Automation",
      subtitle: "Automate Repetitive Tasks",
      description: "Build custom automation workflows that save time and increase efficiency. From lead nurturing to social media posting.",
      features: [
        "n8n workflow automation",
        "Email marketing automation",
        "Social media scheduling",
        "Lead scoring & nurturing",
        "CRM integrations",
        "Custom API connections"
      ],
      tech: "n8n, Zapier, Make.com, APIs",
      results: "Save 20+ hours per week"
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Backend & API Development",
      subtitle: "Robust Server-Side Solutions",
      description: "Build secure, scalable backend systems and APIs that power your applications. RESTful and GraphQL APIs with proper authentication.",
      features: [
        "RESTful & GraphQL APIs",
        "Database design & optimization",
        "Authentication & authorization",
        "Third-party API integrations",
        "Caching & performance tuning",
        "Comprehensive API documentation"
      ],
      tech: "Node.js, Python, PostgreSQL, MongoDB",
      results: "APIs handling 1M+ requests/day"
    }
  ];

  const techStack = [
    {
      category: "Frontend",
      technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS"],
      icon: <Code2 className="w-6 h-6" />
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Python", "FastAPI", "PostgreSQL"],
      icon: <Database className="w-6 h-6" />
    },
    {
      category: "Mobile",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      category: "AI/ML",
      technologies: ["Claude AI", "GPT-4", "LangChain", "Vector DBs"],
      icon: <Bot className="w-6 h-6" />
    },
    {
      category: "Cloud",
      technologies: ["Vercel", "AWS", "Supabase", "Railway"],
      icon: <Cloud className="w-6 h-6" />
    },
    {
      category: "Tools",
      technologies: ["Git", "Docker", "CI/CD", "n8n"],
      icon: <Zap className="w-6 h-6" />
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--cyan))] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl top-10 right-10 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl bottom-10 left-10 animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 mb-8">
              <Sparkles className="w-5 h-5 text-white" />
              <span className="text-white font-medium">NEW & FEATURED</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Development Services
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Build powerful platforms, mobile apps, and AI solutions with the latest technology.
              From MVPs to enterprise-scale systems.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button variant="default" size="lg" className="bg-white text-[hsl(var(--accent))] hover:bg-white/90">
                  Start Your Project
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-[hsl(var(--accent))]"
                >
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--foreground))] mb-6">
              Development Services
            </h2>
            <p className="text-xl text-[hsl(var(--muted-foreground))]">
              Comprehensive software solutions powered by the latest technology and AI
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border-2 border-[hsl(var(--muted))] rounded-2xl p-8 hover:border-[hsl(var(--accent))] hover:shadow-xl transition-all duration-300"
              >
                <div className="text-[hsl(var(--accent))] mb-4">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-2">
                  {service.title}
                </h3>

                <p className="text-[hsl(var(--accent))] font-semibold mb-4">
                  {service.subtitle}
                </p>

                <p className="text-[hsl(var(--muted-foreground))] mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-[hsl(var(--accent))] flex-shrink-0" />
                      <span className="text-[hsl(var(--muted-foreground))]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-[hsl(var(--muted))] rounded-lg p-4 mb-4">
                  <p className="text-xs font-semibold text-[hsl(var(--muted-foreground))] mb-1">
                    Tech Stack:
                  </p>
                  <p className="text-sm font-semibold text-[hsl(var(--foreground))]">
                    {service.tech}
                  </p>
                </div>

                <div className="bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--cyan))] rounded-lg p-4 text-white">
                  <p className="text-sm font-semibold">
                    {service.results}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-[hsl(var(--muted))]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--foreground))] mb-6">
              Our Technology Stack
            </h2>
            <p className="text-xl text-[hsl(var(--muted-foreground))]">
              We use the latest, most powerful technologies for 2024-2025
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {techStack.map((stack, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-[hsl(var(--accent))] mb-4">
                  {stack.icon}
                </div>
                <h3 className="text-xl font-bold text-[hsl(var(--foreground))] mb-4">
                  {stack.category}
                </h3>
                <ul className="space-y-2">
                  {stack.technologies.map((tech, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-[hsl(var(--accent))] rounded-full"></div>
                      <span className="text-[hsl(var(--muted-foreground))]">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Development */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--foreground))] mb-6">
              Why Our Development Stands Out
            </h2>
            <p className="text-xl text-[hsl(var(--muted-foreground))]">
              Production-ready code, not proof-of-concept demos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Rocket className="w-10 h-10" />,
                title: "Production-Ready",
                description: "Every project is built to enterprise standards with proper testing, security, and scalability."
              },
              {
                icon: <Sparkles className="w-10 h-10" />,
                title: "24 AI Agents",
                description: "Our SHADOW-AI system ensures world-class code quality on every single line."
              },
              {
                icon: <Shield className="w-10 h-10" />,
                title: "Security First",
                description: "Authentication, encryption, OWASP compliance—security is built-in, not bolted on."
              },
              {
                icon: <Zap className="w-10 h-10" />,
                title: "Performance Optimized",
                description: "Fast page loads, optimized queries, and efficient code. Your users will notice."
              },
              {
                icon: <Code2 className="w-10 h-10" />,
                title: "Clean Code",
                description: "Well-documented, maintainable code following industry best practices and SOLID principles."
              },
              {
                icon: <CheckCircle2 className="w-10 h-10" />,
                title: "Full Support",
                description: "Documentation, training, and ongoing maintenance. We're here for the long term."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-[hsl(var(--muted))] rounded-xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="text-[hsl(var(--accent))] mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[hsl(var(--foreground))] mb-3">
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

      {/* FAQ Section - AEO/GEO Optimization */}
      <FAQSchema
        faqs={aiDevelopmentFAQs}
        title="AI Development FAQs"
        showUI={true}
      />

      {/* Breadcrumb Schema */}
      <BreadcrumbSchema items={generateBreadcrumbs('/services/ai-development')} />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--cyan))]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a roadmap to bring your vision to life.
          </p>
          <Link href="/contact">
            <Button variant="default" size="lg" className="bg-white text-[hsl(var(--accent))] hover:bg-white/90">
              Start Your Project Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
