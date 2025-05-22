import React, { useEffect, useRef, useState } from 'react';
import {
    Box,
    Button,
    Fade,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    Tooltip,
    Typography,
    useTheme
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import StarIcon from '@mui/icons-material/Star';
import { keyframes } from '@mui/system';
import { PlanCardProps } from './PricingSection.types';

/**
 * Animation for the pulsing effect on popular plans
 */
const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(0, 200, 200, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(0, 200, 200, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(0, 200, 200, 0);
  }
`;

/**
 * PlanCard component - displays a pricing plan card with animations and hover effects
 */
export const PlanCard: React.FC<PlanCardProps> = ({
  id,
  name,
  price,
  period = '/month',
  features,
  actionLabel,
  popular = false,
  highlightColor = 'primary.main',
  description = id === 'free-plan' ? 'Try our basic features' : 'Perfect for active agents',
  animationDelay = 0
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, animationDelay);
                    observer.unobserve(entry.target);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, [animationDelay]);

    return (
        <Box ref={cardRef}>
            <Fade in={isVisible} timeout={700} style={{ transitionDelay: `${animationDelay}ms` }}>
                <Paper
                    id={id}
                    elevation={isHovered ? 12 : (popular ? 8 : 1)}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    sx={{
                        bgcolor: 'background.paper',
                        p: 4,
                        borderRadius: 4,
                        width: { xs: '100%'},
                        minHeight: 440,
                        maxHeight: 440,
                        border: popular ? `2px solid ${highlightColor}` : '1px solid rgba(255, 255, 255, 0.2)',
                        boxShadow: popular ? `0 20px 25px -5px rgba(0, 128, 128, 0.2)` : 'none',
                        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        position: 'relative',
                        transform: isHovered ? 'translateY(-8px)' : 'none',
                        '&:hover': {
                            borderColor: highlightColor,
                            ...(popular && {
                                animation: `${pulse} 2s infinite`
                            })
                        },
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    {popular && (
                        <Box
                            sx={{
                                position: 'absolute',
                                top: -16,
                                right: 32,
                                bgcolor: highlightColor,
                                color: 'text.primary',
                                px: 2,
                                py: 0.5,
                                borderRadius: 'full',
                                fontSize: '0.875rem',
                                fontWeight: 'bold',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 0.5
                            }}
                        >
                            <StarIcon fontSize="small" />
                            MOST POPULAR
                        </Box>
                    )}

                    <Box sx={{ mb: 3 }}>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 'bold',
                                mb: 1,
                                color: isHovered ? highlightColor : 'text.primary',
                                transition: 'color 0.3s ease',
                                height: '32px',
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                            {name}
                        </Typography>
                        <Typography color="text.secondary" sx={{ height: '48px' }}>
                            {description}
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 3, height: '60px', display: 'flex', alignItems: 'center' }}>
                        <Typography
                            variant="h3"
                            component="span"
                            sx={{
                                fontWeight: 'bold',
                                color: isHovered ? highlightColor : 'text.primary',
                                transition: 'color 0.3s ease'
                            }}
                        >
                            {price}
                        </Typography>
                        <Typography
                            component="span"
                            color="text.secondary"
                            sx={{ ml: 1 }}
                        >
                            {period}
                        </Typography>
                    </Box>

                    <List sx={{ mb: 4, flexGrow: 1, height: '120px' }} disablePadding>
                        {features.map((feature, i) => (
                            <ListItem key={i} sx={{ px: 0, py: 0.75 }} disableGutters>
                                <ListItemIcon
                                    sx={{
                                        minWidth: 36,
                                        color: highlightColor,
                                        transform: isHovered ? 'scale(1.2)' : 'scale(1)',
                                        transition: 'transform 0.3s ease'
                                    }}>
                                    <CheckIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={feature}
                                    primaryTypographyProps={{
                                        sx: { transition: 'font-weight 0.3s ease', fontWeight: isHovered ? 'medium' : 'regular' }
                                    }}
                                />
                            </ListItem>
                        ))}
                    </List>

                    <Tooltip title={`Choose ${name}`} placement="top" arrow>
                        <Button
                            variant={popular ? 'contained' : 'outlined'}
                            fullWidth
                            sx={{
                                py: 1.5,
                                fontWeight: 'bold',
                                borderRadius: 2,
                                transition: 'all 0.3s ease',
                                ...(popular ? {
                                    bgcolor: highlightColor,
                                    color: 'text.primary',
                                    '&:hover': {
                                        bgcolor: `${highlightColor}`,
                                        transform: 'scale(1.05)',
                                        boxShadow: '0 10px 15px -3px rgba(0, 128, 128, 0.3)'
                                    }
                                } : {
                                    borderColor: highlightColor,
                                    color: 'text.primary',
                                    borderWidth: isHovered ? 2 : 1,
                                    '&:hover': {
                                        borderColor: highlightColor,
                                        bgcolor: `${highlightColor}22`,
                                        transform: 'scale(1.05)'
                                    }
                                })
                            }}
                        >
                            {actionLabel}
                        </Button>
                    </Tooltip>
                </Paper>
            </Fade>
        </Box>
    );
};