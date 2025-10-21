const mongoose = require("mongoose");

// Define Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, default: 18, required: true },
});

// Create Model
const User = mongoose.model("User", userSchema);

// Export the Model
module.exports = User;
