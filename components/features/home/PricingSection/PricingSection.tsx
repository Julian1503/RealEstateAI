import React from 'react';
import { Box } from '@mui/material';
import {RevealOnScroll} from "@components/core/Animations/RevealOnScroll";
import { Section } from "@components/core/Container/Section";
import { PricingSectionProps } from './PricingSection.types';
import { PlanCard } from './PlanCard';
import { PricingFooter } from './PricingFooter';

/**
 * PricingSection component - displays a section with pricing plans
 */
export const PricingSection: React.FC<PricingSectionProps> = ({ plans }) => (
  <Section
    id="pricing-section"
    title="Plans for Every Real Estate Professional"
    subtitle="Whether you're an independent agent or part of a large brokerage, we have flexible plans to meet your needs"
  >
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'center',
        gap: 4,
        mb: 6
      }}
    >
      {plans.map((plan, index) => (
        <RevealOnScroll key={plan.id} delay={index * 100}>
          <PlanCard {...plan} />
        </RevealOnScroll>
      ))}
    </Box>
    <PricingFooter />
  </Section>
);