const express = require("express");
const app = express();

const data = require("./data");

// initializing the port
const PORT = 3000;

// user route to get the data from query parameters
app.get("/user", function (req, res) {
  const name = req.query.name; // user name
  const age = req.query.age; // user age

  if (name && age) {
    res.send(data);
    console.log("Profile for different users");
    console.log("Name:", name);
    console.log("Age:", age);
    console.log(`Hi, I'm ${name} & my age is ${age}`);
  } else {
    // if query parameter is missing sends an error message
    res
      .status(400)
      .send({ error: "Please provide a name and age in query parameter" });
    console.log("No name provided");
  }
});

// server listening
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
