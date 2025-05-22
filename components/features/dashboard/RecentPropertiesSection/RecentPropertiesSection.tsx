import { Box, Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { PropertyCard } from "@components/features/dashboard/PropertyCard";
import React from "react";
import { RecentPropertiesSectionProps } from './RecentPropertiesSection.types';

/**
 * RecentPropertiesSection component - displays a card with recent properties
 */
export const RecentPropertiesSection: React.FC<RecentPropertiesSectionProps> = ({ properties }) => {
  return (
    <Grid size={{ xs: 12, md: 8 }}>
      <Card>
        <CardContent>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2
          }}>
            <Typography variant="h6">
              Recent Properties
            </Typography>
            <Button color="primary">View All</Button>
          </Box>
          <Divider sx={{ mb: 2 }} />
          <Grid container spacing={2}>
            {properties.map((property) => (
              <Grid key={property.id} size={{ xs: 12, md: 4, sm: 6 }}>
                <PropertyCard property={property} />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};