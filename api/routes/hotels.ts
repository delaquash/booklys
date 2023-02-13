import express from "express";
import  { createHotel, deleteHotel, findAllHotels, updateHotel }  from "../controllers/Hotel";
const router = express.Router();

// creating new hotel
router.post("/", createHotel)
router.delete("/:id", deleteHotel)
router.put("/:id", updateHotel)
router.get("/", findAllHotels)

export default router;

