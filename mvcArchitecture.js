const express = require("express");
const app = express();
const ejs = require("ejs");

const port = 3000;

// Model
const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 3, title: "1984", author: "George Orwell" },
];

// View
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Controller
app.get("/", (req, res) => {
  res.render("books", { books });
  console.log("Books data is being fetched");
});

// Server
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
