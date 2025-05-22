import { ReactNode } from 'react';
import { ButtonProps, SxProps, Theme } from '@mui/material';

/**
 * Props for the ActionButton component
 */
export interface ActionButtonProps {
  /**
   * Content to be displayed inside the button
   */
  children: ReactNode;

  /**
   * Button variant
   */
  variant: 'contained' | 'outlined';

  /**
   * Optional icon to display at the end of the button
   */
  endIcon?: ReactNode;

  /**
   * Optional MUI sx props for custom styling
   */
  sx?: SxProps<Theme>;

  /**
   * Optional click handler
   */
  onClick?: () => void;

  /**
   * Whether to use primary or secondary color scheme
   * @default true
   */
  primary?: boolean;
}

/**
 * Props for the GlowActionButton component
 */
export interface GlowActionButtonProps {
  /**
   * Content to be displayed inside the button
   */
  children: ReactNode;

  /**
   * Button variant
   * @default "contained"
   */
  variant?: "contained" | "outlined";

  /**
   * Optional icon to display at the end of the button
   */
  icon?: ReactNode;

  /**
   * Optional MUI sx props for custom styling
   */
  sx?: object;
}

/**
 * Props for the PlayButton component
 */
export interface PlayButtonProps {
  /**
   * Optional click handler
   */
  onClick?: () => void;

  /**
   * Optional MUI sx props for custom styling
   */
  sx?: SxProps<Theme>;
}

/**
 * Props for the SocialAuthButton component
 */
export interface SocialAuthButtonProps extends Omit<ButtonProps, 'startIcon'> {
  /**
   * Icon to display in the button
   */
  icon: ReactNode;

  /**
   * Name of the social provider
   */
  provider: string;

  /**
   * Authentication handler
   */
  onAuth: () => void;
}

/**
 * Props for the ThemeToggleButton component
 */
export interface ThemeToggleButtonProps {
  /**
   * Optional MUI sx props for custom styling
   */
  sx?: SxProps<Theme>;
}
