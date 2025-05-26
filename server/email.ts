import nodemailer from 'nodemailer';

interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

interface EmailData {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

// Default SMTP configuration (can be overridden with environment variables)
const getEmailConfig = (): EmailConfig => {
  return {
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER || 'your-email@gmail.com',
      pass: process.env.SMTP_PASS || 'your-app-password'
    }
  };
};

export async function sendEmail(emailData: EmailData): Promise<boolean> {
  try {
    const config = getEmailConfig();
    
    // Create transporter
    const transporter = nodemailer.createTransport(config);
    
    // Verify connection
    await transporter.verify();
    
    // Send email
    const info = await transporter.sendMail({
      from: `"PrimeVibeMedia Agency" <${config.auth.user}>`,
      to: emailData.to,
      subject: emailData.subject,
      text: emailData.text,
      html: emailData.html
    });
    
    console.log('Email sent successfully:', info.messageId);
    return true;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
}

export async function sendContactFormEmail(formData: {
  name: string;
  email: string;
  company?: string;
  revenue?: string;
  message: string;
}): Promise<boolean> {
  const subject = `New Contact Form Submission from ${formData.name}`;
  
  const text = `
New contact form submission:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Revenue: ${formData.revenue || 'Not provided'}
Message: ${formData.message}
  `;
  
  const html = `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${formData.name}</p>
<p><strong>Email:</strong> ${formData.email}</p>
<p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
<p><strong>Revenue:</strong> ${formData.revenue || 'Not provided'}</p>
<p><strong>Message:</strong></p>
<p>${formData.message}</p>
  `;
  
  return await sendEmail({
    to: process.env.CONTACT_EMAIL || 'contact@amazonpro.com',
    subject,
    text,
    html
  });
}

export async function sendNewsletterConfirmation(email: string): Promise<boolean> {
  const subject = 'Welcome to PrimeVibeMedia Newsletter!';
  
  const text = `
Thank you for subscribing to the PrimeVibeMedia newsletter!

You'll receive the latest Amazon marketing insights, PPC strategies, and growth tips directly in your inbox.

Best regards,
The PrimeVibeMedia Team
  `;
  
  const html = `
<h2>Welcome to PrimeVibeMedia Newsletter!</h2>
<p>Thank you for subscribing to our newsletter!</p>
<p>You'll receive the latest Amazon marketing insights, PPC strategies, and growth tips directly in your inbox.</p>
<br>
<p>Best regards,<br>The PrimeVibeMedia Team</p>
  `;
  
  return await sendEmail({
    to: email,
    subject,
    text,
    html
  });
}