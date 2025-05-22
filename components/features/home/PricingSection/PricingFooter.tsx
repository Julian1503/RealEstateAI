import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { PricingFooterProps } from './PricingSection.types';

/**
 * PricingFooter component - displays a footer with a link to view all pricing options
 */
export const PricingFooter: React.FC<PricingFooterProps> = ({
  text = 'View all pricing options',
  href = '#full-pricing',
}) => (
  <Box sx={{ textAlign: 'center', mt: 4 }}>
    <Link
      href={href}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        color: 'primary.main',
        '&:hover': {
          color: 'common.white',
          textDecoration: 'none',
        },
        transition: 'color 0.2s'
      }}
    >
      <Typography variant="body1" component="span" sx={{ mr: 1 }}>
        {text}
      </Typography>
      <ArrowForwardIcon fontSize="small" />
    </Link>
  </Box>
);