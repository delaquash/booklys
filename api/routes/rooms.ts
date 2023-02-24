import express from "express";
const router = express.Router();
import { isAdmin } from "../utils/verifyToken";
import {
  createRoom,
  deleteRoom,
  findAllRoom,
  findRoom,
  updateRoom,
} from "../controllers/Room";

// creating new hotel
router.post("/", isAdmin, createRoom);
// deleting a Room
router.delete("/:id", isAdmin, deleteRoom);
// updating a Room
router.put("/:id", isAdmin, updateRoom);
// get all Rooms
router.get("/", findAllRoom);
// get single hostel
router.get("/:id", findRoom);

export default router;
