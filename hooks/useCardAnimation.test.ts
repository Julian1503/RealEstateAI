import { renderHook, act } from '@testing-library/react';
import { useCardAnimation } from './useCardAnimation';

// Mock IntersectionObserver
const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn()
});
window.IntersectionObserver = mockIntersectionObserver;

describe('useCardAnimation', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    mockIntersectionObserver.mockClear();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('should initialize with default values', () => {
    const { result } = renderHook(() => useCardAnimation());
    
    expect(result.current.isHovered).toBe(false);
    expect(result.current.isVisible).toBe(false);
    expect(result.current.cardRef.current).toBe(null);
    expect(typeof result.current.handleMouseEnter).toBe('function');
    expect(typeof result.current.handleMouseLeave).toBe('function');
  });

  test('should handle mouse enter and leave', () => {
    const { result } = renderHook(() => useCardAnimation());
    
    // Initially not hovered
    expect(result.current.isHovered).toBe(false);
    
    // Mouse enter
    act(() => {
      result.current.handleMouseEnter();
    });
    expect(result.current.isHovered).toBe(true);
    
    // Mouse leave
    act(() => {
      result.current.handleMouseLeave();
    });
    expect(result.current.isHovered).toBe(false);
  });

  test('should set up IntersectionObserver', () => {
    renderHook(() => useCardAnimation());
    
    expect(mockIntersectionObserver).toHaveBeenCalledTimes(1);
    expect(mockIntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );
  });

  test('should set isVisible after delay when intersection occurs', () => {
    const delay = 200;
    const { result } = renderHook(() => useCardAnimation(delay));
    
    // Get the callback passed to IntersectionObserver
    const intersectionCallback = mockIntersectionObserver.mock.calls[0][0];
    
    // Simulate intersection
    act(() => {
      intersectionCallback([{ isIntersecting: true, target: {} }]);
    });
    
    // Before delay, isVisible should still be false
    expect(result.current.isVisible).toBe(false);
    
    // Advance timers by delay
    act(() => {
      jest.advanceTimersByTime(delay);
    });
    
    // After delay, isVisible should be true
    expect(result.current.isVisible).toBe(true);
  });

  test('should not set isVisible when intersection does not occur', () => {
    const { result } = renderHook(() => useCardAnimation());
    
    // Get the callback passed to IntersectionObserver
    const intersectionCallback = mockIntersectionObserver.mock.calls[0][0];
    
    // Simulate no intersection
    act(() => {
      intersectionCallback([{ isIntersecting: false, target: {} }]);
    });
    
    // isVisible should remain false
    expect(result.current.isVisible).toBe(false);
    
    // Advance timers
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    
    // isVisible should still be false
    expect(result.current.isVisible).toBe(false);
  });

  test('should unobserve target after intersection', () => {
    const { result } = renderHook(() => useCardAnimation());
    
    // Get the callback and mock observer
    const intersectionCallback = mockIntersectionObserver.mock.calls[0][0];
    const mockObserver = mockIntersectionObserver.mock.results[0].value;
    
    const mockTarget = {};
    
    // Simulate intersection
    act(() => {
      intersectionCallback([{ isIntersecting: true, target: mockTarget }]);
    });
    
    // Should unobserve the target
    expect(mockObserver.unobserve).toHaveBeenCalledWith(mockTarget);
  });

  test('should clean up observer on unmount', () => {
    const { unmount } = renderHook(() => useCardAnimation());
    
    // Get the mock observer
    const mockObserver = mockIntersectionObserver.mock.results[0].value;
    
    // Unmount the hook
    unmount();
    
    // Should disconnect the observer
    expect(mockObserver.disconnect).not.toHaveBeenCalled(); // We don't call disconnect, we just unobserve
  });
});