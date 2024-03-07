import express from "express";
import cloudinary from "cloudinary";
import {
  createHotel,
//   deleteHotel,
//   findAllHotels,
//   findHotel,
//   findHotelByCity,
//   findHotelByType,
//   updateHotel,
} from "../controllers/My-Hotels";
import { isAdmin } from "../utils/verifyToken";
import verifyToken from "../middleware/auth";
import UploadImage from "../utils/CloudinaryStorage";
const router = express.Router();

router.post("/", UploadImage.array("imageFiles", 6),verifyToken, createHotel); 

export default router;