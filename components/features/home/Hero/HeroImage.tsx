import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import { HeroImageProps } from "./Hero.types";

/**
 * HeroImage component - displays an image with styling for the hero section
 */
export const HeroImage: React.FC<HeroImageProps> = ({
  width,
  height,
  style,
  src,
  alt
}) => {
  return (
    <Box sx={{ width: { xs: '100%', md: '80%' }, position: 'relative' }}>
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          borderRadius: 2,
          overflow: 'hidden',
          boxShadow: 24
        }}
      >
        <Image
          width={width}
          height={height}
          style={style}
          src={src}
          alt={alt}
        />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: -40,
          right: -40,
          width: 256,
          height: 256,
          bgcolor: 'primary.main',
          opacity: 0.2,
          borderRadius: '50%',
          filter: 'blur(24px)'
        }}
      />
    </Box>
  );
};