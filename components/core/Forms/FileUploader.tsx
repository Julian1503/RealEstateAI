import {Box, Button} from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import React, {useRef} from 'react';
import {FileUploaderProps} from "@core/Forms/Forms.types";


export default function FileUploader({ onFileSelect }: FileUploaderProps) {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            onFileSelect(e.target.files[0]);
        }
    };

    return (
        <Box sx={{ mb: 2 }}>
            <input
                ref={fileInputRef}
                type="file"
                onChange={handleFileChange}
                style={{ display: 'none' }}
            />
            <Button
                variant="outlined"
                startIcon={<UploadFileIcon />}
                onClick={handleButtonClick}
            >
                Select File
            </Button>
        </Box>
    );
}