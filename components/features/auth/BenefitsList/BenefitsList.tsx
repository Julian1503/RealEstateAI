import { Stack } from "@mui/material";
import React from "react";
import { IconLabel } from "@components/core/Texts/IconLabel";
import { BenefitsListProps } from "./BenefitsList.types";

/**
 * BenefitsList component - displays a list of benefits with icons
 */
export const BenefitsList: React.FC<BenefitsListProps> = ({ items }) => (
  <Stack spacing={2}>
    {items.map((b, i) => (
      <IconLabel key={i} icon={b.icon} text={b.text} />
    ))}
  </Stack>
);