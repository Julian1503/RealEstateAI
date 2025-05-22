import React, { ReactNode } from 'react';

/**
 * Props for the LoginForm component
 */
export interface LoginFormProps {
  /**
   * Optional callback for when the form is submitted
   * If not provided, the default behavior from useLoginForm will be used
   */
  onSubmit?: (event: React.FormEvent) => void;
  
  /**
   * Optional flag to show a "Remember me" checkbox
   */
  showRememberMe?: boolean;
  
  /**
   * Optional custom error message to display
   * This overrides any error from the form hook
   */
  customError?: string;
  
  /**
   * Optional additional content to render below the form
   */
  children?: ReactNode;
}

/**
 * These types are also exported from the useLoginForm hook,
 * but we duplicate them here to maintain separation of concerns
 */
export interface LoginCredentials {
  email: string;
  password: string;
}