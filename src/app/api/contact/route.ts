import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Simple in-memory rate limiting (use Redis in production)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT = {
  maxRequests: 7, // Reduced from 20
  windowMs: 15 * 60 * 1000, // 15 minutes
};

function getClientIP(request: NextRequest): string {
  return request.headers.get('x-forwarded-for')?.split(',')[0] || 
         request.headers.get('x-real-ip') || 
         'unknown';
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const clientData = rateLimitMap.get(ip);
  
  if (!clientData) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT.windowMs });
    return false;
  }
  
  if (now > clientData.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT.windowMs });
    return false;
  }
  
  if (clientData.count >= RATE_LIMIT.maxRequests) {
    return true;
  }
  
  clientData.count++;
  return false;
}

interface RequestBody {
  name?: string;
  email?: string;
  message?: string;
}

function validateRequest(body: RequestBody): { isValid: boolean; error?: string } {
  // Honeypot check removed

  // Check for excessive length (reduced to 5,000 chars)
  const { message } = body;
  if (message && message.length > 5000) {
    return { isValid: false, error: 'Message too long' };
  }

  // Allow up to 10 links (relaxed from 3)
  const linkCount = (message?.match(/https?:\/\/[\S]+/g) || []).length;
  if (linkCount > 10) {
    return { isValid: false, error: 'Too many links in message' };
  }

  return { isValid: true };
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIP = getClientIP(request);
    if (isRateLimited(clientIP)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }
    
    const body = await request.json() as RequestBody;
    
    // Validate request structure
    const validation = validateRequest(body);
    if (!validation.isValid) {
      return NextResponse.json(
        { error: validation.error || 'Invalid request' },
        { status: 400 }
      );
    }
    
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Trim and validate input
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    
    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Enhanced email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Removed disposable email domain check

    // Sanitize inputs to prevent XSS
    const sanitizeHtml = (str: string) => {
      return str
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;');
    };

    const sanitizedName = sanitizeHtml(trimmedName);
    const sanitizedEmail = sanitizeHtml(trimmedEmail);
    const sanitizedMessage = sanitizeHtml(trimmedMessage);

    // Send email using Resend
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      
      const toEmail = process.env.CONTACT_EMAIL;
      const fromEmail = process.env.VERIFIED_SENDER || 'onboarding@resend.dev';
      
      if (!toEmail) {
        console.error('Missing Resend configuration: CONTACT_EMAIL not set');
        return NextResponse.json(
          { error: 'Email service not configured. Please contact the site administrator.' },
          { status: 500 }
        );
      }
      
      try {
        await resend.emails.send({
          from: fromEmail,
          to: toEmail,
          replyTo: sanitizedEmail,
          subject: `My Website's Contact Form Submission From: ${sanitizedName}`,
          text: `Name: ${sanitizedName}\nEmail: ${sanitizedEmail}\nMessage: ${sanitizedMessage}`,
          html: `
            <p><strong>Name:</strong> ${sanitizedName}</p>
            <p><strong>Email:</strong> ${sanitizedEmail}</p>
            <p><strong>Message:</strong></p>
            <p>${sanitizedMessage.replace(/\n/g, '<br>')}</p>
            <hr>
            <p><small>Submitted from IP: ${clientIP}</small></p>
          `
        });
      } catch (resendError: unknown) {
        const error = resendError as Error;
        console.error('Resend error:', {
          message: error.message,
          name: error.name
        });
        
        // Provide more specific error messages
        if (error.message?.includes('API key') || error.message?.includes('unauthorized')) {
          return NextResponse.json(
            { error: 'Email service authentication failed. Please check your Resend API key.' },
            { status: 500 }
          );
        }
        if (error.message?.includes('domain') || error.message?.includes('sender')) {
          return NextResponse.json(
            { error: 'Email service configuration error. Please verify your sender email/domain in Resend.' },
            { status: 500 }
          );
        }
        throw resendError; // Re-throw to be caught by outer catch
      }
      
    } else {
      // Fallback: just log the message
      console.log('Contact form submission (Resend not configured):', {
        name: sanitizedName,
        email: sanitizedEmail,
        message: sanitizedMessage,
        ip: clientIP,
        timestamp: new Date().toISOString()
      });
    }

    return NextResponse.json(
      { message: "I've received your message. I'll get back to you shortly. Thanks!" },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 