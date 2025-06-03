import React, { useState } from 'react';
import {
    Box,
    Button,
    Paper,
    Stack,
    Typography,
    Slider,
    Chip
} from '@mui/material';

const tools = [
    { id: 'enhancer', label: 'Image Enhancer', active: true },
    { id: 'style', label: 'Style Transfer', active: false },
    { id: 'staging', label: 'Virtual Staging', active: false }
];

interface CenterPreviewProps {
    image: File | null;
}

const CenterPreview: React.FC<CenterPreviewProps> = ({
    image
                                 }) => {
    const [activeTool, setActiveTool] = useState('enhancer');
    const [comparisonValue, setComparisonValue] = useState(50);
    const [preview, setPreview] = useState<string | null>(null);

    //if image change we must update the preview
    React.useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(image);
        } else {
            setPreview(null);
        }
    }, [image]);

    const handleToolChange = (toolId: string) => {
        setActiveTool(toolId);
    };

    const handleComparisonChange = (_: Event, newValue: number | number[]) => {
        setComparisonValue(newValue as number);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Paper
                sx={{
                    bgcolor: 'background.paper',
                    p: 2,
                    borderRadius: 3,
                    height: 'fit-content'
                }}
            >
                <Stack spacing={3}>
                    <Stack direction="row" spacing={2}>
                        {tools.map((tool) => (
                            <Button
                                key={tool.id}
                                onClick={() => handleToolChange(tool.id)}
                                variant={activeTool === tool.id ? "contained" : "outlined"}
                                sx={{
                                    bgcolor: activeTool === tool.id ? '#008080' : '#000035',
                                    borderColor: activeTool === tool.id ? '#008080' : 'transparent',
                                    color: 'white',
                                    '&:hover': {
                                        bgcolor: '#008080'
                                    },
                                    textTransform: 'none'
                                }}
                            >
                                {tool.label}
                            </Button>
                        ))}
                    </Stack>

                    <Box
                        sx={{
                            position: 'relative',
                            height: 600,
                            bgcolor: '#000035',
                            borderRadius: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden'
                        }}
                    >
                        <Box
                            component="img"
                            src={preview? preview : "https://storage.googleapis.com/uxpilot-auth.appspot.com/edbe7ce2e8-5c3ff7e8ce184cf9d724.png"}
                            alt="split view of before and after real estate photo enhancement showing improved lighting and color"
                            sx={{
                                maxHeight: '100%',
                                maxWidth: '100%',
                                borderRadius: 1
                            }}
                        />
                    </Box>
                </Stack>
            </Paper>
        </Box>
    );
};

export default CenterPreview;