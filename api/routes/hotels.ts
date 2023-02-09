import express, {  Request, Response } from "express";
import Hotel from "../models/Hotel";
const router = express.Router();

router.post("/", async (req:Request, res:Response)=> {
    const newHotel = new Hotel(req.body)
    try {
        const savedHotel =await newHotel.save()
        res.status(201).json(savedHotel)
    } catch (error) {
        res.status(500).json(error)
    }
})

export default router;