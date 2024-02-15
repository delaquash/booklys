import express from "express";
import { login,  validateToken } from "../controllers/Auth";
import verifyToken from "../middleware/auth";

const router = express.Router();

router.post("/login", login);
router.get("/validate-token", verifyToken, validateToken);


export default router;
