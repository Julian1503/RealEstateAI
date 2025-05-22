import { Box, Typography } from '@mui/material';
import React from "react";
import { WelcomeHeaderProps } from './WelcomeHeader.types';

/**
 * WelcomeHeader component - displays a welcome message with the user's name
 */
export const WelcomeHeader: React.FC<WelcomeHeaderProps> = ({ username }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h4" color="text.primary" gutterBottom>
        Welcome back, {username}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Here's what's happening with your properties today
      </Typography>
    </Box>
  );
};