const express = require("express");
const app = express();

const port = 3000;

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
app.use(express.json()); // Middleware to parse JSON bodies

app.get("/", (req, res) => {
  res.render("index", { title: "Rendering HTML & Forms", username: "Guest" }); // Passing data to the template
});

app.post("/submit-form", (req, res) => {
  const { name } = req.body; // Accessing form data
  console.log("Submitted name:", name); // Logging the submitted name
  res.send(`Thank you, ${name}!`); // Sending a response back to the client
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
