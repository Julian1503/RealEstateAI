import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@components/core/Theme/ThemeContext';
import { ThemeToggleButtonProps } from './Button.types';

/**
 * ThemeToggleButton component - a button for toggling between light and dark themes
 */
export const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({
  sx = {}
}) => {
  const { mode, toggleTheme } = useTheme();

  return (
    <Tooltip title={mode === 'dark' ? 'Light theme' : 'Dark theme'}>
      <IconButton 
        onClick={toggleTheme} 
        color="inherit"
        sx={sx}
      >
        {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Tooltip>
  );
};