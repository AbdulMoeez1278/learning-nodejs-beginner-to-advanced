import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  _id: Number,
  user_id: Number,
  product_id: Number,
  quantity: Number,
  status: String,
});

export const Order = mongoose.model("Order", orderSchema);
