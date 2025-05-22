import { Stack } from "@mui/material";
import { ActionButton } from "@components/core/Button";
import React from "react";
import { CTAButtonsProps } from "./CTASection.types";

/**
 * CTAButtons component - displays call-to-action buttons
 */
export const CTAButtons: React.FC<CTAButtonsProps> = () => {
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={2}
      justifyContent="center"
    >
      <ActionButton
        variant="contained"
        primary={false}
      >
        Start Free Trial
      </ActionButton>

      <ActionButton variant="outlined">
        See How It Works
      </ActionButton>
    </Stack>
  );
};
