import { Box, Typography } from "@mui/material";
import React from "react";
import TopMenuButton from "./TopMenuButton";
import theme from "@/app/theme/theme";
import { sectionIds } from "@/app/constants/appConstants";

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
      <TopMenuButton title="Home" section={sectionIds.home} />
      <Separator />
      <TopMenuButton title="About Us" section={sectionIds.about} />
      <Separator />
      <TopMenuButton title="Order us" section={sectionIds.orderUs} />
      <Separator />
      <TopMenuButton title="Reviews" section={sectionIds.reviews} />
      <Separator />
      <TopMenuButton title="Projects" section={sectionIds.projects} />
      <Separator />
      <TopMenuButton title="FAQ's" section={sectionIds.faq} />
    </Box>
  );
};

export default TopMenuButtons;
