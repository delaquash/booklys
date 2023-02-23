import Room from "../models/Room";
import ErrorException from "../utils/error";
import Hotel from "../models/Hotel";
import { NextFunction, Request, Response } from "express";

export const createRoom = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const hotelId = req.params.hotelid;
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: {
          rooms: savedRoom._id,
        },
      });
      res.status(200).json("Room has been created successfully");
    } catch (err) {
      next(err);
    }
  } catch (err) {
    next(err);
  }
};

export const updateRoom = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(201).json(updatedRoom)
  } catch (err) {
    next(err)
  }
};

export const deleteRoom = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      await Room.findByIdAndDelete(req.params.id);
      res.status(201).json("Room has been deleted successfully.");
    } catch (err) {
      next(err)
    }
  };