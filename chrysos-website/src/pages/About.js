import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';
import SpaIcon from '@mui/icons-material/Spa';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NatureIcon from '@mui/icons-material/Nature';
import FavoriteIcon from '@mui/icons-material/Favorite';

const values = [
  {
    icon: <SpaIcon sx={{ fontSize: 40 }} />,
    title: 'Natural Wellness',
    description:
      'We believe in the power of natural ingredients to promote health and well-being.',
  },
  {
    icon: <LocalShippingIcon sx={{ fontSize: 40 }} />,
    title: 'Fast Delivery',
    description:
      'Quick and reliable shipping to get your wellness products to you as soon as possible.',
  },
  {
    icon: <NatureIcon sx={{ fontSize: 40 }} />,
    title: 'Sustainability',
    description:
      'Committed to eco-friendly practices and sustainable sourcing of our products.',
  },
  {
    icon: <FavoriteIcon sx={{ fontSize: 40 }} />,
    title: 'Customer Care',
    description:
      'Dedicated to providing exceptional service and support to our customers.',
  },
];

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          About Wellness Store
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Your Trusted Source for Natural Wellness Products
        </Typography>
      </Box>

      {/* Company Story */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom>
          Our Story
        </Typography>
        <Typography variant="body1" paragraph>
          Founded in 2023, Wellness Store was born from a passion for natural
          health and well-being. We understand that true wellness comes from
          nurturing both body and mind with natural, high-quality products.
        </Typography>
        <Typography variant="body1" paragraph>
          Our journey began with a simple mission: to make natural wellness
          products accessible to everyone. We carefully curate our selection of
          products, ensuring that each item meets our high standards for quality,
          sustainability, and effectiveness.
        </Typography>
      </Box>

      {/* Our Values */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom align="center">
          Our Values
        </Typography>
        <Grid container spacing={4}>
          {values.map((value, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  p: 3,
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: 'primary.main',
                    width: 80,
                    height: 80,
                    mb: 2,
                  }}
                >
                  {value.icon}
                </Avatar>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {value.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Commitment Section */}
      <Box>
        <Typography variant="h4" gutterBottom>
          Our Commitment
        </Typography>
        <Typography variant="body1" paragraph>
          At Wellness Store, we are committed to:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">
              Providing only the highest quality natural products
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Supporting sustainable and ethical sourcing practices
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Offering exceptional customer service and support
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Continuously expanding our knowledge of natural wellness
            </Typography>
          </li>
        </ul>
      </Box>
    </Container>
  );
};

export default About; 