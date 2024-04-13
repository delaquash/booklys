import express from "express";
import cloudinary from "cloudinary";
import {
  searchHotel,
//   deleteHotel,
//   findAllHotels,
//   findHotel,
//   findHotelByCity,
//   findHotelByType,
//   updateHotel,
} from "../controllers/Hotel";
import verifyToken from "../middleware/auth";
const router = express.Router();

// // creating new hotel
router.get("/search", searchHotel)

export default router;
