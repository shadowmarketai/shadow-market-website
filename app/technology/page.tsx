import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Code2, Sparkles, Zap, Shield, Gauge, Brain } from "lucide-react";

export const metadata: Metadata = generateMetadata({
  title: "Our Technology Stack | SHADOW MARKET",
  description: "Discover the cutting-edge 2024-2025 technology stack powering SHADOW MARKET's digital marketing and AI development solutions. Next.js 15, React 19, and more.",
  keywords: [
    "technology stack",
    "Next.js 15",
    "React 19",
    "AI development tools",
    "modern web development",
  ],
});

export default function TechnologyPage() {
  const techStack = {
    frontend: [
      { name: "Next.js 15", description: "Latest React framework with App Router", icon: "⚡" },
      { name: "React 19", description: "UI library with latest features", icon: "⚛️" },
      { name: "TypeScript", description: "Type-safe JavaScript", icon: "🔷" },
      { name: "Tailwind CSS", description: "Utility-first styling", icon: "🎨" },
      { name: "shadcn/ui", description: "Beautiful component library", icon: "🎭" },
      { name: "Framer Motion", description: "Smooth animations", icon: "🌊" },
    ],
    backend: [
      { name: "Node.js", description: "JavaScript runtime", icon: "🟢" },
      { name: "Python", description: "AI/ML development", icon: "🐍" },
      { name: "FastAPI", description: "High-performance APIs", icon: "⚡" },
      { name: "PostgreSQL", description: "Reliable database", icon: "🐘" },
      { name: "Supabase", description: "Backend as a service", icon: "🔋" },
      { name: "Prisma", description: "Type-safe ORM", icon: "💎" },
    ],
    mobile: [
      { name: "React Native", description: "Cross-platform apps", icon: "📱" },
      { name: "Expo", description: "Development framework", icon: "🚀" },
      { name: "Swift", description: "Native iOS apps", icon: "🍎" },
      { name: "Kotlin", description: "Native Android apps", icon: "🤖" },
    ],
    ai: [
      { name: "OpenAI GPT-4", description: "Advanced language models", icon: "🧠" },
      { name: "Claude", description: "AI assistant", icon: "🤖" },
      { name: "LangChain", description: "LLM framework", icon: "🔗" },
      { name: "Pinecone", description: "Vector database", icon: "🌲" },
      { name: "TensorFlow", description: "ML framework", icon: "🔥" },
      { name: "PyTorch", description: "Deep learning", icon: "🔦" },
    ],
    marketing: [
      { name: "Meta Ads API", description: "Facebook/Instagram ads", icon: "📊" },
      { name: "Google Ads API", description: "Search & Display ads", icon: "🎯" },
      { name: "n8n", description: "Workflow automation", icon: "⚙️" },
      { name: "Flowise", description: "AI chatbot builder", icon: "💬" },
      { name: "Make.com", description: "Integration platform", icon: "🔄" },
      { name: "Zapier", description: "App connections", icon: "⚡" },
    ],
    deployment: [
      { name: "Vercel", description: "Next.js hosting", icon: "▲" },
      { name: "AWS", description: "Cloud infrastructure", icon: "☁️" },
      { name: "Docker", description: "Containerization", icon: "🐳" },
      { name: "GitHub Actions", description: "CI/CD pipelines", icon: "🔧" },
      { name: "Railway", description: "App deployment", icon: "🚂" },
      { name: "Cloudflare", description: "CDN & security", icon: "🛡️" },
    ],
  };

  const shadowAI = [
    {
      name: "Full-Stack Architect",
      description: "Designs scalable application architectures",
      icon: <Code2 className="w-8 h-8" />,
    },
    {
      name: "Database Expert",
      description: "Optimizes database schemas and queries",
      icon: <Shield className="w-8 h-8" />,
    },
    {
      name: "UI/UX Designer",
      description: "Creates beautiful, conversion-focused interfaces",
      icon: <Sparkles className="w-8 h-8" />,
    },
    {
      name: "Marketing Strategist",
      description: "Develops data-driven ad campaigns",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      name: "SEO Specialist",
      description: "Optimizes content for search engines",
      icon: <Gauge className="w-8 h-8" />,
    },
    {
      name: "AI Developer",
      description: "Builds intelligent chatbots and automation",
      icon: <Brain className="w-8 h-8" />,
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
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 mb-8">
              <Sparkles className="w-5 h-5 text-white" />
              <span className="text-white font-medium">2024-2025 Technology Stack</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Built with the Latest Tech
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              We use cutting-edge technology to deliver fast, secure, and scalable solutions that give you a competitive edge.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {Object.entries(techStack).map(([category, technologies]) => (
              <div key={category}>
                <h2 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-8 capitalize">
                  {category === "ai" ? "AI & Machine Learning" : category} Stack
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="bg-[hsl(var(--muted))] rounded-xl p-6 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="text-4xl">{tech.icon}</div>
                        <div className="flex-1">
                          <h3 className="font-bold text-[hsl(var(--foreground))] mb-1">
                            {tech.name}
                          </h3>
                          <p className="text-sm text-[hsl(var(--muted-foreground))]">
                            {tech.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHADOW-AI System */}
      <section className="py-20 bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--cyan))]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 mb-8">
              <Brain className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Our Secret Weapon</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              SHADOW-AI: 24 Expert AI Agents
            </h2>

            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our proprietary AI system with 24 specialized agents ensures every project meets world-class standards.
              Each agent is an expert in its domain, working together to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {shadowAI.map((agent, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-2xl transition-shadow"
              >
                <div className="text-[hsl(var(--accent))] mb-4">
                  {agent.icon}
                </div>
                <h3 className="text-xl font-bold text-[hsl(var(--foreground))] mb-2">
                  {agent.name}
                </h3>
                <p className="text-[hsl(var(--muted-foreground))]">
                  {agent.description}
                </p>
              </div>
            ))}

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border-2 border-white/30 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl text-white mb-4">+11</div>
                <p className="text-white font-semibold">
                  More Specialized Agents
                </p>
                <p className="text-white/80 text-sm mt-2">
                  Testing, Security, DevOps, and more
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Stack Matters */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--foreground))] mb-16 text-center">
            Why Our Technology Matters
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "⚡",
                title: "Lightning Fast",
                description: "Next.js 15 with Turbopack delivers blazing fast load times. Your users get instant page loads, better SEO rankings, and higher conversions.",
              },
              {
                icon: "🔒",
                title: "Enterprise Security",
                description: "Built-in security features, encrypted data, and regular security audits. We follow OWASP guidelines and industry best practices.",
              },
              {
                icon: "📈",
                title: "Infinitely Scalable",
                description: "Cloud-native architecture handles traffic spikes effortlessly. From 100 to 1 million users, your platform grows with your business.",
              },
              {
                icon: "🤖",
                title: "AI-Powered",
                description: "Integrate cutting-edge AI features like chatbots, recommendations, and automation. Stay ahead with the latest AI capabilities.",
              },
              {
                icon: "📱",
                title: "Mobile-First",
                description: "Responsive design and native mobile apps ensure perfect experiences on every device. 60%+ of traffic is mobile.",
              },
              {
                icon: "💰",
                title: "Cost-Effective",
                description: "Serverless architecture and efficient code mean lower hosting costs. Pay only for what you use, scale automatically.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-[hsl(var(--muted))] rounded-xl p-8 hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[hsl(var(--muted-foreground))]">
                  {benefit.description}
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
            Ready to Build with Modern Tech?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology stack can power your next project.
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
