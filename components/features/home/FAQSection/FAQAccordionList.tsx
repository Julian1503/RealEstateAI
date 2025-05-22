import { Stack } from "@mui/material";
import FaqAccordion from "@components/core/Accordions/FaqAccordion";
import React from "react";
import { FAQAccordionListProps } from "./FAQSection.types";

/**
 * FAQAccordionList component - displays a list of FAQ items in accordion format
 */
export const FAQAccordionList: React.FC<FAQAccordionListProps> = ({ faqItems }) => {
  return (
    <Stack spacing={3}>
      {faqItems.map(({ id, question, answer }, index) => (
        <FaqAccordion
          key={id}
          id={id}
          index={index}
          question={question}
          answer={answer}
        />
      ))}
    </Stack>
  );
};