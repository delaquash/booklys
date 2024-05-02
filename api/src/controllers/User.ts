import express, { NextFunction, Request, Response } from "express";
import User from "../models/User";
import jwt from "jsonwebtoken";
import { check, validationResult } from "express-validator";

const mySelf = async (req: Request, res: Response, next: NextFunction)=>{
  const userId = req.userId;

  try {
    const user = await User.findById(userId).select("-password");
    if(!user){
      return res.status(404).json({message: "User not found"})
    }
    res.status(200).json(user)
  } catch (error) {
    next(error)
  }
}


const register = async (req: Request, res: Response, next: NextFunction)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array() });
  }

  try {
    let user = await User.findOne({
      email: req.body.email,
    });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    user = new User(req.body);
    await user.save();

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET_KEY as string,
      {
        expiresIn: "60d",
      }
    );

    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 86400000,
    });
    return res.status(200).send({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    next(error)
  }
}

export { register }