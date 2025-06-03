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
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThanOrEqual(2); // At least 2 buttons for navigation

    // Find the indicators container
    const indicatorsContainer = screen.getAllByRole('generic').find(
      element => element.childElementCount === defaultProps.items.length
    );

    // Make sure we found the indicators container
    expect(indicatorsContainer).toBeDefined();

    if (indicatorsContainer) {
      // Check if it has the right number of indicators
      expect(indicatorsContainer.childElementCount).toBe(5); // 5 items = 5 indicators
    }
  });

  test('navigates to next items when next button is clicked', () => {
    render(<Carousel {...defaultProps} />);

    // Initially, items 0, 1, 2 should be visible
    expect(screen.getByTestId('carousel-item-0')).toBeInTheDocument();
    expect(screen.getByTestId('carousel-item-1')).toBeInTheDocument();
    expect(screen.getByTestId('carousel-item-2')).toBeInTheDocument();

    // Click next button (second button)
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[1]); // Next button is the second button

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
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[1]); // Next button is the second button

    // Now click previous button
    fireEvent.click(buttons[0]); // Previous button is the first button

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
    const buttons = screen.queryAllByRole('button');
    expect(buttons.length).toBe(0);
  });

  test('hides indicators when showIndicators is false', () => {
    render(<Carousel {...defaultProps} showIndicators={false} />);

    // Find the indicators container - should not exist
    const indicatorsContainer = screen.queryAllByRole('generic').find(
      element => element.childElementCount === defaultProps.items.length
    );

    // Indicators container should not be found
    expect(indicatorsContainer).toBeUndefined();
  });

  test('navigates to specific item when indicator is clicked', () => {
    render(<Carousel {...defaultProps} />);

    // Find the indicators container
    const indicatorsContainer = screen.getAllByRole('generic').find(
      element => element.childElementCount === defaultProps.items.length
    );

    // Make sure we found the indicators container
    expect(indicatorsContainer).toBeDefined();

    if (indicatorsContainer) {
      // Get the third indicator (index 2)
      const indicators = Array.from(indicatorsContainer.children);
      expect(indicators.length).toBeGreaterThan(2);

      // Click on the third indicator
      fireEvent.click(indicators[2]);

      // Items 2, 3, 4 should be visible
      expect(screen.getByTestId('carousel-item-2')).toBeInTheDocument();
      expect(screen.getByTestId('carousel-item-3')).toBeInTheDocument();
      expect(screen.getByTestId('carousel-item-4')).toBeInTheDocument();

      // Items 0, 1 should not be visible
      expect(screen.queryByTestId('carousel-item-0')).not.toBeInTheDocument();
      expect(screen.queryByTestId('carousel-item-1')).not.toBeInTheDocument();
    }
  });

  test('wraps around to the beginning when reaching the end', () => {
    render(<Carousel {...defaultProps} />);

    // Click next button multiple times to reach the end
    const buttons = screen.getAllByRole('button');
    const nextButton = buttons[1]; // Next button is the second button

    fireEvent.click(nextButton); // Items 1, 2, 3
    fireEvent.click(nextButton); // Items 2, 3, 4
    fireEvent.click(nextButton); // Should wrap to Items 0, 1, 2

    // Should be back to items 0, 1, 2
    expect(screen.getByTestId('carousel-item-0')).toBeInTheDocument();
    expect(screen.getByTestId('carousel-item-1')).toBeInTheDocument();
    expect(screen.getByTestId('carousel-item-2')).toBeInTheDocument();
  });

  test('renders with different number of visible items', () => {
    // Mock useMediaQuery to simulate mobile view (xs)
    const useMediaQuery = require('@mui/material').useMediaQuery;
    useMediaQuery.mockImplementation(() => true); // All breakpoints return true to simulate xs

    render(<Carousel {...defaultProps} />);

    // In xs view, only 1 item should be visible
    expect(screen.getByTestId('carousel-item-0')).toBeInTheDocument();
    expect(screen.queryByTestId('carousel-item-1')).not.toBeInTheDocument();
  });

  test('renders with center mode', () => {
    // Reset the useMediaQuery mock to ensure we get the default behavior
    const useMediaQuery = require('@mui/material').useMediaQuery;
    useMediaQuery.mockImplementation(() => false);

    render(<Carousel {...defaultProps} centerMode={true} />);

    // Check if at least one item is rendered
    expect(screen.getByTestId('carousel-item-0')).toBeInTheDocument();

    // We can't easily test the scale transform, but we can verify it renders
  });

  test('renders with different control positions', () => {
    render(<Carousel {...defaultProps} controlPosition="middle" />);

    // Check if navigation buttons are rendered
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThanOrEqual(2); // At least 2 buttons for navigation

    // We can't easily test the exact position, but we can verify it renders
  });
});
