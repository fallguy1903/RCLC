import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  memberId: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other']
  },
  dob: {
    type: Date
  },
  createdOn: {
    type: Date,
    default: Date.now
  },
  mobile: {
    type: String,
    required: true,
    match: /^[6-9]\d{9}$/,
    unique: true,
    trim: true
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
});

const User = mongoose.model("User", userSchema);

export default User;
