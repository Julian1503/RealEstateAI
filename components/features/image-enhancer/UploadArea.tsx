import React, { useState, useRef } from 'react';
import {
    Box,
    Typography,
    Paper
} from '@mui/material';
import { CloudUpload as CloudUploadIcon } from '@mui/icons-material';

interface UploadAreaProps {
    setImage: (file: File) => void;
}

const UploadArea: React.FC<UploadAreaProps> = ({setImage}) => {
    const [isDragOver, setIsDragOver] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFiles = (filesList: FileList | null) => {
        if (!filesList) return;
        const files = Array.from(filesList).filter(file =>
            file.type.startsWith('image/')
        );
        if (files.length === 0) {
            return;
        }
        setImage(files[0]);
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(false);
        handleFiles(e.dataTransfer.files);
    };

    const handleClick = () => {
        inputRef.current?.click();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleFiles(e.target.files);
    };

    return (
        <>
            <input
                ref={inputRef}
                type="file"
                accept=".jpg,.jpeg,.png"
                style={{ display: 'none' }}
                multiple={false}
                onChange={handleChange}
            />
            <Paper
                onClick={handleClick}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                sx={{
                    border: '2px dashed',
                    borderColor: isDragOver ? '#008080' : 'rgba(255, 255, 255, 0.23)',
                    bgcolor: 'transparent',
                    p: 3,
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'border-color 0.3s ease',
                    '&:hover': {
                        borderColor: 'primary.light'
                    }
                }}
            >
                <CloudUploadIcon
                    sx={{
                        fontSize: 48,
                        color: 'primary.main',
                        mb: 1
                    }}
                />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)', mb: 1 }}>
                    Drag & drop or click to upload
                </Typography>
                <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.4)' }}>
                    Supports JPG, PNG (max 20MB)
                </Typography>
            </Paper>
        </>
    );
};

export default UploadArea;
