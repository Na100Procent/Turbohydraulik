"use client";
import React, { useRef, JSX } from "react";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import theme from "@/app/theme/theme";

interface HorizontalScrollListProps {
  mappedItems: JSX.Element[];
}

const container = {
  width: "100%",
  overflow: "hidden",
  padding: "0 0 60px 0",
};

const HorizontalScrollList: React.FC<HorizontalScrollListProps> = ({
  mappedItems,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -250, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 250, behavior: "smooth" });
  };

  return (
    <Box sx={container}>
      <Box
        ref={scrollContainerRef}
        sx={{
          display: "flex",
          gap: "20px",
          overflowX: "auto",
          scrollBehavior: "smooth",
          paddingBottom: "20px",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          overflowY: "visible",
          touchAction: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {mappedItems}
      </Box>

      {!isMobile && (
        <>
          <IconButton
            aria-label="scroll left"
            onClick={scrollLeft}
            sx={{
              position: "absolute",
              left: "10px",
              top: "59%",
              transform: "translateY(-50%)",
              zIndex: 1,
              color: theme.palette.secondary.main,
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <IconButton
            aria-label="scroll right"
            onClick={scrollRight}
            sx={{
              position: "absolute",
              right: "10px",
              top: "59%",
              transform: "translateY(-50%)",
              zIndex: 1,
              color: theme.palette.secondary.main,
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </>
      )}
    </Box>
  );
};

export default HorizontalScrollList;
