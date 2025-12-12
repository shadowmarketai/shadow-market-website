# Microsoft Clarity Setup Guide

Complete guide for setting up Microsoft Clarity heatmaps and session recordings for Shadow Market website.

## Quick Start

1. Sign up at https://clarity.microsoft.com
2. Create project for shadowmarket.ai
3. Copy Project ID
4. Add to environment: NEXT_PUBLIC_CLARITY_PROJECT_ID=your_project_id
5. Deploy and verify

## What is Microsoft Clarity?

100% FREE user behavior analytics:
- Session Recordings
- Click/Scroll Heatmaps  
- Rage Click Detection
- Dead Click Detection
- JavaScript Error Tracking
- GDPR Compliant

Cost: ₹0 forever, unlimited sessions

## Benefits

- See exactly how users interact with your site
- Identify UX issues (rage clicks, dead clicks)
- Optimize conversion funnel
- Complement GA4 and Meta Pixel data
- No cost, no limits

## Installation Status

✅ Components created:
- components/analytics/Clarity.tsx
- components/analytics/ClarityWrapper.tsx  
- lib/clarity.ts

✅ Integrated into app/layout.tsx

✅ Environment variable added to .env.example

## Setup Instructions

### 1. Create Account
- Go to clarity.microsoft.com
- Sign in with Microsoft/Google/Facebook account

### 2. Create Project
- Click Add New Project
- Name: Shadow Market Website
- URL: https://shadowmarket.ai

### 3. Get Project ID
- Copy the Project ID from Settings > Setup
- Format: abcd1234efgh

### 4. Add to Environment

Local (.env.local):


Production (Vercel/Hostinger):
Add environment variable in platform settings

### 5. Deploy
- Deploy to production
- Wait 2-3 minutes
- Check Clarity dashboard for live sessions

## Verification

1. Open Network tab in DevTools
2. Look for clarity.ms requests
3. Visit Clarity dashboard - Dashboard section
4. Should see sessions within 2-3 minutes

## Features

### Session Recordings
- Watch real user sessions
- See mouse movements, clicks, scrolls
- Identify confusion points

### Heatmaps  
- Click heatmaps - where users click
- Scroll heatmaps - how far users scroll
- Requires 100+ page views, wait 24 hours

### Insights
- Rage clicks - repeated frustrated clicking
- Dead clicks - clicks on non-interactive elements
- Quick backs - users leaving immediately
- JavaScript errors - bugs affecting UX

## Custom Tracking

Pre-configured events in lib/clarity.ts:



## Privacy & GDPR

- Automatic PII masking (emails, phones, cards)
- IP anonymization available
- Cookie consent respect
- GDPR compliant by default

Add to Privacy Policy:
"We use Microsoft Clarity to understand user interaction. Data is anonymized. Learn more: https://privacy.microsoft.com"

## Troubleshooting

**Clarity not loading:**
- Check NEXT_PUBLIC_CLARITY_PROJECT_ID in env
- Restart server after adding env variable
- Clear browser cache

**No sessions appearing:**
- Wait 2-3 minutes after first visit
- Visit site and interact for 30+ seconds
- Refresh Clarity dashboard

**Heatmaps not showing:**
- Requires 100+ page views
- Wait 24 hours after installation
- Check specific page heatmaps

## Best Practices

- Review sessions weekly
- Focus on high-traffic pages
- Watch rage click sessions first
- Document and fix UX issues
- Compare before/after metrics

## ROI Example

Before: 2% form conversion, 20 leads/month
After fixing issues found in Clarity: 3.5% conversion, 35 leads/month
Result: +75% leads, ₹0 cost

## Resources

- Docs: https://docs.microsoft.com/clarity
- Support: https://clarity.microsoft.com/support
- Dashboard: https://clarity.microsoft.com

## Summary

✅ Free forever
✅ Unlimited sessions and recordings
✅ GDPR compliant
✅ Integrated into Shadow Market
✅ Ready to deploy

Next: Deploy, wait 24h, review first sessions, optimize UX!
