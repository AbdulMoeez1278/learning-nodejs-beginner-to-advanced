const transporter = require("./smtpTransport");

/**
 * Reusable mail sending function
 * @param {Object} options - Email sending options
 * @param {string} options.to - Recipient email
 * @param {string} options.subject - Email subject
 * @param {string} [options.text] - Plain text email content
 * @param {string} [options.html] - HTML email content
 * @param {Array} [options.attachments] - Files to attach
 */
async function sendMail({ to, subject, text, html, attachments }) {
  try {
    const info = await transporter.sendMail({
      from: `"MyApp" <${process.env.SMTP_FROM}>`,
      to,
      subject,
      text,
      html,
      attachments,
    });

    console.log("Email Sent:", info.messageId);
    return {
      success: true,
      messageId: info.messageId,
      response: info.response,
    };
  } catch (error) {
    console.error("Email send error:", error.message);
    return {
      success: false,
      error: error.message,
    };
  }
}

module.exports = sendMail;
