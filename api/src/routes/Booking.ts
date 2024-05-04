import express from "express";
import { bookings } from "../controllers/Booking";

import verifyToken from "../middleware/auth";
import { body } from "express-validator";
const router = express.Router();

router.get("/", verifyToken, bookings)

export default router;