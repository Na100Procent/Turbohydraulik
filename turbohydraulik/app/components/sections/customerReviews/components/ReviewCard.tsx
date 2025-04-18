import React from "react";
import { Box, Typography } from "@mui/material";
import theme from "@/app/theme/theme";
import Score from "./Score";
import HorizontalSeparator from "../../footer/components/HorizontalSeparator";
import { GoogleIcon } from "@/public/assets/icons/icons";

export interface ReviewCardProps {
  reviewerName: string;
  review: string;
  score: number;
}
const ReviewCard: React.FC<ReviewCardProps> = ({
  reviewerName,
  review,
  score,
}) => {
  const blue = theme.palette.primary.main;

  const container = {
    padding: "30px 30px",
    background: theme.palette.custom.background,
    borderRadius: "8px",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
    width: "100%",
    minWidth: {
      xl: "500px",
      lg: "500px",
      md: "450px",
      sm: "400px",
      xs: "350px",
      xxs: "350px",
    },
    color: blue,
  };
  return (
    <Box sx={container}>
      <Typography
        fontWeight="700"
        color={blue}
        sx={{ height: "50px", fontSize: "25px" }}
      >
        {reviewerName}
      </Typography>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Score score={score} />
        <Box position={"relative"} top="10px" right="10px">
          <GoogleIcon />
        </Box>
      </Box>

      <HorizontalSeparator
        addSx={{
          opacity: 0.1,
          borderTop: `2px solid ${"gray"}`,
          width: "100%",
          mt: "20px",
        }}
      />
      <Typography
        minHeight="160px"
        sx={{
          fontWeight: "500",
        }}
      >
        {review}
      </Typography>
    </Box>
  );
};

export default ReviewCard;
