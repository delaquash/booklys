import express, {  Request, Response } from "express";
import Hotel from "../models/Hotel";
const router = express.Router();


// creating new hotel
router.post("/", async (req:Request, res:Response)=> {
    const newHotel = new Hotel(req.body)
    try {
        const savedHotel =await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (error) {
        res.status(500).json(error)
    }
})

// update a hotel using ID
router.put("/:id", async(req: Request, res: Response)=> {
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, 
            { $set: req.body },
            { new: true }
        )
        res.status(201).json(updateHotel)
    } catch (error) {
        res.status(500).json(error)
    }
})


export default router;

