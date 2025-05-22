import React from 'react';
import { render, screen } from '../../../../test-utils';
import { RecentActivityList } from './RecentActivityList';
import { Activity } from './RecentActivityList.types';
import { ActivityIconType } from '@/service/activityDisplayService';

// Mock the activityDisplayService
jest.mock('@/service/activityDisplayService', () => ({
  ActivityIconType: {
    DESCRIPTION: 'description',
    IMAGE: 'image',
    SHARE: 'share',
    DEFAULT: 'default'
  },
  getActivityIconType: (action: string) => {
    if (action.includes('description')) return 'description';
    if (action.includes('image')) return 'image';
    if (action.includes('Shared')) return 'share';
    return 'default';
  },
  getAvatarColor: (action: string) => {
    if (action.includes('description')) return 'primary.light';
    if (action.includes('image')) return 'secondary.light';
    if (action.includes('Shared')) return 'success.light';
    return 'primary.light';
  }
}));

// Mock the MUI icons
jest.mock('@mui/icons-material', () => ({
  BrushOutlined: () => <div data-testid="icon-brush">BrushIcon</div>,
  Description: () => <div data-testid="icon-description">DescriptionIcon</div>,
  Share: () => <div data-testid="icon-share">ShareIcon</div>
}));

describe('RecentActivityList', () => {
  // Sample activities data for testing
  const mockActivities: Activity[] = [
    {
      id: 1,
      action: 'Generated description',
      property: '123 Main St',
      time: '2 hours ago'
    },
    {
      id: 2,
      action: 'Created image',
      property: '456 Oak Ave',
      time: '3 hours ago'
    },
    {
      id: 3,
      action: 'Shared listing',
      property: '789 Pine Rd',
      time: '1 day ago'
    },
    {
      id: 4,
      action: 'Other action',
      property: '321 Elm St',
      time: '2 days ago'
    }
  ];

  test('renders list with correct number of activities', () => {
    render(<RecentActivityList activities={mockActivities} />);
    
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(mockActivities.length);
  });

  test('renders activity details correctly', () => {
    render(<RecentActivityList activities={mockActivities} />);
    
    // Check if all actions are rendered
    mockActivities.forEach(activity => {
      expect(screen.getByText(activity.action)).toBeInTheDocument();
      expect(screen.getByText(activity.property)).toBeInTheDocument();
      expect(screen.getByText(`— ${activity.time}`)).toBeInTheDocument();
    });
  });

  test('renders correct icons based on activity type', () => {
    render(<RecentActivityList activities={mockActivities} />);
    
    // Description icon for "Generated description"
    expect(screen.getAllByTestId('icon-description')).toHaveLength(2); // One for "Generated description" and one for "Other action" (default)
    
    // Brush icon for "Created image"
    expect(screen.getByTestId('icon-brush')).toBeInTheDocument();
    
    // Share icon for "Shared listing"
    expect(screen.getByTestId('icon-share')).toBeInTheDocument();
  });

  test('renders empty list when no activities are provided', () => {
    render(<RecentActivityList activities={[]} />);
    
    const listItems = screen.queryAllByRole('listitem');
    expect(listItems).toHaveLength(0);
  });

  test('renders with a single activity', () => {
    const singleActivity = [mockActivities[0]];
    render(<RecentActivityList activities={singleActivity} />);
    
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(1);
    
    expect(screen.getByText(singleActivity[0].action)).toBeInTheDocument();
    expect(screen.getByText(singleActivity[0].property)).toBeInTheDocument();
    expect(screen.getByText(`— ${singleActivity[0].time}`)).toBeInTheDocument();
  });

  test('renders with light theme', () => {
    render(<RecentActivityList activities={mockActivities} />, { themeMode: 'light' });
    
    // Check if all activities are still rendered
    mockActivities.forEach(activity => {
      expect(screen.getByText(activity.action)).toBeInTheDocument();
    });
  });
});