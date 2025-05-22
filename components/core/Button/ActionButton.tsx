import React from 'react';
import { Button } from '@mui/material';
import { ActionButtonProps } from './Button.types';

/**
 * ActionButton component - a customized Material-UI Button with predefined styles
 */
export const ActionButton: React.FC<ActionButtonProps> = ({
  children,
  variant,
  endIcon,
  sx = {},
  onClick,
  primary = true
}) => {
  // Base styles applied to all buttons
  const baseStyles = {
    px: 4,
    py: 1.5,
    fontWeight: 'bold',
    borderRadius: 2,
    transition: 'all 0.3s',
  };

  // Styles that change based on variant and primary flag
  const variantStyles = variant === 'contained'
    ? {
        bgcolor: primary ? 'primary.main' : 'secondary.main',
        color: primary ? 'text.primary' : 'text.secondary',
        '&:hover': {
          bgcolor: primary ? 'primary.light' : 'secondary.light',
          transform: 'scale(1.05)'
        },
      }
    : {
        borderColor: 'text.primary',
        color: 'text.primary',
        '&:hover': {
          borderColor: primary ? 'primary.main' : 'white',
          color: primary ? 'black' : 'white',
          bgcolor: primary ? 'white' : 'rgba(255, 255, 255, 0.1)',
        },
      };

  return (
    <Button
      variant={variant}
      sx={{
        ...baseStyles,
        ...variantStyles,
        ...sx
      }}
      endIcon={endIcon}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};