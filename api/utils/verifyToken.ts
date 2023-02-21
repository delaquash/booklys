import jwt from "jsonwebtoken";
import ErrorException from "./error";
import { Response, Request, NextFunction } from "express";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  /* Getting the token from the cookie. */
  const token = req.cookies.access_token;
  /* Checking if the token is not present, then it will throw an error. */
  if (!token) {
    return next(
      new ErrorException(
        401,
        "You are not authorised to perform this function."
      )
    );
  }

  jwt.verify(token, process.env.JWT_SECRET ?? "", (err: any, user: any) => {
    if (err) return next(new ErrorException(403, "Token not valid"));
    req.user = user;
    next();
  });
};

export const verifyUser = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      if (err)
        return next(
          new ErrorException(
            403,
            "You are not authorised to perform this action."
          )
        );
    }
  });
};
