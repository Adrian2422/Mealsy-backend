import mongoose from 'mongoose';
import isEmail from 'validator';
// import mongoPagination from 'mongo-cursor-pagination';

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
  description: String, 
  permissions: {
    type: Number,
    required: true,
    enum: [1, 2, 3],
  }
}, { timestamps: true });

User.index({ description: 'text' });
// User.plugin(mongoPagination.mongoosePlugin);

export default mongoose.model('User', User);
