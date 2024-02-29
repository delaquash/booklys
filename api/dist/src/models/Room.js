"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const RoomSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    maxPeople: {
        type: Number,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    roomNumbers: [{ number: Number, unavailableDates: { type: [Date] } }],
}, { timestamps: true });
const Room = (0, mongoose_1.model)("Room", RoomSchema);
exports.default = Room;
