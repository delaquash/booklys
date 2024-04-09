import mongoose from "mongoose";
import config from "config";
import logger from "../../logger";

const connectDB = async () => {
  // if (process.env.MONGO_URI !== undefined) {
    try {
      const con = await mongoose.connect(process.env.MONGO_URI as string);
      logger.info("MongoDB is connected");
    } catch (error) {
      logger.error("Could not connect to DB: ${error.message}");
      process.exit(1);
    }
  // }
};
export default connectDB;
