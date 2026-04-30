import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, company, email, phone, message } = data;

    // Configure your email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, 
      port: 465,
      secure: true, 
      auth: {
        user: process.env.SMTP_USER, 
        pass: process.env.SMTP_PASSWORD, 
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'info@vsure.life', // The target email address
      replyTo: email, 
      subject: `New SME Pro Website Enquiry from ${name}`,
      html: `
        <h2>New Enquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}