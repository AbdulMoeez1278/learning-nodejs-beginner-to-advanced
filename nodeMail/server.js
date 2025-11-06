// Load environment variables
require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
// const path = require("path");

const app = express();
const port = 3000;

// ---------- MIDDLEWARE ----------
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views")); // ensure correct views path
// app.use(express.static(path.join(__dirname, "public"))); // optional for frontend assets

// ---------- NODEMAILER TRANSPORTER ----------
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify SMTP connection once when server starts
transporter.verify((error, success) => {
  if (error) {
    console.error("Email server not connected:", error);
  } else {
    console.log("Email server is ready to send messages!");
  }
});

// Check credentials
console.log("User exists:", !!process.env.SMTP_USER);
console.log("Pass exists:", !!process.env.SMTP_PASS);

// ---------- ROUTES ----------

// Frontend route (renders form)
app.get("/mail", (req, res) => {
  res.render("mail");
});

// POST route for form submission
app.post("/submit-email", async (req, res) => {
  const { userName, userEmail, companyEmail, subject, message } = req.body;
  console.log(req.body);

  // Validation
  if (!userName || !userEmail || !companyEmail || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required.",
    });
  }

  try {
    // ---- 1. SEND MAIL TO COMPANY ----
    await transporter.sendMail({
      from: `"${userName}" <${process.env.SMTP_USER}>`, // display user name but send from your verified email
      to: companyEmail, // destination email (company)
      subject: `New Contact Form Submission: ${subject}`,
      text: message,
      replyTo: userEmail, // allows company to reply directly to user's address
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h3>New Inquiry Received</h3>
          <p><strong>Name:</strong> ${userName}</p>
          <p><strong>Email:</strong> ${userEmail}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong><br>${message}</p>
        </div>
      `,
    });

    // ---- 2. AUTO-REPLY TO USER ----
    await transporter.sendMail({
      from: `"Sky Alam International Tours" <${companyEmail}>`,
      to: userEmail,
      subject: "Thank You for Contacting Sky Alam International Tours!",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #10B981;">Thank you for reaching out!</h2>
          <p>Dear ${userName || "Valued Customer"},</p>
          <p>We’ve successfully received your message:</p>
          <blockquote style="border-left: 4px solid #10B981; padding-left: 10px; color: #555;">
            ${message}
          </blockquote>
          <p>Our team will get back to you within 24–48 hours.</p>
          <p>Best regards,<br><strong>Sky Alam International Tours</strong><br>
          support@skyalamtours.com<br>
          www.skyalamtours.com</p>
        </div>
      `,
    });

    console.log("Email sent successfully!");
    res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      success: false,
      message: "Error sending email. Please try again later.",
    });
  }
});

// ---------- START SERVER ----------
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/mail`);
});
