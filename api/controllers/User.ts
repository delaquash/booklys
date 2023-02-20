import { Response, Request, NextFunction } from "express";
import User from "../models/User";

export const updateUser = async (req:Request, res:Response, next:NextFunction)=>{
    try {
         const updateUser = await User.findByIdAndUpdate(req.params.id, 
             { $set: req.body },
             { new: true }
         )
         res.status(201).json(updateUser)
        } catch (error) {
         res.status(500).json(error)
     }
}

export const deleteUser = async(req: Request, res: Response, next: NextFunction)=> {
    try {
         await User.findByIdAndDelete(req.params.id)
        res.status(201).json("User has been deleted successfully.")
    } catch (error) {
        res.status(500).json(error)
    }
}

export const findAllUsers = async(req: Request, res: Response, next: NextFunction)=> {
    try {
         const findAllUsers = await User.find();
         res.status(200).json(findAllUsers)
     } catch (error) {
         res.status(500).json(error)
     }

}