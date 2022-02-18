import mongoose from "mongoose";
import { IUser } from './user.model';

export interface ISession extends mongoose.Document {
  user: IUser["_id"];
  role: IUser["role"];
  valid: boolean;
  userAgent: string;
  createdAt: Date;
  updatedAt: Date;
}

const SessionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  role: {
    type: mongoose.Schema.Types.String,
    ref: "User",
  },
  valid: {
    type: Boolean,
    default: true,
  },
  userAgent: {
    type: String,
  },
}, { timestamps: true });

const Session = mongoose.model<ISession>('Session', SessionSchema);

export default Session;
