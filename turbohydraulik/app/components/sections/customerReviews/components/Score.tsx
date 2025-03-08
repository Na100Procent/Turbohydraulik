import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import React from "react";
import theme from "@/app/theme/theme";

interface Props {
  score: number;
}
const Score = ({ score }: Props) => {
  const gold = theme.palette.secondary.main;

  return (
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
      <Typography fontSize="13px" ml={2} position="relative" top="2px">
        {score}.0 Star Reviews
      </Typography>
    </Box>
  );
};

export default Score;
