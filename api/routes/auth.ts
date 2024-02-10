import express from "express";
import { login, validateToken } from "../controllers/Auth";

const router = express.Router();

// router.post("/register", register);
router.post("/login", login);
router.get("/validate-token", validateToken)

export default router;
