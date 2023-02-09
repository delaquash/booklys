import mongoose from "mongoose";
import  config  from "config";
import logger from "../logger";


const connectDB = async() => {
    const MONGO_URI = config.get<string>("MONGO_URI")
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(MONGO_URI)
       logger.info("DB is Connected");
    } catch (error) {
        logger.error("Could not connect to DB")
        process.exit(1)
    }
}

export default connectDB;