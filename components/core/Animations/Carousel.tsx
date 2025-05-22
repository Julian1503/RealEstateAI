import React, { useState, useEffect, ReactNode } from "react";
import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {CarouselProps} from "@components/core";

const Carousel: React.FC<CarouselProps> = ({
                                               items,
                                               autoRotateInterval = 5000,
                                               showControls = true,
                                               showIndicators = true,
                                               visibleItemsConfig = { xs: 1, sm: 2, md: 3, lg: 3 },
                                               gap = 16,
                                               centerMode = false,
                                               controlPosition = "top"
                                           }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleItems, setVisibleItems] = useState(3);
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.down("md"));
    const isDesktop = useMediaQuery(theme.breakpoints.down("lg"));

    // Update number of visible items based on screen size
    useEffect(() => {
        if (isMobile) {
            setVisibleItems(visibleItemsConfig.xs || 1);
        } else if (isTablet) {
            setVisibleItems(visibleItemsConfig.sm || 2);
        } else if (isDesktop) {
            setVisibleItems(visibleItemsConfig.md || 3);
        } else {
            setVisibleItems(visibleItemsConfig.lg || 3);
        }
    }, [isMobile, isTablet, isDesktop, visibleItemsConfig]);

    // Auto-rotate carousel
    useEffect(() => {
        if (autoRotateInterval > 0) {
            const timer = setInterval(() => {
                handleNext();
            }, autoRotateInterval);
            return () => clearInterval(timer);
        }
        return undefined;
    }, [currentIndex, items.length, autoRotateInterval]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === 0) {
                return Math.max(0, items.length - visibleItems);
            }
            return Math.max(0, prevIndex - 1);
        });
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex >= items.length - visibleItems) {
                return 0;
            }
            return prevIndex + 1;
        });
    };

    // Prevent duplicates by slicing the items array properly
    const getUniqueDisplayedItems = () => {
        // Create a set of indices to avoid duplicates
        const uniqueIndices = new Set<number>();

        // Add current index and next 'visibleItems - 1' indices
        for (let i = 0; i < visibleItems; i++) {
            const index = (currentIndex + i) % items.length;
            uniqueIndices.add(index);
        }

        // Convert set to array and sort
        const indices = Array.from(uniqueIndices).sort((a, b) => a - b);

        // Return the corresponding items
        return indices.map(index => items[index]);
    };

    const displayedItems = getUniqueDisplayedItems();

    // Control button positioning styles
    const controlStyles = {
        top: { top: -60, transform: "translateY(0)" },
        middle: { top: "50%", transform: "translateY(-50%)" },
        bottom: { bottom: -60, transform: "translateY(0)" }
    };

    return (
        <Box sx={{ position: "relative", width: "100%", pb: 4 }}>
            {/* Navigation buttons */}
            {showControls && items.length > visibleItems && (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        position: controlPosition === "top" ? "relative" : "absolute",
                        width: "100%",
                        ...(controlPosition !== "top" && controlStyles[controlPosition])
                    }}
                >
                    <IconButton
                        onClick={handlePrev}
                        sx={{
                            color: "white",
                            bgcolor: "rgba(0,0,0,0.2)",
                            "&:hover": { bgcolor: "rgba(0,0,0,0.4)" }
                        }}
                    >
                        <ArrowBackIcon />
                    </IconButton>
                    <IconButton
                        onClick={handleNext}
                        sx={{
                            color: "white",
                            bgcolor: "rgba(0,0,0,0.2)",
                            "&:hover": { bgcolor: "rgba(0,0,0,0.4)" }
                        }}
                    >
                        <ArrowForwardIcon />
                    </IconButton>
                </Box>
            )}

            {/* Carousel container */}
            <Box
                sx={{
                    display: "flex",
                    overflow: "hidden",
                    width: "100%",
                    justifyContent: "center",
                    position: "relative",
                }}
            >
                {/* Items container */}
                <Box
                    sx={{
                        display: "flex",
                        transition: "transform 0.5s ease-in-out",
                        gap: gap / 4, // Convert pixels to MUI spacing units (1 unit = 8px)
                        justifyContent: "center",
                        width: "100%"
                    }}
                >
                    {displayedItems.map((item, idx) => (
                        <Box
                            key={idx}
                            sx={{
                                flex: 1,
                                maxWidth: `${100 / visibleItems}%`,
                                px: gap / 16, // Add padding for gap
                                transform: centerMode && idx === 0 ? "scale(1.05)" : "scale(1)",
                                transition: "all 0.5s ease-in-out",
                            }}
                        >
                            {item}
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* Indicator dots */}
            {showIndicators && items.length > visibleItems && (
                <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                    {Array.from({ length: items.length }).map((_, idx) => (
                        <Box
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            sx={{
                                width: 10,
                                height: 10,
                                borderRadius: "50%",
                                mx: 0.5,
                                bgcolor: idx >= currentIndex && idx < currentIndex + visibleItems ? "primary.main" : "grey.500",
                                cursor: "pointer",
                            }}
                        />
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default Carousel;