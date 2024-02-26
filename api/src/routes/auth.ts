import express from "express";
import { login,logout, validateToken } from "../controllers/Auth";
import verifyToken from "../middleware/auth";

const router = express.Router();

router.post("/login", login);
router.post("/logout", logout);
router.get("/validate-token", verifyToken, validateToken);

export default router;
