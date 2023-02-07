import mongoose from "mongoose";

const connect = async() => {
    try {
        await mongoose.connect()
    } catch (error) {
        
    }
}