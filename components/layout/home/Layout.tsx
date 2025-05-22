import React from 'react';
import Head from 'next/head';
import {Box, CssBaseline} from '@mui/material';

interface LayoutProps {
    children: React.ReactNode;
    bgColor?: string;
    textColor?: string;
}

const Layout: React.FC<LayoutProps> = ({
                                           children,
                                           bgColor = 'background.default',
                                           textColor = 'text.primary',
                                       }) => {

    return (
        <>
            <CssBaseline />
            <Head>
                <title>AI Realty Assistant</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Box
                sx={{
                    minHeight: '100vh',
                    bgcolor: bgColor,
                    color: textColor,
                }}
            >
                {children}
            </Box>
        </>
    );
};

export default Layout;