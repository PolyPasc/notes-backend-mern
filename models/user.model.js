import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date().getTime(),
  },
});

const User = mongoose.model("User", userSchema);

export default User;
