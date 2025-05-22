import React from 'react';
import { render, screen, fireEvent, act } from '../../../../test-utils';
import { PlanCard } from './PlanCard';
import { PlanCardProps } from './PricingSection.types';

// Mock the useCardAnimation hook
jest.mock('@hooks/useCardAnimation', () => ({
  useCardAnimation: (delay: number) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const [isVisible, setIsVisible] = React.useState(true); // Start visible for testing
    const cardRef = React.useRef(null);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return {
      cardRef,
      isHovered,
      isVisible,
      handleMouseEnter,
      handleMouseLeave
    };
  }
}));

describe('PlanCard', () => {
  const defaultProps: PlanCardProps = {
    id: 'basic-plan',
    name: 'Basic Plan',
    price: '$9.99',
    period: '/month',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    actionLabel: 'Get Started',
    description: 'Perfect for beginners',
  };

  test('renders with default props', () => {
    render(<PlanCard {...defaultProps} />);
    
    // Check basic content
    expect(screen.getByText('Basic Plan')).toBeInTheDocument();
    expect(screen.getByText('$9.99')).toBeInTheDocument();
    expect(screen.getByText('/month')).toBeInTheDocument();
    expect(screen.getByText('Perfect for beginners')).toBeInTheDocument();
    
    // Check features
    defaultProps.features.forEach(feature => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
    
    // Check action button
    expect(screen.getByRole('button', { name: 'Get Started' })).toBeInTheDocument();
    
    // Popular badge should not be present
    expect(screen.queryByText('MOST POPULAR')).not.toBeInTheDocument();
  });

  test('renders as popular plan', () => {
    render(<PlanCard {...defaultProps} popular={true} />);
    
    // Popular badge should be present
    expect(screen.getByText('MOST POPULAR')).toBeInTheDocument();
    
    // Check if the button is contained variant for popular plans
    const button = screen.getByRole('button', { name: 'Get Started' });
    expect(button).toHaveClass('MuiButton-contained');
  });

  test('renders with custom highlight color', () => {
    render(<PlanCard {...defaultProps} highlightColor="#ff0000" />);
    
    // We can't easily test the exact color, but we can verify it renders
    expect(screen.getByText('Basic Plan')).toBeInTheDocument();
  });

  test('renders with custom description', () => {
    const customDescription = 'Custom plan description';
    render(<PlanCard {...defaultProps} description={customDescription} />);
    
    expect(screen.getByText(customDescription)).toBeInTheDocument();
  });

  test('handles mouse enter and leave events', () => {
    render(<PlanCard {...defaultProps} />);
    
    const paper = screen.getByText('Basic Plan').closest('div[role="presentation"]');
    expect(paper).toBeInTheDocument();
    
    // Simulate hover
    if (paper) {
      fireEvent.mouseEnter(paper);
      // We can't easily test the hover styles, but we can verify it doesn't crash
      
      fireEvent.mouseLeave(paper);
      // We can't easily test the hover styles, but we can verify it doesn't crash
    }
  });

  test('renders with different number of features', () => {
    const manyFeatures = ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'];
    render(<PlanCard {...defaultProps} features={manyFeatures} />);
    
    // Check all features are rendered
    manyFeatures.forEach(feature => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
  });

  test('renders with custom action label', () => {
    const customLabel = 'Custom Action';
    render(<PlanCard {...defaultProps} actionLabel={customLabel} />);
    
    expect(screen.getByRole('button', { name: customLabel })).toBeInTheDocument();
  });

  test('renders with default period when not provided', () => {
    const propsWithoutPeriod = { ...defaultProps };
    delete propsWithoutPeriod.period;
    
    render(<PlanCard {...propsWithoutPeriod} />);
    
    expect(screen.getByText('/month')).toBeInTheDocument();
  });

  test('renders with light theme', () => {
    render(<PlanCard {...defaultProps} />, { themeMode: 'light' });
    
    // Basic content should still be visible
    expect(screen.getByText('Basic Plan')).toBeInTheDocument();
    expect(screen.getByText('$9.99')).toBeInTheDocument();
  });
});