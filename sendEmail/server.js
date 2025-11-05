// import / require modules
require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");

// initialize express as an app
const app = express();

// initializing port
const port = 3000;

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// template engine
app.set("view engine", "ejs");

// Transporter to send email
const transporter = nodemailer.createTransport({
  // gives an error that says - 535-5.7.8 Username and Password not accepted
  service: "gmail",
  // host: "smtp.gmail.com",
  // port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// logging credentials
console.log("User:", process.env.SMTP_USER);
console.log("Pass exists:", !!process.env.SMTP_PASS);

// get route
app.get("/mail", (req, res) => {
  res.render("mail");
});

// post route
app.post("/submit-email", (req, res) => {
  console.log(req.body);

  const { name, email, subject, message } = req.body;

  // 1️⃣ Email sent to the company (you)
  const adminMailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER, // your company inbox
    subject: `New Contact Form Submission: ${subject}`,
    text: req.body.message,
    html: `
      <h3>New Inquiry Received</h3>
    //   <p><strong>Name:</strong> ${name}</p>
    //   <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `,
  };

  // 2️⃣ Auto-reply email to the user
  const userMailOptions = {
    from: process.env.SMTP_USER, // your company email
    to: process.env.SMTP_USER, // user's email address
    subject: "Thank You for Contacting Sky Alam International Tours!",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="color: #10B981;">Thank you for reaching out!</h2>
        <p>Dear ${name || "Valued Customer"},</p>
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
  };

  // Send both emails
  transporter.sendMail(adminMailOptions, (error, info) => {
    if (error) {
      console.error("Error sending admin email:", error);
      return res.status(500).send("Error sending email to company");
    }

    // Then send the auto-reply to the user
    transporter.sendMail(userMailOptions, (err, info) => {
      if (err) {
        console.error("Error sending reply email:", err);
        return res.status(500).send("Error sending reply email");
      }

      res.status(200).send("Email sent successfully!");
    });
  });

  // res.send("Email send");
});

// server listen
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/mail`);
});

// Github Repo
// https://github.com/nodemailer/nodemailer/issues/1544
