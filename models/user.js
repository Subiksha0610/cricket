const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: { type: Number, required: true }, // REQUIRED FIELD
  username: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  referralCode: { type: String },
  profilePhoto: { type: String }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
