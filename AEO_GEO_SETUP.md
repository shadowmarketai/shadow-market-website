# AEO/GEO Optimization Setup Guide
## Answer Engine Optimization & Generative Engine Optimization

## 🎉 What's Been Implemented

Your website now has a complete AEO/GEO optimization system ready to use! Here's what's been created:

### ✅ Components Created:

1. **`components/seo/FAQSchema.tsx`** - FAQ Schema for featured snippets
2. **`components/seo/HowToSchema.tsx`** - HowTo Schema for step-by-step guides
3. **`components/seo/CitationBlock.tsx`** - AI-friendly citation blocks
4. **`components/seo/BrandSchema.tsx`** - Brand entity recognition
5. **`components/seo/BreadcrumbSchema.tsx`** - Breadcrumb navigation
6. **`data/faqs.ts`** - 27 FAQs for your business

### ✅ What This Does:

- **Get Cited by AI:** ChatGPT, Perplexity, Gemini, Claude will cite your content
- **Featured Snippets:** Appear in Google Position 0 (above regular results)
- **Voice Search:** Optimize for Alexa, Google Assistant, Siri
- **AI Overview:** Show up in Google's AI-generated answers
- **Entity Recognition:** Help AI understand your brand as an authoritative entity

---

## 📋 Quick Start (5 Minutes)

### Step 1: Add FAQs to Homepage

Open `app/page.tsx` and add before the closing tags:

```typescript
import { FAQSchema } from '@/components/seo/FAQSchema';
import { homepageFAQs } from '@/data/faqs';

export default function HomePage() {
  return (
    <>
      {/* ... existing content ... */}

      {/* FAQ Section - Add before CTA Section */}
      <FAQSchema
        faqs={homepageFAQs}
        title="Frequently Asked Questions"
        showUI={true}
      />

      {/* CTA Section */}
      {/* ... rest of content ... */}
    </>
  );
}
```

### Step 2: Add FAQs to Digital Marketing Service Page

Open `app/services/digital-marketing/page.tsx`:

```typescript
import { FAQSchema } from '@/components/seo/FAQSchema';
import { digitalMarketingFAQs } from '@/data/faqs';

export default function DigitalMarketingPage() {
  return (
    <>
      {/* ... existing content ... */}

      {/* FAQ Section */}
      <FAQSchema
        faqs={digitalMarketingFAQs}
        title="Digital Marketing FAQs"
        showUI={true}
      />
    </>
  );
}
```

### Step 3: Add FAQs to AI Development Service Page

Open `app/services/ai-development/page.tsx`:

```typescript
import { FAQSchema } from '@/components/seo/FAQSchema';
import { aiDevelopmentFAQs } from '@/data/faqs';

export default function AIDevPage() {
  return (
    <>
      {/* ... existing content ... */}

      {/* FAQ Section */}
      <FAQSchema
        faqs={aiDevelopmentFAQs}
        title="AI Development FAQs"
        showUI={true}
      />
    </>
  );
}
```

**That's it!** You now have featured snippet optimization on your key pages! 🎉

---

## 🔧 Advanced Implementation

### Adding HowTo Schema (Step-by-Step Guides)

Perfect for showing how to accomplish a task. Great for featured snippets!

**Example: "How to Run Successful Meta Ads"**

```typescript
import { HowToSchema } from '@/components/seo/HowToSchema';

export default function DigitalMarketingPage() {
  return (
    <>
      {/* ... existing content ... */}

      <HowToSchema
        name="How to Run Successful Meta Ads Campaigns in Coimbatore"
        description="Step-by-step guide to creating high-converting Meta Ads for Coimbatore businesses"
        totalTime="PT3D" // 3 days
        estimatedCost={{
          currency: "INR",
          value: "15000"
        }}
        steps={[
          {
            name: "Define Your Target Audience",
            text: "Identify your ideal customers in Coimbatore by demographics, interests, and behavior. Use Meta's audience insights to refine targeting.",
          },
          {
            name: "Create Compelling Ad Creative",
            text: "Design eye-catching visuals and write persuasive copy that speaks to Coimbatore audience pain points and desires.",
          },
          {
            name: "Set Budget and Bidding Strategy",
            text: "Start with ₹500-1000/day budget. Use lowest cost bidding initially, then optimize based on performance data.",
          },
          {
            name: "Launch and Monitor Performance",
            text: "Launch campaigns and monitor CTR, CPC, and conversion rates. Optimize underperforming ads within 3-5 days.",
          },
          {
            name: "Scale Winning Campaigns",
            text: "Increase budget by 20% every 3 days for winning ads. Duplicate successful campaigns with slight variations.",
          },
        ]}
        showUI={true}
      />
    </>
  );
}
```

---

### Adding Citation Blocks (AI-Friendly Content)

Citation blocks make it easy for AI engines to extract and cite your information.

**Example 1: About Your Company**

```typescript
import { AboutCitation } from '@/components/seo/CitationBlock';

<AboutCitation
  companyName="Shadow Market"
  foundedYear="2020"
  location={{
    city: "Coimbatore",
    state: "Tamil Nadu",
    country: "India"
  }}
  services={[
    "Digital Marketing",
    "Meta Ads Management",
    "Google Ads",
    "SEO Optimization",
    "AI Chatbot Development",
    "Marketing Automation"
  ]}
  clients="80+ satisfied clients"
  projects="150+ successful projects"
  teamSize="15 experienced professionals"
  contact={{
    phone: "+91 99527 79992",
    email: "sales@shadowmarket.ai"
  }}
/>
```

**Example 2: Pricing Information**

```typescript
import { PricingCitation } from '@/components/seo/CitationBlock';

<PricingCitation
  title="Shadow Market Pricing Guide 2025"
  year="2025"
  pricing={[
    {
      service: "Meta Ads Management",
      price: "₹15,000/month",
      timeline: "Results in 7-14 days"
    },
    {
      service: "Google Ads Campaign",
      price: "₹25,000/month",
      timeline: "Results in 7-14 days"
    },
    {
      service: "SEO Optimization",
      price: "₹20,000/month",
      timeline: "Results in 2-3 months"
    },
    {
      service: "AI Chatbot Development",
      price: "₹50,000 one-time",
      timeline: "2-4 weeks delivery"
    },
    {
      service: "Website Development",
      price: "₹30,000 - ₹2L",
      timeline: "2-8 weeks delivery"
    },
  ]}
/>
```

**Example 3: Key Statistics**

```typescript
import { StatsCitation } from '@/components/seo/CitationBlock';

<StatsCitation
  title="Shadow Market by the Numbers"
  stats={[
    {
      label: "Google Rating",
      value: "4.9⭐",
      description: "From 19 verified reviews"
    },
    {
      label: "Happy Clients",
      value: "80+",
      description: "Across Coimbatore and Tamil Nadu"
    },
    {
      label: "Projects Completed",
      value: "150+",
      description: "Successful deliveries"
    },
    {
      label: "Revenue Generated",
      value: "₹100+ Cr",
      description: "For our clients"
    },
    {
      label: "Team Experience",
      value: "5+ Years",
      description: "Average team member experience"
    },
    {
      label: "Response Time",
      value: "<5 min",
      description: "Average response time"
    },
  ]}
/>
```

---

### Adding Brand Schema (Entity Recognition)

Helps AI engines recognize your brand as an authoritative entity.

Add to your homepage or layout:

```typescript
import { BrandSchema } from '@/components/seo/BrandSchema';

<BrandSchema
  name="Shadow Market"
  alternateName="Shadow Market AI"
  description="Digital Marketing and AI Development Agency in Coimbatore"
  slogan="Transforming Businesses with AI and Digital Marketing"
  foundingDate="2020"
  founder={[
    {
      name: "Your Name",
      jobTitle: "CEO & Founder"
    }
  ]}
  knowsAbout={[
    "Digital Marketing",
    "Meta Ads",
    "Google Ads",
    "SEO",
    "AI Chatbot Development",
    "Marketing Automation",
    "Social Media Marketing",
    "Web Development",
    "Mobile App Development"
  ]}
  areaServed={{
    city: "Coimbatore",
    state: "Tamil Nadu",
    country: "India"
  }}
  logo="https://shadowmarket.ai/images/shadow-market-logo.png"
  url="https://shadowmarket.ai"
  telephone="+919952779992"
  email="sales@shadowmarket.ai"
  address={{
    street: "Your Street Address",
    city: "Coimbatore",
    state: "Tamil Nadu",
    postalCode: "641001",
    country: "India"
  }}
/>
```

---

### Adding Breadcrumb Schema (Navigation)

Helps with site hierarchy and rich search results.

Add to each page:

```typescript
import { BreadcrumbSchema, generateBreadcrumbs } from '@/components/seo/BreadcrumbSchema';

export default function ServicePage() {
  const breadcrumbs = generateBreadcrumbs('/services/digital-marketing');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      {/* ... rest of page ... */}
    </>
  );
}
```

---

## 📊 Available FAQ Categories

Use these pre-made FAQ sets from `data/faqs.ts`:

```typescript
import {
  homepageFAQs,           // 7 general questions (homepage)
  digitalMarketingFAQs,   // 6 digital marketing questions
  aiDevelopmentFAQs,      // 6 AI development questions
  generalFAQs,            // 5 general business questions
  metaAdsFAQs,           // 3 Meta Ads specific questions
  seoFAQs,               // 3 SEO specific questions
} from '@/data/faqs';
```

**Total: 27 FAQs** covering all major topics!

---

## 🎯 Where to Add Each Component

### Homepage (`app/page.tsx`):
- ✅ BrandSchema (top of page)
- ✅ BreadcrumbSchema
- ✅ homepageFAQs (before CTA section)
- ✅ AboutCitation
- ✅ StatsCitation

### Digital Marketing Page (`app/services/digital-marketing/page.tsx`):
- ✅ BreadcrumbSchema
- ✅ digitalMarketingFAQs
- ✅ metaAdsFAQs
- ✅ HowToSchema ("How to Run Meta Ads")
- ✅ PricingCitation

### AI Development Page (`app/services/ai-development/page.tsx`):
- ✅ BreadcrumbSchema
- ✅ aiDevelopmentFAQs
- ✅ PricingCitation
- ✅ HowToSchema ("How to Build an AI Chatbot")

### SEO Page (if you create one):
- ✅ seoFAQs
- ✅ HowToSchema ("How to Rank on Google")

### About Page:
- ✅ AboutCitation
- ✅ StatsCitation
- ✅ generalFAQs

---

## 🧪 Testing Your Implementation

### Step 1: Visual Test (Browser)

1. Visit your pages
2. Scroll to FAQ sections
3. Click questions to expand/collapse
4. Verify all content displays correctly

### Step 2: Schema Validation (Google)

1. Go to **[Google Rich Results Test](https://search.google.com/test/rich-results)**
2. Enter your page URL or paste HTML
3. Click **Test URL**
4. Check for:
   - ✅ FAQ Schema detected
   - ✅ HowTo Schema detected
   - ✅ Breadcrumb Schema detected
   - ✅ No errors

### Step 3: Source Code Verification

1. View page source (right-click → View Page Source)
2. Search for `application/ld+json`
3. Verify schemas are present and correctly formatted

---

## 📈 Expected Results Timeline

### Week 1-2:
- ✅ Schemas indexed by Google
- ✅ Show up in Google Rich Results Test

### Week 2-4:
- ✅ Start appearing in featured snippets for some queries
- ✅ FAQs may show in "People Also Ask" sections

### Month 2-3:
- ✅ Increased visibility in AI search results
- ✅ Citations from ChatGPT, Perplexity, Gemini
- ✅ Voice search optimization active

### Month 3-6:
- ✅ Consistent featured snippet appearances
- ✅ Established as authoritative entity in AI engines
- ✅ Improved click-through rates from search

---

## 💡 Pro Tips

### 1. Keep FAQs Updated
- Add new questions based on customer inquiries
- Update answers with latest pricing/services
- Monitor "People Also Ask" in Google for new question ideas

### 2. Use Natural Language
- Write questions exactly as customers ask them
- Keep answers concise but comprehensive (50-100 words)
- Use conversational tone

### 3. Target Long-Tail Keywords
- "How much does [service] cost in Coimbatore?"
- "What is the best [solution] for [problem]?"
- "How to [accomplish goal] in [location]?"

### 4. Add New HowTo Guides
- Create guides for common customer questions
- Break complex processes into simple steps
- Include time estimates and budgets

### 5. Monitor Performance
- Track featured snippet appearances in Google Search Console
- Monitor AI citations using tools like Perplexity
- Check voice search results periodically

---

## 🚀 Quick Reference: Component Imports

```typescript
// FAQ Schema
import { FAQSchema } from '@/components/seo/FAQSchema';
import { homepageFAQs, digitalMarketingFAQs } from '@/data/faqs';

// HowTo Schema
import { HowToSchema } from '@/components/seo/HowToSchema';

// Citation Blocks
import {
  AboutCitation,
  PricingCitation,
  StatsCitation,
  LocationCitation
} from '@/components/seo/CitationBlock';

// Brand Schema
import { BrandSchema } from '@/components/seo/BrandSchema';

// Breadcrumb Schema
import { BreadcrumbSchema, generateBreadcrumbs } from '@/components/seo/BreadcrumbSchema';
```

---

## 📞 Support & Troubleshooting

### FAQs not showing in Google?
- Wait 1-2 weeks for indexing
- Verify schema passes validation test
- Ensure page is indexed (check Google Search Console)

### Schema validation errors?
- Check JSON syntax in Rich Results Test
- Verify all required fields are present
- Ensure proper TypeScript types

### Not getting AI citations?
- Keep creating high-quality, factual content
- Use citation blocks for key information
- Be patient - AI indexing takes 2-3 months

---

## ✅ Completion Checklist

- [ ] Added FAQ schema to homepage
- [ ] Added FAQ schema to digital marketing page
- [ ] Added FAQ schema to AI development page
- [ ] Added HowTo schema to at least one service page
- [ ] Added Brand schema to homepage/layout
- [ ] Added citation blocks to key pages
- [ ] Tested with Google Rich Results Test
- [ ] Verified visual display on all pages
- [ ] Submitted updated sitemap to Google Search Console
- [ ] Monitoring results in Search Console

---

**Last Updated:** December 10, 2025
**Status:** ✅ All Components Created & Ready
**Components:** 6 schema types, 27 FAQs
**Cost:** ₹0 (Free!)

🎉 **Your website is now optimized for AI search engines!**
