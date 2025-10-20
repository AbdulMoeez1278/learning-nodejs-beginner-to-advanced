const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/userModel");

const app = express();

// Set EJS as the view engine
app.set("view engine", "ejs");

// Middleware to serve static files and parse data
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // extended: true is used, the middleware can parse nested objects and arrays within the URL-encoded data, providing a more flexible way to handle form submissions that might include structured information.

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/practiceDB")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Connection error:", err));

// Static data
// const users = [
//   { name: "Moizy", email: "moizy@gmail.com", age: 23 },
//   { name: "Ali Khan", email: "alikhan@gmail.com", age: 25 },
//   { name: "Sara Ahmed", email: "sara.ahmed@gmail.com", age: 22 },
//   { name: "Bilal Sheikh", email: "bilal.sheikh@gmail.com", age: 27 },
//   { name: "Hina Malik", email: "hina.malik@gmail.com", age: 24 },
//   { name: "Usman Raza", email: "usman.raza@gmail.com", age: 29 },
//   { name: "Ayesha Noor", email: "ayesha.noor@gmail.com", age: 21 },
//   { name: "Danish Iqbal", email: "danish.iqbal@gmail.com", age: 26 },
// ];

// --- ROUTES ---

// ROUTE: Fetch and Display Users
app.get("/", async (req, res) => {
  try {
    // Fetch all users from MongoDB
    const users = await User.find();

    // log the users
    console.log(users, `User's length is: `, users.length);

    // Render EJS file and pass data
    res.render("index", { users });
  } catch (err) {
    res.status(500).send("Error fetching data: " + err.message);
  }
});

// Route to add sample data (optional)
// app.get("/add", async (req, res) => {
//   await User.create(users);
//   res.send("Users added!");
// });

// Route to add sample data (optional)
// app.get("/remove", async (req, res) => {
//   try {
//     await User.deleteMany({}); // Empty filter deletes all users
//     res.send("All users deleted successfully!");
//   } catch (err) {
//     res.status(500).send("Error deleting users: " + err.message);
//   }
// });

// Server listen
const port = 5000;
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
