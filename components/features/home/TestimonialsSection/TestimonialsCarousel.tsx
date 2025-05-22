import React from "react";
import { Box } from "@mui/material";
import { TestimonialCard } from "@components/core/Cards";
import Carousel from "@components/core/Animations/Carousel";
import { TestimonialsCarouselProps } from "./TestimonialsSection.types";

/**
 * TestimonialsCarousel component - displays a carousel of testimonial cards
 */
export const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({ testimonials }) => {
  const testimonialItems = testimonials.map((testimonial, idx) => (
    <TestimonialCard key={`${testimonial.name}-${idx}`} {...testimonial} />
  ));

  return (
    <Box sx={{ width: "100%" }}>
      <Carousel
        items={testimonialItems}
        autoRotateInterval={5000}
        showControls={true}
        showIndicators={true}
        visibleItemsConfig={{ xs: 1, sm: 1, md: 3 }}
        gap={24}
        controlPosition="bottom"
      />
    </Box>
  );
};
