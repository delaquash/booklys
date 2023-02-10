import express, {  Request, Response, ErrorRequestHandler } from "express";
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

const errorHandlerMiddleware: ErrorRequestHandler =(err, req, res, next)=> {
    const errorStatus = err.status || 500;
    const errorMessage= err.message || "Something went wrong";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        err: err.stack 
    })
}
// middleware
app.use(express.json())
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/room", roomRoute);
app.use("/api/v1/hotel", hotelRoute);

// error middleware
app.use(errorHandlerMiddleware);



app.listen(PORT, async ()=> {
    logger.info(`Server running in mode on ${PORT}`);
    await connectDB()
})
  