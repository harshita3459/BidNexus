const mongoose = require('mongoose');
require('dotenv').config();

// Import models
const Auction = require('./models/auction.model');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB for seeding'))
  .catch(err => console.error('MongoDB connection error:', err));

const auctions = [
  {
    title: 'Vintage Camera Collection',
    description: 'A beautiful collection of vintage cameras from the 1950s',
    startingPrice: 500,
    currentPrice: 500,
    startTime: new Date(),
    endTime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    status: 'active',
    category: 'Collectibles'
  },
  {
    title: 'Smartphone X Pro',
    description: 'Latest model with 256GB storage',
    startingPrice: 800,
    currentPrice: 800,
    startTime: new Date(),
    endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
    status: 'active',
    category: 'Electronics'
  },
  {
    title: 'Diamond Ring',
    description: '18K gold ring with 1 carat diamond',
    startingPrice: 2000,
    currentPrice: 2000,
    startTime: new Date(),
    endTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
    status: 'active',
    category: 'Jewelry'
  }
];

// Seed function
const seedDatabase = async () => {
  try {
    // Clear existing data
    await Auction.deleteMany({});
    console.log('Cleared existing auctions');

    // Create auctions
    for (const auctionData of auctions) {
      const auction = new Auction(auctionData);
      await auction.save();
      console.log(`Created auction: ${auction.title}`);
    }

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

// Run the seed function
seedDatabase(); 