import React from "react";
import { Box, Typography } from "@mui/material";
import theme from "@/app/theme/theme";
import { ServiceData } from "@/app/data/types";
import Link from "next/link";

interface Props {
  cityName?: string;
  service: ServiceData;
}

const container = {
  width: {
    xl: "400px",
    lg: "400px",
    md: "400px",
    sm: "350px",
    xs: "350px",
    xxs: "350px",
  },

  height: "470px",
  borderRadius: "12px",
  overflow: "hidden",
  backgroundColor: theme.palette.custom.background,
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  padding: "10px 20px 60px 20px",
};
const imgSx = {
  marginTop: "10px",
  height: "65%",
  maxHeight: "300px",
  objectFit: "cover",
};

const titleSx = {
  fontWeight: "bold",
  color: theme.palette.primary.main,
  width: "100%",
  maxWidth: "250px",
  mt: "20px",
  textAlign: "left",
  fontSize: "20px",
};

const descriptionSx = {
  color: theme.palette.custom.darkGray,
  maxWidth: "400px",
  fontFamily: "UniteaSans",
  fontWeight: 500,
  opacity: 0.8,
  mt: "5px",
};
const ServiceCard = ({ cityName, service }: Props) => {
  return (
    <Link href={`${service.slug}`}>
      <Box sx={container}>
        <Box
          component="img"
          src="https://github.com/user-attachments/assets/b9581ef8-d7c5-407f-b233-4fad19ee0f70"
          sx={imgSx}
        />

        <Typography sx={titleSx}>{service.name + " " + cityName}</Typography>
        <Typography sx={descriptionSx}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui dolores
          enim officiis suscipit aperiam tenetur recusandae illo accusantium.
          Fugit, nam.
        </Typography>
      </Box>
    </Link>
  );
};

export default ServiceCard;
