import { NextFunction, Request, Response } from "express";
import Hotel from "../models/Hotel";
import { HotelType } from "../types/data";
export const bookings = async ( req:Request, res: Response, next: NextFunction ) => {
    try {
        const hotels = await Hotel.find({
            bookings: {$elemMatch: {userId: req.userId}}
        })

        const results = hotels.map((hotel)=> {
            const userBookings = hotel.bookings.filter((booking)=> booking.userId === req.userId)
   
        const hotelWithUserBooking: HotelType = {
            ...hotel.toObject(),
            bookings: userBookings, 
        }    

    })
    } catch (error) {
        next(error)
    }
}