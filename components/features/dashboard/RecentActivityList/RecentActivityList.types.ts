/**
 * Activity object structure
 */
export interface Activity {
  /**
   * Unique identifier for the activity
   */
  id: number;
  
  /**
   * Description of the action performed
   */
  action: string;
  
  /**
   * Property associated with the activity
   */
  property: string;
  
  /**
   * Time when the activity occurred
   */
  time: string;
}

/**
 * Props for the RecentActivityList component
 */
export interface RecentActivityListProps {
  /**
   * Array of activities to display in the list
   */
  activities: Activity[];
}