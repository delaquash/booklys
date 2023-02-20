import { Response, Request, NextFunction } from "express";
import Hotel from "../models/Hotel";

export const createHotel = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateHotel = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updateHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(201).json(updateHotel);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteHotel = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(201).json("Hotel has been deleted successfully.");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const findHotel = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const findHotel = await Hotel.findById(req.params.id);
    res.status(200).json(findHotel);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const findAllHotels = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const findAllHotels = await Hotel.find();
    res.status(200).json(findAllHotels);
  } catch (error) {
    res.status(500).json(error);
  }
};
