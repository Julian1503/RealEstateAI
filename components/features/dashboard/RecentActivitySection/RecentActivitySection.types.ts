import { Activity } from '../RecentActivityList/RecentActivityList.types';

/**
 * Props for the RecentActivitySection component
 */
export interface RecentActivitySectionProps {
  /**
   * Array of activities to display in the section
   */
  activities: Activity[];
}