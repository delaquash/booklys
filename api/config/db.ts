import mongoose from "mongoose";
import  config  from "./config";

const connect = async() => {
     const conn =  await mongoose.connect(config.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`);
}

export default connect;