import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import theme from "@/app/theme/theme";
import { ServiceData } from "@/app/data/types";
import Link from "next/link";

interface Props {
  cityName?: string;
  service: ServiceData;
}

const container = {
  minWidth: "350px",
  width: "100%",
  height: "400px",
  borderRadius: "12px",
  overflow: "hidden",
  backgroundColor: "#f5f5f5",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxShadow: 2,
};
const imgSx = {
  marginTop: "10px",
  width: "90%",
  height: "65%",
  objectFit: "cover",
};
const ServiceCard = ({ cityName, service }: Props) => {
  return (
    <Box sx={container}>
      <Box
        component="img"
        src="https://github.com/user-attachments/assets/b9581ef8-d7c5-407f-b233-4fad19ee0f70"
        sx={imgSx}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: theme.palette.primary.main,
            width: "100%",
            maxWidth: "200px",
          }}
        >
          {service.name + " " + cityName}
        </Typography>

        <Link href={`${service.slug}`}>
          <IconButton
            sx={{
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.primary.main,
            }}
          >
            <ArrowOutwardIcon />
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
};

export default ServiceCard;
