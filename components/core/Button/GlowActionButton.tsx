import React from 'react';
import { Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { ActionButton } from './ActionButton';
import { GlowActionButtonProps } from './Button.types';

/**
 * GlowActionButton component - an enhanced button with glow effect and animations
 */
export const GlowActionButton: React.FC<GlowActionButtonProps> = ({ 
  children, 
  icon, 
  variant = "contained", 
  sx = {} 
}) => {
  const theme = useTheme();
  const isContained = variant === "contained";

  return (
    <Box sx={{ position: 'relative' }}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        <ActionButton
          variant={variant}
          endIcon={icon ? icon : undefined}
          sx={{
            fontSize: '1rem',
            py: 1.5,
            px: 3,
            position: 'relative',
            zIndex: 1,
            ...sx
          }}
        >
          {children}
        </ActionButton>
      </motion.div>

      {isContained && (
        <Box
          sx={{
            position: 'absolute',
            bottom: '-5px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '90%',
            height: '15px',
            background: `radial-gradient(ellipse, ${theme.palette.primary.main}60 0%, transparent 70%)`,
            filter: 'blur(8px)',
            borderRadius: '50%',
            zIndex: 0,
          }}
        />
      )}
    </Box>
  );
};