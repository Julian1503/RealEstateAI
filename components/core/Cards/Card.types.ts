import React from 'react';

export interface InfoCardProps {
    id?: string;
    title: string;
    description: string;
    icon?: React.ReactNode;
    dark?: boolean;
}

export interface TestimonialCardProps {
    name: string;
    role: string;
    company: string;
    testimonial: string;
    rating: number;
    avatar: string;
    isActive?: boolean;
}