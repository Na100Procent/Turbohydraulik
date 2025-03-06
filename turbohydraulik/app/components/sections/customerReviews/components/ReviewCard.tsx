import React from "react";
import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import theme from "@/app/theme/theme";

interface ReviewCardProps {
  reviewer: string;
  review: string;
  score: number;
  index: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  reviewer,
  review,
  score,
  index,
}) => {
  const blue = theme.palette.primary.main;
  const gold = theme.palette.secondary.main;

  const isFirst = !index;
  const container = {
    padding: "50px 30px",
    background: isFirst ? blue : theme.palette.custom.background,
    borderRadius: "8px",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
    width: "100%",
    minWidth: "400px",
    color: isFirst ? theme.palette.custom.background : blue,
  };
  return (
    <Box sx={container}>
      <Typography
        variant="h5"
        fontWeight="700"
        color={isFirst ? gold : blue}
        sx={{ fontFamily: "UniteaSans" }}
      >
        {reviewer}
      </Typography>
      <Typography
        minHeight="130px"
        mt={1}
        sx={{ fontFamily: "UniteaSans", fontWeight: "500" }}
      >
        {review}
      </Typography>
      <Box display="flex" alignItems="center" mt={3}>
        {Array.from({ length: 5 }).map((_, index) => (
          <StarIcon
            key={index}
            sx={{
              color: index < score ? gold : "#ccc",
              fontSize: "20px",
            }}
          />
        ))}
        <Typography ml={1} color={gold}>
          {score}/5
        </Typography>
      </Box>
    </Box>
  );
};

export default ReviewCard;
