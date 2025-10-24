require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());

var transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "salace2008765@outlook.com",
    pass: "alice123@",
  },
});

var mailOptions = {
  from: "salace2008765@outlook.com",
  to: "jerome20090101@gmail.com",
  subject: "This is a test: test",
  text: "TgK",
};

console.log("Sending mail");

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: Number(process.env.SMTP_PORT),
//   secure: process.env.SMTP_PORT == "465",
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
// });

// app.post("/contact", async (req, res) => {
//   try {
//     const { name, email, message } = req.body;
//     // basic validation
//     if (!name || !email || !message)
//       return res.status(400).json({ error: "Missing fields" });

//     await transporter.sendMail({
//       from: process.env.FROM_EMAIL,
//       to: process.env.SUPPORT_EMAIL, // your inbox
//       subject: `Contact form: ${name}`,
//       html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
//     });

//     res.json({ ok: true });
//   } catch (err) {
//     console.error("Email error:", err);
//     res.status(500).json({ error: "Failed to send email" });
//   }
// });

app.listen(3000, () =>
  console.log("Server is listening on http://localhost:3000")
);

// Steps to send an email through node.js
// const nodemailer = require("nodemailer");

// // Step A: Create transporter (Post Office)
// const transporter = nodemailer.createTransport({
//   service: "gmail", // which SMTP we want to use
//   auth: {
//     user: "yourgmail@gmail.com",   // Your email
//     pass: "yourapppassword"        // Gmail App Password
//   }
// });

// // Step B: Create the email message (Letter)
// const mailOptions = {
//   from: "yourgmail@gmail.com",     // sender
//   to: "recipient@example.com",     // receiver
//   subject: "Test Email From Node.js",  // title of email
//   text: "Hello! This is a test email sent from Node.js", // message body
// };

// // Step C: Send the email (Deliver letter)
// transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     console.log("❌ Error: ", error);
//   } else {
//     console.log("✅ Email sent: " + info.response);
//   }
// });
