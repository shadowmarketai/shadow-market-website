export const SITE_CONFIG = {
  name: "SHADOW MARKET",
  domain: "shadowmarket.ai",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://shadowmarket.ai",
  description: "Digital Marketing Meets AI Development - Your Complete Growth Partner in Coimbatore. We transform shadows into beacons of opportunity through innovative digital strategies and AI-powered solutions.",
  tagline: "Digital Marketing Meets AI Development",
  location: {
    city: "Coimbatore",
    state: "Tamil Nadu",
    country: "India",
    address: "DOOR NO 10, HAPPY HOME, SHREE RAM AVENUE, RM Gardens, Veerapandi, Tamil Nadu 641019, India",
    coordinates: {
      lat: 11.1623337,
      lng: 76.9680661
    }
  },
  contact: {
    email: "sales@shadowmarket.ai",
    phone: "+91 99527 79992",
    whatsapp: "+919952779992",
  },
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61558766506279",
    instagram: "https://www.instagram.com/shadowmarket.ai/",
    linkedin: "https://linkedin.com/company/shadowmarketai",
    twitter: "https://twitter.com/shadowmarketai",
  },
  founders: [
    {
      name: "M. Kumaran",
      role: "Founder & CEO",
      image: "/images/team/kumaran.jpg",
    },
    {
      name: "Mrs. Kiruthika",
      role: "Co-Founder",
      image: "/images/team/kiruthika.jpg",
    }
  ],
  stats: {
    projectsCompleted: 150,
    clientsSatisfied: 80,
    aiAgents: 24,
    teamSize: 15,
    yearsExperience: 5,
  },
  achievements: {
    awardsCount: 2,
    recentAward: "Best Digital Marketing Agency - TNDS 2025",
    recognizedBy: ["Social Eagle", "Coimbatore Creators"]
  },
  gmb: {
    placeId: (process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID as string) || '',
    hasMap: true as const,
    businessHours: {
      monday: { open: '09:00' as const, close: '19:00' as const },
      tuesday: { open: '09:00' as const, close: '19:00' as const },
      wednesday: { open: '09:00' as const, close: '19:00' as const },
      thursday: { open: '09:00' as const, close: '19:00' as const },
      friday: { open: '09:00' as const, close: '19:00' as const },
      saturday: { open: '09:00' as const, close: '19:00' as const },
      sunday: { open: 'closed' as const, close: 'closed' as const }
    }
  }
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    submenu: [
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "AI Development", href: "/services/ai-development" },
    ]
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Technology", href: "/technology" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const KEYWORDS = {
  primary: [
    "Digital marketing agency Coimbatore",
    "AI development company Coimbatore",
    "Web development Coimbatore",
    "Mobile app development Tamil Nadu",
  ],
  secondary: [
    "Social media marketing Coimbatore",
    "Google Ads agency Coimbatore",
    "SaaS development India",
    "AI chatbot development",
    "Marketing automation Coimbatore",
    "Full-stack development Tamil Nadu",
  ]
} as const;

export const USP = [
  "Only agency in Coimbatore offering both Marketing & AI Development",
  "24 Expert AI Agents working for your project",
  "From concept to launch - complete digital solutions",
  "Local team, global standards",
  "Latest 2024-2025 technology stack",
] as const;
