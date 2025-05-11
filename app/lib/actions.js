'use server';

import nodemailer from 'nodemailer';
import { redirect } from 'next/navigation';

export async function requestQuote(prevState, formData) {
  // Extract form data
  const request = {
    projectType: formData.get('projectType'),
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    address: formData.get('address'),
    description: formData.get('description'),
  };
  console.log('Received request:', request);

  try {
    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Change for other providers
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email details
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'wessproservices@gmail.com',
      subject: 'New Quote Request',
      html: `
    <div style="display: flex; justify-content: center; align-items: center; padding: 20px;">
      <table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse; text-align: left; width: 100%; max-width: 600px;">
        <tr style="background-color: #f2f2f2;">
          <th style="border: 1px solid #ddd; padding: 8px;">Field</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Value</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;"><strong>Project Type</strong></td>
          <td style="border: 1px solid #ddd; padding: 8px;">${request.projectType}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;"><strong>Name</strong></td>
          <td style="border: 1px solid #ddd; padding: 8px;">${request.name}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;"><strong>Email</strong></td>
          <td style="border: 1px solid #ddd; padding: 8px;">${request.email}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;"><strong>Phone</strong></td>
          <td style="border: 1px solid #ddd; padding: 8px;">${request.phone}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;"><strong>Address</strong></td>
          <td style="border: 1px solid #ddd; padding: 8px;">${request.address}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;"><strong>Description</strong></td>
          <td style="border: 1px solid #ddd; padding: 8px;">${request.description}</td>
        </tr>
      </table>
    </div>
  `,
    };

    // Send email directly in the server action
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
    return { success: true, redirectTo: '/thank-you' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
}
