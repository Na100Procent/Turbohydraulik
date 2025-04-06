"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import theme from "@/app/theme/theme";
import { CityData } from "@/app/data/types/dataTypes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { serviceCardUrl } from "@/app/constants/imagesUrls";

interface Props {
  city?: CityData;
  service: {
    name: string;
    slug: string;
    serviceImgUrl?: string;
    cardDescription: string;
  };
}

const container = {
  width: {
    xl: "400px",
    lg: "400px",
    md: "400px",
    sm: "400px",
    xs: "310px",
    xxs: "310px",
  },

  height: "100%",
  borderRadius: "12px",
  overflow: "hidden",
  backgroundColor: theme.palette.custom.background,
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  padding: "15px",
  transition: "background-color 0.3s ease, scale 0.3s ease",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: "rgba(243, 239, 239, 0.9)",
    scale: 1.05,
  },
};

const imgSx = {
  height: "100%",
  maxHeight: {
    xl: "200px",
    lg: "200px",
    md: "200px",
    sm: "200px",
    xs: "200px",
    xxs: "200px",
  },
  objectFit: "cover",
};

const titleSx = {
  fontWeight: "bold",
  color: theme.palette.primary.main,
  width: "100%",
  pt: "20px",
  textAlign: "left",
  fontSize: "20px",
};

const descriptionSx = {
  color: theme.palette.custom.darkGray,
  maxWidth: "400px",
  fontFamily: "UniteaSans",
  fontWeight: 500,
  pt: "10px",
  overflow: "hidden",
};

const ServiceCard = ({ city, service }: Props) => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  let newPath = `/${service.slug}`;
  if (pathSegments.length > 0 && city?.slug) {
    newPath = `/${city.slug}/${service.slug}`;
  }

  const cityTitle = city ? city.name : "";
  const serviceImg = service.serviceImgUrl || serviceCardUrl;

  return (
    <Link href={newPath}>
      <Box sx={container}>
        <Box
          component="img"
          src={serviceImg}
          sx={imgSx}
          alt={`Turbo hydraulik ${cityTitle} ${service.name}`}
        />
        <Typography variant="h3" sx={titleSx}>
          {service.name}
        </Typography>
        <Typography sx={descriptionSx}>{service.cardDescription}</Typography>
      </Box>
    </Link>
  );
};

export default ServiceCard;
