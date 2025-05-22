import React from 'react';

/**
 * Props for the StatsCard component
 */
export interface StatsCardProps {
  /**
   * Title of the stats card
   */
  title: string;
  
  /**
   * Value to display in the stats card
   */
  value: string | number;
  
  /**
   * Icon to display in the stats card
   */
  icon: React.ReactNode;
  
  /**
   * Optional change value (e.g., "+2", "-1")
   */
  change?: string;
  
  /**
   * Optional label for the change value (e.g., "from last month")
   */
  changeLabel?: string;
}