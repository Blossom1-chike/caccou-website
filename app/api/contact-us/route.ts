import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { name, email, message, service } = await request.json();
  //TODO: configure the DNS records to activate email sending
  try {
    const response = await resend.emails.send({
      from: email,
      to: "chinanuchikezie515@gmail.com",
      subject: `Contact Us Form Submission – ${name}`,
      html: `
        <h2>New Contact Us Submission</h2>
        <p><strong>Email Address:</strong> ${email}</p>
        <p><strong>Service Required:</strong> ${service}</p>
        <p><strong>Message:</strong><br/>${message}</p>
    `,
    });
    if (response) {
      console.log(response);
      return NextResponse.json(
        { message: "Email sent successfully" },
        { status: 200 },
      );
    }
  } catch (error: unknown) {
    return NextResponse.json(
      { message: error ?? "Failed to send email" },
      { status: 500 },
    );
  }
}
