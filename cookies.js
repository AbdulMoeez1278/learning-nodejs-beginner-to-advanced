// impporting required modules
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

// Use cookie-parser middleware
app.use(cookieParser());

// setting cookies
app.get("/set-cookie", (req, res) => {
  res.cookie("myCookie", "cookie_value", {
    maxAge: 3600000, // Cookie expires in 1 hour (in milliseconds)
    httpOnly: true, // Prevents client-side JavaScript access
    secure: true, // Only send over HTTPS (in production)
    // other options like 'domain', 'path', 'sameSite' can be added
  });
  console.log("Cookie set successfully");
  res.send("Cookie set successfully");
});

// getting cookies
app.get("/get-cookie", (req, res) => {
  const cookieValue = req.cookies.myCookie;
  if (cookieValue) {
    console.log(cookieValue);
    res.send(`Value of myCookie: ${cookieValue}`);
  } else {
    res.send("myCookie not found");
  }
});

// cleaning cookies
app.get("/clear-cookie", (req, res) => {
  res.clearCookie("myCookie");
  console.log("Cookie cleared successfully");
  res.send("Cookie cleared successfully");
});

// server listen
app.listen(5000, (req, res) => {
  console.log("Server is listening on http://localhost:5000");
});
