"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdmin = exports.verifyUser = exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const error_1 = __importDefault(require("../../src/utils/error"));
const verifyToken = (req, res, next) => {
    /* Getting the token from the cookie. */
    const token = req.cookies.access_token;
    /* Checking if the token is not present, then it will throw an error. */
    if (!token) {
        return next(new error_1.default(401, "You are not authorised to perform this function."));
    }
    jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err)
            return next(new error_1.default(403, "Token not valid"));
        req.user = user;
        next();
    });
};
exports.verifyToken = verifyToken;
const verifyUser = (err, req, res, next) => {
    (0, exports.verifyToken)(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        }
        else {
            if (err)
                return next(new error_1.default(403, "You are not authorised to perform this action."));
        }
    });
};
exports.verifyUser = verifyUser;
const isAdmin = (err, req, res, next) => {
    (0, exports.verifyToken)(req, res, () => {
        if (req.user.isAdmin) {
            next();
        }
        else {
            if (err)
                return next(new error_1.default(403, "You are not authorised to perform this action."));
        }
    });
};
exports.isAdmin = isAdmin;
