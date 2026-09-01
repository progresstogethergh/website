import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { getCloudflareContext } from '@opennextjs/cloudflare';


export async function POST(request: Request) {
  try {
    let cfEnv: Record<string, string> = {};
    try {
      const { env } = getCloudflareContext();
      cfEnv = env as Record<string, string>;
    } catch (e) {
      // Fallback for local development if getCloudflareContext throws
    }

    const apiKey = cfEnv.RESEND_API_KEY || process.env.RESEND_API_KEY;
    const senderEmail = cfEnv.SENDER_EMAIL || process.env.SENDER_EMAIL;
    const receiverEmail = cfEnv.CONTACT_RECEIVER_EMAIL || process.env.CONTACT_RECEIVER_EMAIL;
    const turnstileSecret = cfEnv.TURNSTILE_SECRET_KEY || process.env.TURNSTILE_SECRET_KEY;

    if (!apiKey) throw new Error("Missing RESEND_API_KEY in environment variables.");
    if (!senderEmail) throw new Error("Missing SENDER_EMAIL in environment variables.");
    if (!receiverEmail) throw new Error("Missing CONTACT_RECEIVER_EMAIL in environment variables.");
    if (!turnstileSecret) throw new Error("Missing TURNSTILE_SECRET_KEY in environment variables.");

    const resend = new Resend(apiKey as string);
    const body = await request.json();
    const email = body.email;
    const message = body.message;
    const honeypot = body.honeypot;
    const turnstileToken = body.turnstileToken;
    const name = body.name || (body.firstName ? `${body.firstName} ${body.lastName || ''}`.trim() : '');

    if (honeypot) {
      // Fake success for bots
      return NextResponse.json({ success: true, message: 'Message sent.' }, { status: 200 });
    }

    if (!turnstileToken) {
      return NextResponse.json({ error: 'Turnstile token missing.' }, { status: 400 });
    }

    // Verify Turnstile token securely
    const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: turnstileSecret,
        response: turnstileToken,
      }).toString(),
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
      from: `Progress Together Contact <${senderEmail}>`,
      to: [receiverEmail as string],
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
