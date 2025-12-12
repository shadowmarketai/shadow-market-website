import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink, TrendingUp, Users, Zap } from "lucide-react";

export const metadata: Metadata = generateMetadata({
  title: "Portfolio - Our Work | SHADOW MARKET",
  description: "Explore SHADOW MARKET's portfolio of successful digital marketing campaigns, web development projects, and AI solutions delivered to clients across Tamil Nadu.",
  keywords: [
    "portfolio",
    "case studies",
    "successful projects",
    "client work",
    "digital marketing results",
  ],
});

export default function PortfolioPage() {
  const projects = [
    {
      title: "E-Commerce Fashion Store",
      category: "Web Development + Marketing",
      description: "Full-stack e-commerce platform with integrated Meta Ads campaigns. Achieved 300% ROI in the first 3 months.",
      stats: [
        { label: "Revenue Generated", value: "₹45L" },
        { label: "Orders", value: "2,400+" },
        { label: "ROAS", value: "4.2x" },
      ],
      tags: ["Next.js", "Stripe", "Meta Ads"],
      image: "🛍️",
    },
    {
      title: "Local Restaurant Chain",
      category: "Digital Marketing",
      description: "Multi-location Google Ads and social media campaign. Increased foot traffic by 180% across 5 locations.",
      stats: [
        { label: "New Customers", value: "5,000+" },
        { label: "Ad Spend", value: "₹8L" },
        { label: "Revenue", value: "₹92L" },
      ],
      tags: ["Google Ads", "Social Media", "SEO"],
      image: "🍽️",
    },
    {
      title: "SaaS Platform for HR",
      category: "AI Development",
      description: "Complete SaaS platform with AI-powered resume screening and candidate matching. Serving 50+ companies.",
      stats: [
        { label: "Active Users", value: "2,500+" },
        { label: "Time Saved", value: "70%" },
        { label: "Companies", value: "50+" },
      ],
      tags: ["Next.js", "AI/ML", "PostgreSQL"],
      image: "💼",
    },
    {
      title: "Educational Institute",
      category: "Web + Mobile App",
      description: "Learning management system with mobile apps for iOS and Android. 10,000+ active students.",
      stats: [
        { label: "Students", value: "10,000+" },
        { label: "Courses", value: "500+" },
        { label: "Completion Rate", value: "85%" },
      ],
      tags: ["React Native", "Next.js", "Video Streaming"],
      image: "📚",
    },
    {
      title: "Real Estate Developer",
      category: "Marketing Automation",
      description: "Automated lead nurturing system with WhatsApp integration. 5x increase in qualified leads.",
      stats: [
        { label: "Leads/Month", value: "800+" },
        { label: "Conversion Rate", value: "12%" },
        { label: "Cost/Lead", value: "↓65%" },
      ],
      tags: ["n8n", "WhatsApp API", "CRM"],
      image: "🏢",
    },
    {
      title: "Healthcare Clinic",
      category: "AI Chatbot + Ads",
      description: "AI-powered appointment booking chatbot with targeted Meta Ads. 90% automation rate.",
      stats: [
        { label: "Bookings/Month", value: "600+" },
        { label: "Automation", value: "90%" },
        { label: "Patient Growth", value: "250%" },
      ],
      tags: ["AI Chatbot", "Meta Ads", "Appointment System"],
      image: "🏥",
    },
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
              Our Work Speaks for Itself
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Real projects, real results. See how we've helped businesses grow with digital marketing and AI development.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: <TrendingUp className="w-8 h-8" />, value: "150+", label: "Projects Delivered" },
              { icon: <Users className="w-8 h-8" />, value: "80+", label: "Happy Clients" },
              { icon: <Zap className="w-8 h-8" />, value: "₹100Cr+", label: "Revenue Generated" },
              { icon: <TrendingUp className="w-8 h-8" />, value: "4.2x", label: "Avg. ROAS" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-[hsl(var(--primary))] mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-[hsl(var(--foreground))] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-[hsl(var(--muted-foreground))]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-[hsl(var(--muted))]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--foreground))] mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
              A selection of our recent work across digital marketing and AI development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="text-6xl mb-4">{project.image}</div>

                  <div className="text-sm text-[hsl(var(--primary))] font-semibold mb-2">
                    {project.category}
                  </div>

                  <h3 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-3">
                    {project.title}
                  </h3>

                  <p className="text-[hsl(var(--muted-foreground))] mb-6">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b">
                    {project.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="font-bold text-[hsl(var(--primary))] text-lg">
                          {stat.value}
                        </div>
                        <div className="text-xs text-[hsl(var(--muted-foreground))]">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[hsl(var(--muted))] text-[hsl(var(--foreground))] text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how SHADOW MARKET can help you achieve similar results for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button variant="accent" size="lg">
                Get Free Consultation
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-[hsl(var(--primary))]"
              >
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
