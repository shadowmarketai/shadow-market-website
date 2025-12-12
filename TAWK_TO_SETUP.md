# Tawk.to Live Chat Setup Guide

## 🎉 What's Been Implemented

Your website now has a professional live chat system ready to go! Here's what's been added:

### ✅ Components Created:
- `components/chat/TawkToChat.tsx` - Live chat widget component
- Integrated into `app/layout.tsx` - Loads on every page
- Environment variables added to `.env.local`

### ✅ Features:
- **100% FREE** - Unlimited agents, unlimited conversations forever
- **Mobile Apps** - Respond on the go (iOS & Android)
- **Analytics Integration** - Tracks chat events with GA4 and Meta Pixel
- **Customizable** - Full control over colors, greetings, and positioning
- **Smart Tracking** - Automatically tracks:
  - Chat opens/closes
  - Conversation starts
  - Messages sent/received
  - Lead generation events

---

## 📋 Setup Instructions (5 Minutes)

### Step 1: Create Tawk.to Account

1. Go to **https://tawk.to**
2. Click **"Sign Up Free"**
3. Create account with your email: `sales@shadowmarket.ai`
4. Verify your email

### Step 2: Create a Property

1. After login, you'll be asked to create a property
2. **Property Name:** Shadow Market
3. **Website URL:** https://shadowmarket.ai (or your current URL)
4. Click **"Add Property"**

### Step 3: Get Your Credentials

1. Go to **Dashboard** (left sidebar)
2. Click **Administration** → **Property Settings**
3. Scroll down to **"Direct Chat Link"** section
4. You'll see a code snippet like this:

```html
<!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/PROPERTY_ID/WIDGET_ID';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->
```

5. Copy the **PROPERTY_ID** (after `embed.tawk.to/`)
6. Copy the **WIDGET_ID** (after the property ID, separated by `/`)

### Step 4: Add Credentials to Your Website

1. Open `.env.local` in your project
2. Add your credentials:

```env
NEXT_PUBLIC_TAWK_PROPERTY_ID=your_property_id_here
NEXT_PUBLIC_TAWK_WIDGET_ID=your_widget_id_here
```

3. Save the file
4. Restart your development server:

```bash
# Stop the current server (Ctrl+C)
npm run dev
```

5. Visit http://localhost:3000
6. **You should see the chat widget in the bottom-right corner!** 🎉

---

## 🎨 Customization (Recommended)

### Step 1: Customize Widget Appearance

1. Go to **Administration** → **Widget Settings**
2. **Appearance Tab:**
   - **Widget Color:** `#667eea` (matches your brand)
   - **Widget Position:** Bottom Right
   - **Widget Size:** Normal
   - **Chat Icon:** Default bubble

3. **Chat Window Tab:**
   - **Chat Window Title:** "Shadow Market Support"
   - **Welcome Message:** "Hi! 👋 Need help with digital marketing or AI development?"

4. Click **Save Changes**

### Step 2: Set Business Hours

1. Go to **Administration** → **Operating Hours**
2. Set your availability:
   - **Monday - Saturday:** 9:00 AM - 7:00 PM (IST)
   - **Sunday:** Offline
3. **Auto-Away Timer:** 5 minutes
4. Click **Save**

### Step 3: Create Canned Responses (Quick Replies)

Canned responses let you reply instantly with pre-written messages.

1. Go to **Administration** → **Canned Responses**
2. Click **"Add Canned Response"**

**Recommended Canned Responses:**

#### 1. Greeting
- **Shortcut:** `/greet`
- **Message:**
  ```
  Hi there! 👋 Welcome to Shadow Market!

  I'm here to help with:
  - Digital Marketing (Meta Ads, Google Ads, SEO)
  - AI Development (Chatbots, Automation)
  - Web Development

  What can I help you with today?
  ```

#### 2. Pricing - Digital Marketing
- **Shortcut:** `/pricing-dm`
- **Message:**
  ```
  Our digital marketing packages start at:

  📱 Social Media Management: ₹15,000/month
  🎯 Meta Ads Campaign: ₹25,000/month
  🔍 SEO Optimization: ₹20,000/month
  📊 Full-Service Marketing: ₹40,000/month

  Want to schedule a free consultation?
  👉 Visit: http://localhost:3000/book
  ```

#### 3. Pricing - AI Development
- **Shortcut:** `/pricing-ai`
- **Message:**
  ```
  Our AI development services:

  🤖 Basic Chatbot: ₹50,000 one-time
  🧠 Advanced AI Chatbot (RAG): ₹2-5 lakhs
  ⚡ Marketing Automation: ₹30,000-₹1 lakh
  🔧 Custom AI Solutions: Custom pricing

  Book a demo: http://localhost:3000/book
  ```

#### 4. Business Hours
- **Shortcut:** `/hours`
- **Message:**
  ```
  Our business hours:
  🕐 Monday - Saturday: 9:00 AM - 7:00 PM IST
  📴 Sunday: Offline

  We respond to all messages within 24 hours!

  For urgent inquiries:
  📞 Call: +91 99527 79992
  💬 WhatsApp: +91 99527 79992
  ```

#### 5. Book Consultation
- **Shortcut:** `/book`
- **Message:**
  ```
  Great! Let's schedule a free consultation! 📅

  👉 Book here: http://localhost:3000/book

  Choose from:
  - 15-min Quick Strategy Call
  - 30-min Marketing Consultation
  - 45-min AI Development Demo

  Looking forward to speaking with you!
  ```

#### 6. WhatsApp
- **Shortcut:** `/whatsapp`
- **Message:**
  ```
  You can also reach us on WhatsApp! 💬

  📱 WhatsApp: +91 99527 79992

  Just send us a message and we'll respond quickly!
  ```

---

## 📱 Mobile App Setup (Respond Anywhere)

### Download the Apps:

1. **iOS:** Search "Tawk.to Live Chat" in App Store
2. **Android:** Search "Tawk.to Live Chat" in Play Store

### Setup:

1. Download and install the app
2. Login with your Tawk.to account
3. **Enable Push Notifications** (Important!)
4. You'll now receive instant notifications for new chats

### Benefits:

- ✅ Respond to chats from anywhere
- ✅ Push notifications for new messages
- ✅ Access chat history
- ✅ View visitor information
- ✅ Use canned responses on mobile

---

## 🎯 Using Canned Responses

### In Desktop Chat Dashboard:

1. When chatting with a visitor
2. Type `/` in the message box
3. You'll see a dropdown of your canned responses
4. Select one or type the shortcut (e.g., `/greet`)
5. Hit Enter to send

### In Mobile App:

1. Tap the message box
2. Tap the **"+"** icon
3. Select **"Canned Responses"**
4. Choose the response you want to send

---

## 📊 Analytics & Tracking

### What's Being Tracked:

Your chat widget automatically tracks these events:

#### Google Analytics 4:
- `tawk_widget_loaded` - Widget loads on page
- `chat_opened` - User opens the chat
- `chat_minimized` - User closes the chat
- `chat_started` - Conversation begins
- `generate_lead` - Chat lead generated (₹300 value)
- `chat_message_sent` - User sends a message
- `chat_agent_response` - You respond
- `chat_ended` - Conversation ends

#### Meta Pixel:
- `ChatOpened` - Custom event
- `Lead` - Standard lead event (₹300 value)
- `ChatStarted` - Custom event
- `ChatEnded` - Custom event

### View Analytics:

1. **Tawk.to Dashboard:**
   - Go to **Dashboard** → **Analytics**
   - View chat volume, response times, satisfaction ratings

2. **Google Analytics:**
   - Events → All Events
   - Filter by "chat" events

3. **Meta Events Manager:**
   - Test Events to see live events
   - Custom Conversions to track chat leads

---

## 🧪 Testing Your Chat Widget

### Step 1: Test on Localhost

1. Visit http://localhost:3000
2. Look for the chat bubble in the bottom-right corner
3. Click it to open
4. Send a test message

### Step 2: Test Admin Dashboard

1. Go to Tawk.to Dashboard
2. You should see your test chat in **"Monitoring"**
3. Click on it and reply

### Step 3: Test Mobile App

1. Open the Tawk.to mobile app
2. You should see your test chat
3. Reply from the mobile app
4. Check that the reply shows up on your website

### Step 4: Test Canned Responses

1. In the admin dashboard, open a chat
2. Type `/greet` and hit Enter
3. Verify the canned response is sent

---

## 🚨 Troubleshooting

### Chat widget not showing?

1. **Check environment variables:**
   - Open `.env.local`
   - Verify `NEXT_PUBLIC_TAWK_PROPERTY_ID` is set
   - Verify `NEXT_PUBLIC_TAWK_WIDGET_ID` is set

2. **Check browser console:**
   - Press F12 → Console tab
   - Look for Tawk.to error messages
   - Should see: "✅ Tawk.to chat widget loaded successfully"

3. **Restart development server:**
   ```bash
   # Stop current server
   npm run dev
   ```

4. **Clear browser cache:**
   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

### Widget showing but not receiving messages?

1. Check your Tawk.to dashboard login
2. Verify property is active (not paused)
3. Check you're online in the dashboard (green status)

### Analytics not tracking?

1. Verify GA4 and Meta Pixel IDs are set in `.env.local`
2. Check browser console for tracking events
3. Use GA4 DebugView to see real-time events

---

## 📈 Best Practices

### 1. Set Expectations
- Always show your business hours
- Set an offline message: "We're offline but will respond within 24h!"

### 2. Respond Quickly
- Aim for <5 minute response time during business hours
- Use mobile app to respond on the go

### 3. Use Canned Responses
- Saves time for common questions
- Ensures consistent messaging
- Add new ones as you get common questions

### 4. Qualify Leads
- Ask: "What services are you interested in?"
- Ask: "What's your budget?"
- Ask: "When do you want to start?"

### 5. Move to Other Channels
- For complex discussions, schedule a call: `/book`
- For quick chats, move to WhatsApp: `/whatsapp`

### 6. Monitor Analytics
- Check chat volume weekly
- Track conversion rate (chats → leads)
- Monitor response times

---

## 🎉 You're All Set!

Your live chat is now ready to capture leads and provide instant support!

### Quick Checklist:

- [ ] Tawk.to account created
- [ ] Property ID and Widget ID added to `.env.local`
- [ ] Widget appears on website
- [ ] Customized colors and greeting
- [ ] Business hours set
- [ ] Canned responses created
- [ ] Mobile app installed
- [ ] Push notifications enabled
- [ ] Test chat sent and received

---

## 📞 Support

If you need help with Tawk.to setup:

- **Tawk.to Support:** https://www.tawk.to/knowledgebase/
- **Tawk.to Community:** https://community.tawk.to/

---

**Last Updated:** December 10, 2025
**Status:** ✅ Live Chat System Ready
**Integration:** Complete
**Cost:** ₹0 (FREE Forever!)
