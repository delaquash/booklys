import mongoose, { Schema, model } from "mongoose";

interface IRoom {
  title: string;
  price: number;
  maxPeople: number;
  desc: string;
  roomNumbers: string[];
}

const RoomSchema = new Schema<IRoom>(
  {
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
  },
  { timestamps: true }
);

const Room = model<IRoom>("Room", RoomSchema);
export default Room;
