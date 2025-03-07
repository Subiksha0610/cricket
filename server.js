const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routers/userRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);


const PORT = process.env.PORT || 8080; // Use Render's PORT

app.get("/", (req, res) => {
  res.send("API is running on Render!");
});
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
