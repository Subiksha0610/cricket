const express = require("express");
const router = express.Router();
const User = require("../models/user");

// ➤ Create User (POST)
router.post("/users", async (req, res) => {
  try {
    const { id, username, email, phoneNumber, createdAt, referralCode, profilePhoto } = req.body;

    if (!id) {
      return res.status(400).json({ message: "❌ ID is required" });
    }

    const newUser = new User({ id, username, email, phoneNumber, createdAt, referralCode, profilePhoto });
    await newUser.save();

    res.status(201).json({ message: "✅ User created successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ➤ Get User by Phone Number (GET)
router.get("/users/:phoneNumber", async (req, res) => {
  try {
    const user = await User.findOne({ phoneNumber: req.params.phoneNumber });
    if (!user) {
      return res.status(404).json({ message: "❌ User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ➤ Update User by Phone Number (PUT)
router.put("/users/:phoneNumber", async (req, res) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { phoneNumber: req.params.phoneNumber },
      req.body,
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "❌ User not found" });
    }
    res.json({ message: "✅ User updated successfully", user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ➤ Delete User by Phone Number (DELETE)
router.delete("/users/:phoneNumber", async (req, res) => {
  try {
    const deletedUser = await User.findOneAndDelete({ phoneNumber: req.params.phoneNumber });
    if (!deletedUser) {
      return res.status(404).json({ message: "❌ User not found" });
    }
    res.json({ message: "✅ User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
