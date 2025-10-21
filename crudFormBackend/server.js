// import modules
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

// DB configurations
dotenv.config();
connectDB();

// initialize express as an app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
// console.log(__dirname); // log the directory

// Routes
app.use("/api/users", userRoutes);

// GET API Route to serve the index.html file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// initializing PORT
const PORT = process.env.PORT;

// Server listen
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
