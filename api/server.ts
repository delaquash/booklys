import express, {  Request, Response } from "express";
import connectDB from "./config/db";
import config from "config";
import authRoute from "./routes/auth";
import userRoute from "./routes/user";
import hotelRoute from "./routes/hotels";
import roomRoute from "./routes/rooms";
import logger  from "./logger";

const PORT = config.get<number>("PORT")
const app = express();

app.get("/", (req:Request, res:Response)=> {
    res.send("Welcome")
})

// middleware
app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/room", roomRoute);
app.use("/hotel", hotelRoute);

app.listen(PORT, async ()=> {
    logger.info(`Server running in mode on ${PORT}`);
    await connectDB()
})
  