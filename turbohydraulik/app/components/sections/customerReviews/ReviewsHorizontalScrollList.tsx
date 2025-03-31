"use client";

import { Box, useMediaQuery } from "@mui/material";
import React, { useEffect, useState, useMemo } from "react";
import { useSpring, animated } from "@react-spring/web";
import ReviewCard, { ReviewCardProps } from "./components/ReviewCard";
import theme from "@/app/theme/theme";
import { getCityReviewsList } from "./helpers/getCityReviewsList";

interface ReviewsHorizontalScrollListProps {
  citySlug?: string;
}

const ReviewsHorizontalScrollList: React.FC<
  ReviewsHorizontalScrollListProps
> = ({ citySlug }) => {
  const [start, setStart] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const animationDest = isMobile ? "-600%" : "-100%";
  const scrollAnimation = useSpring({
    from: { transform: "translateX(-3%)" },
    to: { transform: `translateX(${animationDest})` },
    loop: true,
    config: { duration: 20000 },
  });

  const AnimatedBox = animated(Box);

  const filteredReviews = useMemo(
    () => getCityReviewsList(citySlug),
    [citySlug]
  );

  useEffect(() => {
    setStart(true);
  }, []);

  return (
    <AnimatedBox
      key={start.toString()}
      style={{
        ...scrollAnimation,
        display: "flex",
        marginBottom: "50px",
      }}
    >
      {filteredReviews.map((review: ReviewCardProps, index: number) => (
        <Box key={index} sx={{ margin: "0 10px" }}>
          <ReviewCard {...review} />
        </Box>
      ))}
    </AnimatedBox>
  );
};

export default ReviewsHorizontalScrollList;
