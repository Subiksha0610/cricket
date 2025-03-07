const express = require('express');
const dotenv = require('dotenv');
const mongoose = require("./db"); 
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routers/userRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", userRoutes);


const PORT = process.env.PORT || 8080; // Use Render's PORT
const BASE_URL = process.env.BASE_URL || "http://localhost:8080";

app.get("/", (req, res) => {
    res.json({ message: "🚀 API is running!", base_url: BASE_URL });
  });
  app.listen(PORT, () => console.log(`✅ Server running at ${BASE_URL}`));
