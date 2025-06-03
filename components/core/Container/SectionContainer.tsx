import React from 'react';
import { Box, Container } from '@mui/material';
import { SectionContainerProps } from "@core/Container/Container.types";

export const SectionContainer = ({
                                     id,
                                     bgcolor = 'background.default',
                                     children,
                                     py = 8,
                                     px = 2,
                                     sx = {},
                                     maxWidth,
                                     useContainer = true
                                 }: SectionContainerProps) => {
    const content = useContainer ? (
        <Container maxWidth={maxWidth as any}>
            {children}
        </Container>
    ) : children;

    return (
        <Box
            id={id}
            sx={{
                bgcolor,
                py,
                px,
                color: 'text.primary',
                ...(!useContainer && maxWidth && { maxWidth }),
                ...sx
            }}
        >
            {content}
        </Box>
    );
};