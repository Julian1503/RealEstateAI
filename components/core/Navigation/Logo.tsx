import React from 'react';
import {Box, Typography} from '@mui/material';
import ApartmentIcon from '@mui/icons-material/Apartment';
import {LogoProps} from '@core/Navigation/Navigation.types';


const Logo: React.FC<LogoProps> = ({
                                       text = 'AI Realty Assistant',
                                       iconColor = 'primary.main',
                                       fontSize = '1rem',
                                   }) => (
    <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer'
        }}
    >
        <ApartmentIcon
            sx={{
                color: iconColor,
                fontSize: '1.5rem',
                mr: 1
            }}
        />
        <Typography
            variant="h6"
            component="span"
            fontWeight="bold"
            sx={{
                fontSize
            }}
        >
            {text}
        </Typography>
    </Box>
);

export default Logo;