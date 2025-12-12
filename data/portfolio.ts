export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: "web-development" | "mobile-app" | "marketing-campaign" | "ai-solution";
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  image: string;
  link?: string;
  featured: boolean;
  stats?: {
    label: string;
    value: string;
  }[];
}

export const PORTFOLIO: PortfolioProject[] = [
  {
    id: "ecommerce-fashion",
    title: "Fashion E-Commerce Platform",
    client: "TrendyWear Coimbatore",
    category: "web-development",
    description: "Complete e-commerce solution for a Coimbatore-based fashion retailer with 5000+ products",
    challenge: "Client had no online presence and was losing sales to online competitors. Needed a fast, SEO-optimized platform that could handle high traffic during sales.",
    solution: "Built a Next.js 15 e-commerce platform with Shopify backend, payment gateway integration, and real-time inventory sync. Implemented advanced filtering, size guides, and wishlist features.",
    results: [
      "₹50L+ monthly revenue within 6 months",
      "10,000+ registered customers",
      "35% conversion rate improvement",
      "Page load time < 1.5 seconds",
      "#1 ranking for 'fashion online Coimbatore'"
    ],
    technologies: ["Next.js", "Shopify", "Razorpay", "PostgreSQL", "AWS S3"],
    image: "/images/portfolio/fashion-ecommerce.jpg",
    featured: true,
    stats: [
      { label: "Revenue/Month", value: "₹50L+" },
      { label: "Customers", value: "10K+" },
      { label: "Page Speed", value: "< 1.5s" }
    ]
  },
  {
    id: "food-delivery-app",
    title: "Local Food Delivery App",
    client: "QuickBite Coimbatore",
    category: "mobile-app",
    description: "iOS and Android app connecting local restaurants with customers",
    challenge: "Compete with Swiggy/Zomato by focusing on local restaurants and faster delivery in Coimbatore neighborhoods.",
    solution: "Developed React Native app with real-time order tracking, payment integration, and restaurant dashboard. Implemented smart routing for delivery partners.",
    results: [
      "50+ restaurant partners onboarded",
      "15,000+ app downloads in 3 months",
      "4.7 star rating on Play Store",
      "Average delivery time: 22 minutes",
      "₹8L monthly GMV"
    ],
    technologies: ["React Native", "Node.js", "MongoDB", "Socket.io", "Google Maps API", "Razorpay"],
    image: "/images/portfolio/food-delivery.jpg",
    featured: true,
    stats: [
      { label: "Downloads", value: "15K+" },
      { label: "Restaurants", value: "50+" },
      { label: "Rating", value: "4.7★" }
    ]
  },
  {
    id: "real-estate-leads",
    title: "Real Estate Lead Generation Campaign",
    client: "Premier Properties Coimbatore",
    category: "marketing-campaign",
    description: "Facebook and Google Ads campaign for luxury apartments in Coimbatore",
    challenge: "Generate high-quality leads for premium apartments (₹80L-₹1.5Cr) in a competitive market.",
    solution: "Created targeted Meta and Google Ads campaign with virtual tours, custom landing pages, and WhatsApp instant connect. Implemented remarketing for warm leads.",
    results: [
      "450+ qualified leads in 3 months",
      "28 apartment bookings (₹16.8 Cr sales)",
      "₹12 cost per lead (industry avg: ₹45)",
      "2.8% conversion rate (industry avg: 1.2%)",
      "ROAS: 23:1"
    ],
    technologies: ["Meta Ads", "Google Ads", "Landing Pages", "WhatsApp API", "CRM Integration"],
    image: "/images/portfolio/real-estate-campaign.jpg",
    featured: true,
    stats: [
      { label: "Sales Generated", value: "₹16.8Cr" },
      { label: "ROAS", value: "23:1" },
      { label: "Cost/Lead", value: "₹12" }
    ]
  },
  {
    id: "ai-support-chatbot",
    title: "AI Customer Support Chatbot",
    client: "HealthCare Plus Hospital",
    category: "ai-solution",
    description: "WhatsApp chatbot for appointment booking and patient queries",
    challenge: "Hospital receiving 500+ calls daily for appointments, queries, and reports. Needed 24/7 automated support.",
    solution: "Built AI chatbot using GPT-4 trained on hospital data. Integrated with WhatsApp Business API and hospital management system for appointment booking and report delivery.",
    results: [
      "70% reduction in phone calls",
      "24/7 instant response to patient queries",
      "1200+ appointments booked via chatbot/month",
      "92% patient satisfaction score",
      "Saved ₹3L/month in customer support costs"
    ],
    technologies: ["OpenAI GPT-4", "LangChain", "WhatsApp Business API", "Python", "PostgreSQL"],
    image: "/images/portfolio/ai-chatbot.jpg",
    featured: true,
    stats: [
      { label: "Calls Reduced", value: "70%" },
      { label: "Appointments", value: "1200/mo" },
      { label: "Satisfaction", value: "92%" }
    ]
  },
  {
    id: "saas-hr-platform",
    title: "HR Management SaaS Platform",
    client: "Internal Product - PeopleFirst",
    category: "web-development",
    description: "Multi-tenant SaaS for SMB HR management and payroll",
    challenge: "Build scalable SaaS product for SMBs in Tamil Nadu to manage employees, attendance, and payroll.",
    solution: "Developed full-stack SaaS platform with subscription billing, role-based access, attendance tracking, and automated payroll calculations.",
    results: [
      "120+ companies using the platform",
      "8,000+ employees managed",
      "MRR: ₹5.5 Lakhs",
      "99.9% uptime",
      "4.8 star customer rating"
    ],
    technologies: ["Next.js", "PostgreSQL", "Stripe", "AWS", "Redis", "Node.js"],
    image: "/images/portfolio/hr-saas.jpg",
    featured: true,
    stats: [
      { label: "Companies", value: "120+" },
      { label: "MRR", value: "₹5.5L" },
      { label: "Uptime", value: "99.9%" }
    ]
  },
  {
    id: "auto-showroom-campaign",
    title: "Auto Showroom Digital Marketing",
    client: "Velocity Motors Coimbatore",
    category: "marketing-campaign",
    description: "Complete digital marketing for premium car showroom",
    challenge: "Launch new showroom and compete with established dealers in Coimbatore.",
    solution: "360° digital strategy: Google Ads, Facebook Ads, Instagram marketing, SEO, and influencer partnerships. Created video content and virtual showroom tours.",
    results: [
      "850+ test drive bookings in 6 months",
      "120 cars sold (₹18 Cr revenue)",
      "Instagram followers: 0 to 12,000",
      "300% increase in showroom visits",
      "Top 3 Google ranking for 'luxury cars Coimbatore'"
    ],
    technologies: ["Google Ads", "Meta Ads", "SEO", "Video Production", "Instagram Marketing"],
    image: "/images/portfolio/auto-campaign.jpg",
    featured: false,
    stats: [
      { label: "Revenue", value: "₹18Cr" },
      { label: "Test Drives", value: "850+" },
      { label: "Followers", value: "12K" }
    ]
  },
  {
    id: "edtech-platform",
    title: "Online Learning Platform",
    client: "SkillUp Academy",
    category: "web-development",
    description: "LMS with video courses, quizzes, and certifications",
    challenge: "Create Netflix-like learning platform for professional courses with payment integration.",
    solution: "Built custom LMS with video streaming, progress tracking, quizzes, and certificate generation. Integrated Razorpay for course purchases.",
    results: [
      "5,000+ students enrolled",
      "45 courses live",
      "₹12L monthly revenue",
      "85% course completion rate",
      "4.6 star average rating"
    ],
    technologies: ["Next.js", "Node.js", "MongoDB", "AWS S3", "Razorpay", "FFmpeg"],
    image: "/images/portfolio/edtech.jpg",
    featured: false,
    stats: [
      { label: "Students", value: "5K+" },
      { label: "Revenue/mo", value: "₹12L" },
      { label: "Rating", value: "4.6★" }
    ]
  },
  {
    id: "restaurant-automation",
    title: "Restaurant Marketing Automation",
    client: "Multi-Cuisine Restaurant Chain",
    category: "ai-solution",
    description: "n8n workflow automation for customer engagement",
    challenge: "Automate customer birthday wishes, feedback collection, and promotional campaigns across 3 restaurant locations.",
    solution: "Created n8n workflows integrating CRM, WhatsApp, email, and SMS. Automated birthday offers, post-visit feedback, and weekly promotion campaigns.",
    results: [
      "40% increase in repeat visits",
      "92% feedback response rate",
      "15,000+ automated messages/month",
      "Saved 20 hours/week manual work",
      "₹2.5L additional revenue/month from automation"
    ],
    technologies: ["n8n", "WhatsApp Business API", "Email Marketing", "Google Sheets", "CRM Integration"],
    image: "/images/portfolio/restaurant-automation.jpg",
    featured: false,
    stats: [
      { label: "Repeat Visits", value: "+40%" },
      { label: "Messages/mo", value: "15K+" },
      { label: "Revenue", value: "+₹2.5L" }
    ]
  }
];

export const getProjectsByCategory = (category: PortfolioProject["category"]) => {
  return PORTFOLIO.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return PORTFOLIO.filter(project => project.featured);
};

export const getProjectById = (id: string) => {
  return PORTFOLIO.find(project => project.id === id);
};
