const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); // Load .env variables

const MONGO_URI = process.env.MONGO_URI; // Ensure this is set in .env
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)  // ✅ No need for deprecated options
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

module.exports = mongoose;
