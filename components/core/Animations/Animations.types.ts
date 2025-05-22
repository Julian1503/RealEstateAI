import React, { RefObject } from 'react';

export interface CarouselProps {
    items: React.ReactNode[];
    autoRotateInterval?: number;
    showControls?: boolean;
    showIndicators?: boolean;
    visibleItemsConfig?: {
        xs?: number;
        sm?: number;
        md?: number;
        lg?: number;
    };
    gap?: number;
    centerMode?: boolean;
    controlPosition?: "top" | "middle" | "bottom";
}

export interface AnimatedTextProps {
    children: React.ReactNode;
    variant?: "body1" | "body2" | "subtitle1" | "subtitle2" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    delay?: number;
    sx?: any;
}

export interface UseInViewOptions {
    threshold?: number;
    rootMargin?: string;
}

export interface RevealOnScrollProps {
    children: React.ReactNode;
    threshold?: number;
    delay?: number;
    duration?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
    distance?: number;
    once?: boolean;
}

export interface AnimatedButtonsProps {
    children: React.ReactNode;
    direction?: "row" | "column" | { [key: string]: "row" | "column" };
    spacing?: number;
    delay?: number;
}

export interface AnimatedGradientBackgroundProps {
    children: React.ReactNode;
    colors?: string[];
    intensity?: number;
}

export interface AnimatedHighlightTextProps {
    text: string;
    highlightedWords?: string[];
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    sx?: any;
}

export interface AnimatedRevealImageProps {
    children: React.ReactNode;
}

export interface AnimatedTitleProps {
    preText: string;
    highlightedText: string;
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    sx?: any;
}

export interface FloatingImageProps {
    src: string;
    alt: string;
    width?: number | string;
    height?: number | string;
    floatDirection?: 'up' | 'down' | 'left' | 'right';
    floatDistance?: number;
    duration?: number;
    sx?: any;
}
