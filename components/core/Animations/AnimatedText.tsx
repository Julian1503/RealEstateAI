import React from 'react';
import {Typography} from '@mui/material';
import {motion} from 'framer-motion';
import { AnimatedTextProps } from './Animations.types';

/**
 * AnimatedText component - displays text with animations effects
 */
export const AnimatedText: React.FC<AnimatedTextProps> = ({
    children,
    variant = "body1",
    delay = 0.6,
    sx = {}
}) => {
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: delay,
                ease: "easeOut"
            }
        }
    };

    // Ensure typography size is explicitly set
    const consolidatedSx = {
        fontSize: variant === 'h6' ? { xs: '1.25rem', md: '1.25rem' } : undefined,
        ...sx
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            style={{ width: '100%' }}
        >
            <Typography
                variant={variant}
                sx={consolidatedSx}
            >
                {children}
            </Typography>
        </motion.div>
    );
};