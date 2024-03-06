"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorException extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
        this.message = message;
    }
}
exports.default = ErrorException;
