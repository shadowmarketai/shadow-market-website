import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react";

export const metadata: Metadata = generateMetadata({
  title: "Blog - Digital Marketing & AI Insights | SHADOW MARKET",
  description: "Expert insights on digital marketing, AI development, web development, and business growth strategies from SHADOW MARKET's team in Coimbatore.",
  keywords: [
    "digital marketing blog",
    "AI development insights",
    "marketing tips",
    "web development tutorials",
    "business growth",
  ],
});

export default function BlogPage() {
  const featuredPost = {
    title: "How AI is Revolutionizing Digital Marketing in 2025",
    slug: "ai-revolutionizing-digital-marketing-2025",
    excerpt: "Discover how artificial intelligence is transforming the way businesses approach digital marketing, from personalized campaigns to predictive analytics.",
    category: "AI & Marketing",
    date: "2025-01-15",
    readTime: "8 min read",
    image: "🤖",
    author: "M. Kumaran",
  };

  const blogPosts = [
    {
      title: "Meta Ads vs Google Ads: Which is Better for Your Business?",
      slug: "meta-ads-vs-google-ads-comparison",
      excerpt: "A comprehensive comparison of Meta and Google advertising platforms to help you choose the right one for your business goals.",
      category: "Digital Marketing",
      date: "2025-01-12",
      readTime: "6 min read",
      image: "📊",
    },
    {
      title: "Building a SaaS Platform: Complete Guide for 2025",
      slug: "building-saas-platform-guide-2025",
      excerpt: "Step-by-step guide to building a scalable SaaS platform with Next.js, PostgreSQL, and modern cloud infrastructure.",
      category: "Development",
      date: "2025-01-10",
      readTime: "12 min read",
      image: "💻",
    },
    {
      title: "10 SEO Strategies That Actually Work in Tamil Nadu",
      slug: "seo-strategies-tamil-nadu-2025",
      excerpt: "Local SEO tactics specifically designed for businesses targeting customers in Tamil Nadu and South India.",
      category: "SEO",
      date: "2025-01-08",
      readTime: "7 min read",
      image: "🎯",
    },
    {
      title: "AI Chatbots: Complete Implementation Guide",
      slug: "ai-chatbots-implementation-guide",
      excerpt: "Learn how to implement an AI-powered chatbot for your business using the latest LLM technologies and best practices.",
      category: "AI Development",
      date: "2025-01-05",
      readTime: "10 min read",
      image: "💬",
    },
    {
      title: "Marketing Automation with n8n: Beginner's Guide",
      slug: "marketing-automation-n8n-guide",
      excerpt: "Automate your marketing workflows with n8n. This guide covers setup, integrations, and practical use cases.",
      category: "Automation",
      date: "2025-01-03",
      readTime: "9 min read",
      image: "⚙️",
    },
    {
      title: "React 19 & Next.js 15: What's New for Developers",
      slug: "react-19-nextjs-15-whats-new",
      excerpt: "Explore the latest features in React 19 and Next.js 15, and how they improve developer experience and app performance.",
      category: "Development",
      date: "2025-01-01",
      readTime: "11 min read",
      image: "⚛️",
    },
  ];

  const categories = [
    { name: "All Posts", count: 25 },
    { name: "Digital Marketing", count: 8 },
    { name: "AI Development", count: 6 },
    { name: "Web Development", count: 5 },
    { name: "SEO", count: 4 },
    { name: "Automation", count: 2 },
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
              Insights & Resources
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Expert tips, guides, and insights on digital marketing, AI development, and business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-8">
                  <div>
                    <h3 className="font-bold text-[hsl(var(--foreground))] mb-4">
                      Categories
                    </h3>
                    <div className="space-y-2">
                      {categories.map((category, index) => (
                        <button
                          key={index}
                          className="w-full text-left px-4 py-2 rounded-lg hover:bg-[hsl(var(--muted))] transition-colors flex items-center justify-between group"
                        >
                          <span className="text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--primary))]">
                            {category.name}
                          </span>
                          <span className="text-xs text-[hsl(var(--muted-foreground))]">
                            {category.count}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[hsl(var(--muted))] rounded-xl p-6">
                    <h3 className="font-bold text-[hsl(var(--foreground))] mb-3">
                      Newsletter
                    </h3>
                    <p className="text-sm text-[hsl(var(--muted-foreground))] mb-4">
                      Get weekly insights on digital marketing and AI development.
                    </p>
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full px-4 py-2 rounded-lg border border-[hsl(var(--border))] bg-white mb-3 text-sm"
                    />
                    <button className="w-full bg-[hsl(var(--primary))] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[hsl(var(--primary))]/90 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                {/* Featured Post */}
                <div className="mb-16">
                  <div className="inline-block bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    Featured Post
                  </div>

                  <div className="bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] rounded-2xl p-8 md:p-12 text-white">
                    <div className="flex items-center space-x-4 mb-6">
                      <span className="text-6xl">{featuredPost.image}</span>
                      <div>
                        <div className="text-sm text-white/80 mb-1">
                          {featuredPost.category}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-white/70">
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{featuredPost.readTime}</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      {featuredPost.title}
                    </h2>

                    <p className="text-white/90 mb-6 text-lg">
                      {featuredPost.excerpt}
                    </p>

                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center space-x-2 bg-white text-[hsl(var(--primary))] px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors group"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Blog Grid */}
                <div>
                  <h2 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-8">
                    Latest Articles
                  </h2>

                  <div className="grid md:grid-cols-2 gap-8">
                    {blogPosts.map((post, index) => (
                      <article
                        key={index}
                        className="bg-[hsl(var(--muted))] rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
                      >
                        <div className="p-6">
                          <div className="text-5xl mb-4">{post.image}</div>

                          <div className="text-sm text-[hsl(var(--primary))] font-semibold mb-2">
                            {post.category}
                          </div>

                          <h3 className="text-xl font-bold text-[hsl(var(--foreground))] mb-3 group-hover:text-[hsl(var(--primary))] transition-colors">
                            <Link href={`/blog/${post.slug}`}>
                              {post.title}
                            </Link>
                          </h3>

                          <p className="text-[hsl(var(--muted-foreground))] mb-4 text-sm">
                            {post.excerpt}
                          </p>

                          <div className="flex items-center justify-between text-xs text-[hsl(var(--muted-foreground))] pb-4 border-b border-[hsl(var(--border))]">
                            <span className="flex items-center space-x-1">
                              <Calendar className="w-3 h-3" />
                              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Clock className="w-3 h-3" />
                              <span>{post.readTime}</span>
                            </span>
                          </div>

                          <Link
                            href={`/blog/${post.slug}`}
                            className="inline-flex items-center space-x-2 text-[hsl(var(--primary))] font-semibold mt-4 group-hover:translate-x-1 transition-transform"
                          >
                            <span>Read More</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </article>
                    ))}
                  </div>

                  {/* Load More */}
                  <div className="text-center mt-12">
                    <button className="px-8 py-3 border-2 border-[hsl(var(--primary))] text-[hsl(var(--primary))] rounded-lg font-semibold hover:bg-[hsl(var(--primary))] hover:text-white transition-colors">
                      Load More Articles
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">
        <div className="container mx-auto px-4 text-center">
          <TrendingUp className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how SHADOW MARKET can help you achieve your digital marketing and development goals.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[hsl(var(--accent))] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[hsl(var(--accent))]/90 transition-colors"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
