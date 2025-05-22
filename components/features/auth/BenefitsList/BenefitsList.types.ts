import React from 'react';

/**
 * Props for the BenefitsList component
 */
export interface BenefitsListProps {
  /**
   * Array of items to display in the benefits list
   * Each item has an icon and text
   */
  items: {
    icon: React.ReactNode;
    text: string;
  }[]
}