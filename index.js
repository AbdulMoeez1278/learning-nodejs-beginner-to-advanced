const express = require("express");

const app = express();

const port = 3000;
const hostname = "127.0.0.1";

app.get("/users", (req, res) => {
  res.send("Getting data related to the users");
  res.status(500).send("Something broke!");
});

app.get("/admin", (req, res) => {
  res.send([
    {
      id: 1,
      name: "Moeez",
      email: "moeez@gmail.com",
      city: "Lahore",
    },
    {
      id: 2,
      name: "Rameez",
      email: "rameez@gmail.com",
      city: "Dubai",
    },
    {
      id: 3,
      name: "Bilal",
      email: "bilal@gmail.com",
      city: "Haroonabad",
    },
    {
      id: 4,
      name: "Hamza",
      email: "hamza@gmail.com",
      city: "Lahore",
    },
    {
      id: 5,
      name: "Sohaib",
      email: "sohaib@gmail.com",
      city: "Lahore",
    },
  ]);
});

app.listen(port, hostname, () => {
  console.log(`Server is listening on localhost:${port}`);
});
