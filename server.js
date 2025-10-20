// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Middleware (optional)
app.use(express.json());

// MongoDB connection string
const mongoURI = "mongodb://127.0.0.1:27017/practiceDB";

// OR use your Atlas URI (example):
// const mongoURI = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydatabase";

// Connect to MongoDB
mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Simple test route using try-catch block
app.get("/", async (req, res) => {
  try {
    // Check database connection state
    if (mongoose.connection.readyState !== 1) {
      // log the error message
      console.log("Database not connected");

      // throws an error
      throw new Error("Database not connected");
    }
    res.send("MongoDB Connection Successful!");

    // log the message
    console.log("MongoDB Connection Succesful!");
  } catch (err) {
    // log the error message
    console.log("Error connecting to MongoDB: " + err.message);

    res.status(500).send("Error connecting to MongoDB: " + err.message);
  }
});

// app.get("/", (req, res) => {
//   const error = "";
//   if (error) {
//     return res.status(500).send("Error saving data");
//   } else {
//     res.send("MongoDB Connection Successful!");
//   }
// });

// Simple test route - Example
// app.get("/", (req, res) => {
//     res.send("MongoDB Connection Successful!");
// });

// Start server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
