import React from 'react';
import { Grid, Container } from '@mui/material';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const ProductGrid = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductGrid; 