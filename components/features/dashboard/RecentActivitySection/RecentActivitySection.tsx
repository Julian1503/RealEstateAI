import { Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { RecentActivityList } from "@components/features/dashboard/RecentActivityList";
import React from "react";
import { RecentActivitySectionProps } from './RecentActivitySection.types';

/**
 * RecentActivitySection component - displays a card with recent activities
 */
export const RecentActivitySection: React.FC<RecentActivitySectionProps> = ({ activities }) => {
  return (
    <Grid size={{ xs: 12, md: 4 }}>
      <Card sx={{ height: '100%' }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Recent Activity
          </Typography>
          <Divider />
          <RecentActivityList activities={activities} />
        </CardContent>
      </Card>
    </Grid>
  );
};