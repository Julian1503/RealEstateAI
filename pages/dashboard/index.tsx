import {useState} from 'react';
import {Box, Container, Grid, useTheme} from '@mui/material';
import {
    BrushOutlined as ImageIcon,
    Dashboard as DashboardIcon,
    Description as DescriptionIcon,
    Help as HelpIcon,
    House as HouseIcon,
    Settings as SettingsIcon,
    Share as ShareIcon,
} from '@mui/icons-material';
import {DashboardLayout} from "@components/layout/dashboard/DashboardLayout";
import {QuickActionBar} from "@components/features/dashboard/QuickActionBar";
import {WelcomeHeader} from "@components/features/dashboard/WelcomeHeader";
import {DashboardStats} from "@components/features/dashboard/DashboardStats";
import {RecentActivitySection} from "@components/features/dashboard/RecentActivitySection";
import {RecentPropertiesSection} from "@components/features/dashboard/RecentPropertiesSection";

const recentProperties = [
    {
        id: 1,
        address: '123 Luxury Lane, Beverly Hills',
        price: '$1,250,000',
        sqft: 2500,
        beds: 4,
        baths: 3,
        image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/5ba9ad07d2-8c25bae66e0129d3bbd4.png',
        status: 'For Sale'
    },
    {
        id: 2,
        address: '456 Ocean View Dr, Malibu',
        price: '$2,450,000',
        sqft: 3200,
        beds: 5,
        baths: 4,
        image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/fca16074ad-3786fc06e5c176006fca.png',
        status: 'Just Listed'
    },
    {
        id: 3,
        address: '789 Mountain Retreat, Aspen',
        price: '$3,750,000',
        sqft: 4100,
        beds: 6,
        baths: 5,
        image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/4a713135fa-0b726da9afd8f9a28b2a.png',
        status: 'Open House'
    },
];

const activities = [
    { id: 1, action: 'Generated description', property: '123 Luxury Lane', time: '2 hours ago' },
    { id: 2, action: 'Enhanced property image', property: '456 Ocean View Dr', time: '1 day ago' },
    { id: 3, action: 'Shared to Instagram', property: '789 Mountain Retreat', time: '2 days ago' },
];

export default function Dashboard() {
    const [currentPath, setCurrentPath] = useState<string>('/dashboard');
    const navItems = [
        { id: 'dashboard', label: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
        { id: 'properties', label: 'Properties', icon: <HouseIcon />, path: '/properties' },
        { id: 'descriptions', label: 'AI Descriptions', icon: <DescriptionIcon />, path: '/descriptions' },
        { id: 'images', label: 'Image Enhancement', icon: <ImageIcon />, path: '/images' },
        { id: 'social', label: 'Social Media', icon: <ShareIcon />, path: '/social' },
    ];

    const secondaryNavItems = [
        { id: 'settings', label: 'Settings', icon: <SettingsIcon />, path: '/settings' },
        { id: 'help', label: 'Help & Support', icon: <HelpIcon />, path: '/help' },
    ];

    const userMenuItems = [
        { id: 'profile', label: 'Profile' },
        { id: 'account', label: 'My account' },
        { id: 'logout', label: 'Logout' },
    ];

    const handleNavigate = (path: string) => {
        setCurrentPath(path);
        // aquí podrías hacer routing con react-router o similar
    };

    const handleUserMenuClick = (id: string) => {
        switch (id) {
            case 'logout':
                // lógica de logout
                break;
            case 'profile':
            case 'account':
                // navegación a perfil
                break;
        }
    };


    return (
        <DashboardLayout
            title=""
            drawerWidth={240}
            navItems={navItems}
            secondaryNavItems={secondaryNavItems}
            selectedPath={currentPath}
            onNavigate={handleNavigate}
            avatarSrc="/images/avatar.jpg"
            userMenuItems={userMenuItems}
            onUserMenuClick={handleUserMenuClick}
        >
            <Box
                sx={{
                    backgroundColor: 'background.default',
                    minHeight: '100%',
                    py: 3
                }}
            >
                <Container maxWidth="xl">
                    <WelcomeHeader username="Sarah" />
                    <Grid container spacing={3}>
                        <DashboardStats />
                        <QuickActionBar />
                        <RecentPropertiesSection properties={recentProperties} />
                        <RecentActivitySection activities={activities}/>
                    </Grid>
                </Container>
            </Box>
        </DashboardLayout>
    );
}
