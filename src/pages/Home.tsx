import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Container, 
  Grid,
  Card, 
  CardContent,
  CardMedia,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

// Styled components
const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: theme.spacing(4),
  background: 'linear-gradient(135deg, rgba(108, 99, 255, 0.1) 0%, rgba(255, 107, 107, 0.1) 100%)',
  borderRadius: theme.shape.borderRadius * 2,
  marginBottom: theme.spacing(6),
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const Home: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'AI-Powered Bidding',
      description: 'Our advanced AI algorithms analyze bidding patterns to ensure fair and transparent auctions.',
      image: 'https://source.unsplash.com/random/400x300?technology',
    },
    {
      title: 'Real-Time Tracking',
      description: 'Monitor auctions in real-time with instant updates and notifications.',
      image: 'https://source.unsplash.com/random/400x300?dashboard',
    },
    {
      title: 'Secure Transactions',
      description: 'End-to-end encryption and blockchain technology ensure secure and transparent transactions.',
      image: 'https://source.unsplash.com/random/400x300?security',
    },
  ];

  return (
    <Container maxWidth="lg">
      <HeroSection>
        <Box>
          <Typography variant="h1" gutterBottom>
            Welcome to BidNexus
          </Typography>
          <Typography variant="h5" color="textSecondary" paragraph>
            The next generation AI-powered auction platform
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/auctions')}
              sx={{ mr: 2 }}
            >
              Explore Auctions
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate('/profile')}
            >
              My Profile
            </Button>
          </Box>
        </Box>
      </HeroSection>

      <Typography variant="h2" align="center" gutterBottom>
        Why Choose BidNexus?
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <FeatureCard>
                <CardMedia
                  component="img"
                  height="200"
                  image={feature.image}
                  alt={feature.title}
                />
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home; 