const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    id: { type: Number, required: true },
    phoneNumber: { type: String, required: true, unique: true }, // UNIQUE FIELD
    createdAt: { type: Date, default: Date.now },
    referralCode: { type: String },
    profilePhoto: { type: String }
  });
  
  const User = mongoose.model("User", userSchema);
  
  module.exports = User;
