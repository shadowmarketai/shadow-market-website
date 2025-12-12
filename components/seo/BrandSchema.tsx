/**
 * Brand Schema Component for Entity Recognition
 *
 * This component creates Brand structured data for:
 * - AI search engines (ChatGPT, Perplexity, Gemini)
 * - Google Knowledge Graph
 * - Voice assistants (Alexa, Google Assistant)
 * - Entity recognition and disambiguation
 *
 * Benefits:
 * - Helps AI engines understand your brand as an entity
 * - Better brand recognition in AI-generated responses
 * - Enhanced local SEO
 * - Voice search optimization
 */

interface BrandSchemaProps {
  name: string;
  alternateName?: string;
  description: string;
  slogan?: string;
  foundingDate?: string;
  founder?: {
    name: string;
    jobTitle?: string;
  }[];
  knowsAbout?: string[];
  areaServed: {
    city: string;
    state: string;
    country: string;
  };
  logo?: string;
  url?: string;
  telephone?: string;
  email?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
}

export function BrandSchema({
  name,
  alternateName,
  description,
  slogan,
  foundingDate,
  founder,
  knowsAbout,
  areaServed,
  logo,
  url,
  telephone,
  email,
  address,
}: BrandSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Brand',
    name: name,
    ...(alternateName && { alternateName: alternateName }),
    description: description,
    ...(slogan && { slogan: slogan }),
    ...(foundingDate && { foundingDate: foundingDate }),
    ...(founder && {
      founder: founder.map((f) => ({
        '@type': 'Person',
        name: f.name,
        ...(f.jobTitle && { jobTitle: f.jobTitle }),
      })),
    }),
    ...(knowsAbout && { knowsAbout: knowsAbout }),
    areaServed: {
      '@type': 'City',
      name: areaServed.city,
      containedIn: {
        '@type': 'State',
        name: areaServed.state,
        containedIn: {
          '@type': 'Country',
          name: areaServed.country,
        },
      },
    },
    ...(logo && { logo: logo }),
    ...(url && { url: url }),
    ...(telephone && { telephone: telephone }),
    ...(email && { email: email }),
    ...(address && {
      address: {
        '@type': 'PostalAddress',
        streetAddress: address.street,
        addressLocality: address.city,
        addressRegion: address.state,
        postalCode: address.postalCode,
        addressCountry: address.country,
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
