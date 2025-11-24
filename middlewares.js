const express = require("express");
const app = express();

// application-level middleware
app.use(express.json());

// port initialization
const port = 3000;

// login middleware
function login(req, res, next) {
  console.log("Login Middleware");
  next();
}

app.use(login);

// auth middleware
function authentication(req, res, next) {
  console.log("Authentication Middleware");
  next();
}

app.use(authentication);

// validation middleware
function validation(req, res, next) {
  console.log("Validation Middleware");
  next();
}

app.use(validation);

// basic get route
app.get("/", (req, res) => {
  console.log("Simple get route"); //ambiguous
  res.send({
    id: 1,
    name: "Abdul Moeez",
    city: "Lahore",
    designation: "Developer",
  });
});

// server listen
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
