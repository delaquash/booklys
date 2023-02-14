import express from "express";
import { RegisterUser } from "../controllers/Auth";

const router = express.Router()

router.post("/", RegisterUser)

export default router;