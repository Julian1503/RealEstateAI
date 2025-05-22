import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { ArrowBack, Google } from '@mui/icons-material';
import BuildingIcon from '@/components/core/Icons/BuildingIcon';
import { LoginForm } from "@components/features/auth/LoginForm";
import { SocialAuthButton } from "@components/core/Button/SocialAuthButton";
import React from "react";
import { LoginPanelProps } from './LoginPanel.types';

/**
 * LoginPanel component - displays a login panel with social auth and email/password form
 */
export const LoginPanel: React.FC<LoginPanelProps> = ({ onAuth, onSubmit }) => {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
        <Button
          startIcon={<ArrowBack />}
          sx={{
            color: "text.secondary",
            "&:hover": { color: "primary.main" }
          }}
          component={Link}
          href="/"
        >
          Back to Home
        </Button>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <BuildingIcon
            sx={{
              color: "primary.main",
              fontSize: "2rem",
              mr: 1
            }}
          />
          <Typography
            variant="h5"
            fontWeight="bold"
          >
            AI Realty Assistant
          </Typography>
        </Box>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>
          Welcome Back
        </Typography>
        <Typography color="text.secondary">
          Sign in to continue to your dashboard
        </Typography>
      </Box>

      <Stack spacing={3} sx={{ mb: 4 }}>
        <SocialAuthButton
          icon={<Google />}
          provider="Google"
          onAuth={onAuth}
        />
      </Stack>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
        <Divider sx={{ flex: 1 }} />
        <Typography color="text.secondary">or</Typography>
        <Divider sx={{ flex: 1 }} />
      </Box>

      <LoginForm onSubmit={onSubmit} />
    </>
  );
};