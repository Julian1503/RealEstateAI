import React from 'react';
import {Avatar, Box, Button} from '@mui/material';
import {HeaderDesktopActionsProps, ThemeToggleButton} from "@components/core";
import {NavLinks} from "@core/Navigation/NavLinks";
import Link from "next/link";


const HeaderDesktopActions: React.FC<HeaderDesktopActionsProps> = ({
                                                           links,
                                                           themeMode,
                                                            avatarSrc,
                                                           toggleTheme
                                                       }) => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        <NavLinks links={links} />
        {!avatarSrc ? (
            <Button
                variant="contained"
                color="primary"
                component={Link}
                href="/login"
                passHref
                sx={{
                    px: 2.5,
                    py: 1,
                    borderRadius: 2,
                    color: 'text.primary',
                    textTransform: 'none',
                    fontWeight: 'medium',
                    '&:hover': { transform: 'scale(1.05)', transition: 'transform 0.3s' }
                }}
            >
                Login / Register
            </Button>
            ) : (
            <Avatar
                src={avatarSrc}
                sx={{ width: 32, height: 32, cursor: 'pointer' }}
            />
        )}
    </Box>
);

export default HeaderDesktopActions;