import {Request, Response, NextFunction} from "express";
import jwt , {JwtPayload }from "jsonwebtoken";

declare global {
    namespace Express {
        interface Request {
            userId: string;
        }
    }
}

const verifyToken= async (req: Request, res: Response, next: NextFunction) => {
    const token = res.cookie["auth_token"];
    if(!token) return res.status(401).json({message: "User unauthorized."})
   
    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET as string)
        req.userId = (decode as JwtPayload).userId;
    } catch (error) {
        res.status(401).json({message: "User unauthorized."})
    }
}