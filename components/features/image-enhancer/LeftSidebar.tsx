import React from 'react';
import {
    Paper,
    Stack
} from '@mui/material';
import UploadArea from './UploadArea';
import ImageHistoryItem from "@features/image-enhancer/ImageHistory";
import { Section } from "@core/Container/Section";

interface ImageHistoryData {
    id: string;
    src: string;
    alt: string;
    filename: string;
}

const imageHistory: ImageHistoryData[] = [
    {
        id: '1',
        src: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/fca16074ad-3786fc06e5c176006fca.png',
        alt: 'modern living room interior with furniture and large windows',
        filename: 'Living Room.jpg'
    },
    {
        id: '2',
        src: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/5ba9ad07d2-8c25bae66e0129d3bbd4.png',
        alt: 'luxury kitchen with marble countertops and modern appliances',
        filename: 'Kitchen.jpg'
    }
];

interface LeftSidebarProps {
    setImage: (file: File) => void;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({
    setImage
                               }) => {
    return (
        <Paper
            sx={{
                bgcolor: 'background.paper',
                borderRadius: 3,
                height: 'fit-content',
                width: 288
            }}
        >
            <Stack spacing={3} sx={{ p: 2 }}>
                <Section
                    title="Upload Image"
                    bgcolor="transparent"
                    py={0}
                    px={0}
                    useContainer={false}
                    heading={{
                        titleVariant: 'h6',
                        titleFontWeight: 'bold',
                        textAlign: 'left',
                        mb: 2,
                        fontSize: '1.2rem'
                    }}
                >
                    <UploadArea setImage={setImage} />
                </Section>

                <Section
                    title="Recent Images"
                    bgcolor="transparent"
                    py={0}
                    px={0}
                    useContainer={false}
                    heading={{
                        titleVariant: 'h6',
                        titleFontWeight: 'bold',
                        textAlign: 'left',
                        mb: 2,
                        fontSize: '1.2rem'
                    }}
                >
                    <Stack spacing={1.5}>
                        {imageHistory.map((image) => (
                            <ImageHistoryItem
                                key={image.id}
                                src={image.src}
                                alt={image.alt}
                                filename={image.filename}
                            />
                        ))}
                    </Stack>
                </Section>
            </Stack>
        </Paper>
    );
};

export default LeftSidebar;