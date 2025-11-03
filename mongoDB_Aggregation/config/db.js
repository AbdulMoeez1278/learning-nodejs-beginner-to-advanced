import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mongoDB_Aggregation");
    console.log("MongoDB Connected Successfully!");
  } catch (err) {
    console.error("MongoDB Connection Failed:", err.message);
    process.exit(1);
  }
};
