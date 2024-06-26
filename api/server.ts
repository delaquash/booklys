import config from "config";
import cookieParser from "cookie-parser";
import express, {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from "express";
import connectDB from "./src/config/db";
import logger from "./logger";
import authRoute from "./src/routes/auth";
import hotelRoute from "./src/routes/hotels";
// import roomRoute from "./routes/rooms";
import userRoute from "./src/routes/user";
import my_hotels from "./src/routes/my_hotels"
import ErrorException from "./src/utils/error";
import cors from "cors";
import path from "path";
import { v2 as cloudinary } from "cloudinary";

/* Loading the environment variables from the .env file. */
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})


const app = express();
const corsOptions = {
  origin: process.env.FRONT_END_URL, // Allow only this origin to send requests
  credentials: true, // Allowing credentials
};
app.use(cors(corsOptions))
// middleware

app.use(express.static(path.join(__dirname, "../../client/dist")));

app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/my_hotel", my_hotels)
// app.use("/api/v1/room", roomRoute);
app.use("/api/v1/hotel", hotelRoute);

app.get("*", (req: Request, res: Response)=> {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"))
})

const errorHandlerMiddleware: ErrorRequestHandler = (
  error: ErrorException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = error.status || 500;
  const message = error.message || "Something went wrong";
  res.status(status).send({
    status,
    message,
  });
};

// error middleware
app.use(errorHandlerMiddleware);
const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  logger.info(`Server is running in mode on ${PORT}`);
  await connectDB();
});