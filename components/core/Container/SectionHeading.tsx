import { SectionHeadingProps } from '@core/Container/Container.types';
import { Box, Typography } from "@mui/material";

export const SectionHeading = ({
                                   title,
                                   subtitle,
                                   mb = 8,
                                   titleVariant = 'h3',
                                   subtitleVariant = 'h6',
                                   subtitleColor = 'text.secondary',
                                   titleFontWeight = 'bold',
                                   titleColor = 'text.primary',
                                   fontSize = { xs: '1.875rem', md: '2.25rem' },
                                   textAlign = 'center',
                                   sx = {}
                               }: SectionHeadingProps) => {
    return (
        <Box sx={{ textAlign, mb, ...sx }}>
            {title && (
                <Typography
                    variant={titleVariant}
                    sx={{
                        fontWeight: titleFontWeight,
                        color: titleColor,
                        mb: subtitle ? 2 : 0,
                        fontSize: fontSize
                    }}
                >
                    {title}
                </Typography>
            )}
            {subtitle && (
                <Typography
                    variant={subtitleVariant}
                    sx={{
                        color: subtitleColor,
                        maxWidth: textAlign === 'center' ? '48rem' : 'none',
                        mx: textAlign === 'center' ? 'auto' : 0
                    }}
                >
                    {subtitle}
                </Typography>
            )}
        </Box>
    );
};