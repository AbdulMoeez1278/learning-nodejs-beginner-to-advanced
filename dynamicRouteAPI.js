const express = require("express");
const app = express();

const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample data
let users = [
  { id: 1, name: "Moeez", city: "Lahore" },
  { id: 2, name: "Ali", city: "Karachi" },
  { id: 3, name: "Rameez", city: "Dubai" },
  { id: 4, name: "Bilal", city: "Haroonabad" },
];

app.get("/", (req, res) => {
  res.json([users[0], users[1], users[2]]);

  // Log all users
  console.log([users[0], users[1], users[2]]);
});

// GET all users
app.get("/users", (req, res) => {
  res.json(users);

  // Log all users
  console.log(users);
});

// GET a user by ID (Dynamic route) - request params method
app.get("/users/:id", (req, res) => {
  // Convert id to integer
  const id = parseInt(req.params.id);

  // Find user by id
  const user = users.find((u) => u.id === id);

  // Handle user not found
  if (!user) {
    console.log("User not found");
    return res.status(404).send({ message: "User not found" });
  }

  // Send found user as JSON
  res.json(user);

  // Log the found user
  console.log(users);
});

// Search users by name and city using query parameters
app.get("/search", (req, res) => {
  const { name, city } = req.query;
  res.send(`Searching for ${name} in ${city}`);
});

// Products route with query parameters
app.get("/products", (req, res) => {
  const { category, price } = req.query;
  res.send(`Products in category: ${category} with price: ${price}`);
});

// Example route /example/a - static route using params
app.get("/example/a", (req, res) => {
  res.send({ message: "This is example A" });
});

// Combination of Route + Query Params + Request Body
// app.put("/users/:id", (req, res) => {
//   const id = req.params.id;
//   const { city } = req.query;
//   const updateData = req.body;

//   res.json({
//     message: "User updated successfully",
//     userId: id,
//     updatedCity: city,
//     updatedData: updateData,
//   });
// });

app.listen(port, () => {
  console.log("Server running on http://localhost:3000");
});
