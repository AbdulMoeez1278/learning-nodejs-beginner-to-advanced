const express = require("express");

// importing your data
const data = require("./data");
const jsonData = require("./jsonData");

const app = express();

const port = 3000;

// application level router
const verification = (req, res, next) => {
  const age = parseInt(req.query.age); // Read age from query param

  if (isNaN(age)) {
    return res.status(400).send("Age is required and must be a number.");
  }

  if (age <= 0) {
    return res.status(400).send("Age must be a positive number.");
  }

  if (age < 18) {
    return res.status(403).send("Access denied: User must be 18 or older.");
  }

  if (age > 45) {
    return res
      .status(400)
      .send(
        `Access denied: User's age ${req.query.age} is greater then the following age`
      );
  }

  // Age is valid, proceed to route handler
  next();
};

app.get("/", (req, res) => {
  res.send("Data are getting fetched!");
  console.log("Data is trying to be fetched");
});

app.get("/users", (req, res) => {
  res.json(data);
  console.log("Getting data related to the users");
});

app.get("/profile", (req, res) => {
  res.send("<h1>Profile for Different users</h1>");
  console.log("Profile for different users");
});

app.get("/admin", verification, (req, res) => {
  res.json(jsonData);
  console.log("Data is stored in the JSON form");
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
