import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || process.env.EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || process.env.EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || process.env.EMAILJS_PUBLIC_KEY;

    if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: SERVICE_ID,
          template_id: TEMPLATE_ID,
          user_id: PUBLIC_KEY,
          template_params: {
            name,
            from_name: name,
            user_name: name,
            email,
            from_email: email,
            user_email: email,
            reply_to: email,
            subject,
            message,
            to_name: 'Binu Prajapati',
          },
        }),
      });

      if (response.ok) {
        return NextResponse.json({ success: true, message: 'Email sent successfully via server' });
      } else {
        const errorText = await response.text();
        console.warn('Server EmailJS API responded with error:', response.status, errorText);
      }
    }

    // Return success response with mailto metadata if direct delivery succeeded or needs client action
    return NextResponse.json({ 
      success: true, 
      fallback: true,
      message: 'Message processed' 
    });
  } catch (error) {
    console.error('API /contact error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
