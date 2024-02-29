"use strict";
exports.__esModule = true;
var express_1 = require("express");
var User_1 = require("../controllers/User");
var router = express_1["default"].Router();
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
exports["default"] = router;
