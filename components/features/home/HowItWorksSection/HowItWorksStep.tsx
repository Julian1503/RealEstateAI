import { Box, Typography } from '@mui/material';
import React from 'react';
import { HowItWorksStepProps } from './HowItWorksSection.types';

/**
 * HowItWorksStep component - displays a single step in the how it works section
 */
export const HowItWorksStep: React.FC<HowItWorksStepProps> = ({ 
  number, 
  title, 
  description 
}) => (
  <Box sx={{ width: { xs: '100%', md: '33%' }, textAlign: 'center' }}>
    <Box
      sx={{
        bgcolor: 'primary.main',
        width: 64,
        height: 64,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mx: 'auto',
        mb: 3,
      }}
    >
      <Typography sx={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>{number}</Typography>
    </Box>
    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary', mb: 1.5 }}>
      {title}
    </Typography>
    <Typography sx={{ color: 'text.secondary' }}>
      {description}
    </Typography>
  </Box>
);