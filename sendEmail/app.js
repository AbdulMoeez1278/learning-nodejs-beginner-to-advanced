// simple email send

// import/ require modules
require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");

// initialize express as an app
const app = express();

// initializing port
const port = 3200;

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

  // mail options
  const mailOptions = {
    from: "abdulm2915@gmail.com",
    to: "abdulm2915@gmail.com",
    subject: req.body.subject,
    text: req.body.message,
    // reverse mail
    //   html: `
    //   <div style="font-family: Arial, sans-serif; line-height: 1.6;">
    //     <h2 style="color: #10B981;">Thank you for reaching out!</h2>
    //     <p>Dear ${req.body.name || "Customer"},</p>
    //     <p>We’ve received your message:</p>
    //     <blockquote style="border-left: 4px solid #10B981; padding-left: 10px; color: #555;">
    //       ${req.body.message}
    //     </blockquote>
    //     <p>Our team will get back to you within 24–48 hours.</p>
    //     <p>Best regards,<br><strong>Sky Alam International Tours</strong><br>
    //      support@skyalamtours.com<br>
    //      www.skyalamtours.com</p>
    //   </div>
    // `,
    //   replyTo: "abdulm2915@gmail.com", // so replies go to your business email
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error:", error);
      return res.status(500).send("Error sending email!"); // return stops here
    }
    res.send("Email sent successfully!");
  });

  // res.send("Email send");
});

// server listen
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/mail`);
});

// Github Repo
// https://github.com/nodemailer/nodemailer/issues/1544
