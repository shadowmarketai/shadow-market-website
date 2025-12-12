import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { MetaPixelWrapper } from "@/components/analytics/MetaPixelWrapper";
import { ClarityWrapper } from "@/components/analytics/ClarityWrapper";
import { AnalyticsTrackers } from "@/components/analytics/AnalyticsTrackers";
import { ExitIntentPopup } from "@/components/conversion/ExitIntentPopup";
import { StickyCTABar } from "@/components/conversion/StickyCTABar";
import { TrustSignals } from "@/components/conversion/TrustSignals";
import { TawkToChat } from "@/components/chat/TawkToChat";
import { generateMetadata as generateSEOMetadata, generateLocalBusinessSchema, generateOrganizationSchema } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = generateSEOMetadata({
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = generateLocalBusinessSchema();
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />

        {/* Conversion Optimization */}
        <WhatsAppButton />
        <StickyCTABar />
        <TrustSignals />
        <ExitIntentPopup />

        {/* Analytics & Tracking */}
        <MetaPixelWrapper />
        <ClarityWrapper />
        <AnalyticsTrackers />
        <SpeedInsights />

        {/* Live Chat */}
        <TawkToChat />
      </body>
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      )}
    </html>
  );
}
