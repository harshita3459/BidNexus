# BidNexus - AI-Powered Auction Platform

BidNexus is a modern, AI-powered auction platform that leverages machine learning to ensure fair and transparent bidding processes. The platform provides a seamless experience for both buyers and sellers, with real-time tracking and automated decision-making capabilities.

## Features

- **AI-Powered Bidding**: Advanced algorithms analyze bidding patterns to ensure fairness
- **Real-Time Tracking**: Monitor auctions with instant updates and notifications
- **Secure Transactions**: End-to-end encryption and blockchain technology
- **Modern UI**: Beautiful dark theme with gradient colors and smooth animations
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- React with TypeScript
- Material-UI for components
- Styled Components for custom styling
- React Router for navigation
- Axios for API communication

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/bidnexus.git
cd bidnexus
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
bidnexus/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── services/      # API services
│   ├── styles/        # Global styles
│   └── utils/         # Utility functions
├── public/            # Static assets
└── package.json       # Project dependencies
```

## API Endpoints

### Auctions
- GET /api/auctions - Get all auctions
- GET /api/auctions/:id - Get single auction
- POST /api/auctions - Create new auction
- PUT /api/auctions/:id - Update auction
- DELETE /api/auctions/:id - Delete auction
- POST /api/auctions/:id/bids - Place a bid

### Bids
- GET /api/bids/auction/:auctionId - Get all bids for an auction
- GET /api/bids/user - Get user's bids
- GET /api/bids/winning - Get winning bids
- PUT /api/bids/:id/status - Update bid status (admin only)

### Users
- GET /api/users/profile - Get user profile
- PUT /api/users/profile - Update user profile
- GET /api/users/auctions - Get user's auctions
- PUT /api/users/balance - Update user balance

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 