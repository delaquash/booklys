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
      res.status(200).json("Room has been created successfully")
    } catch (err) {
      next(err);
    }
  } catch (err) {
    next(err);
  }
};

export const updateRoom = async(req: Request, res: Response, next:NextFunction)=> {
    try {
        const updatedRoom = 
    } catch (error) {
        
    }
}