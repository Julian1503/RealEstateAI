import {ReactNode} from "react";
import {SxProps, Theme} from "@mui/material";

export interface SectionContainerProps {
    id?: string,
    bgcolor: string,
    children: ReactNode,
    py?: number,
    px?: number,
    sx?: SxProps<Theme>,
    maxWidth?: string
}

export interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    mb?: number;
    sx?: SxProps<Theme>;
    subtitleColor?: string;
}