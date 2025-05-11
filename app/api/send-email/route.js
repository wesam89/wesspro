import nodemailer from 'nodemailer';

//This route file only used when you send the email from the client side.
//otherwise you can call nodemailer directly from the server side file without fetching from api.

export async function POST(req) {
  console.log('EMAIL_USER:', process.env.EMAIL_USER);
  console.log('EMAIL_PASS:', process.env.EMAIL_PASS);

  console.log('Incoming request URL:', req.url);
  try {
    const { to, subject, message } = await req.json();

    // Configure your SMTP transporter
    const transporter = nodemailer.createTransport({
      service: 'smtp.gmail.com', // You can change this to another SMTP provider
      port: 587, // Use 465 if using SSL
      secure: false, // Set to true if using port 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log(process.env.EMAIL_USER, process.env.EMAIL_PASS);

    // Email details
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text: message,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 },
    );
  }
}
