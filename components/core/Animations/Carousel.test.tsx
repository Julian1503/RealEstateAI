import React from 'react';
import { render, screen, fireEvent, act } from '../../../test-utils';
import Carousel from './Carousel';
import { CarouselProps } from '@components/core';

// Mock useMediaQuery to control responsive behavior
jest.mock('@mui/material', () => {
  const actual = jest.requireActual('@mui/material');
  return {
    ...actual,
    useMediaQuery: jest.fn().mockImplementation(() => false)
  };
});

// Mock timer for testing auto-rotation
jest.useFakeTimers();

describe('Carousel', () => {
  // Create mock items for testing
  const createMockItems = (count: number) => 
    Array.from({ length: count }).map((_, i) => (
      <div key={i} data-testid={`carousel-item-${i}`}>Item {i + 1}</div>
    ));

  const mockItems = createMockItems(5);

  const defaultProps: CarouselProps = {
    items: mockItems,
    autoRotateInterval: 5000,
    showControls: true,
    showIndicators: true,
    visibleItemsConfig: { xs: 1, sm: 2, md: 3, lg: 3 },
    gap: 16,
    centerMode: false,
    controlPosition: 'top'
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders with default props', () => {
    render(<Carousel {...defaultProps} />);
    
    // Check if initial items are rendered
    expect(screen.getByTestId('carousel-item-0')).toBeInTheDocument();
    expect(screen.getByTestId('carousel-item-1')).toBeInTheDocument();
    expect(screen.getByTestId('carousel-item-2')).toBeInTheDocument();
    
    // Check if navigation buttons are rendered
    expect(screen.getByRole('button', { name: /previous/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument();
    
    // Check if indicators are rendered
    const indicators = screen.getAllByRole('generic').filter(
      element => element.style.borderRadius === '50%'
    );
    expect(indicators.length).toBe(5); // 5 items = 5 indicators
  });

  test('navigates to next items when next button is clicked', () => {
    render(<Carousel {...defaultProps} />);
    
    // Initially, items 0, 1, 2 should be visible
    expect(screen.getByTestId('carousel-item-0')).toBeInTheDocument();
    expect(screen.getByTestId('carousel-item-1')).toBeInTheDocument();
    expect(screen.getByTestId('carousel-item-2')).toBeInTheDocument();
    
    // Click next button
    fireEvent.click(screen.getByRole('button', { name: /next/i }));
    
    // Now, items 1, 2, 3 should be visible
    expect(screen.getByTestId('carousel-item-1')).toBeInTheDocument();
    expect(screen.getByTestId('carousel-item-2')).toBeInTheDocument();
    expect(screen.getByTestId('carousel-item-3')).toBeInTheDocument();
    
    // Item 0 should no longer be visible
    expect(screen.queryByTestId('carousel-item-0')).not.toBeInTheDocument();
  });

  test('navigates to previous items when previous button is clicked', () => {
    render(<Carousel {...defaultProps} />);
    
    // Move to items 1, 2, 3 first
    fireEvent.click(screen.getByRole('button', { name: /next/i }));
    
    // Now click previous button
    fireEvent.click(screen.getByRole('button', { name: /previous/i }));
    
    // Should be back to items 0, 1, 2
    expect(screen.getByTestId('carousel-item-0')).toBeInTheDocument();
    expect(screen.getByTestId('carousel-item-1')).toBeInTheDocument();
    expect(screen.getByTestId('carousel-item-2')).toBeInTheDocument();
  });

  test('auto-rotates to next items after interval', () => {
    render(<Carousel {...defaultProps} />);
    
    // Initially, items 0, 1, 2 should be visible
    expect(screen.getByTestId('carousel-item-0')).toBeInTheDocument();
    
    // Advance timers by auto-rotate interval
    act(() => {
      jest.advanceTimersByTime(5000);
    });
    
    // Now, items 1, 2, 3 should be visible
    expect(screen.getByTestId('carousel-item-1')).toBeInTheDocument();
    expect(screen.getByTestId('carousel-item-2')).toBeInTheDocument();
    expect(screen.getByTestId('carousel-item-3')).toBeInTheDocument();
    
    // Item 0 should no longer be visible
    expect(screen.queryByTestId('carousel-item-0')).not.toBeInTheDocument();
  });

  test('does not auto-rotate when autoRotateInterval is 0', () => {
    render(<Carousel {...defaultProps} autoRotateInterval={0} />);
    
    // Initially, items 0, 1, 2 should be visible
    expect(screen.getByTestId('carousel-item-0')).toBeInTheDocument();
    
    // Advance timers
    act(() => {
      jest.advanceTimersByTime(10000);
    });
    
    // Items 0, 1, 2 should still be visible
    expect(screen.getByTestId('carousel-item-0')).toBeInTheDocument();
    expect(screen.getByTestId('carousel-item-1')).toBeInTheDocument();
    expect(screen.getByTestId('carousel-item-2')).toBeInTheDocument();
  });

  test('hides controls when showControls is false', () => {
    render(<Carousel {...defaultProps} showControls={false} />);
    
    // Navigation buttons should not be rendered
    expect(screen.queryByRole('button', { name: /previous/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /next/i })).not.toBeInTheDocument();
  });

  test('hides indicators when showIndicators is false', () => {
    render(<Carousel {...defaultProps} showIndicators={false} />);
    
    // Indicators should not be rendered
    const indicators = screen.queryAllByRole('generic').filter(
      element => element.style.borderRadius === '50%'
    );
    expect(indicators.length).toBe(0);
  });

  test('navigates to specific item when indicator is clicked', () => {
    render(<Carousel {...defaultProps} />);
    
    // Get all indicators
    const indicators = screen.getAllByRole('generic').filter(
      element => element.style.borderRadius === '50%'
    );
    
    // Click on the third indicator (index 2)
    fireEvent.click(indicators[2]);
    
    // Items 2, 3, 4 should be visible
    expect(screen.getByTestId('carousel-item-2')).toBeInTheDocument();
    expect(screen.getByTestId('carousel-item-3')).toBeInTheDocument();
    expect(screen.getByTestId('carousel-item-4')).toBeInTheDocument();
    
    // Items 0, 1 should not be visible
    expect(screen.queryByTestId('carousel-item-0')).not.toBeInTheDocument();
    expect(screen.queryByTestId('carousel-item-1')).not.toBeInTheDocument();
  });

  test('wraps around to the beginning when reaching the end', () => {
    render(<Carousel {...defaultProps} />);
    
    // Click next button multiple times to reach the end
    fireEvent.click(screen.getByRole('button', { name: /next/i })); // Items 1, 2, 3
    fireEvent.click(screen.getByRole('button', { name: /next/i })); // Items 2, 3, 4
    fireEvent.click(screen.getByRole('button', { name: /next/i })); // Should wrap to Items 0, 1, 2
    
    // Should be back to items 0, 1, 2
    expect(screen.getByTestId('carousel-item-0')).toBeInTheDocument();
    expect(screen.getByTestId('carousel-item-1')).toBeInTheDocument();
    expect(screen.getByTestId('carousel-item-2')).toBeInTheDocument();
  });

  test('renders with different number of visible items', () => {
    // Mock useMediaQuery to simulate mobile view (xs)
    const useMediaQuery = require('@mui/material').useMediaQuery;
    useMediaQuery.mockImplementation((query) => true); // All breakpoints return true to simulate xs
    
    render(<Carousel {...defaultProps} />);
    
    // In xs view, only 1 item should be visible
    expect(screen.getByTestId('carousel-item-0')).toBeInTheDocument();
    expect(screen.queryByTestId('carousel-item-1')).not.toBeInTheDocument();
  });

  test('renders with center mode', () => {
    render(<Carousel {...defaultProps} centerMode={true} />);
    
    // Check if items are rendered
    expect(screen.getByTestId('carousel-item-0')).toBeInTheDocument();
    expect(screen.getByTestId('carousel-item-1')).toBeInTheDocument();
    expect(screen.getByTestId('carousel-item-2')).toBeInTheDocument();
    
    // We can't easily test the scale transform, but we can verify it renders
  });

  test('renders with different control positions', () => {
    render(<Carousel {...defaultProps} controlPosition="middle" />);
    
    // Check if navigation buttons are rendered
    expect(screen.getByRole('button', { name: /previous/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument();
    
    // We can't easily test the exact position, but we can verify it renders
  });
});