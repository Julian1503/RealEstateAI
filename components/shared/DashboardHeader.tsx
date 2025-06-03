import React from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    Button,
    Avatar,
    Typography,
    Divider,
    IconButton,
    Menu,
    MenuItem,
    useMediaQuery,
    useTheme
} from '@mui/material';
import {
    Business as BusinessIcon,
    Save as SaveIcon,
    Share as ShareIcon,
    Download as DownloadIcon,
    Menu as MenuIcon,
    Notifications,
    MoreVert as MoreVertIcon
} from '@mui/icons-material';

export interface UserMenuItem {
    id: string;
    label: string;
}

export interface ActionButton {
    id: string;
    label: string;
    icon: React.ReactNode;
    onClick: () => void;
}

interface DashboardHeaderProps {
    // Layout props
    variant?: 'admin' | 'document';
    drawerWidth?: number;
    onDrawerToggle?: () => void;

    // Branding props
    logoText?: string;
    logoIcon?: React.ReactNode;
    title?: string;

    // User props
    avatarSrc?: string;
    userMenuItems?: UserMenuItem[];
    onUserMenuClick?: (menuId: string) => void;

    // Notification props
    showNotifications?: boolean;
    onNotificationClick?: () => void;

    // Action buttons props (for document variant)
    actionButtons?: ActionButton[];

    // Styling props
    backgroundColor?: string;
    borderColor?: string;
    logoColor?: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
     variant = 'admin',
     drawerWidth = 240,
     onDrawerToggle = () => {},
     logoText = 'RealEstateAI',
     logoIcon = <BusinessIcon />,
     title = '',
     avatarSrc = 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg',
     userMenuItems = [],
     onUserMenuClick = () => {},
     showNotifications = true,
     onNotificationClick = () => {},
     actionButtons = [
         {
             id: 'save',
             label: 'Save',
             icon: <SaveIcon />,
             onClick: () => console.log('Save clicked')
         },
         {
             id: 'share',
             label: 'Share',
             icon: <ShareIcon />,
             onClick: () => console.log('Share clicked')
         },
         {
             id: 'download',
             label: 'Download',
             icon: <DownloadIcon />,
             onClick: () => console.log('Download clicked')
         }
     ],
     backgroundColor = variant === 'document' ? 'background.paper' : 'background.default',
     borderColor = 'rgba(255, 255, 255, 0.12)',
     logoColor = '#008080'
                                                         }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [userMenuAnchor, setUserMenuAnchor] = React.useState<null | HTMLElement>(null);
    const [mobileMenuAnchor, setMobileMenuAnchor] = React.useState<null | HTMLElement>(null);

    const handleUserMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setUserMenuAnchor(event.currentTarget);
    };

    const handleUserMenuClose = () => {
        setUserMenuAnchor(null);
    };

    const handleUserMenuClick = (menuId: string) => () => {
        onUserMenuClick(menuId);
        handleUserMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMenuAnchor(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMenuAnchor(null);
    };

    const renderLogo = () => (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {React.cloneElement(logoIcon as React.ReactElement, {
                sx: {
                    color: logoColor,
                    fontSize: 32,
                    ...(logoIcon as React.ReactElement)?.props?.sx
                }
            })}
            <Typography
                variant="h6"
                component="h1"
                sx={{
                    fontWeight: 'bold',
                    color: variant === 'document' ? 'white' : 'text.primary'
                }}
            >
                {logoText}
            </Typography>
        </Box>
    );

    const renderActionButtons = () => {
        if (isMobile) {
            return (
                <>
                    <IconButton
                        color="inherit"
                        onClick={handleMobileMenuOpen}
                        sx={{ color: variant === 'document' ? 'white' : 'text.primary' }}
                    >
                        <MoreVertIcon />
                    </IconButton>
                    <Menu
                        anchorEl={mobileMenuAnchor}
                        open={Boolean(mobileMenuAnchor)}
                        onClose={handleMobileMenuClose}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    >
                        {actionButtons.map((button) => (
                            <MenuItem
                                key={button.id}
                                onClick={() => {
                                    button.onClick();
                                    handleMobileMenuClose();
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    {button.icon}
                                    {button.label}
                                </Box>
                            </MenuItem>
                        ))}
                    </Menu>
                </>
            );
        }

        return actionButtons.map((button) => (
            <Button
                key={button.id}
                startIcon={button.icon}
                onClick={button.onClick}
                sx={{
                    color: variant === 'document' ? 'white' : 'text.primary',
                    '&:hover': {
                        color: logoColor
                    },
                    textTransform: 'none'
                }}
            >
                {button.label}
            </Button>
        ));
    };

    // Admin Dashboard Header
    if (variant === 'admin') {
        return (
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    boxShadow: 'none',
                    bgcolor: backgroundColor,
                    color: 'text.primary',
                }}
            >
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <IconButton
                            color="inherit"
                            edge="start"
                            onClick={onDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
                            {title}
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {showNotifications && (
                            <IconButton color="inherit" onClick={onNotificationClick}>
                                <Notifications />
                            </IconButton>
                        )}

                        <IconButton color="inherit" onClick={handleUserMenuOpen}>
                            <Avatar src={avatarSrc} sx={{ width: 32, height: 32 }} />
                        </IconButton>

                        <Menu
                            anchorEl={userMenuAnchor}
                            open={Boolean(userMenuAnchor)}
                            onClose={handleUserMenuClose}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                        >
                            {userMenuItems.map(menu => (
                                <MenuItem key={menu.id} onClick={handleUserMenuClick(menu.id)}>
                                    {menu.label}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
        );
    }

    // Document Header (with action buttons)
    return (
        <AppBar
            position="static"
            sx={{
                bgcolor: backgroundColor,
                borderBottom: `1px solid ${borderColor}`
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                {renderLogo()}

                <Box sx={{ display: 'flex', alignItems: 'center', gap: isMobile ? 1 : 3 }}>
                    {renderActionButtons()}

                    {!isMobile && (
                        <Divider
                            orientation="vertical"
                            flexItem
                            sx={{
                                bgcolor: borderColor,
                                width: '1px',
                                mx: 1
                            }}
                        />
                    )}

                    <IconButton onClick={handleUserMenuOpen}>
                        <Avatar
                            src={avatarSrc}
                            sx={{
                                width: 32,
                                height: 32,
                                cursor: 'pointer'
                            }}
                        />
                    </IconButton>

                    <Menu
                        anchorEl={userMenuAnchor}
                        open={Boolean(userMenuAnchor)}
                        onClose={handleUserMenuClose}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    >
                        {userMenuItems.map(menu => (
                            <MenuItem key={menu.id} onClick={handleUserMenuClick(menu.id)}>
                                {menu.label}
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default DashboardHeader;