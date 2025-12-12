'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

/**
 * FAQ Schema Component for AEO (Answer Engine Optimization)
 *
 * This component creates FAQ structured data for:
 * - Google Featured Snippets (Position 0)
 * - ChatGPT, Perplexity, Gemini AI citations
 * - Voice search optimization (Alexa, Google Assistant)
 * - Google's AI Overview
 *
 * Benefits:
 * - Higher visibility in search results
 * - Better click-through rates
 * - AI search engine citations
 * - Voice search optimization
 */

export interface FAQ {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQ[];
  title?: string;
  showUI?: boolean; // Whether to display the FAQ UI or just the schema
}

export function FAQSchema({ faqs, title, showUI = true }: FAQSchemaProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Generate FAQ Schema.org structured data
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Optional UI Display */}
      {showUI && (
        <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-4xl mx-auto">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                {title}
              </h2>
            )}

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-lg"
                >
                  {/* Question */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                    aria-expanded={openIndex === index}
                  >
                    <span className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>

                  {/* Answer */}
                  {openIndex === index && (
                    <div className="px-6 pb-5 pt-2 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

/**
 * Compact FAQ Schema (Schema Only, No UI)
 * Use this when you want the SEO benefits without displaying the FAQs
 */
export function FAQSchemaOnly({ faqs }: { faqs: FAQ[] }) {
  return <FAQSchema faqs={faqs} showUI={false} />;
}
