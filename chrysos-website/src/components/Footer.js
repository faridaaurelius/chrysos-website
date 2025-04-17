import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Wellness Store
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Your trusted source for natural wellness products. We're committed to
              providing high-quality, sustainable products for your well-being.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0 }}>
              {['Home', 'Products', 'About', 'Contact'].map((text) => (
                <Box component="li" key={text} sx={{ mb: 1 }}>
                  <Link
                    component={RouterLink}
                    to={`/${text.toLowerCase()}`}
                    color="inherit"
                    underline="hover"
                  >
                    {text}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Customer Service */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Customer Service
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0 }}>
              {[
                'Shipping Information',
                'Returns & Exchanges',
                'FAQ',
                'Privacy Policy',
                'Terms of Service',
              ].map((text) => (
                <Box component="li" key={text} sx={{ mb: 1 }}>
                  <Link href="#" color="inherit" underline="hover">
                    {text}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Stay Connected
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Subscribe to our newsletter for updates and special offers.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
              <IconButton color="primary" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="primary" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton color="primary" aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton color="primary" aria-label="Pinterest">
                <PinterestIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Copyright */}
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Wellness Store. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 