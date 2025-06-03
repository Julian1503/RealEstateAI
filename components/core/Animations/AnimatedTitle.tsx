import React, {useEffect, useState} from 'react';
import {Box, Typography} from '@mui/material';
import { AnimatedTitleProps } from './Animations.types';

/**
 * AnimatedTitle component - displays a title with a typing animations effect
 */
export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({
    preText,
    highlightedText,
    variant = "h1",
    sx = {}
}) => {
    const [typedText, setTypedText] = useState("");

    // Typing effect
    useEffect(() => {
        if (typedText.length < highlightedText.length) {
            const timeout = setTimeout(() => {
                setTypedText(highlightedText.slice(0, typedText.length + 1));
            }, 300);
            return () => clearTimeout(timeout);
        }
    }, [typedText, highlightedText]);

    // Ensure sx styles include the fontSize explicitly
    const consolidatedSx = {
        fontSize: { xs: '2.5rem', md: '3rem' },
        fontWeight: 'bold',
        lineHeight: 'tight',
        ...sx
    };

    return (
        <>
            <Typography
                variant={variant}
                sx={consolidatedSx}
            >
                {preText}{' '}
                <Box component="span" sx={{ color: 'primary.main', position: 'relative' }}>
                    {typedText}
                    <Box
                        component="span"
                        sx={{
                            position: 'absolute',
                            right: -4,
                            height: '80%',
                            width: '2px',
                            bgcolor: 'primary.main',
                            animation: typedText.length === highlightedText.length ?
                                'blink 1s step-end infinite' : 'none'
                        }}
                    />
                </Box>
            </Typography>
            <style jsx global>{`
                @keyframes blink {
                    from, to { opacity: 1; }
                    50% { opacity: 0; }
                }
            `}</style>
        </>
    );
};