import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Select,
  MenuItem,
  Button,
  Rating,
  Box,
} from '@mui/material';

// Placeholder image URL
const PLACEHOLDER_IMAGE = 'https://via.placeholder.com/400x300/9370DB/ffffff?text=Purple+Seamoss+Gel';

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [imageError, setImageError] = useState(false);

  const handleVariantChange = (event) => {
    const variant = product.variants.find(v => v.id === event.target.value);
    if (variant) {
      setSelectedVariant(variant);
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="280"
        image={imageError ? PLACEHOLDER_IMAGE : product.images[0]}
        alt={product.name}
        sx={{ objectFit: 'cover' }}
        onError={handleImageError}
      />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {product.name}
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <Rating value={product.rating} precision={0.1} readOnly size="small" />
          <Typography variant="body2" color="text.secondary">
            ({product.reviews} reviews)
          </Typography>
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {product.description}
        </Typography>

        <Box sx={{ mt: 'auto' }}>
          <Select
            value={selectedVariant.id}
            onChange={handleVariantChange}
            fullWidth
            size="small"
            sx={{ mb: 2 }}
          >
            {product.variants.map((variant) => (
              <MenuItem key={variant.id} value={variant.id}>
                {variant.size} - ${variant.price.toFixed(2)}
              </MenuItem>
            ))}
          </Select>

          <Button 
            variant="contained" 
            fullWidth 
            sx={{ 
              bgcolor: 'black',
              '&:hover': {
                bgcolor: '#333'
              }
            }}
          >
            Add to Cart
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard; 