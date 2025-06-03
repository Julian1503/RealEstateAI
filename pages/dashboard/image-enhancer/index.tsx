import React, {useState} from 'react';
import { Box, Container } from '@mui/material';
import LeftSidebar from "@features/image-enhancer/LeftSidebar";
import CenterPreview from "@features/image-enhancer/CenterPreview";
import RightSidebar from "@features/image-enhancer/RightSide";
import Header from "@shared/Header";
const links = [
    { label: 'Save', href: '#save' },
    { label: 'Share', href: '#share' },
    { label: 'Download', href: '#download' }
];


const AIRealtyAssistant: React.FC = () => {
    const [imageFile, setImageFile] = useState<File | null>(null);
    return (
        <Box
            sx={{
                minHeight: '100vh',
                bgcolor: 'background.default',
                color: 'text.primary',
            }}
        >
            <Header
                links={links}
                position="static"
                headerBgColor="background.default"
                logoText="Image Enhancer"
            />
            <Container maxWidth={false} sx={{ py: 3 }}>
                <Box sx={{ display: 'flex', gap: 3}}>
                    <LeftSidebar setImage={setImageFile} />
                    <CenterPreview image={imageFile} />
                    <RightSidebar />
                </Box>
            </Container>
        </Box>
    );
};

export default AIRealtyAssistant;