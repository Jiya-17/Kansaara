import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, subject, message, company } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Required fields are missing." }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // Domain verify hone ke baad change kar lena
      to: ['your-receiving-email@domain.com'], // Jahan aapko emails receive karni hain
      subject: subject || `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; background-color: #f9f9f9; border-radius: 8px;">
          <h2 style="color: #1c2b3a; border-bottom: 1px solid #c9a84c; padding-bottom: 10px;">New Contact Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          <br />
          <h3 style="color: #1c2b3a;">Message:</h3>
          <p style="background: #fff; padding: 15px; border-left: 4px solid #c9a84c; border-radius: 4px; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
