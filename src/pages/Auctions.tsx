import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  TextField,
  InputAdornment,
  Chip,
  Stack,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

// Styled components
const AuctionCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const SearchContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  padding: theme.spacing(3),
  background: 'linear-gradient(145deg, #1E1E1E 0%, #2D2D2D 100%)',
  borderRadius: theme.shape.borderRadius * 2,
}));

const Auctions: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for auctions
  const auctions = [
    {
      id: 1,
      title: 'Vintage Rolex Watch',
      description: 'Rare 1956 Rolex Submariner in excellent condition',
      currentBid: 25000,
      endTime: '2024-04-15T18:00:00Z',
      image: 'https://source.unsplash.com/random/400x300?watch',
      category: 'Luxury Items',
    },
    {
      id: 2,
      title: 'Modern Art Painting',
      description: 'Contemporary abstract painting by renowned artist',
      currentBid: 15000,
      endTime: '2024-04-16T20:00:00Z',
      image: 'https://source.unsplash.com/random/400x300?art',
      category: 'Art',
    },
    {
      id: 3,
      title: 'Rare Wine Collection',
      description: 'Collection of 12 rare vintage wines from 1982',
      currentBid: 8000,
      endTime: '2024-04-17T15:00:00Z',
      image: 'https://source.unsplash.com/random/400x300?wine',
      category: 'Collectibles',
    },
  ];

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredAuctions = auctions.filter(auction =>
    auction.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    auction.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container maxWidth="lg">
      <Typography variant="h1" gutterBottom>
        Active Auctions
      </Typography>

      <SearchContainer>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search auctions..."
          value={searchQuery}
          onChange={handleSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </SearchContainer>

      <Grid container spacing={4}>
        {filteredAuctions.map((auction) => (
          <Grid item xs={12} sm={6} md={4} key={auction.id}>
            <AuctionCard>
              <CardMedia
                component="img"
                height="200"
                image={auction.image}
                alt={auction.title}
              />
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {auction.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  {auction.description}
                </Typography>
                <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                  <Chip label={auction.category} color="primary" />
                  <Chip 
                    label={`Current Bid: $${auction.currentBid.toLocaleString()}`}
                    color="secondary"
                  />
                </Stack>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => navigate(`/auctions/${auction.id}`)}
                >
                  Place Bid
                </Button>
              </CardContent>
            </AuctionCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Auctions; 