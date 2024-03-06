import mongoose, { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import { UserType } from "../src/types/data"


const UserSchema = new Schema<UserType>(
  {
    // username: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
   
    password: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

const User = model<UserType>("User", UserSchema);
export default User;
