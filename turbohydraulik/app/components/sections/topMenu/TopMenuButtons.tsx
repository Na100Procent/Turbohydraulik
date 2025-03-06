import { Box, Typography } from "@mui/material";
import React from "react";
import TopMenuButton from "./TopMenuButton";
import theme from "@/app/theme/theme";

const Separator = () => (
  <Typography
    sx={{
      color: theme.palette.custom.darkGray,
      fontSize: "40px",
      position: "relative",
    }}
  >
    .
  </Typography>
);

const container = {
  display: "flex",
  alignItems: "end",
  justifyContent: "center",
  gap: "12px",
};
const TopMenuButtons = () => {
  return (
    <Box sx={container}>
      <TopMenuButton title="Home" />
      <Separator />
      <TopMenuButton title="About Us" />
      <Separator />
      <TopMenuButton title="Order us" />
      <Separator />
      <TopMenuButton title="Reviews" />
      <Separator />
      <TopMenuButton title="Projects" />
      <Separator />
      <TopMenuButton title="FAQ's" />
    </Box>
  );
};

export default TopMenuButtons;
