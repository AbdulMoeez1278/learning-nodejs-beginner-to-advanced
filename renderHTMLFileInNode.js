// Importing modules
const express = require("express");
const path = require("path");
const app = express();

// home page route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html")); // shows home page
  console.log("Home page is served");
});

// about page route
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/about.html")); // shows about page
  console.log("About page is served");
});

// products page route
app.get("/products", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/products.html")); // shows products page
  console.log("Products page is served");
});

// 404 Not Found route (should be the last route)
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "/public/pageNotFound.html"));
  console.log("404 Page is served");
});

// server listen
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
