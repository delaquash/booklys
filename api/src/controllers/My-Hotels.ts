import { NextFunction, Request, Response } from "express";
import cloudinary from "cloudinary";
import { HotelType } from "../types/data";
import Hotel from "../models/Hotel";
import { body } from "express-validator";

export const createHotel = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const imageFiles = req.files as Express.Multer.File[];
        const newHotel: HotelType = req.body;
        //  add the url of each uploaded file to hotel object
        const imageUrls = await uploadImages(imageFiles);
        newHotel.imageUrls = imageUrls;
        newHotel.lastUpdated = new Date();
        newHotel.userId = req.userId;
        // Save the hotel in our database
        const hotel = new Hotel(newHotel);
        await hotel.save();

        // return a successfull response
        res.status(201).send(hotel);
        
    } catch (error) {
        console.log("Error creating hotel: ", error)
        res.status(500).json({ message: "Server Error"})
    }
};

export const getAllHotels = async (req: Request, res: Response) => {
    try {
        const hotels = await Hotel.find({userId: req.userId});
        res.status(200).json(hotels)
    } catch (error) {
        res.status(500).json({ message: "Server Error"})
    }
}

// upload images to cloudinary
async function uploadImages(imageFiles: Express.Multer.File[]) {
  if (!imageFiles || !Array.isArray(imageFiles)) {
      throw new Error('No image files provided or invalid data format');
  }

  const uploadPromises = imageFiles.map(async (image) => {
      const b64 = Buffer.from(image.buffer).toString("base64");
      let dataURI = "data:" + image.mimetype + ";base64," + b64;
      const res = await cloudinary.v2.uploader.upload(dataURI);
      return res.url;
  });

  const imageUrls = await Promise.all(uploadPromises);
  return imageUrls;
}

  