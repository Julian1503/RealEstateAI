import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { Section } from '@core/Container/Section';

const AIPromptSection: React.FC = () => {
    const [prompt, setPrompt] = useState('');

    const handlePromptChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPrompt(event.target.value);
    };

    return (
        <Section
            title="AI Enhancement Prompt"
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
            <TextField
                multiline
                rows={3}
                fullWidth
                value={prompt}
                onChange={handlePromptChange}
                placeholder="Describe how you want to enhance the image (e.g., 'Make it more bright and vibrant, increase contrast')"
                sx={{
                    '& .MuiOutlinedInput-root': {
                        bgcolor: '#000035',
                        color: 'white',
                        fontSize: '0.875rem',
                        '& fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.23)'
                        },
                        '&:hover fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.4)'
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#008080'
                        }
                    },
                    '& .MuiInputBase-input::placeholder': {
                        color: 'rgba(255, 255, 255, 0.5)',
                        opacity: 1
                    }
                }}
            />
        </Section>
    );
};

export default AIPromptSection;