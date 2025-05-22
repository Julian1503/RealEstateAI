import { Avatar, Box, Card, CardContent, Typography } from '@mui/material';
import React from "react";
import { StatsCardProps } from './StatsCard.types';

/**
 * StatsCard component - displays a statistic in a card format
 */
export const StatsCard: React.FC<StatsCardProps> = ({ 
  title, 
  value, 
  icon, 
  change, 
  changeLabel 
}) => {
  // Determine if the change is positive or negative
  const isPositive = change && change.startsWith('+');

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar
            sx={{
              backgroundColor: 'primary.light',
              height: 56,
              width: 56,
              mr: 2
            }}
          >
            {icon}
          </Avatar>
          <Box>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="overline"
            >
              {title}
            </Typography>
            <Typography
              color="textPrimary"
              variant="h4"
            >
              {value}
            </Typography>
          </Box>
        </Box>
        {change && (
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              pt: 2
            }}
          >
            <Typography
              color={isPositive ? 'success.main' : 'error.main'}
              variant="body2"
              sx={{ mr: 1 }}
            >
              {change}
            </Typography>
            <Typography
              color="textSecondary"
              variant="caption"
            >
              {changeLabel}
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};