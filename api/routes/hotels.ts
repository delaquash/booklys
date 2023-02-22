import express from "express";
import {
  createHotel,
  deleteHotel,
  findAllHotels,
  findHotel,
  updateHotel,
} from "../controllers/Hotel";
import { isAdmin } from "../utils/verifyToken";
const router = express.Router();

// creating new hotel
router.post("/", isAdmin, createHotel);
// deleting a hotel
router.delete("/:id", isAdmin, deleteHotel);
// updating a hotel
router.put("/:id", isAdmin, updateHotel);
// get all hotels
router.get("/", findAllHotels);
// get single hostel
router.get("/:id", findHotel);

export default router;
