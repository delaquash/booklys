import express from "express";
import { Response, Request, NextFunction } from "express";
import { deleteUser, findAllUsers, findUser, updateUser } from "../controllers/User";
import { verifyToken, verifyUser } from "../utils/verifyToken";
const router = express.Router()

router.get("/checkAuth", verifyToken, (req: Request, res:Response, next:NextFunction)=> {
    res.send("You are a verified user.")
})

router.get("/checkUser", verifyUser,(req: Request, res: Response) => {
    res.send("You are verified token")
})


// privately update a user
router.put("/:id", updateUser);
// privately delete user
router.delete("/:id", deleteUser);
// publicly find all user
router.get("/", findAllUsers);
// privately find user
router.get("/:id", findUser)

export default router;