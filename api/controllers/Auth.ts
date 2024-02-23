import express, { NextFunction, Request, Response } from "express";
import { check, validationResult } from "express-validator";
import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import verifyToken from "../middleware/auth";

declare global {
  namespace Express {
      interface Request {
          userId: string;
      }
  }
}

const loginValidator = 
    [
        check("email", "Email is required").isEmail(),
        check("password", "Password with 6 or more characters required").isLength({
          min: 6,
        }),
]

const login = async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email })
        if(!user){
            return res.status(401).json({ msg: "Invalid credentials"})
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(400).json({msg:"Invalid credentials"});
        }

        const token = jwt.sign(
            { userId: user.id },
            process.env.JWT_SECRET_KEY as string
          );
          res.cookie("auth_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 86400000,
          });
          res.status(200).json({ userId: user._id });
    } catch (error) {
        next(error)
    }
}


const validateToken = (req: Request, res: Response) => {
    res.status(200).send({ userId: req.userId })
  }


 const logout = async (req: Request, res:Response )=> {
    res.cookie("auth_token", "", {
      expires: new Date(90)
    })
 }

    
export { login, validateToken, logout}