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
app.use(express.json())
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/room", roomRoute);
app.use("/api/v1/hotel", hotelRoute);

app.listen(PORT, async ()=> {
    logger.info(`Server running in mode on ${PORT}`);
    await connectDB()
})
  