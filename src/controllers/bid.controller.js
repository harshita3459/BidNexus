const Bid = require('../models/bid.model');
const Auction = require('../models/auction.model');

// Get all bids for an auction
const getAuctionBids = async (req, res) => {
  try {
    const bids = await Bid.find({ auction: req.params.auctionId })
      .populate('bidder', 'username')
      .sort({ amount: -1 });

    res.json(bids);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bids', error: error.message });
  }
};

// Get user's bids
const getUserBids = async (req, res) => {
  try {
    const bids = await Bid.find({ bidder: req.user._id })
      .populate('auction', 'title currentPrice status')
      .sort({ createdAt: -1 });

    res.json(bids);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user bids', error: error.message });
  }
};

// Get winning bids
const getWinningBids = async (req, res) => {
  try {
    const bids = await Bid.find({ bidder: req.user._id, status: 'winning' })
      .populate('auction', 'title currentPrice status')
      .sort({ createdAt: -1 });

    res.json(bids);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching winning bids', error: error.message });
  }
};

// Update bid status (admin only)
const updateBidStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const bid = await Bid.findById(req.params.id);

    if (!bid) {
      return res.status(404).json({ message: 'Bid not found' });
    }

    bid.status = status;
    await bid.save();

    // If bid is marked as winning, update the auction winner
    if (status === 'winning') {
      await Auction.findByIdAndUpdate(bid.auction, {
        winner: bid.bidder
      });
    }

    res.json(bid);
  } catch (error) {
    res.status(400).json({ message: 'Error updating bid status', error: error.message });
  }
};

module.exports = {
  getAuctionBids,
  getUserBids,
  getWinningBids,
  updateBidStatus
}; 