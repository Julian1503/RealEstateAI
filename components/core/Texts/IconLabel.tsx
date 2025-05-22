import {Box, Typography} from '@mui/material';
import React, {ReactNode} from 'react';
import {IconLabelProps} from "@core/Texts/Text.types";



export const IconLabel = ({ icon, text }: IconLabelProps) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
                sx={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {icon}
            </Box>
            <Typography>{text}</Typography>
        </Box>
    );
};