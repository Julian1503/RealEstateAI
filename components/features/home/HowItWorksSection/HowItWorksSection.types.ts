/**
 * Props for the HowItWorksSection component
 * Currently, this component doesn't require any props
 */
export interface HowItWorksSectionProps {
  // No props needed at this time
}

/**
 * Props for the HowItWorksStep component
 */
export interface HowItWorksStepProps {
  /**
   * Step number
   */
  number: number;
  
  /**
   * Step title
   */
  title: string;
  
  /**
   * Step description
   */
  description: string;
}