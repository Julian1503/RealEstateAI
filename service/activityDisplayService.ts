/**
 * Service for handling activity display logic
 * Contains functions for determining icons and colors based on activity types
 */

/**
 * Activity icon types
 */
export enum ActivityIconType {
  DESCRIPTION = 'description',
  IMAGE = 'image',
  SHARE = 'share',
  DEFAULT = 'default'
}

/**
 * Determine which icon type to display based on the activity action
 * @param action - The activity action string
 * @returns The appropriate icon type
 */
export const getActivityIconType = (action: string): ActivityIconType => {
  if (action.includes('description')) return ActivityIconType.DESCRIPTION;
  if (action.includes('image')) return ActivityIconType.IMAGE;
  if (action.includes('Shared')) return ActivityIconType.SHARE;
  return ActivityIconType.DEFAULT;
};

/**
 * Determine the background color of the avatar based on the activity action
 * @param action - The activity action string
 * @returns The appropriate color string
 */
export const getAvatarColor = (action: string): string => {
  if (action.includes('description')) return 'primary.light';
  if (action.includes('image')) return 'secondary.light';
  if (action.includes('Shared')) return 'success.light';
  return 'primary.light'; // Default color
};