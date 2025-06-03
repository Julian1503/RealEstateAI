import React, {useEffect, useState} from 'react';
import {Box} from '@mui/material';
import {motion} from 'framer-motion';
import { AnimatedGradientBackgroundProps } from './Animations.types';

/**
 * AnimatedGradientBackground component - displays a gradient background with animations effects
 */
export const AnimatedGradientBackground: React.FC<AnimatedGradientBackgroundProps> = ({
    children,
    colors = ['#1a237e', '#0d47a1', '#0288d1', '#01579b'],
    intensity = 0.05, // Lower default value for a more subtle effect
}) => {
    const [gradientPosition, setGradientPosition] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Change the gradient slowly (optimized for performance)
    useEffect(() => {
        const interval = setInterval(() => {
            setGradientPosition((prev) => (prev + 0.5) % 360); // Slower movement
        }, 200); // Less frequent updates for better performance

        return () => clearInterval(interval);
    }, []);

    // Follow the mouse slightly (debounced)
    const handleMouseMove = (e: React.MouseEvent) => {
        // Debounce for better performance
        if (!window.requestAnimationFrame) {
            const { clientX, clientY } = e;
            const moveX = (clientX / window.innerWidth - 0.5) * 15; // Reduced from 20
            const moveY = (clientY / window.innerHeight - 0.5) * 15; // Reduced from 20

            setMousePosition({ x: moveX, y: moveY });
        } else {
            window.requestAnimationFrame(() => {
                const { clientX, clientY } = e;
                const moveX = (clientX / window.innerWidth - 0.5) * 15;
                const moveY = (clientY / window.innerHeight - 0.5) * 15;

                setMousePosition({ x: moveX, y: moveY });
            });
        }
    };

    // Generate the background CSS
    const generateBackground = () => {
        const angle = (gradientPosition % 360);
        return `linear-gradient(${angle}deg, ${colors.join(', ')})`;
    };

    return (
        <Box
            onMouseMove={handleMouseMove}
            sx={{
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                height: '100%',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {/* Animated background optimized */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: generateBackground(),
                    opacity: intensity, // Use the intensity parameter
                    transition: 'background 0.8s ease', // Smoother transition
                    zIndex: 0,
                    filter: 'blur(80px)', // Stronger blur to soften the effect
                }}
                component={motion.div}
                animate={{
                    x: mousePosition.x,
                    y: mousePosition.y,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 10, // Softer
                    damping: 50, // More damping
                }}
            />

            {/* Content */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    width: '100%',
                }}
            >
                {children}
            </Box>
        </Box>
    );
};