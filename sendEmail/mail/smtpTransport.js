const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify SMTP connection
transporter.verify((err, success) => {
  if (err) {
    console.error("SMTP Connection Error", err.message);
  } else {
    console.log("SMTP Server Ready");
  }
});

module.exports = transporter;
