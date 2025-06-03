import React from 'react';
import { render, screen } from '@/test-utils';
import { PricingSection } from '@features/home';
import { PlanCardProps } from '@features/home';
import {SectionContainerProps, SectionHeadingProps} from "@core/Container";
import {RevealOnScrollProps} from "@components/core";

// Mock the child components
jest.mock('@components/core/Container/SectionHeading', () => ({
  SectionHeading: ({ title, subtitle } : SectionHeadingProps) => (
    <div data-testid="section-heading">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  ),
}));

jest.mock('@components/core/Container/SectionContainer', () => ({
  SectionContainer: ({ children, id, bgcolor } : SectionContainerProps) => (
    <div data-testid="section-container" id={id} style={{ backgroundColor: bgcolor }}>
      {children}
    </div>
  ),
}));

jest.mock('@components/core/Animations/RevealOnScroll', () => ({
  RevealOnScroll: ({ children, delay } : RevealOnScrollProps) => (
    <div data-testid="reveal-on-scroll" data-delay={delay}>
      {children}
    </div>
  ),
}));

jest.mock('./PlanCard', () => ({
  PlanCard: (props: PlanCardProps) => (
    <div data-testid="plan-card" data-id={props.id}>
      <h3>{props.name}</h3>
      <p>{props.price}{props.period}</p>
      <ul>
        {props.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button>{props.actionLabel}</button>
    </div>
  ),
}));

jest.mock('./PricingFooter', () => ({
  PricingFooter: () => <div data-testid="pricing-footer">Footer content</div>,
}));

// Mock data for testing
const mockPlans: PlanCardProps[] = [
  {
    id: 'basic-plan',
    name: 'Basic',
    price: '$0',
    period: '/month',
    features: ['Feature 1', 'Feature 2'],
    actionLabel: 'Get Started',
    description: 'For beginners',
  },
  {
    id: 'pro-plan',
    name: 'Professional',
    price: '$49',
    period: '/month',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    actionLabel: 'Choose Pro',
    popular: true,
    highlightColor: '#00aa94',
    description: 'For professionals',
  },
  {
    id: 'enterprise-plan',
    name: 'Enterprise',
    price: '$99',
    period: '/month',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    actionLabel: 'Contact Sales',
    description: 'For teams',
  },
];

describe('PricingSection', () => {
  test('renders the section with correct heading', () => {
    render(<PricingSection plans={mockPlans} />);

    const sectionContainer = screen.getByTestId('section-container');
    expect(sectionContainer).toBeInTheDocument();
    expect(sectionContainer).toHaveAttribute('id', 'pricing-section');

    const heading = screen.getByTestId('section-heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Plans for Every Real Estate Professional');
    expect(heading).toHaveTextContent('Whether you\'re an independent agent or part of a large brokerage, we have flexible plans to meet your needs');
  });

  test('renders all plan cards', () => {
    render(<PricingSection plans={mockPlans} />);

    const planCards = screen.getAllByTestId('plan-card');
    expect(planCards).toHaveLength(3);

    // Check if each plan is rendered
    expect(screen.getByText('Basic')).toBeInTheDocument();
    expect(screen.getByText('Professional')).toBeInTheDocument();
    expect(screen.getByText('Enterprise')).toBeInTheDocument();

    // Check if prices are rendered
    expect(screen.getByText('$0/month')).toBeInTheDocument();
    expect(screen.getByText('$49/month')).toBeInTheDocument();
    expect(screen.getByText('$99/month')).toBeInTheDocument();

    // Check if features are rendered
    mockPlans.forEach(plan => {
      plan.features.forEach(feature => {
        // Use getAllByText instead of getByText since features can appear in multiple plans
        const featureElements = screen.getAllByText(feature);
        expect(featureElements.length).toBeGreaterThan(0);
      });
    });

    // Check if action labels are rendered
    expect(screen.getByText('Get Started')).toBeInTheDocument();
    expect(screen.getByText('Choose Pro')).toBeInTheDocument();
    expect(screen.getByText('Contact Sales')).toBeInTheDocument();
  });

  test('renders RevealOnScroll with correct delays', () => {
    render(<PricingSection plans={mockPlans} />);

    const revealComponents = screen.getAllByTestId('reveal-on-scroll');
    expect(revealComponents).toHaveLength(3);

    // Check if delays are applied correctly
    expect(revealComponents[0]).toHaveAttribute('data-delay', '0');
    expect(revealComponents[1]).toHaveAttribute('data-delay', '100');
    expect(revealComponents[2]).toHaveAttribute('data-delay', '200');
  });

  test('renders the pricing footer', () => {
    render(<PricingSection plans={mockPlans} />);

    const footer = screen.getByTestId('pricing-footer');
    expect(footer).toBeInTheDocument();
  });

  test('renders with empty plans array', () => {
    render(<PricingSection plans={[]} />);

    const planCards = screen.queryAllByTestId('plan-card');
    expect(planCards).toHaveLength(0);

    // Section and heading should still render
    expect(screen.getByTestId('section-container')).toBeInTheDocument();
    expect(screen.getByTestId('section-heading')).toBeInTheDocument();
  });
});
