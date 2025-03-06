import { reviewsCardsData } from "@/app/constants/mockedData";
import { Box } from "@mui/material";
import React from "react";
import HorizontalScrollList from "../../shared/HorizontalScrollList";
import ReviewCard from "./components/ReviewCard";

const ReviewsHorizontalScrollList = () => {
  const mappedServiceElements = reviewsCardsData.map((review, index) => (
    <Box key={index} sx={{ margin: "0 10px" }}>
      <ReviewCard {...review} index={index} />
    </Box>
  ));
  return <HorizontalScrollList mappedItems={mappedServiceElements} />;
};

export default ReviewsHorizontalScrollList;
