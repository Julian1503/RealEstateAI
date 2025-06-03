import React from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    Button,
    Avatar,
    Typography,
    Divider
} from '@mui/material';
import {
    Business as BusinessIcon,
    Save as SaveIcon,
    Share as ShareIcon,
    Download as DownloadIcon
} from '@mui/icons-material';

const TopNavigation: React.FC = () => {
    return (
        <AppBar
            position="static"
            sx={{
                bgcolor: 'background.paper',
                borderBottom: '1px solid rgba(255, 255, 255, 0.12)'
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <BusinessIcon sx={{ color: '#008080', fontSize: 32 }} />
                    <Typography variant="h6" component="h1" sx={{ fontWeight: 'bold' }}>
                        RealEstateAI
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                    <Button
                        startIcon={<SaveIcon />}
                        sx={{
                            color: 'white',
                            '&:hover': {
                                color: '#008080'
                            },
                            textTransform: 'none'
                        }}
                    >
                        Save
                    </Button>

                    <Button
                        startIcon={<ShareIcon />}
                        sx={{
                            color: 'white',
                            '&:hover': {
                                color: '#008080'
                            },
                            textTransform: 'none'
                        }}
                    >
                        Share
                    </Button>

                    <Button
                        startIcon={<DownloadIcon />}
                        sx={{
                            color: 'white',
                            '&:hover': {
                                color: '#008080'
                            },
                            textTransform: 'none'
                        }}
                    >
                        Download
                    </Button>

                    <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ bgcolor: 'rgba(255, 255, 255, 0.12)', width: '1px', mx: 1 }}
                    />

                    <Avatar
                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                        sx={{
                            width: 32,
                            height: 32,
                            cursor: 'pointer'
                        }}
                    />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default TopNavigation;