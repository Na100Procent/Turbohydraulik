"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import theme from "@/app/theme/theme";
import { CityData } from "@/app/data/types/dataTypes";

interface Props {
  city?: CityData;
  subService: {
    name: string;
    slug: string;
    description: string;
  };
}

const container = {
  borderRadius: "12px",
  overflow: "hidden",
  backgroundColor: theme.palette.custom.background,
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  padding: "10px 20px 60px 20px",
  transition: "background-color 0.3s ease, scale 0.3s ease",

  mt: "10px",
  height: "100%",
  maxHeight: {
    xl: "430px",
    lg: "500px",
    md: "500px",
    sm: "500px",
    xs: "1000px",
    xxs: "1000px",
  },
};

const titleSx = {
  fontWeight: "bold",
  color: theme.palette.primary.main,
  width: "100%",
  mt: "20px",
  textAlign: "left",
  fontSize: "20px",
  mb: "10px",
  minHeight: "60px",
};
const descriptionSx = {
  color: theme.palette.custom.darkGray,

  fontWeight: 500,
  opacity: 0.8,
  mt: "5px",
};

const SubServiceCard = ({ city, subService }: Props) => {
  const { name, description } = subService;

  const cityTitle = city ? city?.name : "";
  return (
    <Box sx={container}>
      <Typography variant="h3" sx={titleSx}>
        {name + " " + cityTitle}
      </Typography>
      <Typography sx={descriptionSx}>{description}</Typography>
    </Box>
  );
};

export default SubServiceCard;
