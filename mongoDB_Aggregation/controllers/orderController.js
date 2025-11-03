import { Order } from "../models/orderModel.js";

export const getOrderSummary = async (req, res) => {
  try {
    const result = await Order.aggregate([
      {
        // 1. Filters only "delivered" orders
        $match: { status: "delivered" },
        // $match: { status: "pending" },
      },
      {
        // 2. Joins orders with users (to get user name)
        $lookup: {
          from: "users",
          localField: "user_id",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        // 3. Flattens arrays created by lookup
        // $lookup always returns an array (user: [ {...} ]).
        // $unwind converts it into a single object so it’s easier to use later.
        $unwind: "$user",
      },
      {
        // 4. Joins orders with products (to get product info)
        $lookup: {
          from: "products",
          localField: "product_id",
          foreignField: "_id",
          as: "product",
        },
      },
      {
        // Flattens arrays created by lookup
        // $lookup always returns an array (user: [ {...} ]) - $unwind converts it into a single object so it’s easier to use later.
        $unwind: "$product",
      },
      {
        // 5. Groups by user and sums total order value
        // This groups all orders by user ID and calculates how much money each person spent.
        $group: {
          _id: "$user._id",
          name: { $first: "$user.name" },
          total: { $sum: { $multiply: ["$quantity", "$product.price"] } },
        },
      },
      {
        // 6. Selects only the fields we want in final output - Removes all the extra fields like product or quantity.
        $project: { _id: 1, name: 1, total: 1 },
      },
      {
        // 7. Sorts results by total price
        $sort: { total: -1 },
      },
    ]);

    console.log("Result is:", result);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
