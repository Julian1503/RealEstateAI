import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { BrushOutlined, Description, Share } from '@mui/icons-material';
import React from "react";
import { RecentActivityListProps } from './RecentActivityList.types';
import { ActivityIconType, getActivityIconType, getAvatarColor } from '@/service/activityDisplayService';

/**
 * RecentActivityList component - displays a list of recent activities
 */
export const RecentActivityList: React.FC<RecentActivityListProps> = ({ activities }) => {
  /**
   * Render the appropriate icon based on the activity type
   */
  const renderActivityIcon = (action: string) => {
    const iconType = getActivityIconType(action);

    switch (iconType) {
      case ActivityIconType.DESCRIPTION:
        return <Description />;
      case ActivityIconType.IMAGE:
        return <BrushOutlined />;
      case ActivityIconType.SHARE:
        return <Share />;
      default:
        return <Description />;
    }
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
              {renderActivityIcon(activity.action)}
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
