import { Button, Card, CardContent, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { QuickActionBarProps } from './QuickActionBar.types';

/**
 * QuickActionBar component - displays a card with quick action buttons
 */
export const QuickActionBar: React.FC<QuickActionBarProps> = () => {
  const theme = useTheme();
  
  return (
    <Grid size={{ xs: 12 }}>
      <Card sx={{
        mb: 3,
        background: `linear-gradient(to right, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
        color: "text.primary"
      }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Quick Actions
          </Typography>
          <Grid container spacing={2}>
            <Grid>
              <Button>
                New Property
              </Button>
            </Grid>
            <Grid>
              <Button>
                Generate AI Description
              </Button>
            </Grid>
            <Grid>
              <Button>
                Enhance Property Image
              </Button>
            </Grid>
            <Grid>
              <Button>
                Create Social Post
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};