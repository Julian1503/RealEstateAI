import React, {useState} from 'react';
import {Box, Typography, useTheme} from '@mui/material';
import {motion} from 'framer-motion';
import { AnimatedHighlightTextProps } from './Animations.types';

/**
 * AnimatedHighlightText component - displays text with highlighted words that animate on hover
 */
export const AnimatedHighlightText: React.FC<AnimatedHighlightTextProps> = ({
    text,
    highlightedWords = [],
    variant = "h1",
    sx = {}
}) => {
    const theme = useTheme();
    const [hoveredWord, setHoveredWord] = useState<string | null>(null);

    // Process the text and split it into words
    const words = text.split(' ');

    // Consolidate styles
    const consolidatedSx = {
        fontSize: { xs: '2.5rem', md: '3rem' },
        fontWeight: 'bold',
        lineHeight: 'tight',
        ...sx
    };

    return (
        <Typography
            variant={variant}
            sx={consolidatedSx}
        >
            {words.map((word, index) => {
                const isHighlighted = highlightedWords.includes(word);
                const isHovered = hoveredWord === word;

                return (
                    <React.Fragment key={`${word}-${index}`}>
                        <Box
                            component="span"
                            sx={{
                                display: 'inline-block',
                                position: 'relative',
                                color: isHighlighted ? 'primary.main' : 'text.primary',
                                cursor: isHighlighted ? 'pointer' : 'inherit',
                                transition: 'all 0.3s ease',
                                '&:after': isHighlighted ? {
                                    content: '""',
                                    position: 'absolute',
                                    width: '100%',
                                    transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
                                    height: '3px',
                                    bottom: '-4px',
                                    left: '0',
                                    backgroundColor: theme.palette.primary.main,
                                    transformOrigin: 'bottom right',
                                    transition: 'transform 0.3s ease-out'
                                } : {},
                            }}
                            onMouseEnter={() => isHighlighted && setHoveredWord(word)}
                            onMouseLeave={() => setHoveredWord(null)}
                        >
                            <motion.span
                                animate={isHovered ? {
                                    y: [0, -5, 0],
                                    transition: { duration: 0.5 }
                                } : {}}
                            >
                                {word}
                            </motion.span>

                            {isHighlighted && isHovered && (
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: '-100%',
                                        left: '-10%',
                                        width: '120%',
                                        height: '300%',
                                        background: `radial-gradient(circle, ${theme.palette.primary.main}20 0%, transparent 70%)`,
                                        filter: 'blur(10px)',
                                        zIndex: -1,
                                    }}
                                    component={motion.div}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            )}
                        </Box>
                        {index < words.length - 1 ? ' ' : ''}
                    </React.Fragment>
                );
            })}
        </Typography>
    );
};