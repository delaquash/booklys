import express, { Express, Request, Response } from "express";
import connectDB from "./config/db";
import config from "config";


const PORT = config.get<number>("PORT")
const app = express();

app.listen(PORT, async ()=> {
    console.log(`Server running in mode on ${PORT}`);
    await connectDB()
})
  