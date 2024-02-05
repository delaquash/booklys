import express, { Request, Response } from "express";
import User from "../models/User";
import jwt from "jsonwebtoken";
import { check, validationResult } from "express-validator";


// Validation middleware array
const userValidationRules = [
  check("firstName", "First Name is required").isString(),
  check("lastName", "Last Name is required").isString(),
  check("email", "Email is required").isEmail(),
  check("password", "Password with 6 or more characters required").isLength({
    min: 6,
  }),
];