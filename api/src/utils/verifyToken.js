"use strict";
exports.__esModule = true;
exports.isAdmin = exports.verifyUser = exports.verifyToken = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var error_1 = require("./error");
var verifyToken = function (req, res, next) {
    /* Getting the token from the cookie. */
    var token = req.cookies.access_token;
    /* Checking if the token is not present, then it will throw an error. */
    if (!token) {
        return next(new error_1["default"](401, "You are not authorised to perform this function."));
    }
    jsonwebtoken_1["default"].verify(token, process.env.JWT_SECRET, function (err, user) {
        if (err)
            return next(new error_1["default"](403, "Token not valid"));
        req.user = user;
        next();
    });
};
exports.verifyToken = verifyToken;
var verifyUser = function (err, req, res, next) {
    (0, exports.verifyToken)(req, res, function () {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        }
        else {
            if (err)
                return next(new error_1["default"](403, "You are not authorised to perform this action."));
        }
    });
};
exports.verifyUser = verifyUser;
var isAdmin = function (err, req, res, next) {
    (0, exports.verifyToken)(req, res, function () {
        if (req.user.isAdmin) {
            next();
        }
        else {
            if (err)
                return next(new error_1["default"](403, "You are not authorised to perform this action."));
        }
    });
};
exports.isAdmin = isAdmin;
