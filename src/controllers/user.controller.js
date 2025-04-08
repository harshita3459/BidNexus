const User = require('../models/user.model');
const Auction = require('../models/auction.model');
const bcrypt = require('bcryptjs');

// Get user profile
const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching profile', error: error.message });
  }
};

// Update user profile
const updateProfile = async (req, res) => {
  try {
    const updates = req.body;
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // If updating password, hash the new password
    if (updates.password) {
      const salt = await bcrypt.genSalt(10);
      updates.password = await bcrypt.hash(updates.password, salt);
    }

    Object.assign(user, updates);
    await user.save();

    const updatedUser = await User.findById(user._id).select('-password');
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: 'Error updating profile', error: error.message });
  }
};

// Get user's auctions
const getUserAuctions = async (req, res) => {
  try {
    const auctions = await Auction.find({ seller: req.user._id })
      .sort({ createdAt: -1 });
    res.json(auctions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user auctions', error: error.message });
  }
};

// Update user balance
const updateBalance = async (req, res) => {
  try {
    const { amount } = req.body;
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.balance += amount;
    await user.save();

    res.json({ balance: user.balance });
  } catch (error) {
    res.status(400).json({ message: 'Error updating balance', error: error.message });
  }
};

module.exports = {
  getProfile,
  updateProfile,
  getUserAuctions,
  updateBalance
}; 