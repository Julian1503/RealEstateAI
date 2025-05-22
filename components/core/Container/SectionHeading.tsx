import {SectionHeadingProps} from '@core/Container/Container.types';
import {Box, Typography} from "@mui/material";


export const SectionHeading = ({
                                   title,
                                   subtitle,
                                   mb = 8,
                                   subtitleColor = 'text.secondary',
                                   sx = {}
                               }: SectionHeadingProps) => {
    return (
        <Box sx={{ textAlign: 'center', mb, ...sx }}>
            <Typography
                variant="h3"
                component="h2"
                sx={{
                    fontWeight: 'bold',
                    color: 'text.primary',
                    mb: 2,
                    fontSize: {
                        xs: '1.875rem',
                        md: '2.25rem'
                    }
                }}
            >
                {title}
            </Typography>
            {subtitle && (
                <Typography
                    variant="h6"
                    sx={{
                        color: subtitleColor,
                        maxWidth: '48rem',
                        mx: 'auto'
                    }}
                >
                    {subtitle}
                </Typography>
            )}
        </Box>
    );
};
