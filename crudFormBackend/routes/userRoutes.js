const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

// Get all users
router.get("/", getUsers);

// Get a single user by ID (important for Edit feature)
router.get("/:id", getUserById);

// Create a new user
router.post("/", createUser);

// Update existing user
router.put("/:id", updateUser);

// Delete a user
router.delete("/:id", deleteUser);

module.exports = router;
