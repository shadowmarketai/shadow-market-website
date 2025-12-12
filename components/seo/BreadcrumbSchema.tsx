/**
 * Breadcrumb Schema Component for Site Navigation
 *
 * This component creates Breadcrumb structured data for:
 * - Google Search breadcrumb display
 * - AI search engines (better understanding of site structure)
 * - Voice search navigation
 * - Improved site hierarchy understanding
 *
 * Benefits:
 * - Enhanced search result display
 * - Better site navigation understanding by AI
 * - Improved click-through rates
 * - Clearer site structure for crawlers
 */

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Helper function to generate common breadcrumb paths
 */
export function generateBreadcrumbs(
  path: string,
  baseUrl: string = 'https://shadowmarket.ai'
): BreadcrumbItem[] {
  const pathParts = path.split('/').filter(Boolean);

  const breadcrumbs: BreadcrumbItem[] = [
    {
      name: 'Home',
      url: baseUrl,
    },
  ];

  let currentPath = '';
  for (const part of pathParts) {
    currentPath += `/${part}`;
    const name = part
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    breadcrumbs.push({
      name: name,
      url: `${baseUrl}${currentPath}`,
    });
  }

  return breadcrumbs;
}
