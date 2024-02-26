import express from "express";
import {register} from "../controllers/User";
import { isAdmin, verifyUser } from "../utils/verifyToken";
const router = express.Router()


// register a user
router.post("/register", register)
// privately update a user
// router.put("/:id", verifyUser, updateUser);
// privately delete user
// router.delete("/:id",verifyUser, deleteUser);
// publicly find all user
// router.get("/", isAdmin, findAllUsers);
// privately find user
// router.get("/:id", verifyUser, findUser);

export default router;