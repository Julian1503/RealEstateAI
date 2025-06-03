import {Box, Paper, useTheme} from '@mui/material';
import React, {ReactNode} from 'react';

export interface AuthLayoutProps {
    leftContent: ReactNode;
    rightContent: ReactNode;
}

export const AuthLayout = ({ leftContent, rightContent }: AuthLayoutProps) => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                minHeight: '100vh',
                background:  `linear-gradient(
                  to bottom,
                  ${theme.palette.background.default},
                  ${theme.palette.background.paper}
                )`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 6
            }}
        >
            <Paper
                elevation={8}
                sx={{
                    width: '100%',
                    maxWidth: '64rem',
                    borderRadius: 4,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    overflow: 'hidden'
                }}
            >
                <Box bgcolor='background.grey' sx={{ width: { xs: '100%', md: '50%' }, p: { xs: 4, md: 6 } }}>
                    {leftContent}
                </Box>
                {rightContent}
            </Paper>
        </Box>
    );
};