import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message, honeypot, turnstileToken } = await request.json();

    if (honeypot) {
      return NextResponse.json({ error: 'Spam detected.' }, { status: 400 });
    }

    if (!turnstileToken) {
      return NextResponse.json({ error: 'Turnstile token missing.' }, { status: 400 });
    }

    // Verify Turnstile token
    const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.TURNSTILE_SECRET_KEY}&response=${turnstileToken}`,
    });

    const verifyData = await verifyRes.json();
    if (!verifyData.success) {
      return NextResponse.json({ error: 'Invalid captcha token.' }, { status: 400 });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, Email, and Message are required.' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: `Progress Together Contact <${process.env.SENDER_EMAIL || 'admin@progresstogether.net'}>`,
      to: [process.env.CONTACT_RECEIVER_EMAIL || 'admin@progresstogether.net'],
      replyTo: email,
      subject: `New submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.5;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr style="border: 0; border-top: 1px solid #eaeaea; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Internal Server Error' },
      { status: 500 }
    );
  }
}
