import { FAQ } from '@/components/seo/FAQSchema';

/**
 * Digital Marketing FAQs
 * Optimized for Coimbatore local searches and general marketing queries
 */
export const digitalMarketingFAQs: FAQ[] = [
  {
    question: 'What digital marketing services does Shadow Market offer in Coimbatore?',
    answer:
      'Shadow Market offers Meta Ads management, Google Ads campaigns, SEO optimization, social media marketing, content creation, and marketing automation services in Coimbatore, Tamil Nadu.',
  },
  {
    question: 'How much do digital marketing services cost in Coimbatore?',
    answer:
      'Digital marketing packages start at ₹15,000/month for social media management and ₹25,000/month for comprehensive campaigns including Meta Ads, Google Ads, and SEO.',
  },
  {
    question: 'What is the ROI of digital marketing for Coimbatore businesses?',
    answer:
      'Businesses in Coimbatore typically see 3-5x ROI within 3-6 months with proper digital marketing strategy, including increased leads, brand awareness, and sales conversions.',
  },
  {
    question: 'How long does it take to see results from digital marketing?',
    answer:
      'Meta Ads and Google Ads show results within 7-14 days. SEO takes 2-3 months for organic ranking improvements. Social media growth typically shows momentum within 30-60 days.',
  },
  {
    question: 'Which is better for local businesses: Meta Ads or Google Ads?',
    answer:
      'Both are effective for different goals. Meta Ads (Facebook/Instagram) excels at brand awareness and targeting specific demographics. Google Ads captures high-intent search traffic. We recommend using both for maximum reach.',
  },
  {
    question: 'Does Shadow Market provide digital marketing for small businesses?',
    answer:
      'Yes, we offer flexible packages for small businesses starting at ₹15,000/month. Our scalable solutions grow with your business, ensuring cost-effective marketing at every stage.',
  },
];

/**
 * AI Development FAQs
 * Optimized for AI chatbot and automation queries
 */
export const aiDevelopmentFAQs: FAQ[] = [
  {
    question: 'What AI development services are available in Coimbatore?',
    answer:
      'Shadow Market provides AI chatbot development, marketing automation, workflow automation with n8n, RAG systems, and custom AI agent development for businesses in Coimbatore.',
  },
  {
    question: 'How much does AI chatbot development cost?',
    answer:
      'AI chatbot development starts at ₹50,000 for simple FAQ bots and ranges from ₹2-5 lakhs for advanced conversational AI with RAG (Retrieval Augmented Generation) capabilities.',
  },
  {
    question: 'What AI models does Shadow Market use?',
    answer:
      'We work with GPT-4, Claude Sonnet, Gemini Pro, and open-source models. Model selection depends on your use case, budget, and compliance requirements.',
  },
  {
    question: 'Can AI chatbots integrate with existing business systems?',
    answer:
      'Yes, our chatbots integrate with CRMs (HubSpot, Salesforce), WhatsApp Business API, customer support platforms, and custom databases to provide seamless automation.',
  },
  {
    question: 'What is RAG (Retrieval Augmented Generation) in AI chatbots?',
    answer:
      'RAG enables chatbots to access your specific business data (documents, FAQs, knowledge bases) in real-time, providing accurate, up-to-date responses instead of generic AI answers.',
  },
  {
    question: 'How long does it take to develop a custom AI chatbot?',
    answer:
      'Basic chatbots take 2-3 weeks. Advanced RAG-powered chatbots with custom integrations typically take 4-8 weeks depending on complexity and data volume.',
  },
];

/**
 * General Business FAQs
 * About Shadow Market and services
 */
export const generalFAQs: FAQ[] = [
  {
    question: 'What is Shadow Market?',
    answer:
      'Shadow Market is a digital marketing and AI development agency based in Coimbatore, Tamil Nadu. We help businesses grow through data-driven marketing strategies and AI-powered automation.',
  },
  {
    question: 'Where is Shadow Market located?',
    answer:
      'Shadow Market is located in Coimbatore, Tamil Nadu, India. We serve clients throughout Coimbatore, Tamil Nadu, and across India.',
  },
  {
    question: 'Does Shadow Market offer free consultations?',
    answer:
      'Yes, we offer free consultations for all services. Book a 15-30 minute call to discuss your business goals and get personalized recommendations.',
  },
  {
    question: 'What industries does Shadow Market work with?',
    answer:
      'We work with businesses across all industries including retail, e-commerce, hospitality, healthcare, education, real estate, manufacturing, and professional services.',
  },
  {
    question: 'How can I contact Shadow Market?',
    answer:
      'Contact us at +91 99527 79992 (WhatsApp available) or email sales@shadowmarket.ai. You can also book a free consultation through our website.',
  },
];

/**
 * Meta Ads Specific FAQs
 */
export const metaAdsFAQs: FAQ[] = [
  {
    question: 'What is the minimum budget for Meta Ads campaigns?',
    answer:
      'We recommend a minimum budget of ₹500-1000/day (₹15,000-30,000/month) for effective Meta Ads campaigns that generate consistent results.',
  },
  {
    question: 'What kind of results can I expect from Meta Ads?',
    answer:
      'Typical results include 2-5% conversion rates, ₹50-200 cost per lead depending on industry, and 3-5x ROAS (Return on Ad Spend) within 2-3 months of optimization.',
  },
  {
    question: 'Do you run ads on both Facebook and Instagram?',
    answer:
      'Yes, our Meta Ads campaigns run across Facebook, Instagram, Messenger, and Audience Network for maximum reach and optimal performance.',
  },
];

/**
 * SEO Specific FAQs
 */
export const seoFAQs: FAQ[] = [
  {
    question: 'How long does SEO take to show results?',
    answer:
      'SEO typically takes 2-3 months to show initial ranking improvements and 4-6 months for significant traffic increases. Results depend on competition, current website state, and content quality.',
  },
  {
    question: 'What is included in your SEO services?',
    answer:
      'Our SEO services include keyword research, on-page optimization, technical SEO, content creation, link building, local SEO (Google My Business), and monthly performance reporting.',
  },
  {
    question: 'Do you guarantee first page rankings on Google?',
    answer:
      'No one can guarantee specific rankings as Google algorithms constantly change. However, we use proven strategies and have consistently achieved top 10 rankings for our clients.',
  },
];

/**
 * Combined FAQs for homepage
 */
export const homepageFAQs: FAQ[] = [
  ...generalFAQs.slice(0, 3),
  digitalMarketingFAQs[0],
  digitalMarketingFAQs[1],
  aiDevelopmentFAQs[0],
  aiDevelopmentFAQs[1],
];
