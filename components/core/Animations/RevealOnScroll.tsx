import React, {RefObject, useEffect, useRef, useState} from 'react';
import {Box} from "@mui/material";
import { UseInViewOptions, RevealOnScrollProps } from './Animations.types';

/**
 * Custom hook to detect when an element enters the viewport
 * @param options - Configuration options for the IntersectionObserver
 * @returns [reference to the element, boolean indicating if it's visible]
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
    { threshold = 0.1, rootMargin = '0px' }: UseInViewOptions = {}
): [RefObject<T>, boolean] {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, {
      threshold: threshold,
      rootMargin: rootMargin
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return [ref, isInView];
}

/**
 * RevealOnScroll component - reveals its children when they enter the viewport
 */
export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  threshold = 0.1,
  delay = 0,
  duration = 700,
  direction = 'up', // 'up', 'down', 'left', 'right'
  distance = 50,
  once = true
}) => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isInView && (!hasAnimated || !once)) {
      setTimeout(() => {
        setShouldRender(true);
        setHasAnimated(true);
      }, delay);
    }
  }, [isInView, hasAnimated, once, delay]);

  // Calculate the initial transform based on the direction
  const getInitialTransform = () => {
    switch (direction) {
      case 'up': return `translateY(${distance}px)`;
      case 'down': return `translateY(-${distance}px)`;
      case 'left': return `translateX(${distance}px)`;
      case 'right': return `translateX(-${distance}px)`;
      default: return `translateY(${distance}px)`;
    }
  };

  const style = {
    opacity: shouldRender ? 1 : 0,
    transform: shouldRender ? 'translate(0, 0)' : getInitialTransform(),
    transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
  };

  return (
    <Box ref={ref} style={style}>
      {children}
    </Box>
  );
};