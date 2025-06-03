import React from 'react';
import { Box, Stack } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Section } from "@components/core/Container/Section";
import { HowItWorksSectionProps } from './HowItWorksSection.types';
import { HowItWorksStep } from './HowItWorksStep';

/**
 * HowItWorksSection component - displays a section explaining how the service works
 */
export const HowItWorksSection: React.FC<HowItWorksSectionProps> = () => (
  <Section
    id="how-it-works"
    title="How It Works"
    subtitle="Generate professional real estate content in just three simple steps."
  >
    <Stack direction={{ xs: 'column', md: 'row' }} alignItems="center" justifyContent="space-between" spacing={4}>
      <HowItWorksStep
        number={1}
        title="Input Property Details"
        description="Enter basic information about the property including features, location, and target audience."
      />
      <Box sx={{ display: { xs: 'none', md: 'block' }, color: 'primary.main' }}>
        <ArrowRightIcon fontSize="large" />
      </Box>
      <HowItWorksStep
        number={2}
        title="Select Content Type"
        description="Choose what type of content you need description, social post, email, or marketing material."
      />
      <Box sx={{ display: { xs: 'none', md: 'block' }, color: 'primary.main' }}>
        <ArrowRightIcon fontSize="large" />
      </Box>
      <HowItWorksStep
        number={3}
        title="Generate & Customize"
        description="Our AI generates multiple options for you to choose from, edit, and download or publish directly."
      />
    </Stack>
  </Section>
);