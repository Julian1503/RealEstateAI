import React from 'react';
import {Box, CardContent, Paper, Typography} from '@mui/material';
import { InfoCardProps } from './Card.types';

export const InfoCard: React.FC<InfoCardProps> = ({
    id,
    title,
    description,
    icon,
    dark = false
}) => {
    return (
        <Paper
            id={id}
            elevation={0}
            sx={{
                bgcolor: 'background.cardAlt',
                p: 4,
                borderRadius: 4,
                height: '100%',
                transition: 'all 0.3s',
                '&:hover': {
                    boxShadow: dark
                        ? '0 10px 15px -3px rgba(0, 128, 128, 0.2)'
                        : 6,
                    transform: 'translateY(-4px)'
                }
            }}
        >
            {icon && (
                <Box
                    sx={{
                        bgcolor: 'primary.main',
                        width: 56,
                        height: 56,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                        color: 'text.primary',
                        fontSize: '1.5rem'
                    }}
                >
                    {icon}
                </Box>
            )}
            <CardContent sx={{ px: 0, pt: 0, pb: 0 }}>
                <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    fontWeight="bold"
                >
                    {title}
                </Typography>
                <Typography color={dark ? 'grey.400' : 'text.secondary'}>
                    {description}
                </Typography>
            </CardContent>
        </Paper>
    );
};