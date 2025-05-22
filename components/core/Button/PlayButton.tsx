import React from 'react';
import { Box, Button } from '@mui/material';
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { PlayButtonProps } from './Button.types';

/**
 * PlayButton component - a circular play button with a play icon
 */
export const PlayButton: React.FC<PlayButtonProps> = ({ 
  onClick,
  sx = {}
}) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...sx
      }}
    >
      <Button
        variant="contained"
        onClick={onClick}
        sx={{
          bgcolor: 'primary.main',
          width: 80,
          height: 80,
          borderRadius: '50%',
          minWidth: 'auto',
          transition: 'transform 0.3s',
          '&:hover': {
            bgcolor: 'primary.main',
            transform: 'scale(1.1)'
          }
        }}
      >
        <PlayArrowIcon sx={{ fontSize: 40 }} />
      </Button>
    </Box>
  );
};