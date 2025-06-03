import React, { useState } from 'react';
import {
    Select,
    MenuItem,
    FormControl
} from '@mui/material';
import { Section } from '@core/Container/Section';

const statusOptions = [
    { value: 'for-sale', label: 'FOR SALE' },
    { value: 'for-rent', label: 'FOR RENT' },
    { value: 'sold', label: 'SOLD' },
    { value: 'pending', label: 'PENDING' },
    { value: 'none', label: 'None' }
];

const StatusLabelSection: React.FC = () => {
    const [statusLabel, setStatusLabel] = useState('for-sale');

    const handleStatusChange = (event: any) => {
        setStatusLabel(event.target.value);
    };

    return (
        <Section
            title="Status Label"
            bgcolor="transparent"
            py={0}
            px={0}
            useContainer={false}
            heading={{
                titleVariant: 'body2',
                titleFontWeight: 500,
                textAlign: 'left',
                mb: 1.5,
                fontSize: 'inherit'
            }}
        >
            <FormControl fullWidth>
                <Select
                    value={statusLabel}
                    onChange={handleStatusChange}
                    sx={{
                        bgcolor: '#000035',
                        color: 'white',
                        fontSize: '0.875rem',
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'rgba(255, 255, 255, 0.23)'
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'rgba(255, 255, 255, 0.4)'
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#008080'
                        },
                        '& .MuiSelect-icon': {
                            color: 'white'
                        }
                    }}
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                bgcolor: '#000035',
                                color: 'white',
                                '& .MuiMenuItem-root': {
                                    '&:hover': {
                                        bgcolor: 'rgba(0, 128, 128, 0.1)'
                                    },
                                    '&.Mui-selected': {
                                        bgcolor: 'rgba(0, 128, 128, 0.2)',
                                        '&:hover': {
                                            bgcolor: 'rgba(0, 128, 128, 0.3)'
                                        }
                                    }
                                }
                            }
                        }
                    }}
                >
                    {statusOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Section>
    );
};

export default StatusLabelSection;