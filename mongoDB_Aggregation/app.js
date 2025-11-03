// optional file

import express from "express";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();
app.use(express.json());

// Base route
app.use("/api/orders", orderRoutes);

export default app;
