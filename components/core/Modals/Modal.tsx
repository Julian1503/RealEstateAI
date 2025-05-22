'use client';

import {Box, Dialog, DialogActions, DialogContent, IconButton, Typography} from '@mui/material';
import {Close} from '@mui/icons-material';
import React from "react";
import {ModalProps} from './Modals.types';

/**
 * Generic reusable modals component that can be used throughout the application
 *
 * @param {Object} props - Component props
 * @param {boolean} props.open - Whether the modals is open
 * @param {Function} props.onClose - Function to call when closing the modals
 * @param {React.ReactNode} props.title - Title element or text
 * @param {React.ReactNode} props.icon - Optional icon to display next to the title
 * @param {React.ReactNode} props.children - Modal content
 * @param {React.ReactNode} props.actions - Modal action buttons
 * @param {string} props.maxWidth - Max width of the modals (xs, sm, md, lg, xl)
 * @param {Object} props.paperProps - Additional props for the Paper component
 */
const Modal : React.FC<ModalProps> = ({
                                      open,
                                      onClose,
                                      title,
                                      icon,
                                      children,
                                      actions,
                                      maxWidth = "sm",
                                      paperProps = {}
                                  }) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth={maxWidth}
            fullWidth
            PaperProps={{
                sx: {
                    borderRadius: 4,
                    p: 2,
                    ...paperProps.sx
                },
                ...paperProps
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {icon && (
                        <Box sx={{ mr: 1 }}>
                            {icon}
                        </Box>
                    )}
                    {typeof title === 'string' ? (
                        <Typography
                            variant="h5"
                            fontWeight="bold"
                            color="#000035"
                        >
                            {title}
                        </Typography>
                    ) : title}
                </Box>
                <IconButton onClick={onClose} color="inherit" sx={{ color: 'text.secondary' }}>
                    <Close />
                </IconButton>
            </Box>

            <DialogContent sx={{ py: 0 }}>
                {children}
            </DialogContent>

            {actions && (
                <DialogActions sx={{ justifyContent: 'center', gap: 2, pt: 2 }}>
                    {actions}
                </DialogActions>
            )}
        </Dialog>
    );
}

export default Modal;