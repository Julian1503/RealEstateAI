import React from 'react';
import { alpha, Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import { useLoginForm } from '@/hooks/useLoginForm';
import { LoginFormProps } from './LoginForm.types';

/**
 * LoginForm component - a presentational component that renders a login form
 * Business logic is handled by the useLoginForm hook
 */
export const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  showRememberMe = true,
  customError,
  children
}) => {
  // Use the custom hook to manage form state and logic
  const {
    email,
    setEmail,
    password,
    setPassword,
    error: hookError,
    isLoading,
    handleSubmit: hookHandleSubmit
  } = useLoginForm();

  // Use the provided onSubmit handler or the one from the hook
  const handleSubmit = onSubmit || hookHandleSubmit;
  
  // Use custom error if provided, otherwise use error from hook
  const displayError = customError || hookError;

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <TextField
        fullWidth
        label="Email"
        type="email"
        placeholder="Enter your email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
        slotProps={{
          input: {
            sx: {
              borderRadius: 2,
              p: 0.5
            }
          }
        }}
      />
      
      <TextField
        fullWidth
        label="Password"
        type="password"
        placeholder="Enter your password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={isLoading}
        slotProps={{
          input: {
            sx: {
              borderRadius: 2,
              p: 0.5
            }
          }
        }}
      />

      {/* Display error message if there is one */}
      {displayError && (
        <Typography color="error" variant="body2">
          {displayError}
        </Typography>
      )}

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {showRememberMe && (
          <FormControlLabel
            control={<Checkbox size="small" />}
            label={<Typography variant="body2" color="text.secondary">Remember me</Typography>}
          />
        )}
        <Link href="/forgot-password" style={{ textDecoration: 'none' }}>
          <Typography
            variant="body2"
            color="primary"
            sx={{ '&:hover': { textDecoration: 'underline' } }}
          >
            Forgot password?
          </Typography>
        </Link>
      </Box>

      <Button
        type="submit"
        variant="contained"
        fullWidth
        disabled={isLoading}
        sx={{
          py: 1.5,
          borderRadius: 2,
          fontWeight: 500,
          backgroundColor: 'primary.main',
          '&:hover': { backgroundColor: alpha('#008080', 0.9) }
        }}
      >
        {isLoading ? 'Signing In...' : 'Sign In'}
      </Button>
      
      {/* Render any additional content */}
      {children}
    </Box>
  );
};