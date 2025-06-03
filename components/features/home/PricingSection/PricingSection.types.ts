/**
 * Props for the PricingSection component
 */
export interface PricingSectionProps {
  /**
   * Array of pricing plans to display
   */
  plans: PlanCardProps[];
}

/**
 * Props for the PlanCard component
 */
export interface PlanCardProps {
  /**
   * Unique identifier for the plan
   */
  id: string;
  
  /**
   * Name of the plan
   */
  name: string;
  
  /**
   * Price of the plan
   */
  price: string;
  
  /**
   * Billing period (e.g., "/month")
   */
  period?: string;
  
  /**
   * Array of features included in the plan
   */
  features: string[];
  
  /**
   * Label for the action button
   */
  actionLabel: string;
  
  /**
   * Whether this plan should be highlighted as popular
   */
  popular?: boolean;
  
  /**
   * Color to use for highlighting
   */
  highlightColor?: string;
  
  /**
   * Description of the plan
   */
  description?: string;
  
  /**
   * Delay before animations starts (in milliseconds)
   */
  animationDelay?: number;
}

/**
 * Props for the PricingFooter component
 */
export interface PricingFooterProps {
  /**
   * Text to display in the footer
   */
  text?: string;
  
  /**
   * URL to link to
   */
  href?: string;
}