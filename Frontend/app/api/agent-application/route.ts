import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phoneNumber, country, appName, message } = body;

    // 1. Save to Strapi
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';
    
    let strapiSuccess = false;
    let strapiErrorDetails = null;

    try {
      const strapiRes = await fetch(`${strapiUrl}/api/agent-submissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            name,
            email,
            phoneNumber,
            country,
            appName,
            message,
          }
        }),
      });
      
      if (strapiRes.ok) {
        strapiSuccess = true;
      } else {
        const errorData = await strapiRes.json();
        console.error('Strapi submission failed:', errorData);
        strapiErrorDetails = errorData;
      }
    } catch (strapiError) {
      console.error('Error connecting to Strapi:', strapiError);
      strapiErrorDetails = strapiError;
    }

    if (!strapiSuccess) {
      return NextResponse.json({ 
        success: false, 
        message: 'Failed to save to database. Check Strapi permissions.',
        details: strapiErrorDetails
      }, { status: 500 });
    }

    // 2. Send Email via Nodemailer
    if (!process.env.EMAIL_APP_PASSWORD) {
      console.warn('EMAIL_APP_PASSWORD not set. Skipping email dispatch.');
      return NextResponse.json({ 
        success: false, 
        message: 'Database saved, but email failed because EMAIL_APP_PASSWORD is not set in .env.local',
      }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'official.livengage@gmail.com',
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER || 'official.livengage@gmail.com'}>`,
      replyTo: email,
      to: 'official.livengage@gmail.com',
      subject: `New Agent Application: ${name}`,
      text: `
You have received a new Agent Application from the Livengage website:

Full Name: ${name}
Email: ${email}
Phone Number: ${phoneNumber || 'Not provided'}
Country: ${country || 'Not provided'}
App Name: ${appName || 'Not provided'}

Message:
${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      success: true, 
      message: 'Agent application dispatched successfully',
    }, { status: 200 });

  } catch (error) {
    console.error('Error in agent-application API route:', error);
    return NextResponse.json(
      { success: false, message: 'Server error processing application.', details: error },
      { status: 500 }
    );
  }
}
