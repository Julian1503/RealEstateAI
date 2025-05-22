import React from 'react';
import {IconButton, useMediaQuery, useTheme} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {MobileMenuButtonProps} from '@core/Navigation/Navigation.types';


const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
                                                               onClick,
                                                               iconColor = 'text.primary',
                                                           }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    if (!isMobile) return null;

    return (
        <IconButton
            onClick={onClick}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { md: 'none' } }}
        >
            <MenuIcon sx={{ color: iconColor }} />
        </IconButton>
    );
};

export default MobileMenuButton;