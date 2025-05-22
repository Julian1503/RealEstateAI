/**
 * Props for the SidebarCTA component
 */
export interface SidebarCTAProps {
  /**
   * Text to display above the button
   */
  text: string;
  
  /**
   * Text to display on the button
   */
  buttonText: string;
  
  /**
   * Function to call when the button is clicked
   */
  onClick: () => void;
}