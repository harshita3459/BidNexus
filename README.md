# AI-Powered Auction Platform (Demo Version)

A simplified demonstration of an auction platform showcasing core auction management functionality.

## Features

- Create and manage auctions
- View active auctions
- Update auction details
- Delete auctions
- Filter auctions by status and category

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose for database modeling

## API Endpoints

### Auctions
- GET /api/auctions - Get all auctions
- GET /api/auctions/:id - Get single auction
- POST /api/auctions - Create new auction
- PUT /api/auctions/:id - Update auction
- DELETE /api/auctions/:id - Delete auction

### Query Parameters
- status: Filter auctions by status (pending, active, completed, cancelled)
- category: Filter auctions by category

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a .env file with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/auction-platform
   NODE_ENV=development
   ```
4. Start the server:
   ```bash
   npm start
   ```

## Environment Variables

- PORT: Server port (default: 5000)
- MONGODB_URI: MongoDB connection string
- NODE_ENV: Environment (development/production)

## Seeding the Database

To populate the database with sample auctions:

```bash
npm run seed
```

This will create three sample auctions:
1. Vintage Camera Collection
2. Smartphone X Pro
3. Diamond Ring

## Project Structure

```
src/
├── controllers/
│   └── auction.controller.js
├── models/
│   └── auction.model.js
├── routes/
│   └── auction.routes.js
├── index.js
└── seed.js
```

## Note

This is a simplified version of the auction platform for demonstration purposes. The full version would include:
- User authentication and authorization
- Bidding system
- Payment processing
- Real-time updates
- AI-powered bid analysis
- Admin dashboard 