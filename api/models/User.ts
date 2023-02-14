import mongoose, { Schema, model } from "mongoose";

interface IUser {
    username: string;
    email: string;
    country: string;
    img: string;
    city: string;
    phone: string;
    password: string;
    isAdmin: boolean;
}

const UserSchema = new Schema<IUser>(
    {
      username: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      country: {
        type: String,
        required: true,
      },
      img: {
        type: String,
      },
      city: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      isAdmin: {
        type: Boolean,
        default: false,
      },
    },
    { timestamps: true }
  );
  
  const User =model<IUser>("User", UserSchema);
  export default User;