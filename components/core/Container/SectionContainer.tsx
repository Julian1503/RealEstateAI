import React from 'react';
import {Box, Container} from '@mui/material';
import {SectionContainerProps} from "@core/Container/Container.types";


export const SectionContainer = ({
                                     id,
                                     bgcolor,
                                     children,
                                     py = 10,
                                     px = 3,
                                     sx = {},
                                     maxWidth
                                 }: SectionContainerProps) => {
    return (
        <Box
            id={id}
            sx={{
                bgcolor,
                py,
                px,
                color: 'text.primary',
                maxWidth,
                ...sx
            }}
        >
            <Container>
                {children}
            </Container>
        </Box>
    );
};
