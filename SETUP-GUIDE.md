# Shadow Market Website - Complete Setup Guide

## 🚀 Quick Start (5 Minutes)

### 1. Install Dependencies

```bash
cd shadow-market-website
npm install
```

### 2. Configure Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```bash
# REQUIRED - Get your actual values
NEXT_PUBLIC_SITE_URL=https://shadowmarket.ai
NEXT_PUBLIC_WHATSAPP_NUMBER=+919952779992
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=YOUR_PIXEL_ID_HERE

# Optional but recommended
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL=contact@shadowmarket.ai
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📊 Analytics Setup (10 Minutes)

### Google Analytics 4

1. **Create GA4 Property:**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Admin → Create Property
   - Select "Web" → Get Measurement ID

2. **Add to .env.local:**
   ```bash
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-YOUR_ID_HERE
   ```

3. **Verify Installation:**
   - Visit your site
   - GA4 → Reports → Realtime
   - Should see your visit

### Meta Pixel (Facebook Pixel)

1. **Create Pixel:**
   - Go to [Meta Business Suite](https://business.facebook.com)
   - Events Manager → Connect Data Sources
   - Web → Meta Pixel → Create
   - Copy Pixel ID

2. **Add to .env.local:**
   ```bash
   NEXT_PUBLIC_META_PIXEL_ID=YOUR_PIXEL_ID_HERE
   ```

3. **Verify Installation:**
   - Install [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper) Chrome extension
   - Visit your site
   - Extension should show green checkmark

4. **Setup Conversion Events (Optional):**
   - Events Manager → Aggregated Event Measurement
   - Configure 8 conversion events (Lead, Contact, etc.)
   - Priority: Lead (1), Contact (2), ViewContent (3)

---

## 🔧 Feature Configuration

### Exit-Intent Popup

**File:** `components/conversion/ExitIntentPopup.tsx`

**Customize:**
```typescript
// Change lead magnet offer
const leadMagnetTitle = "Your Free Guide Title";

// Adjust trigger delay (default: 5 seconds)
const timer = setTimeout(() => {
  document.addEventListener('mouseleave', handleMouseLeave);
}, 5000); // Change this value

// Estimated lead value for tracking
trackLead({ value: 500 }); // Adjust value
```

### Sticky CTA Bar

**File:** `components/conversion/StickyCTABar.tsx`

**Customize:**
```typescript
// Change scroll trigger (default: 300px)
setIsVisible(window.scrollY > 300); // Adjust threshold

// Update CTA text and links
<Link href="/your-page">Your CTA Text</Link>
```

### Trust Signals (Recent Conversions)

**File:** `components/conversion/TrustSignals.tsx`

**Replace Mock Data:**
```typescript
// Replace with real conversion data from your backend
const mockRecentConversions: RecentConversion[] = [
  {
    name: 'Real Customer',
    location: 'Real City',
    service: 'Real Service',
    time: 'Real timestamp'
  },
];

// Or fetch from API
useEffect(() => {
  fetch('/api/recent-conversions')
    .then(res => res.json())
    .then(data => setConversions(data));
}, []);
```

---

## 🎨 Customization

### Colors & Branding

**File:** `app/globals.css`

```css
:root {
  --primary: 220 90% 50%;     /* Deep Blue - Change this */
  --secondary: 280 60% 55%;   /* Purple - Change this */
  --accent: 30 100% 55%;      /* Orange - Change this */
  --cyan: 180 100% 50%;       /* Cyan - Change this */
}
```

### Site Information

**File:** `lib/constants.ts`

```typescript
export const SITE_CONFIG = {
  name: "YOUR COMPANY NAME",
  domain: "yoursite.com",
  description: "Your description",
  contact: {
    email: "your@email.com",
    phone: "+91 XXXXXXXXXX",
  },
  // ... update all fields
};
```

### Services & Content

**Files:**
- `data/services.ts` - Service offerings
- `data/portfolio.ts` - Portfolio projects
- `data/testimonials.ts` - Client testimonials

---

## 📱 Testing

### Local Testing

```bash
# Test development build
npm run dev

# Test production build
npm run build
npm start

# Run linting
npm run lint
```

### Manual Testing Checklist

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Forms submit successfully
- [ ] WhatsApp button opens correctly
- [ ] Exit-intent popup appears on exit
- [ ] Sticky CTA bar appears on scroll
- [ ] Trust signals show and rotate
- [ ] GA4 tracking works (check Realtime)
- [ ] Meta Pixel tracking works (Pixel Helper)
- [ ] Mobile responsive (test on phone)
- [ ] Images load fast (check Network tab)

---

## 🚀 Deployment to Vercel

### Option 1: Vercel CLI (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Option 2: GitHub Integration

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit with advanced features"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - New Project → Import Git Repository
   - Select your repo
   - Configure environment variables
   - Deploy!

### Environment Variables on Vercel

Add these in Vercel Dashboard → Settings → Environment Variables:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=YOUR_PIXEL_ID
NEXT_PUBLIC_WHATSAPP_NUMBER=+91XXXXXXXXXX
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL=your@email.com
```

### Custom Domain

1. **Add Domain:**
   - Vercel Dashboard → Settings → Domains
   - Add your domain

2. **Configure DNS:**
   - Type: A Record
   - Name: @ or www
   - Value: (Vercel provides IP)
   - TTL: 3600

3. **SSL:**
   - Automatically generated by Vercel
   - Usually ready in 5-10 minutes

---

## 📊 Post-Deployment Checklist

### Immediate (Day 1)

- [ ] Visit live site and test all features
- [ ] Verify analytics tracking (GA4 + Meta Pixel)
- [ ] Test forms and ensure emails are received
- [ ] Check mobile responsiveness
- [ ] Run Lighthouse audit (target 90+)
- [ ] Test WhatsApp button
- [ ] Verify exit-intent popup
- [ ] Check sticky CTA bar

### Week 1

- [ ] Monitor GA4 dashboard daily
- [ ] Check Meta Events Manager
- [ ] Review conversion funnel
- [ ] Analyze user behavior
- [ ] Check error logs
- [ ] Monitor page load speeds
- [ ] Review form submissions

### Ongoing

- [ ] Weekly analytics review
- [ ] Monthly performance audit
- [ ] Quarterly feature updates
- [ ] Regular dependency updates
- [ ] Security patches

---

## 🐛 Troubleshooting

### Analytics Not Tracking

**GA4:**
```typescript
// Check if gtag is defined
console.log(typeof window.gtag); // Should be 'function'

// Check GA_MEASUREMENT_ID
console.log(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);
```

**Meta Pixel:**
```typescript
// Check if fbq is defined
console.log(typeof window.fbq); // Should be 'function'

// Check Pixel ID
console.log(process.env.NEXT_PUBLIC_META_PIXEL_ID);
```

### Exit Popup Not Showing

```typescript
// Check session storage
sessionStorage.removeItem('exit_popup_shown'); // Clears flag

// Check if popup is enabled
// Look in browser DevTools Console for errors
```

### Images Not Loading

```bash
# Check image paths
# Images should be in public/images/

# Check next.config.ts
# Ensure image domains are configured

# Rebuild
npm run build
```

### Build Errors

```bash
# Clear cache
rm -rf .next
rm -rf node_modules
npm install

# Rebuild
npm run build
```

---

## 💡 Pro Tips

### Performance

1. **Lazy Load Everything Below Fold**
   ```typescript
   import dynamic from 'next/dynamic';

   const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
     loading: () => <Skeleton />,
   });
   ```

2. **Use Image Placeholders**
   ```typescript
   <OptimizedImage
     src="/image.jpg"
     placeholder="blur"
     blurDataURL="data:image/..." // Low quality placeholder
   />
   ```

3. **Preload Critical Resources**
   ```typescript
   // In layout.tsx head section
   <link rel="preconnect" href="https://fonts.googleapis.com" />
   ```

### Conversion Optimization

1. **A/B Test Headlines**
   - Test different hero headlines
   - Measure conversion impact
   - Use Vercel Edge Config for variants

2. **Test CTA Colors**
   - Try different button colors
   - Track clicks in GA4
   - Use data to decide

3. **Optimize Forms**
   - Reduce form fields (less is more)
   - Use multi-step forms
   - Add progress indicators

### Analytics

1. **Create Custom Dashboards**
   - GA4: Explore → Create new exploration
   - Track key metrics daily
   - Set up alerts for drops

2. **Setup Goals**
   - GA4: Admin → Events → Mark as conversion
   - Track: Lead, Contact, Purchase

3. **Monitor Funnels**
   - Create funnel visualization
   - Identify drop-off points
   - Optimize weak steps

---

## 📞 Support & Resources

### Documentation
- [Complete Features Guide](FEATURES.md)
- [Next.js 16 Docs](https://nextjs.org/docs)
- [React 19 Guide](https://react.dev)
- [Tailwind v4 Docs](https://tailwindcss.com/docs)

### Community
- [Next.js Discord](https://nextjs.org/discord)
- [React Discord](https://react.dev/community)
- [Shadow Market Support](mailto:support@shadowmarket.ai)

### Tools
- [Lighthouse](https://pagespeed.web.dev/)
- [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper)
- [Google Tag Assistant](https://tagassistant.google.com/)
- [WebPageTest](https://www.webpagetest.org/)

---

**Setup Complete!** 🎉

Your Shadow Market website is now ready with all advanced features enabled!

Need help? Contact: support@shadowmarket.ai
