import mongoose from 'mongoose';

const Recipe = new mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  tags:{
    type: Array,
    maxlength: 5,
    lowercase: true,
  },
  photo:{
    type: String
  },
  ingredients:{
    type: Array,
    required: true,
  },
  instructions:{
    type: String,
    required: true,
  },
  link:{
    type: String,
  },
  creator:{
    type: String,
    required: true,
  }
}, { timestamps: true });

export default mongoose.model('Recipe', Recipe)