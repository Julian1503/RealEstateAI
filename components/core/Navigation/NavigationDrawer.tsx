import React from 'react';
import {
    Drawer,
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Divider,
    IconButton
} from '@mui/material';
import { NavigationDrawerProps, ThemeToggleButton } from "@components/core";
import Link from "next/link";

const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
                                                               open,
                                                               onClose,
                                                               links,
                                                               primaryButtonText,
                                                               themeMode,
                                                               toggleTheme,
                                                               avatarSrc,
                                                               onLogout
                                                           }) => {
    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <Box
                sx={{
                    width: 250,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}
                role="presentation"
                onClick={onClose}
                onKeyDown={onClose}
            >
                <Box>
                    <List>
                        {links.map(link => (
                            <ListItem key={link.label} disablePadding>
                                <ListItemButton component="a" href={link.href}>
                                    <ListItemText primary={link.label} />
                                </ListItemButton>
                            </ListItem>
                        ))}

                        <Divider />

                        {!avatarSrc ? (
                            <ListItem disablePadding>
                                <ListItemButton
                                    href="/login"
                                    passHref
                                    component={Link}
                                    sx={{
                                        px: 2.5,
                                        py: 1,
                                        borderRadius: 2,
                                        m: 0,
                                        bgcolor: 'primary.main',
                                        color: 'text.primary',
                                        textTransform: 'none',
                                        fontWeight: 'medium',
                                        '&:hover': { transform: 'scale(1.05)', transition: 'transform 0.3s' }
                                    }}
                                    onClick={onLogout}
                                >
                                    <ListItemText primary={primaryButtonText || "Login / Register"} />
                                </ListItemButton>
                            </ListItem>
                        ) : (
                            <ListItem disablePadding>
                                <ListItemButton onClick={onLogout}>
                                    <ListItemText primary="Logout" />
                                </ListItemButton>
                            </ListItem>
                        )}
                    </List>
                </Box>

                <Box sx={{ textAlign: 'center', mb: 2 }}>
                    <IconButton onClick={toggleTheme}>
                        <ThemeToggleButton />
                    </IconButton>
                </Box>
            </Box>
        </Drawer>
    );
};

export default NavigationDrawer;
