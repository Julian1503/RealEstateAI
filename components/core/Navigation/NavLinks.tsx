import React from 'react';
import { Button, Box } from '@mui/material';
import Link from 'next/link';
import {NavLinksProps} from "@components/core";

export const NavLinks: React.FC<NavLinksProps> = ({ links }) => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        {links.map((link) => (
            <Button
                key={link.label}
                component={Link}
                startIcon={link.icon ? link.icon : null}
                href={link.href}
                passHref
                sx={{
                    color: 'text.primary',
                    textTransform: 'none',
                    '&:hover': { color: 'primary.main' }
                }}
            >
                {link.label}
            </Button>
        ))}
    </Box>
);
