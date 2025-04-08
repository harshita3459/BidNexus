const Auction = require('../models/auction.model');

// Create a new auction
const createAuction = async (req, res) => {
  try {
    const auction = new Auction({
      ...req.body,
      currentPrice: req.body.startingPrice
    });

    await auction.save();
    res.status(201).json(auction);
  } catch (error) {
    res.status(400).json({ message: 'Error creating auction', error: error.message });
  }
};

// Get all auctions
const getAuctions = async (req, res) => {
  try {
    const { status, category } = req.query;
    const query = {};

    if (status) query.status = status;
    if (category) query.category = category;

    const auctions = await Auction.find(query)
      .sort({ createdAt: -1 });

    res.json(auctions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching auctions', error: error.message });
  }
};

// Get single auction
const getAuction = async (req, res) => {
  try {
    const auction = await Auction.findById(req.params.id);

    if (!auction) {
      return res.status(404).json({ message: 'Auction not found' });
    }

    res.json(auction);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching auction', error: error.message });
  }
};

// Update auction
const updateAuction = async (req, res) => {
  try {
    const auction = await Auction.findById(req.params.id);

    if (!auction) {
      return res.status(404).json({ message: 'Auction not found' });
    }

    Object.assign(auction, req.body);
    await auction.save();

    res.json(auction);
  } catch (error) {
    res.status(400).json({ message: 'Error updating auction', error: error.message });
  }
};

// Delete auction
const deleteAuction = async (req, res) => {
  try {
    const auction = await Auction.findById(req.params.id);

    if (!auction) {
      return res.status(404).json({ message: 'Auction not found' });
    }

    await Auction.findByIdAndDelete(req.params.id);
    res.json({ message: 'Auction deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting auction', error: error.message });
  }
};

module.exports = {
  createAuction,
  getAuctions,
  getAuction,
  updateAuction,
  deleteAuction
}; 