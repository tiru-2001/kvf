import mongoose from 'mongoose';
const userschema = new mongoose.Schema(
  {
    enum: {
      type: ['user', 'reviewer', 'admin'],
      default: 'user',
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    otp: {
      type: Number,
    },
    otpExpiration: {
      type: Date,
    },
  },
  { timeStamps: true }
);

const user = mongoose.model('users', userschema);
export default user;
