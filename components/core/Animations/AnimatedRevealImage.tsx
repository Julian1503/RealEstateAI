import React from 'react';
import {Box, useTheme} from '@mui/material';
import {motion} from 'framer-motion';
import { AnimatedRevealImageProps } from './Animations.types';

/**
 * AnimatedRevealImage component - displays an image with reveal animation effects
 */
export const AnimatedRevealImage: React.FC<AnimatedRevealImageProps> = ({ children }) => {
    const theme = useTheme();

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
            style={{
                position: 'relative',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: `linear-gradient(90deg, transparent 0%, ${theme.palette.primary.main}50 50%, transparent 100%)`,
                    zIndex: 2,
                    pointerEvents: 'none',
                    borderRadius: theme.shape.borderRadius,
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    top: '5%',
                    left: '5%',
                    width: '90%',
                    height: '90%',
                    filter: `drop-shadow(0 0 20px ${theme.palette.primary.main}30)`,
                    zIndex: 0,
                }}
            />
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                style={{
                    position: 'relative',
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};