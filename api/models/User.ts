import mongoose, { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

interface MongoResult {
  _doc: any;
}
interface IUser extends MongoResult {
  // username: string;
  email: string;
  firstName: string;
  lastName: string;
  // country: string;
  // img: string;
  // city: string;
  // phone: string;
  password: string;
  // isAdmin: boolean;
}

const UserSchema = new Schema<IUser>(
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
    // country: {
    //   type: String,
    //   required: true,
    // },
    // img: {
    //   type: String,
    // },
    // city: {
    //   type: String,
    //   required: true,
    // },
    // phone: {
    //   type: String,
    //   required: true,
    // },
    password: {
      type: String,
      required: true,
    },
    // isAdmin: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

const User = model<IUser>("User", UserSchema);
export default User;
