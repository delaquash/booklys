import { NextFunction, Request, Response } from "express";
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
  } catch (err) {
    next(err);
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
  } catch (err) {
    next(err);
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
  } catch (err) {
    next(err);
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
  } catch (err) {
    next(err);
  }
};

export const findAllHotels = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const findAllHotels = await Hotel.find(req.query);
    res.status(200).json(findAllHotels);
  } catch (err) {
    next(err);
  }
};

interface IHotels {
  split(arg0: string): unknown;
  cities: any;
}

export const findHotelByCity = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  /* Splitting the cities by comma. */
  const cities: any = req.query.cities;
  const splitedCity = cities.split(",");
  try {
    /* Counting the number of documents in the database. */
    const list = await Promise.all(
      splitedCity.map((city: any) => {
        return Hotel.countDocuments({ city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
export const findHotelByType = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });
    const resortCount = await Hotel.countDocuments({ type: "resort" });
    const appartmentCount = await Hotel.countDocuments({ type: "appartment" });
    const villaCount = await Hotel.countDocuments({ type: "villa" });
    const cabinCount = await Hotel.countDocuments({ type: "cabin" });
    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "cabin", count: cabinCount },
      { type: "appartment", count: appartmentCount },
      { type: "resort", count: resortCount },
      { type: "villa", count: villaCount },
    ]);
  } catch (err) {
    next(err);
  }
};
