export interface Service {
  id: string;
  category: "digital-marketing" | "ai-development";
  name: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  deliverables: string[];
  technologies?: string[];
  pricingIndicator: string;
  icon: string;
  featured: boolean;
}

export const SERVICES: Service[] = [
  // DIGITAL MARKETING SERVICES
  {
    id: "meta-advertising",
    category: "digital-marketing",
    name: "Meta Advertising (Facebook/Instagram Ads)",
    shortDescription: "Highly targeted campaigns that drive real ROI",
    description: "Reach your ideal customers on Facebook and Instagram with data-driven ad campaigns. We create compelling ad creatives, target the right audience, and optimize for conversions.",
    benefits: [
      "Precise audience targeting based on demographics, interests, and behavior",
      "Creative ad design that stops the scroll",
      "A/B testing to find winning combinations",
      "ROI-focused optimization and reporting",
      "Retargeting campaigns to convert warm leads"
    ],
    deliverables: [
      "Campaign strategy and planning",
      "Ad creative design (images, videos, carousels)",
      "Audience research and targeting setup",
      "Campaign management and optimization",
      "Monthly performance reports with insights"
    ],
    pricingIndicator: "Starting from ₹15,000/month",
    icon: "facebook",
    featured: true,
  },
  {
    id: "google-ads",
    category: "digital-marketing",
    name: "Google Ads",
    shortDescription: "Appear at the top when customers search for you",
    description: "Dominate search results with strategic Google Ads campaigns. From search ads to display and YouTube, we ensure your business appears when it matters most.",
    benefits: [
      "Top placement in Google search results",
      "Only pay when someone clicks your ad",
      "Target by keywords, location, and device",
      "Display ads across Google's network",
      "YouTube video advertising for brand awareness"
    ],
    deliverables: [
      "Keyword research and competitor analysis",
      "Campaign setup (Search, Display, Shopping, YouTube)",
      "Ad copywriting and extensions",
      "Landing page recommendations",
      "Conversion tracking and analytics setup",
      "Bi-weekly optimization and reporting"
    ],
    pricingIndicator: "Starting from ₹20,000/month + ad spend",
    icon: "search",
    featured: true,
  },
  {
    id: "social-media-marketing",
    category: "digital-marketing",
    name: "Social Media Marketing",
    shortDescription: "Build engaged communities across all platforms",
    description: "Grow your brand presence on social media with consistent, engaging content. We handle everything from content creation to community management.",
    benefits: [
      "Custom content calendar aligned with your brand",
      "Professional graphics and video content",
      "Community engagement and response management",
      "Influencer outreach and partnerships",
      "Social listening and reputation management"
    ],
    deliverables: [
      "Monthly content calendar",
      "20-30 posts/month (graphics + captions)",
      "Stories and reels for Instagram/Facebook",
      "Community management and response handling",
      "Monthly analytics report"
    ],
    pricingIndicator: "Starting from ₹12,000/month",
    icon: "share2",
    featured: false,
  },
  {
    id: "business-strategy",
    category: "digital-marketing",
    name: "Business Strategy & Consulting",
    shortDescription: "Data-driven strategies for sustainable growth",
    description: "Transform your business with expert digital strategy consulting. We analyze your market, competition, and opportunities to create a roadmap for success.",
    benefits: [
      "Comprehensive digital audit",
      "Competitive analysis and market research",
      "Growth strategy and roadmap",
      "Channel mix optimization",
      "ROI tracking and improvement"
    ],
    deliverables: [
      "Digital marketing audit report",
      "3-month and 12-month growth plan",
      "Channel strategy document",
      "KPI framework and dashboard setup",
      "Monthly strategy sessions"
    ],
    pricingIndicator: "₹50,000 - ₹2,00,000 (one-time + retainer)",
    icon: "target",
    featured: false,
  },
  {
    id: "creative-design",
    category: "digital-marketing",
    name: "Creative Design Services",
    shortDescription: "Eye-catching designs that convert",
    description: "Professional design services for all your marketing needs. From social media graphics to complete brand identity, we create visuals that captivate.",
    benefits: [
      "Custom graphics for social media",
      "Ad creatives for Facebook, Google, and more",
      "Brand identity and logo design",
      "Digital VCards and marketing collateral",
      "Video editing and motion graphics"
    ],
    deliverables: [
      "Social media templates",
      "Ad creative sets (multiple variations)",
      "Brand guidelines document",
      "Print-ready designs",
      "Editable source files"
    ],
    pricingIndicator: "₹500 - ₹5,000 per design",
    icon: "palette",
    featured: false,
  },
  {
    id: "seo-content",
    category: "digital-marketing",
    name: "SEO & Content Marketing",
    shortDescription: "Rank higher, attract organic traffic",
    description: "Dominate search results with SEO-optimized content and technical improvements. We help you rank for keywords that matter to your business.",
    benefits: [
      "Higher rankings on Google",
      "Increased organic traffic",
      "Quality backlinks from authoritative sites",
      "Optimized content that converts",
      "Local SEO for Coimbatore businesses"
    ],
    deliverables: [
      "Technical SEO audit and fixes",
      "On-page and off-page optimization",
      "4-8 blog posts per month",
      "Backlink building strategy",
      "Local SEO setup (Google Business Profile)",
      "Monthly ranking reports"
    ],
    pricingIndicator: "Starting from ₹18,000/month",
    icon: "trending-up",
    featured: true,
  },

  // AI DEVELOPMENT SERVICES
  {
    id: "web-development",
    category: "ai-development",
    name: "Full-Stack Web Development",
    shortDescription: "Modern, scalable web applications",
    description: "Custom web development using the latest technologies. From simple websites to complex web applications, we build digital products that scale.",
    benefits: [
      "Modern tech stack (Next.js, React, Node.js, Python)",
      "Responsive design (mobile, tablet, desktop)",
      "Fast loading speeds (Lighthouse 90+)",
      "SEO-optimized from day one",
      "Secure, scalable architecture"
    ],
    deliverables: [
      "Custom web application or website",
      "Responsive design implementation",
      "CMS integration (if needed)",
      "Analytics and tracking setup",
      "Deployment and hosting setup",
      "Documentation and training",
      "3 months free support"
    ],
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "MongoDB", "Tailwind CSS"],
    pricingIndicator: "₹50,000 - ₹5,00,000",
    icon: "code",
    featured: true,
  },
  {
    id: "mobile-app",
    category: "ai-development",
    name: "Mobile App Development",
    shortDescription: "Native iOS and Android applications",
    description: "Build stunning mobile apps for iOS and Android. We use React Native for cross-platform development, ensuring your app works perfectly on both platforms.",
    benefits: [
      "Single codebase for iOS and Android",
      "Native performance and UX",
      "App Store and Play Store deployment",
      "Push notifications and deep linking",
      "Offline functionality"
    ],
    deliverables: [
      "iOS and Android mobile app",
      "Backend API development",
      "Admin dashboard (web)",
      "App Store submission and approval",
      "Push notification setup",
      "Analytics integration",
      "6 months free support"
    ],
    technologies: ["React Native", "Node.js", "PostgreSQL", "Firebase", "AWS"],
    pricingIndicator: "₹2,00,000 - ₹15,00,000",
    icon: "smartphone",
    featured: true,
  },
  {
    id: "saas-platform",
    category: "ai-development",
    name: "SaaS Platform Development",
    shortDescription: "Multi-tenant SaaS applications",
    description: "Launch your SaaS business with a fully-featured platform. We build multi-tenant architecture with subscription billing, user management, and analytics.",
    benefits: [
      "Multi-tenant architecture for scalability",
      "Subscription and billing integration (Stripe/Razorpay)",
      "User authentication and role-based access",
      "Admin dashboard for management",
      "API-first architecture for integrations"
    ],
    deliverables: [
      "Complete SaaS platform (web app)",
      "User authentication and authorization",
      "Subscription billing integration",
      "Admin dashboard",
      "RESTful API",
      "Email automation",
      "Cloud deployment (AWS/Vercel)",
      "12 months support"
    ],
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    pricingIndicator: "₹5,00,000 - ₹25,00,000",
    icon: "layers",
    featured: true,
  },
  {
    id: "ai-chatbot",
    category: "ai-development",
    name: "AI Chatbot Solutions",
    shortDescription: "24/7 customer support automation",
    description: "Automate customer support with AI-powered chatbots. We integrate with WhatsApp, your website, and other platforms to provide instant, intelligent responses.",
    benefits: [
      "24/7 automated customer support",
      "WhatsApp Business API integration",
      "RAG-powered responses (trained on your data)",
      "Multi-language support",
      "Seamless handoff to human agents"
    ],
    deliverables: [
      "Custom AI chatbot trained on your data",
      "WhatsApp Business integration",
      "Website chat widget",
      "Admin dashboard for monitoring",
      "Analytics and conversation logs",
      "6 months free support"
    ],
    technologies: ["OpenAI GPT", "Anthropic Claude", "LangChain", "Pinecone", "WhatsApp API"],
    pricingIndicator: "₹1,00,000 - ₹5,00,000 + monthly AI costs",
    icon: "message-square",
    featured: true,
  },
  {
    id: "marketing-automation",
    category: "ai-development",
    name: "Marketing Automation",
    shortDescription: "Automate lead capture and nurturing",
    description: "Build powerful marketing automation workflows with n8n. From lead capture to email drip campaigns and WhatsApp follow-ups, we automate your entire funnel.",
    benefits: [
      "Automated lead capture from multiple sources",
      "Email drip campaigns",
      "WhatsApp automation for leads",
      "CRM integration (HubSpot, Zoho, custom)",
      "Analytics dashboard for tracking"
    ],
    deliverables: [
      "n8n workflow automation setup",
      "Lead capture forms and integrations",
      "Email marketing automation",
      "WhatsApp automation workflows",
      "CRM integration",
      "Analytics dashboard",
      "6 months support"
    ],
    technologies: ["n8n", "Make.com", "Zapier", "Node-RED", "API Integrations"],
    pricingIndicator: "₹75,000 - ₹3,00,000",
    icon: "zap",
    featured: false,
  },
  {
    id: "custom-software",
    category: "ai-development",
    name: "Custom Software Development",
    shortDescription: "Tailored solutions for your business",
    description: "Need something specific? We build custom software solutions for inventory management, booking systems, CRMs, and more. If you can imagine it, we can build it.",
    benefits: [
      "Fully customized to your workflow",
      "Integration with existing systems",
      "Scalable architecture",
      "User-friendly interface",
      "Ongoing support and maintenance"
    ],
    deliverables: [
      "Requirements gathering and analysis",
      "Custom software application",
      "Database design and setup",
      "User training and documentation",
      "Testing and QA",
      "Deployment and hosting",
      "12 months support"
    ],
    technologies: ["Python", "Node.js", "React", "PostgreSQL", "MongoDB", "AWS"],
    pricingIndicator: "₹1,00,000 - ₹10,00,000+",
    icon: "box",
    featured: false,
  },
];

export const getServicesByCategory = (category: "digital-marketing" | "ai-development") => {
  return SERVICES.filter(service => service.category === category);
};

export const getFeaturedServices = () => {
  return SERVICES.filter(service => service.featured);
};

export const getServiceById = (id: string) => {
  return SERVICES.find(service => service.id === id);
};
