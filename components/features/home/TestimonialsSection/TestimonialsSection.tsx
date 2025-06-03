import React from "react";
import { Section } from "@components/core/Container/Section";
import { TestimonialsSectionProps, TESTIMONIALS_DATA } from "./TestimonialsSection.types";
import { TestimonialsCarousel } from "./TestimonialsCarousel";

/**
 * TestimonialsSection component - displays a section with testimonials from users
 */
export const TestimonialsSection: React.FC<TestimonialsSectionProps> = () => (
  <Section
    id="testimonials-section"
    subtitle="Hear from real-estate professionals who have transformed their marketing with RealEstateAI"
    title="What Real Estate Pros Are Saying"
  >
    <TestimonialsCarousel testimonials={TESTIMONIALS_DATA} />
  </Section>
);