"use client";
import React, { useState, useRef, useEffect, JSX } from "react";
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
};

const HorizontalScrollList: React.FC<HorizontalScrollListProps> = ({
  mappedItems,
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const scrollLeft = () => {
    if (scrollPosition < 0) {
      setScrollPosition(scrollPosition + 250);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollContainer = scrollContainerRef.current;
      const maxScrollPosition =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;

      if (scrollPosition > -maxScrollPosition) {
        setScrollPosition(scrollPosition - 250);
      }
    }
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollContainer = scrollContainerRef.current;
      const maxScrollPosition =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;
      setIsAtEnd(scrollPosition <= -maxScrollPosition);
    }
  }, [scrollPosition]);

  return (
    <Box sx={container} ref={scrollContainerRef}>
      <Box
        sx={{
          display: "flex",
          transition: "transform 0.3s ease",
          transform: `translateX(${scrollPosition}px)`,
        }}
      >
        {mappedItems}
      </Box>

      <IconButton
        disabled={scrollPosition >= 0}
        onClick={scrollLeft}
        sx={{
          ...arrowSx,
          left: "10px",
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>

      <IconButton
        disabled={isAtEnd}
        onClick={scrollRight}
        sx={{
          ...arrowSx,
          right: "10px",
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default HorizontalScrollList;
