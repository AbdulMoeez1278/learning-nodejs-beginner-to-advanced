require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");

const app = express();

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// template engine
app.set("view engine", "ejs");

// Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
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

  // mail options
  const mailOptions = {
    from: "abdulm2915@gmail.com",
    to: "abdulm2915@gmail.com",
    subject: req.body.subject,
    text: req.body.message,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error:", error);
      return res.status(500).send("Error sending email"); // return stops here
    }
    res.send("Email sent successfully!");
  });

  // res.send("Email send");
});

app.listen(3200);
