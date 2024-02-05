import express, { Request, Response } from "express";
import { check, validationResult } from "express-validator";
import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const loginValidator = 
    [
        check("email", "Email is required").isEmail(),
        check("password", "Password with 6 or more characters required").isLength({
          min: 6,
        }),
]

const login = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body


}