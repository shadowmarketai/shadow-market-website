export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
  service: string;
  featured: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Rajesh Kumar",
    role: "Managing Director",
    company: "TrendyWear Coimbatore",
    content: "SHADOW MARKET transformed our business completely. We went from a small retail store to doing ₹50 lakhs monthly online. Their web development and marketing skills are world-class. The best part? They're local to Coimbatore and understand our market perfectly.",
    rating: 5,
    image: "/images/testimonials/rajesh.jpg",
    service: "Web Development & Digital Marketing",
    featured: true,
  },
  {
    id: "testimonial-2",
    name: "Dr. Priya Menon",
    role: "Director",
    company: "HealthCare Plus Hospital",
    content: "The AI chatbot developed by SHADOW MARKET has been a game-changer for our hospital. We're now able to handle 24/7 patient queries, appointment bookings, and report delivery automatically. It saved us ₹3 lakhs per month in customer support costs!",
    rating: 5,
    image: "/images/testimonials/priya.jpg",
    service: "AI Chatbot Development",
    featured: true,
  },
  {
    id: "testimonial-3",
    name: "Arun Venkatesh",
    role: "Founder & CEO",
    company: "QuickBite Coimbatore",
    content: "We needed a food delivery app that could compete with the big players. SHADOW MARKET delivered beyond expectations. The app is fast, beautiful, and our restaurant partners love the dashboard. We hit 15,000 downloads in just 3 months!",
    rating: 5,
    image: "/images/testimonials/arun.jpg",
    service: "Mobile App Development",
    featured: true,
  },
  {
    id: "testimonial-4",
    name: "Kavitha Ramachandran",
    role: "Sales Head",
    company: "Premier Properties Coimbatore",
    content: "SHADOW MARKET's Facebook and Google Ads campaign generated ₹16.8 crores in sales for us in just 3 months. The lead quality was exceptional and their cost per lead was 75% lower than other agencies we've worked with. Highly recommended!",
    rating: 5,
    image: "/images/testimonials/kavitha.jpg",
    service: "Digital Marketing - Meta & Google Ads",
    featured: true,
  },
  {
    id: "testimonial-5",
    name: "Suresh Babu",
    role: "Owner",
    company: "Velocity Motors",
    content: "As a new luxury car showroom in Coimbatore, we needed to establish our brand quickly. SHADOW MARKET's 360-degree digital marketing strategy helped us sell 120 cars worth ₹18 crores in the first 6 months. Their team is professional, creative, and results-driven.",
    rating: 5,
    image: "/images/testimonials/suresh.jpg",
    service: "Digital Marketing - Complete Strategy",
    featured: false,
  },
  {
    id: "testimonial-6",
    name: "Lakshmi Narayanan",
    role: "Founder",
    company: "SkillUp Academy",
    content: "The online learning platform built by SHADOW MARKET is exactly what we needed. It's user-friendly, handles video streaming perfectly, and our students love it. We've grown from 0 to 5,000 students and ₹12 lakhs monthly revenue. Thank you, team!",
    rating: 5,
    image: "/images/testimonials/lakshmi.jpg",
    service: "Web Development - LMS Platform",
    featured: false,
  },
  {
    id: "testimonial-7",
    name: "Mohammed Imran",
    role: "Marketing Manager",
    company: "Multi-Cuisine Restaurant Chain",
    content: "The marketing automation workflows created using n8n have saved our team 20 hours every week. Birthday wishes, feedback collection, and promotional campaigns all run automatically. We've seen a 40% increase in repeat visits. Outstanding work!",
    rating: 5,
    image: "/images/testimonials/imran.jpg",
    service: "Marketing Automation",
    featured: false,
  },
  {
    id: "testimonial-8",
    name: "Deepa Krishnan",
    role: "HR Director",
    company: "Tech Solutions Pvt Ltd",
    content: "We've been using the PeopleFirst HR SaaS platform for 8 months now, and it's made managing our 65 employees so much easier. Attendance, leave, payroll - everything is automated. Great product and excellent support from the SHADOW MARKET team!",
    rating: 5,
    image: "/images/testimonials/deepa.jpg",
    service: "SaaS Platform Development",
    featured: false,
  },
];

export const getFeaturedTestimonials = () => {
  return TESTIMONIALS.filter(t => t.featured);
};

export const getTestimonialsByService = (service: string) => {
  return TESTIMONIALS.filter(t => t.service.toLowerCase().includes(service.toLowerCase()));
};
