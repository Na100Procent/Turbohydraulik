import theme from "@/app/theme/theme";
import { Box, Typography } from "@mui/material";
import React from "react";

interface Props {
  number: number;
}
const CircularNumber = ({ number }: Props) => {
  const numColor =
    number === 2 ? theme.palette.custom.background : theme.palette.primary.main;

  const numBg =
    number === 2 ? theme.palette.primary.main : theme.palette.secondary.main;
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: "-70px",
        width: "120px",
        height: "120px",
        borderRadius: "50%",
        border: `2px dashed ${numBg}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10,
      }}
    >
      <Box
        sx={{
          width: "calc(100% - 6px)",
          height: "calc(100% - 6px)",
          borderRadius: "50%",
          border: "5px solid white",
          backgroundColor: numBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "50px",
            color: numColor,
            letterSpacing: "-2px",
          }}
        >
          0{number}
        </Typography>
      </Box>
    </Box>
  );
};

export default CircularNumber;
