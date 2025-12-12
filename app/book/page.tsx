import { Metadata } from 'next';
import { CalEmbed } from '@/components/booking/CalEmbed';
import { Clock, CheckCircle, Video, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Book a Consultation | Shadow Market - Digital Marketing & AI Development',
  description:
    'Schedule a free consultation with Shadow Market. Get expert advice on digital marketing, Meta Ads, Google Ads, SEO, and AI development services in Coimbatore.',
  openGraph: {
    title: 'Book a Free Consultation | Shadow Market',
    description:
      'Schedule your free consultation to discuss your digital marketing and AI development needs.',
    type: 'website',
  },
};

// Get Cal.com link from environment variable
// Format: "username/event-type" or full URL
const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK || 'shadowmarket/consultation';

export default function BookPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Book Your Free Consultation
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Let's discuss how Shadow Market can transform your business with digital
              marketing and AI development solutions.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <BenefitCard
              icon={<Clock className="w-6 h-6" />}
              title="Quick & Easy"
              description="Book in 60 seconds, no commitment required"
            />
            <BenefitCard
              icon={<CheckCircle className="w-6 h-6" />}
              title="100% Free"
              description="No hidden fees, completely free consultation"
            />
            <BenefitCard
              icon={<Video className="w-6 h-6" />}
              title="Google Meet"
              description="Virtual meeting via Google Meet or Zoom"
            />
            <BenefitCard
              icon={<Phone className="w-6 h-6" />}
              title="Expert Advice"
              description="Get personalized recommendations from experts"
            />
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* Available Consultation Types */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Choose Your Consultation Type
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <ConsultationType
                  title="Quick Strategy Call"
                  duration="15 minutes"
                  description="Brief discussion about your immediate needs"
                  best="Best for: Initial inquiries"
                />
                <ConsultationType
                  title="Marketing Consultation"
                  duration="30 minutes"
                  description="In-depth digital marketing strategy discussion"
                  best="Best for: Meta Ads, Google Ads, SEO"
                  highlighted
                />
                <ConsultationType
                  title="AI Development Demo"
                  duration="45 minutes"
                  description="Technical discussion with live AI demos"
                  best="Best for: Chatbots, automation"
                />
              </div>
            </div>

            {/* Cal.com Embed */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Select Your Date & Time
              </h2>
              <CalEmbed calLink={CAL_LINK} config={{ theme: 'auto' }} />
            </div>

            {/* What to Expect */}
            <div className="border-t pt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                What to Expect in Your Consultation
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Discovery Call:</strong> We'll understand your business goals,
                    challenges, and current marketing efforts
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Custom Strategy:</strong> Get personalized recommendations
                    tailored to your business and budget
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Pricing & Timeline:</strong> Transparent pricing and realistic
                    timelines for your project
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Q&A Session:</strong> Ask anything about digital marketing, AI
                    development, or our services
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Trusted by 80+ Businesses</h2>
            <p className="text-lg mb-6 opacity-90">
              Join businesses across Coimbatore and Tamil Nadu who trust Shadow Market for
              their digital growth.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-4xl font-bold">4.9⭐</div>
                <div className="text-sm opacity-90">Google Rating</div>
              </div>
              <div>
                <div className="text-4xl font-bold">80+</div>
                <div className="text-sm opacity-90">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold">150+</div>
                <div className="text-sm opacity-90">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Benefit Card Component
function BenefitCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
      <div className="text-purple-600 mb-3">{icon}</div>
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

// Consultation Type Component
function ConsultationType({
  title,
  duration,
  description,
  best,
  highlighted = false,
}: {
  title: string;
  duration: string;
  description: string;
  best: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`p-6 rounded-xl border-2 ${
        highlighted
          ? 'border-purple-600 bg-purple-50'
          : 'border-gray-200 bg-white'
      }`}
    >
      {highlighted && (
        <span className="inline-block px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full mb-3">
          Most Popular
        </span>
      )}
      <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-purple-600 font-semibold mb-2">{duration}</p>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      <p className="text-xs text-gray-500">{best}</p>
    </div>
  );
}
