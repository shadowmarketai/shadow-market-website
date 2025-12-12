import { Hero } from "@/components/sections/Hero";
import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BrandSchema } from "@/components/seo/BrandSchema";
import { homepageFAQs } from "@/data/faqs";

export const metadata: Metadata = generateMetadata({
  title: "SHADOW MARKET - Digital Marketing & AI Development in Coimbatore",
  description: "Leading digital marketing and AI development agency in Coimbatore. We offer Meta Ads, Google Ads, web development, mobile apps, AI chatbots, and marketing automation.",
  keywords: [
    "digital marketing Coimbatore",
    "AI development Coimbatore",
    "web development company",
    "mobile app development Tamil Nadu",
  ],
});

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Services Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--foreground))] mb-4">
              Two Powerful Categories, One Complete Solution
            </h2>
            <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
              We combine digital marketing expertise with cutting-edge AI development to give you everything you need to succeed online.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Digital Marketing Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] p-8 text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">Digital Marketing Services</h3>
                <p className="text-white/90 mb-6">
                  Get discovered, engage customers, and drive sales with data-driven marketing strategies.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[hsl(var(--accent))] rounded-full"></span>
                    <span>Meta Advertising (Facebook/Instagram)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[hsl(var(--accent))] rounded-full"></span>
                    <span>Google Ads & Search Marketing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[hsl(var(--accent))] rounded-full"></span>
                    <span>Social Media Marketing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[hsl(var(--accent))] rounded-full"></span>
                    <span>SEO & Content Marketing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[hsl(var(--accent))] rounded-full"></span>
                    <span>Business Strategy & Consulting</span>
                  </li>
                </ul>
                <a
                  href="/services/digital-marketing"
                  className="inline-block bg-white text-[hsl(var(--primary))] px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
                >
                  Explore Marketing Services →
                </a>
              </div>
            </div>

            {/* AI Development Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--cyan))] p-8 text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                  NEW & FEATURED
                </div>
                <h3 className="text-3xl font-bold mb-4">AI Development Services</h3>
                <p className="text-white/90 mb-6">
                  Build powerful platforms and automate processes with modern technology and AI.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>Full-Stack Web Development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>Mobile App Development (iOS & Android)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>SaaS Platform Development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>AI Chatbot Solutions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>Marketing Automation</span>
                  </li>
                </ul>
                <a
                  href="/services/ai-development"
                  className="inline-block bg-white text-[hsl(var(--accent))] px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
                >
                  Explore Development Services →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[hsl(var(--muted))]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--foreground))] mb-4">
              Why Choose SHADOW MARKET?
            </h2>
            <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
              The only agency in Coimbatore offering complete digital solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Complete Solutions",
                description: "From marketing to development, we handle everything under one roof. No need to coordinate multiple agencies.",
                icon: "🎯",
              },
              {
                title: "24 Expert AI Agents",
                description: "Our proprietary SHADOW-AI system with 24 specialized agents ensures world-class quality on every project.",
                icon: "🤖",
              },
              {
                title: "Local + Global",
                description: "Based in Coimbatore, we understand the Tamil Nadu market while delivering international quality standards.",
                icon: "🌏",
              },
              {
                title: "Latest Technology",
                description: "We use the 2024-2025 tech stack: Next.js 15, React 19, AI/ML, and cutting-edge tools.",
                icon: "⚡",
              },
              {
                title: "Proven Results",
                description: "150+ projects delivered, ₹100+ crores in client revenue generated. Our work speaks for itself.",
                icon: "📈",
              },
              {
                title: "Transparent Pricing",
                description: "No hidden costs. Clear pricing, detailed proposals, and ROI-focused strategies from day one.",
                icon: "💰",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
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

      {/* FAQ Section - AEO/GEO Optimization */}
      <FAQSchema
        faqs={homepageFAQs}
        title="Frequently Asked Questions"
        showUI={true}
      />

      {/* Brand Schema - Entity Recognition */}
      <BrandSchema
        name="Shadow Market"
        alternateName="Shadow Market AI"
        description="Digital Marketing and AI Development Agency in Coimbatore"
        slogan="Transforming Businesses with AI and Digital Marketing"
        foundingDate="2020"
        knowsAbout={[
          "Digital Marketing",
          "Meta Ads",
          "Google Ads",
          "SEO",
          "AI Chatbot Development",
          "Marketing Automation",
          "Social Media Marketing",
          "Web Development"
        ]}
        areaServed={{
          city: "Coimbatore",
          state: "Tamil Nadu",
          country: "India"
        }}
        telephone="+919952779992"
        email="sales@shadowmarket.ai"
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free consultation and discover how SHADOW MARKET can help you achieve your digital goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-block bg-[hsl(var(--accent))] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[hsl(var(--accent))]/90 transition-colors"
            >
              Get Free Consultation
            </a>
            <a
              href={`https://wa.me/919952779992?text=${encodeURIComponent("Hi! I'd like to discuss my project with SHADOW MARKET.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[hsl(var(--primary))] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/90 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
