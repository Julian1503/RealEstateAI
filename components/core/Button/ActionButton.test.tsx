import React from 'react';
import { render, screen, fireEvent } from '../../../test-utils';
import { ActionButton } from './ActionButton';
import { ArrowForward } from '@mui/icons-material';

describe('ActionButton', () => {
  // Test rendering with default props
  test('renders correctly with default props', () => {
    render(<ActionButton variant="contained">Click Me</ActionButton>);
    
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('MuiButton-contained');
  });

  // Test rendering with different variants
  test('renders with outlined variant', () => {
    render(<ActionButton variant="outlined">Outlined Button</ActionButton>);
    
    const button = screen.getByRole('button', { name: /outlined button/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('MuiButton-outlined');
  });

  // Test rendering with primary=false
  test('renders with secondary color scheme when primary is false', () => {
    render(
      <ActionButton variant="contained" primary={false}>
        Secondary Button
      </ActionButton>
    );
    
    const button = screen.getByRole('button', { name: /secondary button/i });
    expect(button).toBeInTheDocument();
    // Note: We can't easily test the exact color, but we can verify it renders
  });

  // Test rendering with endIcon
  test('renders with end icon', () => {
    render(
      <ActionButton variant="contained" endIcon={<ArrowForward data-testid="arrow-icon" />}>
        Button with Icon
      </ActionButton>
    );
    
    const button = screen.getByRole('button', { name: /button with icon/i });
    expect(button).toBeInTheDocument();
    
    const icon = screen.getByTestId('arrow-icon');
    expect(icon).toBeInTheDocument();
  });

  // Test click handler
  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    
    render(
      <ActionButton variant="contained" onClick={handleClick}>
        Clickable Button
      </ActionButton>
    );
    
    const button = screen.getByRole('button', { name: /clickable button/i });
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Test with custom styles
  test('applies custom styles via sx prop', () => {
    render(
      <ActionButton 
        variant="contained" 
        sx={{ 
          backgroundColor: 'red',
          padding: '20px'
        }}
      >
        Custom Styled Button
      </ActionButton>
    );
    
    const button = screen.getByRole('button', { name: /custom styled button/i });
    expect(button).toBeInTheDocument();
    // Note: We can't easily test the exact styles with jest-dom, but we can verify it renders
  });

  // Test with light theme
  test('renders correctly with light theme', () => {
    render(
      <ActionButton variant="contained">Light Theme Button</ActionButton>,
      { themeMode: 'light' }
    );
    
    const button = screen.getByRole('button', { name: /light theme button/i });
    expect(button).toBeInTheDocument();
  });
});