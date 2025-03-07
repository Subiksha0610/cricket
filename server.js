const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("./db"); // Import database connection
const userRoutes = require("./routers/userRoutes"); // Import user routes

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json()); // Middleware to parse JSON requests
app.use(cors()); // Enable CORS

const BASE_URL = "https://cricket-ufv4.onrender.com"; // Render API URL

// Routes
app.use("/", userRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to Cricket API");
  });
// Start Server on Port 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running at ${BASE_URL} on port ${PORT}`));
