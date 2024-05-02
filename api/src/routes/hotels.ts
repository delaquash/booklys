import express from "express";
import cloudinary from "cloudinary";
import {
  searchHotel,
//   deleteHotel,
//   findAllHotels,
  SearchHotelById,
//   findHotelByCity,
//   findHotelByType,
//   updateHotel,
} from "../controllers/Hotel";
import verifyToken from "../middleware/auth";
import { param } from "express-validator";
const router = express.Router();

const validator = [param("id").notEmpty().withMessage("HotelID is required!!!")]

// // creating new hotel
router.get("/search", searchHotel)
router.get("/:id",validator, SearchHotelById)

export default router;
