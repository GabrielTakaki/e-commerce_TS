import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";

export interface IUser extends mongoose.Document {
  email: string;
  password: string;
  comparePassword: (password: string) => Promise<boolean>;
  name: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["user", "admin"],
  },
}, { timestamps: true });


const User = mongoose.model('User', UserSchema);

export default User;
