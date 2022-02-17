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
    enum: ["user", "admin"],
  },
}, { timestamps: true });

UserSchema.pre("save", async function (next) {
  let user = this as IUser;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  // Random additional data
  const salt = await bcrypt.genSalt(config.get("saltWorkFactor"));

  const hash = await bcrypt.hashSync(user.password, salt);

  // Replace the password with the hash
  user.password = hash;

  return next();
});

// Used for logging in
UserSchema.methods.comparePassword = async function (
  candidatePassword: string
) {
  const user = this as IUser;

  return bcrypt.compare(candidatePassword, user.password).catch((e) => false);
};


const User = mongoose.model<IUser>('User', UserSchema);

export default User;
