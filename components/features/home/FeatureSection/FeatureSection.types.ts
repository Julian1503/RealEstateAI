import React from 'react';

/**
 * Feature item structure
 */
export interface FeatureItem {
  /**
   * Unique identifier for the feature item
   */
  id: string;

  /**
   * Icon to display with the feature
   */
  icon: React.ReactNode;

  /**
   * Title of the feature
   */
  title: string;

  /**
   * Description of the feature
   */
  description: string;
}

/**
 * Props for the FeaturesSection component
 * Currently, this component doesn't require any props
 */
export interface FeaturesSectionProps {
  // No props needed at this time
}

/**
 * Props for the FeatureGrid component
 */
export interface FeatureGridProps {
  /**
   * Array of feature items to display
   */
  features: FeatureItem[];
}
