import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Seamoss = () => {
  // Filter only seamoss category products
  const seamossProducts = products.filter(product => product.category === 'seamoss');

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
          Seamoss Products
        </Typography>

        <Box sx={{ mb: 6 }}>
          <Typography variant="body1" sx={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', mb: 4 }}>
            Discover our premium selection of seamoss products, carefully wildcrafted from the pristine waters of the Atlantic Ocean. 
            Rich in essential vitamins and minerals, our seamoss products are designed to support your wellness journey naturally.
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {seamossProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Seamoss; 