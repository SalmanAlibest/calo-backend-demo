
import express from "express";
import { routeOrder } from "../controllers/routingController.js";
const router = express.Router();
router.post("/route", routeOrder);
export default router;
