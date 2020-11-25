import mongoose from 'mongoose';
import isEmail from 'validator';
import passportLocalMongoose from 'passport-local-mongoose';

const User = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    minlength: 6,
  },
  email:{
    type: String,
    unique: true,
    required: true
  },
  adult: {
    type: Boolean,
  },
  permissions: {
    type: Number,
    required: true,
    enum: [1, 2, 3],
  }
}, { timestamps: true });

User.plugin(passportLocalMongoose, {username: 'username'});

export default mongoose.model('User', User);
