import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
  Button,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  Chip,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import HistoryIcon from '@mui/icons-material/History';
import GavelIcon from '@mui/icons-material/Gavel';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

// Styled components
const ProfileCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  background: 'linear-gradient(145deg, #1E1E1E 0%, #2D2D2D 100%)',
  borderRadius: theme.shape.borderRadius * 2,
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(12),
  height: theme.spacing(12),
  marginBottom: theme.spacing(2),
  background: 'linear-gradient(45deg, #6C63FF 30%, #FF6B6B 90%)',
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`profile-tabpanel-${index}`}
      aria-labelledby={`profile-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const Profile: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    balance: 50000,
    joinedDate: '2024-01-15',
    totalAuctions: 12,
    winningBids: 5,
  };

  // Mock auction history
  const auctionHistory = [
    {
      id: 1,
      title: 'Vintage Rolex Watch',
      bidAmount: 25000,
      status: 'Won',
      date: '2024-03-15',
    },
    {
      id: 2,
      title: 'Modern Art Painting',
      bidAmount: 15000,
      status: 'Lost',
      date: '2024-03-10',
    },
    {
      id: 3,
      title: 'Rare Wine Collection',
      bidAmount: 8000,
      status: 'Active',
      date: '2024-03-05',
    },
  ];

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h1" gutterBottom>
        My Profile
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <ProfileCard>
            <Box display="flex" flexDirection="column" alignItems="center">
              <StyledAvatar>
                <PersonIcon sx={{ fontSize: 60 }} />
              </StyledAvatar>
              <Typography variant="h5" gutterBottom>
                {user.name}
              </Typography>
              <Typography variant="body1" color="textSecondary" gutterBottom>
                {user.email}
              </Typography>
              <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                <AccountBalanceWalletIcon sx={{ mr: 1 }} />
                <Typography variant="h6">
                  Balance: ${user.balance.toLocaleString()}
                </Typography>
              </Box>
              <Button
                variant="contained"
                fullWidth
                sx={{ mt: 2 }}
              >
                Add Funds
              </Button>
            </Box>
          </ProfileCard>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={tabValue} onChange={handleTabChange}>
                  <Tab icon={<HistoryIcon />} label="Auction History" />
                  <Tab icon={<GavelIcon />} label="Active Bids" />
                </Tabs>
              </Box>

              <TabPanel value={tabValue} index={0}>
                <List>
                  {auctionHistory.map((auction, index) => (
                    <React.Fragment key={auction.id}>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <GavelIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={auction.title}
                          secondary={`Bid: $${auction.bidAmount.toLocaleString()} • ${auction.date}`}
                        />
                        <Chip
                          label={auction.status}
                          color={auction.status === 'Won' ? 'success' : auction.status === 'Lost' ? 'error' : 'primary'}
                        />
                      </ListItem>
                      {index < auctionHistory.length - 1 && <Divider />}
                    </React.Fragment>
                  ))}
                </List>
              </TabPanel>

              <TabPanel value={tabValue} index={1}>
                <Typography variant="body1" color="textSecondary">
                  No active bids at the moment.
                </Typography>
              </TabPanel>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile; 