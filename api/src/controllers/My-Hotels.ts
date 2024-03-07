import { NextFunction, Request, Response } from "express";
import cloudinary from "cloudinary";
import { HotelType } from "../types/data";
import Hotel from "../models/Hotel";
import { body } from "express-validator";


  export const createHotel = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const imageFiles = req.files as Express.Multer.File[];
        const newHotel: HotelType = req.body;
        // upload images to cloudinary
        const uploadPromises = imageFiles.map(async(image)=> {
            const b64 = Buffer.from(image.buffer).toString("base64");
            let dataURI = "data:" + image.mimetype + ";base64," + b64;
            const res = await cloudinary.v2.uploader.upload(dataURI);
            return res.url
        });
        //  add the url of each uploaded file to hotel object
        const imageUrls = await Promise.all(uploadPromises);
        newHotel.imageUrls = imageUrls;
        newHotel.lastUpdated = new Date();
        newHotel.userId = req.userId;
        // Save the hotel in our database
        const hotel = new Hotel(newHotel);
        await hotel.save();

        // return a successfull return
        res.status(201).send(hotel)
        
    } catch (error) {
        console.log("Error creating hotel: ", error)
        res.status(500).json({ message: "Server Error"})
    }
};