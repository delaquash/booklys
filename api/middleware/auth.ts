import {Request, Response, NextFunction} from "express";
import jwt , { JwtPayload }from "jsonwebtoken";
import ErrorException from "../utils/error";

declare global {
    namespace Express {
        interface Request {
            userId: string;
        }
    }
}

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    const token = res.cookie["auth_token"];
    if(!token) return next(new ErrorException(401,"No auth token provided"));
    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET as string)
        req.userId = (decode as JwtPayload).userId;
        next();
    } catch (error) {
        next(new ErrorException(403, "Token not valid"));
    }
}

export default verifyToken;