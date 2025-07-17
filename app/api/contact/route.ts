import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const generateTeamEmail = (data: any) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; }
    .header { 
      background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #10b981 100%); 
      padding: 30px 20px; 
      color: white; 
      text-align: center;
      border-radius: 0;
    }
    .header h2 { margin: 0; font-size: 24px; font-weight: 600; }
    .header p { margin: 10px 0 0 0; opacity: 0.9; font-size: 14px; }
    .content { 
      padding: 30px 20px; 
      background: #ffffff;
    }
    .info-row { 
      display: flex; 
      margin-bottom: 15px; 
      align-items: flex-start;
    }
    .info-label { 
      font-weight: 600; 
      color: #374151; 
      min-width: 80px; 
      margin-right: 15px;
    }
    .info-value { 
      color: #6b7280; 
      flex: 1;
    }
    .message-box {
      background: #f8fafc;
      border-left: 4px solid #3b82f6;
      padding: 20px;
      margin: 20px 0;
      border-radius: 0 8px 8px 0;
    }
    .footer { 
      background: #f8fafc; 
      padding: 20px; 
      text-align: center; 
      font-size: 12px; 
      color: #6b7280; 
      border-top: 1px solid #e5e7eb;
    }
    .badge {
      display: inline-block;
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      color: white;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 500;
      margin-bottom: 10px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>📧 New Contact Form Submission</h2>
      <p>Someone is interested in working with you!</p>
    </div>
    <div class="content">
      <div class="badge">New Inquiry</div>
      
      <div class="info-row">
        <div class="info-label">Name:</div>
        <div class="info-value"><strong>${data.firstName} ${data.lastName}</strong></div>
      </div>
      
      <div class="info-row">
        <div class="info-label">Email:</div>
        <div class="info-value"><a href="mailto:${data.email}" style="color: #3b82f6; text-decoration: none;">${data.email}</a></div>
      </div>
      
      <div class="info-row">
        <div class="info-label">Subject:</div>
        <div class="info-value"><strong>${data.subject}</strong></div>
      </div>
      
      <div class="message-box">
        <div style="font-weight: 600; color: #374151; margin-bottom: 10px;">Message:</div>
        <div style="color: #6b7280; white-space: pre-wrap;">${data.message}</div>
      </div>
      
      <div style="margin-top: 30px; padding: 20px; background: linear-gradient(135deg, #eff6ff, #f0f9ff); border-radius: 8px; text-align: center;">
        <p style="margin: 0; color: #1e40af; font-weight: 500;">💡 Quick Actions</p>
        <p style="margin: 10px 0 0 0; font-size: 14px; color: #6b7280;">
          Reply directly to this email or reach out via your preferred contact method.
        </p>
      </div>
    </div>
    <div class="footer">
      <p>This email was sent from your Developer Portfolio contact form.</p>
      <p style="margin-top: 10px;">
        <span style="color: #3b82f6;">●</span> 
        Professional Portfolio System 
        <span style="color: #8b5cf6;">●</span>
      </p>
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
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; }
    .header { 
      background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #10b981 100%); 
      padding: 40px 20px; 
      color: white; 
      text-align: center;
    }
    .header h2 { margin: 0 0 10px 0; font-size: 28px; font-weight: 600; }
    .header p { margin: 0; opacity: 0.9; font-size: 16px; }
    .content { 
      padding: 40px 30px; 
      background: #ffffff;
    }
    .greeting { 
      font-size: 18px; 
      color: #374151; 
      margin-bottom: 20px; 
      font-weight: 500;
    }
    .summary-box {
      background: linear-gradient(135deg, #f8fafc, #f1f5f9);
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 25px;
      margin: 25px 0;
    }
    .summary-title {
      font-weight: 600;
      color: #1e293b;
      margin-bottom: 15px;
      font-size: 16px;
      display: flex;
      align-items: center;
    }
    .summary-item {
      margin-bottom: 12px;
      display: flex;
      align-items: flex-start;
    }
    .summary-label {
      font-weight: 600;
      color: #475569;
      min-width: 70px;
      margin-right: 15px;
    }
    .summary-value {
      color: #64748b;
      flex: 1;
    }
    .message-preview {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 20px;
      margin-top: 10px;
      font-style: italic;
      color: #64748b;
      white-space: pre-wrap;
    }
    .cta-section {
      background: linear-gradient(135deg, #eff6ff, #f0f9ff);
      border-radius: 12px;
      padding: 30px;
      text-align: center;
      margin: 30px 0;
    }
    .cta-title {
      color: #1e40af;
      font-weight: 600;
      margin-bottom: 10px;
      font-size: 18px;
    }
    .signature {
      margin-top: 40px;
      padding-top: 20px;
      border-top: 1px solid #e5e7eb;
    }
    .signature-name {
      font-weight: 600;
      color: #374151;
      margin-bottom: 5px;
    }
    .signature-title {
      color: #6b7280;
      font-size: 14px;
      margin-bottom: 15px;
    }
    .contact-info {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      margin-top: 15px;
    }
    .contact-item {
      color: #6b7280;
      font-size: 14px;
      text-decoration: none;
    }
    .footer { 
      background: #1f2937; 
      color: #d1d5db; 
      padding: 30px 20px; 
      text-align: center; 
      font-size: 14px;
    }
    .footer-brand {
      font-weight: 600;
      margin-bottom: 10px;
      background: linear-gradient(135deg, #3b82f6, #8b5cf6, #10b981);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-size: 16px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>🚀 Thank You for Reaching Out!</h2>
      <p>We've received your message and will get back to you soon</p>
    </div>
    <div class="content">
      <div class="greeting">Hello ${data.firstName},</div>
      
      <p style="color: #4b5563; margin-bottom: 25px; font-size: 16px; line-height: 1.7;">
        Thank you for contacting us! We're excited about the possibility of working together. 
        Your message has been received and we'll respond as soon as possible.
      </p>

      <div class="summary-box">
        <div class="summary-title">
          📋 Your Inquiry Summary
        </div>
        <div class="summary-item">
          <div class="summary-label">Subject:</div>
          <div class="summary-value"><strong>${data.subject}</strong></div>
        </div>
        <div class="summary-item">
          <div class="summary-label">Message:</div>
          <div class="summary-value">
            <div class="message-preview">${data.message}</div>
          </div>
        </div>
      </div>

      <div class="cta-section">
        <div class="cta-title">⚡ What's Next?</div>
        <p style="margin: 0; color: #475569; line-height: 1.6;">
          We'll review your project requirements and get back to you within 24 hours. 
          In the meantime, feel free to check out our latest work and connect with us on social media.
        </p>
      </div>

      <p style="color: #4b5563; margin-bottom: 10px;">
        If you have any additional questions or information to share, please don't hesitate to reply to this email.
      </p>

      <div class="signature">
        <div class="signature-name">Best regards,</div>
        <div class="signature-name">Jawhar & Faten</div>
        <div class="signature-title">Full-Stack Developers</div>
        
        <div class="contact-info">
          <a href="mailto:jawharhmidi01@gmail.com" class="contact-item">📧 jawharhmidi01@gmail.com</a>
          <a href="mailto:selmii.faten@gmail.com" class="contact-item">📧 selmii.faten@gmail.com</a>
          <span class="contact-item">📍 Medenine, Tunisia</span>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-brand">Developer Portfolio</div>
      <p style="margin: 0; opacity: 0.8;">© ${new Date().getFullYear()} Professional Developer Portfolio. All rights reserved.</p>
      <p style="margin: 10px 0 0 0; opacity: 0.6; font-size: 12px;">
        This is an automated response. We'll get back to you personally soon!
      </p>
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
