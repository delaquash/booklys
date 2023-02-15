import { Response, Request, NextFunction } from "express";
import User from "../models/User";
import bcrypt from 'bcryptjs';
import ErrorException from "../utils/error";

export const RegisterUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt )
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      phone: req.body.phone,
      city: req.body.city,
      country: req.body.country,
    });
    await newUser.save();
    res.status(200).send("User has been created");
  } catch (err) {
    next(err);
  }
};

export const LoginUser = async (req: Request, res: Response, next:NextFunction)=> {
    try {
        const user = await User.findOne({username: req.body.username})
        // if there is no user
        if(!user) return next(new ErrorException(404, "User does not exist"))
    } catch (error) {
        
    }
}
