import React from 'react';
import { Section } from "@components/core/Container/Section";
import { FAQSectionProps, FAQItem } from './FAQSection.types';
import { FAQAccordionList } from './FAQAccordionList';

/**
 * FAQSection component - displays a section with frequently asked questions
 */
export const FAQSection: React.FC<FAQSectionProps> = () => {
  // FAQ data
  const faqItems: FAQItem[] = [
    {
      id: "faq-1",
      question: "How does the AI content generation work?",
      answer: "Our AI uses advanced natural language processing to analyze your property information and generate compelling, unique content tailored to your specific needs. It learns from millions of real estate listings to create content that resonates with potential buyers."
    },
    {
      id: "faq-2",
      question: "Can I customize the generated content?",
      answer: "Absolutely! After the AI generates content, you have full editing capabilities to tweak, adjust, or completely rewrite any section. You can also save your preferred style and tone for future generations."
    },
    {
      id: "faq-3",
      question: "Is there a limit to how much content I can generate?",
      answer: "Free accounts include 5 generations per month. Pro accounts have unlimited content generation for all content types. Enterprise plans include additional team features and API access."
    },
    {
      id: "faq-4",
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time from your account settings. There are no long-term contracts or cancellation fees. If you cancel, you'll have access until the end of your current billing period."
    },
    {
      id: "faq-5",
      question: "Do you offer support if I need help?",
      answer: "We offer 24/7 email support for all paid plans, with priority support for Pro users. Our knowledge base includes extensive tutorials, and we offer regular webinars to help you get the most from the platform."
    }
  ];

  return (
      <Section
        id="faq-section"
        title="Frequently Asked Questions"
        subtitle="Got questions? We've got answers."
        py={8}
        px={2}>
      <FAQAccordionList faqItems={faqItems} />
      </Section>
  );
};