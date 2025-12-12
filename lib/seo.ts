import { Metadata } from "next";
import { SITE_CONFIG, KEYWORDS } from "./constants";

export function generateMetadata({
  title,
  description,
  keywords,
  image,
  noIndex = false,
}: {
  title: string;
  description?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const siteTitle = title === SITE_CONFIG.name ? title : `${title} | ${SITE_CONFIG.name}`;
  const siteDescription = description || SITE_CONFIG.description;
  const siteImage = image || `${SITE_CONFIG.url}/og-image.jpg`;
  const allKeywords = [
    ...KEYWORDS.primary,
    ...KEYWORDS.secondary,
    ...(keywords || [])
  ];

  return {
    title: siteTitle,
    description: siteDescription,
    keywords: allKeywords,
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: SITE_CONFIG.url,
    },
    openGraph: {
      title: siteTitle,
      description: siteDescription,
      url: SITE_CONFIG.url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: siteImage,
          width: 1200,
          height: 630,
          alt: siteTitle,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description: siteDescription,
      images: [siteImage],
      creator: "@shadowmarketai",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "YOUR_GOOGLE_VERIFICATION_CODE",
    },
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.contact.phone,
    email: SITE_CONFIG.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE_CONFIG.location.city,
      addressRegion: SITE_CONFIG.location.state,
      addressCountry: SITE_CONFIG.location.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.location.coordinates.lat,
      longitude: SITE_CONFIG.location.coordinates.lng,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Coimbatore",
      },
      {
        "@type": "State",
        name: "Tamil Nadu",
      },
      {
        "@type": "Country",
        name: "India",
      },
    ],
    priceRange: "$$",
    sameAs: Object.values(SITE_CONFIG.social),
    founder: SITE_CONFIG.founders.map(founder => ({
      "@type": "Person",
      name: founder.name,
      jobTitle: founder.role,
    })),
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    description: SITE_CONFIG.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE_CONFIG.location.city,
      addressRegion: SITE_CONFIG.location.state,
      addressCountry: SITE_CONFIG.location.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE_CONFIG.contact.phone,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "ta"],
    },
    sameAs: Object.values(SITE_CONFIG.social),
  };
}

export async function generateEnhancedLocalBusinessSchema() {
  try {
    // Attempt to fetch GMB data server-side
    const gmbResponse = await fetch(`${SITE_CONFIG.url}/api/business`, {
      next: { revalidate: 3600 }, // Cache 1 hour
      cache: 'force-cache',
    });

    let gmbData: any = {};

    if (gmbResponse.ok) {
      gmbData = await gmbResponse.json();
    }

    return {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": SITE_CONFIG.url,
      name: SITE_CONFIG.name,
      description: SITE_CONFIG.description,
      url: SITE_CONFIG.url,
      telephone: SITE_CONFIG.contact.phone,
      email: SITE_CONFIG.contact.email,
      image: gmbData.photos?.slice(0, 5).map((p: any) =>
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${p.photo_reference}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
      ) || [`${SITE_CONFIG.url}/logo.png`],
      address: {
        "@type": "PostalAddress",
        streetAddress: gmbData.formatted_address || SITE_CONFIG.location.address,
        addressLocality: SITE_CONFIG.location.city,
        addressRegion: SITE_CONFIG.location.state,
        addressCountry: SITE_CONFIG.location.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: SITE_CONFIG.location.coordinates.lat,
        longitude: SITE_CONFIG.location.coordinates.lng,
      },
      aggregateRating: gmbData.rating ? {
        "@type": "AggregateRating",
        ratingValue: gmbData.rating,
        reviewCount: gmbData.user_ratings_total,
        bestRating: "5",
        worstRating: "1",
      } : undefined,
      review: gmbData.reviews?.slice(0, 5).map((r: any) => ({
        "@type": "Review",
        author: {
          "@type": "Person",
          name: r.author_name,
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: r.rating,
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody: r.text,
        datePublished: new Date(r.time * 1000).toISOString(),
      })),
      openingHoursSpecification: gmbData.opening_hours?.weekday_text?.map((day: string) => {
        const [dayName, hours] = day.split(': ');
        if (!hours || hours === 'Closed') {
          return {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: dayName,
            opens: "00:00",
            closes: "00:00",
          };
        }
        const [opens, closes] = hours.split(' – ') || hours.split(' - ');
        return {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: dayName,
          opens: opens?.trim(),
          closes: closes?.trim(),
        };
      }) || [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "19:00",
        },
      ],
      hasMap: SITE_CONFIG.gmb.placeId
        ? `https://www.google.com/maps/place/?q=place_id:${SITE_CONFIG.gmb.placeId}`
        : undefined,
      priceRange: "$$",
      sameAs: Object.values(SITE_CONFIG.social),
      areaServed: [
        {
          "@type": "City",
          name: "Coimbatore",
        },
        {
          "@type": "State",
          name: "Tamil Nadu",
        },
        {
          "@type": "Country",
          name: "India",
        },
      ],
    };
  } catch (error) {
    console.error('Error generating enhanced schema:', error);
    // Fallback to basic schema
    return generateLocalBusinessSchema();
  }
}
