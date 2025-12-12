import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  Search,
  TrendingUp,
  BarChart3,
  Target,
  Users,
  DollarSign,
  CheckCircle2
} from "lucide-react";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema, generateBreadcrumbs } from "@/components/seo/BreadcrumbSchema";
import { digitalMarketingFAQs, metaAdsFAQs } from "@/data/faqs";

export const metadata: Metadata = generateMetadata({
  title: "Digital Marketing Services - Meta Ads, Google Ads & SEO | SHADOW MARKET",
  description: "Expert digital marketing services in Coimbatore: Meta Ads (Facebook/Instagram), Google Ads, Social Media Marketing, SEO, and Content Marketing. Drive real results.",
  keywords: [
    "meta ads coimbatore",
    "facebook ads agency",
    "google ads coimbatore",
    "social media marketing",
    "SEO services coimbatore",
  ],
});

export default function DigitalMarketingPage() {
  const services = [
    {
      icon: <Facebook className="w-10 h-10" />,
      title: "Meta Advertising",
      subtitle: "Facebook & Instagram Ads",
      description: "Reach your ideal customers on the world's largest social platforms. We create scroll-stopping ads that drive engagement, leads, and sales.",
      features: [
        "Audience research & targeting",
        "Creative design & copywriting",
        "Campaign setup & optimization",
        "A/B testing & analytics",
        "Retargeting strategies",
        "ROI tracking & reporting"
      ],
      results: "Average 3-5x ROAS for our clients"
    },
    {
      icon: <Search className="w-10 h-10" />,
      title: "Google Ads",
      subtitle: "Search, Display & YouTube",
      description: "Capture high-intent customers actively searching for your products or services. Dominate search results and drive qualified traffic.",
      features: [
        "Keyword research & strategy",
        "Search campaign management",
        "Display & banner ads",
        "YouTube video advertising",
        "Shopping ads for e-commerce",
        "Conversion tracking & optimization"
      ],
      results: "Average 25% reduction in cost-per-lead"
    },
    {
      icon: <Instagram className="w-10 h-10" />,
      title: "Social Media Marketing",
      subtitle: "Build & Engage Communities",
      description: "Build a loyal following and turn social media into a revenue-generating channel. We handle content, engagement, and growth.",
      features: [
        "Content strategy & planning",
        "Post design & scheduling",
        "Community management",
        "Influencer partnerships",
        "Social listening & insights",
        "Growth & engagement tactics"
      ],
      results: "Average 200%+ follower growth in 6 months"
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "SEO & Content Marketing",
      subtitle: "Rank Higher, Get Organic Traffic",
      description: "Get found on Google and establish authority in your industry. Long-term organic growth that compounds over time.",
      features: [
        "Technical SEO audits",
        "On-page optimization",
        "Content creation & strategy",
        "Link building campaigns",
        "Local SEO for Coimbatore",
        "Performance tracking"
      ],
      results: "Average 150% increase in organic traffic"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We analyze your business, competitors, and target audience to create a winning strategy."
    },
    {
      step: "02",
      title: "Campaign Setup",
      description: "We build and launch optimized campaigns across your chosen platforms."
    },
    {
      step: "03",
      title: "Optimization & Testing",
      description: "Continuous A/B testing and optimization to improve performance and reduce costs."
    },
    {
      step: "04",
      title: "Reporting & Scaling",
      description: "Regular reports and strategic scaling to maximize your marketing ROI."
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
              Digital Marketing Services
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Drive traffic, engagement, and revenue with data-driven marketing strategies
              that actually work. No fluff, just results.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button variant="accent" size="lg">
                  Get Free Marketing Audit
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-[hsl(var(--primary))]"
                >
                  View Case Studies
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
              Our Marketing Services
            </h2>
            <p className="text-xl text-[hsl(var(--muted-foreground))]">
              Comprehensive digital marketing solutions tailored to your business goals
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border-2 border-[hsl(var(--muted))] rounded-2xl p-8 hover:border-[hsl(var(--primary))] hover:shadow-xl transition-all duration-300"
              >
                <div className="text-[hsl(var(--primary))] mb-4">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-2">
                  {service.title}
                </h3>

                <p className="text-[hsl(var(--primary))] font-semibold mb-4">
                  {service.subtitle}
                </p>

                <p className="text-[hsl(var(--muted-foreground))] mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-[hsl(var(--primary))] flex-shrink-0" />
                      <span className="text-[hsl(var(--muted-foreground))]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-[hsl(var(--muted))] rounded-lg p-4">
                  <p className="text-sm font-semibold text-[hsl(var(--foreground))]">
                    {service.results}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Marketing */}
      <section className="py-20 bg-[hsl(var(--muted))]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--foreground))] mb-6">
              Why Our Marketing Works
            </h2>
            <p className="text-xl text-[hsl(var(--muted-foreground))]">
              We don't just drive traffic—we drive revenue
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Target className="w-10 h-10" />,
                title: "Data-Driven Strategy",
                description: "Every decision backed by analytics, testing, and proven frameworks. No guesswork."
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "Expert Team",
                description: "Certified specialists in Meta Ads, Google Ads, and SEO with years of experience."
              },
              {
                icon: <DollarSign className="w-10 h-10" />,
                title: "ROI Focused",
                description: "We measure success by your return on investment, not vanity metrics."
              },
              {
                icon: <BarChart3 className="w-10 h-10" />,
                title: "Transparent Reporting",
                description: "Real-time dashboards and detailed monthly reports. You always know what's working."
              },
              {
                icon: <TrendingUp className="w-10 h-10" />,
                title: "Continuous Optimization",
                description: "We constantly test, refine, and improve campaigns to maximize performance."
              },
              {
                icon: <CheckCircle2 className="w-10 h-10" />,
                title: "Local + Global",
                description: "Understand Coimbatore/Tamil Nadu market while using world-class strategies."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-[hsl(var(--primary))] mb-4">
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

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--foreground))] mb-6">
              Our Process
            </h2>
            <p className="text-xl text-[hsl(var(--muted-foreground))]">
              A proven 4-step process that delivers results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {process.map((item, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] rounded-xl p-6 text-white"
              >
                <div className="text-5xl font-bold opacity-20 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-white/90 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - AEO/GEO Optimization */}
      <FAQSchema
        faqs={[...digitalMarketingFAQs, ...metaAdsFAQs]}
        title="Digital Marketing FAQs"
        showUI={true}
      />

      {/* Breadcrumb Schema */}
      <BreadcrumbSchema items={generateBreadcrumbs('/services/digital-marketing')} />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free marketing audit and discover how we can help you achieve your goals.
          </p>
          <Link href="/contact">
            <Button variant="accent" size="lg">
              Get Free Marketing Audit
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
