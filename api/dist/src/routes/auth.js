"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Auth_1 = require("../controllers/Auth");
const auth_1 = __importDefault(require("../middleware/auth"));
const router = express_1.default.Router();
router.post("/login", Auth_1.login);
router.post("/logout", Auth_1.logout);
router.get("/validate-token", auth_1.default, Auth_1.validateToken);
exports.default = router;
