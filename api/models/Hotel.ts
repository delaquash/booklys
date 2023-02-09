import mongoose, { Schema, model } from "mongoose";

interface IHotel {
    name: string;
    city: string;
    type: string;
    address: string;
    distance: string;
    desc: string;
    photos: string[];
    rating: number;
    featured: boolean;
    cheapestPrice: number;
    rooms: string[];
    title: string;
}

const HotelSchema = new Schema<IHotel>({
    name: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      distance: {
        type: String,
        required: true,
      },
      photos: {
        type: [String],
      },
      title: {
        type: String,
        required: true,
      },
      desc: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        min: 0,
        max: 5,
      },
      rooms: {
        type: [String],
      },
      cheapestPrice: {
        type: Number,
        required: true,
      },
      featured: {
        type: Boolean,
        default: false,
      },
})

const Hotel = model<IHotel>("Hotel", HotelSchema);
export default Hotel;