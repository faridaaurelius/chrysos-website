import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import ProductGrid from '../components/ProductGrid';

const Products = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: '#f9f9f9', minHeight: 'calc(100vh - 111px)' }}>
      <Container>
        <Typography 
          variant="h3" 
          component="h1" 
          align="center" 
          sx={{ 
            mb: 5, 
            fontFamily: 'var(--font-primary)',
            fontWeight: 'bold',
            position: 'relative'
          }}
        >
          Our Products
        </Typography>
        
        <ProductGrid />
      </Container>
    </Box>
  );
};

export default Products; 