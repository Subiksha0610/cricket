const express = require('express');
const User = require('../models/user');

const router = express.Router();

// GET User by Phone Number
router.get('/:phoneNumber', async (req, res) => {
    try {
        const user = await User.findOne({ phoneNumber: req.params.phoneNumber });
        if (!user) return res.status(404).json({ message: "User not found" });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST (Create New User)
router.post('/', async (req, res) => {
    try {
        const { username, email, phoneNumber, referralCode, profilePhoto } = req.body;
        const newUser = new User({ username, email, phoneNumber, referralCode, profilePhoto });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// PUT (Update User by Phone Number)
router.put('/:phoneNumber', async (req, res) => {
    try {
        const user = await User.findOneAndUpdate(
            { phoneNumber: req.params.phoneNumber },
            req.body,
            { new: true }
        );
        if (!user) return res.status(404).json({ message: "User not found" });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// DELETE (Remove User by Phone Number)
router.delete('/:phoneNumber', async (req, res) => {
    try {
        const user = await User.findOneAndDelete({ phoneNumber: req.params.phoneNumber });
        if (!user) return res.status(404).json({ message: "User not found" });
        res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
