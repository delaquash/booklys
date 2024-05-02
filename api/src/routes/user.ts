import express from "express";
import {currentUser, register} from "../controllers/User";
import { isAdmin, verifyUser } from "../utils/verifyToken";
import { check } from "express-validator";
import verifyToken from "../middleware/auth";
const router = express.Router()

// Validation middleware array
const userValidationRules = [
    check("firstName", "First Name is required").isString(),
    check("lastName", "Last Name is required").isString(),
    check("email", "Email is required").isEmail(),
    check("password", "Password with 6 or more characters required").isLength({
      min: 6,
    }),
  ];
// register a user
router.post("/register", userValidationRules,register);
router.get("/currentUser", verifyToken, currentUser)
// privately update a user
// router.put("/:id", verifyUser, updateUser);
// privately delete user
// router.delete("/:id",verifyUser, deleteUser);
// publicly find all user
// router.get("/", isAdmin, findAllUsers);
// privately find user
// router.get("/:id", verifyUser, findUser);

export default router;