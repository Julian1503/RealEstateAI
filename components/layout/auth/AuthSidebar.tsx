import {Box, Typography} from '@mui/material';
import React, {ReactNode} from 'react';
import {BenefitsList} from "@components/features/auth/BenefitsList";
import {SidebarCTA} from "@components/features/auth/SidebarCTA";

export interface AuthSidebarProps {
    title: string;
    subtitle: string;
    benefits: {
        icon: ReactNode;
        text: string;
    }[];
    callToAction?: {
        text: string;
        buttonText: string;
        onClick: () => void;
    };
}

export const AuthSidebar = ({
                                title,
                                subtitle,
                                benefits,
                                callToAction
                            }: AuthSidebarProps) => {
    return (
        <Box
            sx={{
                bgcolor: 'background.section',
                borderTopRightRadius: 16,
                borderBottomRightRadius: 16,
                p: 6,
                minHeight: '800px',
                color: 'text.primary',
                position: 'relative',
                overflow: 'hidden',
                height: '100%',
                display: { xs: 'none', md: 'block' },
                width: { md: '50%' },
            }}
        >
            <Box sx={{ position: 'relative', zIndex: 10 }}>
                <Typography variant="h3" fontWeight="bold" sx={{ mb: 3 }}>
                    {title}
                </Typography>
                <Typography color="grey.300" sx={{ mb: 4 }}>
                    {subtitle}
                </Typography>

                <BenefitsList items={benefits} />

                {callToAction && (
                    <SidebarCTA
                        text={callToAction.text}
                        buttonText={callToAction.buttonText}
                        onClick={callToAction.onClick}/>
                )}
            </Box>

            {/* Background Decoration */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    width: 256,
                    height: 256,
                    bgcolor: 'primary.main',
                    opacity: 0.2,
                    borderRadius: '50%',
                    filter: 'blur(60px)'
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    top: 80,
                    right: 80,
                    width: 128,
                    height: 128,
                    bgcolor: 'primary.main',
                    opacity: 0.2,
                    borderRadius: '50%',
                    filter: 'blur(40px)'
                }}
            />
        </Box>
    );
};
