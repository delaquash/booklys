import express from "express";
import cloudinary from "cloudinary";
import {
  createHotel
} from "../controllers/My-Hotels";
import { isAdmin } from "../utils/verifyToken";
import verifyToken from "../middleware/auth";
import UploadImage from "../utils/CloudinaryStorage";
import { body } from "express-validator";
const router = express.Router();

// Validation middleware array
const validator =  [
    body("name").notEmpty().withMessage("Name is required"),
    body("city").notEmpty().withMessage("City is required"),
    body("country").notEmpty().withMessage("Country is required"),
    body("description").notEmpty().withMessage("Description is required"),
    body("type").notEmpty().withMessage("Hotel type is required"),
    body("pricePerNight")
      .notEmpty()
      .isNumeric()
      .withMessage("Price per night is required and must be a number"),
    body("facilities")
      .notEmpty()
      .isArray()
      .withMessage("Facilities are required"),
  ]

router.post("/create-hotel", UploadImage.array("imageFiles", 6),verifyToken,validator, createHotel); 

export default router;