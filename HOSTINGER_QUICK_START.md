# Hostinger Deployment - Quick Start Guide

Get Shadow Market website deployed to Hostinger in 30 minutes.

## Prerequisites
- Hostinger Premium Web Hosting account (Rs449/month)
- GitHub account
- Successful local build (`npm run build`)

## 5-Step Deployment

### 1. Setup GitHub Repository (5 min)
```bash
cd D:\SHADOW-MARKET\claude-agents\shadow-market-website
git init
git add .
git commit -m "Initial commit - Ready for Hostinger deployment"
git remote add origin https://github.com/YOUR_USERNAME/shadow-market-website.git
git branch -M main
git push -u origin main
```

### 2. Create Node.js App in Hostinger (10 min)
1. Login to hPanel: https://hpanel.hostinger.com
2. Go to **Websites** → **Add Website**
3. Select **Node.js Apps**
4. Click **Import from Git**
5. Authorize GitHub access
6. Select repository: `shadow-market-website`
7. Select branch: `main`

### 3. Configure Build Settings (5 min)
- **Framework:** Next.js (auto-detected)
- **Node Version:** 20.x
- **Build Command:** `npm run build`
- **Start Command:** `npm run start:hostinger`
- **Output Directory:** `.next`
- **Install Command:** `npm install`

### 4. Add Environment Variables (5 min)
Copy all from `.env.local` to Hostinger environment variables:
- NEXT_PUBLIC_SITE_URL
- NEXT_PUBLIC_WHATSAPP_NUMBER
- NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
- NEXT_PUBLIC_GOOGLE_PLACE_ID
- NEXT_PUBLIC_CAL_LINK
- NEXT_PUBLIC_TAWK_PROPERTY_ID
- NEXT_PUBLIC_TAWK_WIDGET_ID
- NEXT_PUBLIC_GA_MEASUREMENT_ID
- NEXT_PUBLIC_META_PIXEL_ID
- NEXT_PUBLIC_CLARITY_PROJECT_ID
- RESEND_API_KEY
- CONTACT_EMAIL
- NODE_ENV=production

### 5. Deploy & Verify (5 min)
1. Click **Deploy**
2. Monitor build logs (3-5 minutes)
3. Visit temporary URL (provided after build)
4. Verify homepage loads
5. Test contact form
6. Check analytics loading

## Domain Setup (Optional - 15 min)
1. Go to **Domains** in hPanel
2. Add domain: `shadowmarket.ai`
3. Get IP address from deployment
4. Update DNS at registrar:
   - A record: `@` → `[Hostinger IP]`
   - CNAME: `www` → `[app-name].hostinger.app`
5. Wait 10-30 minutes for propagation
6. SSL auto-generates (Let's Encrypt)

## Redeployment
```bash
# Make changes locally
git add .
git commit -m "Update description"
git push origin main

# Hostinger auto-deploys (3-5 min)
```

## Troubleshooting
- **Build fails:** Check logs in hPanel → Deployments
- **Env vars not working:** Redeploy after adding variables
- **Domain not working:** Wait for DNS propagation (10-30 min)
- **Port errors:** Ensure using `start:hostinger` script

## Costs
- Hosting: Rs449/month (already purchased)
- All other services: Rs0 (free tools)
- **Total: Rs449/month**

## Support
- Hostinger: https://support.hostinger.com
- Documentation: Check DEPLOYMENT_GUIDE.md for details

**Status:** Configuration complete, ready to deploy! 🚀
