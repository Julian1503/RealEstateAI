import React from 'react';
import {
    Box,
    Typography,
    Paper,
    Stack, Divider, Button, ButtonGroup
} from '@mui/material';
import WatermarkSection from './WatermarkSection';
import StatusLabelSection from './StatusLabelSection';
import ManualControlsSection from './ManualControlsSection';
import AIPromptSection from "@features/image-enhancer/AiPromptSection";
import {Buttons} from "@features/image-enhancer/Buttons";
import { Section } from '@core/Container/Section';

const RightSidebar: React.FC = () => {
    return (
        <Section
            title="Enhancement Options"
            bgcolor="background.paper"
            py={3}
            px={2}
            heading={{
                titleVariant: 'body2',
                titleFontWeight: 500,
                textAlign: 'left',
                mb: 1.5,
                fontSize: '1.3rem'
            }}
        >
            <Stack spacing={3}>
                <WatermarkSection />
                <StatusLabelSection />
                <ManualControlsSection />
                <AIPromptSection />
                <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.12)', mb: 3 }} />
                <ButtonGroup>
                    <Button
                        onClick={()=>{}}
                        variant="contained"
                        fullWidth
                    >
                        Apply Enhancement
                    </Button>

                    <Button
                        onClick={()=>{}}
                        variant="outlined"
                        fullWidth
                    >
                        Reset Changes
                    </Button>
                </ButtonGroup>
            </Stack>
        </Section>
    );
};

export default RightSidebar;