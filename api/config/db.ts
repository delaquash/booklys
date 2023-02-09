import mongoose from "mongoose";
import  config  from "config";

const connectDB = async() => {
    const MONGO_URI = config.get<string>("MONGO_URI")
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(MONGO_URI)
        console.log("DB is Connected");
    } catch (error) {
        console.error("Could not connect to DB")
        process.exit(1)
    }
}

export default connectDB;