import React from 'react';
import { SectionContainer } from "@components/core/Container/SectionContainer";
import { SectionHeading } from "@components/core/Container/SectionHeading";
import { DemoSectionProps } from './DemoSection.types';
import { MockedVideoPreview } from './MockedVideoPreview';

/**
 * DemoSection component - displays a section with a video demo
 */
export const DemoSection: React.FC<DemoSectionProps> = () => {
  return (
    <SectionContainer
      id="demo"
      bgcolor="background.default"
    >
      <SectionHeading
        title="See AI Realty Assistant in Action"
        subtitle="Watch how our platform transforms basic property information into compelling marketing content"
      />

      <MockedVideoPreview />
    </SectionContainer>
  );
};