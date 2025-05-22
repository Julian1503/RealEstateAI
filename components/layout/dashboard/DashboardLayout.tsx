import React, {ReactNode, useState} from 'react';
import {
    AppBar,
    Avatar,
    Box,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
    useTheme
} from '@mui/material';
import {Menu as MenuIcon, Notifications} from '@mui/icons-material';

const DEFAULT_DRAWER_WIDTH = 240;

interface NavItem {
    id: string;
    label: string;
    icon: ReactNode;
    path: string;
}

interface UserMenuItem {
    id: string;
    label: string;
}

interface DashboardLayoutProps {
    /** Content to render in the main area */
    children: ReactNode;
    /** Title shown in the AppBar */
    title?: string;
    /** Width of the drawer in pixels */
    drawerWidth?: number;
    /** Primary navigation items */
    navItems: NavItem[];
    /** Secondary navigation items (e.g. settings, help) */
    secondaryNavItems?: NavItem[];
    /** Function called when a nav item is clicked */
    onNavigate: (path: string) => void;
    /** Currently selected path */
    selectedPath: string;
    /** Avatar image source */
    avatarSrc?: string;
    /** User menu items (e.g. profile, logout) */
    userMenuItems?: UserMenuItem[];
    /** Called when a user menu item is clicked */
    onUserMenuClick?: (id: string) => void;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
                                                                    children,
                                                                    title = '',
                                                                    drawerWidth = DEFAULT_DRAWER_WIDTH,
                                                                    navItems,
                                                                    secondaryNavItems = [],
                                                                    onNavigate,
                                                                    selectedPath,
                                                                    avatarSrc,
                                                                    userMenuItems = [],
                                                                    onUserMenuClick
                                                                }) => {
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleUserMenuClick = (id: string) => () => {
        onUserMenuClick?.(id);
        handleMenuClose();
    };

    const drawerContent = (
        <div>
            <Toolbar sx={{ display: 'flex', justifyContent: 'center', py: 1 }}>
                <Typography variant="h6" color="primary.main" fontWeight="bold">
                    RealEstateAI
                </Typography>
            </Toolbar>
            <Divider />
            <List>
                {navItems.map(item => (
                    <ListItem key={item.id} disablePadding>
                        <ListItemButton
                            selected={selectedPath === item.path}
                            onClick={() => onNavigate(item.path)}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            {secondaryNavItems.length > 0 && (
                <>
                    <Divider />
                    <List>
                        {secondaryNavItems.map(item => (
                            <ListItem key={item.id} disablePadding>
                                <ListItemButton onClick={() => onNavigate(item.path)}>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.label} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </>
            )}
        </div>
    );

    return (
        <Box sx={{ display: 'flex' , overflow: 'hidden', height: '100vh', backgroundColor: theme.palette.background.default }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    boxShadow:'none',
                    color: 'text.primary',
                }}
            >
                <Toolbar sx={{
                    backgroundColor: 'background.default',
                    boxShadow:'none'
                }}>
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                    <IconButton color="inherit">
                        <Notifications />
                    </IconButton>
                    <IconButton color="inherit" onClick={handleMenuOpen}>
                        <Avatar src={avatarSrc} />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    >
                        {userMenuItems.map(menu => (
                            <MenuItem key={menu.id} onClick={handleUserMenuClick(menu.id)}>
                                {menu.label}
                            </MenuItem>
                        ))}
                    </Menu>
                </Toolbar>
            </AppBar>
            <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                    }}
                >
                    {drawerContent}
                </Drawer>
                <Drawer
                    variant="permanent"
                    open
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                    }}
                >
                    {drawerContent}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    mt: 8
                }}
            >
                {children}
            </Box>
        </Box>
    );
};
