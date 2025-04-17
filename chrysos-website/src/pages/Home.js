import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
} from '@mui/material';

const featuredProducts = [
  {
    id: 1,
    name: 'Organic Essential Oils Set',
    price: 49.99,
    image: 'https://via.placeholder.com/300x200?text=Essential+Oils',
  },
  {
    id: 2,
    name: 'Natural Herbal Tea Collection',
    price: 29.99,
    image: 'https://via.placeholder.com/300x200?text=Herbal+Tea',
  },
  {
    id: 3,
    name: 'Wellness Supplements Bundle',
    price: 59.99,
    image: 'https://via.placeholder.com/300x200?text=Supplements',
  },
];

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '90vh',
          width: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)',
          marginTop: '-20px',
          backgroundColor: '#000', // Add black background to prevent white flash
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3))',
              zIndex: 1
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 80%, rgba(0,0,0,0.4) 100%)',
              zIndex: 1
            }
          }}
        >
          <img
            src="/images/hero-mountains.JPG"
            alt="Sunset over mountains"
            onError={(e) => {
              console.error("Image failed to load");
              e.target.src = "https://images.unsplash.com/photo-1501862700950-18382cd41497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1419&q=80";
            }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 25%',
              display: 'block',
              imageRendering: '-webkit-optimize-contrast',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              filter: 'brightness(1.05) contrast(1.05) saturate(1.1)',
            }}
          />
        </Box>
        <Container 
          maxWidth="lg" 
          sx={{ 
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            color: 'white',
            px: { xs: 2, sm: 4, md: 6 }
          }}
        >
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom 
            className="main-heading"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              mb: 4,
              letterSpacing: '0.02em'
            }}
          >
            THE GOLD STANDARD OF NATURAL LIVING
          </Typography>
          <Button
            component={RouterLink}
            to="/products"
            variant="contained"
            size="large"
            sx={{ 
              mt: 2,
              px: 6,
              py: 2,
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              color: '#ffffff',
              backdropFilter: 'blur(8px)',
              animation: 'buttonGlow 3s ease-in-out infinite',
              border: '1px solid rgba(255, 215, 0, 0.1)',
              '&:hover': {
                backgroundColor: '#ffffff',
                color: '#000000',
                transform: 'translateY(-2px)',
                border: '1px solid rgba(255, 215, 0, 0.3)',
                boxShadow: '0 0 30px rgba(255, 215, 0, 0.7)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Shop Now
          </Button>
        </Container>
      </Box>

      {/* Featured Products */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Featured Products
        </Typography>
        <Grid container spacing={4}>
          {featuredProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography variant="h6" color="primary">
                    ${product.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    component={RouterLink}
                    to={`/products/${product.id}`}
                  >
                    View Details
                  </Button>
                  <Button size="small" color="primary">
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* About Section */}
      <Box
        sx={{
          bgcolor: 'background.paper',
          py: 8,
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom align="center">
            About Our Wellness Products
          </Typography>
          <Typography variant="body1" paragraph align="center">
            We are committed to providing high-quality, natural wellness products
            that promote a healthy lifestyle. All our products are carefully
            selected and sourced from trusted suppliers who share our values of
            sustainability and wellness.
          </Typography>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              component={RouterLink}
              to="/about"
              variant="outlined"
              color="primary"
              size="large"
            >
              Learn More
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 