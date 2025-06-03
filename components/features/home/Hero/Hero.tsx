import React from 'react';
import { Box, Stack, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

import { Section } from '@components/core/Container/Section';
import { AnimatedText, AnimatedGradientBackground, AnimatedHighlightText as AdvancedText } from '@components/core/Animations';
import { GlowActionButton } from "@components/core/Button";
import { AnimatedRevealImage } from "@components/core/Animations";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { HeroProps } from './Hero.types';
import { HeroImage } from './HeroImage';

/**
 * Hero component - displays the main hero section of the landing page
 */
export const Hero: React.FC<HeroProps> = () => {
    const theme = useTheme();

    return (
        <AnimatedGradientBackground
            colors={[
                theme.palette.primary.dark,
                theme.palette.primary.main,
                theme.palette.secondary.main,
                theme.palette.primary.dark
            ]}
            intensity={0.07}
        >
            <Section
                id="hero-section"
                bgcolor="transparent"
                sx={{
                    pb: 12,
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Stack direction={{ xs: 'column', md: 'row' }} alignItems="center" spacing={4}>
                    <Box sx={{ width: { xs: '100%', md: '50%' }, mb: { xs: 5, md: 0 } }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <AdvancedText
                                text="Transform Your Real Estate Content With AI"
                                highlightedWords={["AI", "Transform", "Real", "Estate"]}
                                variant="h1"
                                sx={{
                                    fontSize: { xs: '2.5rem', md: '3.2rem' },
                                    fontWeight: 'bold',
                                    mb: 3,
                                    lineHeight: 'tight'
                                }}
                            />
                        </motion.div>

                        <AnimatedText
                            variant="h6"
                            sx={{
                                fontSize: { xs: '1.25rem', md: '1.25rem' },
                                mb: 4,
                                color: 'text.secondary',
                                textAlign: { xs: 'center', md: 'left' },
                            }}
                        >
                            Create compelling property descriptions, engaging social media posts, and professional marketing materials in seconds.
                        </AnimatedText>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                        >
                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                                <GlowActionButton icon={<ArrowRightIcon/>} variant="contained">
                                    Generate Content Now
                                </GlowActionButton>
                                <GlowActionButton variant="outlined">
                                    See Demo
                                </GlowActionButton>
                            </Stack>
                        </motion.div>
                    </Box>

                    <Box sx={{ width: { xs: '100%', md: '50%' } }}>
                        <AnimatedRevealImage>
                            <Box
                                sx={{
                                    position: 'relative',
                                    filter: 'drop-shadow(0 10px 16px rgba(0,0,0,0.25))',
                                    width: '100%',
                                }}
                            >
                                <HeroImage
                                    width={800}
                                    height={600}
                                    style={{
                                        borderRadius: theme.shape.borderRadius,
                                        maxWidth: '100%',
                                        height: 'auto',
                                    }}
                                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/73ab0ef946-e16611d866c76ba779b6.png"
                                    alt="sleek modern dashboard interface showing AI real estate content generation tool with property descriptions and marketing material examples, dark theme with teal accents"
                                />
                            </Box>
                        </AnimatedRevealImage>
                    </Box>
                </Stack>
            </Section>
        </AnimatedGradientBackground>
    );
};
