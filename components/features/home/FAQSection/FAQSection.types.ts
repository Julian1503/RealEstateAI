/**
 * FAQ item structure
 */
export interface FAQItem {
  /**
   * Unique identifier for the FAQ item
   */
  id: string;
  
  /**
   * Question text
   */
  question: string;
  
  /**
   * Answer text
   */
  answer: string;
}

/**
 * Props for the FAQSection component
 * Currently, this component doesn't require any props
 */
export interface FAQSectionProps {
  // No props needed at this time
}

/**
 * Props for the FAQAccordionList component
 */
export interface FAQAccordionListProps {
  /**
   * Array of FAQ items to display
   */
  faqItems: FAQItem[];
}