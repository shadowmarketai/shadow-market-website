import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^[+]?[\d\s-()]+$/, "Invalid phone number").optional(),
  company: z.string().max(100).optional(),
  service: z.enum([
    "digital-marketing",
    "ai-development",
    "web-development",
    "mobile-app",
    "saas-platform",
    "ai-chatbot",
    "marketing-automation",
    "other"
  ]),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
  budget: z.enum(["under-1lakh", "1-5lakh", "5-10lakh", "10lakh-plus", "not-decided"]).optional(),
  honeypot: z.string().max(0), // Anti-spam field (should be empty)
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
  honeypot: z.string().max(0),
});

export type NewsletterData = z.infer<typeof newsletterSchema>;
