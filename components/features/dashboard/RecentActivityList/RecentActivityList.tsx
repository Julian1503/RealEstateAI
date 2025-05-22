import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { BrushOutlined, Description, Share } from '@mui/icons-material';
import React from "react";
import { RecentActivityListProps } from './RecentActivityList.types';

/**
 * RecentActivityList component - displays a list of recent activities
 */
export const RecentActivityList: React.FC<RecentActivityListProps> = ({ activities }) => {
  /**
   * Determine which icon to display based on the activity action
   */
  const getActivityIcon = (action: string) => {
    if (action.includes('description')) return <Description />;
    if (action.includes('image')) return <BrushOutlined />;
    if (action.includes('Shared')) return <Share />;
    return <Description />; // Default icon
  };

  /**
   * Determine the background color of the avatar based on the activity action
   */
  const getAvatarColor = (action: string) => {
    if (action.includes('description')) return 'primary.light';
    if (action.includes('image')) return 'secondary.light';
    if (action.includes('Shared')) return 'success.light';
    return 'primary.light'; // Default color
  };

  return (
    <List sx={{ width: '100%' }}>
      {activities.map((activity) => (
        <ListItem
          key={activity.id}
          alignItems="flex-start"
          sx={{
            px: 0,
            '&:not(:last-child)': {
              borderBottom: '1px solid',
              borderColor: 'divider'
            }
          }}
        >
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: getAvatarColor(activity.action) }}>
              {getActivityIcon(activity.action)}
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={activity.action}
            secondary={
              <Box component="span" sx={{ display: 'block' }}>
                <Typography
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {activity.property}
                </Typography>
                {` — ${activity.time}`}
              </Box>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};