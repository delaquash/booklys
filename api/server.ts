import express, {
  Request,
  Response,
  ErrorRequestHandler,
  NextFunction,
} from "express";
/* Loading the environment variables from the .env file. */
require("dotenv").config();
import connectDB from "./config/db";
import config from "config";
import authRoute from "./routes/auth";
import userRoute from "./routes/user";
import hotelRoute from "./routes/hotels";
import roomRoute from "./routes/rooms";
import logger from "./logger";
import ErrorException from "./utils/error";
import cookieParser from "cookie-parser";

const PORT = config.get<number>("PORT");
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome");
});

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

// middleware
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/room", roomRoute);
app.use("/api/v1/hotel", hotelRoute);

// error middleware
app.use(errorHandlerMiddleware);

app.listen(PORT, async () => {
  logger.info(`Server running in mode on ${PORT}`);
  await connectDB();
});
