"use client";

import { Box, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import ReviewCard, { ReviewCardProps } from "./components/ReviewCard";
import theme from "@/app/theme/theme";
import reviewsData from "../../../data/reviewsData.json";

const ReviewsHorizontalScrollList = () => {
  const [start, setStart] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const animationDest = isMobile ? "-600%" : "-100%";
  const scrollAnimation = useSpring({
    from: { transform: "translateX(-3%)" },
    to: {
      transform: start ? `translateX(${animationDest})` : "translateX(-3%)",
    },
    loop: true,
    config: { duration: 20000 },
  });
  const AnimatedBox = animated(Box);

  const mappedServiceElements = reviewsData.map(
    (review: ReviewCardProps, index) => (
      <Box key={index} sx={{ margin: "0 10px" }}>
        <ReviewCard {...review} />
      </Box>
    )
  );

  useEffect(() => {
    setStart(true);
  }, []);

  return (
    <AnimatedBox
      style={{
        ...scrollAnimation,
        display: "flex",
        marginBottom: "50px",
      }}
    >
      {mappedServiceElements}
    </AnimatedBox>
  );
};

export default ReviewsHorizontalScrollList;
