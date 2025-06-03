'use client';

import { Button, Typography } from '@mui/material';
import BuildingIcon from '@/components/core/Icons/BuildingIcon';
import Modal from '@/components/core/Modals/Modal';
import React from "react";
import { OnboardingModalProps } from './OnboardingModal.types';

/**
 * Onboarding modal for first-time users
 */
export const OnboardingModal: React.FC<OnboardingModalProps> = ({ 
  open, 
  onClose, 
  onStartTour = () => {} 
}) => {
  const handleStartTour = () => {
    onStartTour();
    onClose();
  };

  const modalIcon = (
    <BuildingIcon
      sx={{
        color: 'primary.main',
        fontSize: '2rem'
      }}
    />
  );

  const modalActions = (
    <>
      <Button
        variant="contained"
        fullWidth
        sx={{ borderRadius: 2 }}
        onClick={handleStartTour}
      >
        Start Tour
      </Button>
      <Button
        variant="outlined"
        fullWidth
        sx={{ borderRadius: 2 }}
        onClick={onClose}
      >
        Skip for Now
      </Button>
    </>
  );

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Welcome to RealEstateAI!"
      icon={modalIcon}
      actions={modalActions}
    >
      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Let's get you started with creating amazing real estate content. Would you like a quick tour of our features?
      </Typography>
    </Modal>
  );
};