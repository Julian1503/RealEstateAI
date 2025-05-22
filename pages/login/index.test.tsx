import React from 'react';
import { render, screen, fireEvent } from '../../test-utils';
import LoginPage from './index';

// Mock the components used in the login page
jest.mock('@components/features/auth/LoginPanel', () => ({
  LoginPanel: ({ onAuth, onSubmit }) => (
    <div data-testid="login-panel">
      <button data-testid="google-signin" onClick={onAuth}>Sign in with Google</button>
      <form data-testid="login-form" onSubmit={onSubmit}>
        <input data-testid="email" type="email" />
        <input data-testid="password" type="password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  ),
}));

jest.mock('@components/layout/auth/AuthSidebar', () => ({
  AuthSidebar: ({ title, subtitle, benefits, callToAction }) => (
    <div data-testid="auth-sidebar">
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <ul>
        {benefits.map((benefit, index) => (
          <li key={index}>{benefit.text}</li>
        ))}
      </ul>
      <div>
        <span>{callToAction.text}</span>
        <button onClick={callToAction.onClick}>{callToAction.buttonText}</button>
      </div>
    </div>
  ),
}));

jest.mock('@components/layout/auth/AuthLayout', () => ({
  AuthLayout: ({ leftContent, rightContent }) => (
    <div data-testid="auth-layout">
      <div data-testid="left-content">{leftContent}</div>
      <div data-testid="right-content">{rightContent}</div>
    </div>
  ),
}));

jest.mock('@components/features/auth/OnboardingModal', () => ({
  OnboardingModal: ({ open, onClose }) => (
    open ? <div data-testid="onboarding-modal">
      <button onClick={onClose}>Close</button>
    </div> : null
  ),
}));

// Mock window.location
const mockLocation = {
  href: '',
};
Object.defineProperty(window, 'location', {
  value: mockLocation,
  writable: true,
});

describe('Login Page', () => {
  beforeEach(() => {
    // Reset mocks
    window.location.href = '';
  });

  test('renders login page with all components', () => {
    render(<LoginPage />);
    
    // Check if all main components are rendered
    expect(screen.getByTestId('auth-layout')).toBeInTheDocument();
    expect(screen.getByTestId('left-content')).toBeInTheDocument();
    expect(screen.getByTestId('right-content')).toBeInTheDocument();
    expect(screen.getByTestId('login-panel')).toBeInTheDocument();
    expect(screen.getByTestId('auth-sidebar')).toBeInTheDocument();
  });

  test('navigates to dashboard on form submission', () => {
    render(<LoginPage />);
    
    const form = screen.getByTestId('login-form');
    fireEvent.submit(form);
    
    expect(window.location.href).toBe('/dashboard');
  });

  test('navigates to dashboard on Google sign-in', () => {
    render(<LoginPage />);
    
    const googleButton = screen.getByTestId('google-signin');
    fireEvent.click(googleButton);
    
    expect(window.location.href).toBe('/dashboard');
  });

  test('navigates to register page on create account click', () => {
    render(<LoginPage />);
    
    // Find the create account button in the sidebar
    const createAccountButton = screen.getByText('Create Account');
    fireEvent.click(createAccountButton);
    
    expect(window.location.href).toBe('/register');
  });

  test('renders with correct sidebar content', () => {
    render(<LoginPage />);
    
    // Check sidebar content
    expect(screen.getByText('Transform Your Real Estate Marketing')).toBeInTheDocument();
    expect(screen.getByText('Join thousands of real estate professionals who are using AI to create compelling content and close more deals.')).toBeInTheDocument();
    
    // Check benefits
    expect(screen.getByText('AI-powered content generation')).toBeInTheDocument();
    expect(screen.getByText('Instant property descriptions')).toBeInTheDocument();
    expect(screen.getByText('Marketing analytics & insights')).toBeInTheDocument();
    
    // Check call to action
    expect(screen.getByText('Don\'t have an account?')).toBeInTheDocument();
    expect(screen.getByText('Create Account')).toBeInTheDocument();
  });

  test('modal is initially closed', () => {
    render(<LoginPage />);
    
    const modal = screen.queryByTestId('onboarding-modal');
    expect(modal).not.toBeInTheDocument();
  });
});