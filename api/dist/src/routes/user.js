"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_1 = require("../controllers/User");
const router = express_1.default.Router();
// register a user
router.post("/register", User_1.register);
// privately update a user
// router.put("/:id", verifyUser, updateUser);
// privately delete user
// router.delete("/:id",verifyUser, deleteUser);
// publicly find all user
// router.get("/", isAdmin, findAllUsers);
// privately find user
// router.get("/:id", verifyUser, findUser);
exports.default = router;
