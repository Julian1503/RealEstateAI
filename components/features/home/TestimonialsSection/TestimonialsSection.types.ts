import { TestimonialCardProps } from "@components/core/Cards";

/**
 * Props for the TestimonialsSection component
 * Currently, this component doesn't require any props
 */
export interface TestimonialsSectionProps {
  // No props needed at this time
}

/**
 * Props for the TestimonialsCarousel component
 */
export interface TestimonialsCarouselProps {
  /**
   * Array of testimonials to display in the carousel
   */
  testimonials: TestimonialCardProps[];
}

/**
 * Testimonial data for the testimonials section
 */
export const TESTIMONIALS_DATA: TestimonialCardProps[] = [
  {
    name: "Michael Johnson",
    role: "Senior Realtor",
    company: "ReMax",
    avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
    testimonial: "RealEstateAI has cut my content creation time by 75%. The property descriptions are so compelling that my listings are getting more views and inquiries.",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    role: "Marketing Director",
    company: "Century 21",
    avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
    testimonial: "The social media content generator is a game-changer. We're seeing 3× more engagement on our posts, and the flyer designs look completely professional.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Independent Agent",
    company: "",
    avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg",
    testimonial: "As an independent agent, I couldn't afford a marketing team. Now with RealEstateAI, I compete with the big agencies. The ROI has been incredible.",
    rating: 4.5,
  },
];
