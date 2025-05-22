import React from 'react';
import { Box } from '@mui/material';
import { InfoCard } from "@components/core/Cards";
import { FeatureGridProps } from './FeatureSection.types';

/**
 * FeatureGrid component - displays a grid of feature cards
 */
export const FeatureGrid: React.FC<FeatureGridProps> = ({ features }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        margin: -2,
        bgColor: 'background.default',
      }}
    >
      {features.map((feature) => (
        <Box
          key={feature.id}
          sx={{
            width: {
              xs: '100%',     // Full width on mobile
              sm: '50%',      // Half width on small screens
              md: '33.333%'   // One third width on medium screens and up
            },
            padding: 2        // Padding to create space between items
          }}
        >
          <InfoCard
            id={feature.id}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        </Box>
      ))}
    </Box>
  );
};
