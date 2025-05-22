import { Box, Typography } from "@mui/material";
import React from "react";
import { ActionButton } from "@components/core/Button";
import { SidebarCTAProps } from "./SidebarCTA.types";

/**
 * SidebarCTA component - displays a call-to-action in the sidebar
 */
export const SidebarCTA: React.FC<SidebarCTAProps> = ({ text, onClick, buttonText }) => {
  return (
    <Box sx={{ mt: 6 }}>
      <Typography sx={{ mb: 2 }}>{text}</Typography>
      <ActionButton
        variant="outlined"
        onClick={onClick}
      >
        {buttonText}
      </ActionButton>
    </Box>
  );
};
