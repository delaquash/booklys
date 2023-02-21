import express from "express";
import { deleteUser, findAllUsers, findUser, updateUser } from "../controllers/User";
const router = express.Router()

// privately update a user
router.post("/:id", updateUser);
// privately delete user
router.delete("/:id", deleteUser);
// publicly find all user
router.get("/", findAllUsers);
// privately find user
router.get("/:id", findUser)

export default router;