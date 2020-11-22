import mongoose from 'mongoose';
import isEmail from 'validator';

const User = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    minlength: 6,
  },
  password:{
    type: String,
    required: true,
    minlength: 8
  },
  email:{
    type: String,
    unique: true,
    required: true
  },
  age: {
    type: Number,
  },
  permissions: {
    type: Number,
    required: true,
    enum: [1, 2, 3],
  }
}, { timestamps: true })

export default mongoose.model('User', User)
