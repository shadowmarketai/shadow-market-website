"use client";

import { Metadata } from "next";
import { useState } from "react";
import dynamic from 'next/dynamic';
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";

// Lazy load map components for performance
const GoogleMapContainer = dynamic(
  () => import('@/components/maps/GoogleMapContainer'),
  {
    loading: () => <div className="h-[500px] bg-muted animate-pulse rounded-xl" />,
    ssr: false
  }
);

const DirectionsPanel = dynamic(
  () => import('@/components/maps/DirectionsPanel'),
  { ssr: false }
);

const BusinessHours = dynamic(
  () => import('@/components/business/BusinessHours'),
  { loading: () => <div className="h-64 bg-muted animate-pulse rounded-xl" /> }
);

const BusinessReviews = dynamic(
  () => import('@/components/business/BusinessReviews')
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Call the actual API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to send message');
      }

      // Success - clear form
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });

      // Track successful submission
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "form_submit", {
          event_category: "engagement",
          event_label: "contact_form",
          value: formData.service,
        });
      }

    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl top-10 right-10 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl bottom-10 left-10 animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Let's Transform Your Business
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Ready to grow with digital marketing and AI development? Get in touch for a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-6">
                Get In Touch
              </h2>
              <p className="text-[hsl(var(--muted-foreground))] mb-8 text-lg">
                We're here to help your business grow. Reach out to us through any of these channels,
                or fill out the form and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[hsl(var(--primary))]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[hsl(var(--primary))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[hsl(var(--foreground))] mb-1">Email</h3>
                    <a
                      href={`mailto:${SITE_CONFIG.contact.email}`}
                      className="text-[hsl(var(--primary))] hover:underline"
                    >
                      {SITE_CONFIG.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[hsl(var(--primary))]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[hsl(var(--primary))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[hsl(var(--foreground))] mb-1">Phone</h3>
                    <a
                      href={`tel:${SITE_CONFIG.contact.phone}`}
                      className="text-[hsl(var(--primary))] hover:underline"
                    >
                      {SITE_CONFIG.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[hsl(var(--primary))]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[hsl(var(--primary))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[hsl(var(--foreground))] mb-1">Location</h3>
                    <p className="text-[hsl(var(--muted-foreground))]">
                      {SITE_CONFIG.location.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[hsl(var(--primary))]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[hsl(var(--primary))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[hsl(var(--foreground))] mb-1">Business Hours</h3>
                    <p className="text-[hsl(var(--muted-foreground))]">
                      Mon - Sat: 9:00 AM - 7:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-[hsl(var(--muted))] rounded-xl">
                <h3 className="font-bold text-[hsl(var(--foreground))] mb-2">
                  Prefer WhatsApp?
                </h3>
                <p className="text-[hsl(var(--muted-foreground))] mb-4">
                  Get instant responses on WhatsApp
                </p>
                <a
                  href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent("Hi! I'd like to discuss my project with SHADOW MARKET.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="default" className="w-full">
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[hsl(var(--muted))] rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-6">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[hsl(var(--foreground))] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[hsl(var(--border))] bg-white focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[hsl(var(--foreground))] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[hsl(var(--border))] bg-white focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[hsl(var(--foreground))] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[hsl(var(--border))] bg-white focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[hsl(var(--foreground))] mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[hsl(var(--border))] bg-white focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-[hsl(var(--foreground))] mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[hsl(var(--border))] bg-white focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
                  >
                    <option value="">Select a service</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="meta-ads">Meta Ads (Facebook/Instagram)</option>
                    <option value="google-ads">Google Ads</option>
                    <option value="seo">SEO & Content Marketing</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="ai-chatbot">AI Chatbot</option>
                    <option value="automation">Marketing Automation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[hsl(var(--foreground))] mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-[hsl(var(--border))] bg-white focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                  size="lg"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <Send className="ml-2 w-5 h-5" />}
                </Button>

                {submitStatus === "success" && (
                  <div className="p-4 bg-green-50 text-green-800 rounded-lg">
                    Thank you! We'll get back to you within 24 hours.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 text-red-800 rounded-lg">
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Directions Section */}
      <section className="py-16 bg-[hsl(var(--muted))]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[hsl(var(--foreground))]">
            Find Us
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Interactive Map */}
            <GoogleMapContainer />

            {/* Directions Panel */}
            <DirectionsPanel />
          </div>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <BusinessHours />
        </div>
      </section>

      {/* Reviews Section */}
      <BusinessReviews />
    </div>
  );
}
