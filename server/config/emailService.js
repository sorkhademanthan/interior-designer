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

const sendProjectNotification = async (project) => {
  try {
    const transporter = createTransporter();

    const budgetRangeMap = {
      'under-25k': 'Under $25,000',
      '25k-50k': '$25,000 - $50,000',
      '50k-100k': '$50,000 - $100,000',
      '100k-250k': '$100,000 - $250,000',
      '250k-500k': '$250,000 - $500,000',
      'over-500k': 'Over $500,000',
      'prefer-not-to-say': 'Prefer not to say'
    };

    const tierMap = {
      'refresh': 'Refresh Package',
      'signature': 'Signature Package',
      'bespoke': 'Bespoke Package',
      'not-sure': 'Not Sure / Need Consultation'
    };

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.NOTIFICATION_EMAIL || process.env.EMAIL_USER,
      subject: '🏛️ New Project Request - Aurora Atelier',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">New Project Request</h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #555;">Client Information:</h3>
            <p><strong>Name:</strong> ${project.clientName}</p>
            <p><strong>Email:</strong> <a href="mailto:${project.email}">${project.email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${project.phone}">${project.phone}</a></p>
            <p><strong>Property Address:</strong> ${project.propertyAddress}</p>
            <p><strong>Best Time to Contact:</strong> ${project.bestTimeToContact}</p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #555;">Project Details:</h3>
            <p><strong>Project Type:</strong> ${project.projectType.charAt(0).toUpperCase() + project.projectType.slice(1)}</p>
            <p><strong>Property Type:</strong> ${project.propertyType.charAt(0).toUpperCase() + project.propertyType.slice(1).replace('-', ' ')}</p>
            ${project.propertySize ? `<p><strong>Property Size:</strong> ${project.propertySize}</p>` : ''}
            ${project.roomsAreas.length > 0 ? `<p><strong>Rooms/Areas:</strong> ${project.roomsAreas.join(', ')}</p>` : ''}
            <p><strong>Property Condition:</strong> ${project.propertyCondition.replace('-', ' ')}</p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #555;">Scope & Timeline:</h3>
            <p><strong>Selected Package:</strong> ${tierMap[project.pricingTier]}</p>
            <p><strong>Desired Start Date:</strong> ${new Date(project.desiredStartDate).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</p>
            ${project.projectDeadline ? `<p><strong>Project Deadline:</strong> ${new Date(project.projectDeadline).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</p>` : ''}
            <p><strong>Timeline Flexibility:</strong> ${project.timelineFlexibility.replace('-', ' ')}</p>
          </div>

          <div style="margin: 20px 0; background-color: #fff8e1; padding: 15px; border-radius: 5px; border-left: 4px solid #FFC107;">
            <h3 style="color: #555; margin-top: 0;">Budget Information:</h3>
            <p><strong>Budget Range:</strong> ${budgetRangeMap[project.budgetRange]}</p>
            <p><strong>Budget Flexibility:</strong> ${project.budgetFlexibility.replace('-', ' ')}</p>
            <p><strong>Needs Financing:</strong> ${project.needsFinancing ? 'Yes' : 'No'}</p>
          </div>

          ${project.stylePreferences.length > 0 || project.colorPreferences ? `
          <div style="margin: 20px 0;">
            <h3 style="color: #555;">Design Preferences:</h3>
            ${project.stylePreferences.length > 0 ? `<p><strong>Style Preferences:</strong> ${project.stylePreferences.join(', ')}</p>` : ''}
            ${project.colorPreferences ? `<p><strong>Color Preferences:</strong> ${project.colorPreferences}</p>` : ''}
            ${project.inspirationReferences ? `<p><strong>Inspiration:</strong> ${project.inspirationReferences}</p>` : ''}
            ${project.mustHaveFeatures ? `<p><strong>Must-Have Features:</strong> ${project.mustHaveFeatures}</p>` : ''}
          </div>
          ` : ''}

          ${project.accessibilityNeeds || project.hasPets || project.sustainabilityPreference !== 'not-important' ? `
          <div style="margin: 20px 0;">
            <h3 style="color: #555;">Special Requirements:</h3>
            ${project.accessibilityNeeds ? `<p><strong>Accessibility Needs:</strong> Yes${project.accessibilityDetails ? ` - ${project.accessibilityDetails}` : ''}</p>` : ''}
            ${project.hasPets ? `<p><strong>Pets:</strong> Yes${project.petDetails ? ` - ${project.petDetails}` : ''}</p>` : ''}
            <p><strong>Sustainability Preference:</strong> ${project.sustainabilityPreference.replace('-', ' ')}</p>
            <p><strong>Storage Needs:</strong> ${project.storageNeeds}</p>
          </div>
          ` : ''}

          ${project.needsArchitecture || project.needsContractor ? `
          <div style="margin: 20px 0;">
            <h3 style="color: #555;">Additional Services Needed:</h3>
            ${project.needsArchitecture ? '<p>✓ Architecture/Structural Work</p>' : ''}
            ${project.needsContractor ? '<p>✓ Contractor Services</p>' : ''}
            ${project.needsProjectManagement ? '<p>✓ Project Management</p>' : ''}
          </div>
          ` : ''}

          ${project.additionalNotes ? `
          <div style="margin: 20px 0;">
            <h3 style="color: #555;">Additional Notes:</h3>
            <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; border-left: 4px solid #4CAF50;">
              ${project.additionalNotes}
            </p>
          </div>
          ` : ''}

          ${project.howDidYouHear ? `<p><strong>How they heard about us:</strong> ${project.howDidYouHear}</p>` : ''}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #888; font-size: 12px;">
            <p>Submitted on: ${new Date(project.createdAt).toLocaleString()}</p>
            <p>Project ID: ${project._id}</p>
          </div>
        </div>
      `
    };

    const clientMailOptions = {
      from: process.env.EMAIL_USER,
      to: project.email,
      subject: '✨ Project Request Received - Aurora Atelier',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #333;">Thank You for Your Project Inquiry!</h2>
          
          <p>Dear ${project.clientName},</p>
          
          <p>We're thrilled that you're considering Aurora Atelier for your ${project.projectType} project. Your detailed submission has been received and our team is already reviewing it.</p>

          <div style="margin: 20px 0; background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
            <h3 style="color: #555; margin-top: 0;">What Happens Next:</h3>
            <ol style="line-height: 1.8;">
              <li><strong>Review (1-2 business days):</strong> Our design team will carefully review your project details and requirements.</li>
              <li><strong>Initial Consultation:</strong> We'll reach out to schedule an in-depth consultation to discuss your vision.</li>
              <li><strong>Proposal (3-5 business days):</strong> You'll receive a detailed proposal including scope, timeline, and investment breakdown.</li>
              <li><strong>Begin Your Journey:</strong> Once approved, we'll schedule your project kickoff!</li>
            </ol>
          </div>

          <div style="margin: 20px 0; background-color: #e8f5e9; padding: 15px; border-radius: 5px;">
            <h3 style="color: #2e7d32; margin-top: 0;">Your Project Summary:</h3>
            <p><strong>Package:</strong> ${tierMap[project.pricingTier]}</p>
            <p><strong>Property:</strong> ${project.propertyAddress}</p>
            <p><strong>Desired Start:</strong> ${new Date(project.desiredStartDate).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</p>
          </div>

          <p>In the meantime, feel free to explore our <a href="${process.env.CLIENT_URL || 'http://localhost:3001'}/#portfolio">portfolio</a> for inspiration, or reply to this email with any questions.</p>

          <p style="margin-top: 30px;">With excitement for what we'll create together,<br><strong>The Aurora Atelier Team</strong></p>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #888; font-size: 12px;">
            <p>Reference ID: ${project._id}</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    await transporter.sendMail(clientMailOptions);

    console.log('Project notification emails sent successfully');
  } catch (error) {
    console.error('Error sending project email:', error);
    throw error;
  }
};

module.exports = {
  sendConsultationNotification,
  sendProjectNotification
};
