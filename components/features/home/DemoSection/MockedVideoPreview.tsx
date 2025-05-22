import { Box } from '@mui/material';
import {PlayButton} from "@components/core/Button/PlayButton";
import Image from 'next/image';
import React from 'react';
import { MockedVideoPreviewProps } from './DemoSection.types';

/**
 * MockedVideoPreview component - displays a video preview with a play button
 */
export const MockedVideoPreview: React.FC<MockedVideoPreviewProps> = () => {
  return (
    <Box
      sx={{
        maxWidth: '64rem',
        mx: 'auto',
        position: 'relative'
      }}
    >
      <Box
        sx={{
          position: 'relative',
          height: 500,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 4,
          overflow: 'hidden',
          boxShadow: theme => theme.shadows[24]
        }}
      >
        <Box
          sx={{
            bgcolor: 'black',
            opacity: 0.5,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
        />
        <Image
          width={800}
          height={600}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.6
          }}
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/e406769542-e0b9cd841ab7ba6d39aa.png"
          alt="real estate agent using AI software on laptop to generate property descriptions and marketing content, professional setting"
        />
        <PlayButton />
      </Box>
    </Box>
  );
};