import React from "react";
import { Box, Typography } from "@mui/material";
import theme from "@/app/theme/theme";
import Score from "./Score";
import HorizontalSeparator from "../../footer/components/HorizontalSeparator";
import { GoogleIcon } from "@/public/assets/icons/icons";

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
    minWidth: {
      xl: "500px",
      lg: "500px",
      md: "450px",
      sm: "400px",
      xs: "350px",
      xxs: "350px",
    },
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
          borderTop: `2px solid ${isFirst ? "white" : "gray"}`,
          width: "100%",
          mt: "20px",
        }}
      />
      <Typography
        minHeight="190px"
        sx={{ fontFamily: "UniteaSans", fontWeight: "500" }}
      >
        {review}
      </Typography>
    </Box>
  );
};

export default ReviewCard;
