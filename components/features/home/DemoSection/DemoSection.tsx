import React from 'react';
import { Section } from "@components/core/Container/Section";
import { DemoSectionProps } from './DemoSection.types';
import { MockedVideoPreview } from './MockedVideoPreview';

/**
 * DemoSection component - displays a section with a video demo
 */
export const DemoSection: React.FC<DemoSectionProps> = () => {
  return (
      <Section
          id="faq-section"
          title="See RealEstateAI in Action"
          subtitle="Watch how our platform transforms basic property information into compelling marketing content"
          >
        <MockedVideoPreview />
      </Section>
  );
};