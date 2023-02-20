import express from "express";
import  { createHotel, deleteHotel, findAllHotels, findHotel, updateHotel }  from "../controllers/Hotel";
const router = express.Router();

// creating new hotel
router.post("/", createHotel)
// deleting a hotel
router.delete("/:id", deleteHotel)
// updating a hotel
router.put("/:id", updateHotel)
// get all hotels
router.get("/", findAllHotels)
// get single hostel
router.get("/:id", findHotel)

export default router;

