// import { Response, Request, NextFunction } from "express";
// import User from "../models/User";
// import bcrypt from "bcryptjs";
// import ErrorException from "../utils/error";
// import jwt from "jsonwebtoken";

// export const register = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const salt = bcrypt.genSaltSync(10);
//     const hash = bcrypt.hashSync(req.body.password, salt);
//     const newUser = new User({
//       username: req.body.username,
//       email: req.body.email,
//       password: hash,
//       phone: req.body.phone,
//       city: req.body.city,
//       country: req.body.country,
//     });
//     await newUser.save();
//     res.status(200).send("User has been created");
//   } catch (err) {
//     next(err);
//   }
// };

// export const login = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const user = await User.findOne({ username: req.body.username });
//     // if there is no user
//     if (!user) return next(new ErrorException(404, "User does not exist"));
//     // if password does not match
//     const isPasswordCorrect = await bcrypt.compare(
//       req.body.password,
//       user.password
//     );
//     if (!isPasswordCorrect)
//       return next(new ErrorException(400, "Password is incorrect."));
//     /* Creating a token for the user. */
//     const token = jwt.sign(
//       { id: user._id, isAdmin: user.isAdmin },
//       process.env.JWT_SECRET ?? ""
//     );
//     /* Destructuring the user object and removing the password and isAdmin properties. */
//     const { password, isAdmin, ...otherDetails } = user._doc;
//     /* Setting a cookie on the client side. */
//     res
//       .cookie("access_token", token, {
//         httpOnly: true,
//       })
//       .status(200)
//       .json({ ...otherDetails });
//   } catch (err) {
//     next(err);
//   }
// };
