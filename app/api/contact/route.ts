/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


export async function POST(request: Request) {
  // if (request.method === "POST") {
    try {
      const { emailBody } = await request.json();

      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        // port: 587,
        // secure: false,
        port: 465,
        secure: true,
        auth: {
          user: process.env.SMTP_SERVER_USERNAME,
          pass: process.env.SMTP_SERVER_PASSWORD,
        },
      });

      const mailOptions = {
        from: "user",
        to: "anni.brownson@gmail.com",
        subject: "New Message from your website contact form",
        html: emailBody,
      };

      await transporter.sendMail(mailOptions);

      return NextResponse.json(
        { message: "Message sent successfully" },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error sending email:", error);
      // return new NextResponse("Failed to send message.", { status: 500 });
    }
  // }
}