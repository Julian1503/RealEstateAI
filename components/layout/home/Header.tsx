import React, {useState} from 'react';
import {
    AppBar,
    Box,
    Button,
    Container,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    useMediaQuery,
    useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Logo from '@core/Navigation/Logo';
import Link from 'next/link';
import {ThemeToggleButton} from '@core/Button/ThemeToggleButton';

export interface NavLinkItem {
    label: string;
    href: string;
}

interface HeaderProps {
    logoText?: string;
    links?: NavLinkItem[];
    primaryButtonText?: string;
    headerBgColor?: string;
    themeMode?: 'light' | 'dark';
    toggleTheme?: () => void;
}

const Header: React.FC<HeaderProps> = ({
                                           logoText = 'AI Realty Assistant',
                                           links = [
                                               { label: 'Home', href: '#Hero-section' },
                                               { label: 'Generate', href: '#features-section' },
                                               { label: 'Pricing', href: '#pricing-teaser' },
                                           ],
                                           primaryButtonText = 'Login / Register',
                                           headerBgColor = 'background.paper',
                                           themeMode = 'dark',
                                           toggleTheme = () => {},
                                       }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        setDrawerOpen(open);
    };

    const mobileDrawer = (
        <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
        >
            <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
            >
                <List>
                    {links.map((link) => (
                        <ListItem key={link.label} disablePadding>
                            <ListItemButton component="a" href={link.href}>
                                <ListItemText primary={link.label} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                    <ListItem disablePadding>
                        <ListItemButton
                            component="a"
                            href="#cta-section"
                            sx={{
                                bgcolor: 'primary.main',
                                color: 'common.white',
                                '&:hover': {
                                    bgcolor: 'primary.dark',
                                },
                                my: 1,
                                mx: 2,
                                borderRadius: 1
                            }}
                        >
                            <ListItemText primary={primaryButtonText} />
                        </ListItemButton>
                    </ListItem>
                    {/* Botón de toggle de tema en el drawer para móviles */}
                    <ListItem disablePadding>
                        <ListItemButton onClick={toggleTheme}>
                            <ListItemText
                                primary={themeMode === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
                                secondary={
                                    <Box component="span" sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                        {themeMode === 'dark' ? <Brightness7Icon fontSize="small" /> : <Brightness4Icon fontSize="small" />}
                                    </Box>
                                }
                            />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    );

    return (
        <AppBar
            position="fixed"
            sx={{
                bgcolor: headerBgColor,
                boxShadow: 0
            }}
            id="header"
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Logo text={logoText} iconColor="primary.main" />

                    {!isMobile ? (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                            {links.map((link) => (
                                <Button
                                    key={link.label}
                                    href={link.href}
                                    sx={{
                                        color: 'text.primary',
                                        '&:hover': {
                                            color: 'primary.main',
                                        },
                                        textTransform: 'none'
                                    }}
                                >
                                    {link.label}
                                </Button>
                            ))}

                            <ThemeToggleButton />

                            <Button
                                variant="contained"
                                color="primary"
                                href="/login"
                                component={Link}
                                passHref
                                sx={{
                                    px: 2.5,
                                    py: 1,
                                    borderRadius: 2,
                                    color: 'text.primary',
                                    textTransform: 'none',
                                    fontWeight: 'medium',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        transition: 'transform 0.3s'
                                    }
                                }}
                            >
                                {primaryButtonText}
                            </Button>
                        </Box>
                    ) : (
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <ThemeToggleButton/>
                            <IconButton
                                size="large"
                                edge="end"
                                color="inherit"
                                aria-label="menu"
                                onClick={toggleDrawer(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    )}

                    {mobileDrawer}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;