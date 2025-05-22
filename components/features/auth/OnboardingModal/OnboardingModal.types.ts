/**
 * Props for the OnboardingModal component
 */
export interface OnboardingModalProps {
  /**
   * Whether the modal is open
   */
  open: boolean;
  
  /**
   * Function to call when closing the modal
   */
  onClose: () => void;
  
  /**
   * Optional function to call when starting the tour
   */
  onStartTour?: () => void;
}