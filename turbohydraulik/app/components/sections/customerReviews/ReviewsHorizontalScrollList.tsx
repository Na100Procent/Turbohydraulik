"use client";

import { Box, useMediaQuery } from "@mui/material";
import React, { useMemo } from "react";
import { useSpring, animated } from "@react-spring/web";
import ReviewCard, { ReviewCardProps } from "./components/ReviewCard";
import theme from "@/app/theme/theme";
import { getCityReviewsList } from "./helpers/getCityReviewsList";
import { useInView } from "react-intersection-observer";

interface ReviewsHorizontalScrollListProps {
  citySlug?: string;
}

const ReviewsHorizontalScrollList: React.FC<
  ReviewsHorizontalScrollListProps
> = ({ citySlug }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animationDest = isMobile ? "-600%" : "-100%";
  const scrollAnimation = useSpring({
    from: { transform: "translateX(-3%)" },
    to: { transform: `translateX(${animationDest})` },
    loop: true,
    config: { duration: 40000 },
    pause: !inView,
  });

  const AnimatedBox = animated(Box);

  const filteredReviews = useMemo(
    () => getCityReviewsList(citySlug),
    [citySlug]
  );

  return (
    <Box ref={ref} sx={{ overflow: "hidden", mb: "50px" }}>
      {inView && (
        <AnimatedBox
          style={{
            ...scrollAnimation,
            display: "flex",
          }}
        >
          {filteredReviews.map((review: ReviewCardProps, index: number) => (
            <Box key={index} sx={{ margin: "0 10px" }}>
              <ReviewCard {...review} />
            </Box>
          ))}
        </AnimatedBox>
      )}
    </Box>
  );
};

export default ReviewsHorizontalScrollList;
