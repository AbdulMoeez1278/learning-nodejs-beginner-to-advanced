// // app.js (simplified)
// require("dotenv").config();
// const express = require("express");
// const bodyParser = require("body-parser");
// const sendMail = require("./mail/sendEmail"); // from earlier example
// const app = express();
// app.use(bodyParser.json());

// app.post("/register", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     // 1. validate input
//     // 2. create user in DB (hash password before saving)
//     // 3. send welcome email (enqueue in prod)
//     await sendMail({
//       to: email,
//       subject: "Welcome to MyApp",
//       html: `<h1>Welcome ${name}</h1><p>Thanks for registering.</p>`,
//     });
//     res.json({ ok: true });
//   } catch (err) {
//     console.error("register error", err);
//     res.status(500).json({ ok: false, error: err.message });
//   }
// });

// app.listen(3000, () => {
//   console.log("Server is listening on http://localhost:3000");
// });

const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

// Handle email sending
app.post("/send-email", (req, res) => {
  const { recipient, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Define the email options
  const mailOptions = {
    from: "abdulm2915@gmail.com",
    to: recipient,
    subject: subject,
    text: message,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error occurred:", error);
      res.status(500).send("Error in sending email. Please try again later.");
    } else {
      console.log("Email sent:", info.response);
      res.send("Email sent successfully!");
    }
  });
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
