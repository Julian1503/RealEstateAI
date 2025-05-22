import React from 'react';
import { render, screen, fireEvent } from '../../test-utils';
import Dashboard from './index';

// Mock the components used in the dashboard page
jest.mock('@components/layout/dashboard/DashboardLayout', () => ({
  DashboardLayout: ({ 
    children, 
    navItems, 
    secondaryNavItems, 
    selectedPath, 
    onNavigate, 
    userMenuItems, 
    onUserMenuClick 
  }) => (
    <div data-testid="dashboard-layout">
      <div data-testid="nav-items">
        {navItems.map(item => (
          <button 
            key={item.id} 
            data-testid={`nav-item-${item.id}`}
            data-selected={selectedPath === item.path}
            onClick={() => onNavigate(item.path)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div data-testid="secondary-nav-items">
        {secondaryNavItems.map(item => (
          <button 
            key={item.id} 
            data-testid={`secondary-nav-item-${item.id}`}
            onClick={() => onNavigate(item.path)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div data-testid="user-menu">
        {userMenuItems.map(item => (
          <button 
            key={item.id} 
            data-testid={`user-menu-item-${item.id}`}
            onClick={() => onUserMenuClick(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div data-testid="dashboard-content">{children}</div>
    </div>
  ),
}));

jest.mock('@components/features/dashboard/WelcomeHeader', () => ({
  WelcomeHeader: ({ username }) => (
    <div data-testid="welcome-header">Welcome, {username}!</div>
  ),
}));

jest.mock('@components/features/dashboard/DashboardStats', () => ({
  DashboardStats: () => <div data-testid="dashboard-stats">Stats</div>,
}));

jest.mock('@components/features/dashboard/QuickActionBar', () => ({
  QuickActionBar: () => <div data-testid="quick-action-bar">Quick Actions</div>,
}));

jest.mock('@components/features/dashboard/RecentPropertiesSection', () => ({
  RecentPropertiesSection: ({ properties }) => (
    <div data-testid="recent-properties-section">
      {properties.map(property => (
        <div key={property.id} data-testid={`property-${property.id}`}>
          {property.address}
        </div>
      ))}
    </div>
  ),
}));

jest.mock('@components/features/dashboard/RecentActivitySection', () => ({
  RecentActivitySection: ({ activities }) => (
    <div data-testid="recent-activity-section">
      {activities.map(activity => (
        <div key={activity.id} data-testid={`activity-${activity.id}`}>
          {activity.action} - {activity.property}
        </div>
      ))}
    </div>
  ),
}));

describe('Dashboard Page', () => {
  test('renders dashboard with all components', () => {
    render(<Dashboard />);
    
    // Check if all main components are rendered
    expect(screen.getByTestId('dashboard-layout')).toBeInTheDocument();
    expect(screen.getByTestId('welcome-header')).toBeInTheDocument();
    expect(screen.getByTestId('dashboard-stats')).toBeInTheDocument();
    expect(screen.getByTestId('quick-action-bar')).toBeInTheDocument();
    expect(screen.getByTestId('recent-properties-section')).toBeInTheDocument();
    expect(screen.getByTestId('recent-activity-section')).toBeInTheDocument();
  });

  test('renders welcome header with correct username', () => {
    render(<Dashboard />);
    
    expect(screen.getByTestId('welcome-header')).toHaveTextContent('Welcome, Sarah!');
  });

  test('renders all navigation items', () => {
    render(<Dashboard />);
    
    // Check primary nav items
    expect(screen.getByTestId('nav-item-dashboard')).toBeInTheDocument();
    expect(screen.getByTestId('nav-item-properties')).toBeInTheDocument();
    expect(screen.getByTestId('nav-item-descriptions')).toBeInTheDocument();
    expect(screen.getByTestId('nav-item-images')).toBeInTheDocument();
    expect(screen.getByTestId('nav-item-social')).toBeInTheDocument();
    
    // Check secondary nav items
    expect(screen.getByTestId('secondary-nav-item-settings')).toBeInTheDocument();
    expect(screen.getByTestId('secondary-nav-item-help')).toBeInTheDocument();
  });

  test('renders user menu items', () => {
    render(<Dashboard />);
    
    expect(screen.getByTestId('user-menu-item-profile')).toBeInTheDocument();
    expect(screen.getByTestId('user-menu-item-account')).toBeInTheDocument();
    expect(screen.getByTestId('user-menu-item-logout')).toBeInTheDocument();
  });

  test('renders recent properties', () => {
    render(<Dashboard />);
    
    // Check if all properties are rendered
    expect(screen.getByTestId('property-1')).toBeInTheDocument();
    expect(screen.getByTestId('property-2')).toBeInTheDocument();
    expect(screen.getByTestId('property-3')).toBeInTheDocument();
    
    // Check property content
    expect(screen.getByTestId('property-1')).toHaveTextContent('123 Luxury Lane, Beverly Hills');
    expect(screen.getByTestId('property-2')).toHaveTextContent('456 Ocean View Dr, Malibu');
    expect(screen.getByTestId('property-3')).toHaveTextContent('789 Mountain Retreat, Aspen');
  });

  test('renders recent activities', () => {
    render(<Dashboard />);
    
    // Check if all activities are rendered
    expect(screen.getByTestId('activity-1')).toBeInTheDocument();
    expect(screen.getByTestId('activity-2')).toBeInTheDocument();
    expect(screen.getByTestId('activity-3')).toBeInTheDocument();
    
    // Check activity content
    expect(screen.getByTestId('activity-1')).toHaveTextContent('Generated description - 123 Luxury Lane');
    expect(screen.getByTestId('activity-2')).toHaveTextContent('Enhanced property image - 456 Ocean View Dr');
    expect(screen.getByTestId('activity-3')).toHaveTextContent('Shared to Instagram - 789 Mountain Retreat');
  });

  test('handles navigation correctly', () => {
    render(<Dashboard />);
    
    // Dashboard should be selected initially
    expect(screen.getByTestId('nav-item-dashboard')).toHaveAttribute('data-selected', 'true');
    
    // Click on Properties nav item
    fireEvent.click(screen.getByTestId('nav-item-properties'));
    
    // Properties should now be selected
    expect(screen.getByTestId('nav-item-properties')).toHaveAttribute('data-selected', 'true');
    expect(screen.getByTestId('nav-item-dashboard')).toHaveAttribute('data-selected', 'false');
  });

  test('renders with light theme', () => {
    render(<Dashboard />, { themeMode: 'light' });
    
    // Check if all main components are still rendered
    expect(screen.getByTestId('dashboard-layout')).toBeInTheDocument();
    expect(screen.getByTestId('welcome-header')).toBeInTheDocument();
  });
});