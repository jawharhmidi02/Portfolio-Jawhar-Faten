import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const generateTeamEmail = (data: any) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(to right, #3b82f6, #10b981); padding: 20px; color: white; border-radius: 5px 5px 0 0; }
    .content { padding: 20px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 5px 5px; }
    .footer { margin-top: 20px; font-size: 12px; color: #666; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>New Contact Form Submission</h2>
    </div>
    <div class="content">
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    </div>
    <div class="footer">
      <p>This email was sent from your Synergy Team portfolio contact form.</p>
    </div>
  </div>
</body>
</html>
`;

const generateClientEmail = (data: any) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(to right, #3b82f6, #10b981); padding: 20px; color: white; border-radius: 5px 5px 0 0; text-align: center; }
    .content { padding: 20px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 5px 5px; }
    .footer { margin-top: 20px; font-size: 12px; color: #666; text-align: center; }
    .button { display: inline-block; background: linear-gradient(to right, #3b82f6, #10b981); color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 15px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Thank You for Contacting Synergy Team</h2>
    </div>
    <div class="content">
      <p>Hello ${data.firstName},</p>
      <p>Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.</p>
      <p>Here's a summary of your inquiry:</p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
      <p>If you have any additional questions or information to share, please don't hesitate to reply to this email.</p>
      <p>Best regards,<br>Jawhar & Faten<br>Synergy Team</p>
    </div>
    <div class="footer">
      <p>© ${new Date().getFullYear()} Synergy Team. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { firstName, lastName, email, subject, message } = data;

    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_SENDER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.MAIL_SENDER,
      to: process.env.MAIL_RECEIVER,
      subject: `New Contact Form: ${subject}`,
      html: generateTeamEmail(data),
    });

    await transporter.sendMail({
      from: process.env.MAIL_SENDER,
      to: email,
      subject: "Thank you for contacting Synergy Team",
      html: generateClientEmail(data),
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}
