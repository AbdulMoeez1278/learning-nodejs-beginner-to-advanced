const express = require("express");
const ejs = require("ejs");
const app = express();
const port = 3000;

// Model - static data
const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 3, title: "1984", author: "George Orwell" },
];

// View - setting up EJS
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// handler - Controller
app.get("/", (req, res) => {
  // const isLogin = true; // Example login status
  res.render("books", { books, isLogin: true }); // Example with login status
  console.log("Books data is being fetched");
});

// New route for users
app.get("/users", (req, res) => {
  res.render("users");
  console.log("users data is being fetched");
});

// Server
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
