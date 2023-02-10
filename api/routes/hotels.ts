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

// Delete a hotel by ID
router.delete("/:id",async (req: Request, res:Response) => {
    try {
        const deletedHotel = await Hotel.findByIdAndDelete(req.params.id)
        res.status(201).json("Hotel has been deleted successfully.")
    } catch (error) {
        res.status(500).json(error)
    }
})

// find all hotels
router.get("/", async(req: Request, res:Response)=> {
    try {
        const findAllHotels = await Hotel.find();
        res.status(200).json(findAllHotels)
    } catch (error) {
        res.status(500).json(error)
    }
})
export default router;

