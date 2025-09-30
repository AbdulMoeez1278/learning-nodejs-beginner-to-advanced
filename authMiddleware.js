const express = require("express");
const app = express();

// Authentication middleware || application level middleware
function authMiddleware(req, res, next) {
  const token = req.query.token; // assume token query param mein aa raha hai

  if (token === "secret123") {
    console.log("Authentication Successful");
    next(); // allow request to continue
  } else {
    console.log("Authentication Failed");
    res.status(401).send("Unauthorized: Invalid Token");
  }
}

// Public route (no auth required)
app.get("/", (req, res) => {
  res.send("Welcome to Public Home Page");
});

// Protected route (auth required)
app.get("/dashboard", authMiddleware, (req, res) => {
  res.send("Welcome to your Dashboard");
});

// server listen
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
