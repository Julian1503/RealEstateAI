import React from 'react';
import {Stack} from '@mui/material';
import {motion} from 'framer-motion';
import { AnimatedButtonsProps } from './Animations.types';

/**
 * AnimatedButtons component - displays buttons with animations effects
 */
export const AnimatedButtons: React.FC<AnimatedButtonsProps> = ({
    children,
    direction = { xs: 'column', sm: 'row' },
    spacing = 2,
    delay = 1
}) => {
    const buttonsVariants = {
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

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={buttonsVariants}
        >
            <Stack
                direction={direction}
                spacing={spacing}
            >
                {children}
            </Stack>
        </motion.div>
    );
};