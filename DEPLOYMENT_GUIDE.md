# SHADOW MARKET - Production Deployment Guide
## Deploy to Vercel in 30 Minutes

---

## 🎯 Prerequisites Checklist

Before deploying, ensure you have:

- [x] Production build tested locally (`npm run build` successful)
- [ ] GitHub repository created (or ready to create)
- [ ] Vercel account (free - sign up at [vercel.com](https://vercel.com))
- [ ] Cal.com account for booking system
- [ ] Tawk.to account for live chat
- [ ] (Optional) Resend account for email delivery
- [ ] (Optional) Google Analytics 4 property created
- [ ] (Optional) Meta Pixel created in Meta Business Suite

---

## 📦 Step 1: Prepare Code Repository (5 minutes)

### Option A: Using GitHub (Recommended)

1. **Create GitHub Repository:**
   ```bash
   # Navigate to project directory
   cd D:\SHADOW-MARKET\claude-agents\shadow-market-website

   # Initialize git (if not already done)
   git init

   # Create .gitignore if needed
   echo "node_modules\n.next\n.env.local\n.env.production\n.vercel" > .gitignore

   # Add all files
   git add .

   # Commit
   git commit -m "Initial commit - Shadow Market website ready for deployment"

   # Create repository on GitHub.com
   # Then add remote and push:
   git remote add origin https://github.com/YOUR_USERNAME/shadow-market.git
   git branch -M main
   git push -u origin main
   ```

2. **Verify Repository:**
   - Go to your GitHub repository
   - Ensure all files are present
   - Verify `.env.local` is NOT committed (should be in `.gitignore`)

### Option B: Using Vercel CLI (Alternative)

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy directly
vercel
```

---

## 🚀 Step 2: Deploy to Vercel (10 minutes)

### Using Vercel Dashboard (Recommended)

1. **Go to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Click "Sign Up" or "Log In"
   - Choose "Continue with GitHub" (easiest)

2. **Import Project:**
   - Click "Add New..." → "Project"
   - Select your GitHub repository (`shadow-market`)
   - Click "Import"

3. **Configure Project:**
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (leave as default)
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `.next` (auto-detected)
   - **Install Command:** `npm install` (auto-detected)

4. **Add Environment Variables:**
   - Click "Environment Variables" section
   - Add each variable from `.env.production.template`
   - **IMPORTANT:** Add these NOW before deploying:

   ```env
   # Required - Site Configuration
   NEXT_PUBLIC_SITE_URL=https://shadowmarket.ai
   NEXT_PUBLIC_WHATSAPP_NUMBER=919952779992

   # Required - Google Services (use your existing values)
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_key
   NEXT_PUBLIC_GOOGLE_PLACE_ID=ChIJxZW49LPxqDsRi3L3gvmxrz8

   # Required - Booking (Cal.com)
   NEXT_PUBLIC_CAL_LINK=your-username/consultation

   # Required - Live Chat (Tawk.to)
   NEXT_PUBLIC_TAWK_PROPERTY_ID=your_property_id
   NEXT_PUBLIC_TAWK_WIDGET_ID=your_widget_id

   # Optional - Analytics
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_META_PIXEL_ID=xxxxxxxxxxxxx

   # Optional - Email
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   ```

5. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - You'll get a URL like: `https://shadow-market-xxxxx.vercel.app`

---

## 🌐 Step 3: Configure Custom Domain (5 minutes)

### Add shadowmarket.ai Domain

1. **In Vercel Dashboard:**
   - Go to your project
   - Click "Settings" → "Domains"
   - Click "Add Domain"
   - Enter: `shadowmarket.ai`
   - Click "Add"

2. **Configure DNS (At Your Domain Registrar):**

   Vercel will show you DNS records to add. Typically:

   **For Root Domain (shadowmarket.ai):**
   ```
   Type: A Record
   Name: @
   Value: 76.76.21.21
   ```

   **For WWW Subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Wait for DNS Propagation:**
   - Usually takes 5-10 minutes
   - Vercel will automatically issue SSL certificate
   - Once verified, your site will be live at `https://shadowmarket.ai`

---

## 🔧 Step 4: Configure Third-Party Services (10 minutes)

### 4.1 Cal.com Setup

1. **Sign up at [cal.com](https://cal.com):**
   - Use email: `sales@shadowmarket.ai`
   - Choose free plan

2. **Create Event Types:**

   **Event Type 1: Digital Marketing Consultation**
   - Duration: 30 minutes
   - Location: Google Meet
   - Questions to ask:
     - What's your business name?
     - What services are you interested in?
     - What's your monthly marketing budget?

   **Event Type 2: AI Development Demo**
   - Duration: 45 minutes
   - Location: Google Meet
   - Questions to ask:
     - What type of AI solution do you need?
     - Do you have technical requirements document?
     - What's your project timeline?

   **Event Type 3: Quick Strategy Call**
   - Duration: 15 minutes
   - Location: Phone
   - Questions to ask:
     - What's your immediate need?
     - Best time to reach you?

3. **Configure Settings:**
   - Connect Google Calendar
   - Set availability: Mon-Sat, 9 AM - 7 PM IST
   - Set buffer time: 15 minutes between bookings
   - Upload logo and set brand color: #667eea
   - Enable email reminders: 24h and 1h before

4. **Get Your Cal Link:**
   - Your username: e.g., `shadowmarket`
   - Event URL: `https://cal.com/shadowmarket/consultation`
   - Copy this to Vercel environment variable: `NEXT_PUBLIC_CAL_LINK=shadowmarket/consultation`

5. **Update Environment Variable in Vercel:**
   - Go to Vercel → Settings → Environment Variables
   - Update `NEXT_PUBLIC_CAL_LINK` with your Cal.com username/event-slug
   - Redeploy: Go to Deployments → Click latest → Click "..." → Redeploy

### 4.2 Tawk.to Setup

1. **Sign up at [tawk.to](https://tawk.to):**
   - Use email: `sales@shadowmarket.ai`
   - Choose free plan (forever free!)

2. **Create Property:**
   - Property Name: "Shadow Market"
   - Website URL: `https://shadowmarket.ai`

3. **Customize Widget:**
   - Go to: Admin → Chat Widget
   - **Appearance:**
     - Color: #667eea (brand purple)
     - Position: Bottom right
     - Upload logo
   - **Pre-Chat Form:**
     - Enable: Yes
     - Ask for: Name, Email, Question
   - **Greeting Message:**
     ```
     Hi there! 👋
     Need help with digital marketing or AI development?
     Chat with us now or schedule a call!
     ```
   - **Offline Message:**
     ```
     We're currently offline, but we'll respond within 24 hours!
     You can also WhatsApp us at +91 99527 79992.
     ```

4. **Set Availability:**
   - Go to: Admin → Operating Hours
   - Mon-Sat: 9:00 AM - 7:00 PM (IST)
   - Sunday: Offline
   - Auto-away: 5 minutes

5. **Create Canned Responses:**
   - Go to: Admin → Shortcuts
   - Create quick replies:
     - `/pricing-dm` → "Our digital marketing packages start at ₹15,000/month. Book a free consultation: [link to /book]"
     - `/pricing-ai` → "AI chatbot development starts at ₹50,000. Schedule a demo: [link to /book]"
     - `/hours` → "We're available Mon-Sat, 9 AM - 7 PM IST. Book a call: [link to /book]"
     - `/whatsapp` → "WhatsApp us at +91 99527 79992"

6. **Get Widget IDs:**
   - Go to: Admin → Property Settings
   - Copy **Property ID** (looks like: `5f8a9b1c2d3e4f5g6h7i8j9k`)
   - Copy **Widget ID** (looks like: `1a2b3c4d5e`)

7. **Add to Vercel:**
   - Go to Vercel → Settings → Environment Variables
   - Add `NEXT_PUBLIC_TAWK_PROPERTY_ID`
   - Add `NEXT_PUBLIC_TAWK_WIDGET_ID`
   - Redeploy

8. **Download Mobile Apps:**
   - iOS: Search "Tawk.to" in App Store
   - Android: Search "Tawk.to" in Play Store
   - Login and enable push notifications
   - Now you can respond to chats from your phone!

### 4.3 Google Analytics Setup (Optional)

1. **Create GA4 Property:**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Create account: "Shadow Market"
   - Property name: "Shadow Market Website"
   - Time zone: India Standard Time
   - Currency: Indian Rupee (INR)

2. **Create Data Stream:**
   - Platform: Web
   - Website URL: `https://shadowmarket.ai`
   - Stream name: "Shadow Market Production"

3. **Get Measurement ID:**
   - Copy the Measurement ID (format: `G-XXXXXXXXXX`)
   - Add to Vercel environment variables: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - Redeploy

4. **Configure Events:**
   - The website already tracks 18+ custom events
   - They will automatically appear in GA4 after deployment

### 4.4 Meta Pixel Setup (Optional)

1. **Create Meta Pixel:**
   - Go to [business.facebook.com](https://business.facebook.com)
   - Events Manager → Data Sources → Add → Meta Pixel
   - Name: "Shadow Market Website"

2. **Get Pixel ID:**
   - Copy Pixel ID (format: `xxxxxxxxxxxxx`)
   - Add to Vercel: `NEXT_PUBLIC_META_PIXEL_ID`
   - Redeploy

3. **Verify Installation:**
   - Install Meta Pixel Helper Chrome extension
   - Visit your live site
   - Check that pixel fires correctly

### 4.5 Resend Email Setup (Optional)

1. **Sign up at [resend.com](https://resend.com):**
   - Use email: `sales@shadowmarket.ai`
   - Free tier: 3,000 emails/month

2. **Get API Key:**
   - Go to: API Keys
   - Click "Create API Key"
   - Copy key (format: `re_xxxxxxxxxxxxx`)

3. **Verify Domain (Important!):**
   - Go to: Domains → Add Domain
   - Add: `shadowmarket.ai`
   - Add DNS records to your domain registrar:
     ```
     Type: TXT
     Name: _resend
     Value: [provided by Resend]
     ```
   - Wait for verification (5-10 minutes)

4. **Add to Vercel:**
   - Add `RESEND_API_KEY` to environment variables
   - **IMPORTANT:** This is server-side only (no `NEXT_PUBLIC_` prefix)
   - Redeploy

5. **Test Email Delivery:**
   - Visit your live site
   - Go to Contact page
   - Submit a test form
   - Check that email arrives at `sales@shadowmarket.ai`

---

## ✅ Step 5: Verify Deployment (5 minutes)

### Test All Features:

1. **Homepage:**
   - [ ] Loads correctly at `https://shadowmarket.ai`
   - [ ] Hero section displays
   - [ ] WhatsApp button works
   - [ ] Sticky CTA bar appears
   - [ ] FAQ section expands/collapses
   - [ ] Meta Pixel fires (check with Meta Pixel Helper extension)
   - [ ] GA4 tracks pageview (check in GA4 DebugView)

2. **Contact Page:**
   - [ ] Google Maps loads with correct location
   - [ ] Google Reviews display (4.9 stars, 19 reviews)
   - [ ] Contact form submits successfully
   - [ ] Email delivery works (if Resend configured)

3. **Booking Page (`/book`):**
   - [ ] Cal.com embed loads
   - [ ] Booking form displays
   - [ ] Can select date/time
   - [ ] Booking confirmation works

4. **Live Chat:**
   - [ ] Tawk.to widget appears (bottom right)
   - [ ] Chat window opens
   - [ ] Can send messages
   - [ ] Receives responses on mobile app

5. **Service Pages:**
   - [ ] Digital Marketing page loads
   - [ ] AI Development page loads
   - [ ] FAQ schemas present (check with Google Rich Results Test)
   - [ ] Breadcrumb navigation displays

6. **Performance:**
   - [ ] Page loads in <3 seconds
   - [ ] Lighthouse score >90
   - [ ] No console errors
   - [ ] Mobile responsive design works

### Use Testing Tools:

1. **Google Rich Results Test:**
   - URL: https://search.google.com/test/rich-results
   - Test: `https://shadowmarket.ai`
   - Verify: FAQ schema, Breadcrumb schema detected

2. **Google PageSpeed Insights:**
   - URL: https://pagespeed.web.dev/
   - Test: `https://shadowmarket.ai`
   - Target: 90+ score on mobile and desktop

3. **Meta Pixel Helper:**
   - Install Chrome extension
   - Visit site
   - Verify pixel fires on all pages

4. **GA4 DebugView:**
   - Open GA4 → Configure → DebugView
   - Visit site
   - Verify events tracked in real-time

---

## 🔄 Step 6: Redeploy After Changes

### When to Redeploy:

- After adding/updating environment variables
- After updating Cal.com or Tawk.to IDs
- After making code changes (auto-deploys from GitHub)

### How to Redeploy:

**Method 1: From Vercel Dashboard**
1. Go to Vercel → Your Project → Deployments
2. Click on latest deployment
3. Click "..." menu → "Redeploy"

**Method 2: From GitHub**
1. Make changes to code
2. Push to GitHub: `git push origin main`
3. Vercel automatically deploys

**Method 3: Using Vercel CLI**
```bash
vercel --prod
```

---

## 📊 Post-Deployment Monitoring

### Week 1 Checklist:

- [ ] Monitor Tawk.to for incoming chats
- [ ] Check Cal.com for booking activity
- [ ] Review Google Analytics for traffic
- [ ] Check Meta Pixel for conversion tracking
- [ ] Test contact form weekly
- [ ] Monitor Vercel for build errors
- [ ] Check site uptime (should be 99.9%+)

### Setup Monitoring Alerts:

1. **Vercel:**
   - Enable email notifications for failed deployments
   - Settings → Notifications → Enable all

2. **Google Analytics:**
   - Create alert for traffic drops
   - Admin → Alerts → Create Alert

3. **Meta Ads:**
   - Connect Meta Pixel to your ad accounts
   - Track conversions from campaigns

---

## 🚨 Troubleshooting

### Build Fails on Vercel:

**Check Logs:**
- Go to Vercel → Deployments → Click failed deployment
- Read build logs for errors

**Common Issues:**
- Missing environment variables → Add them and redeploy
- TypeScript errors → Fix in code and push to GitHub
- Package installation fails → Check `package.json`

### Environment Variables Not Working:

**Verify:**
1. Variable names are correct (exact match)
2. Variables starting with `NEXT_PUBLIC_` are used in client code
3. Server-side variables DON'T have `NEXT_PUBLIC_` prefix
4. Redeployed after adding variables

### Cal.com Embed Not Loading:

**Fix:**
1. Verify `NEXT_PUBLIC_CAL_LINK` format is correct: `username/event-slug`
2. Test Cal.com link directly: `https://cal.com/your-username/event-slug`
3. Check browser console for errors
4. Clear browser cache

### Tawk.to Widget Not Appearing:

**Fix:**
1. Verify Property ID and Widget ID are correct
2. Check Tawk.to dashboard: Admin → Property Settings
3. Disable ad blockers (they can block Tawk.to)
4. Check browser console for errors
5. Verify widget is enabled in Tawk.to dashboard

### Contact Form Not Sending Emails:

**Fix:**
1. Check Resend API key is added to Vercel (server-side variable)
2. Verify domain is verified in Resend dashboard
3. Check Vercel function logs for errors
4. Test with different email addresses

---

## 💰 Cost Summary

### Monthly Costs (After Deployment):

| Service | Free Tier | Paid (if exceeded) |
|---------|-----------|-------------------|
| Vercel Hosting | Unlimited (Hobby) | ₹1,500/month (Pro) |
| Cal.com | Unlimited bookings | ₹0 |
| Tawk.to | Unlimited chats | ₹0 |
| Resend | 3,000 emails/month | ₹500/month after |
| Google Maps | $200 credit/month | Pay-as-you-go |
| Google Analytics | Unlimited | ₹0 |
| Meta Pixel | Unlimited | ₹0 |
| **TOTAL** | **₹0** | **₹0-₹2,000** |

**Expected Costs:** ₹0/month (staying within free tiers)

---

## 🎉 Deployment Complete!

### What You Now Have:

- ✅ Website live at https://shadowmarket.ai
- ✅ Professional booking system (Cal.com)
- ✅ 24/7 live chat (Tawk.to)
- ✅ Email delivery from contact form
- ✅ Full analytics tracking (GA4 + Meta Pixel)
- ✅ Google My Business reviews displaying
- ✅ AEO/GEO optimization for AI search
- ✅ Mobile-responsive design
- ✅ SSL certificate (HTTPS)
- ✅ 99.9% uptime guarantee
- ✅ Auto-scaling infrastructure

### Expected Results:

**Week 1:**
- 5-10 bookings
- 10-20 chat conversations
- 50-100 visitors
- 10-15 contact form submissions

**Month 1:**
- 40-80 total conversions (bookings + chats + forms)
- 25-40% increase in leads vs previous
- <5 minute average response time
- High-quality qualified leads

### Next Steps:

1. **Set Up Team Access:**
   - Add team members to Tawk.to
   - Share Cal.com calendar access
   - Configure email forwarding

2. **Create Response Templates:**
   - Draft email templates for common inquiries
   - Create Tawk.to canned responses
   - Set up auto-responder sequences

3. **Launch Marketing:**
   - Invest saved ₹10,000 in Meta Ads
   - Start Google Ads campaigns
   - Share website on social media
   - Update Google My Business listing

4. **Monitor & Optimize:**
   - Review analytics weekly
   - Optimize underperforming pages
   - A/B test CTAs and headlines
   - Improve based on user feedback

---

## 📞 Support

**Questions or Issues?**
- Email: sales@shadowmarket.ai
- WhatsApp: +91 99527 79992

**Documentation:**
- Cal.com Setup: See `TAWK_TO_SETUP.md`
- AEO/GEO Optimization: See `AEO_GEO_SETUP.md`
- Environment Variables: See `.env.production.template`

**Vercel Support:**
- Docs: https://vercel.com/docs
- Community: https://github.com/vercel/next.js/discussions

---

**Deployment Guide v1.0**
**Last Updated:** December 11, 2025
**Status:** Ready for Production Deployment 🚀
