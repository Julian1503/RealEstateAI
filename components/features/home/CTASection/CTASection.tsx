import React from 'react';
import { SectionContainer } from '@/components/core/Container/SectionContainer';
import { SectionHeading } from "@components/core/Container/SectionHeading";
import { CTASectionProps } from './CTASection.types';
import { CTAButtons } from './CTAButtons';

/**
 * CTASection component - displays a call-to-action section with heading and buttons
 */
export const CTASection: React.FC<CTASectionProps> = () => {
  return (
    <SectionContainer
      id="cta-section"
      bgcolor="primary.main"
    >
      <SectionHeading 
        title="Ready to Transform Your Real Estate Marketing?"
        subtitle="Join thousands of real estate professionals who are saving time and closing more deals with AI-powered content."
      />
      <CTAButtons />
    </SectionContainer>
  );
};