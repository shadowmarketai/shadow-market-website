'use client';

import { CheckCircle } from 'lucide-react';

/**
 * HowTo Schema Component for GEO (Generative Engine Optimization)
 *
 * This component creates HowTo structured data for:
 * - Google Featured Snippets (Step-by-step results)
 * - AI search engines (ChatGPT, Perplexity, Gemini)
 * - Voice assistants (Google Assistant, Alexa)
 * - Google's AI Overview
 *
 * Benefits:
 * - Appear in "How to" search results
 * - Get cited by AI engines for procedural content
 * - Better visibility for instructional content
 * - Voice search optimization
 */

export interface HowToStep {
  name: string;
  text: string;
  image?: string;
  url?: string;
}

interface HowToSchemaProps {
  name: string; // Title of the guide (e.g., "How to Run Successful Meta Ads")
  description: string; // Brief description of what the guide teaches
  steps: HowToStep[];
  totalTime?: string; // Duration in ISO 8601 format (e.g., "PT3D" for 3 days, "PT2H" for 2 hours)
  estimatedCost?: {
    currency: string;
    value: string;
  };
  showUI?: boolean; // Whether to display the visual guide or just the schema
}

export function HowToSchema({
  name,
  description,
  steps,
  totalTime,
  estimatedCost,
  showUI = true,
}: HowToSchemaProps) {
  // Generate HowTo Schema.org structured data
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: name,
    description: description,
    ...(totalTime && { totalTime: totalTime }),
    ...(estimatedCost && { estimatedCost: estimatedCost }),
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image && { image: step.image }),
      ...(step.url && { url: step.url }),
    })),
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
        <section className="py-16 px-4 bg-gradient-to-br from-purple-50 via-white to-blue-50">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {name}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>

              {/* Meta Info */}
              {(totalTime || estimatedCost) && (
                <div className="flex flex-wrap justify-center gap-6 mt-6">
                  {totalTime && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <span className="text-2xl">⏱️</span>
                      <span className="font-medium">
                        Time: {formatDuration(totalTime)}
                      </span>
                    </div>
                  )}
                  {estimatedCost && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <span className="text-2xl">💰</span>
                      <span className="font-medium">
                        Budget: {estimatedCost.currency === 'INR' ? '₹' : '$'}
                        {estimatedCost.value}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Steps */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-lg"
                >
                  <div className="p-6">
                    {/* Step Number & Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {step.name}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">{step.text}</p>
                      </div>
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    </div>

                    {/* Optional Image */}
                    {step.image && (
                      <div className="mt-4">
                        <img
                          src={step.image}
                          alt={step.name}
                          className="rounded-lg w-full h-auto"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Need help implementing this strategy?
              </p>
              <a
                href="/book"
                className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

/**
 * Compact HowTo Schema (Schema Only, No UI)
 * Use this when you want the SEO benefits without displaying the visual guide
 */
export function HowToSchemaOnly({
  name,
  description,
  steps,
  totalTime,
  estimatedCost,
}: Omit<HowToSchemaProps, 'showUI'>) {
  return (
    <HowToSchema
      name={name}
      description={description}
      steps={steps}
      totalTime={totalTime}
      estimatedCost={estimatedCost}
      showUI={false}
    />
  );
}

/**
 * Helper function to format ISO 8601 duration to human-readable text
 */
function formatDuration(duration: string): string {
  const patterns = [
    { regex: /P(\d+)D/, format: (n: string) => `${n} day${n !== '1' ? 's' : ''}` },
    { regex: /PT(\d+)H/, format: (n: string) => `${n} hour${n !== '1' ? 's' : ''}` },
    { regex: /PT(\d+)M/, format: (n: string) => `${n} minute${n !== '1' ? 's' : ''}` },
    { regex: /PT(\d+)S/, format: (n: string) => `${n} second${n !== '1' ? 's' : ''}` },
  ];

  for (const pattern of patterns) {
    const match = duration.match(pattern.regex);
    if (match) {
      return pattern.format(match[1]);
    }
  }

  return duration;
}
