import React from 'react';

/**
 * Props for the LoginPanel component
 */
export interface LoginPanelProps {
  /**
   * Callback function for authentication
   */
  onAuth: () => void;
  
  /**
   * Callback function for form submission
   */
  onSubmit: (event: React.FormEvent) => void;
}