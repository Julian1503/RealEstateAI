import React from "react";
import { SectionContainer } from "@components/core/Container/SectionContainer";
import { SectionHeading } from "@components/core/Container/SectionHeading";
import { TestimonialsSectionProps, TESTIMONIALS_DATA } from "./TestimonialsSection.types";
import { TestimonialsCarousel } from "./TestimonialsCarousel";

/**
 * TestimonialsSection component - displays a section with testimonials from users
 */
export const TestimonialsSection: React.FC<TestimonialsSectionProps> = () => (
  <SectionContainer
    id="testimonials-section"
    bgcolor="background.default"
  >
    <SectionHeading
      title="What Real Estate Pros Are Saying"
      subtitle="Hear from real-estate professionals who have transformed their marketing with AI Realty Assistant"
    />

    <TestimonialsCarousel testimonials={TESTIMONIALS_DATA} />
  </SectionContainer>
);