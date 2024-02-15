import express from "express";
import { login, validate} from "../controllers/Auth";
import verifyToken from "../middleware/auth";

const router = express.Router();

router.post("/login", login);
router.get("/validate",  validate);

export default router;
