import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { FloatingImageProps } from './Animations.types';

/**
 * FloatingImage component - displays an image with a floating animation effect
 */
export const FloatingImage: React.FC<FloatingImageProps> = ({
    src,
    alt,
    width,
    height,
    floatDirection = 'up',
    floatDistance = 10,
    duration = 5,
    sx = {}
}) => {
    const getAnimationProps = () => {
        switch (floatDirection) {
            case 'up':
                return { y: [0, -floatDistance, 0] };
            case 'down':
                return { y: [0, floatDistance, 0] };
            case 'left':
                return { x: [0, -floatDistance, 0] };
            case 'right':
                return { x: [0, floatDistance, 0] };
            default:
                return { y: [0, -floatDistance, 0] };
        }
    };

    return (
        <Box
            component={motion.div}
            sx={{
                display: 'inline-block',
                overflow: 'hidden',
                ...sx
            }}
            animate={getAnimationProps()}
            transition={{
                repeat: Infinity,
                duration: duration,
                ease: "easeInOut"
            }}
        >
            <Box
                component="img"
                src={src}
                alt={alt}
                sx={{
                    width: width,
                    height: height,
                    display: 'block',
                    maxWidth: '100%'
                }}
            />
        </Box>
    );
};