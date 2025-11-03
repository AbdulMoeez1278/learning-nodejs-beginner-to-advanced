import express from "express";
import { getOrderSummary } from "../controllers/orderController.js";

const router = express.Router();

router.get("/summary", getOrderSummary);

export default router;
