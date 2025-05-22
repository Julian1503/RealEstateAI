import { Grid } from '@mui/material';
import { StatsCard } from "@components/features/dashboard/StatsCard";
import { Description as DescriptionIcon, House as HouseIcon, ImageSearch, Share as ShareIcon } from '@mui/icons-material';
import React from "react";
import { DashboardStatsProps } from './DashboardStats.types';

/**
 * DashboardStats component - displays a grid of statistics cards
 */
export const DashboardStats: React.FC<DashboardStatsProps> = () => {
  return (
    <>
      <Grid size={{ xs: 12, md: 3, sm: 6 }}>
        <StatsCard
          title="Total Properties"
          value="12"
          icon={<HouseIcon />}
          change="+2"
          changeLabel="from last month"
        />
      </Grid>
      <Grid size={{ xs: 12, md: 3, sm: 6 }}>
        <StatsCard
          title="AI Descriptions"
          value="28"
          icon={<DescriptionIcon />}
          change="+6"
          changeLabel="from last month"
        />
      </Grid>
      <Grid size={{ xs: 12, md: 3, sm: 6 }}>
        <StatsCard
          title="Enhanced Images"
          value="15"
          icon={<ImageSearch />}
          change="+4"
          changeLabel="from last month"
        />
      </Grid>
      <Grid size={{ xs: 12, md: 3, sm: 6 }}>
        <StatsCard
          title="Social Shares"
          value="32"
          icon={<ShareIcon />}
          change="+12"
          changeLabel="from last month"
        />
      </Grid>
    </>
  );
};