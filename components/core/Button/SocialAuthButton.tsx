import { Button } from '@mui/material';
import React from 'react';
import { SocialAuthButtonProps } from './Button.types';

/**
 * SocialAuthButton component - a button for social authentication providers
 */
export const SocialAuthButton: React.FC<SocialAuthButtonProps> = ({
  icon,
  provider,
  onAuth,
  ...props
}) => {
  return (
    <Button
      variant="outlined"
      fullWidth
      startIcon={icon}
      onClick={onAuth}
      sx={{
        py: 1.5,
        borderColor: 'divider',
        color: 'text.primary',
        '&:hover': { backgroundColor: 'action.hover' }
      }}
      {...props}
    >
      Continue with {provider}
    </Button>
  );
};