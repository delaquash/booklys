import { Response, Request, NextFunction } from "express";
import User from "../models/User";
import bcrypt from 'bcryptjs';
import { genSaltSync, hashSync } from "bcryptjs";

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
