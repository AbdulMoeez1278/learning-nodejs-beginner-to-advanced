// First Method - less security
// // Enable CORS for all origins (less secure, use with caution):
// const express = require("express");
// const cors = require("cors");
// const app = express();

// app.use(cors()); // This allows requests from all origins.

// // Your routes go here
// app.get("/data", (req, res) => {
//   res.json({ message: "Data from API" });
// });

// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

// Second Method - Recommended for security
// Enable CORS for specific origins (recommended for security):
const express = require("express");
const cors = require("cors");
const app = express();

const allowedOrigins = ["http://localhost:4200", "https://yourfrontend.com"];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allowed HTTP methods
  credentials: true, // Allow cookies and authentication headers
  allowedHeaders: "Content-Type,Authorization", // Allowed request headers
};

app.use(cors(corsOptions));

// Your routes go here
app.get("/data", (req, res) => {
  res.json({ message: "Data from API" });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
