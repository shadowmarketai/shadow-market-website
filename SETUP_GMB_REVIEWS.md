# Setup Google My Business Reviews

## Current Issue
Your Google My Business reviews are not showing because the **Google Place ID** is not configured.

Error in logs: `GMB API Error: Request failed with status code 400`

## How to Fix

### Step 1: Get Your Google Place ID

**Method 1 - Using Place ID Finder (Recommended)**
1. Go to: https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
2. Search for: "SHADOW MARKET Coimbatore" or your business address
3. Click on your business marker on the map
4. Copy the **Place ID** from the results (format: `ChIJxxxxxxxxxxxxx`)

**Method 2 - From Google Maps**
1. Open Google Maps: https://maps.google.com
2. Search for your business
3. Click on your business
4. Look at the URL - you'll see something like: `https://www.google.com/maps/place/.../@11.0168,76.9558...`
5. Or use the "Share" button and copy the link

**Method 3 - Using This Tool**
```bash
# In your browser console on Google Maps with your business open:
console.log(new URLSearchParams(window.location.search).get('ftid'))
```

### Step 2: Update .env.local

Once you have your Place ID:

1. Open: `D:\SHADOW-MARKET\claude-agents\shadow-market-website\.env.local`

2. Find line 22:
```
NEXT_PUBLIC_GOOGLE_PLACE_ID=YOUR_PLACE_ID_HERE
```

3. Replace with your actual Place ID:
```
NEXT_PUBLIC_GOOGLE_PLACE_ID=ChIJxxxxxxxxxxxxxxxxxxx
```

### Step 3: Restart Development Server

1. Stop the current server (Press Ctrl+C in terminal)
2. Start again:
```bash
npm run dev
```

### Step 4: Verify It Works

1. Go to: http://localhost:3000/contact
2. Scroll down to the reviews section
3. You should see your actual Google reviews!

## What's Been Fixed

✅ Contact form now has real API endpoint
✅ Contact form sends emails (once Resend API key is added)
✅ Portfolio page now uses GMB reviews component
✅ GoogleMapContainer error fixed
✅ BusinessReviews component ready to display real reviews

⚠️ **Only missing:** Your actual Google Place ID

## Optional: Email Setup (Contact Form)

To actually send emails from the contact form:

1. Sign up for Resend: https://resend.com/signup (100 emails/day free)
2. Get your API key
3. Add to `.env.local`:
```
RESEND_API_KEY=re_your_actual_key_here
```

For now, the contact form works but logs submissions to the console.

## Need Help?

If you can't find your Place ID, provide me with:
- Your business name: "SHADOW MARKET"
- Your city: "Coimbatore"
- Your exact address

And I can help you locate it!
