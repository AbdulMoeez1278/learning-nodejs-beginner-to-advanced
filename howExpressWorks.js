const express = require("express");
const data = require("./data");

// initialize express app
const app = express();

// middleware
app.use((req, res, next) => {
  console.log("Middleware function executed");
  next();
});

// get route - home
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// get route - about
app.get("/about", (req, res) => {
  res.send(data);
});

// server listen
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

// github repo
// https://github.com/abdulm2915-star/ecom-dashboard-project.git
