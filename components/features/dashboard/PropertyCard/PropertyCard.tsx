import React, { useState } from 'react';
import { Box, Card, CardContent, CardMedia, Chip, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { Bathtub, Bed, Delete, Edit, MoreVert, SquareFoot } from '@mui/icons-material';
import { PropertyCardProps, StatusColor } from './PropertyCard.types';

/**
 * PropertyCard component - displays property information in a card format
 */
export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  // State for the menu
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  // Handle menu open
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle menu close
  const handleClose = () => {
    setAnchorEl(null);
  };

  /**
   * Determine the color of the status chip based on the property status
   */
  const getStatusColor = (status: string): StatusColor => {
    switch (status) {
      case 'For Sale':
        return 'primary';
      case 'Just Listed':
        return 'error';
      case 'Open House':
        return 'secondary';
      case 'Sold':
        return 'success';
      default:
        return 'default';
    }
  };

  return (
    <Card sx={{
      maxWidth: 345,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.3s',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: 6
      }
    }}>
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="140"
          image={property.image || "/images/property-placeholder.jpg"}
          alt={property.address}
        />
        <Box sx={{ position: 'absolute', top: 8, left: 8 }}>
          <Chip
            label={property.status}
            color={getStatusColor(property.status)}
            size="small"
            sx={{ fontWeight: 'bold' }}
          />
        </Box>
        <IconButton
          aria-label="more"
          aria-controls="property-menu"
          aria-haspopup="true"
          component="a"
          onClick={handleClick}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            bgcolor: 'background.paper',
            '&:hover': {
              bgcolor: 'background.paper',
            }
          }}
        >
          <MoreVert />
        </IconButton>
        <Menu
          id="property-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Edit fontSize="small" sx={{ mr: 1 }} />
            Edit Property
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Delete fontSize="small" sx={{ mr: 1 }} />
            Delete Property
          </MenuItem>
        </Menu>
      </Box>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div" noWrap>
          {property.address}
        </Typography>
        <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold', mb: 1 }}>
          {property.price}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Bed fontSize="small" sx={{ mr: 0.5 }} />
            <Typography variant="body2">{property.beds}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Bathtub fontSize="small" sx={{ mr: 0.5 }} />
            <Typography variant="body2">{property.baths}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <SquareFoot fontSize="small" sx={{ mr: 0.5 }} />
            <Typography variant="body2">{property.sqft} sqft</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};