import React from 'react';
import { AppBar, Container, Toolbar, useMediaQuery, useTheme, Box, IconButton } from '@mui/material';
import Logo from '@core/Navigation/Logo';
import NavigationDrawer from "@core/Navigation/NavigationDrawer";
import HeaderDesktopActions from "@core/Navigation/HeaderDesktopActions";
import {HeaderMobileActions} from "@core/index";

export interface NavLinkItem { icon?: React.ReactNode, label: string; href: string; }

interface HeaderProps {
    logoText?: string;
    links?: NavLinkItem[];
    primaryButtonText?: string;
    headerBgColor?: string;
    themeMode?: 'light' | 'dark';
    toggleTheme?: () => void;
    position?: 'fixed' | 'static' | 'absolute' | 'sticky';
}

const Header: React.FC<HeaderProps> = ({
                                           logoText = 'RealEstateAI',
                                           links = [
                                               { label: 'Home', href: '#Hero-section' },
                                               { label: 'Generate', href: '#features-section' },
                                               { label: 'Pricing', href: '#pricing-teaser' },
                                           ],
                                           primaryButtonText = 'Login / Register',
                                           headerBgColor = 'background.paper',
                                           position = 'fixed' ,
                                           themeMode = 'dark',
                                           toggleTheme = () => {},
                                       }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleDrawer = (open: boolean) => () => setDrawerOpen(open);

    return (
        <AppBar position={position} sx={{ bgcolor: headerBgColor, boxShadow: 'none' }} id="header">
            <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', px: 4 }}>
                <Logo text={logoText} iconColor="primary.main" />

                {!isMobile ? (
                    <HeaderDesktopActions
                        links={links}
                        primaryButtonText={primaryButtonText}
                        themeMode={themeMode}
                        toggleTheme={toggleTheme}
                    />
                ) : (
                    <HeaderMobileActions onMenuClick={handleDrawer(true)} />
                )}

                <NavigationDrawer
                    open={drawerOpen}
                    onClose={handleDrawer(false)}
                    links={links}
                    primaryButtonText={primaryButtonText}
                    themeMode={themeMode}
                    toggleTheme={toggleTheme}
                />
            </Toolbar>
        </AppBar>
    );
};

export default Header;