export interface Award {
  id: string;
  title: string;
  category: "industry" | "technology" | "innovation" | "marketing" | "achievement";
  organization: string;
  event: string;
  location: string;
  year: number;
  description: string;
  image: string;
  featured: boolean; // For homepage/featured display
  icon?: string; // Emoji or lucide icon name
  link?: string; // Certificate or announcement URL
  date?: string; // Specific date if needed
}

export const AWARDS: Award[] = [
  {
    id: "tnds2025-1",
    title: "Best Digital Marketing Agency",
    category: "marketing",
    organization: "Social Eagle",
    event: "TNDS 2025",
    location: "Chennai Hilton Hotel",
    year: 2025,
    description: "Recognized as the Best Digital Marketing Agency at TNDS 2025 for exceptional campaign performance and client results.",
    image: "/images/awards/tnds2025-award-3.jpg",
    featured: true,
    icon: "🏆"
  },
  {
    id: "aithon-1",
    title: "AI-thon Winner",
    category: "technology",
    organization: "Coimbatore Creators",
    event: "AI-thon Competition",
    location: "Coimbatore",
    year: 2025,
    description: "First place winner in AI-thon competition for innovative AI solution development.",
    image: "/images/awards/aithon-award-1.jpg",
    featured: true,
    icon: "🤖"
  }
];

// Utility functions for filtering and display
export const getFeaturedAwards = () => AWARDS.filter(award => award.featured);

export const getAwardsByCategory = (category: Award["category"]) =>
  AWARDS.filter(award => award.category === category);

export const getAwardsByYear = (year: number) =>
  AWARDS.filter(award => award.year === year);

export const getRecentAwards = (count: number = 5) =>
  AWARDS.slice(0, count);
