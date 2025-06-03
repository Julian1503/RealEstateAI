import React, { useState } from 'react';
import {
    Slider,
    Stack
} from '@mui/material';
import { Section } from '@core/Container/Section';

interface ControlState {
    brightness: number;
    contrast: number;
    saturation: number;
    sharpness: number;
}

const ManualControlsSection: React.FC = () => {
    const [controls, setControls] = useState<ControlState>({
        brightness: 50,
        contrast: 50,
        saturation: 50,
        sharpness: 50
    });

    const handleControlChange = (controlName: keyof ControlState) =>
        (_: Event, newValue: number | number[]) => {
            setControls(prev => ({
                ...prev,
                [controlName]: newValue as number
            }));
        };

    const controlItems = [
        { key: 'brightness' as keyof ControlState, label: 'Brightness' },
        { key: 'contrast' as keyof ControlState, label: 'Contrast' },
        { key: 'saturation' as keyof ControlState, label: 'Saturation' },
        { key: 'sharpness' as keyof ControlState, label: 'Sharpness' }
    ];

    return (
        <Stack spacing={3}>
            {controlItems.map(({ key, label }) => (
                <Section
                    key={key}
                    title={label}
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
                    <Slider
                        value={controls[key]}
                        onChange={handleControlChange(key)}
                        min={0}
                        max={100}
                        sx={{
                            color: '#008080',
                            '& .MuiSlider-track': {
                                bgcolor: '#008080'
                            },
                            '& .MuiSlider-rail': {
                                bgcolor: 'rgba(255, 255, 255, 0.2)'
                            },
                            '& .MuiSlider-thumb': {
                                bgcolor: '#008080',
                                '&:hover': {
                                    boxShadow: '0 0 0 8px rgba(0, 128, 128, 0.16)'
                                }
                            }
                        }}
                    />
                </Section>
            ))}
        </Stack>
    );
};

export default ManualControlsSection;