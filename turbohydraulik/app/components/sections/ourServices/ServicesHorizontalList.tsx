"use client";
import React, { useState, useRef, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ServiceCard from "./ServiceShortcut";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import theme from "@/app/theme/theme";

interface ServiceVerticalScrollListProps {
  items: { title: string; imageUrl: string }[];
}

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

const ServiceVerticalScrollList: React.FC<ServiceVerticalScrollListProps> = ({
  items,
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
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflowX: "hidden",
        padding: "0 0 100px 0",
        overflowY: "hidden",
      }}
      ref={scrollContainerRef}
    >
      <Box
        sx={{
          display: "flex",
          transition: "transform 0.3s ease",
          transform: `translateX(${scrollPosition}px)`,
        }}
      >
        {items.map((item, index) => (
          <Box key={index} sx={{ margin: "0 10px" }}>
            <ServiceCard title={item.title} imageUrl={item.imageUrl} />
          </Box>
        ))}
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

export default ServiceVerticalScrollList;
