import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Validation schema for contact form
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate input
    const validatedData = contactSchema.parse(body);

    // Check if Resend API key is configured
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.warn('RESEND_API_KEY not configured - logging contact form submission');

      // Log to console for debugging (remove in production)
      console.log('Contact Form Submission:', {
        timestamp: new Date().toISOString(),
        ...validatedData,
      });

      // Return success even without sending email (for testing)
      return NextResponse.json({
        success: true,
        message: 'Contact form submitted successfully (email not configured)',
        mode: 'development',
      });
    }

    // Send email using Resend
    const { Resend } = await import('resend');
    const resend = new Resend(resendApiKey);

    const contactEmail = process.env.CONTACT_EMAIL || 'sales@shadowmarket.ai';

    // Send notification email to business
    const emailResponse = await resend.emails.send({
      from: 'SHADOW MARKET Website <noreply@shadowmarket.ai>',
      to: contactEmail,
      replyTo: validatedData.email,
      subject: `New Contact Form: ${validatedData.service} - ${validatedData.name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
              .field { margin-bottom: 20px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #667eea; }
              .label { font-weight: bold; color: #667eea; margin-bottom: 5px; }
              .value { color: #4b5563; }
              .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🚀 New Contact Form Submission</h1>
                <p>SHADOW MARKET Website</p>
              </div>

              <div class="content">
                <div class="field">
                  <div class="label">Name</div>
                  <div class="value">${validatedData.name}</div>
                </div>

                <div class="field">
                  <div class="label">Email</div>
                  <div class="value"><a href="mailto:${validatedData.email}">${validatedData.email}</a></div>
                </div>

                ${validatedData.phone ? `
                  <div class="field">
                    <div class="label">Phone</div>
                    <div class="value"><a href="tel:${validatedData.phone}">${validatedData.phone}</a></div>
                  </div>
                ` : ''}

                ${validatedData.company ? `
                  <div class="field">
                    <div class="label">Company</div>
                    <div class="value">${validatedData.company}</div>
                  </div>
                ` : ''}

                <div class="field">
                  <div class="label">Service Interested In</div>
                  <div class="value">${validatedData.service}</div>
                </div>

                <div class="field">
                  <div class="label">Message</div>
                  <div class="value">${validatedData.message.replace(/\n/g, '<br>')}</div>
                </div>

                <div class="footer">
                  <p>Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
                  <p>Respond within 24 hours for best results!</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    // Log successful submission
    console.log('Contact form email sent:', emailResponse);

    return NextResponse.json({
      success: true,
      message: 'Thank you! We will get back to you within 24 hours.',
    });

  } catch (error: any) {
    console.error('Contact form error:', error);

    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          details: error.issues,
        },
        { status: 400 }
      );
    }

    // Handle other errors
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to send message. Please try again or email us directly.',
        message: error.message,
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
