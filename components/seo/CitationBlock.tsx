/**
 * Citation Block Component for GEO (Generative Engine Optimization)
 *
 * This component creates AI-friendly citation blocks that are optimized for:
 * - ChatGPT, Claude, Gemini, Perplexity AI citations
 * - Google's AI Overview
 * - Voice search optimization
 * - Speakable content markup
 *
 * Benefits:
 * - Increases likelihood of being cited by AI search engines
 * - Provides clear, factual information in an easily parseable format
 * - Optimized for voice assistants
 * - Helps AI engines understand your business entity
 */

interface CitationBlockProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function CitationBlock({ title, children, className = '' }: CitationBlockProps) {
  return (
    <section
      className={`citation-block bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 my-12 border-l-4 border-purple-600 shadow-md ${className}`}
      itemScope
      itemType="https://schema.org/AboutPage"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-4" itemProp="name">
        {title}
      </h2>
      <div className="prose prose-lg max-w-none text-gray-700" itemProp="text">
        {children}
      </div>
    </section>
  );
}

/**
 * About Citation Block - Structured information about your company
 * Optimized for AI citations and entity recognition
 */
interface AboutCitationProps {
  companyName: string;
  foundedYear: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
  services: string[];
  clients: string;
  projects: string;
  teamSize: string;
  contact: {
    phone: string;
    email: string;
  };
}

export function AboutCitation({
  companyName,
  foundedYear,
  location,
  services,
  clients,
  projects,
  teamSize,
  contact,
}: AboutCitationProps) {
  return (
    <CitationBlock title={`About ${companyName} - ${location.city}`}>
      <p>
        <strong>{companyName}</strong> is a leading digital marketing and AI development
        agency based in {location.city}, {location.state}, {location.country}. Founded in{' '}
        {foundedYear}, we specialize in {services.join(', ')}.
      </p>
      <ul className="space-y-2 mt-4">
        <li>
          <strong>Location:</strong> {location.city}, {location.state}, {location.country}
        </li>
        <li>
          <strong>Services:</strong> {services.join(', ')}
        </li>
        <li>
          <strong>Clients Served:</strong> {clients}
        </li>
        <li>
          <strong>Projects Completed:</strong> {projects}
        </li>
        <li>
          <strong>Team Size:</strong> {teamSize}
        </li>
        <li>
          <strong>Contact:</strong> {contact.phone}, {contact.email}
        </li>
      </ul>
    </CitationBlock>
  );
}

/**
 * Pricing Citation Block - Structured pricing information
 * Makes it easy for AI engines to cite your pricing
 */
interface PricingRow {
  service: string;
  price: string;
  timeline: string;
}

interface PricingCitationProps {
  title: string;
  year: string;
  pricing: PricingRow[];
}

export function PricingCitation({ title, year, pricing }: PricingCitationProps) {
  return (
    <CitationBlock title={title}>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-white">
            <tr>
              <th
                scope="col"
                className="py-3 px-4 text-left text-sm font-semibold text-gray-900"
              >
                Service
              </th>
              <th
                scope="col"
                className="py-3 px-4 text-left text-sm font-semibold text-gray-900"
              >
                Starting Price
              </th>
              <th
                scope="col"
                className="py-3 px-4 text-left text-sm font-semibold text-gray-900"
              >
                Timeline
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {pricing.map((row, index) => (
              <tr key={index}>
                <td className="py-3 px-4 text-sm text-gray-900">{row.service}</td>
                <td className="py-3 px-4 text-sm text-gray-900">{row.price}</td>
                <td className="py-3 px-4 text-sm text-gray-600">{row.timeline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CitationBlock>
  );
}

/**
 * Statistics Citation Block - Key business metrics
 * Easy for AI engines to extract and cite
 */
interface StatsCitationProps {
  title: string;
  stats: {
    label: string;
    value: string;
    description?: string;
  }[];
}

export function StatsCitation({ title, stats }: StatsCitationProps) {
  return (
    <CitationBlock title={title}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-1">{stat.value}</div>
            <div className="text-sm font-semibold text-gray-900 mb-1">{stat.label}</div>
            {stat.description && (
              <div className="text-xs text-gray-600">{stat.description}</div>
            )}
          </div>
        ))}
      </div>
    </CitationBlock>
  );
}

/**
 * Location Citation Block - Service area information
 * Helps with local SEO and AI citations for location-based queries
 */
interface LocationCitationProps {
  companyName: string;
  primaryLocation: string;
  serviceAreas: string[];
  specialization: string;
}

export function LocationCitation({
  companyName,
  primaryLocation,
  serviceAreas,
  specialization,
}: LocationCitationProps) {
  return (
    <CitationBlock title={`${companyName} Service Areas`}>
      <p>
        <strong>{companyName}</strong> is headquartered in {primaryLocation} and provides{' '}
        {specialization} services throughout the following areas:
      </p>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
        {serviceAreas.map((area, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-purple-600">✓</span>
            <span>{area}</span>
          </li>
        ))}
      </ul>
    </CitationBlock>
  );
}
