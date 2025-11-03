import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  _id: Number,
  name: String,
});

export const User = mongoose.model("User", userSchema);

// // app.js
// import mongoose from "mongoose";

// // await mongoose.connect("mongodb://127.0.0.1:27017/aggregationDemo");

// // SCHEMAS

// // users schema
// const userSchema = new mongoose.Schema({ _id: Number, name: String });

// // products schema
// const productSchema = new mongoose.Schema({
//   _id: Number,
//   name: String,
//   price: Number,
// });

// // orders schema
// const orderSchema = new mongoose.Schema({
//   _id: Number,
//   user_id: Number,
//   product_id: Number,
//   quantity: Number,
//   status: String,
// });

// // Models
// const User = mongoose.model("User", userSchema);
// const Product = mongoose.model("Product", productSchema);
// const Order = mongoose.model("Order", orderSchema);

// // RUN AGGREGATION
// const result = await Order.aggregate([
//   { $match: { status: "delivered" } },
//   {
//     $lookup: {
//       from: "users",
//       localField: "user_id",
//       foreignField: "_id",
//       as: "user",
//     },
//   },
//   { $unwind: "$user" },
//   {
//     $lookup: {
//       from: "products",
//       localField: "product_id",
//       foreignField: "_id",
//       as: "product",
//     },
//   },
//   { $unwind: "$product" },
//   {
//     $group: {
//       _id: "$user._id",
//       name: { $first: "$user.name" },
//       total: { $sum: { $multiply: ["$quantity", "$product.price"] } },
//     },
//   },
//   { $project: { _id: 1, name: 1, total: 1 } },
//   { $sort: { total: -1 } },
// ]);

// console.log(result);
// process.exit();
