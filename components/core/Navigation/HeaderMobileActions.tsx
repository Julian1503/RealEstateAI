import React from 'react';
import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {HeaderMobileActionsProps} from "@components/core";

export const HeaderMobileActions: React.FC<HeaderMobileActionsProps> = ({ onMenuClick }) => (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton size="large" edge="end" color="inherit" aria-label="menu" onClick={onMenuClick}>
            <MenuIcon />
        </IconButton>
    </Box>
);