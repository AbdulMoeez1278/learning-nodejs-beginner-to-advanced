import mongoose from "mongoose";
import dotenv from "dotenv";
import { User } from "../models/userModel.js";
import { Product } from "../models/productModel.js";
import { Order } from "../models/orderModel.js";

dotenv.config();

const MONGO_URI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/mongoDB_Aggregation";

const seedData = async () => {
  try {
    await mongoose.connect(MONGO_URI);

    // log the dummy data
    console.log("MongoDB Connected for Seeding");

    // Clear existing data
    await User.deleteMany({});
    await Product.deleteMany({});
    await Order.deleteMany({});

    // Insert Users
    await User.insertMany([
      { _id: 1, name: "Moeez" },
      { _id: 2, name: "Rameez" },
      { _id: 3, name: "Bilal" },
    ]);

    // Insert Products
    await Product.insertMany([
      { _id: 101, name: "Laptop", price: 1000 },
      { _id: 102, name: "Mouse", price: 20 },
      { _id: 103, name: "Keyboard", price: 50 },
    ]);

    // Insert Orders
    await Order.insertMany([
      { _id: 1, user_id: 1, product_id: 101, quantity: 2, status: "delivered" },
      { _id: 2, user_id: 2, product_id: 102, quantity: 1, status: "delivered" },
      { _id: 3, user_id: 3, product_id: 103, quantity: 10, status: "pending" },
    ]);

    console.log("Data Seeded Successfully!");
    process.exit(0);
  } catch (err) {
    console.error("Error Seeding Data:", err.message);
    process.exit(1);
  }
};

seedData();
