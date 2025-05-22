import React from "react";

export interface ModalProps {
    open: boolean;
    onClose: () => void;
    title: React.ReactNode;
    icon?: React.ReactNode;
    children: React.ReactNode;
    actions?: React.ReactNode;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    paperProps?: {
        sx?: object;
        [key: string]: any;
    };
}