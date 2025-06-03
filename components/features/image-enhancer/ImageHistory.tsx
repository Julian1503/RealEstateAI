import React from 'react';
import {
    Box,
    Typography,
    Paper
} from '@mui/material';

interface ImageHistoryItemProps {
    src: string;
    alt: string;
    filename: string;
}

const ImageHistoryItem: React.FC<ImageHistoryItemProps> = ({
                                                               src,
                                                               alt,
                                                               filename
                                                           }) => {
    const handleClick = () => {
        console.log('Selected image:', filename);
    };

    return (
        <Paper
            onClick={handleClick}
            sx={{
                bgcolor: 'primary.dark',
                p: 1,
                cursor: 'pointer',
                borderRadius: 2,
                transition: 'background-color 0.3s ease',
                '&:hover': {
                    bgcolor: 'primary.main',
                }
            }}
        >
            <Box
                component="img"
                src={src}
                alt={alt}
                sx={{
                    width: '100%',
                    height: 96,
                    objectFit: 'cover',
                    borderRadius: 1,
                    mb: 1
                }}
            />
            <Typography
                variant="body2"
                sx={{
                    fontSize: '0.875rem'
                }}
            >
                {filename}
            </Typography>
        </Paper>
    );
};

export default ImageHistoryItem;