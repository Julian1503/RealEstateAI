import React, {useState} from "react";
import {Avatar, Box, Card, CardContent, Grid, Rating, Typography} from "@mui/material";
import {keyframes} from "@mui/system";
import { TestimonialCardProps } from './Card.types';

// Keyframes para diferentes animaciones
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 4px 20px rgba(0, 0, 100, 0.1);
  }
  50% {
    transform: scale(1.03);
    box-shadow: 0 12px 24px rgba(0, 0, 100, 0.2);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 4px 20px rgba(0, 0, 100, 0.1);
  }
`;

const shine = keyframes`
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
    name,
    role,
    company,
    testimonial,
    rating,
    avatar,
    isActive = false
}) => {
    const [hovered, setHovered] = useState(false);

    // Aplicar animación inicial solo para tarjetas activas
    const initialAnimation = isActive ?
        { animation: `${fadeIn} 0.5s ease-out` } :
        { opacity: isActive ? 1 : 0.7 };

    // Transiciones para estado hover
    const hoverTransition = {
        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
    };

    // Estilos condicionales para estado activo/hover
    const getCardStyles = () => {
        if (isActive && hovered) {
            return {
                animation: `${pulse} 2s infinite ease-in-out`,
                transform: "translateY(-8px)",
                boxShadow: "0 20px 30px rgba(0, 0, 100, 0.3)",
                background: "linear-gradient(110deg, #00004a 0%, #000060 50%, #00004a 100%)",
                backgroundSize: "200% 100%",
                ...hoverTransition
            };
        } else if (isActive) {
            return {
                transform: "translateY(-5px)",
                boxShadow: "0 10px 20px rgba(0, 0, 100, 0.2)",
                background: "#00004a",
                ...hoverTransition
            };
        } else if (hovered) {
            return {
                transform: "scale(1.03)",
                boxShadow: "0 8px 16px rgba(0, 0, 100, 0.15)",
                ...hoverTransition
            };
        } else {
            return {
                ...hoverTransition
            };
        }
    };

    return (
        <Grid size={{md: 4, xs: 12}}>
            <Card
                sx={{
                    bgcolor: "background.paper",
                    height: "100%",
                    width: "100%",
                    borderRadius: 4,
                    ...initialAnimation,
                    ...getCardStyles(),
                    position: "relative",
                    overflow: "hidden",
                    "&::after": isActive ? {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "3px",
                        background: "linear-gradient(90deg, #6366f1, #8b5cf6, #d946ef, #8b5cf6, #6366f1)",
                        backgroundSize: "200% 100%",
                        animation: `${shine} 3s infinite linear`
                    } : {}
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                elevation={isActive ? 8 : 4}
            >
                <CardContent sx={{ p: 4 }}>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 3,
                        transform: hovered ? "translateY(-2px)" : "translateY(0)",
                        transition: "transform 0.3s ease"
                    }}>
                        <Avatar
                            src={avatar}
                            alt={name}
                            sx={{
                                width: 64,
                                height: 64,
                                mr: 2,
                                border: isActive ? "2px solid #6366f1" : "none",
                                boxShadow: isActive ? "0 0 10px rgba(99, 102, 241, 0.5)" : "none",
                                transition: "all 0.3s ease"
                            }}
                        />
                        <Box>
                            <Typography
                                variant="subtitle1"
                                fontWeight="bold"
                                color="common.white"
                                sx={{
                                    transition: "color 0.3s ease",
                                    color: hovered ? "text.primary" : "common.white"
                                }}
                            >
                                {name}
                            </Typography>
                            <Typography variant="body2" color="grey.400">
                                {role}{company ? `, ${company}` : ""}
                            </Typography>
                        </Box>
                    </Box>
                    <Typography
                        variant="body1"
                        color="grey.300"
                        sx={{
                            mb: 2,
                            fontStyle: "italic",
                            transition: "all 0.3s ease",
                            opacity: hovered || isActive ? 1 : 0.9,
                            transform: hovered ? "translateY(-2px)" : "translateY(0)"
                        }}
                    >
                        "{testimonial}"
                    </Typography>
                    <Rating
                        value={rating}
                        precision={0.5}
                        readOnly
                        sx={{
                            color: isActive ? "primary.main" : "#f7bb07",
                            transform: hovered ? "scale(1.05)" : "scale(1)",
                            transition: "transform 0.3s ease",
                            '& .MuiRating-iconFilled': {
                                filter: hovered ? "drop-shadow(0 0 2px rgba(255, 215, 0, 0.5))" : "none",
                            }
                        }}
                    />
                </CardContent>
            </Card>
        </Grid>
    );
};