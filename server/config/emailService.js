const nodemailer = require('nodemailer');

const createTransporter = () => {
  if (process.env.SENDGRID_API_KEY) {
    return nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 587,
      auth: {
        user: 'apikey',
        pass: process.env.SENDGRID_API_KEY
      }
    });
  } else if (process.env.SMTP_HOST) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT || 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    });
  } else {
    return nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });
  }
};

const sendConsultationNotification = async (consultation) => {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.NOTIFICATION_EMAIL || process.env.EMAIL_USER,
      subject: '🎨 New Consultation Request - Aurora Atelier',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">New Consultation Request</h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #555;">Client Information:</h3>
            <p><strong>Name:</strong> ${consultation.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${consultation.email}">${consultation.email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${consultation.phone}">${consultation.phone}</a></p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #555;">Consultation Details:</h3>
            <p><strong>Preferred Date:</strong> ${new Date(consultation.preferredDate).toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</p>
            ${consultation.preferredTime ? `<p><strong>Preferred Time:</strong> ${consultation.preferredTime}</p>` : ''}
            ${consultation.serviceType ? `<p><strong>Service Type:</strong> ${consultation.serviceType.replace('-', ' ').toUpperCase()}</p>` : ''}
          </div>

          ${consultation.message ? `
          <div style="margin: 20px 0;">
            <h3 style="color: #555;">Message:</h3>
            <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; border-left: 4px solid #4CAF50;">
              ${consultation.message}
            </p>
          </div>
          ` : ''}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #888; font-size: 12px;">
            <p>Submitted on: ${new Date(consultation.createdAt).toLocaleString()}</p>
            <p>Request ID: ${consultation._id}</p>
          </div>
        </div>
      `
    };

    const clientMailOptions = {
      from: process.env.EMAIL_USER,
      to: consultation.email,
      subject: '✨ Consultation Request Received - Aurora Atelier',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #333;">Thank You for Your Interest!</h2>
          
          <p>Dear ${consultation.name},</p>
          
          <p>We have received your consultation request and are excited to work with you! Our team will review your request and get back to you within 24-48 hours.</p>

          <div style="margin: 20px 0; background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
            <h3 style="color: #555; margin-top: 0;">Your Request Details:</h3>
            <p><strong>Preferred Date:</strong> ${new Date(consultation.preferredDate).toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</p>
            ${consultation.preferredTime ? `<p><strong>Preferred Time:</strong> ${consultation.preferredTime}</p>` : ''}
          </div>

          <p>If you have any urgent questions, feel free to reply to this email.</p>

          <p style="margin-top: 30px;">Best regards,<br><strong>Aurora Atelier Team</strong></p>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #888; font-size: 12px;">
            <p>Reference ID: ${consultation._id}</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    await transporter.sendMail(clientMailOptions);

    console.log('Consultation notification emails sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

module.exports = {
  sendConsultationNotification
};
