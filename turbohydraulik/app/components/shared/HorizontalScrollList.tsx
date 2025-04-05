"use client";
import React, { useRef, JSX } from "react";
import { Box, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import theme from "@/app/theme/theme";

interface HorizontalScrollListProps {
  mappedItems: JSX.Element[];
}

const container = {
  position: "relative",
  width: "100%",
  overflowX: "hidden",
  padding: "0 0 100px 0",
  overflowY: "hidden",
};

const HorizontalScrollList: React.FC<HorizontalScrollListProps> = ({
  mappedItems,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const showArrows = mappedItems.length > 1;
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -250,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 250,
        behavior: "smooth",
      });
    }
  };

  const arrowSx = {
    color: theme.palette.secondary.main,
    position: "absolute",
    transform: "translateY(-50%)",
    zIndex: 1,
    bottom: "20px",
    padding: "0px 60px",
    "&:hover": {
      cursor: "pointer",
      background: "transparent",
    },
    transition: "background 0.3s ease-in-out",
    display: showArrows ? "block" : "none",
  };

  return (
    <Box sx={container}>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          overflowX: "auto",
          padding: "0 0 100px 0",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
        ref={scrollContainerRef}
      >
        {mappedItems}
      </Box>

      <IconButton
        onClick={scrollLeft}
        sx={{
          ...arrowSx,
          left: "10px",
          position: "absolute",
          top: "70%",
          transform: "translateY(-50%)",
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>

      <IconButton
        onClick={scrollRight}
        sx={{
          ...arrowSx,
          right: "10px",
          position: "absolute",
          top: "70%",
          transform: "translateY(-50%)",
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default HorizontalScrollList;
